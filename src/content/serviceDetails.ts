/**
 * Long-form copy for each individual service page (/services/[category]/[item]).
 * Keyed by the item slug in services.ts — every item there must have an entry
 * here, or its page falls back to the short summary only.
 */

export type ServiceBenefit = { title: string; description: string };

export type ServiceDetail = {
  /** Two or three short paragraphs describing the service. */
  overview: string[];
  /** "How it helps your business" — four points. */
  benefits: ServiceBenefit[];
  /** What the engagement actually delivers. */
  deliverables: string[];
  /** Project slugs from work.ts to show as related portfolio. */
  work: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  /* ---------------------------------------------------------------- */
  /* Digital Marketing                                                 */
  /* ---------------------------------------------------------------- */
  seo: {
    overview: [
      "Search Engine Optimization is how customers find you without you paying for every click. We audit your website, fix what is holding it back and build the content and authority Google needs to rank you on page one.",
      "Every SEO engagement combines technical fixes, on-page optimisation and off-page link building, with monthly reporting on rankings, traffic and — most importantly — the enquiries that traffic brings in.",
    ],
    benefits: [
      { title: "Leads that keep coming", description: "Rankings keep sending visitors long after the work is done, so your cost per lead falls every month." },
      { title: "Visible when buyers search", description: "We target the keywords people use when they are ready to buy, not just browse." },
      { title: "Trust and credibility", description: "Businesses on page one are seen as the leaders in their space — and get chosen first." },
      { title: "Beat local competitors", description: "Local SEO puts you ahead of rivals in your city for the services you actually sell." },
    ],
    deliverables: [
      "Full technical SEO audit and fixes",
      "Keyword research and content plan",
      "On-page optimisation of key pages",
      "Quality backlink building",
      "Local SEO and citation building",
      "Monthly ranking and traffic reports",
    ],
    work: ["aastha-dental-solution", "studio-and-studio"],
  },
  sem: {
    overview: [
      "Search Engine Marketing puts your business at the top of Google the moment someone searches for what you sell. You pay only when they click, and campaigns can start bringing enquiries within days.",
      "We build tightly targeted Google Ads campaigns, write ads that get clicked, and manage bids daily against a target cost per lead — so every rupee of ad spend is accountable.",
    ],
    benefits: [
      { title: "Results from day one", description: "Unlike SEO, paid search starts sending qualified traffic as soon as campaigns go live." },
      { title: "Pay only for intent", description: "Ads show to people actively searching for your service, so budget goes to real buyers." },
      { title: "Full budget control", description: "Set daily limits, pause anytime and scale up the campaigns that perform best." },
      { title: "Measurable return", description: "Conversion tracking shows exactly which keywords and ads produce enquiries and sales." },
    ],
    deliverables: [
      "Google Ads account setup or audit",
      "Keyword and competitor research",
      "Ad copy and extension writing",
      "Conversion and call tracking",
      "Daily bid and budget management",
      "Weekly performance reporting",
    ],
    work: ["aastha-dental-solution"],
  },
  "email-marketing": {
    overview: [
      "Email is still the highest-return marketing channel. It reaches people who already know your brand, costs almost nothing per message and works around the clock once automated.",
      "We plan, design and send newsletters and campaigns, and set up automated journeys — welcome series, abandoned cart reminders, follow-ups — that turn subscribers into repeat customers.",
    ],
    benefits: [
      { title: "Sales from existing contacts", description: "Re-engage past customers and leads you already paid to acquire." },
      { title: "Automated follow-up", description: "Journeys send the right message at the right time, without anyone pressing send." },
      { title: "Very low cost per message", description: "Reach thousands of people for a fraction of what ads would cost." },
      { title: "Own your audience", description: "Your email list is yours — no algorithm can take it away." },
    ],
    deliverables: [
      "Email platform setup and list import",
      "Branded, mobile-friendly templates",
      "Monthly newsletters and campaigns",
      "Welcome and nurture automation",
      "List segmentation and clean-up",
      "Open, click and revenue reporting",
    ],
    work: ["artchilds", "jewelsbox"],
  },
  "social-media-marketing": {
    overview: [
      "Social media is where your customers spend hours every day. We make sure your brand shows up there with content people want to engage with, and ads that turn that attention into leads.",
      "From content calendars and creative to paid campaigns on Facebook, Instagram and LinkedIn, we handle your social presence end to end — and report on followers, reach and enquiries.",
    ],
    benefits: [
      { title: "Reach a wider audience", description: "Put your brand in front of thousands of potential customers in your target area." },
      { title: "Consistent brand presence", description: "Regular, on-brand posts keep you top of mind with followers." },
      { title: "Targeted paid campaigns", description: "Ads reach people by location, age, interests and behaviour." },
      { title: "Leads from social", description: "Lead forms and direct messages turn engagement into real enquiries." },
    ],
    deliverables: [
      "Social media strategy and calendar",
      "Post and reel creative",
      "Captions and hashtag research",
      "Paid social campaign management",
      "Community and comment handling",
      "Monthly analytics report",
    ],
    work: ["pizza-dine", "jewelsbox", "artchilds"],
  },
  "social-media-optimization": {
    overview: [
      "Social Media Optimization makes sure every profile you own works as hard as your website. A half-finished or inconsistent profile loses people before they ever contact you.",
      "We optimise your bios, highlights, links, visuals and posting patterns across platforms, so your brand is easy to discover, looks professional and turns visitors into followers and leads.",
    ],
    benefits: [
      { title: "Look professional everywhere", description: "Consistent branding across every platform builds instant trust." },
      { title: "Get discovered", description: "Optimised profiles and hashtags help new people find you." },
      { title: "More engagement", description: "Content tuned to each platform earns more likes, shares and saves." },
      { title: "Clear path to contact", description: "Every profile points visitors to call, message or visit your site." },
    ],
    deliverables: [
      "Profile audit across platforms",
      "Bio, link and highlight optimisation",
      "Branded cover and profile visuals",
      "Hashtag and keyword research",
      "Posting schedule recommendations",
      "Engagement improvement plan",
    ],
    work: ["pizza-dine", "worldwide-wedding"],
  },
  "content-marketing": {
    overview: [
      "Great content answers your customers' questions before they ask them. It builds trust, ranks on Google and gives your sales team something useful to share.",
      "We plan and produce blogs, guides, landing page copy and social content around the topics your buyers care about — then distribute it so it actually gets read.",
    ],
    benefits: [
      { title: "Build authority", description: "Helpful content positions you as the expert in your field." },
      { title: "Supports SEO", description: "Every quality article is another page that can rank on Google." },
      { title: "Nurtures buyers", description: "Content guides prospects from first visit to ready-to-buy." },
      { title: "Assets that last", description: "Good content keeps working for years after it is published." },
    ],
    deliverables: [
      "Content strategy and topic plan",
      "SEO-optimised blog articles",
      "Website and landing page copy",
      "Guides, e-books and case studies",
      "Social content from each article",
      "Content performance reporting",
    ],
    work: ["studio-and-studio", "aastha-dental-solution"],
  },
  "whatsapp-marketing": {
    overview: [
      "WhatsApp messages get read — open rates are far higher than email. It is the most direct line to your customers, and the place many of them already prefer to talk to businesses.",
      "We set up the WhatsApp Business API, build broadcast campaigns and catalogues, and automate replies and follow-ups, so you can share offers, answer queries and close sales in one chat.",
    ],
    benefits: [
      { title: "Messages that get read", description: "WhatsApp open rates are far higher than email or SMS." },
      { title: "Instant answers", description: "Automated replies respond to common questions 24/7." },
      { title: "Faster sales", description: "Share catalogues, prices and payment links right in the chat." },
      { title: "Repeat business", description: "Broadcasts bring past customers back with offers and updates." },
    ],
    deliverables: [
      "WhatsApp Business / API setup",
      "Product catalogue setup",
      "Broadcast campaign planning",
      "Chatbot and auto-reply flows",
      "Click-to-WhatsApp ad campaigns",
      "Message and conversion reporting",
    ],
    work: ["pizza-dine", "jewelsbox"],
  },
  "video-marketing": {
    overview: [
      "Video is the format people stop scrolling for. It explains your product faster than text, builds trust faster than photos and is favoured by every social platform's algorithm.",
      "We plan, shoot, edit and distribute videos — reels, ads, testimonials and brand films — and make sure each one is built for the platform it will be watched on.",
    ],
    benefits: [
      { title: "More engagement", description: "Video earns more views, shares and comments than any other format." },
      { title: "Explain faster", description: "Show how your product or service works in seconds." },
      { title: "Build trust", description: "Faces, testimonials and behind-the-scenes clips make your brand human." },
      { title: "Higher conversions", description: "Landing pages and ads with video convert better." },
    ],
    deliverables: [
      "Video concept and scripting",
      "Shooting and direction",
      "Editing, colour and sound",
      "Reels and short-form cut-downs",
      "Subtitles and thumbnails",
      "Distribution and ad promotion",
    ],
    work: ["artchilds", "pizza-dine"],
  },
  "display-advertising": {
    overview: [
      "Display advertising puts your brand in front of people as they browse websites, apps and YouTube. It builds awareness at scale and brings back visitors who left your site without enquiring.",
      "We design banner and video ads, choose the right audiences and placements, and run remarketing campaigns that remind interested people to come back and convert.",
    ],
    benefits: [
      { title: "Massive reach", description: "Google's display network reaches most internet users in India." },
      { title: "Bring visitors back", description: "Remarketing follows up with people who already showed interest." },
      { title: "Visual impact", description: "Eye-catching creative builds brand recognition quickly." },
      { title: "Low cost awareness", description: "Display clicks and impressions cost far less than search." },
    ],
    deliverables: [
      "Audience and placement strategy",
      "Banner ads in all standard sizes",
      "Animated and video ad creative",
      "Remarketing campaign setup",
      "Placement and bid optimisation",
      "Reach and conversion reporting",
    ],
    work: ["jewelsbox", "worldwide-wedding"],
  },
  "ecommerce-marketing": {
    overview: [
      "Running an online store means competing for every click and every cart. E-commerce marketing brings in shoppers, gets them to check out and makes them buy again.",
      "We manage product feeds, Google Shopping and Meta catalogue ads, optimise product pages and set up retention campaigns, all measured against revenue and return on ad spend.",
    ],
    benefits: [
      { title: "More store traffic", description: "Shopping ads show your products with price and image right in search." },
      { title: "Higher conversion", description: "Better product pages and checkout reduce abandoned carts." },
      { title: "Repeat customers", description: "Email, WhatsApp and remarketing bring buyers back." },
      { title: "Revenue-focused reporting", description: "Every campaign is measured by sales and ROAS." },
    ],
    deliverables: [
      "Product feed setup and optimisation",
      "Google Shopping campaigns",
      "Meta catalogue and dynamic ads",
      "Product page optimisation",
      "Abandoned cart recovery flows",
      "Revenue and ROAS reporting",
    ],
    work: ["artchilds", "jewelsbox"],
  },
  aeo: {
    overview: [
      "Answer Engine Optimization prepares your business for how people search now — by asking questions to voice assistants, Google's featured snippets and AI answer boxes.",
      "We restructure your content into clear question-and-answer formats, add the right schema markup and build topical authority, so search engines quote your business as the answer.",
    ],
    benefits: [
      { title: "Be the answer", description: "Win featured snippets and the answer box above normal results." },
      { title: "Voice search ready", description: "Get recommended when people ask Siri, Alexa or Google Assistant." },
      { title: "Higher trust", description: "Being quoted as the answer signals expertise to customers." },
      { title: "Future-proof visibility", description: "Stay visible as search shifts from links to direct answers." },
    ],
    deliverables: [
      "Question and intent research",
      "FAQ and answer content creation",
      "Schema and structured data markup",
      "Featured snippet optimisation",
      "Voice search optimisation",
      "Answer visibility tracking",
    ],
    work: ["aastha-dental-solution", "studio-and-studio"],
  },
  geo: {
    overview: [
      "Generative Engine Optimization makes your brand show up inside AI tools like ChatGPT, Gemini, Perplexity and Google's AI Overviews — where a growing share of buyers now start their research.",
      "We audit how AI tools describe your business today, then strengthen your content, mentions and authority signals across the web so AI-generated answers recommend you by name.",
    ],
    benefits: [
      { title: "Get recommended by AI", description: "Appear when people ask AI tools for the best provider in your field." },
      { title: "Early-mover advantage", description: "Most competitors are not optimising for AI search yet." },
      { title: "Accurate brand info", description: "Make sure AI tools describe your services and location correctly." },
      { title: "Works with SEO", description: "GEO builds on the same content and authority that drives rankings." },
    ],
    deliverables: [
      "AI visibility audit across tools",
      "Entity and brand profile optimisation",
      "Citation-worthy content creation",
      "Mentions on trusted third-party sites",
      "Structured data for AI crawlers",
      "Monthly AI visibility tracking",
    ],
    work: ["aastha-dental-solution", "studio-and-studio"],
  },
  "google-business-profile": {
    overview: [
      "Your Google Business Profile is often the first thing a local customer sees — before your website. A complete, active profile is what wins the map pack and the phone call.",
      "We set up or fix your profile, choose the right categories, add photos and posts, and run a review generation process so you rank higher in local search and Google Maps.",
    ],
    benefits: [
      { title: "Win the map pack", description: "Appear in the top three local results on Google Maps." },
      { title: "More calls and visits", description: "Customers can call, message or get directions in one tap." },
      { title: "More reviews", description: "A steady stream of reviews builds trust and boosts ranking." },
      { title: "Accurate information", description: "Hours, address and services always up to date." },
    ],
    deliverables: [
      "Profile setup, verification or audit",
      "Category and service optimisation",
      "Photo and video uploads",
      "Weekly Google posts",
      "Review generation and replies",
      "Local ranking and insights reports",
    ],
    work: ["aastha-dental-solution", "pizza-dine"],
  },
  "web-analytics": {
    overview: [
      "You cannot improve what you cannot measure. Web analytics shows where your visitors come from, what they do on your site and which channels actually produce leads and sales.",
      "We set up GA4, Google Tag Manager, conversion and call tracking, and build clear dashboards — so you and your team can make marketing decisions based on data, not guesses.",
    ],
    benefits: [
      { title: "Know what works", description: "See exactly which channels and campaigns bring customers." },
      { title: "Stop wasting budget", description: "Cut spend on what is not working and scale what is." },
      { title: "Understand visitors", description: "Learn how people use your site and where they drop off." },
      { title: "Simple dashboards", description: "Clear reports anyone in your team can read." },
    ],
    deliverables: [
      "GA4 and Tag Manager setup",
      "Conversion and event tracking",
      "Call and form tracking",
      "Server-side tracking (where needed)",
      "Custom Looker Studio dashboards",
      "Monthly insights review",
    ],
    work: ["studio-and-studio", "aastha-dental-solution"],
  },

  /* ---------------------------------------------------------------- */
  /* Development                                                       */
  /* ---------------------------------------------------------------- */
  "website-design": {
    overview: [
      "Your website is your hardest-working salesperson. A good design makes people trust you within seconds and makes it obvious what to do next.",
      "We design custom websites around your brand and your customers — clear layouts, strong visuals and calls to action placed exactly where visitors are ready to act, on every screen size.",
    ],
    benefits: [
      { title: "Strong first impression", description: "A modern, professional design builds instant credibility." },
      { title: "More enquiries", description: "Layouts designed around conversion, not decoration." },
      { title: "Works on every device", description: "Fully responsive designs for mobile, tablet and desktop." },
      { title: "Uniquely yours", description: "Custom designs that reflect your brand — no generic templates." },
    ],
    deliverables: [
      "Discovery and sitemap planning",
      "Wireframes for key pages",
      "Custom visual design",
      "Mobile and tablet layouts",
      "Clickable prototype",
      "Design handover to development",
    ],
    work: ["studio-and-studio", "artchilds"],
  },
  "web-development": {
    overview: [
      "A beautiful design is only as good as the code behind it. We build websites that load fast, rank well on Google and are easy for your team to update.",
      "Using modern, SEO-friendly technology, we turn designs into secure, high-performance websites with clean code, structured data and Core Web Vitals in the green from launch day.",
    ],
    benefits: [
      { title: "Fast loading", description: "Quick sites keep visitors from leaving and rank better." },
      { title: "SEO-ready", description: "Clean code and structured data help Google understand your site." },
      { title: "Secure and stable", description: "Built with security best practices and reliable hosting." },
      { title: "Easy to manage", description: "Update content yourself without calling a developer." },
    ],
    deliverables: [
      "Front-end and back-end development",
      "CMS setup for easy editing",
      "Contact forms and integrations",
      "On-page SEO and schema markup",
      "Speed and Core Web Vitals tuning",
      "Testing, launch and training",
    ],
    work: ["studio-and-studio", "aastha-dental-solution"],
  },
  "landing-page": {
    overview: [
      "A landing page has one job: turn a visitor from an ad or campaign into a lead. Sending paid traffic to a generic homepage wastes a big part of your budget.",
      "We design and build focused landing pages with clear messaging, social proof and a single strong call to action — then test and refine them to keep improving conversion rates.",
    ],
    benefits: [
      { title: "Higher conversion rates", description: "Focused pages convert far better than general website pages." },
      { title: "Lower cost per lead", description: "More conversions from the same ad spend." },
      { title: "Fast to launch", description: "New campaign pages live in days, not weeks." },
      { title: "Built to test", description: "A/B testing shows what headlines and offers work best." },
    ],
    deliverables: [
      "Conversion-focused copywriting",
      "Custom landing page design",
      "Fast, mobile-first build",
      "Lead forms and CRM integration",
      "Conversion and ad tracking",
      "A/B testing and optimisation",
    ],
    work: ["aastha-dental-solution", "studio-and-studio"],
  },
  "ecommerce-portal": {
    overview: [
      "An online store needs to be fast, easy to browse and simple to pay on — every extra step at checkout loses sales.",
      "We build e-commerce websites with clean product catalogues, secure payment gateways, inventory and order management, and the marketing integrations you need to grow.",
    ],
    benefits: [
      { title: "Sell 24/7", description: "Your store takes orders day and night, across India and beyond." },
      { title: "Smooth checkout", description: "Fast, secure checkout reduces abandoned carts." },
      { title: "Easy management", description: "Add products, track orders and manage stock from one dashboard." },
      { title: "Ready to market", description: "Product feeds and tracking ready for Google and Meta ads." },
    ],
    deliverables: [
      "Store design and development",
      "Product catalogue setup",
      "Payment gateway integration",
      "Shipping and tax configuration",
      "Order and inventory management",
      "Product feeds and analytics",
    ],
    work: ["artchilds", "jewelsbox"],
  },
  "web-portal-development": {
    overview: [
      "Web portals give customers, dealers or staff a secure place to log in, see their own information and get work done — without endless emails and phone calls.",
      "We build custom portals with role-based access, dashboards and workflows tailored to how your business actually runs, connected to the tools and data you already use.",
    ],
    benefits: [
      { title: "Save time", description: "Automate tasks that are currently done by hand or by email." },
      { title: "Self-service", description: "Customers and partners find what they need without calling you." },
      { title: "Secure access", description: "Each user sees only the data they are allowed to see." },
      { title: "One source of truth", description: "Keep all data and documents in one organised place." },
    ],
    deliverables: [
      "Requirements and workflow mapping",
      "User roles and permissions",
      "Custom dashboards",
      "Integrations with existing tools",
      "Secure login and data protection",
      "Training and ongoing support",
    ],
    work: ["studio-and-studio"],
  },
  "website-maintenance": {
    overview: [
      "A website is never finished. Plugins go out of date, security threats appear and small issues quietly cost you visitors and rankings.",
      "Our maintenance plans keep your site updated, backed up, secure and fast, with a team on hand for content changes and fixes whenever you need them.",
    ],
    benefits: [
      { title: "Peace of mind", description: "We watch your site so you can focus on your business." },
      { title: "Stay secure", description: "Regular updates and monitoring keep hackers out." },
      { title: "Never lose data", description: "Daily backups mean your site can always be restored." },
      { title: "Always fast", description: "Ongoing tuning keeps load times and rankings healthy." },
    ],
    deliverables: [
      "Software and plugin updates",
      "Daily backups",
      "Security and uptime monitoring",
      "Speed optimisation",
      "Content updates and small fixes",
      "Monthly health report",
    ],
    work: ["studio-and-studio", "aastha-dental-solution"],
  },
  "web-hosting": {
    overview: [
      "Slow or unreliable hosting drags down everything else — your rankings, your conversions and your customers' patience.",
      "We provide managed hosting on fast, secure servers with free SSL, a global CDN and round-the-clock monitoring, and we handle setup, migration and support for you.",
    ],
    benefits: [
      { title: "Fast load times", description: "Quality servers and a CDN deliver pages quickly anywhere." },
      { title: "High uptime", description: "Monitoring and quick response keep your site online." },
      { title: "Secure by default", description: "Free SSL, firewalls and malware scanning included." },
      { title: "Hassle-free", description: "We handle setup, migration and technical support." },
    ],
    deliverables: [
      "Managed server setup",
      "Free SSL certificate",
      "Global CDN configuration",
      "Domain and email setup",
      "Free website migration",
      "24/7 uptime monitoring",
    ],
    work: ["studio-and-studio"],
  },

  /* ---------------------------------------------------------------- */
  /* Creative & Design                                                 */
  /* ---------------------------------------------------------------- */
  "logo-design": {
    overview: [
      "Your logo is the face of your business. It appears on everything you do, so it needs to be distinctive, memorable and work at every size — from a favicon to a billboard.",
      "We research your market, explore multiple concepts and refine the chosen direction into a final logo, delivered with a usage guide and every file format you will ever need.",
    ],
    benefits: [
      { title: "Be recognised", description: "A distinctive mark makes your brand easy to remember." },
      { title: "Look established", description: "Professional design signals a trustworthy business." },
      { title: "Works everywhere", description: "Designed to look right on screens, print and signage." },
      { title: "Stand apart", description: "Research makes sure you look different from competitors." },
    ],
    deliverables: [
      "Market and competitor research",
      "Multiple logo concepts",
      "Refinement rounds",
      "Colour and mono versions",
      "All file formats (AI, SVG, PNG, PDF)",
      "Logo usage guidelines",
    ],
    work: ["artchilds", "worldwide-wedding"],
  },
  "brand-identity": {
    overview: [
      "A brand is more than a logo. It is the colours, fonts, imagery and tone of voice that make every touchpoint feel like it comes from the same business.",
      "We build complete identity systems and document them in a brand guide with ready-to-use templates, so your team and partners can create on-brand material every time.",
    ],
    benefits: [
      { title: "Consistency everywhere", description: "Every post, ad and document looks like it belongs together." },
      { title: "Premium perception", description: "A cohesive brand lets you charge what you are worth." },
      { title: "Faster content creation", description: "Templates and rules mean less time designing from scratch." },
      { title: "Lasting recognition", description: "Repeated, consistent visuals build memory over time." },
    ],
    deliverables: [
      "Brand strategy and positioning",
      "Logo and visual identity",
      "Colour palette and typography",
      "Tone of voice guidelines",
      "Stationery and social templates",
      "Complete brand guidelines book",
    ],
    work: ["artchilds", "worldwide-wedding", "jewelsbox"],
  },
  "ui-ux-design": {
    overview: [
      "Good UI/UX design makes your website or app feel effortless. When users find what they need quickly, they stay longer, trust you more and convert more often.",
      "We start with research into your users and goals, map their journeys, build wireframes and prototypes, and finish with polished interfaces ready for development.",
    ],
    benefits: [
      { title: "Easier to use", description: "Clear navigation and layouts reduce confusion and drop-off." },
      { title: "Higher conversions", description: "Journeys designed to guide users towards action." },
      { title: "Fewer costly changes", description: "Testing prototypes catches problems before development." },
      { title: "Happier users", description: "Pleasant experiences bring people back again." },
    ],
    deliverables: [
      "User research and personas",
      "User journey mapping",
      "Wireframes",
      "Interactive prototypes",
      "High-fidelity UI design",
      "Design system and handover",
    ],
    work: ["studio-and-studio", "artchilds"],
  },
  "graphic-design": {
    overview: [
      "Strong visuals get noticed, remembered and shared. Whether it is a social post, a brochure or a hoarding, great design makes your message land.",
      "Our designers create brochures, banners, flyers, business cards, social media posts, presentations and more — always on-brand and always ready for print or digital use.",
    ],
    benefits: [
      { title: "Get noticed", description: "Eye-catching design stands out in crowded feeds and markets." },
      { title: "Communicate clearly", description: "Good layout makes your message easy to understand." },
      { title: "On-brand every time", description: "Every piece matches your brand identity." },
      { title: "Print and digital ready", description: "Files prepared correctly for any medium." },
    ],
    deliverables: [
      "Social media creatives",
      "Brochures and catalogues",
      "Flyers, posters and banners",
      "Business cards and stationery",
      "Presentation design",
      "Print-ready and web files",
    ],
    work: ["jewelsbox", "pizza-dine", "worldwide-wedding"],
  },
  "packaging-design": {
    overview: [
      "On the shelf, your packaging has about three seconds to win a customer. It needs to stand out, explain the product and feel worth the price.",
      "We design packaging and labels that carry your brand, meet printing and regulatory requirements, and look just as good in online product photos as they do in store.",
    ],
    benefits: [
      { title: "Stand out on shelf", description: "Distinctive design catches the eye among competitors." },
      { title: "Premium feel", description: "Quality packaging justifies a better price." },
      { title: "Clear information", description: "Product details and claims laid out clearly and legally." },
      { title: "Ready to print", description: "Dielines and files prepared for your manufacturer." },
    ],
    deliverables: [
      "Packaging concept designs",
      "Label and box design",
      "Product range variations",
      "Dielines and print specifications",
      "3D mockups for e-commerce",
      "Print supervision support",
    ],
    work: ["artchilds", "pizza-dine"],
  },
  "motion-graphics": {
    overview: [
      "Motion graphics turn complex ideas into short, engaging animations. They are perfect for explaining a service, launching a product or making your social feed move.",
      "We script, design and animate explainer videos, social reels, logo animations and product loops — sized and timed for every platform they will appear on.",
    ],
    benefits: [
      { title: "Explain anything", description: "Animation makes complex services simple to understand." },
      { title: "Stop the scroll", description: "Movement grabs attention in busy social feeds." },
      { title: "Flexible and reusable", description: "Easy to update and cut for different platforms." },
      { title: "Memorable branding", description: "Animated logos and visuals make your brand stick." },
    ],
    deliverables: [
      "Script and storyboard",
      "Explainer video animation",
      "Social media reels",
      "Logo animation",
      "Voice-over and music",
      "Exports for every platform",
    ],
    work: ["artchilds", "pizza-dine"],
  },
  "ai-motion-pictures": {
    overview: [
      "AI video tools have changed what is possible on a marketing budget. Cinematic visuals that once needed a full film crew can now be created in days.",
      "We combine AI video generation with professional scripting, editing, sound design and brand direction to produce ads, product films and brand stories that look studio-made.",
    ],
    benefits: [
      { title: "Lower production cost", description: "No sets, crews or locations — a fraction of a traditional shoot." },
      { title: "Faster turnaround", description: "Concepts to finished films in days, not weeks." },
      { title: "Unlimited creativity", description: "Show scenes and worlds that would be impossible to film." },
      { title: "Easy variations", description: "Create versions for different audiences and platforms quickly." },
    ],
    deliverables: [
      "Concept and script development",
      "AI visual generation and direction",
      "Professional editing and colour",
      "Voice-over, music and sound design",
      "Brand-safe review process",
      "Cuts for ads, reels and YouTube",
    ],
    work: ["artchilds", "jewelsbox"],
  },
};
