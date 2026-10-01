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
  /** Client logo from squareit.in, shown beside the quote. */
  logo?: string;
  avatar?: string;
};

/**
 * Client testimonials, carried over verbatim from squareit.in. The wording is
 * the clients' own — spelling and phrasing are left as published rather than
 * tidied, because these are quotations.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Squareit Solutions is a fantastic team that have helped us grow our business online through a wide range of digital services including Social Media, PPC, SEO etc. This is the best digital Marketing agency that is very Professional and result oriented.",
    name: "Sarvesh Sonkar",
    role: "Founder",
    company: "SS Coaching",
    logo: "/images/squareit/clients/client-ss-coaching.jpg",
  },
  {
    quote:
      "It has been an absolute pleasure to work with Squareit Solutions. The guys not only provided creative solutions for our consultancy but also helped us to reach our Target Customers. The best part is transparency and regular reports.",
    name: "Sahu Developers",
    role: "Owner",
    company: "Sahu Developers",
    logo: "/images/squareit/clients/client-sahu-developers.jpg",
  },
  {
    quote:
      "No doubt, Squareit Solutions is the Best digital Makreting Company in Lucknow where the Creative team helped us grow our business online through a wide range of digital services including SEO, Youtube Video promotion, Google Adwords etc. under minimal amount.",
    name: "Helping Hands",
    role: "Owner",
    company: "Helping Hands",
    logo: "/images/squareit/clients/client-helping-hands.jpg",
  },
  {
    quote:
      "Jewels Box ranking has gone up so much from the great work that your team has done and our brand get organic sales consistently from your efforts. We are very much thankful to Squareit Solutions for their result-oriented efforts.",
    name: "JewelsBox Lucknow",
    role: "Owner",
    company: "JewelsBox",
    logo: "/images/squareit/clients/client-jewelsbox.jpg",
  },
  {
    quote:
      "Extremely Satisfied with Squareit Solutions services. It is best Digital marketing Agency working on our project like their own, very dedicated to client services and we look forward to work with them in future also.",
    name: "AJ Sons",
    role: "Owner",
    company: "AJ Sons",
    logo: "/images/squareit/clients/client-aj-sons.jpg",
  },
  {
    quote:
      "Work and response is extremely superb, Staff is cooperative. I am super happy with their services. Keep up the good work!",
    name: "Xoheb Khan",
    role: "Owner",
    company: "Xoheb Khan",
    logo: "/images/squareit/clients/client-xoheb-khan.jpg",
  },
  {
    quote:
      "Squareit is a creative company that knows how to get the job done. I would recommend you to check it out if you are looking to grow your business digitally.",
    name: "Pizza Dine",
    role: "Owner",
    company: "Pizza Dine",
    logo: "/images/squareit/clients/client-pizza-dine.jpg",
  },
  {
    quote:
      "Outstanding Digital marketing agency!!! I would highly recommend the company to any business who need SEO, content marketing, web design and development, affiliate marketing and much more.",
    name: "Rishita Developers",
    role: "Owner",
    company: "Rishita Developers",
    logo: "/images/squareit/clients/client-rishita.jpg",
  },
  {
    quote:
      "One of the best digital marketing agency in Lucknow. The team is very professional and dedicated to the work. They have kept the charges very feasible for all.",
    name: "Prithvee Realty Services",
    role: "Owner",
    company: "Prithvee Realty Services",
    logo: "/images/squareit/clients/client-prithvee.jpg",
  },
  {
    quote:
      "Great Experience with Squareit (Digital Marketing Agency). Squareit took the initiative and truly cared about our company and the end results are great. Highly recommended for Website and SEO.",
    name: "We Legal",
    role: "Owner",
    company: "We Legal",
    logo: "/images/squareit/clients/client-we-legal.jpg",
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
  bio?: string;
  image?: string;
  /** Groups the grid into departments, in the order listed below. */
  department: TeamDepartment;
  /** Leads carry a bio and get the larger card treatment. */
  lead?: boolean;
};

export type TeamDepartment =
  | "Leadership"
  | "Business Development"
  | "Social Media"
  | "Design & Video"
  | "YouTube & Ads"
  | "SEO"
  | "Development";

/** Rendered in this order on /about/team. */
export const teamDepartments: TeamDepartment[] = [
  "Leadership",
  "Business Development",
  "Social Media",
  "Design & Video",
  "YouTube & Ads",
  "SEO",
  "Development",
];

