export const profile = {
  name: "Aryan Kumar Singh",
  role: "Software Developer",
  location: "Chennai, India",
  email: "aryansingh73321@gmail.com",
  phone: "+91 85957 87876",
  github: "https://github.com/Aryan4GIT",
  linkedin: "https://www.linkedin.com/in/aryan-singh-222200266/",
  photo: "/aryan.jpeg",
  tagline: "I build fast, secure backends and clean interfaces.",
  intro:
    "Backend-focused software developer who likes turning messy problems into reliable systems — secure APIs, well-tuned databases, and AI where it actually helps. Incoming Software Developer at Prodapt.",
}

export const about = {
  paragraphs: [
    "I'm a Computer Science engineer from VIT (CGPA 8.22) who spends most of his time in the backend — designing REST APIs, tightening database queries, and shipping things that hold up under real usage.",
    "I interned at Kugelblitz building secure, role-based APIs, and I freelance for real businesses — automating a courier company's billing and building landing pages that convert. I'm about to join Prodapt as a Software Developer.",
    "Lately I've been going deep on Go, cloud deployment on AWS, and Retrieval-Augmented Generation pipelines — using AI to make products genuinely smarter, not just buzzword-compliant.",
  ],
  facts: [
    { label: "Based in", value: "Chennai, IN" },
    { label: "Focus", value: "Backend, cloud and AI" },
    { label: "Education", value: "B.Tech CSE, VIT" },
    { label: "Status", value: "Joining Prodapt" },
  ],
}

