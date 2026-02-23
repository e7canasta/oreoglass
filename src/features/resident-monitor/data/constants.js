/* Static fixtures for the resident monitor demo */
const CLIPS = [
  {
    id: 0,
    room: "513",
    location: "Bellevue",
    resident: "Gertrude",
    event: "Sitting on bed edge",
    label: "Fall with injury",
    labelColor: "#e8430a",
    time: "05:29 – 05:35",
    date: "21st July",
    reaction: "2m 34s",
    timeOnFloor: "11m",
  },
  {
    id: 1,
    room: "406",
    location: "Alma Way",
    resident: "Luca",
    event: "Laying on floor",
    label: "Fall without injury",
    labelColor: "#c84000",
    time: "03:12 – 03:18",
    date: "21st July",
    reaction: "34s",
    timeOnFloor: "3m",
  },
  {
    id: 2,
    room: "210",
    location: "Alma Way",
    resident: "Anne",
    event: "Standing near bed",
    label: "Fall with injury",
    labelColor: "#e8430a",
    time: "01:44 – 01:50",
    date: "20th July",
    reaction: "15s",
    timeOnFloor: "5m",
  },
  {
    id: 3,
    room: "223",
    location: "Bellevue",
    resident: "John",
    event: "Unsteady transfer",
    label: "Fall without injury",
    labelColor: "#c84000",
    time: "22:08 – 22:14",
    date: "19th July",
    reaction: "2m 34s",
    timeOnFloor: "2m",
  },
  {
    id: 4,
    room: "405",
    location: "Alma Way",
    resident: "Nicolai",
    event: "Out of bed without support",
    label: "Fall with injury",
    labelColor: "#e8430a",
    time: "14:33 – 14:39",
    date: "18th July",
    reaction: "1m 08s",
    timeOnFloor: "9m",
  },
];


const ROOMS = {
  "Alma Way":[
    {number:"206",location:"Alma Way",status:"out",dotColor:"#4a90e2",dots:["blue"]},
    {number:"210",location:"Alma Way",status:"sleep",dotColor:"#f5c842",dots:["yellow","person"]},
    {number:"405",location:"Alma Way",status:"sleep",dotColor:"#f5c842",dots:["yellow"]},
    {number:"406",location:"Alma Way",status:"sleep",dotColor:"#f5c842",dots:["yellow"]},
  ],
  "Bellevue":[
    {number:"223",location:"Bellevue",status:"out",dotColor:"#4a90e2",dots:["blue"]},
    {number:"513",location:"Bellevue",status:"alert",dotColor:"#e8621a",dots:["orange"]},
  ],
};

/* ══════════════════════════════════════
   COUNTDOWN WIDGET
══════════════════════════════════════ */

export { CLIPS, ROOMS };
