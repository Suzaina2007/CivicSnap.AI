import { Building2 } from 'lucide-react';

function Header() {
  return (
    <header className="w-full pt-10 pb-6 px-4 text-center">
      <div className="inline-flex items-center justify-center gap-2.5 mb-3">
        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md" />
          <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Building2 className="h-6 w-6 text-white" strokeWidth={2.2} />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          CivicSnap<span className="text-blue-600">.AI</span>
        </h1>
      </div>
      <p className="text-sm sm:text-base text-slate-600 font-medium">
        Snap it. Report it. Improve your city.
      </p>
    </header>
  );
}

export default Header;
