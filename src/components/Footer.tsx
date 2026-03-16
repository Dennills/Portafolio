// src/components/Footer.tsx

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-base py-5">
      <div className="container mx-auto px-5">
        <p className="text-sm text-text-subtle text-center">
          © {year} Dennis Aguilar
          <br />
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};
