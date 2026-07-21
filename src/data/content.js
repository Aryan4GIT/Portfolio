export const profile = {
  name: "Aryan Kumar Singh",
  role: "Software Developer",
  location: "Chennai, India",
  email: "aryansingh73321@gmail.com",
  phone: "+91 85957 87876",
  github: "https://github.com/Aryan4GIT",
  linkedin: "https://www.linkedin.com/in/aryan-singh-222200266/",
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
    title: "Courier Billing System",
    client: "Sri Ganesh Enterprises",
    kind: "Freelance · Live",
    year: "2025",
    description:
      "Automated the end-to-end billing workflow for a courier company. GST-accurate invoice generation, customer records, and reporting — shipped as a single self-contained executable so the client runs it with zero setup.",
    tags: ["Go", "React", "SQLite", "Desktop App"],
    highlights: ["Single-exe deploy", "GST automation", "Real client in production"],
    featured: true,
  },
  {
    title: "SaaS Task Manager",
    client: "Personal",
    kind: "Backend · AI",
    year: "2025",
    description:
      "A multi-tenant SaaS backend with organization-level data isolation across workspaces. JWT + RBAC for Admin, Manager, and Member roles, plus a LangChain RAG pipeline that generates contextual task summaries. Containerized and deployed on AWS EC2.",
    tags: ["Go (Gin)", "PostgreSQL", "LangChain", "Docker", "AWS EC2"],
    highlights: ["Multi-tenant isolation", "RAG summaries", "RBAC"],
    featured: true,
  },
  {
    title: "Data Mapping Platform",
    client: "Personal",
    kind: "Full-Stack",
    year: "2025",
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