export const experience = [
  {
    company: "Prodapt",
    role: "Software Developer",
    period: "2026 — Incoming",
    location: "India",
    scan: "Out for delivery",
    accent: true,
    points: [
      "Joining as a Software Developer to build and scale connectedness-industry software products.",
    ],
    tags: ["Software Engineering", "Product"],
  },
  {
    company: "Kugelblitz Private Limited",
    role: "Software Development Engineer Intern",
    period: "May 2025 — Aug 2025",
    location: "India",
    scan: "In transit",
    points: [
      "Designed and shipped 10+ secure RESTful APIs using JWT authentication and role-based access control, hardening application security and user authorization.",
      "Cut average API response time by 30%+ through database query tuning and caching strategies.",
      "Worked in an Agile Scrum team across 4 sprints — sprint planning, daily stand-ups, code reviews, and API documentation.",
    ],
    tags: ["Go", "REST APIs", "JWT", "RBAC", "Agile"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 — Present",
    location: "Remote",
    scan: "Picked up",
    points: [
      "Built and automated the billing system for Sri Ganesh Enterprises courier company — GST-accurate invoicing packaged as a single-executable desktop app.",
      "Designed and developed a conversion-focused landing page for Arcus Stays, a Ghaziabad PG.",
    ],
    tags: ["Go", "React", "Freelance", "Client Work"],
  },
]

// `to` is who the project is for. `sort` decides which chutes it appears in: ai, backend, web.
export const projects = [
  {
    title: "Medlen-AI",
    to: "Patients trying to read their own reports",
    kind: "AI, full-stack",
    sort: ["ai", "backend"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/MedLen-AI",
    description:
      "Upload a medical report and get it explained in plain English, with questions worth asking your doctor. OCR pulls out the biomarkers, then a RAG step retrieves medical references. Citations are built from those retrieved chunks rather than from model output, and the analysis is refused when no reference backs it up.",
    tags: ["Go (Gin)", "React", "TypeScript", "MongoDB Atlas", "AWS S3", "RAG", "Docker", "JWT"],
    highlights: ["Citations from retrieved chunks", "Four-step OCR fallback", "Virus-scanned uploads"],
    featured: true,
  },
  {
    title: "OmniMind",
    to: "Anyone working through a stack of PDFs",
    kind: "AI, full-stack",
    sort: ["ai"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/Omni-mind",
    live: "https://omni-mind.onrender.com/",
    image: "/work/omnimind.jpg",
    description:
      "Three tools over your own material: live speech-to-text, grounded Q&A over documents you drop in, and a three-agent loop that drafts a brief then fact-checks it against those same sources. PDFs are chunked per page and ranked with BM25, so every answer cites a page you can actually turn to — and \"not in this document\" comes back as a real answer instead of a hallucination.",
    tags: ["React 19", "Express", "Gemini", "BM25", "pdf.js"],
    highlights: ["Cited answers", "3-agent fact-check", "Key never hits the client"],
    featured: true,
  },
  {
    title: "Gap Stealer",
    to: "Day workers and hirers in Chennai",
    kind: "Full-stack",
    sort: ["backend"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/gapstealers",
    description:
      "A public board for day work in Chennai. Every posting prints its rate and the hirer's own phone number, and nothing is taken from the pay. Firestore security rules do the access control rather than the client: anyone can read jobs, only a signed-in account can post, and applications can't be edited afterwards.",
    tags: ["React", "Redux Toolkit", "Firebase", "Firestore"],
    highlights: ["Rules-enforced access", "Strict CSP", "Works without a backend on sample data"],
    featured: false,
  },
  {
    title: "Motherland Group",
    to: "Motherland Group, Bangalore and Chennai",
    kind: "Website",
    sort: ["web"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/motherland",
    live: "https://motherland-nine.vercel.app",
    image: "/work/motherland.jpg",
    description:
      "A multi-page site for a garment-washing and denim group, covering its three divisions. One Python script generates every page and fails the build if a link points to a file or anchor that doesn't exist. The output is plain HTML that any static host can serve, and the palette comes from a pair of jeans: indigo washes, tan topstitch and a red tab.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    highlights: ["Build fails on broken links", "No runtime dependencies", "Phone-first layouts"],
    featured: true,
  },
  {
    title: "Mantan Supermart",
    to: "Mantan Supermart, New Delhi",
    kind: "Storefront",
    sort: ["web"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/manthan",
    live: "https://manthan-six.vercel.app",
    image: "/work/mantan.jpg",
    description:
      "A storefront for a 20,000 sq ft grocery store. Browse categories, fill a cart that survives a refresh, and send the order as a pre-written WhatsApp message, so the shop confirms stock and the final bill without a payment system. Store details live in data files, and the catalogue is clearly marked as a sample until real stock goes in.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix"],
    highlights: ["WhatsApp checkout", "Cart survives a refresh", "SEO data from one file"],
    featured: true,
  },
  {
    title: "SHOWMAQERS",
    to: "SHOWMAQERS, Delhi NCR",
    kind: "Website and admin",
    sort: ["web", "backend"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/event",
    live: "https://event-seven-azure.vercel.app",
    image: "/work/showmaqers.jpg",
    description:
      "A site of 160+ pages for a wedding and event planner. Python tools crawl the existing site and generate the SEO landing pages, while a Supabase backend runs the artist roster, a roster admin screen, artist logins and media uploads.",
    tags: ["JavaScript", "Supabase", "PostgreSQL", "Python", "SEO"],
    highlights: ["160+ pages", "Roster admin", "Artist logins"],
    featured: false,
  },
  {
    title: "Soumya Events",
    to: "Soumya Events and Entertainment, Delhi NCR",
    kind: "Website",
    sort: ["web"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/corporate_events",
    live: "https://corporateevents-two.vercel.app",
    image: "/work/soumya.jpg",
    description:
      "A site for a corporate events company, covering exhibitions, conferences, award functions and brand stands. Written in plain HTML, CSS and JavaScript with no framework, plus a small Python script that optimises the photos.",
    tags: ["JavaScript", "HTML", "CSS", "Python"],
    highlights: ["No framework", "Local business schema", "Optimised images"],
    featured: false,
  },
  {
    title: "Courier Billing System",
    to: "Sri Ganesh Enterprises",
    kind: "Freelance, in production",
    sort: ["backend"],
    year: "2025",
    repo: "https://github.com/Aryan4GIT/Billing-System",
    description:
      "Automated the end-to-end billing workflow for a courier company. GST-accurate invoice generation, customer records, and reporting — shipped as a single self-contained executable so the client runs it with zero setup.",
    tags: ["Go", "React", "SQLite", "Desktop App"],
    highlights: ["Single-exe deploy", "GST automation", "Real client in production"],
    featured: true,
  },
  {
    title: "Inventory Management System",
    to: "An aluminium factory floor",
    kind: "Full-stack",
    sort: ["backend"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/Inventory-management",
    description:
      "Replaces spreadsheet-driven stock tracking for an aluminium manufacturing factory. Go (Gin + GORM) API with JWT auth and role-based access for managers, supervisors, and operators; a React + TypeScript dashboard covering stock movements, orders, reports, and low-stock alerts. Excel import/export so the floor can keep the workflow it already knows. Dockerised, SQLite today, PostgreSQL-ready.",
    tags: ["Go (Gin)", "GORM", "React", "TypeScript", "Docker", "JWT", "RBAC"],
    highlights: ["Role-based access", "Excel import/export", "Postgres-ready"],
    featured: false,
  },
  {
    title: "SaaS Task Manager",
    to: "Teams sharing one workspace",
    kind: "Backend, AI",
    sort: ["ai", "backend"],
    year: "2025",
    repo: "https://github.com/Aryan4GIT/Saas-Task-Manager",
    description:
      "A multi-tenant SaaS backend with organization-level data isolation across workspaces. JWT + RBAC for Admin, Manager, and Member roles, plus a LangChain RAG pipeline that generates contextual task summaries. Containerized and deployed on AWS EC2.",
    tags: ["Go (Gin)", "PostgreSQL", "LangChain", "Docker", "AWS EC2", "JWT", "RBAC"],
    highlights: ["Multi-tenant isolation", "RAG summaries", "RBAC"],
    featured: false,
  },
  {
    title: "Ledger — Expense Tracker",
    to: "People who want their spending kept private",
    kind: "Full-stack, local-first",
    sort: ["backend"],
    year: "2026",
    repo: "https://github.com/Aryan4GIT/Smart-spending",
    description:
      "A private expense tracker on a Go/SQLite backend and a React frontend, with everything computed locally. It forecasts next month per category from your own history, warns when the month's pace overshoots budget, and judges savings goals on pace rather than raw totals. The optional written analysis is opt-in and never sees the notes on individual entries.",
    tags: ["Go", "SQLite", "React", "Gemini"],
    highlights: ["Local-first", "Per-category forecasting", "Pace-based goals"],
    featured: false,
  },
  {
    title: "Data Mapping Platform",
    to: "Teams annotating large datasets",
    kind: "Full-stack",
    sort: ["backend"],
    year: "2025",
    repo: "https://github.com/Aryan4GIT/Data-Transformation-Platform",
    description:
      "A data annotation platform for managing datasets and annotation workflows. 10+ secure REST APIs for dataset upload, annotation assignment, and auth. Optimized indexing and backend logic cut API response time by 30%+ while scaling to large datasets.",
    tags: ["Go", "React", "PostgreSQL", "Docker", "REST APIs"],
    highlights: ["10+ REST APIs", "30%+ faster", "Scales to large datasets"],
    featured: false,
  },
  {
    title: "Arcus Stays Landing Page",
    to: "Arcus Stays, Ghaziabad",
    kind: "Freelance",
    sort: ["web"],
    year: "2024",
    repo: "https://github.com/Aryan4GIT/RamPG",
    description:
      "A clean, conversion-focused landing page for a Ghaziabad PG — showcasing rooms, amenities, and enquiry flow to turn visitors into booked residents.",
    tags: ["React", "Responsive", "Landing Page"],
    highlights: ["Client delivery", "Conversion-focused", "Fully responsive"],
    featured: false,
  },
]

export const skills = [
  {
    group: "Languages",
    items: ["Go", "Python", "C++", "Java", "JavaScript", "SQL", "R"],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "AI / ML",
    items: ["RAG Pipelines", "LangChain", "Gemini", "Transformer Models", "Azure AI"],
  },
  {
    group: "Backend & Data",
    items: ["REST APIs", "Microservices", "JWT", "RBAC", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    group: "DevOps & Tools",
    items: ["Docker", "AWS EC2", "AWS S3", "CI/CD", "Git / GitHub", "Postman"],
  },
]

export const achievements = [
  {
    title: "Microsoft Azure AI Fundamentals",
    detail: "Certified in core AI concepts and Azure AI services — scored 863/1000.",
    badge: "863/1000",
  },
  {
    title: "Domain Winner — Spectrum 2024–25",
    detail: "Won the domain-level competition in the EdTech category.",
    badge: "Winner",
  },
  {
    title: "Top 10 — Codevolt25",
    detail: "Ranked in the top 10 at a national-level hackathon.",
    badge: "Top 10",
  },
  {
    title: "Google Data Foundations",
    detail: "Certified in data analytics fundamentals and data-driven decision making.",
    badge: "Certified",
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

// Whole names only, so "Go" finds "Go (Gin)" but not "GORM", and "React" finds "React 19".
export const usedIn = (skill) => {
  const s = skill.toLowerCase()
  return projects.filter((p) =>
    p.tags.some((tag) => {
      const t = tag.toLowerCase()
      return t === s || t.startsWith(`${s} `) || s.startsWith(`${t} `)
    }),
  )
}

export const waybillLink = (name, note) => {
  const subject = `Hello from ${name.trim() || "your portfolio"}`
  const body = name.trim() ? `${note.trim()}\n\n${name.trim()}` : note.trim()
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
