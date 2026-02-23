import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const BottomSheetShell = ({
  open = true,
  onOpenChange,
  onClose,
  overlayClassName,
  className,
  ariaLabel,
  sheetBehavior,
  children,
}) => {
  const handleOpenChange = (nextOpen) => {
    onOpenChange?.(nextOpen);

    if (!nextOpen) {
      onClose?.();
    }
  };

  return (
    <Drawer
      open={open}
      onOpenChange={handleOpenChange}
      direction="bottom"
      {...sheetBehavior}
    >
      <DrawerContent
        showHandle={false}
        overlayClassName={cn("[z-index:var(--rm-z-sheet-overlay)]", overlayClassName)}
        className={cn("[z-index:var(--rm-z-sheet-content)]", className)}
        aria-label={ariaLabel}
      >
        {children}
      </DrawerContent>
    </Drawer>
  );
};

const BottomSheetHandle = ({ className, wrapperClassName }) => (
  <div className={cn("flex justify-center", wrapperClassName)}>
    <div
      className={cn(
        "h-[var(--rm-sheet-handle-height)] w-[var(--rm-sheet-handle-width)] rounded-[2px]",
        className,
      )}
    />
  </div>
);

export { BottomSheetHandle, BottomSheetShell };
