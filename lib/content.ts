import {
  Rocket,
  Bot,
  Workflow,
  Network,
  BarChart3,
  Palette,
  Sparkles,
  Award,
  TrendingUp,
  Trophy,
  GraduationCap,
  HeartHandshake,
  Users,
  Landmark,
  ShoppingBag,
  RadioTower,
  Zap,
  Stethoscope,
  Car,
  ShieldCheck,
  Activity,
  Plane,
  Sprout,
  Leaf,
  Wheat,
  Mic,
  Image as ImageIcon,
  Video,
  type LucideIcon,
} from 'lucide-react'

export const REPO_URL = 'https://github.com/ramona-gawarwala/v0-dcx-hackathon-2026-website'
export const LIVE_URL = 'https://v0-dcx-hackathon-2026.vercel.app'
export const V0_COMMUNITY_URL = 'https://v0.app/community'
export const VERCEL_TEMPLATES_URL = 'https://vercel.com/templates?type=ai'

// Microsoft Forms registration for the DCX AI Playground Hackathon 2026.
export const REGISTER_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Wq6idgCfa0-V7V0z13xNYVHhzbjsJDpIv5_PXiweEPBUOUpIUjVVMURHR0gwM1dRTFpRWkRaVE40SC4u'

// Microsoft Forms — confidential "Report a problem" form (Code of Conduct / safety).
export const REPORT_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Wq6idgCfa0-V7V0z13xNYVHhzbjsJDpIv5_PXiweEPBUMjA2TlNNTkdVQ0ZIS1lTRVIySUpPNTQ3UC4u'

// Microsoft Forms — mid-event "Pulse Check" (end of Week 1) check-in.
export const PULSE_CHECK_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Wq6idgCfa0-V7V0z13xNYVHhzbjsJDpIv5_PXiweEPBUREpHNTA0Nlg1VU5OSTk2Q0NIVlA4WE9LTi4u'

