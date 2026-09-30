export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  context: string;
  source: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  clientContext: string;
  headlineMetric: string;
  metricLabel: string;
  problem: string;
  opportunity: string;
  solution: string;
  flowSteps: {
    label: string;
    description: string;
    type?: "problem" | "process" | "ai" | "crm" | "outcome";
  }[];
  architecturePoints: string[];
  technologies: string[];
  businessImpact: string[];
  quote?: string;
  featured: boolean;
}

export interface ProblemLabItem {
  id: string;
  category: string;
  title: string;
  problem: string;
  aiOpportunity: string;
  potentialSolution: string;
  humanRole: string;
  kpis: string[];
  complexity: "Moderate" | "High" | "Enterprise";
  timeToPilot: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  tags: string[];
}

export const PROFILE = {
  name: "DHRUV PATHAK",
  positioning: "AI SOLUTIONS ENGINEER",
  subPositioning: "AI ADOPTION & SOLUTION ARCHITECTURE",
  tagline: "I don't just build AI. I figure out where it belongs.",
  secondaryTagline: "I bridge business problems and technical execution.",
  heroCopy:
    "AI Solutions Engineer working across AI adoption, solution architecture, automation, and business workflows — turning messy operational problems into practical, deployable systems.",
  capabilityChips: [
    "AI ADOPTION",
    "SOLUTION ARCHITECTURE",
    "AI AGENTS",
    "AUTOMATION",
    "VOICE AI",
  ],
  contact: {
    email: "work.dhruvpathak@gmail.com",
    phone: "+91 63546 66048",
    location: "Ahmedabad, Gujarat, India (Remote-Ready)",
    linkedin: "https://linkedin.com/in/dhruvvpathakk",
    portfolioUrl: "https://itsdhruv.online",
    resumePdfUrl: "/Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf",
  },
  principles: [
    {
      title: "Discover before designing",
      desc: "Audit operational friction, talk to frontline teams, and uncover the root bottleneck before drafting a single technical diagram.",
    },
    {
      title: "Prioritise before building",
      desc: "Rank every AI intervention by real commercial lift and implementation feasibility — not by technological novelty.",
    },
    {
      title: "Measure before scaling",
      desc: "Deploy the smallest viable pilot, benchmark against defensible business KPIs, and prove workflow adoption first.",
    },
  ],
};

export const PROOF_METRICS: MetricItem[] = [
  {
    id: "prospecting",
    value: "60%",
    label: "LESS MANUAL PROSPECTING",
    sublabel: "Across partner acquisition pipeline",
    context:
      "Automated research, enrichment, and filtering workflows at Clozzet India, cutting repetitive SDR prospecting hours by more than half.",
    source: "Clozzet India — RevOps & Partner Acquisition",
  },
  {
    id: "lead-velocity",
    value: "3×",
    label: "QUALIFIED BRAND LEADS / WEEK",
    sublabel: "Sustained pipeline acceleration",
    context:
      "Deployed automated lead-scoring pipelines combining Apollo.io intelligence, LLM qualification, and CRM actions to 3x weekly dealflow.",
    source: "Clozzet India — Outbound Pipeline",
  },
  {
    id: "voice-conversion",
    value: "15+",
    label: "INBOUND LEADS CONVERTED",
    sublabel: "Via production Voice AI agent",
    context:
      "Built natural, sub-2s conversational voice calling agents with dynamic booking logic for an admissions advisory client.",
    source: "Production Voice AI Calling Agent Deployment",
  },
  {
    id: "hours-saved",
    value: "10 HRS",
    label: "MANUAL SALES WORK SAVED / WK",
    sublabel: "Per rep on research & scoring",
    context:
      "Engineered multi-agent LLM systems that autonomously research company signals, score ICP criteria, and draft bespoke sequences.",
    source: "Multi-Agent Automation Platform",
  },
  {
    id: "erp-users",
    value: "500+",
    label: "ACTIVE ERP USERS",
    sublabel: "Full lifecycle platform delivery",
    context:
      "Architected, built, and deployed an end-to-end institutional ERP handling attendance, grading, and role-based communication.",
    source: "Institutional ERP Delivery — Self-Employed",
  },
  {
    id: "ml-accuracy",
    value: "91%",
    label: "ML PREDICTION ACCURACY",
    sublabel: "Supervised classification model",
    context:
      "Developed logistic regression and decision tree ensemble models in Python / Scikit-learn to identify at-risk students for early intervention.",
    source: "Predictive Academic Risk ML Pipeline",
  },
];

