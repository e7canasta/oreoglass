import { IconInBed } from "./icons.jsx";
import {
  IconArrowRight,
} from "./ui-icons/index.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import "./overview-action-sheet.css";

const OverviewActionSheet = ({
  open,
  onOpenChange,
  onOpenCriticalEvents,
  onOpenLatestActivity,
  onOpenComponentLab,
}) => {
  const quickActions = [
    { id: "fall", label: "Fall clips", arrow: true, badge: 6, tone: "critical", onClick: onOpenCriticalEvents },
    { id: "mute", label: "Mute for\n10 minutes", tone: "neutral" },
    { id: "latest", label: "Latest\nActivity", arrow: true, tone: "neutral", onClick: onOpenLatestActivity },
    onOpenComponentLab
      ? { id: "lab", label: "Component\nLab", arrow: true, tone: "muted", onClick: onOpenComponentLab }
      : { id: "soon", label: "Coming\nsoon", isBlank: true, tone: "blank" },
  ];

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent
        showHandle={false}
        overlayClassName="overview-sheet-overlay"
        className="overview-sheet-root"
        aria-label="Quick actions"
      >
        <div className="overview-sheet-handle" />
        <div className="overview-sheet-header">
          <span className="overview-sheet-title">Quick actions</span>
          <span className="overview-sheet-subtitle">Triage and response shortcuts</span>
        </div>
        <div className="overview-sheet-grid">
          {quickActions.map((btn, i) => (
            <Button
              type="button"
              variant="unstyled"
              size="unstyled"
              key={btn.id ?? i}
              onClick={btn.onClick}
              className={`overview-sheet-action overview-sheet-action-${btn.tone}`}
              aria-label={btn.label ? btn.label.replace("\n", " ") : undefined}
            >
              {btn.label && <span className="overview-sheet-action-label">{btn.label}</span>}
              {btn.badge && (
                <Badge variant="unstyled" className="overview-sheet-action-badge">{btn.badge}</Badge>
              )}
              {btn.isBlank && (
                <span className="overview-sheet-action-placeholder">
                  <IconInBed size={32} />
                </span>
              )}
              {btn.arrow && <span className="overview-sheet-action-arrow"><IconArrowRight /></span>}
            </Button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { OverviewActionSheet };
