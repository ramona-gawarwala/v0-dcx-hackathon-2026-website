import {
  Rocket,
  Bot,
  Workflow,
  Network,
  BarChart3,
  Palette,
  Sprout,
  Leaf,
  Wheat,
  Mic,
  Image as ImageIcon,
  Video,
  Award,
  TrendingUp,
  Trophy,
  GraduationCap,
  HeartHandshake,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const REPO_URL = 'https://github.com/ramona-gawarwala/v0-dcx-hackathon-2026-website'
export const LIVE_URL = 'https://v0-dcx-hackathon-2026-website.vercel.app'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Project types', href: '/#project-types' },
  { label: 'Challenges', href: '/#challenges' },
  { label: 'Judging', href: '/#judging' },
  { label: 'Submit', href: '/#submit' },
  { label: 'FAQ', href: '/faq' },
]

export const schedule = [
  { when: 'Mon 1 Sep', what: 'Kickoff + team formation' },
  { when: 'Week 1 (1–7 Sep)', what: 'Pick a challenge, start building' },
  { when: 'Throughout', what: 'Mentors available in the team channel' },
  { when: 'Week 2 (8–14 Sep)', what: 'Keep building, wrap up your demo' },
  { when: 'Sun 14 Sep', what: 'Submissions due' },
  { when: 'Demo day', what: 'Demos + judging' },
]

export const startSteps = [
  {
    step: '01',
    title: 'Describe it on v0.dev',
    body: 'Go to v0.dev and describe what you want to build in plain language.',
  },
  {
    step: '02',
    title: 'Deploy to Vercel',
    body: 'Click Deploy to publish it — you get a live URL instantly, no setup.',
  },
  {
    step: '03',
    title: 'Keep iterating',
    body: 'Refine in v0 (or your editor) until it is demo-ready. Done beats perfect.',
  },
]

export type ProjectType = {
  icon: LucideIcon
  emoji: string
  title: string
  goal: string
  examples: string
  checklist: string[]
  goodFor: string
}

export const projectTypes: ProjectType[] = [
  {
    icon: Rocket,
    emoji: '🚀',
    title: 'Product Builder',
    goal: 'Solve a user problem with an app.',
    examples: 'Internal productivity tool, learning platform, accessibility solution, sustainability dashboard.',
    checklist: ['UI', 'Business logic', 'Data storage', 'Deployment'],
    goodFor: 'POs · BAs · Designers · Full-stack devs',
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI Agent',
    goal: 'An AI assistant that performs tasks.',
    examples: 'Knowledge assistant, meeting assistant, documentation assistant, support chatbot.',
    checklist: ['Chat UI', 'Model', 'Prompt', 'Tool(s)', 'Deployment'],
    goodFor: 'Developers · AI enthusiasts',
  },
  {
    icon: Workflow,
    emoji: '🔄',
    title: 'AI Workflow Automation',
    goal: 'Automate a business process.',
    examples: 'Ticket triage, email classification, report generation, approval workflows.',
    checklist: ['Trigger', 'Workflow', 'AI step', 'Output action'],
    goodFor: 'Developers · BAs · Process specialists',
  },
  {
    icon: Network,
    emoji: '🤖🤖',
    title: 'Multi-Agent System',
    goal: 'Multiple agents collaborate.',
    examples: 'Product Owner Agent, Architect Agent, Developer Agent, Tester Agent.',
    checklist: ['Coordinator', 'Specialist agents', 'Shared context', 'Final response'],
    goodFor: 'Advanced participants — keep scope small',
  },
  {
    icon: BarChart3,
    emoji: '📊',
    title: 'Data & Insights',
    goal: 'Help users understand data.',
    examples: 'Dashboards, analytics, AI insights, forecasting.',
    checklist: ['Data source', 'Processing', 'Visualisation', 'Deployment'],
    goodFor: 'Anyone working with data',
  },
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Experience & Creativity',
    goal: 'Create something engaging.',
    examples: 'Games, interactive stories, visualisations, AI-powered experiences.',
    checklist: ['Interactive UI', 'AI / content engine', 'Content or assets', 'Deployment'],
    goodFor: 'Designers and anyone having fun with it',
  },
]

export type Level = {
  icon: LucideIcon
  n: number
  name: string
  codeword: string
  does: string
  meaning: string
  colorClass: string
  chipClass: string
}

export const levels: Level[] = [
  {
    icon: Sprout,
    n: 1,
    name: 'Seed',
    codeword: 'Answers or creates',
    does: 'You prompt it, it responds',
    meaning: 'Answer, summarise, rewrite, generate. The fastest way to a working demo.',
    colorClass: 'text-seed',
    chipClass: 'bg-seed/10 text-seed border-seed/30',
  },
  {
    icon: Leaf,
    n: 2,
    name: 'Sprout',
    codeword: 'Works with your stuff',
    does: 'It uses your documents, data, or a tool/API',
    meaning: 'Give the AI your content or a tool so it does something real — not just chat.',
    colorClass: 'text-sprout',
    chipClass: 'bg-sprout/10 text-sprout border-sprout/30',
  },
  {
    icon: Wheat,
    n: 3,
    name: 'Harvest',
    codeword: 'Does it for you',
    does: 'It takes several steps on its own',
    meaning: 'An agent, a workflow, or a chain that reaches a result mostly hands-off.',
    colorClass: 'text-harvest',
    chipClass: 'bg-harvest/10 text-harvest border-harvest/30',
  },
]

