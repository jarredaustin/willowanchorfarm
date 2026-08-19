import Image from 'next/image'
import Header from '../components/Header'
import { ArrowRight, Facebook, Mail } from 'lucide-react'

const contactEmail = 'william@willowanchorfarm.com'
const generalContactHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Willow Anchor Farm Inquiry')}`

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col bg-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-black lg:h-screen">
          <Header />
          <Image
            src="/highland-hero.jpg"
            alt="Highland cattle raised at Willow Anchor Farm"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
          <div className="container relative z-10 mx-auto px-5 pb-10 pt-28 sm:pt-32 md:px-8 lg:py-28">
            <div className="min-w-0 max-w-3xl">
              <div className="mb-7 hidden h-28 w-28 items-center justify-center rounded-full bg-white p-3 shadow-xl sm:flex md:h-32 md:w-32">
                <Image src="/willow-anchor-logo.png" alt="Willow Anchor Farm logo" width={112} height={103} priority />
              </div>
              <p className="mb-4 max-w-full text-xs font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-sm sm:tracking-[0.24em]">Sustainably raised in the Adirondacks</p>
              <h1 className="max-w-full text-[2.55rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Good food starts with good stewardship.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl">
                Thoughtfully raised meats, fresh produce, and practical land care rooted in respect for animals and the land.
              </p>
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row">
                <a href="#products" className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#3f5b38] transition-colors hover:bg-white/90 sm:w-auto sm:px-6">
                  Explore our products <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={generalContactHref}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-6"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Highlights */}
        <section id="products" className="bg-[#f6f5f0] py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">From our farm</p>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Raised with care. Grown with purpose.</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
            {
              title: 'Grass-Fed Beef',
              subtitle: 'Pasture-raised with care for rich, honest flavor.',
              image: "/highland-cattle.jpg",
            },
            {
              title: 'Free-Range Chicken & Eggs',
              subtitle: 'Wholesome chicken and farm-fresh eggs from free-ranging hens.',
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8557-FRToeYPemCDmT0H7yxXuCGCcO5YM30.png",
            },
            {
              title: 'Adirondack Meat Goats',
              subtitle: 'Pasture-raised goats known for lean, flavorful meat.',
              image: "/meat-goats.jpg",
            },
            {
              title: 'Farm Fresh Produce',
              subtitle: 'Seasonal produce, thoughtfully grown and freshly harvested.',
              image: "/farm-fresh-produce.jpg",
            }
              ].map((product) => (
            <div key={product.title} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-black shadow-sm">
              <div className="absolute inset-0 z-10 flex flex-col p-7 md:p-10">
                <div>
                  <h3 className="mb-2 text-3xl font-semibold text-white md:text-4xl">{product.title}</h3>
                  <p className="text-lg text-white/90 md:text-xl">{product.subtitle}</p>
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Order inquiry: ${product.title}`)}&body=${encodeURIComponent(`Hello Willow Anchor Farm,\n\nI'm interested in ordering ${product.title}. Please let me know about current availability, pricing, and pickup or delivery options.\n\nThank you!`)}`}
                    className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#3f5b38] transition-colors hover:bg-white/90"
                  >
                    Ask about {product.title.toLowerCase()} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
            </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section id="our-practices" className="relative overflow-hidden bg-[#4A6741] py-20 text-white md:py-28">
          <div className="absolute inset-0 z-0 bg-black/15"></div>
          <div className="container relative z-10 mx-auto px-5 md:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">How we farm</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Our Commitment
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                At Willow Anchor Farm, we believe in harmonious agriculture that respects the land 
                and delivers exceptional quality.
              </p>
              <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
                  <h3 className="mb-3 text-xl font-semibold">Sustainable Practices</h3>
                  <p className="leading-relaxed text-white/75">Implementing eco-friendly farming methods to preserve our environment.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
                  <h3 className="mb-3 text-xl font-semibold">Ethical Treatment</h3>
                  <p className="leading-relaxed text-white/75">Ensuring the highest standards of animal welfare in all our operations.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
                  <h3 className="mb-3 text-xl font-semibold">Quality Assurance</h3>
                  <p className="leading-relaxed text-white/75">Rigorous standards to deliver the finest farm-fresh products to your table.</p>
                </div>
              </div>
              <div className="mt-10">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Willow Anchor Farm Practices Inquiry')}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-[#3f5b38] transition-colors hover:bg-white/90"
                >
                  Ask about our practices <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Natural Land Clearing Section */}
        <section id="land-clearing" className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#4A6741] py-28 md:py-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8570-e32nwsKCBF1GHQhnBsyr0ZudpbZLQD.png"
              alt="Willow Anchor Farm harvest"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A6741] via-[#4A6741]/70 to-[#4A6741]/50" />
          </div>

          <div className="container relative z-10 mx-auto px-5 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">A natural approach</p>
              <h2 className="mb-5 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                Non-Invasive Land Clearing
              </h2>
              <p className="mb-5 text-xl text-white/90 md:text-2xl">
                Thoughtful vegetation management, powered by goats and sheep.
              </p>
              <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-white/80">
                Our animals help manage brush, weeds, and overgrowth while minimizing soil disturbance and reducing the need for heavy equipment.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Goat & Sheep Land Clearing Inquiry')}&body=${encodeURIComponent(`Hello Willow Anchor Farm,\n\nI'm interested in learning more about your non-invasive land clearing services using goats and sheep. Please contact me to discuss my property and scheduling.\n\nThank you!`)}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-[#3f5b38] transition-colors hover:bg-white/90"
                >
                  Ask about land clearing <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-stone-950 py-14 text-white">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div className="max-w-md">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1.5">
                  <Image src="/willow-anchor-logo.png" alt="" width={42} height={39} />
                </span>
                <span className="text-lg font-semibold">Willow Anchor Farm</span>
              </div>
              <p className="leading-relaxed text-white/60">Sustainable agriculture, thoughtfully raised products, and natural land care.</p>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Explore</h2>
              <nav className="flex flex-col items-start gap-3" aria-label="Footer navigation">
                <a href="#products" className="text-white/75 transition-colors hover:text-white">Products</a>
                <a href="#our-practices" className="text-white/75 transition-colors hover:text-white">Our Practices</a>
                <a href="#land-clearing" className="text-white/75 transition-colors hover:text-white">Land Clearing</a>
              </nav>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Connect</h2>
              <div className="flex flex-col items-start gap-3">
                <a href={generalContactHref} className="inline-flex items-center text-white/75 transition-colors hover:text-white">
                  <Mail className="mr-2 h-4 w-4" /> {contactEmail}
                </a>
                <a
                  href="https://www.facebook.com/share/1CFy5KzvGy/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/75 transition-colors hover:text-white"
                >
                  <Facebook className="mr-2 h-4 w-4" /> Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="pt-7 text-sm text-white/45">
            © 2016-2026 Willow Anchor Farm. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