// Microsoft Teams team and channels used by the DCX AI Playground Hackathon 2026.
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
  { label: 'Why join', href: '/why-join' },
  { label: 'How to build', href: '/how-to-build' },
  { label: 'What to build', href: '/what-to-build' },
  { label: 'AI Integration', href: '/ai-integration' },
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
  { label: 'Why join', href: '/why-join' },
  {
    label: 'Build',
    items: [
      { label: 'How to build', href: '/how-to-build' },
      { label: 'What to build', href: '/what-to-build' },
      { label: 'AI Integration', href: '/ai-integration' },
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
      { label: 'Quick Start', href: '/guides/quick-start' },
      { label: 'AI SDK guide', href: '/guides/ai-sdk-guide' },
      { label: 'Deployment guide', href: '/guides/deployment-guide' },
      { label: 'Build lab', href: '/guides/build-lab' },
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
  { when: 'Mon 7 Sep, 09:00 BST', what: 'Kickoff + team formation' },
  { when: 'Week 1 (7–13 Sep)', what: 'Pick an idea, start building' },
  { when: 'Throughout', what: 'Mentors available in the Help channel' },
  { when: 'Week 2 (14–21 Sep)', what: 'Keep building, wrap up your demo' },
  { when: 'Mon 21 Sep, 23:59 BST', what: 'Submissions due' },
  { when: 'Date to be confirmed', what: 'Demo day + judging' },
]

export const startSteps = [
  {
    step: '01',
    title: 'Describe it in v0',
    body: 'Open v0.app and describe what you want to build in plain language.',
  },
  {
    step: '02',
    title: 'Deploy to Vercel',
    body: 'Use Deploy to publish it, complete any account prompts, and open the resulting live URL.',
  },
  {
    step: '03',
    title: 'Keep iterating',
    body: 'Refine in v0 (or your editor) until it is demo-ready. Done beats perfect.',
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
    does: 'One prompt produces one useful response',
    meaning: 'A direct model call answers, summarises, rewrites, or generates.',
    colorClass: 'text-seed',
    chipClass: 'bg-seed/10 text-seed border-seed/30',
  },
  {
    icon: Leaf,
    n: 2,
    name: 'Sprout',
    codeword: 'Uses evidence or a tool',
    does: 'It grounds a response or calls a tool',
    meaning: 'Approved documents, data, or an API provide real-world context.',
    colorClass: 'text-sprout',
    chipClass: 'bg-sprout/10 text-sprout border-sprout/30',
  },
  {
    icon: Wheat,
    n: 3,
    name: 'Harvest',
    codeword: 'Completes a process',
    does: 'It runs a bounded multi-step process',
    meaning: 'A code-controlled workflow or model-directed agent reaches a result.',
    colorClass: 'text-harvest',
    chipClass: 'bg-harvest/10 text-harvest border-harvest/30',
  },
]

export const flavours = [
  { icon: Mic, name: 'Voice', body: 'Accept spoken input or return a spoken response.' },
  { icon: ImageIcon, name: 'Images', body: 'Understand or create an image, screenshot, or diagram.' },
  { icon: Video, name: 'Video', body: 'Analyse a clip, find key moments, or create a short video.' },
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
      { level: 'Sprout', what: 'Ranks your saved prompts for a task and suggests the best match.' },
      {
        level: 'Harvest',
        what: 'Runs an approved prompt, checks the result, and stops after a set number of refinements.',
      },
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

export const challengeQualityBar = [
  {
    title: 'Prove the outcome',
    body: 'Demo one representative task from input to a result you can verify.',
  },
  {
    title: 'Evaluate beyond the happy path',
    body: 'Try at least three cases, including one edge or failure case, and share what happened.',
  },
  {
    title: 'Make failure visible',
    body: 'Show uncertainty, missing evidence, and tool errors instead of guessing or silently continuing.',
  },
  {
    title: 'Keep people in control',
    body: 'Use public, dummy, or approved data and require approval before consequential actions.',
  },
]

export const challenges: Challenge[] = [
  {
    level: 'Seed',
    title: 'Rewrite Helper',
    problem: 'A message, summary, or note takes too long to get right.',
    build: 'An assistant that summarises, rewrites, translates, or reformats text.',
    done: [
      'It completes one clear job — summarise, rewrite, translate, or reformat — on an example a judge can run live.',
      'A first-time user can supply input and understand the result with no extra instructions.',
      'A messy, empty, or off-topic input is handled gracefully instead of returning a broken or confusing result.',
    ],
  },
  {
    level: 'Seed',
    title: 'Draft It',
    problem: 'Starting from a blank page is the hardest part.',
    build: 'Generate a first draft — an email, a plan, a snippet — from a short brief.',
    done: [
      'A one-line brief produces a usable first draft with the requested purpose, audience, and format.',
      'Changing one detail in the brief visibly changes the draft as expected.',
      'The output is offered as an editable starting point to refine, not a fixed final answer.',
    ],
  },
  {
    level: 'Sprout',
    title: 'Company Concierge',
    problem: 'Customers ask the same product and support questions over and over.',
    build: 'A branded support chatbot with a defined persona that answers from one business’s own knowledge — products, policies, and FAQs.',
    done: [
      'It holds a consistent persona and tone, and answers common questions from the supplied business knowledge.',
      'A judge can trace each answer back to the business facts it was given — no invented prices, specs, or promises.',
      'For anything out of scope or unknown, it admits it and points to a human or contact channel instead of guessing.',
    ],
  },
  {
    level: 'Sprout',
    title: 'Live Lookup',
    problem: 'A useful answer needs current or approved data the model does not have.',
    build: 'Give the AI a tool — an API, a search, a database — it can call to fetch what it needs.',
    done: [
      'It calls an approved API, search, or database and shows the value plus when it was retrieved.',
      'A failed, slow, or empty lookup shows a clear fallback message — never an invented answer.',
    ],
  },
  {
    level: 'Harvest',
    title: 'Do It For Me',
    problem: 'A repetitive, multi-step task eats time that could go elsewhere.',
    build: 'An agent or workflow that completes the task end to end.',
    done: [
      'One representative task runs end to end to the intended result, with the steps it took visible.',
      'The run has a completion condition and a hard step, time, or retry limit, so it always stops.',
      'A failed step is reported and either stops or follows a defined fallback.',
      'Any action that sends, changes, deletes, spends, or publishes waits for explicit human approval.',
    ],
  },
  {
    level: 'Harvest',
    title: 'The Team Play',
    problem: 'One component cannot reliably finish a task that needs distinct skills, tools, or boundaries.',
    build: 'A workflow or small set of specialised agents that hand off or combine work toward one result.',
    done: [
      'Each agent or step has a distinct responsibility with a defined input and output.',
      'The demo shows at least one handoff and how a failed handoff is handled.',
      'You can explain why one agent or a simpler workflow would be less reliable.',
      'The full run has a completion condition and a hard step, time, or retry limit.',
    ],
  },
]

export type ProjectType = {
  icon: LucideIcon
  title: string
  goal: string
}

export const projectTypes: ProjectType[] = [
  {
    icon: Rocket,
    title: 'Product Builder',
    goal: 'Solve a user problem with an app.',
  },
  {
    icon: Bot,
    title: 'AI Agent',
    goal: 'An AI assistant that performs tasks.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    goal: 'Automate a business process.',
  },
  {
    icon: Network,
    title: 'Multi-Agent System',
    goal: 'Multiple agents collaborate.',
  },
  {
    icon: BarChart3,
    title: 'Data & Insights',
    goal: 'Help users understand data.',
  },
  {
    icon: Palette,
    title: 'Experience & Creativity',
    goal: 'Create something engaging.',
  },
]

// Degreed Industry Campuses — 10 focus industries for Capgemini.
export const DEGREED_CAMPUSES_URL = 'https://degreed.com/explore/2504635'

export type IndustryInspiration = {
  icon: LucideIcon
  campus: string
  segment: string
  body: string
}

export const industryInspirations: IndustryInspiration[] = [
  {
    icon: Landmark,
    campus: 'Banking',
    segment: 'Payments',
    body: 'A digital payments journey visualiser: a customer sending a payment, the bank routing, FX conversion, and arrival — beautiful, animated, educational.',
  },
  {
    icon: Landmark,
    campus: 'Banking',
    segment: 'Retail Banking',
    body: 'A personal finance dashboard with spending categories, savings goals, and a credit health score — the kind of thing a challenger bank would ship.',
  },
  {
    icon: ShoppingBag,
    campus: 'Retail',
    segment: 'Selling / Consumer Products',
    body: 'A shoppable product discovery experience: browse, filter, get AI recommendations, add to basket — focused on the quality of the digital shopping journey.',
  },
  {
    icon: RadioTower,
    campus: 'Telecom',
    segment: '5G & Edge',
    body: 'A network coverage map experience: explore 5G availability, latency stats, and use cases (connected cars, smart factories) — data-rich but beautifully presented.',
  },
  {
    icon: Zap,
    campus: 'Energy',
    segment: 'Energy Transition',
    body: 'A renewable energy portfolio dashboard for a utility: solar/wind output, grid load balancing, and carbon offset tracking.',
  },
  {
    icon: Stethoscope,
    campus: 'Public Sector',
    segment: 'Healthcare',
    body: 'A patient portal experience: appointment booking, test results, and GP messaging — the kind of digital service government is trying (and often failing) to build well.',
  },
  {
    icon: Car,
    campus: 'Automotive',
    segment: 'Supply Chain',
    body: 'A live supply chain visibility tool for EV battery components: factory status, shipment tracking, and risk alerts.',
  },
  {
    icon: ShieldCheck,
    campus: 'Insurance',
    segment: 'Health',
    body: 'A health insurance quote and compare experience: personalised, transparent pricing, and a claims submission flow.',
  },
  {
    icon: Activity,
    campus: 'Life Sciences',
    segment: 'MedTech',
    body: 'A clinical device dashboard: real-time patient vitals from a wearable, with alerts and a care team view.',
  },
  {
    icon: Plane,
    campus: 'Aerospace & Defense',
    segment: 'Civil Aeronautics',
    body: 'An aircraft maintenance scheduling tool: upcoming checks, component lifetimes, and engineer allocation.',
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

  export type WhyJoinReason = {
  icon: LucideIcon
  title: string
  body: string
  }

  export const whyJoinIntro =
  'AI is changing how software gets built. This is a low-risk, part-time way to try it on a real project, ship something live, and pick up skills that carry straight into your day job — no experience required.'

  export const whyJoinReasons: WhyJoinReason[] = [
  {
  icon: GraduationCap,
  title: 'Learn by shipping, not watching',
  body: 'Two weeks, one live app. You learn AI-assisted development by actually building and deploying something — the fastest way the skills stick.',
  },
  {
  icon: HeartHandshake,
  title: 'Genuinely open to everyone',
  body: 'Engineers, POs, BAs, designers, first-timers. No setup, no prior AI experience, and beginners and non-engineers can win their own awards.',
  },
  {
  icon: Users,
  title: 'Meet people across the business',
  body: 'Team up across roles and disciplines. You will finish with new connections and a shared thing you built together.',
  },
  {
  icon: TrendingUp,
  title: 'Evidence of your growth',
  body: 'A certificate for everyone who takes part, plus personal feedback recorded on SuccessFactors — real proof of your commitment to growing your skills.',
  },
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
  { icon: Sparkles, label: 'Try something new, low-risk' },
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
    body: 'Learn to build and ship a working app with v0 + Vercel and AI-assisted development — skills that carry into your day job.',
  },
  {
    icon: Trophy,
    title: 'Awards to win',
    body: 'Best Overall, Best Use of AI, Best Design, Best First-Timer / Beginner, and a People\u2019s Choice voted by everyone — beginners and non-engineers can win too.',
  },
  {
    icon: HeartHandshake,
    title: 'Open to everyone',
    body: 'No experience needed. Part-time and low-risk — a friendly way to try AI for the first time.',
  },
  {
    icon: Users,
    title: 'Teammates & connections',
    body: 'Team up across roles — engineers, POs, BAs, and designers — to combine complementary skills and perspectives.',
  },
]

export const submitChecklist = [
  { title: 'Live URL', body: 'Your deployed app — public, with no password or login wall (must open and work).' },
  { title: 'Public repo or v0 link', body: 'Public, not private or password-protected, so judges can see how you built it.' },
  { title: 'Title + one-line pitch', body: 'What it does, in plain words.' },
  { title: 'Demo video (2–3 min)', body: 'A screen recording of the app working — a demo, not a presentation.' },
  { title: 'Project type', body: 'Which of the 6 project types you built — the form asks for this.' },
  { title: 'How you used AI', body: 'How AI helped you build, plus whether the shipped app calls a model at runtime.' },
  { title: 'Team', body: 'Who built it.' },
  { title: 'Optional: enter People\u2019s Choice', body: 'Share your app in the Submissions channel so other participants can vote for their favourite.' },
]
