import { useEffect, useRef, useState } from "react";
import type { PlayerBadge } from "../utils/badges";

interface PlayerBadgeChipProps {
  badge: PlayerBadge;
}

function rankGlow(rank: number, isWeight: boolean): string {
  if (isWeight || rank === 1) {
    return "border-veda-gold/50 text-veda-gold shadow-[0_0_10px_-2px] shadow-veda-gold/50";
  }
  if (rank === 2)
    return "border-veda-silver/40 text-veda-silver shadow-[0_0_8px_-3px] shadow-veda-silver/40";
  if (rank === 3)
    return "border-veda-bronze/40 text-veda-bronze shadow-[0_0_8px_-3px] shadow-veda-bronze/40";
  return "border-veda-border text-veda-text-secondary";
}

export function PlayerBadgeChip({ badge }: PlayerBadgeChipProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(closeTimer.current);
  }, []);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setClosing(false);
    setVisible(true);
  };

  const hide = () => {
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 350);
  };

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
    >
      <span
        className={`inline-flex items-center gap-1 rounded-md border bg-veda-bg/60 px-2 py-0.5 text-[10px] sm:text-xs font-medium tabular-nums glass ${rankGlow(badge.rank, badge.isWeight)}`}
      >
        <span>{`#${badge.rank}`}</span>
        <span aria-hidden="true">
          {badge.isWeight ? "\u{1F451}" : "\u{1F3C5}"}
        </span>
      </span>

      {visible && (
        <span
          role="tooltip"
          className={`pointer-events-none absolute bottom-full left-1/2 z-50 mb-1.5 w-max max-w-55 rounded-md border border-veda-border bg-veda-surface/95 px-2.5 py-1.5 text-[10px] sm:text-xs font-medium text-veda-text shadow-lg glass ${
            closing ? "tooltip-out" : "tooltip-in"
          }`}
        >
          {badge.tooltip}
        </span>
      )}
    </span>
  );
}
