import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { ArrowRight } from 'lucide-react'
import AnimationStyles from '../components/AnimationStyles'

const contactEmail = 'william@willowanchorfarm.com'
const generalContactHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Willow Anchor Farm Inquiry')}`

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex flex-col items-center justify-between overflow-hidden bg-black">
          <Header />
          <div className="absolute inset-0 z-0 flex flex-col">
            <div className="flex-grow bg-black"></div>
            <div className="relative flex-grow-[4]">
              <Image
                src="/willow-anchor-logo.png"
                alt="Willow Anchor Farm Logo"
                layout="fill"
                objectFit="contain"
                priority
                className="animate-pulse"
              />
            </div>
            <div className="flex-grow bg-black"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center h-full pt-8 pb-4 px-4">
            <div className="bg-black/50 p-4 rounded-lg backdrop-blur-sm w-full text-center md:text-left mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
                Willow Anchor Farm
              </h1>
            </div>
            <div className="bg-black/50 p-4 rounded-lg backdrop-blur-sm text-center mt-auto -mb-8">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Sustainable Agriculture, Exceptional Quality
              </h2>
              <div className="flex flex-row items-center justify-center gap-4">
                <Link 
                  href="/products"
                  className="text-lg text-[#4A6741] bg-white px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
                >
                  Learn more <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
                <a
                  href={generalContactHref}
                  className="text-lg text-white border border-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  Contact us <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Thicker black border separator */}
        <div className="h-[12px] bg-black"></div>

        {/* White border separator */}
        <div className="h-3 bg-white"></div>

        {/* Product Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3">
          {[
            {
              title: 'Grass-Fed Beef',
              subtitle: 'Naturally raised, exceptionally tender.',
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8559-kaodT7UpL171w3KqFsTeborQ9XL2UC.png",
            },
            {
              title: 'Free-Range Chicken',
              subtitle: 'Ethically raised, naturally delicious.',
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8557-FRToeYPemCDmT0H7yxXuCGCcO5YM30.png",
            },
            {
              title: 'Adirondack Meat Goats',
              subtitle: 'Heritage breed, superior quality.',
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8558-cBDorB5V0e3zNuXqOmnXT1mj4wSNAx.png",
            },
            {
              title: 'Farm Fresh Produce',
              subtitle: 'Responsibly grown, no pesticides.',
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP-TvSdSlWCosfXyvFxqhOnRKJVHqoPID.png",
            }
          ].map((product) => (
            <div key={product.title} className="relative aspect-[4/3] bg-black overflow-hidden group">
              <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-2">{product.title}</h3>
                  <p className="text-lg md:text-xl text-white/90 font-light">{product.subtitle}</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <Link 
                    href={`/products/${product.title.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-[#4A6741] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-colors"
                  >
                    Learn more
                  </Link>
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Order inquiry: ${product.title}`)}&body=${encodeURIComponent(`Hello Willow Anchor Farm,\n\nI'm interested in ordering ${product.title}. Please let me know about current availability, pricing, and pickup or delivery options.\n\nThank you!`)}`}
                    className="text-sm text-white border border-white/90 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Contact to order
                  </a>
                </div>
              </div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          ))}
        </section>

        {/* White border separator */}
        <div className="h-3 bg-white"></div>

        {/* Our Commitment Section */}
        <section className="py-24 md:py-32 bg-[#4A6741] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight">
                Our Commitment
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed">
                At Willow Anchor Farm, we believe in harmonious agriculture that respects the land 
                and delivers exceptional quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <h3 className="text-2xl font-semibold mb-4">Sustainable Practices</h3>
                  <p className="text-white/80">Implementing eco-friendly farming methods to preserve our environment.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <h3 className="text-2xl font-semibold mb-4">Ethical Treatment</h3>
                  <p className="text-white/80">Ensuring the highest standards of animal welfare in all our operations.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
                  <p className="text-white/80">Rigorous standards to deliver the finest farm-fresh products to your table.</p>
                </div>
              </div>
              <div className="mt-16">
                <Link 
                  href="/about"
                  className="bg-white text-[#4A6741] px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center"
                >
                  Learn more about our practices <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* White border separator */}
        <div className="h-3 bg-white"></div>

        {/* Natural Land Clearing Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#4A6741]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8570-e32nwsKCBF1GHQhnBsyr0ZudpbZLQD.png"
              alt="Willow Anchor Farm harvest"
              layout="fill"
              objectFit="cover"
              priority
              className="object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A6741] via-[#4A6741]/70 to-[#4A6741]/50" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-4 text-white">
                Non-Invasive Land Clearing
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-4">
                Thoughtful vegetation management, powered by goats and sheep.
              </p>
              <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                Our animals help manage brush, weeds, and overgrowth while minimizing soil disturbance and reducing the need for heavy equipment.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Goat & Sheep Land Clearing Inquiry')}&body=${encodeURIComponent(`Hello Willow Anchor Farm,\n\nI'm interested in learning more about your non-invasive land clearing services using goats and sheep. Please contact me to discuss my property and scheduling.\n\nThank you!`)}`}
                  className="bg-white text-[#4A6741] px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AnimationStyles />
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-6 text-center text-white/80 font-light">
          © 2016-2026 Willow Anchor Farm. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
