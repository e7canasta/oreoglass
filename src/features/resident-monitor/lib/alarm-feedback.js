const clampSeconds = (secondsAgo) => {
  const numericValue = Number(secondsAgo);
  if (!Number.isFinite(numericValue)) {
    return 0;
  }

  return Math.max(0, numericValue);
};

const getAlarmFeedbackProfile = (secondsAgo = 0) => {
  const seconds = clampSeconds(secondsAgo);

  if (seconds < 15) {
    return {
      intervalMs: 2600,
      vibrationPattern: [220, 80, 320, 110, 460],
      tones: [
        { delay: 0, frequency: 560, duration: 0.22, peak: 0.05 },
        { delay: 0.23, frequency: 704, duration: 0.26, peak: 0.072 },
      ],
    };
  }

  if (seconds < 45) {
    return {
      intervalMs: 2200,
      vibrationPattern: [260, 70, 360, 95, 520],
      tones: [
        { delay: 0, frequency: 590, duration: 0.23, peak: 0.064 },
        { delay: 0.21, frequency: 736, duration: 0.27, peak: 0.09 },
      ],
    };
  }

  return {
    intervalMs: 1800,
    vibrationPattern: [300, 60, 420, 90, 620],
    tones: [
      { delay: 0, frequency: 620, duration: 0.24, peak: 0.08 },
      { delay: 0.18, frequency: 760, duration: 0.29, peak: 0.115 },
    ],
  };
};

const getAudioContextConstructor = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.AudioContext ?? window.webkitAudioContext ?? null;
};

const scheduleAlarmTone = (audioContext, startTime, { frequency, duration, peak }) => {
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.92, startTime + duration);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1800, startTime);
  filter.Q.value = 0.9;

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(peak, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
};

const playAlarmAudioBurst = (audioContext, feedbackProfile) => {
  const start = audioContext.currentTime + 0.02;
  const tones = feedbackProfile?.tones ?? getAlarmFeedbackProfile(0).tones;

  tones.forEach((tone) => {
    scheduleAlarmTone(audioContext, start + (tone.delay ?? 0), tone);
  });
};

const createAlarmAudioController = () => {
  const AudioContextConstructor = getAudioContextConstructor();

  if (!AudioContextConstructor) {
    return null;
  }

  const audioContext = new AudioContextConstructor({ latencyHint: "interactive" });

  const resume = async () => {
    if (audioContext.state === "closed") {
      return false;
    }

    if (audioContext.state === "suspended") {
      try {
        await audioContext.resume();
      } catch {
        return false;
      }
    }

    return audioContext.state === "running";
  };

  const playBurst = async (feedbackProfile) => {
    const ready = await resume();
    if (!ready) {
      return false;
    }

    playAlarmAudioBurst(audioContext, feedbackProfile);
    return true;
  };

  const dispose = async () => {
    if (audioContext.state === "closed") {
      return;
    }

    try {
      await audioContext.close();
    } catch {
      // ignore close errors during teardown
    }
  };

  return {
    resume,
    playBurst,
    dispose,
  };
};

export { createAlarmAudioController, getAlarmFeedbackProfile };
