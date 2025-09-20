import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <motion.h1
            className="text-4xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Moonlight & Gunpowder
          </motion.h1>
          <p className="mt-4 text-lg text-slate-200 md:text-xl">
            A post‑Napoleonic romance of grief, honor, and the dangerous spark of first love.
          </p>
        </div>
      </section>
    </div>
  );
}
