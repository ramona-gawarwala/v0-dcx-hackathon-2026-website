'use client'

import { useEffect, useRef, useState } from 'react'

// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A — opens a Matrix-style terminal window
// that types out one of the dev jokes below at random.
const SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

const JOKES = [
  // Classics
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  "There are only 10 kinds of people in the world: those who understand binary and those who don't.",
  "A SQL query walks into a bar, sidles up to two tables and asks: 'May I join you?'",
  "Why do Java developers wear glasses? Because they don't C#.",
  'There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.',
  'To understand recursion, you must first understand recursion.',
  "It's not a bug — it's an undocumented feature.",
  'How many programmers does it take to change a light bulb? None — that is a hardware problem.',
  "I'd tell you a UDP joke, but you might not get it.",
  '!false — it is funny because it is true.',
  // React
  'Why did the React component feel lost? It had too many unresolved states.',
  'I told my React app to calm down, but it just kept re-rendering.',
  'useEffect walks into a bar. It walks into a bar. It walks into a bar… (missing dependency array)',
  "My React app has commitment issues — it won't stop mounting and unmounting.",
  // TypeScript
  "I'd make a JavaScript joke, but TypeScript says its type is unknown.",
  'Why did the developer switch to TypeScript? Too many undefined relationships.',
  'TypeScript: because "1" + 1 === "11" finally hurt enough.',
  "'any' is the friend who says yes to everything and ruins the trip.",
  // Vercel & deployment
  "It works on my machine, so I'm shipping my machine. It's called Vercel.",
  'My code has two states: broken locally, and somehow working in production.',
  "Deploy on a Friday? Bold strategy. Let's see how the weekend goes.",
  'Rolling back is just time travel for people who pushed too fast.',
  // Security
  'I changed my password to "incorrect" so my computer reminds me when I forget.',
  'A SQL injection attack walks into a bar, DROP TABLE patrons — the bar closes.',
  "My password manager forgot its own master password. We don't talk about that day.",
  "The 'S' in IoT stands for Security.",
  // AI
  'I asked the AI for a joke. It confidently made one up that never existed.',
  'My chatbot is very supportive — it hallucinates that all my ideas are great.',
  "AI won't take your job. Someone who knows how to prompt AI will.",
  'I told the model to be concise. It wrote three paragraphs explaining why.',
  'Why was the neural network bad at secrets? It kept overfitting to the details.',
  'Prompt engineering: the ancient art of saying please to a calculator until it behaves.',
  'My model hit 100% accuracy — on the training data. It has never met the real world and never will.',
  'Hallucination is just the model being creative in a court-admissible way.',
  'I told the AI to think step by step. Now it gaslights me step by step.',
  'Temperature 0: the model is a librarian. Temperature 2: the model is your uncle after three coffees.',
  'AGI is always five years away — coincidentally, the length of my funding runway.',
  "I built an AI agent. Now I have two problems, and it's spawning three more.",
  'Garbage in, garbage out — now with a billion parameters of confidence.',
  "Why did the transformer break up with the RNN? It couldn't pay attention to the past anymore.",
  'My RAG pipeline is like my memory: retrieves confidently, cites nothing.',
  "Vibe coding: I don't read the code, I just accept all and pray.",
  'The model said it was 95% confident. It was 100% wrong.',
  'GPU go brrr, wallet go smaller.',
  'Every prompt is a hostage negotiation, and the model is holding the tokens.',
  // RAG & grounding
  'RAG: because the model needed adult supervision and a library card.',
  'I added RAG to stop hallucinations. Now it hallucinates with footnotes.',
  'My RAG retrieves the top five chunks, ignores all of them, and answers from vibes.',
  'Grounding an LLM is like grounding a teenager: technically restricted, still finds a way out.',
  "Grounding: teaching the AI that 'I don't know' is a valid answer it will never use.",
  'My model is fully grounded — it now lies strictly within the provided context.',
  // Async & callbacks
  'I passed a callback to the AI. It called me back in production, three days later.',
  "Callback hell is just JavaScript's way of teaching you patience.",
  'I promised to fix callback hell, but I got rejected.',
  'Why did the callback feel ignored? Nobody ever invoked it.',
]

