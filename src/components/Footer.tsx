export function Footer() {
  return (
    <footer className="mt-auto border-t border-sky-100 bg-white">
      <div className="mx-auto max-w-[1920px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-sky-800/80">
            © {new Date().getFullYear()}{" "}
            {/* TODO: nome legale / P.IVA su richiesta */}
            <span className="font-medium text-sky-950">Waterbike Tours</span>
          </p>
          <p className="max-w-md text-sm text-sky-700/70">
            {/* TODO: indirizzo, email o link social */}
            Sito in allestimento — contenuti da personalizzare.
          </p>
        </div>
      </div>
    </footer>
  );
}
