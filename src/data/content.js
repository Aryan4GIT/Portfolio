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
    { label: "Focus", value: "Backend · Cloud · AI" },
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
    points: [
      "Built and automated the billing system for Sri Ganesh Enterprises courier company — GST-accurate invoicing packaged as a single-executable desktop app.",
      "Designed and developed a conversion-focused landing page for Arcus Stays, a Ghaziabad PG.",
    ],
    tags: ["Go", "React", "Freelance", "Client Work"],
  },
]

export const projects = [
  {
    title: "Medlen-AI",
    client: "Personal",
    kind: "AI · Full-Stack",
    year: "2026",
    repo: "https://github.com/Aryan4GIT/MedLen-AI",
    description:
      "An AI-assisted tool for medical reports — upload a report and get a plain-language diagnosis summary, plus a list of questions worth asking your doctor. A RAG pipeline grounds the output in the report itself instead of guessing free-form.",
    tags: ["Go", "React", "MongoDB", "AWS", "RAG"],
    highlights: ["Report diagnosis", "Suggested doctor questions", "RAG-grounded"],
    featured: true,
  },
  {
    title: "OmniMind",
    client: "Personal",
    kind: "AI · Full-Stack",
    year: "2026",
    repo: "https://github.com/Aryan4GIT/Omni-mind",
    description:
      "Three tools over your own material: live speech-to-text, grounded Q&A over documents you drop in, and a three-agent loop that drafts a brief then fact-checks it against those same sources. PDFs are chunked per page and ranked with BM25, so every answer cites a page you can actually turn to — and \"not in this document\" comes back as a real answer instead of a hallucination.",
    tags: ["React 19", "Express", "Gemini", "BM25", "pdf.js"],
    highlights: ["Cited answers", "3-agent fact-check", "Key never hits the client"],
    featured: true,
  },
  {
    title: "Courier Billing System",
    client: "Sri Ganesh Enterprises",
    kind: "Freelance · Live",
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
    client: "Personal",
    kind: "Full-Stack",
    year: "2026",
    repo: "https://github.com/Aryan4GIT/Inventory-management",
    description:
      "Replaces spreadsheet-driven stock tracking for an aluminium manufacturing factory. Go (Gin + GORM) API with JWT auth and role-based access for managers, supervisors, and operators; a React + TypeScript dashboard covering stock movements, orders, reports, and low-stock alerts. Excel import/export so the floor can keep the workflow it already knows. Dockerised, SQLite today, PostgreSQL-ready.",
    tags: ["Go (Gin)", "GORM", "React", "TypeScript", "Docker"],
    highlights: ["Role-based access", "Excel import/export", "Postgres-ready"],
    featured: true,
  },
  {
    title: "SaaS Task Manager",
    client: "Personal",
    kind: "Backend · AI",
    year: "2025",
    repo: "https://github.com/Aryan4GIT/Saas-Task-Manager",
    description:
      "A multi-tenant SaaS backend with organization-level data isolation across workspaces. JWT + RBAC for Admin, Manager, and Member roles, plus a LangChain RAG pipeline that generates contextual task summaries. Containerized and deployed on AWS EC2.",
    tags: ["Go (Gin)", "PostgreSQL", "LangChain", "Docker", "AWS EC2"],
    highlights: ["Multi-tenant isolation", "RAG summaries", "RBAC"],
    featured: true,
  },
  {
    title: "Ledger — Expense Tracker",
    client: "Personal",
    kind: "Full-Stack · Local-first",
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
    client: "Personal",
    kind: "Full-Stack",
    year: "2025",
    repo: "https://github.com/Aryan4GIT/Data-Transformation-Platform",
    description:
      "A data annotation platform for managing datasets and annotation workflows. 10+ secure REST APIs for dataset upload, annotation assignment, and auth. Optimized indexing and backend logic cut API response time by 30%+ while scaling to large datasets.",
    tags: ["Go", "React", "PostgreSQL", "Docker"],
    highlights: ["10+ REST APIs", "30%+ faster", "Scales to large datasets"],
    featured: false,
  },
  {
    title: "Arcus Stays Landing Page",
    client: "Arcus Stays, Ghaziabad",
    kind: "Freelance · Live",
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
    group: "AI / ML",
    items: ["RAG Pipelines", "LangChain", "Transformer Models", "Azure AI"],
  },
  {
    group: "Backend & Data",
    items: ["REST APIs", "Microservices", "JWT", "RBAC", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    group: "DevOps & Tools",
    items: ["Docker", "AWS EC2", "CI/CD", "Git / GitHub", "Postman"],
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
