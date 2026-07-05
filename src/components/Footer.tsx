export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="display text-lg text-bone">GAYATHMI<span className="text-terra">.</span></p>
        <p className="label text-ash">© {new Date().getFullYear()}. Built from scratch in Sri Lanka</p>
      </div>
    </footer>
  );
}
