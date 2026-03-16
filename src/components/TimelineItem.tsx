// src/components/TimelineItem.tsx

import type { TimelineEntry } from '../types';

interface TimelineItemProps {
  entry: TimelineEntry;
}

export const TimelineItem = ({ entry }: TimelineItemProps) => {
  return (
    <article className="relative pl-8 pb-12 last:pb-0 border-l border-border">
      <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-accent" />
      <div className="mb-2">
        <span className="text-xs font-mono text-text-subtle">
          {entry.period}
        </span>
      </div>
      <h3 className="font-serif text-xl text-text-primary mb-1">
        {entry.title}
      </h3>
      <p className="text-text-muted mb-3">{entry.organization}</p>
      <ul className="space-y-1">
        {entry.description.map((item, index) => (
          <li key={index} className="text-sm text-text-muted">
            · {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
