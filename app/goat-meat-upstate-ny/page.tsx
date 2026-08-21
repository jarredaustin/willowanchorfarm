import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Facebook, Mail, MapPin } from 'lucide-react'
import Header from '../../components/Header'

const contactEmail = 'william@willowanchorfarm.com'
const goatInquiryHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Goat Meat Pricing & Availability Inquiry')}&body=${encodeURIComponent(`Hello Willow Anchor Farm,\n\nI'm interested in pasture-raised goat meat. Please let me know about current availability, pricing, and pickup or delivery options.\n\nMy town/county: \nPreferred quantity or cuts: \n\nThank you!`)}`

export const metadata: Metadata = {
  title: 'Goat Meat in Upstate New York | Willow Anchor Farm',
  description: 'Pasture-raised goat meat from Willow Anchor Farm in Montgomery County, NY. Ask about individual cuts, animal orders, farm pickup, pricing, and availability.',
  alternates: { canonical: '/goat-meat-upstate-ny' },
  openGraph: {
    type: 'website',
    url: '/goat-meat-upstate-ny',
    title: 'Pasture-Raised Goat Meat in Upstate NY | Willow Anchor Farm',
    description: 'Savanna and Boer heritage goats raised on pasture in Montgomery County, New York. Email for current availability and pricing.',
    images: [{ url: '/meat-goats.jpg', alt: 'Adirondack Meat Goats grazing at Willow Anchor Farm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pasture-Raised Goat Meat in Upstate NY | Willow Anchor Farm',
    description: 'Goat meat raised on pasture in Montgomery County, New York. Email for current availability and pricing.',
    images: ['/meat-goats.jpg'],
  },
}

const faqs = [
  ['Where can I buy goat meat in Upstate New York?', 'Willow Anchor Farm raises and sells pasture-raised goat meat from the Town of Florida in Montgomery County, New York. Customers are welcome from any location, with farm pickup available by arrangement. Email the farm for current availability and pricing.'],
  ['Can I buy individual goat meat cuts?', 'Individual cuts may be available. Because availability changes throughout the year, email the farm to ask what is currently in stock and request pricing.'],
  ['Can I order an animal and choose the cuts?', 'A cut sheet can be provided upon request when ordering an animal, allowing you to select your preferred cuts.'],
  ['How are Willow Anchor Farm goats raised?', 'The goats have year-round pasture access and are moved through pasture using rotational grazing. High-quality baleage is added during snowy winter weather.'],
  ['Where is the goat meat processed?', 'The meat is processed at a USDA-inspected facility and provided as individually labeled cuts.'],
  ['Where is pickup?', 'Pickup is available by arrangement at the farm in the Town of Florida, Montgomery County. The private pickup address is shared after an order is confirmed.'],
  ['Is delivery available?', 'Delivery may be available for larger orders depending on your location. Customers from anywhere are welcome to inquire—include your town, county, and desired quantity so we can discuss the options.'],
]

const farmSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': 'https://www.willowanchorfarm.com/#farm',
  name: 'Willow Anchor Farm',
  url: 'https://www.willowanchorfarm.com',
  email: contactEmail,
  logo: 'https://www.willowanchorfarm.com/icon-512.png',
  image: 'https://www.willowanchorfarm.com/meat-goats.jpg',
  description: 'A farm raising pasture-raised goat meat and beef in the Town of Florida, Montgomery County, New York.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Town of Florida',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: ['United States', 'Montgomery County', 'Albany County', 'Saratoga County', 'Fulton County', 'Schoharie County'],
  sameAs: ['https://www.facebook.com/share/1CFy5KzvGy/?mibextid=wwXIfr'],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://www.willowanchorfarm.com/goat-meat-upstate-ny#product',
  name: 'Pasture-Raised Goat Meat',
  description: 'Goat meat from multigenerational Savanna and Boer heritage goats raised on pasture through rotational grazing at Willow Anchor Farm.',
  image: 'https://www.willowanchorfarm.com/meat-goats.jpg',
  brand: { '@id': 'https://www.willowanchorfarm.com/#farm' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function GoatMeatPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(farmSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-black pt-20 md:min-h-[780px]">
          <Header />
          <Image src="/meat-goats.jpg" alt="Adirondack Meat Goats grazing at Willow Anchor Farm in Montgomery County, New York" fill priority sizes="100vw" className="object-cover object-[56%_center] sm:object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
          <div className="container relative z-10 mx-auto w-full px-5 pb-10 pt-32 sm:pb-16 md:px-8 md:pb-24">
            <div className="min-w-0 max-w-3xl">
              <p className="mb-4 max-w-[19rem] text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/75 sm:max-w-none sm:text-sm sm:tracking-[0.2em]">Town of Florida · Montgomery County, NY</p>
              <h1 className="shadow-text max-w-full text-[2.55rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">Pasture-raised goat meat in Upstate New York.</h1>
              <p className="shadow-text mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg md:text-xl">Savanna and Boer heritage goats raised on pasture. Ask about individual cuts or ordering an animal with a cut sheet.</p>
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
                <a href={goatInquiryHref} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#3f5b38] hover:bg-white/90 sm:w-auto sm:px-6">Check availability and pricing <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></a>
                <a href="#how-to-buy" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-6">How ordering works</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-28">
          <div className="container mx-auto grid gap-12 px-5 md:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">Adirondack Meat Goats</p>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">Raised with pasture at the center.</h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">Our Adirondack Meat Goats are a multigenerational blend of Savanna and Boer goats. They have year-round pasture access and move through pasture using rotational grazing. During snowy winter weather, we add high-quality baleage.</p>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">Our meat animals are grass-fed and grass-finished and raised without added hormones.</p>
            </div>
            <div className="rounded-3xl bg-[#f6f5f0] p-6 sm:p-7 md:p-10">
              <h2 className="text-2xl font-semibold text-stone-900">What we can confirm</h2>
              <ul className="mt-6 space-y-4">
                {['Individual cuts may be available', 'Animal orders may include a cut sheet', 'Processed at a USDA-inspected facility', 'Provided as individually labeled cuts', 'Farm pickup available by arrangement'].map((item) => <li key={item} className="flex gap-3 text-stone-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4A6741]" /><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="how-to-buy" className="bg-[#f6f5f0] py-16 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">How to buy goat meat</p>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">Start with a simple email.</h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-600">Availability changes throughout the year. Tell us what you are looking for and where you are located, and we’ll reply with current options, pricing, and the pickup or delivery options that apply to your order.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
              {[
                ['1', 'Tell us what you need', 'Ask about individual cuts or an animal order with a cut sheet.'],
                ['2', 'Confirm current options', 'We’ll reply directly with availability and pricing.'],
                ['3', 'Arrange fulfillment', 'Pick up at the farm by arrangement, or ask about delivery for a larger order.'],
              ].map(([number, title, copy]) => <div key={number} className="rounded-2xl bg-white p-6 shadow-sm sm:p-7"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A6741] font-semibold text-white">{number}</span><h3 className="mt-5 text-xl font-semibold text-stone-900">{title}</h3><p className="mt-3 leading-relaxed text-stone-600">{copy}</p></div>)}
            </div>
            <div className="mt-9 text-center"><a href={goatInquiryHref} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#4A6741] px-6 py-3 font-semibold text-white hover:bg-[#3f5b38] sm:w-auto">Ask about goat meat <ArrowRight className="ml-2 h-4 w-4" /></a></div>
          </div>
        </section>

        <section className="bg-[#4A6741] py-16 text-white md:py-24">
          <div className="container mx-auto grid gap-10 px-5 md:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">Serving the region</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Goat meat from Montgomery County—for customers anywhere.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Willow Anchor Farm is in the Town of Florida, and customers from any location are welcome to purchase. We’re especially convenient to Montgomery, Albany, Saratoga, Fulton, and Schoharie counties, including Latham, Bethlehem, and Clifton Park.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm sm:p-7 md:p-9">
              <MapPin className="h-8 w-8 text-white/80" />
              <h3 className="mt-5 text-2xl font-semibold">Pickup and delivery</h3>
              <p className="mt-3 leading-relaxed text-white/75">Farm pickup is available by arrangement, wherever you are traveling from. Delivery may also be available for larger orders depending on location. Pickup details are shared after an order is confirmed.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-28">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6741]">Goat meat questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">Before you inquire</h2>
              <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
                {faqs.map(([question, answer]) => <div key={question} className="grid gap-2 py-6 md:grid-cols-[.8fr_1.2fr] md:gap-10"><h3 className="text-lg font-semibold text-stone-900">{question}</h3><p className="leading-relaxed text-stone-600">{answer}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e8ede4] py-14 md:py-20">
          <div className="container mx-auto px-5 text-center md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Ask what is currently available.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">Include your town or county and the quantity or cuts you prefer. We’ll reply with current information.</p>
            <a href={goatInquiryHref} className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#4A6741] px-6 py-3 font-semibold text-white hover:bg-[#3f5b38] sm:w-auto">Email Willow Anchor Farm <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 py-12 text-white">
        <div className="container mx-auto flex flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div><Link href="/" className="text-lg font-semibold">Willow Anchor Farm</Link><p className="mt-2 text-sm text-white/55">Town of Florida · Montgomery County, New York</p></div>
          <div className="flex min-w-0 flex-col gap-3 text-sm sm:flex-row sm:gap-6">
            <Link href="/" className="text-white/75 hover:text-white">Farm home</Link>
            <a href={`mailto:${contactEmail}`} className="inline-flex min-w-0 items-center break-all text-white/75 hover:text-white"><Mail className="mr-2 h-4 w-4 shrink-0" />{contactEmail}</a>
            <a href="https://www.facebook.com/share/1CFy5KzvGy/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/75 hover:text-white"><Facebook className="mr-2 h-4 w-4" />Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
