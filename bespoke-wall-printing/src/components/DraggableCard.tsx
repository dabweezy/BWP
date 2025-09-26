'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface DraggableCardProps {
  title: string
  image: string
  alt: string
  style?: React.CSSProperties
  onReset?: () => void
}

export function DraggableCard({ title, image, alt, style = {}, onReset }: DraggableCardProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  // Reset function to restore original position
  const resetPosition = () => {
    setPosition({ x: 0, y: 0 })
  }

  // Expose reset function to parent
  useEffect(() => {
    if (onReset) {
      onReset(resetPosition)
    }
  }, [onReset])

  useEffect(() => {
    if (cardRef.current) {
      const parentRect = cardRef.current.parentElement?.getBoundingClientRect()
      if (parentRect) {
        // Parse initial position from style prop
        const initialLeft = parseFloat(style.left as string || '0');
        const initialTop = parseFloat(style.top as string || '0');
        setPosition({ x: initialLeft, y: initialTop });
      }
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    
    // No boundary restrictions - completely free movement
    setPosition({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragStart])

  return (
    <div
      ref={cardRef}
      className={`absolute w-48 h-60 bg-white rounded-2xl shadow-lg cursor-grab hover:scale-105 hover:shadow-xl transition-all duration-200 overflow-hidden z-30 ${
        isDragging ? 'cursor-grabbing scale-110 z-50 shadow-2xl' : ''
      }`}
      style={{
        ...style,
        transform: `${style.transform || ''} translate(${position.x}px, ${position.y}px)`,
        left: style.left || 0,
        top: style.top || 0,
        right: style.right || 'auto',
        transition: isDragging ? 'none' : 'transform 0.2s ease-out, box-shadow 0.2s ease-out'
      }}
      onMouseDown={handleMouseDown}
    >
      <Image
        src={image}
        alt={alt}
        width={192}
        height={144}
        className="w-full h-44 object-cover pointer-events-none"
      />
      <h3 className="mt-3 text-center text-base font-bold text-slate-800 px-3">
        {title}
      </h3>
    </div>
  )
}