/** The team as listed on squareit.in/our-team, with their own photographs. */
export const team: TeamMember[] = [
  {
    name: "Sameer Khan",
    role: "Founder & CEO",
    bio: "An avid digital marketer with an impressive track record of success in campaigns for renowned brands across the globe. His innovative and results-driven approach has enabled Squareit Solutions to establish itself as a leader in the digital marketing space.",
    image: "/images/squareit/team/team-sameer-khan.jpg",
    department: "Leadership",
    lead: true,
  },
  {
    name: "Niyaz Ahmad Ansari",
    role: "Manager",
    bio: "An experienced professional, possessing a profound understanding of the digital marketing landscape. Highly skilled in SEO, content marketing, and analytics.",
    image: "/images/squareit/team/team-niyaz-ahmad-ansari.jpg",
    department: "Leadership",
    lead: true,
  },
  {
    name: "Varisha Alam",
    role: "HR Manager",
    bio: "Oversees recruitment, employee relations, performance management, training and development, and labour law compliance.",
    image: "/images/squareit/team/team-varisha-alam.jpg",
    department: "Leadership",
    lead: true,
  },

  {
    name: "Ahmar Siddiqui",
    role: "Business Development Manager",
    image: "/images/squareit/team/team-ahmar-siddiqui.jpg",
    department: "Business Development",
  },
  {
    name: "Sidra Naushad",
    role: "Business Development Executive",
    image: "/images/squareit/team/team-sidra-naushad.jpg",
    department: "Business Development",
  },

  {
    name: "Shah Ashar Moiz",
    role: "Social Media Manager",
    image: "/images/squareit/team/team-shah-ashar-moiz.jpg",
    department: "Social Media",
  },
  {
    name: "Mehraj Rizvi",
    role: "SMM Executive",
    image: "/images/squareit/team/team-mehraj-rizvi.jpg",
    department: "Social Media",
  },
  {
    name: "Parkhi Mishra",
    role: "SMO Executive",
    image: "/images/squareit/team/team-parkhi-mishra.jpg",
    department: "Social Media",
  },

  {
    name: "Anurag Yadav",
    role: "Graphic Designer",
    image: "/images/squareit/team/team-anurag-yadav.jpg",
    department: "Design & Video",
  },
  {
    name: "Ali Yusufi",
    role: "Graphic Designer",
    image: "/images/squareit/team/team-ali-yusufi.jpg",
    department: "Design & Video",
  },
  {
    name: "Anas Khan",
    role: "Video Editor",
    image: "/images/squareit/team/team-anas-khan.jpg",
    department: "Design & Video",
  },

  {
    name: "Faiz Khan",
    role: "YouTube Monetization Expert",
    image: "/images/squareit/team/team-faiz-khan.jpg",
    department: "YouTube & Ads",
  },
  {
    name: "Anjani Gupta",
    role: "YouTube Monetization Expert",
    image: "/images/squareit/team/team-anjani-gupta.jpg",
    department: "YouTube & Ads",
  },
  {
    name: "Karishma",
    role: "YouTube Monetization Executive",
    image: "/images/squareit/team/team-karishma.jpg",
    department: "YouTube & Ads",
  },
  {
    name: "Aqsa Aziz",
    role: "YouTube Monetization Executive",
    image: "/images/squareit/team/team-aqsa-aziz.jpg",
    department: "YouTube & Ads",
  },
  {
    name: "Arshi Khan",
    role: "YouTube Monetization Executive",
    image: "/images/squareit/team/team-arshi-khan.jpg",
    department: "YouTube & Ads",
  },
  {
    name: "Sohail Khan",
    role: "Google Ads Executive",
    image: "/images/squareit/team/team-sohail-khan.jpg",
    department: "YouTube & Ads",
  },

  {
    name: "Ahmad Jamal",
    role: "SEO Specialist",
    image: "/images/squareit/team/team-ahmad-jamal.jpg",
    department: "SEO",
  },
  {
    name: "Aquib Siddique",
    role: "SEO Executive",
    image: "/images/squareit/team/team-aquib-siddique.jpg",
    department: "SEO",
  },

  {
    name: "Mohammad Abdullah",
    role: "AI Engineer & Web Developer",
    image: "/images/squareit/team/team-mohammad-abdullah.jpg",
    department: "Development",
  },
  {
    name: "Utkarsh Singh",
    role: "Web Developer",
    image: "/images/squareit/team/team-utkarsh-singh.jpg",
    department: "Development",
  },
  {
    name: "Piyush Sing",
    role: "Web Developer",
    image: "/images/squareit/team/team-piyush-sing.jpg",
    department: "Development",
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