export const WORKFLOW_STAGES = [
  {
    number: "01",
    name: "BUSINESS PROBLEM",
    subtitle: "Messy Operational Reality",
    description: "Uncovering where teams lose hours, drop deals, or stall processes.",
    action: "Listen & Diagnose",
    expandedNote:
      "We start with the daily friction: slow callbacks, forgotten CRM fields, SDRs buried in manual LinkedIn searches. No tech discussions allowed yet.",
  },
  {
    number: "02",
    name: "DISCOVERY",
    subtitle: "Workflow & Data Audit",
    description: "Mapping every human touchpoint, tool boundary, and data handoff.",
    action: "Map the Bottleneck",
    expandedNote:
      "Documenting input sources, decision logic, and measuring current baseline metrics (hours spent, leakage %, latency).",
  },
  {
    number: "03",
    name: "AI OPPORTUNITY",
    subtitle: "Leverage Identification",
    description: "Determining where AI genuinely creates asymmetrical value vs standard code.",
    action: "Filter & Validate",
    expandedNote:
      "Distinguishing tasks that require deterministic automation (APIs/n8n) from those that require non-deterministic intelligence (LLMs/Agents/Voice).",
  },
  {
    number: "04",
    name: "SOLUTION DESIGN",
    subtitle: "Deterministic Architecture",
    description: "Designing the smallest valuable architecture with clear human-in-the-loop guardrails.",
    action: "Architect the Stack",
    expandedNote:
      "Designing clean data models, prompt orchestrations, API contracts, fallback states, and warm human handoffs.",
  },
  {
    number: "05",
    name: "IMPLEMENTATION",
    subtitle: "Production Deployment",
    description: "Building production integrations across CRMs, LLM pipelines, and communication channels.",
    action: "Ship & Integrate",
    expandedNote:
      "Connecting live APIs (HubSpot, Apollo, ElevenLabs, LangChain, n8n), rigorous edge-case testing, and frontline training.",
  },
  {
    number: "06",
    name: "MEASURABLE OUTCOME",
    subtitle: "Defensible Business ROI",
    description: "Proving whether the business actually improved against benchmark KPIs.",
    action: "Quantify Impact",
    expandedNote:
      "Tracking concrete proof points: % time saved, conversion rate increases, pipeline acceleration, and user adoption rates.",
  },
];

