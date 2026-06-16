/* ============================================================================
   PROJECT DATA — image/video map + case-study content for the work grid & detail.
   Loaded as a classic script before router.js (shares the global scope).
   ============================================================================ */
const SIMGS = {
  smartons:         'assets/images/projects/smartons.png',
  aichat:           'assets/images/projects/aichat.png',
  ach:              'assets/images/projects/ach-hero.png',
  'ach-challenge':  'assets/images/projects/ach-challenge.png',
  'ach-structure':  'assets/images/projects/ach-structure.png',
  'ach-clarity':    'assets/images/projects/ach-clarity.png',
  'ach-states':     'assets/images/projects/ach-states.png',
  'ach-results':    'assets/images/projects/ach-results.png',
  loyalty:          'https://cdn.prod.website-files.com/69d55e03ef17456cdadfc3e2/69d7a9e0f4b40a7fe387a543_7f50745a-78e1-43ff-9538-856a9eb998b4.avif',
  premium:          'assets/images/projects/premium.avif',
  kb:               'assets/images/projects/kb-hero.png',
  'kb-problem':     'assets/images/projects/kb-problem.png',
  'kb-research':    'assets/images/projects/kb-research.png',
  'kb-filemanager': 'assets/images/projects/kb-filemanager.png',
  'kb-metadata':    'assets/images/projects/kb-metadata.png',
  'kb-scoping':     'assets/images/projects/kb-scoping.png',
  aisim:            'assets/images/projects/aisim-hero.png',
  'aisim-submodule':'assets/images/projects/aisim-submodule.png',
  'aisim-impact':   'assets/images/projects/aisim-impact.png',
  'smartons-before':'assets/images/projects/smartons-before.png',
  'smartons-now':   'assets/images/projects/smartons-now.svg',
  'smartons-4':     'assets/images/projects/smartons-4.png',
  'loyalty-before':    'assets/images/projects/loyalty-before.png',
  'loyalty-testing':   'assets/images/projects/loyalty-testing.png',
  'loyalty-research-1':'assets/images/projects/loyalty-research-1.png',
  'loyalty-research-2':'assets/images/projects/loyalty-research-2.png',
  'redesign-3':         'assets/images/projects/redesign-3.png',
  'redesign-4':         'assets/images/projects/redesign-4.png',
  'redesign-5':         'assets/images/projects/redesign-5.png',
  'premium-personas':  'assets/images/projects/premium-personas.png',
  'premium-flow':      'assets/images/projects/premium-flow.avif',
  'premium-delivery':  'assets/images/projects/premium-delivery.png'
};

const SVIDS = {
  smartons:            'assets/videos/smartons-cover.mp4',
  aichat:              'assets/videos/aichat-cover.mp4',
  'smartons-types':    'assets/videos/smartons-types.mov',
  loyalty:             'assets/videos/co1ns-cover.mp4',
  premium:             'assets/videos/premium-plans-cover.mp4',
  'loyalty-roulette':  'assets/videos/loyalty-roulette.mp4',
  'redesign-1':          'assets/videos/redesign-1.mov',
  'aisim-problem':       'assets/videos/aisim-problem.mov',
  'aisim-simulating':    'assets/videos/aisim-simulating.mov',
  'aisim-nondeterministic':'assets/videos/aisim-nondeterministic.mov'
};

