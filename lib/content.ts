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
export const V0_COMMUNITY_URL = 'https://v0.dev/community'
export const VERCEL_TEMPLATES_URL = 'https://vercel.com/templates'

// Microsoft Forms registration for the AI Playground Hackathon.
export const REGISTER_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Wq6idgCfa0-V7V0z13xNYVHhzbjsJDpIv5_PXiweEPBUOUpIUjVVMURHR0gwM1dRTFpRWkRaVE40SC4u'

// Microsoft Forms — anonymous "Report a problem" form (Code of Conduct / safety).
export const REPORT_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Wq6idgCfa0-V7V0z13xNYVHhzbjsJDpIv5_PXiweEPBUMjA2TlNNTkdVQ0ZIS1lTRVIySUpPNTQ3UC4u'

// Microsoft Forms — mid-event "Pulse Check" (end of Week 1) check-in.
export const PULSE_CHECK_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Wq6idgCfa0-V7V0z13xNYVHhzbjsJDpIv5_PXiweEPBUREpHNTA0Nlg1VU5OSTk2Q0NIVlA4WE9LTi4u'

// Microsoft Teams — "General | Innovation Hackathon 2026" team and its channels
export const TEAMS_TEAM_URL =
  'https://teams.microsoft.com/l/team/19%3A6VZc0lYnAVy-qh6prOW7bX4V4yAcAyzRikL3TJPp85A1%40thread.tacv2/conversations?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61'
export const TEAMS_ANNOUNCEMENTS_URL =
  'https://teams.microsoft.com/l/channel/19%3A6VZc0lYnAVy-qh6prOW7bX4V4yAcAyzRikL3TJPp85A1%40thread.tacv2/%F0%9F%93%A2%20Announcements?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61'
export const TEAMS_TEAM_FORMATION_URL =
  'https://teams.microsoft.com/l/channel/19%3Ab74e2bdfc48743eb87251501ff7529ed%40thread.tacv2/%F0%9F%91%A5%20Team%20Formation?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61'
export const TEAMS_HELP_URL =
  'https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61'
export const TEAMS_SUBMISSIONS_URL =
  'https://teams.microsoft.com/l/channel/19%3A5b966dd4bf2443718c2214df59d3bce8%40thread.tacv2/Submissions?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Start building', href: '/start-building' },
  { label: 'Project types', href: '/project-types' },
  { label: 'Challenges', href: '/challenges' },
  { label: 'What you get', href: '/benefits' },
  { label: 'Judging', href: '/judging' },
  { label: 'Submit', href: '/submit' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Help', href: '/help' },
]

export type NavLeaf = { label: string; href: string }
export type NavGroup = { label: string; items: NavLeaf[] }
export type NavEntry = NavLeaf | NavGroup

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return 'items' in entry
}