export const THINKING_STAGES = [
  {
    stage: "01",
    title: "DISCOVER",
    headline: "Understand the business before touching technology.",
    summary:
      "Every client project begins by understanding revenue models, frontline team realities, current software stacks, and operational constraints.",
    keyQuestions: [
      "What is the commercial model and where does the company capture margin?",
      "Which daily workflows consume the most human cognitive effort?",
      "Where are leads, enquiries, or data currently leaking?",
    ],
    deliverables: "Process Flowchart, Stakeholder Friction Map, Baseline Metric Benchmark",
  },
  {
    stage: "02",
    title: "DIAGNOSE",
    headline: "Find the bottleneck, not just the symptom.",
    summary:
      "Clients often ask for 'an AI agent' when their root problem is messy CRM hygiene, unclear qualification rules, or broken handoffs.",
    keyQuestions: [
      "Where exactly in the sequence does latency or dropped intent occur?",
      "Is the issue a lack of speed, lack of data, or lack of structured rules?",
      "What does this manual delay cost each month in pipeline and payroll?",
    ],
    deliverables: "Root-Cause Diagnostic Report, Value-Leakage Calculation",
  },
  {
    stage: "03",
    title: "PRIORITISE",
    headline: "Identify where AI creates real leverage.",
    summary:
      "Not every process needs machine learning. We evaluate interventions on a strict matrix of technical feasibility versus commercial lift.",
    keyQuestions: [
      "Can this be solved deterministically with a simple webhook or API?",
      "Where does generative reasoning or natural speech provide asymmetrical advantage?",
      "Where must human empathy and strategic judgement remain in control?",
    ],
    deliverables: "AI Opportunity Matrix, ROI & Feasibility Scorecard",
  },
  {
    stage: "04",
    title: "BUILD",
    headline: "Design the smallest valuable solution.",
    summary:
      "Avoid bloated multi-month engineering cycles. We architect modular, robust solutions that integrate directly into existing tools.",
    keyQuestions: [
      "How do we prevent hallucinations with deterministic guardrails and schema validation?",
      "Does this fit inside the team's existing CRM or require adopting another dashboard?",
      "What is the graceful degradation path when an API or edge case fails?",
    ],
    deliverables: "Production Architecture Blueprint, Pilot Integration, SOP Handoff",
  },
  {
    stage: "05",
    title: "MEASURE",
    headline: "Prove whether the business actually improved.",
    summary:
      "An AI deployment is a failure if frontline employees ignore it. We monitor adoption metrics, calculate hard ROI, and refine.",
    keyQuestions: [
      "Did the target KPI move in a statistically significant and defensible way?",
      "Are team members actively utilizing the workflow or bypassing it?",
      "What feedback loops are needed to continuously improve accuracy and response quality?",
    ],
    deliverables: "Post-Launch Adoption Audit, ROI Defense Dashboard, Continuous Tuning Plan",
  },
];

