const ABOUT_BELLAGENT =
  'Bellagent is an enterprise-level AI agent platform built to automate everyday business operations with zero-touch integrations that connect instantly to more than 1,300 applications. Launched in 2025 by Proactifi Inc., and headquartered in Chicago, the platform is built for practicality with industry-leading compliance and security standards, enabling organizations to deploy AI agents without friction from day one.\n\n' +
  "Bellagent's mission to make powerful, enterprise-level AI practical and accessible is helping businesses of all sizes operate smarter, serve customers better and compete in an AI-driven economy.";

export type JobResponsibilitySection = {
  title?: string;
  items: string[];
};

export type JobRequirementsSection = {
  title: string;
  items: string[];
};

export type Job = {
  id: string;
  title: string;
  department: string;
  locations: string[];
  type: string;
  workMode: string;
  aboutBellagent: string;
  roleOverview: string;
  responsibilities: JobResponsibilitySection[];
  whatSuccessLooksLike?: string[];
  requirements: JobRequirementsSection[];
  compensation?: string;
  additionalInformation?: string;
};

export const JOBS: Job[] = [
  {
    id: '1',
    title: 'Technical Product Manager / Product Owner',
    department: 'Product',
    locations: ['Chicago, Illinois, United States', 'Los Angeles, California, United States', 'Washington, District of Columbia, United States'],
    type: 'Full time',
    workMode: 'Hybrid',
    aboutBellagent: ABOUT_BELLAGENT,
    roleOverview:
      'We are looking for a Technical Product Manager / Product Owner to own the MCP server and integrations platform at Bellagent.ai. This role sits at the center of engineering, design, and business—turning strategy, user feedback, and technical constraints into shipped, high-impact platform capabilities.\n\n' +
      'You will be directly responsible for defining, prioritizing, and executing the roadmap for Bellagent\'s MCP server, integration framework, and modular agent infrastructure.',
    responsibilities: [
      {
        title: 'Platform Ownership (MCP Server & Integrations)',
        items: [
          'Act as Product Owner for the MCP server and integrations team',
          'Own the vision, roadmap, and backlog for MCP services, memory/context layers, and integration infrastructure',
          'Define standards for extensibility, reliability, and security across all integrations',
        ],
      },
      {
        title: 'Product Strategy & Prioritization',
        items: [
          'Prioritize platform initiatives balancing developer experience, system scalability, and business impact',
          'Translate platform strategy into clear, executable epics, user stories, and acceptance criteria',
          'Make informed tradeoffs in a lean, fast-moving startup environment',
        ],
      },
      {
        title: 'Execution & Delivery',
        items: [
          'Lead sprint planning, backlog grooming, and release management for the MCP and integrations roadmap',
          'Drive end-to-end execution—from architecture definition through production rollout',
          'Ensure platform features are production-grade, observable, and maintainable',
        ],
      },
      {
        title: 'Technical Collaboration',
        items: [
          'Partner closely with engineering to design modular, agentic AI systems',
          'Bridge product intent with technical reality, ensuring clarity across teams',
          'Participate deeply in architecture discussions around: MCP server design and lifecycle management; Modular, composable integration frameworks; Agent orchestration and tool execution; Vector databases, embeddings, and retrieval strategies; Memory systems and context protocols; Cloud infrastructure and scalability',
        ],
      },
      {
        title: 'User Feedback & Iteration',
        items: [
          'Gather feedback from internal teams, customers, and developers consuming the MCP and integrations platform',
          'Improve developer experience, documentation, and platform usability',
          'Turn feedback into prioritized platform improvements',
        ],
      },
      {
        title: 'Cross-Functional Leadership',
        items: [
          'Collaborate with product, GTM, and customer teams to align platform capabilities with real-world use cases',
          'Coordinate across a globally distributed engineering team, maintaining velocity and alignment',
        ],
      },
    ],
    whatSuccessLooksLike: [
      'A reliable, extensible MCP server powering Bellagent\'s agent ecosystem',
      'A modular integrations platform that scales across use cases and customers',
      'Clear platform APIs and workflows that engineers and product teams can build on quickly',
      'Tight feedback loops and consistent, high-quality platform releases',
    ],
    requirements: [
      {
        title: 'Background & Experience',
        items: [
          'Computer Science or equivalent technical background',
          'Experience as a Technical Product Manager or Product Owner owning platform or infrastructure product',
          'Startup experience in lean, agile environments with high ownership',
        ],
      },
      {
        title: 'Technical Depth',
        items: [
          'Strong understanding of distributed systems and modern AI infrastructure',
          'Comfortable working directly with engineers on architecture, APIs, and system design',
          'Deep familiarity with: MCP servers and agent runtime platforms; Modular and composable system design; Agentic and multi-agent AI workflows; Vector databases, embeddings, and RAG architectures; Memory layers and context management protocols; Cloud infrastructure (AWS, GCP, or Azure), including deployment, scaling, and observability',
        ],
      },
      {
        title: 'Operating Style',
        items: [
          'Highly execution-oriented with strong product judgment',
          'Comfortable operating in ambiguity and defining structure where none exist',
          'Clear, concise communicator with strong documentation habits',
          'Organized, accountable, and bias toward shipping',
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Head of Engineering / Tech Lead',
    department: 'Engineering',
    locations: ['Chicago, Illinois, United States', 'Los Angeles, California, United States', 'Washington, District of Columbia, United States'],
    type: 'Full time',
    workMode: 'Hybrid',
    aboutBellagent: ABOUT_BELLAGENT,
    roleOverview:
      'We are looking for a Tech Lead / Head of Engineering to own the technical direction of Bellagent.ai. This is a hands-on, backend-focused leadership role for someone who has scaled real systems, understands long-term architectural tradeoffs, and is excited to grow into an engineering leader while continuing to build.\n\n' +
      'You will be responsible for system design, architecture decisions, execution quality, and technical standards while actively coding and mentoring a globally distributed engineering team.',
    responsibilities: [
      {
        title: 'Architecture & System Design',
        items: [
          'Own long-term technical architecture and system design decisions',
          'Lead the evolution of the platform from monolithic foundations to modular, service-oriented and microservice architectures',
          'Design scalable, maintainable systems that balance velocity with reliability',
        ],
      },
      {
        title: 'Backend & Platform Engineering',
        items: [
          'Lead backend development across AI infrastructure, integrations, and core platform services',
          'Ensure systems are observable, secure, and production-grade',
          'Design and implement systems supporting: Modular, agentic AI workflows; MCP servers and context memory protocols (bonus); Vector databases and retrieval pipelines; LLM orchestration, tool calling, and agent execution',
        ],
      },
      {
        title: 'AI & Agentic Systems',
        items: [
          'Build and scale LLM-based systems and agentic architectures',
          'Collaborate closely on memory, context management, and retrieval strategies',
          'Hands-on experience with: Pinecone (or equivalent vector databases); LangChain and LangGraph; Modular AI pipelines and orchestration frameworks',
        ],
      },
      {
        title: 'Execution and Engineering Operations',
        items: [
          'Set engineering standards, best practices, and code quality expectations',
          'Make pragmatic operational tradeoffs for web and SaaS applications',
          'Partner closely with Product (TPM/Product Owner) to translate roadmap into shipped systems',
          'Lead sprint execution, reviews, and technical planning',
        ],
      },
      {
        title: 'Leadership & Team Growth',
        items: [
          'Mentor engineers and help scale a high-performing, globally distributed team',
          'Lead by example through hands-on contribution and clear technical direction',
          'Grow into the Head of Engineering role as the company scales, owning hiring, structure, and technical culture',
        ],
      },
    ],
    requirements: [
      {
        title: 'Background & Experience',
        items: [
          'Computer Science degree (Required)',
          '7+ years of professional engineering experience',
          'Experience scaling systems from monoliths to modular or microservice architectures',
          'Proven ability to make and defend long-term architecture decisions',
        ],
      },
      {
        title: 'Technical Depth',
        items: [
          'Strong backend focus with full-stack awareness',
          'Deep understanding of: System design and distributed systems; Object-oriented design principles and clean architecture; Web and SaaS operational tradeoffs (latency, reliability, scaling cost)',
          'Hands-on experience with: Python; LLM-based engineering and AI systems; Vector databases (Pinecone or similar); LangChain, LangGraph, or comparable frameworks',
          'Bonus: MCP Engineering (Claude or similar ecosystems); Familiarity with deep neural networks and ML fundamentals; Familiarity with Next.js and React for full-stack collaboration',
        ],
      },
      {
        title: 'Operating Style',
        items: [
          'Builder-first mindset with strong ownership and accountability',
          'Comfortable operating in ambiguity and early-stage environments',
          'Strong written and verbal communication skills',
          'Bias towards pragmatic solutions that ship and scale',
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Senior Account Executive',
    department: 'Sales',
    locations: ['Chicago, Illinois, United States'],
    type: 'Full time',
    workMode: 'Hybrid',
    aboutBellagent: ABOUT_BELLAGENT,
    roleOverview:
      'We are looking for a Senior Account Executive to focus on closing new business as we continue to scale. This role is designed for an experienced seller who wants to spend most of their time running deals, engaging customers, and consistently hitting quota.\n\n' +
      "You'll step into an active sales motion, work live opportunities, and own deals end-to-end. You'll collaborate closely with product and marketing, but your primary responsibility will be driving revenue.",
    responsibilities: [
      {
        items: [
          'Own and close new business opportunities from first conversation through contract',
          'Sell Bellagent across multiple use cases, including demand qualification, customer support, intake, routing, and operational automation',
          'Run discovery and demos with sales, support, operations, and executive stakeholders',
          'Convert inbound demand and generate new pipeline through targeted outbound efforts',
          'Manage longer and more complex sales cycles across mid-market and enterprise accounts',
          'Maintain strong pipeline hygiene, forecasting accuracy, and deal execution',
          'Partner with internal teams to ensure smooth handoff and successful deal close',
        ],
      },
    ],
    requirements: [
      {
        title: 'Requirements',
        items: [
          'At least 5 years of closing experience in SaaS or technical sales',
          'A consistent track record of hitting or exceeding quota',
          'Experience managing full-cycle sales processes with multiple stakeholders',
          'Comfort selling platform-based solutions with multiple use cases',
          'Strong discovery, negotiation, and closing skills',
          'Comfortable operating in a fast-paced, high-growth environment',
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Sales Director',
    department: 'Sales',
    locations: ['Chicago, Illinois, United States', 'Washington, District of Columbia, United States'],
    type: 'Full time',
    workMode: 'Hybrid',
    aboutBellagent: ABOUT_BELLAGENT,
    roleOverview:
      "We're hiring a Sales Director (Player-Coach) who is an elite individual contributor today and a future sales leader tomorrow. This role is ideal for someone who has led a sales team before—or is currently a team lead—and wants to step into a position with real ownership, influence, and a clear path to full leadership.\n\n" +
      "This role will carry an individual quota while also taking on leadership responsibilities, with the opportunity to shape Bellagent's sales process from the ground up and work directly alongside the CEO & Founder on revenue strategy.",
    responsibilities: [
      {
        items: [
          'Own and close new business opportunities across a mix of deal sizes, from mid-market through enterprise',
          'Run discovery and demos with multiple stakeholders, including operators and executives',
          'Close inbound opportunities and consistently create new pipeline through outbound work',
          'Build deal strategy for more complex buying processes and longer sales cycles',
          'Work closely with product and marketing to tighten messaging and improve how we sell',
          'Keep pipeline, forecasting, and deal execution clean as volume increases',
          'Help ramp and support new sales hires as the team grows',
        ],
      },
    ],
    requirements: [
      {
        title: 'Requirements',
        items: [
          'At least 5 years of closing experience in SaaS or technical sales',
          'A consistent track record of hitting or exceeding quota in real, production sales environments',
          'Experience selling into longer, more complex deal cycles',
          'Prior experience serving as a sales team lead, with responsibility for guiding other reps.',
          'Someone who understands how to motivate and grow a team',
          'Strong communication skills and comfort selling to senior stakeholders',
          'Comfortable working in a fast-moving environment where things evolve quickly',
          'Bonus if you have had experience formally working at an AI company',
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Regional Device Deployment Associate',
    department: 'Operations',
    locations: ['Various Global Locations'],
    type: 'Contract',
    workMode: 'Remote',
    aboutBellagent: ABOUT_BELLAGENT,
    roleOverview:
      "We are looking for reliable, responsive, and communicative contractors in multiple global locations to support Bellagent's regional device deployment and environment validation efforts.\n\n" +
      "In this role, you will receive a company-provided laptop, complete a guided setup process, and help our team confirm that device connectivity, access, and security controls are working properly in your location. This is a task-based contract role with clear instructions and defined deliverables. Professional IT experience is not required, but you should be comfortable using a computer, following setup steps carefully, and communicating clearly throughout the process.",
    responsibilities: [
      {
        items: [
          'Receive and securely handle a company-provided laptop at your assigned location',
          'Complete a guided device setup process provided by the Bellagent team',
          'Connect the device to your local network environment and follow required configuration steps',
          'Perform basic checks to confirm connectivity, access, and system readiness',
          'Share clear updates on setup progress, results, and any issues encountered',
          'Follow device handling, security, and return or retention instructions as provided',
          'Remain available for reasonable follow-up communication related to the setup',
        ],
      },
    ],
    whatSuccessLooksLike: [
      'The device is received and set up successfully',
      'Required setup steps are completed accurately and on time',
      'Connectivity and access checks are completed and documented clearly',
      'Questions or issues are communicated quickly and professionally',
      'The device is handled securely and in accordance with instructions',
    ],
    requirements: [
      {
        title: 'Requirements',
        items: [
          'Based in a location where device delivery can be supported',
          'Fluent in English, with strong written and verbal communication',
          'Comfortable with basic computer use, Wi-Fi setup, and following written instructions',
          'Able to work independently and complete a straightforward technical process',
          'Reliable, detail-oriented, and responsive',
          'Prior IT or engineering experience is not required, though basic technical familiarity is helpful',
        ],
      },
    ],
    compensation:
      '$200 to $300 per completed setup, depending on location and scope\n\n' +
      'Compensation may vary based on shipping, timing, and deployment requirements',
    additionalInformation:
      'This is a contract-based, task-specific role rather than a full-time position.\n\n' +
      'Selected candidates will receive clear written instructions, expected deliverables, and a point of contact from the Bellagent team. We aim to keep the process straightforward, professional, and well-documented from start to finish.',
  },
];

export function getJobById(id: string): Job | undefined {
  return JOBS.find((j) => j.id === id);
}
