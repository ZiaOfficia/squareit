export type Stat = {
  value: string;
  label: string;
  /** Icon key resolved in components/ui/Icons.tsx */
  icon: "users" | "target" | "chart" | "document";
  accent: "green" | "red" | "yellow" | "blue";
};

export const stats: Stat[] = [
  { value: "620+", label: "Happy Clients", icon: "users", accent: "green" },
  { value: "12,065+", label: "Successful Campaigns", icon: "target", accent: "red" },
  { value: "2,253+", label: "Results Delivered", icon: "chart", accent: "yellow" },
  { value: "1,199+", label: "Projects Completed", icon: "document", accent: "blue" },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  accent: "green" | "red" | "yellow" | "blue";
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals and challenges.",
    accent: "green",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Create a data-driven plan.",
    accent: "red",
  },
  {
    number: "03",
    title: "Execute",
    description: "Bring the strategy to life.",
    accent: "yellow",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Measure, learn and grow further.",
    accent: "blue",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Squareit helped us build a stronger digital presence and real business growth. Their strategy, creativity and support have been exceptional.",
    name: "Sarvesh Sonkar",
    role: "Founder",
    company: "SS Coaching",
  },
  {
    quote:
      "Our appointment book has not looked this healthy in years. They understood our patients before they touched a single campaign.",
    name: "Dr. Anjali Verma",
    role: "Clinical Director",
    company: "Aastha Dental Solution",
  },
  {
    quote:
      "The rebuild paid for itself in a quarter. Faster site, clearer story, and enquiries from people who already knew what they wanted.",
    name: "Rohit Malhotra",
    role: "Creative Director",
    company: "Studio & Studio",
  },
  {
    quote:
      "They launched our brand end to end — identity, packaging and storefront — and stayed with us through the messy first months.",
    name: "Priya Nair",
    role: "Co-Founder",
    company: "Artchilds",
  },
  {
    quote:
      "Reporting we can actually read, and a team that tells us when something is not working. That honesty is rarer than it should be.",
    name: "Amit Kanhaiya",
    role: "Director",
    company: "Kanhaiya Group",
  },
];

export type ValueItem = {
  title: string;
  description: string;
};

export const values: ValueItem[] = [
  {
    title: "Results over activity",
    description:
      "We report on pipeline, enquiries and revenue — not on how many posts went out this month.",
  },
  {
    title: "Strategy before execution",
    description:
      "Every engagement starts with your numbers and your buyers, so the work has somewhere to aim.",
  },
  {
    title: "Transparency by default",
    description:
      "You see the same dashboards we do, and you hear it first when something is not working.",
  },
  {
    title: "Craft that compounds",
    description:
      "We build systems — content engines, design systems, tracking setups — that keep paying off after the project ends.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export const team: TeamMember[] = [
  {
    name: "Sandeep Srivastava",
    role: "Founder & Director",
    bio: "Fifteen years building growth programmes for brands across healthcare, retail and education.",
  },
  {
    name: "Neha Agarwal",
    role: "Head of Digital Strategy",
    bio: "Turns business goals into channel plans that survive contact with a real budget.",
  },
  {
    name: "Ankit Sharma",
    role: "Head of Technology",
    bio: "Leads the engineering team building fast, search-friendly websites and portals.",
  },
  {
    name: "Ritika Bose",
    role: "Creative Director",
    bio: "Builds identity systems and campaign creative that stay consistent everywhere.",
  },
  {
    name: "Vikas Yadav",
    role: "Performance Marketing Lead",
    bio: "Runs paid search and paid social to a target cost per acquisition, every month.",
  },
  {
    name: "Shreya Kapoor",
    role: "Content & SEO Lead",
    bio: "Editorial strategy, technical SEO and the content engine behind our organic results.",
  },
];

export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Internship" | "Contract";
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const openings: JobOpening[] = [
  {
    slug: "senior-seo-specialist",
    title: "Senior SEO Specialist",
    department: "Digital Marketing",
    location: "Lucknow (On-site)",
    type: "Full-time",
    experience: "3–5 years",
    summary:
      "Own organic growth for a portfolio of clients — technical audits, content strategy and the reporting that proves it worked.",
    responsibilities: [
      "Run technical audits and prioritise fixes with the engineering team",
      "Build keyword and content roadmaps tied to commercial goals",
      "Own reporting and monthly client reviews",
    ],
    requirements: [
      "Demonstrable ranking and traffic growth on past accounts",
      "Comfortable in GA4, Search Console and a crawler of your choice",
      "Clear written English — you will be writing briefs and reports",
    ],
  },
  {
    slug: "frontend-developer-react",
    title: "Frontend Developer (React / Next.js)",
    department: "Technology",
    location: "Lucknow (Hybrid)",
    type: "Full-time",
    experience: "2–4 years",
    summary:
      "Build fast, accessible, SEO-friendly websites and web apps on a modern React stack.",
    responsibilities: [
      "Build production interfaces in Next.js and TypeScript",
      "Keep Core Web Vitals in the green across every launch",
      "Work directly with designers to ship pixel-accurate work",
    ],
    requirements: [
      "Strong React, TypeScript and CSS fundamentals",
      "Experience with the Next.js App Router",
      "An eye for detail in layout and motion",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    department: "Creative",
    location: "Lucknow (On-site)",
    type: "Full-time",
    experience: "1–3 years",
    summary:
      "Produce campaign, social and brand creative across a wide range of client industries.",
    responsibilities: [
      "Design social, display and print creative from brief to delivery",
      "Extend existing brand systems consistently",
      "Work to fast campaign turnarounds without losing craft",
    ],
    requirements: [
      "A portfolio showing range across brand and campaign work",
      "Fluency in the Adobe suite and Figma",
      "Comfort taking and acting on feedback quickly",
    ],
  },
  {
    slug: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    department: "Digital Marketing",
    location: "Lucknow (On-site)",
    type: "Internship",
    experience: "0–1 years",
    summary:
      "A six-month paid internship across SEO, paid media and social, with a route to a full-time role.",
    responsibilities: [
      "Support campaign setup, reporting and research",
      "Draft social and blog content under editorial review",
      "Learn the tooling the team uses every day",
    ],
    requirements: [
      "Genuine curiosity about how marketing actually works",
      "Strong writing and a habit of finishing things",
      "Available full-time for six months",
    ],
  },
];

export function getOpening(slug: string): JobOpening | undefined {
  return openings.find((opening) => opening.slug === slug);
}

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most accounts see meaningful movement in impressions within 8–12 weeks and material traffic or enquiry growth between months four and six. Competitive national terms take longer; local terms often move faster.",
  },
  {
    question: "Do you work with businesses outside Lucknow?",
    answer:
      "Yes. We are headquartered in Lucknow and work with clients across India and overseas. Everything except on-site production runs remotely.",
  },
  {
    question: "What does a typical engagement cost?",
    answer:
      "Retainers are scoped to the outcome rather than a fixed package, so pricing depends on the channels involved and how competitive your market is. We will give you a clear scope and number after the first consultation.",
  },
  {
    question: "Can you work with our existing website?",
    answer:
      "In most cases, yes. We audit what you have first and only recommend a rebuild when the platform is genuinely holding back performance.",
  },
  {
    question: "Who owns the accounts and assets you create?",
    answer:
      "You do. Ad accounts, analytics properties, design files and content are created in your name and stay with you if we ever part ways.",
  },
  {
    question: "How do you report on results?",
    answer:
      "You get a live dashboard plus a monthly review call. Reporting is tied to the KPIs agreed at kickoff — enquiries, cost per lead, rankings and revenue where we can track it.",
  },
];
