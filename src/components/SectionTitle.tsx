// src/components/SectionTitle.tsx

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionTitle = ({ children, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
};
