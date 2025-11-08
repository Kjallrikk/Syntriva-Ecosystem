export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black/60">
      <div className="container-core py-4 text-xs flex flex-col sm:flex-row gap-2 items-center justify-between text-slate-500">
        <span>© {new Date().getFullYear()} Syntriva Ecosystem</span>
        <span>AI-native income infrastructure blueprint</span>
      </div>
    </footer>
  );
}
