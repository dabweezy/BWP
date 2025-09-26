'use client'

import { DraggableCard } from './DraggableCard'
import { useRef, useImperativeHandle, forwardRef } from 'react'

const cardData = [
  {
    title: "Bedroom Mural",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bedroom with wall mural",
    style: { top: '64px', left: '10%', transform: 'rotate(-5deg)' }
  },
  {
    title: "Living Room Feature",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Living room feature wall",
    style: { top: '128px', left: '25%', transform: 'rotate(-7deg)' }
  },
  {
    title: "Office Branding",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Office with branded wall",
    style: { top: '12px', left: '45%', transform: 'rotate(8deg)' }
  },
  {
    title: "Restaurant Menu",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Restaurant wall design",
    style: { top: '56px', left: '65%', transform: 'rotate(10deg)' }
  },
  {
    title: "Gym Motivation",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gym motivational wall",
    style: { top: '100px', right: '20%', transform: 'rotate(2deg)' }
  },
  {
    title: "Hallway Design",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hallway wall design",
    style: { top: '28px', left: '35%', transform: 'rotate(-7deg)' }
  },
  {
    title: "Kitchen Backsplash",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kitchen with printed backsplash",
    style: { top: '72px', left: '55%', transform: 'rotate(4deg)' }
  }
]

interface DraggableCardsContainerProps {}

export const DraggableCardsContainer = forwardRef<{ resetAllCards: () => void }, DraggableCardsContainerProps>((props, ref) => {
  const resetFunctions = useRef<(() => void)[]>([])

  const resetAllCards = () => {
    resetFunctions.current.forEach(resetFn => resetFn())
  }

  useImperativeHandle(ref, () => ({
    resetAllCards
  }))

  const addResetFunction = (resetFn: () => void) => {
    resetFunctions.current.push(resetFn)
  }
  return (
    <div className="relative w-full h-[500px]">
      {/* Background text - centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-4xl">
          {/* Reset Button - positioned above the text */}
          <button
            onClick={resetAllCards}
            className="mb-8 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200 relative z-50"
            title="Reset cards to original positions"
          >
            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </button>
          
          <h1 className="text-3xl font-black text-neutral-400 md:text-5xl mb-4">
            Where creativity meets innovation
          </h1>
          <p className="text-lg font-semibold text-neutral-500 md:text-xl mb-2">
            Any image • Any surface • Any size
          </p>
          <p className="text-sm text-neutral-600 md:text-base max-w-2xl mx-auto">
            Revolutionary direct UV printing technology delivering stunning, high-resolution designs and murals for your home or business.
          </p>
        </div>
      </div>
      
      {/* Draggable cards positioned over the text */}
      <div className="absolute inset-0 z-20">
        {cardData.map((card, index) => (
          <DraggableCard
            key={index}
            title={card.title}
            image={card.image}
            alt={card.alt}
            style={card.style}
            onReset={addResetFunction}
          />
        ))}
      </div>
    </div>
  )
})
