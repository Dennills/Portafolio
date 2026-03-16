// src/components/SkillBadge.tsx

interface SkillBadgeProps {
  children: React.ReactNode;
}

export const SkillBadge = ({ children }: SkillBadgeProps) => {
  return (
    <span className="px-3 py-2 rounded border border-border bg-bg-surface text-sm text-text-primary hover:border-accent/30 transition-colors">
      {children}
    </span>
  );
};
