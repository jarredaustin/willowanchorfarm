'use client'

export default function AnimationStyles() {
  return (
    <style jsx global>{`
      @keyframes subtle-zoom {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .animate-pulse {
        animation: subtle-zoom 5s infinite ease-in-out;
      }
    `}</style>
  )
}