const PROJECTS = {
  smartons:{
    eye:'Atomchat · 2024 · AI SaaS',
    title:'Smartons — AI-powered flowbuilder',
    lead:'An AI-powered component replacing complex branched conversation flows with prompt-based conversational agents. Enables non-technical teams to build intelligent chatbot workflows through natural language.',
    meta:[{l:'Role',v:'Lead Product Designer'},{l:'Company',v:'Atomchat · Remote'},{l:'Year',v:'2024'},{l:'Status',v:'Shipped ✓'}],
    sections:[
      {img:'smartons-before',title:'The problem',desc:'Teams were building complex branched conversation flows node-by-node — a slow, error-prone process that required technical knowledge. Non-technical operators were blocked from creating or editing flows independently.',flip:false},
      {img:'smartons-now',title:'How it works now',desc:'Smartons replaces the entire branched-flow builder with a single prompt-based component. Operators describe what they want the agent to do in natural language, and the AI handles the conversation logic. Flow creation time dropped from hours to minutes.',flip:true},
      {vid:'smartons-types',style:'vid',title:'Smarton types',desc:'Different conversation goals require different Smarton configurations. Each type is purpose-built for a specific interaction pattern — from lead capture to transactional support — so operators pick the right model for each use case.',flip:false},
      {img:'smartons-4',title:'Design system & handoff',desc:'Deliverables included product UI designs, interaction flows, conceptual models, and demo videos and prototypes — covering the full scope from problem framing to a shipped, AI-driven conversation system.',flip:true}
    ]
  },
  aichat:{
    eye:'n1co technologies · Product · AI',
    title:'n1co Asistente',
    lead:'Designing the first AI-powered financial assistant inside n1co — navigating the tension between a bold conversational vision and the trust constraints of a fintech product.',
    meta:[{l:'Role',v:'Product Designer'},{l:'Company',v:'n1co technologies'},{l:'Type',v:'0 → 1 · MVP'},{l:'Status',v:'Shipped ✓'}],
    sections:[
      {vid:'aichat',title:'Value hidden in plain sight',desc:'n1co had built real value for users — cashback, co1ns, installment purchases, savings. But most of it went unnoticed. Users accumulated cashback without knowing how much they\'d earned, had financed purchases without knowing when the next payment was due, and called support for things that lived inside the app. The information existed. The problem was access.',flip:false},
      {title:'The vision — a personal financial assistant',desc:'The initial vision was more than a chatbot. An assistant that could answer "How much cashback did I earn this month?", tell you when your next installment was due, and even execute actions — "Put 20% of my cashback toward savings" or "Round up my purchases and save the difference." The goal: transform n1co from a transactional app into an active financial health tool.',flip:true},
      {title:'The discovery — generative AI risks in fintech',desc:'Early tests with generative AI models were promising — and alarming. The AI hallucinated when it lacked context, misinterpreted financial data, answered questions outside the product\'s scope, and couldn\'t reliably handle sensitive conversations like complaints or disputes. A constantly updated knowledge base for every user and every product would be required. The challenge wasn\'t just designing an assistant. It was designing a trustworthy one.',flip:false},
      {title:'The strategic pivot — structure before openness',desc:'Rather than chase a fully open conversational experience from day one, we reframed the problem: how do we deliver real AI value without inheriting the risks of unrestricted AI? The answer was a guided V1. Instead of a free-text input, users would interact through predefined options representing the highest-value use cases — with AI generating personalized narratives behind each one, within controlled and safe frameworks. The result: personalization and trust in the same product.',flip:true},
      {title:'n1co Asistente V1',desc:'A structured conversational experience giving users instant access to: cashback summary, spending summaries by period, financed purchases and upcoming payments, benefits earned through co1ns, and personalized financial tips. Each option was powered by AI that generated narratives using the user\'s specific account data — intelligent, personal, and bounded. V1 became the foundation for future versions that would progressively open the conversation.',flip:false}
    ]
  },
  ach:{
    heroContain:true,
    eye:'Hapi app · 2024 · Fintech',
    title:'ACH deposits',
    lead:'What looked like a straightforward feature addition turned into a UX challenge about constraint, trust, and designing for a market that doesn\'t forgive ambiguity with money.',
    meta:[{l:'Role',v:'Product Designer'},{l:'Company',v:'Hapi app · Remote'},{l:'Year',v:'2024'},{l:'Type',v:'End-to-end flow'},{l:'Status',v:'Shipped ✓'}],
    sections:[
      {img:'ach-challenge',title:'A constraint that became the design challenge',desc:'ACH transfers couldn\'t be integrated into the existing transfers module — infrastructure and third-party provider limitations required a separate entry point. The UX implication was real: users expect all money movement in one place. Instead, ACH launched via a banner. The design challenge became making a non-standard entry point feel trustworthy and intentional in a financial context.',flip:false},
      {img:'ach-structure',title:'Structure by intent, adapted by country',desc:'The flow opens with a single decision: deposit or withdraw. This framing keeps users oriented before any complexity is introduced. From there, the UI adapts to the user\'s country — the number of available methods varies significantly across LATAM, so the interface had to work cleanly with one method or several, without breaking in either case.',flip:true},
      {img:'ach-clarity',title:'Clarity as a trust signal',desc:'In cross-border finance, ambiguity erodes trust fast. Every screen involving money showed a full fee breakdown and the exact final amount the user would receive. Currency codes (USD) replaced the "$" symbol throughout — ambiguous across Latin America where fiat, crypto, and financial assets coexist in the same product. A full review screen before execution ensured no surprises at the end.',flip:false},
      {img:'ach-states',title:'Transaction states & account management',desc:'Four clear states were defined: Initiated → In Validation → Additional Validation Required → Completed. The additional validation state handled compliance-triggered document requests without dropping users out of the flow. The feature also included a complete account management system — add, edit, and delete U.S. bank accounts, including multiple accounts at the same bank.',flip:true},
      {img:'ach-results',title:'Results',desc:'+38% adoption rate post-launch. 72% completion rate on initiated transfers. −25% reduction in support tickets related to money movement. +18% increase in repeat transfers within 30 days. The banner constraint that initially seemed like a UX problem ended up forcing clearer intent communication than a buried menu item ever would have.',flip:false}
    ]
  },
  loyalty:{
    eye:'n1co technologies · 2023 · UX/UI',
    title:'Loyalty program redesign',
    lead:'Redesigned the co1ns loyalty program at n1co from the ground up — fixing currency inflation, redefining what "earning" means, and rebuilding user motivation through gamification. Validated through two rounds of moderated user testing.',
    meta:[{l:'Role',v:'UX/UI Designer'},{l:'Company',v:'n1co technologies'},{l:'Year',v:'2023'},{l:'Type',v:'0 → 1 Redesign'},{l:'Team',v:'UX Lead · PO · 2 Devs'},{l:'Tools',v:'Figma · FigJam · Maze'}],
    heroType:'phone',
    sections:[
      {img:'loyalty-before',style:'phone',title:'The problem — a currency nobody trusted',desc:'The original co1ns system rewarded transactions with massive co1n amounts — a $10 purchase could earn 1,500 co1ns. This created a currency inflation problem: items in the n1co Shop cost 8,000 to 100,000+ co1ns. Users felt they had plenty of co1ns, but that they were worthless. The result was frustration, disengagement, and a loyalty program that was actively hurting the brand.',flip:false},
      {vid:'redesign-1',style:'phone',title:'Research findings',desc:'User interviews surfaced four consistent pain points: users felt their co1ns were useless despite having many; the challenges mechanic was confusing and poorly understood; rewards felt unreachable; and the level system rewarded spending power over real usage. The program was inadvertently segmenting users by income, not by loyalty — the opposite of its stated goal.',flip:true},
      {img:'redesign-3',title:'Separating co1ns from progress',desc:'The core architectural decision was to decouple two things the original system conflated: currency (co1ns) and progression (level). co1ns remained as a redemption currency, earned through transactions. A new parallel system — Activity Points, represented by a blue diamond — was introduced to define rank. Points are earned exclusively through challenges, meaning rank reflects actual usage, not spending power.',flip:false},
      {img:'redesign-4',title:'A new rank system',desc:'The level system was rebuilt as four named ranks: Dinosaur → Bronze → Silver → N1. Each rank has specific benefits, a visible points goal, and clear progress feedback (e.g., Dinosaur: 0 / 70 pts → next rank). A periodic evaluation mechanic was also added: users are repositioned based on their recent activity at set intervals, keeping engagement ongoing and stakes real.',flip:true},
      {img:'redesign-5',title:'Rewards, roulette & streaks',desc:'The n1co Shop was renamed Rewards to shift its perception from transactional to aspirational. Three gamification mechanics were layered in: a Roulette available on a timer (prizes: co1ns, points, cashback, or extra spins); a Streak system tied to actual card usage to avoid rewarding inactive users; and Achievements — collectible badges linked to real milestones like creating an account, redeeming a reward, or winning a spin event.',flip:false},
      {img:'loyalty-research-1',style:'phone',title:'User testing round 1 — diagnosing comprehension',desc:'Semi-structured interviews with n1co users aged 25–35. Tasks: identify what co1ns are, level up, redeem co1ns, locate receipts. Key findings: 60% found redemption unclear — especially the roulette mechanic — and 100% were uncertain about what rewards each rank actually unlocked. These gaps directly shaped the next iteration.',flip:true},
      {img:'loyalty-research-2',style:'phone',title:'User testing round 2 — improved comprehension',desc:'Second round showed full comprehension of co1n balances, spin limits, and leveling mechanics. Users preferred earning co1ns via roulette over challenges. One persistent gap: rank-specific rewards still needed clearer surfacing. 40% of users said they\'d be "very disappointed" if the program were removed — a strong product-market fit signal (Sean Ellis Score).',flip:false},
      {layout:'text-only',title:'Impact & outcome',desc:'The redesign eliminated coin inflation by decoupling currency from progression — co1ns became a redemption currency earned through transactions, while Activity Points (blue diamond) defined rank through actual app usage, not spending power. Four named ranks replaced the old level system, each with visible progress goals and periodic re-evaluation to keep engagement ongoing. Gamification layers — Roulette, Streaks, and Achievements — gave users recurring reasons to return. The result was a system that is equitable, sustainable, and aligned with real loyalty: rewarding how much users engage, not how much they spend.',flip:false}
    ]
  },
  premium:{
    eye:'n1co technologies · 2024 · Fintech',
    title:'Premium plans',
    lead:'Designing the upgrade path that converts free users into paying subscribers — built from scratch for two distinct audience segments.',
    meta:[{l:'Role',v:'UX Designer'},{l:'Company',v:'n1co technologies'},{l:'Year',v:'2024'},{l:'Type',v:'0 → 1 · Conversion UX'},{l:'Team',v:'UX Lead · 2 POs'},{l:'Tools',v:'Figma · FigJam · Maze'}],
    heroType:'phone',
    sections:[
      {img:'premium-personas',style:'phone',title:'Two distinct personas',desc:'Research revealed two buyer segments with different needs and price sensitivity. Junior: ages 18–27 — students, first-job holders, call center agents, and entrepreneurs looking for their first premium plan. Plus: ages 28–35 — salaried professionals with medium-high income and prior subscription experience who expect higher-value features and benefits.',flip:false},
      {layout:'text-only',title:'Research & discovery',desc:'Conducted focus groups across both age demographics in collaboration with the Product Team. Benchmarked competitor subscription models and pricing strategies to ensure the plans matched real user needs and affordability expectations. Persona definition came directly from these sessions — two distinct entry points requiring two different conversations about value.',flip:false},
      {img:'premium-flow',title:'The upgrade journey',desc:'Designed a frictionless upgrade path: feature discovery → plan comparison → payment → onboarding to premium features. The workflow served as the foundational guide through the entire acquisition system, enabling a seamless transition to high-fidelity UI delivered to the development and stakeholder teams.',flip:true},
      {img:'premium-delivery',style:'phone',title:'Design delivery & next steps',desc:'Designs and workflow documentation were delivered to the development team and presented to the marketing team. Post-launch focus shifted to performance analytics — tracking plan conversion rates across Junior and Plus cohorts to validate the segmented approach and inform the next iteration of the acquisition experience.',flip:false}
    ]
  },
  kb:{
    eye:'Atomchat · 2024 · AI Infrastructure',
    title:'Knowledge base module',
    lead:'A centralized file manager that lets multiple AI Agents (Smartons) share one source of truth — replacing fragmented, per-agent knowledge bases with a Drive-like library built for control, consistency, and easy maintenance.',
    meta:[{l:'Role',v:'Product Designer'},{l:'Company',v:'Atomchat · Remote'},{l:'Year',v:'2024'},{l:'Team',v:'1 PM · 1 PO · 2 Devs'}],
    sections:[
      {img:'kb-problem',title:'The problem',desc:'As teams configured more Smartons, each AI agent managed its own knowledge base in isolation, attaching files one by one — causing inconsistency between agents, no single source of truth, duplicated uploads, and fragmented updates where changing one document meant editing it inside every Smarton by hand.',flip:false},
      {img:'kb-research',title:'Research & competitive analysis',desc:'I studied how CRMs and AI-agent tools solved knowledge bases. Most embedded the KB inside each agent rather than as a reusable, central library. AtomChat users wanted folder organization — a mental model close to Google Drive or Dropbox — inside a robust, multi-module product that demanded careful navigation and consistency.',flip:true},
      {img:'kb-filemanager',title:'A Drive-like file manager',desc:'The solution: a File Manager submodule inside Settings housing the centralized Knowledge Base. A familiar drive-like interface with a clear empty state, folder creation, and uploads for documents and images — instantly understandable with no onboarding.',flip:false},
      {img:'kb-metadata',title:'Metadata & actions',desc:'Every file exposes what it needs to be managed: type (knowledge base vs. resource), status (processing / available / error), size, created and updated timestamps, and which Smartons use it. Files can be deleted, edited, replaced, and updated without breaking the links to the agents that depend on them.',flip:true},
      {img:'kb-scoping',title:'Scoping to a solid MVP',desc:'The process was highly iterative with product and engineering. A key decision was reducing scope to a strong MVP — avoiding premature complexity like deep folder hierarchies — so shipping fast could validate the direction before adding advanced agent-and-project relationships.',flip:false},
      {img:'kb-research',title:'Impact & next steps',desc:'Delivered as part of AtomChat\'s AI roadmap, it gives the AI features a centralized infrastructure to scale agents consistently and resolves the fragmentation of per-agent knowledge bases. Next: automatic file classification, richer entity relationships, and content versioning.',flip:true}
    ]
  },
  aisim:{
    eye:'Atomchat · 2024 · AI SaaS',
    title:'AI simulator',
    lead:'A feature that stress-tests conversational flows with AI before they go live — running hundreds of simulated conversations across customer profiles to surface failures, metrics, and confidence ahead of launch.',
    meta:[{l:'Role',v:'Product Designer'},{l:'Company',v:'Atomchat · Remote'},{l:'Year',v:'2024'},{l:'Scope',v:'0 → 1 · 3 versions · 6 sprints'}],
    sections:[
      {vid:'aisim-problem',style:'vid',title:'The problem',desc:'Before the AI Simulator, the only way to test a flow was manually inside the Flow Builder. Teams spent hours role-playing conversations by hand before every launch, with no way to validate AI agents, prompt quality, or knowledge-base coverage at scale — so errors slipped into production and flooded internal support.',flip:false},
      {vid:'aisim-simulating',style:'vid',title:'Simulating real conversations',desc:'The Simulator runs many AI conversations at once against a chosen flow. Users define the simulation — name, flow, volume, scenario type, and goal — and enrich realism with real conversation samples, customer-profile descriptions, and behavioral parameters like knowledge level, language complexity, response speed, and even emotional state.',flip:true},
      {vid:'aisim-nondeterministic',style:'vid',title:'Designing for non-deterministic AI',desc:'Key insight: when the core is AI, the interface must be flexible enough to absorb variable outputs. Results could be summaries, failure categories, causes, or shifting metrics — so I designed result components robust enough to hold variable AI output without breaking, a finding that reshaped the whole feature.',flip:false},
      {img:'aisim-submodule',title:'From feature to strategic submodule',desc:'It evolved across three versions: V1 showed success vs. failure counts, V2 added per-conversation detail, and V3 became a full submodule inside Campaigns with states, simulation loading, and an end-to-end experience. The results table even grew an actions row as interactions like edit and delete were added.',flip:true},
      {img:'aisim-impact',title:'Impact & what I\'d change',desc:'Greater confidence before going live, far less manual testing, and decisions driven by structured data over intuition. Next, I\'d rebuild the simulation setup as a visible stepper to cut cognitive load during configuration.',flip:false}
    ]
  }
};

function getImg(key) {
  return SIMGS[key] || null;
}

function getVid(key) {
  return SVIDS[key] || null;
}