// Grouped navigation for the sidebar: every section and guide is its own page,
// grouped so related pages sit together.
export const navMenu: NavEntry[] = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  {
    label: 'Build',
    items: [
      { label: 'Start building', href: '/start-building' },
      { label: 'Project types', href: '/project-types' },
      { label: 'Challenges', href: '/challenges' },
    ],
  },
  {
    label: 'Compete',
    items: [
      { label: 'What you get', href: '/benefits' },
      { label: 'Judging', href: '/judging' },
      { label: 'Submit', href: '/submit' },
    ],
  },
  {
    label: 'Guides',
    items: [
      { label: 'Beginner guide', href: '/guides/beginner-guide' },
      { label: 'AI SDK guide', href: '/guides/ai-sdk-guide' },
      { label: 'Deployment guide', href: '/guides/deployment-guide' },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'Code of Conduct', href: '/code-of-conduct' },
      { label: 'Report a problem', href: '/report' },
    ],
  },
  {
    label: 'Support',
    items: [
      { label: 'Help', href: '/help' },
      { label: 'Resources', href: '/resources' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
]

export const schedule = [
  { when: 'Mon 1 Sep', what: 'Kickoff + team formation' },
  { when: 'Week 1 (1–7 Sep)', what: 'Pick a challenge, start building' },
  { when: 'Throughout', what: 'Mentors available in the team channel' },
  { when: 'Week 2 (8–14 Sep)', what: 'Keep building, wrap up your demo' },
  { when: 'Mon 14 Sep', what: 'Submissions due' },
  { when: 'Demo day (TBC)', what: 'Demos + judging' },
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
  ideas: string[]
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
    ideas: ['Onboarding checklist app', 'Accessibility contrast checker', 'Team skills directory', 'Expense-policy helper'],
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI Agent',
    goal: 'An AI assistant that performs tasks.',
    examples: 'Knowledge assistant, meeting assistant, documentation assistant, support chatbot.',
    checklist: ['Chat UI', 'Model', 'Prompt', 'Tool(s)', 'Deployment'],
    goodFor: 'Developers · AI enthusiasts',
    ideas: ['Docs Q&A assistant', 'Meeting-notes summariser', 'New-joiner onboarding buddy', 'Ticket-reply drafter'],
  },
  {
    icon: Workflow,
    emoji: '🔄',
    title: 'AI Workflow Automation',
    goal: 'Automate a business process.',
    examples: 'Ticket triage, email classification, report generation, approval workflows.',
    checklist: ['Trigger', 'Workflow', 'AI step', 'Output action'],
    goodFor: 'Developers · BAs · Process specialists',
    ideas: ['Inbox triage & routing', 'Weekly report generator', 'Bug-report classifier', 'Approval reminders'],
  },
  {
    icon: Network,
    emoji: '🤖🤖',
    title: 'Multi-Agent System',
    goal: 'Multiple agents collaborate.',
    examples: 'Product Owner Agent, Architect Agent, Developer Agent, Tester Agent.',
    checklist: ['Coordinator', 'Specialist agents', 'Shared context', 'Final response'],
    goodFor: 'Advanced participants — keep scope small',
    ideas: ['PO → Dev → Tester pipeline', 'Researcher + writer + reviewer', 'Planner + solver + checker'],
  },
  {
    icon: BarChart3,
    emoji: '📊',
    title: 'Data & Insights',
    goal: 'Help users understand data.',
    examples: 'Dashboards, analytics, AI insights, forecasting.',
    checklist: ['Data source', 'Processing', 'Visualisation', 'Deployment'],
    goodFor: 'Anyone working with data',
    ideas: ['CSV → chart explainer', 'Survey theme finder', 'Simple forecast dashboard', 'Anomaly spotter'],
  },
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Experience & Creativity',
    goal: 'Create something engaging.',
    examples: 'Games, interactive stories, visualisations, AI-powered experiences.',
    checklist: ['Interactive UI', 'AI / content engine', 'Content or assets', 'Deployment'],
    goodFor: 'Designers and anyone having fun with it',
    ideas: ['Text-to-slides generator', 'Illustrated story maker', 'Quick quiz game', 'List-to-diagram tool'],
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

export type GrowthIdea = {
  name: string
  tagline: string
  steps: { level: 'Seed' | 'Sprout' | 'Harvest'; what: string }[]
}

export const growthIdeas: GrowthIdea[] = [
  {
    name: 'Language helper',
    tagline: 'Learn a language with a little help.',
    steps: [
      { level: 'Seed', what: 'Generates example sentences from a word.' },
      { level: 'Sprout', what: 'Quizzes you on your own vocab list.' },
      { level: 'Harvest', what: 'Plans lessons, quizzes you, and tracks your progress.' },
    ],
  },
  {
    name: 'Learning buddy',
    tagline: 'Prep for an exam with an AI coach.',
    steps: [
      { level: 'Seed', what: 'Turns a topic into practice questions and a case scenario.' },
      { level: 'Sprout', what: 'Quizzes you from your own notes and syllabus.' },
      { level: 'Harvest', what: 'Tracks weak spots, schedules revision, and sets fresh scenarios up to exam day.' },
    ],
  },
  {
    name: 'Prompt library',
    tagline: 'Build and reuse better prompts.',
    steps: [
      { level: 'Seed', what: 'Writes a tailored prompt from your goal and constraints.' },
      { level: 'Sprout', what: 'Saves, searches, and reuses your own prompt library.' },
      { level: 'Harvest', what: 'Picks the right prompt for a task, runs it, and refines until it fits.' },
    ],
  },
  {
    name: 'Activity by weather',
    tagline: 'Find something to do, rain or shine.',
    steps: [
      { level: 'Seed', what: 'Suggests activities from the weather and who you’re with.' },
      { level: 'Sprout', what: 'Checks a live weather API for your location.' },
      { level: 'Harvest', what: 'Sends a daily plan that adapts to the forecast and who’s free.' },
    ],
  },
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
  'People\u2019s Choice (voted by participants)',
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
  { icon: Sprout, label: 'Grow outside your comfort zone' },
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
    body: 'Best Overall, Best Use of AI, Best Design, Best First-Timer, and a People\u2019s Choice voted by everyone — beginners and non-engineers can win too.',
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
  { title: 'Live URL', body: 'Your deployed Vercel app — public, with no password or login wall (must open and work).' },
  { title: 'Public repo or v0 link', body: 'Public, not private or password-protected, so judges can see how you built it.' },
  { title: 'Title + one-line pitch', body: 'What it does, in plain words.' },
  { title: 'Demo video (2–3 min)', body: 'A screen recording of the app working — a demo, not a presentation.' },
  { title: 'Project type', body: 'Which of the 6 project types you built — the form asks for this.' },
  { title: 'Team + challenge', body: 'Who you are and which challenge you picked.' },
  { title: 'Optional: enter People\u2019s Choice', body: 'Share your app in the Submissions channel so other participants can vote for their favourite.' },
]
