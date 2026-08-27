import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import dish from "@/assets/dish.jpg.asset.json";
import closeup from "@/assets/closeup.jpg.asset.json";
import grill from "@/assets/grill.jpg.asset.json";
import ambiance from "@/assets/ambiance.jpg.asset.json";
import filet from "@/assets/filet.mp4.asset.json";
import poster from "@/assets/poster.jpg.asset.json";

const WHATSAPP = "https://wa.me/50223781449";
const PHONE = "2378-1449";
const ADDRESS =
  "Carretera a Ciudad Quetzal, frente a la entrada a Lo de Mejía, Guatemala";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Como Reyes Steakhouse | Cortes Premium en Guatemala" },
      {
        name: "description",
        content:
          "Cortes premium a la parrilla, ambiente de realeza y atención impecable. Carretera a Ciudad Quetzal. Mar a Dom 1 PM - 9 PM. Reservas: 2378-1449.",
      },
      {
        property: "og:title",
        content: "Como Reyes Steakhouse | Cortes Premium en Guatemala",
      },
      {
        property: "og:description",
        content:
          "Cortes premium a la parrilla, ambiente de realeza y atención impecable. Reservas por WhatsApp 2378-1449.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Como Reyes Steakhouse",
          servesCuisine: ["Steakhouse", "Parrilla", "Guatemalteca"],
          priceRange: "$$",
          telephone: "+502 2378-1449",
          url: "https://comoreyes.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Carretera a Ciudad Quetzal, frente a la entrada a Lo de Mejía",
            addressCountry: "GT",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "13:00",
              closes: "21:00",
            },
          ],
        }),
      },
    ],
  }),
});

const cortes = [
  {
    name: "Ribeye Reyes",
    weight: "14 oz",
    desc: "Marmoleo intenso, sellado al carbón y terminado con mantequilla de hierbas.",
    img: grill.url,
  },
  {
    name: "Filet Mignon",
    weight: "10 oz",
    desc: "El corte más suave de la casa, servido con salsa de tres quesos y pimienta negra.",
    img: dish.url,
  },
  {
    name: "New York Strip",
    weight: "12 oz",
    desc: "Corte clásico de textura firme, sal marina en escamas y pimienta recién molida.",
    img: closeup.url,
  },
];

const experiencia = [
  {
    title: "Selección premium",
    desc: "Cada corte se elige a mano por marmoleo, grosor y maduración antes de llegar a la parrilla.",
  },
  {
    title: "Parrilla al carbón",
    desc: "Fuego vivo y tiempos exactos para lograr una costra perfecta y un centro jugoso.",
  },
  {
    title: "Servicio de realeza",
    desc: "Atención cercana, guarniciones recién hechas y una mesa lista para tu ocasión especial.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Como Reyes Steakhouse"
              className="h-11 w-auto"
              width={400}
              height={240}
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Cortes", "#cortes"],
              ["Experiencia", "#experiencia"],
              ["Visítanos", "#visitanos"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal !px-5 !py-2.5 !text-xs"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden">
        <img
          src={hero.url}
          alt="Cortes de res premium sazonados sobre tabla de madera"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          width={900}
          height={1873}
        />
        <div className="fade-up-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/45" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-28 pb-16">
          <p className="eyebrow">Steakhouse · Guatemala</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-7xl lg:text-8xl">
            Un sabor de
            <span className="text-gold-gradient"> realeza</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg italic text-muted-foreground sm:text-xl">
            Cortes premium al carbón, guarniciones recién hechas y una mesa lista
            para una experiencia inolvidable.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal"
            >
              Reservar por WhatsApp
            </a>
            <a href="#cortes" className="btn-ghost-gold">
              Ver nuestros cortes
            </a>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-border/60 pt-7 sm:grid-cols-3">
            {[
              ["Horario", "Mar - Dom · 1 PM - 9 PM"],
              ["WhatsApp", PHONE],
              ["Ubicación", "Carretera a Ciudad Quetzal"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="eyebrow">{k}</p>
                <p className="mt-2 text-sm text-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORTES */}
      <section id="cortes" className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">La carta</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Cortes <span className="text-gold-gradient">premium</span>
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cortes.map((c) => (
            <article key={c.name} className="card-luxe overflow-hidden">
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="h-60 w-full object-cover"
                width={1200}
                height={760}
              />
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{c.name}</h3>
                  <span className="font-display text-sm tracking-widest text-gold">
                    {c.weight}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Consulta el menú completo y las especialidades del día por WhatsApp.
        </p>
      </section>

      {/* VIDEO */}
      <section className="relative border-y border-border/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden shadow-[var(--shadow-luxe)]">
            <video
              src={filet.url}
              poster={poster.url}
              className="aspect-9/16 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Filet mignon servido en Como Reyes"
            />
          </div>
          <div>
            <p className="eyebrow">Hecho al momento</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Del fuego
              <br />
              <span className="text-gold-gradient">a tu mesa</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Trabajamos con carne fresca, término exacto y salsas preparadas en
              casa. Nada se adelanta: tu corte empieza a cocinarse cuando lo
              ordenas, para que llegue a la mesa en su punto ideal.
            </p>
            <div className="mt-9 space-y-6">
              {experiencia.map((e) => (
                <div key={e.title} className="border-l border-gold/50 pl-5">
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA / AMBIENTE */}
      <section id="experiencia" className="relative overflow-hidden">
        <img
          src={ambiance.url}
          alt="Ambiente del restaurante Como Reyes Steakhouse"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          width={1408}
          height={912}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center">
          <p className="eyebrow">La experiencia</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Comer <span className="text-gold-gradient">como reyes</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-foreground/90 sm:text-xl">
            "¡Date un festín real! Tu mesa está lista para una experiencia
            inolvidable."
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal"
            >
              Reservar mesa
            </a>
            <a href="#visitanos" className="btn-ghost-gold">
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* VISITANOS */}
      <section id="visitanos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Visítanos</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Te <span className="text-gold-gradient">esperamos</span>
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="card-luxe p-8">
            <p className="eyebrow">Dirección</p>
            <p className="mt-4 text-lg leading-relaxed">
              Carretera a Ciudad Quetzal, frente a la entrada a Lo de Mejía
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-display text-sm uppercase tracking-[0.18em] text-gold hover:underline"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="card-luxe p-8">
            <p className="eyebrow">Horario</p>
            <p className="mt-4 text-lg">Martes a Domingo</p>
            <p className="text-lg text-gold">1:00 PM - 9:00 PM</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Lunes cerrado. Reservaciones sugeridas para grupos.
            </p>
          </div>
          <div className="card-luxe p-8">
            <p className="eyebrow">WhatsApp oficial</p>
            <p className="mt-4 font-display text-3xl text-gold">{PHONE}</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal mt-6 w-full"
            >
              Escríbenos
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-border">
          <iframe
            title="Ubicación de Como Reyes Steakhouse"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="border-t border-border/60 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
          <img
            src={logo.url}
            alt="Como Reyes Steakhouse"
            loading="lazy"
            className="h-14 w-auto"
            width={400}
            height={240}
          />
          <p className="text-sm text-muted-foreground">
            @comoreyes.steakhouse · comoreyes.com
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/comoreyes.steakhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/comoreyes.steakhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Como Reyes Steakhouse. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13c-1.5 0-2.98-.4-4.27-1.17l-.31-.18-3.12.82.83-3.04-.2-.32a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.13 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.18 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.29Z" />
        </svg>
      </a>
    </div>
  );
}