function randomFraction() {
  const value = new Uint32Array(1)
  crypto.getRandomValues(value)
  return value[0] / 4294967296
}

// Green "digital rain" behind the joke window. Skipped when the user prefers reduced motion.
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvasElement: HTMLCanvasElement = canvas
    const context: CanvasRenderingContext2D = ctx

    const fontSize = 16
    const glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネ0123456789ABCDEFZ<>*+'.split('')
    let drops: number[] = []
    let raf = 0

    function resize() {
      canvasElement.width = window.innerWidth
      canvasElement.height = window.innerHeight
      const columns = Math.floor(canvasElement.width / fontSize)
      drops = Array.from({ length: columns }, () => Math.floor((randomFraction() * canvasElement.height) / fontSize))
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      context.fillStyle = 'rgba(0, 0, 0, 0.08)'
      context.fillRect(0, 0, canvasElement.width, canvasElement.height)
      context.fillStyle = '#00ff41'
      context.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const text = glyphs[Math.floor(randomFraction() * glyphs.length)]
        context.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvasElement.height && randomFraction() > 0.975) drops[i] = 0
        drops[i] += 1
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  )
}

// Reveals the joke one character at a time, terminal style.
function useTypewriter(text: string, speed = 35) {
  const [typed, setTyped] = useState('')
  useEffect(() => {
    setTyped('')
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) window.clearInterval(id)
    }, speed)
    return () => window.clearInterval(id)
  }, [text, speed])
  return typed
}

function JokeWindow({ joke, onClose }: Readonly<{ joke: string; onClose: () => void }>) {
  const typed = useTypewriter(joke)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-label="Secret developer joke"
      onCancel={onClose}
      className="fixed inset-0 z-[100] m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-black/85 p-0 backdrop-blur-sm backdrop:bg-transparent"
    >
      <MatrixRain />
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 z-0 h-full w-full cursor-default"
      />
      <div className="relative z-10 mx-4 w-full max-w-md rounded-lg border border-[#00ff41]/60 bg-black/90 p-6 font-mono text-[#00ff41] shadow-[0_0_40px_rgba(0,255,65,0.35)]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#00ff41]/70">{'> wake up, neo…'}</p>
        <p className="mt-4 min-h-[4.5rem] text-base leading-relaxed [text-shadow:0_0_8px_rgba(0,255,65,0.6)]">
          {typed}
          <span className="ml-0.5 inline-block animate-pulse">▋</span>
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded border border-[#00ff41]/40 px-3 py-1.5 text-xs uppercase tracking-widest text-[#00ff41]/80 outline-none transition-colors hover:bg-[#00ff41]/10 focus-visible:bg-[#00ff41]/10"
        >
          [ press esc or click to close ]
        </button>
      </div>
    </dialog>
  )
}

export function EasterEgg() {
  const [joke, setJoke] = useState<string | null>(null)
  // Shuffled queue of joke indices; every joke is dealt once before any repeats.
  const bag = useRef<number[]>([])
  const lastIndex = useRef(-1)

  useEffect(() => {
    let idx = 0
    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key !== SEQUENCE[idx]) {
        idx = key === SEQUENCE[0] ? 1 : 0
        return
      }
      idx += 1
      if (idx < SEQUENCE.length) return
      idx = 0

      if (bag.current.length === 0) {
        const indices = JOKES.map((_, i) => i)
        for (let i = indices.length - 1; i > 0; i -= 1) {
          const j = Math.floor(randomFraction() * (i + 1))
          const tmp = indices[i]
          indices[i] = indices[j]
          indices[j] = tmp
        }
        // Next joke is popped from the end — keep it different from the last one shown.
        const last = indices.length - 1
        if (last > 0 && indices[last] === lastIndex.current) {
          const tmp = indices[0]
          indices[0] = indices[last]
          indices[last] = tmp
        }
        bag.current = indices
      }

      const next = bag.current.pop() ?? 0
      lastIndex.current = next
      setJoke(JOKES[next])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (joke === null) return null
  return <JokeWindow joke={joke} onClose={() => setJoke(null)} />
}