export const PROBLEM_LAB_ITEMS: ProblemLabItem[] = [
  {
    id: "lead-gen",
    category: "LEAD GENERATION",
    title: "Manual Account Research & Prospect Profiling",
    problem:
      "Sales development reps spend 15–20 hours each week copying data between LinkedIn, websites, and spreadsheets to identify whether a company fits their ICP.",
    aiOpportunity:
      "Automated domain scraping, financial & hiring signal extraction, and programmatic ICP grading before a human rep ever opens the account.",
    potentialSolution:
      "Event-driven multi-agent research pipeline (Apollo.io + LangChain + HubSpot CRM) that triggers automated scoring and generates tailored briefing cards.",
    humanRole:
      "Reviewing top 10% scored accounts, personalizing final relationship touchpoints, and driving strategic high-value outbound conversations.",
    kpis: [
      "Prospecting time per account (-60%)",
      "Weekly qualified pipeline velocity (3×)",
      "CRM data completeness (>98%)",
    ],
    complexity: "Moderate",
    timeToPilot: "1–2 Weeks",
  },
  {
    id: "sales-outbound",
    category: "SALES & OUTBOUND",
    title: "Slow Inbound Lead Response & Fragmented Follow-ups",
    problem:
      "High-intent inbound leads submit demo forms but wait 8 to 24 hours for a human callback, during which competitor engagement leads to a 40%+ drop-off.",
    aiOpportunity:
      "Sub-2-minute automated enrichment, intent scoring, and dynamic multi-channel response (email, WhatsApp, or instant voice call).",
    potentialSolution:
      "Inbound webhook orchestrator feeding into an LLM intent classifier, booking calendar sync, and automated SDR notification with context recap.",
    humanRole:
      "Conducting the live strategic discovery/demo call with pre-researched intelligence ready at hand.",
    kpis: [
      "Lead response time (< 3 minutes)",
      "Meeting booking conversion rate (+35%)",
      "Pipeline leakage at intake (< 5%)",
    ],
    complexity: "Moderate",
    timeToPilot: "2 Weeks",
  },
  {
    id: "customer-support",
    category: "CUSTOMER SUPPORT",
    title: "Support Queues Flooded with Repetitive Inquiries",
    problem:
      "Senior support engineers spend 65% of their working hours answering the same 20 procedural, documentation, and account-status questions.",
    aiOpportunity:
      "Context-aware Retrieval-Augmented Generation (RAG) with strict source citation, deterministic policy constraints, and instant triage.",
    potentialSolution:
      "Hybrid AI resolution agent plugged into Zendesk/Intercom with verified vector search over company SOPs and seamless warm human escalation.",
    humanRole:
      "Handling complex enterprise tier-3 escalations, nuanced billing disputes, and high-empathy customer retention.",
    kpis: [
      "Tier-1 first contact resolution (+45%)",
      "Average ticket wait time (-70%)",
      "CSAT customer satisfaction score (>92%)",
    ],
    complexity: "High",
    timeToPilot: "2–3 Weeks",
  },
  {
    id: "operations",
    category: "OPERATIONS & REVOPS",
    title: "Unsynchronized Client Data Across Channels & CRM",
    problem:
      "Critical deal updates and operational commitments happen over WhatsApp, phone calls, and email threads without getting logged into the core CRM.",
    aiOpportunity:
      "Autonomous background transcription, key commitment extraction, and structured field syncing across internal systems.",
    potentialSolution:
      "Webhook-driven integration engine (n8n + WhatsApp Business API + HubSpot) using LLM entity extraction to keep deals updated automatically.",
    humanRole:
      "Reviewing high-value contract milestones and managing client relationship expectations.",
    kpis: [
      "Administrative rep hours saved (~10 hrs/wk)",
      "Pipeline forecast accuracy (+30%)",
      "Post-meeting action item turnaround (< 15 min)",
    ],
    complexity: "Moderate",
    timeToPilot: "1–2 Weeks",
  },
  {
    id: "appointments",
    category: "APPOINTMENTS & VOICE",
    title: "After-Hours Inbound Calls Dropping Off Unanswered",
    problem:
      "Prospective students or high-ticket clients call outside standard operating hours; unanswered calls result in lost bookings and wasted ad spend.",
    aiOpportunity:
      "Human-like conversational Voice AI agent capable of answering complex inquiries, checking calendar slots in real-time, and confirming appointments.",
    potentialSolution:
      "Telephony voice agent (ElevenLabs + LangChain state engine + Cal.com API) that converses naturally, captures intent, and pushes confirmed meetings to CRM.",
    humanRole:
      "Preparing for and delivering the scheduled consultation session with full audio transcript and lead summary.",
    kpis: [
      "After-hours conversion rate (+50%)",
      "Confirmed appointments generated (15+ leads)",
      "Call answering latency (< 1.5 seconds)",
    ],
    complexity: "Enterprise",
    timeToPilot: "2–3 Weeks",
  },
  {
    id: "internal-knowledge",
    category: "INTERNAL KNOWLEDGE",
    title: "Slow Employee Onboarding & Dispersed SOP Documentation",
    problem:
      "New hires and operational staff spend hours pinging managers to locate operating procedures, compliance manuals, and internal documentation.",
    aiOpportunity:
      "Semantic knowledge retrieval assistant that answers procedural questions with direct page citations and step-by-step guidance.",
    potentialSolution:
      "Internal Slack/Teams agent connected to a secure document store with role-based permissions and deterministic fallback when information is absent.",
    humanRole:
      "Maintaining updated standard operating procedures and approving operational policy changes.",
    kpis: [
      "Employee ramp time (-40%)",
      "Repetitive internal inquiry volume (-60%)",
      "SOP compliance rate (>95%)",
    ],
    complexity: "Moderate",
    timeToPilot: "1–2 Weeks",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "voice-ai",
    slug: "voice-ai",
    number: "01",
    title: "PRODUCTION VOICE AI CALLING AGENT",
    subtitle: "Inbound & Outbound Conversational Telephony with Live CRM & Booking Integration",
    clientContext: "Admissions Advisory for Live Wellness & Yoga Education Client",
    headlineMetric: "15+",
    metricLabel: "INBOUND LEADS CONVERTED",
    problem:
      "Prospective international students calling the admissions line frequently hit voicemail due to global time zone differences, causing high-intent leads to drop off before speaking with an advisor.",
    opportunity:
      "Deploy a sub-2-second latency conversational Voice AI agent capable of speaking naturally, addressing course queries, vetting candidate intent, and scheduling confirmed admissions appointments directly into the calendar.",
    solution:
      "Engineered an end-to-end Voice AI architecture using ElevenLabs conversational voice synthesis, LangChain state machine logic, live CRM contact creation in HubSpot, and real-time appointment booking.",
    flowSteps: [
      { label: "Incoming Call", description: "Inbound telephony triggered from prospect", type: "problem" },
      { label: "Speech & Intent", description: "Real-time speech-to-text + persona orchestration", type: "ai" },
      { label: "Conversational Logic", description: "Course advising, tuition queries, objection handling", type: "ai" },
      { label: "CRM Sync", description: "Auto-creates/updates lead record in HubSpot with transcript", type: "crm" },
      { label: "Calendar Booking", description: "Checks available advisor slots & confirms reservation", type: "process" },
      { label: "Human Handoff", description: "SMS/Email notification to advisor with full context recap", type: "outcome" },
    ],
    architecturePoints: [
      "ElevenLabs Conversational Voice API with ultra-low latency voice streaming",
      "LangChain conversation state manager with strict deterministic fallback safety",
      "Webhook routing via Python FastAPI backend for CRM syncing and lead enrichment",
      "HubSpot CRM bi-directional contact updating with full transcript and lead score",
      "Google Calendar / Cal.com real-time slot verification and reservation confirmation",
    ],
    technologies: [
      "ElevenLabs",
      "LangChain",
      "Python",
      "REST APIs",
      "HubSpot CRM",
      "Google Calendar",
      "Webhooks",
    ],
    businessImpact: [
      "15+ inbound leads converted directly through the automated conversational system",
      "24/7 coverage for international US/UK inquiries without staffing night shifts",
      "Zero dropped calls during marketing campaign spikes",
      "Average latency under 1.8 seconds, maintaining natural conversational cadence",
    ],
    quote: "AI calling shouldn't sound like a robocall. It should sound like your sharpest admissions coordinator who happens to never sleep.",
    featured: true,
  },
  {
    id: "multi-agent",
    slug: "multi-agent",
    number: "02",
    title: "MULTI-AGENT AI BUSINESS AUTOMATION",
    subtitle: "Autonomous Account Discovery, ICP Scoring & Contextual Outreach Engine",
    clientContext: "B2B Tech & Outbound Growth Pipeline",
    headlineMetric: "~10 HRS",
    metricLabel: "MANUAL WORK SAVED / WEEK",
    problem:
      "Growth and sales reps were drowning in repetitive manual prospecting: reviewing hundreds of target domains, researching recent funding/hiring news, evaluating ICP scorecards, and crafting bespoke messages one by one.",
    opportunity:
      "Construct a coordinated multi-agent system where specialized LLM agents handle discrete operational steps: Discovery, Signal Extraction, ICP Scoring, and Sequence Generation.",
    solution:
      "Designed and deployed a LangChain/LangGraph and n8n autonomous multi-agent pipeline integrated with Apollo.io and HubSpot CRM that continuously evaluates target accounts and queues high-probability deals.",
    flowSteps: [
      { label: "Account Discovery", description: "Target company identification via Apollo.io criteria", type: "process" },
      { label: "Agentic Research", description: "Multi-agent scrapers analyze domain, news, and team signals", type: "ai" },
      { label: "ICP Analysis", description: "Evaluates fit against 7 deterministic qualification rules", type: "ai" },
      { label: "AI Scoring", description: "Assigns 0-100 opportunity score with written justification", type: "ai" },
      { label: "Outreach Generation", description: "Drafts tailored, hyper-relevant introductory hooks", type: "ai" },
      { label: "CRM Staging", description: "Pushes approved leads to HubSpot with task alerts for reps", type: "crm" },
    ],
    architecturePoints: [
      "LangChain & LangGraph multi-agent supervisor pattern for task delegation",
      "Custom Python scraping and schema validation for clean unstructured data parsing",
      "n8n webhook orchestrator managing schedule triggers and rate-limited API calls",
      "Apollo.io enrichment endpoint integration with domain validation checks",
      "HubSpot CRM custom property sync and deal-stage automation",
    ],
    technologies: [
      "LangChain",
      "LangGraph",
      "LLM Orchestration",
      "n8n",
      "Apollo.io",
      "HubSpot CRM",
      "Python",
    ],
    businessImpact: [
      "10–15 target accounts autonomously qualified per week without manual SDR searching",
      "~10 hours of manual sales work saved every week per growth team member",
      "Eliminated generic template outreach; all emails generated with verified contextual hooks",
      "Deterministic score threshold prevents bad-fit accounts from clogging CRM pipeline",
    ],
    quote: "Multi-agent systems only make sense when each agent has a single, verifiable responsibility and a clean handoff contract.",
    featured: true,
  },
  {
    id: "partner-acquisition",
    slug: "partner-acquisition",
    number: "03",
    title: "AI-POWERED PARTNER ACQUISITION ENGINE",
    subtitle: "Automated Partner Discovery, Qualification & Onboarding Loop",
    clientContext: "Clozzet India — Hyperlocal Fashion Marketplace",
    headlineMetric: "60%",
    metricLabel: "LESS MANUAL PROSPECTING EFFORT",
    problem:
      "Scaling India's first hyperlocal fashion marketplace required signing hundreds of boutique brand partners across major urban retail clusters, but a manual business development team couldn't keep pace.",
    opportunity:
      "Build an intelligent RevOps engine to discover boutique apparel brands, score their catalog and store density, and run structured multi-touch outreach sequences.",
    solution:
      "Engineered automated acquisition workflows using n8n, Make, Apollo.io, WhatsApp Business API, and HubSpot CRM, transforming a sluggish manual BD cycle into a high-throughput partner pipeline.",
    flowSteps: [
      { label: "Business Goal", description: "Rapid merchant acquisition across targeted retail zones", type: "problem" },
      { label: "AI Brand Discovery", description: "Automated aggregation of local fashion retailers", type: "ai" },
      { label: "Fit Qualification", description: "Scores inventory fit, brand tier, and location density", type: "ai" },
      { label: "CRM Sync", description: "Stages records into Clozzet partner onboarding pipeline", type: "crm" },
      { label: "Multi-Channel Outreach", description: "Automated personalized email & WhatsApp follow-ups", type: "process" },
      { label: "Partner Onboarding", description: "Accelerated handoff to merchant success team", type: "outcome" },
    ],
    architecturePoints: [
      "n8n and Make automation pipelines executing multi-stage branch conditions",
      "Apollo.io lead enrichment and verified merchant contact lookups",
      "WhatsApp Business API automations for high-open-rate commercial communications",
      "HubSpot CRM deal pipeline configuration with automated milestone triggers",
      "Cross-functional feedback loop between marketing, product, and field BD teams",
    ],
    technologies: [
      "n8n",
      "Make",
      "HubSpot CRM",
      "Apollo.io",
      "WhatsApp Business API",
      "Workflow Automation",
    ],
    businessImpact: [
      "60% reduction in manual prospecting effort across the partnership acquisition pipeline",
      "3× increase in qualified brand leads per week",
      "Accelerated partner onboarding turnaround from discovery to contract signing",
      "Full visibility for leadership into conversion drop-offs across every pipeline stage",
    ],
    quote: "RevOps is the backbone of AI adoption. If the CRM pipeline isn't clean, even the smartest AI model produces noise.",
    featured: true,
  },
  {
    id: "school-erp",
    slug: "school-erp",
    number: "04",
    title: "ENTERPRISE SCHOOL ERP ARCHITECTURE",
    subtitle: "Full-Lifecycle Digitalization, Role-Based Portals & Institutional Operations",
    clientContext: "Institutional Delivery (Self-Employed, Morbi)",
    headlineMetric: "500+",
    metricLabel: "ACTIVE ERP USERS",
    problem:
      "An educational institution operated with manual paper records, disconnected spreadsheets, and fragmented parent communication, creating massive administrative lag during exam periods and fee collections.",
    opportunity:
      "Digitize the entire institution's operational lifecycle through a custom, highly reliable ERP platform tailored to faculty, admin, and parent workflows.",
    solution:
      "Owned the complete SDLC: gathered institutional requirements, designed the relational database schema, developed responsive web portals, implemented granular role-based access control, and led user adoption training.",
    flowSteps: [
      { label: "Requirements Audit", description: "Interviewed principal, faculty heads, and office clerks", type: "problem" },
      { label: "Data Architecture", description: "Relational modeling for attendance, grades, and schedules", type: "process" },
      { label: "Portal Development", description: "Secure portals with role-based permissions (Admin/Faculty/Parent)", type: "process" },
      { label: "Cloud Deployment", description: "Deployed with automated database backups and high uptime", type: "process" },
      { label: "Institutional Adoption", description: "Conducted hands-on faculty workshops and rollout support", type: "outcome" },
    ],
    architecturePoints: [
      "Full-stack architecture with modular attendance, gradebook, and billing engines",
      "Strict role-based access control (RBAC) protecting sensitive student records",
      "Automated attendance reporting and daily notification dispatch to parents",
      "Responsive, clean UI designed for non-technical administrative staff",
      "Cloud hosting with continuous monitoring and zero-downtime maintenance updates",
    ],
    technologies: [
      "Full-Stack Development",
      "System Architecture",
      "Relational Database",
      "Role-Based Access Control",
      "REST APIs",
      "Cloud Hosting",
    ],
    businessImpact: [
      "500+ active users across administrative staff, teachers, and parent community",
      "100% elimination of paper attendance logs across all classrooms",
      "Immediate administrative time savings during term grading cycles",
      "Proven blueprint for end-to-end software delivery from discovery through rollout",
    ],
    quote: "Building enterprise software teaches you the single most important rule: adoption matters more than architecture.",
    featured: false,
  },
];