export const flavours = [
  { icon: Mic, name: 'Voice', body: 'Speak to it (speech-to-text) or have it speak back (text-to-speech).' },
  { icon: ImageIcon, name: 'Images', body: 'Read a photo, screenshot, or diagram (image-to-text).' },
  { icon: Video, name: 'Video', body: 'Pull a summary or key moments from a clip (video-to-text).' },
]

export const growthExample = [
  { level: 'Seed', what: 'Generates example sentences from a word', ai: 'creating on request' },
  { level: 'Sprout', what: 'Quizzes you on your vocab list', ai: 'working with your data' },
  { level: 'Harvest', what: 'Plans a lesson, quizzes you, tracks progress', ai: 'running several steps for you' },
]

export type Challenge = {
  level: 'Seed' | 'Sprout' | 'Harvest'
  title: string
  problem: string
  build: string
  done: string[]
}

export const challenges: Challenge[] = [
  {
    level: 'Seed',
    title: 'Rewrite Helper',
    problem: 'A message, summary, or note takes too long to get right.',
    build: 'An assistant that summarises, rewrites, translates, or reformats text.',
    done: ['It does its one job on a real example.', 'Anyone can use it without instructions.'],
  },
  {
    level: 'Seed',
    title: 'Draft It',
    problem: 'Starting from a blank page is the hardest part.',
    build: 'Generate a first draft — an email, a plan, a snippet — from a short brief.',
    done: ['It turns a one-line brief into something usable.', 'The result is a real head-start, not just filler.'],
  },
  {
    level: 'Sprout',
    title: 'Ask My Docs',
    problem: 'The answer is buried in documents nobody wants to read.',
    build: 'Point it at your own docs and ask questions grounded in them.',
    done: ['It answers from your content, not general knowledge.', 'It says "I don\'t know" instead of making things up.'],
  },
  {
    level: 'Sprout',
    title: 'Live Lookup',
    problem: 'A useful answer needs fresh or private data the model does not have.',
    build: 'Give the AI a tool — an API, a search, a database — it can call to fetch what it needs.',
    done: ['It calls the tool and uses the result in its answer.', 'It works on a real, current example.'],
  },
  {
    level: 'Harvest',
    title: 'Do It For Me',
    problem: 'A repetitive, multi-step task eats time that could go elsewhere.',
    build: 'An agent or workflow that completes the task end to end.',
    done: [
      'It runs end to end on a real example.',
      'A human only steps in for the tricky bits.',
      'It handles at least one obvious edge case gracefully.',
    ],
  },
  {
    level: 'Harvest',
    title: 'The Team Play',
    problem: 'One assistant is not enough — the task needs different skills or steps.',
    build: 'A workflow or multiple agents that collaborate toward a result.',
    done: ['Each step or agent has a clear job.', 'They combine into one coherent result you can demo.'],
  },
]

export const judgingCriteria = [
  { criterion: 'Impact', weight: 30, question: 'Does it solve a real problem worth solving?' },
  { criterion: 'Innovation', weight: 25, question: 'Is it creative or a fresh use of AI?' },
  { criterion: 'Execution', weight: 25, question: 'Does it actually work in the demo?' },
  { criterion: 'Experience', weight: 10, question: 'Is it clear and pleasant to use?' },
  { criterion: 'Demo', weight: 10, question: 'Was the pitch clear and to the point?' },
]

export const awards = [
  'Best Overall',
  'Best Use of AI',
  'Best Design',
  'Best First-Timer / Beginner',
]

export type Benefit = {
  icon: LucideIcon
  title: string
  body: string
}

export const benefitHighlights: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: 'Certificate of participation' },
  { icon: TrendingUp, label: 'Feedback on SuccessFactors' },
  { icon: GraduationCap, label: 'Hands-on AI skills' },
  { icon: Trophy, label: 'A shot at an award' },
]

export const benefits: Benefit[] = [
  {
    icon: Award,
    title: 'Certificate of participation',
    body: 'Everyone who takes part earns one — proof you showed up and built something.',
  },
  {
    icon: TrendingUp,
    title: 'Feedback on SuccessFactors',
    body: 'Personal feedback recorded on your SuccessFactors — real evidence of your commitment to growing your skills.',
  },
  {
    icon: GraduationCap,
    title: 'Real AI skills you keep',
    body: 'Learn to build and ship a working AI app with v0 + Vercel, hands-on — skills that carry into your day job.',
  },
  {
    icon: Trophy,
    title: 'Awards to win',
    body: 'Best Overall, Best Use of AI, Best Design, and Best First-Timer — beginners and non-engineers can win too.',
  },
  {
    icon: HeartHandshake,
    title: 'Open to everyone',
    body: 'No experience needed. Part-time and low-risk — a friendly way to try AI for the first time.',
  },
  {
    icon: Users,
    title: 'Teammates & connections',
    body: 'Team up across roles — engineers, POs, BAs, and designers. Mixed teams build the best products.',
  },
]

export const submitChecklist = [
  { title: 'Live URL', body: 'Your deployed Vercel app (must open and work).' },
  { title: 'Repo or v0 link', body: 'So judges can see how you built it.' },
  { title: 'Title + one-line pitch', body: 'What it does, in plain words.' },
  { title: 'Demo video (2–3 min)', body: 'A screen recording of the app working — a demo, not a presentation.' },
  { title: 'Team + challenge', body: 'Who you are and which challenge you picked.' },
]
