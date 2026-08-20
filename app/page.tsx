import Image from 'next/image'
import Header from '../components/Header'
import { ArrowRight, Facebook, Mail, MapPin } from 'lucide-react'

const contactEmail = 'william@willowanchorfarm.com'
const generalContactHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Willow Anchor Farm Inquiry')}`

function inquiryHref(subject: string, interest: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Willow Anchor Farm,\n\nI'm interested in ${interest}. Please let me know about current availability, pricing, and pickup or delivery options.\n\nMy town/county: \nPreferred quantity or cuts: \n\nThank you!`)}`
}

const goatInquiryHref = inquiryHref('Goat Meat Pricing & Availability Inquiry', 'pasture-raised goat meat')
const beefInquiryHref = inquiryHref('Beef Pricing & Availability Inquiry', 'pasture-raised beef')
const deliveryInquiryHref = inquiryHref('Bulk Order Delivery Inquiry', 'delivery for a larger meat order')

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
              <p className="mb-4 max-w-full text-xs font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-sm sm:tracking-[0.24em]">Pasture-raised in Montgomery County, New York</p>
              <h1 className="max-w-full text-[2.55rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Good food starts with good stewardship.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl">
                Pasture-raised goat meat and beef from the Town of Florida, serving families across Upstate New York.
              </p>
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row">
                <a href="#meat" className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#3f5b38] transition-colors hover:bg-white/90 sm:w-auto sm:px-6">
                  Explore our pasture-raised meat <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* Meat Details */}
        <section id="meat" className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">Pasture to table</p>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Pasture-raised meat, grown close to home.</h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-600">Choose individual cuts or ask about ordering an animal with a cut sheet. Availability changes throughout the year, so email us for current options and pricing.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <article id="goat-meat" className="overflow-hidden rounded-3xl bg-[#f6f5f0]">
                <div className="relative aspect-[16/10]">
                  <Image src="/meat-goats.jpg" alt="Adirondack Meat Goats grazing at Willow Anchor Farm" fill className="object-cover" />
                </div>
                <div className="p-7 md:p-10">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#4A6741]">Adirondack Meat Goats</p>
                  <h3 className="text-3xl font-semibold text-stone-900">Savanna &amp; Boer heritage</h3>
                  <p className="mt-4 leading-relaxed text-stone-600">Our Adirondack Meat Goats are a multigenerational blend of Savanna and Boer goats, raised on pasture through rotational grazing. Individual cuts may be available, or request a cut sheet when ordering an animal.</p>
                  <a href={goatInquiryHref} className="mt-7 inline-flex items-center rounded-full bg-[#4A6741] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#3f5b38]">Ask about goat meat <ArrowRight className="ml-2 h-4 w-4" /></a>
                </div>
              </article>
              <article id="beef" className="overflow-hidden rounded-3xl bg-[#f6f5f0]">
                <div className="relative aspect-[16/10]">
                  <Image src="/highland-cattle.jpg" alt="Highland-Angus cross cattle at Willow Anchor Farm" fill className="object-cover" />
                </div>
                <div className="p-7 md:p-10">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#4A6741]">Pasture-raised beef</p>
                  <h3 className="text-3xl font-semibold text-stone-900">Highland–Angus cross beef</h3>
                  <p className="mt-4 leading-relaxed text-stone-600">Our Highland–Angus cross cattle are raised on pasture through rotational grazing. Individual cuts may be available, or request a cut sheet when ordering an animal.</p>
                  <a href={beefInquiryHref} className="mt-7 inline-flex items-center rounded-full bg-[#4A6741] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#3f5b38]">Ask about beef <ArrowRight className="ml-2 h-4 w-4" /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Other Farm Products */}
        <section id="products" className="bg-[#f6f5f0] py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">Also from our farm</p>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Chicken, eggs, and seasonal produce.</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
            {
              title: 'Free-Range Chicken & Eggs',
              subtitle: 'Wholesome chicken and farm-fresh eggs from free-ranging hens.',
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8557-FRToeYPemCDmT0H7yxXuCGCcO5YM30.png",
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
                Rotational grazing is at the heart of how we raise our animals and care for the land.
              </p>
              <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
                  <h3 className="mb-3 text-xl font-semibold">Rotational Grazing</h3>
                  <p className="leading-relaxed text-white/75">We move animals through pasture, allowing grazed paddocks time to rest and recover.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
                  <h3 className="mb-3 text-xl font-semibold">Year-Round Access</h3>
                  <p className="leading-relaxed text-white/75">Our goats and cattle have year-round pasture access, with high-quality baleage added during snowy winter weather.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
                  <h3 className="mb-3 text-xl font-semibold">Grass-Fed &amp; Finished</h3>
                  <p className="leading-relaxed text-white/75">Our meat animals are grass-fed and grass-finished and raised without added hormones.</p>
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

        {/* Service Area */}
        <section id="service-area" className="bg-[#f6f5f0] py-20 md:py-28">
          <div className="container mx-auto grid items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">Serving Upstate New York</p>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Local meat from Montgomery County.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">Willow Anchor Farm is located in the Town of Florida in Montgomery County. Farm pickup is available by arrangement, with the private pickup address shared after your order is confirmed. Delivery may be available for larger orders.</p>
              <a href={deliveryInquiryHref} className="mt-7 inline-flex items-center rounded-full bg-[#4A6741] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#3f5b38]">Ask about larger-order delivery <ArrowRight className="ml-2 h-4 w-4" /></a>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#4A6741]/10 text-[#4A6741]"><MapPin className="h-6 w-6" /></div>
              <h3 className="text-2xl font-semibold text-stone-900">Our regional community</h3>
              <p className="mt-3 leading-relaxed text-stone-600">We welcome inquiries from customers across Montgomery, Albany, Saratoga, Fulton, and Schoharie counties—including communities such as Latham, Bethlehem, and Clifton Park.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Montgomery', 'Albany', 'Saratoga', 'Fulton', 'Schoharie'].map((county) => <span key={county} className="rounded-full bg-[#f6f5f0] px-4 py-2 text-sm font-medium text-stone-700">{county} County</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy */}
        <section id="how-to-buy" className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">How to buy</p>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Start with a simple email.</h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-600">Tell us what you are looking for and where you are located. We’ll reply with current availability, pricing, and the pickup or delivery options that apply to your order.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
              {[
                ['1', 'Choose your meat', 'Ask about goat meat, beef, individual cuts, or an animal order with a cut sheet.'],
                ['2', 'Confirm availability', 'We’ll share current options and pricing directly by email.'],
                ['3', 'Arrange fulfillment', 'Pick up at the farm by arrangement, or ask about delivery for a larger order.'],
              ].map(([number, title, copy]) => <div key={number} className="rounded-2xl border border-stone-200 p-7"><span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#4A6741] font-semibold text-white">{number}</span><h3 className="text-xl font-semibold text-stone-900">{title}</h3><p className="mt-3 leading-relaxed text-stone-600">{copy}</p></div>)}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={goatInquiryHref} className="inline-flex items-center rounded-full bg-[#4A6741] px-6 py-3 font-semibold text-white hover:bg-[#3f5b38]">Check goat meat availability</a>
              <a href={beefInquiryHref} className="inline-flex items-center rounded-full border border-[#4A6741] px-6 py-3 font-semibold text-[#3f5b38] hover:bg-[#4A6741]/5">Check beef availability</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#f6f5f0] py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">Common questions</p>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Before you inquire</h2>
              <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
                {[
                  ['How are the animals raised?', 'Our goats and cattle have year-round pasture access and are rotationally grazed. During snowy winter conditions, we supplement their forage with high-quality baleage.'],
                  ['Can I buy individual cuts?', 'Yes, individual cuts may be available. Email us to ask what is currently in stock and to request pricing.'],
                  ['Can I choose the cuts for an animal order?', 'A cut sheet can be provided upon request so you can select your preferred cuts.'],
                  ['Where is the meat processed?', 'Our meat is processed at a USDA-inspected facility and provided as individually labeled cuts.'],
                  ['Where do I pick up my order?', 'Pickup is available by arrangement at our farm in the Town of Florida, Montgomery County. Because the farm address is private, details are shared after an order is confirmed.'],
                  ['Is delivery available?', 'Delivery may be available for larger orders across our Upstate New York service area. Include your town, county, and desired quantity in your email.'],
                ].map(([question, answer]) => <div key={question} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr] md:gap-10"><h3 className="text-lg font-semibold text-stone-900">{question}</h3><p className="leading-relaxed text-stone-600">{answer}</p></div>)}
              </div>
              <a href={generalContactHref} className="mt-8 inline-flex items-center font-semibold text-[#3f5b38]">Have another question? Email the farm <ArrowRight className="ml-2 h-4 w-4" /></a>
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
                <a href="#service-area" className="text-white/75 transition-colors hover:text-white">Service Area</a>
                <a href="#how-to-buy" className="text-white/75 transition-colors hover:text-white">How to Buy</a>
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
