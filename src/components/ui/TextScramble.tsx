import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

interface TextScrambleProps {
  text: string
  className?: string
}

export function TextScramble({ text, className }: TextScrambleProps) {
  const [scrambledText, setScrambledText] = useState(text)

  useEffect(() => {
    let frame = 0
    let frameCount = 0
    const maxFrames = 15 // Increased for longer animation
    const finalText = text
    
    const scramble = () => {
      if (frameCount >= maxFrames) {
        setScrambledText(finalText)
        return
      }

      const progress = frameCount / maxFrames
      const newText = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          if (index < progress * finalText.length) return char
          return characters[Math.floor(Math.random() * characters.length)]
        })
        .join('')

      setScrambledText(newText)
      frameCount++
      frame = requestAnimationFrame(scramble)
    }

    frame = requestAnimationFrame(scramble)
    return () => cancelAnimationFrame(frame)
  }, [text])

  return (
    <motion.span
      key={text}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {scrambledText}
    </motion.span>
  )
} 