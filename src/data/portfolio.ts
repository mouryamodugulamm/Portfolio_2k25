export type ContactLink = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ExperienceHighlight = {
  title: string
  points: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  highlights: ExperienceHighlight[]
  project: string
  techStack: string[]
  roleFocus: string
}

export type Education = {
  school: string
  degree: string
  period: string
  details?: string
}

export const profile = {
  name: 'Mourya Vamsi Modugula',
  title: 'Full Stack Developer',
  location: 'Hyderabad, India',
  phone: '+91 73370 48355',
  email: 'mouryamodugulamm@gmail.com',
  summary:
    'Experienced full-stack engineer with 4+ years delivering enterprise-ready web platforms using React, Next.js, Node.js, GraphQL, and TypeScript. Skilled at building resilient, data-rich interfaces, optimizing performance, and partnering with cross-functional teams to ship secure, scalable solutions.',
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:mouryamodugulamm@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+917337048355',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mouryamodugulamm/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mouryamodugulamm',
  },
]

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'TypeScript', 'Material UI', 'Elastic UI', 'Chart.js'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'NestJS', 'GraphQL', 'REST', 'Apollo Federation', 'Subscriptions', 'Kafka'],
  },
  {
    title: 'Data & Cloud',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'AWS (IAM, Lambda)', 'ElasticSearch', 'Redis'],
  },
  {
    title: 'Practices',
    items: ['Microservices', 'Performance Optimization', 'Security & RBAC', 'CI/CD', 'Agile & Scrum'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Eficens Systems',
    role: 'Full Stack Developer',
    period: 'Dec 2022 – Present',
    project: 'Snoops Security Intelligence Platform',
    roleFocus: 'Lead full-stack engineer driving secure, real-time monitoring experiences for enterprise SOC teams.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Elastic UI', 'Apollo Client', 'NestJS', 'GraphQL', 'PostgreSQL'],
    description:
      'Lead full-stack development for Snoops, a real-time security and threat monitoring platform used by enterprise security teams.',
    highlights: [
      {
        title: 'Frontend Engineering',
        points: [
          'Built immersive dashboards with React, Next.js, and Elastic UI delivering live threat insights and actionable intelligence.',
          'Integrated GraphQL APIs with Apollo Client for efficient data fetching, caching, and real-time state management.',
          'Delivered responsive data visualizations with Chart.js and Elastic Charts, helping security analysts track anomalies.',
          'Created reusable UI systems and themeable component library to scale across internal products.',
        ],
      },
      {
        title: 'Backend & Platform',
        points: [
          'Developed GraphQL APIs in NestJS with Apollo Federation to support distributed microservices and role-based access control.',
          'Implemented WebSockets and GraphQL subscriptions for live threat notifications and continuous monitoring.',
          'Optimized Postgres and MongoDB queries to reduce response times for alert analytics dashboards.',
        ],
      },
      {
        title: 'Collaboration & Delivery',
        points: [
          'Partnered with security analysts to translate monitoring workflows into product features and automation.',
          'Led performance reviews, SSR optimizations, and caching strategies that improved perceived load times by 25%.',
          'Worked closely with DevOps to streamline deployments, incident response, and cross-team visibility.',
        ],
      },
    ],
  },
  {
    company: 'Atmecs Technologies',
    role: 'Front End Developer',
    period: 'May 2021 – Dec 2022',
    project: 'Airbnb Escalations & ACERTUS Logistics Hub',
    roleFocus: 'Front-end owner troubleshooting production escalations and launching analytics dashboards for logistics operations.',
    techStack: ['React', 'TypeScript', 'Elastic UI', 'Chart.js', 'REST', 'GraphQL', 'Kibana'],
    description:
      'Built customer-facing experiences for Air BnB and logistics platforms, focusing on resilient UI, performance, and developer workflows.',
    highlights: [
      {
        title: 'UI Engineering',
        points: [
          'Resolved high-priority escalations by debugging JavaScript, TypeScript, and CSS issues using observability tooling.',
          'Analyzed API integrations, browser crashes, and layout regressions to maintain uptime and stability.',
          'Worked across API teams to escalate and resolve issues beyond the front-end boundary.',
        ],
      },
      {
        title: 'Platform Buildout',
        points: [
          'Developed modular React components using Elastic UI for the ACERTUS automotive logistics platform.',
          'Integrated real-time dashboards with Chart.js and Elastic UI to track vehicle logistics and KPIs.',
          'Established testing documentation and SOPs to govern release quality and production readiness.',
        ],
      },
      {
        title: 'Outcomes',
        points: [
          'Improved front-end issue resolution time by 30% via RCA documentation and faster debugging.',
          'Enhanced page performance by reducing load time through code splitting and lazy loading.',
          'Streamlined release testing and validation across sprint cycles, ensuring error-free production launches.',
        ],
      },
    ],
  },
  {
    company: 'Predifast Technologies',
    role: 'Front End Developer',
    period: 'Feb 2019 – Apr 2021',
    project: 'Apple Bee School Management Suite',
    roleFocus: 'Front-end specialist crafting responsive admin/parent portals and integrations for academic workflows.',
    techStack: ['React', 'TypeScript', 'Material UI', 'MySQL', 'REST', 'GraphQL'],
    description:
      'Delivered modern web applications for Apple Bee, a comprehensive school management solution supporting administrators, teachers, and parents.',
    highlights: [
      {
        title: 'Product Development',
        points: [
          'Built responsive user interfaces with React, TypeScript, and Material UI across admin, teacher, and parent portals.',
          'Implemented reusable component systems to maintain design consistency and accelerate new module delivery.',
          'Enabled real-time student attendance and timetable updates through efficient API calls and optimistic UI patterns.',
        ],
      },
      {
        title: 'Data & Integrations',
        points: [
          'Integrated MySQL-based databases to support large-scale school records and reporting workflows.',
          'Optimized API performance for schedule generation, fee management, and academic performance tracking.',
          'Added secure authentication and authorization to protect sensitive student and teacher data.',
        ],
      },
      {
        title: 'Team Enablement',
        points: [
          'Collaborated with school stakeholders to define product roadmaps and streamline operations.',
          'Mentored junior developers on code quality, UI best practices, and agile delivery.',
          'Participated in sprint rituals to prioritize features, triage bugs, and enable rapid releases.',
        ],
      },
    ],
  },
]

export const education: Education[] = [
  {
    school: 'North East Frontier University (NEFTU)',
    degree: 'BSc Computer Science',
    period: '2016 – 2019',
    details: '8.43 CGPA',
  },
  {
    school: 'Sri Chaitanya Junior College',
    degree: 'MPC',
    period: '2014 – 2016',
    details: 'Intermediate | 75.6%',
  },
  {
    school: 'Hindu High School',
    degree: 'SSC',
    period: '2013 – 2014',
    details: 'State Board AP | 8.4 GPA',
  },
]

export const achievements: string[] = [
  'Reduced front-end incident resolution time by 30% via faster debugging, RCA documentation, and better tooling.',
  'Enhanced page performance by cutting load time through code splitting, lazy loading, and caching strategies.',
  'Streamlined release testing, reducing regression bugs and enabling faster deployment cycles.',
  'Improved customer satisfaction by ensuring error-free UI performance in production environments.',
]


