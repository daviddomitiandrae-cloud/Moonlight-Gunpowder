import { useState } from "react";
import { motion } from "framer-motion";

// Lightweight UI primitives (no external deps)
const cx = (...c) => c.filter(Boolean).join(" ");
const Button = ({ variant, className = "", children, ...props }) => (
  <button
    className={cx(
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
      variant === "outline"
        ? "border border-white/20 bg-transparent text-slate-100 hover:bg-white/10"
        : "bg-white text-slate-900 hover:bg-slate-200",
      "shadow/50 shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
const Card = ({ className = "", children }) => (
  <div className={cx("rounded-2xl p-0 shadow-lg ring-1 ring-white/10", className)}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="px-5 pt-5 pb-2">{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <h3 className={cx("text-lg font-semibold", className)}>{children}</h3>
);
const CardContent = ({ className = "", children }) => (
  <div className={cx("px-5 pb-5", className)}>{children}</div>
);
const Input = ({ className = "", ...props }) => (
  <input
    className={cx(
      "w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/20",
      className
    )}
    {...props}
  />
);
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={cx(
      "w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/20",
      className
    )}
    {...props}
  />
);
const Badge = ({ className = "", children }) => (
  <span className={cx("inline-flex items-center rounded-xl bg-white/10 px-3 py-1 text-xs", className)}>{children}</span>
);

const BOOK_TITLE = "Moonlight & Gunpowder";
const TAGLINE = "A post‑Napoleonic romance of grief, honor, and the dangerous spark of first love.";

export default function BookSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="font-semibold tracking-wide text-slate-100">
              {BOOK_TITLE}
            </a>
            <nav className="hidden gap-6 md:flex">
              {[
                ["About", "#about"],
                ["Sample", "#excerpt"],
                ["Full Book", "#fullbook"],
                ["Author", "#author"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-slate-200 hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {BOOK_TITLE}
            </motion.h1>
            <p className="mt-4 text-lg text-slate-200 md:text-xl">{TAGLINE}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge className="rounded-xl">Hardcover</Badge>
              <Badge className="rounded-xl">eBook</Badge>
              <Badge className="rounded-xl">Audiobook</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#excerpt"><Button variant="outline" className="rounded-2xl px-6">Read a Sample</Button></a>
              <a href="#fullbook"><Button variant="outline" className="rounded-2xl px-6">Read Full Book</Button></a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1544937950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop"
              alt="Book cover"
              className="mx-auto aspect-[3/4] w-72 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 md:w-80"
            />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">About the Book</h2>
            <p className="mt-4 text-slate-200">
              In the uneasy calm after Napoleon’s fall, war‑made Duke Séverin de Derbois retreats to Château de Meslay—until a wedding draws him back into society and into the orbit of Bethania Lenoir, a luminous seventeen‑year‑old whose wit and quiet courage unsettle the veteran’s guarded heart. What begins as a charged encounter becomes a correspondence of souls: faith, philosophy, and music thread their letters as Séverin rediscovers hope beyond the battlefield. But family turmoil, sharp‑eyed sisters, and a single hasty letter from a wounded pride threaten to shatter a bond that feels providential. From Loire Valley salons to the training floor where he tempers fear into resolve, Séverin must learn a harder discipline than war—patience, humility, and the bravery to love again.
            </p>
            <p className="mt-4 text-slate-200">
              A sweeping, intimate tale of dignity and desire, Moonlight & Gunpowder kindles a slow‑burn romance against the embers of empire—where a man haunted by loss meets a young woman strong enough to see him clearly, and a single evening may alter two destinies.
            </p>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section id="excerpt" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold md:text-4xl">Read a Sample</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-slate-100">
          <p><em>“It is a truth universally acknowledged, that a gentleman returned from war and blessed with the fortune of noble recognition must soon find himself the subject of all manner of social scrutiny.”</em></p>
          <p className="mt-4">So it is with the Duc de Derbois—Séverin—whose laurels mean little beside the ache of widowhood. Drawn to a wedding in the Loire, he intends merely to endure the evening—until a young woman in a dark‑blue gown passes like a sudden chord in a silent room. Bethania Lenoir does not simper, nor shrink. In a brief exchange by the grand staircase—barefoot on cool marble, candles wavering—something unnamed takes root. He leaves resolved to forget it. Fate does not oblige.</p>
        </div>
      </section>

      {/* Full Book */}
      <section id="fullbook" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold md:text-4xl">Read the Full Book</h2>
        <p className="mt-3 text-slate-300">Free full-text access. Read inline or download the PDF.</p>
        <div className="mt-6 w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            src="/book/Moonlight-and-Gunpowder.pdf#view=FitH"
            title="Moonlight & Gunpowder — Full Book"
            className="h-[80vh] w-full"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/book/Moonlight-and-Gunpowder.pdf" download>
            <Button className="rounded-2xl px-6">Download PDF</Button>
          </a>
          <a href="#excerpt">
            <Button variant="outline" className="rounded-2xl px-6">Jump to Sample</Button>
          </a>
        </div>
        <p className="mt-3 text-xs text-slate-500">Place your PDF at <code>/public/book/Moonlight-and-Gunpowder.pdf</code> when deploying.</p>
      </section>

      {/* Author */}
      <section id="author" className="border-y border-white/10 bg-slate-950/30">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
              alt="Author portrait"
              className="mx-auto aspect-square w-60 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold md:text-4xl">About the Author</h2>
            <p className="mt-4 text-slate-200">
              Replace with a concise 90–150 word bio written in third person. Mention
              previous works, awards, a human detail (city, hobby), and your best
              social link.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="rounded-xl">@yourhandle</Badge>
              <Badge className="rounded-xl">#MoonlightAndGunpowder</Badge>
              <Badge className="rounded-xl">Press Kit</Badge>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 md:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} {BOOK_TITLE}. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#fullbook" className="hover:text-white">Full Book</a>
            <a href="#author" className="hover:text-white">Author</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