export const ARCHITECTURE_NODES = [
  {
    id: "ai-llm",
    name: "AI & LLM ORCHESTRATION",
    category: "Intelligence",
    tools: ["LangChain", "LangGraph", "CrewAI", "Prompt Engineering", "OpenAI / Anthropic APIs"],
    role: "Cognitive reasoning, structured extraction, schema enforcement, and multi-step agent coordination.",
  },
  {
    id: "voice-ai",
    name: "VOICE AI & INTERACTION",
    category: "Interface",
    tools: ["ElevenLabs", "Conversational AI", "Low-Latency Audio Streaming", "Telephony Webhooks"],
    role: "Natural voice interactions for admissions, lead triage, and appointment booking with human cadence.",
  },
  {
    id: "automation",
    name: "WORKFLOW AUTOMATION",
    category: "Execution",
    tools: ["n8n", "Make", "Zapier", "WhatsApp Business API", "Custom Webhooks"],
    role: "Deterministic orchestration connecting trigger events, data transforms, and API pipelines.",
  },
  {
    id: "crm-revops",
    name: "CRM & REVOPS ENGINES",
    category: "Source of Truth",
    tools: ["HubSpot CRM", "Apollo.io", "Lead Scoring Models", "Pipeline Automations"],
    role: "Centralizing customer records, syncing pipeline status, and tracking deal acceleration.",
  },
  {
    id: "data-rag",
    name: "DATA & RETRIEVAL (RAG)",
    category: "Context",
    tools: ["Vector Embeddings", "Document Chunking", "Metadata Filtering", "Python / Scikit-learn"],
    role: "Retrieving verified ground truth documents with zero hallucination risk and strict citations.",
  },
  {
    id: "cloud-engineering",
    name: "CLOUD & APIS",
    category: "Infrastructure",
    tools: ["Python", "FastAPI", "Next.js", "REST APIs", "Vercel", "Docker"],
    role: "High-reliability backend services, secure session auth, and production-grade client interfaces.",
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "clozzet",
    period: "FEB 2026 — PRESENT",
    role: "Growth Engineer — AI Solutions & RevOps",
    company: "Clozzet India",
    location: "Ahmedabad, Gujarat, India",
    summary:
      "Leading AI adoption, automated partner acquisition pipelines, and RevOps infrastructure for India's first hyperlocal fashion marketplace.",
    highlights: [
      "Designed and deployed AI-powered automation workflows for brand partnership acquisition, reducing manual prospecting effort by 60% across the partnership pipeline.",
      "Built automated outreach and lead-scoring systems using AI agents and n8n/Make, generating 3× more qualified brand leads per week.",
      "Integrated multi-step qualification workflows connecting Apollo.io, LLM scoring, and HubSpot CRM, accelerating partner onboarding timelines.",
      "Collaborated cross-functionally with product, marketing, and operations teams to scale go-to-market strategies through data-driven growth loops.",
    ],
    metrics: ["60% Less Manual Prospecting", "3× Qualified Leads/Wk", "End-to-End RevOps"],
    tags: ["AI Solutions", "Workflow Automation", "HubSpot", "Apollo.io", "n8n", "RevOps"],
  },
  {
    id: "studai",
    period: "AUG 2024 — NOV 2024",
    role: "Campus Ambassador Leader — Technology Adoption (Intern)",
    company: "StudAI Genie Edutech",
    location: "Rajkot, Gujarat, India",
    summary:
      "Spearheaded emerging technology adoption initiatives and hands-on workshops, communicating complex AI concepts to diverse non-technical audiences.",
    highlights: [
      "Led AI-focused outreach campaigns connecting 1,000+ students to hands-on learning opportunities in AI, data science, and emerging tech.",
      "Organized 10+ workshops on AI and data technologies, driving a 40% increase in student engagement across partner campuses.",
      "Built automated outreach workflows for event promotion using no-code tools, cutting manual coordination time in half.",
      "Facilitated stakeholder coordination between academic leads, student cohorts, and technical mentors.",
    ],
    metrics: ["1,000+ Students Reached", "10+ Workshops Delivered", "40% Engagement Lift"],
    tags: ["AI Adoption", "Workshops", "Technical Communication", "Stakeholder Alignment"],
  },
  {
    id: "independent-erp",
    period: "2023",
    role: "Web Developer & ERP Architect",
    company: "Independent Technical Delivery (Self-Employed)",
    location: "Morbi, Gujarat, India",
    summary:
      "Owned end-to-end SDLC from stakeholder requirements gathering through architectural design, implementation, and cloud deployment for an institutional school platform.",
    highlights: [
      "Built a full-stack school ERP system handling attendance, grading, scheduling, and parent-communication modules — serving 500+ active users across admin and faculty roles.",
      "Delivered a responsive school website with secure admin portals, role-based access controls, and integrated content management.",
      "Conducted extensive stakeholder discovery to translate paper-based workflows into intuitive digital forms.",
      "Managed production deployment, database integrity, and hands-on administrative training.",
    ],
    metrics: ["500+ Active Users", "Full SDLC Ownership", "Zero-Downtime Rollout"],
    tags: ["System Architecture", "Requirements Gathering", "Full-Stack", "Role-Based Access Control"],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Marwadi University, Rajkot, Gujarat",
  expectedYear: "Expected 2027",
  focus: "AI, Data Science, Computational Techniques",
  leadership: "Smart India Hackathon — Team Lead (6-member team, plagiarism detection domain)",
  certifications: [
    "LangChain & LangGraph Orchestration",
    "AI for Product Management",
    "Data Science & Predictive Analytics",
    "AI Tools & Technology Deployment",
    "Claude Code Bootcamp",
  ],
};

export const ONBOARDING_ROADMAP = [
  {
    period: "DAYS 1–7",
    title: "Audit & Operational Discovery",
    desc: "Audit the client roster, current delivery workflows, recurring operational friction points, and existing AI/automation assets across the company.",
  },
  {
    period: "DAYS 8–15",
    title: "Prioritization & Opportunity Mapping",
    desc: "Synthesize recurring bottlenecks and structure a prioritized AI opportunity map ranked strictly by technical feasibility and commercial lift.",
  },
  {
    period: "DAYS 16–23",
    title: "Solution Blueprinting & Architecture",
    desc: "Convert high-potential opportunities into clear solution briefs, workflow diagrams, integration plans, fallback rules, and frontline handoff criteria.",
  },
  {
    period: "DAYS 24–30",
    title: "Pilot Execution & ROI Validation",
    desc: "Deploy the first targeted pilot in production, track baseline business metrics, gather frontline feedback, and prove measurable adoption ROI.",
  },
];
