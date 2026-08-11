import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import ComplaintForm from '@/components/ComplaintForm';
import { ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen w-full text-slate-900">
      <AnimatedBackground />
      <Header />

      <main className="mx-auto w-full max-w-2xl px-4 pb-12">
        <ComplaintForm />

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>CivicSnap.AI — a citizen-first civic reporting platform.</span>
        </div>
      </main>
    </div>
  );
}

export default App;
