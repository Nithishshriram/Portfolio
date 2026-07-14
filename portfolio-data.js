// Portfolio Data for Nithish Shriram
// Edit this file to update the portfolio contents. No HTML changes required.

const PORTFOLIO_DATA = {
  personalInfo: {
    name: "NITHISH SHRIRAM",
    role: "MBA Candidate",
    subRole: "Operations & Analytics Specialist",
    summary: "MBA candidate with 1+ year of experience in operations, process optimization, and KPI dashboard development, having reduced manual effort by 30% and improved reporting accuracy by 15% through automation. Seeking an MBA internship in Operations Management, Supply Chain, or Business Process Improvement.",
    avatar: "", // profile picture url
    contact: {
      email: "nithishshriram@gmail.com",
      phone: "+91 9600255804",
      location: "Coimbatore, India",
      linkedin: "https://linkedin.com/in/nithishshriram",
      github: "https://github.com/Nithishshriram", 
      resumeDownloadUrl: "assets/Nithish_Shriram_Resume.pdf" 
    }
  },

  // These KPIs will be rendered as key impact metrics on the homepage
  kpis: [
    {
      value: "30%",
      label: "Effort Reduction",
      description: "Manual operations cut through workflow automation & Excel macros.",
      icon: "fa-rocket"
    },
    {
      value: "15%",
      label: "Accuracy Boost",
      description: "Reporting precision improved via data integrity protocols.",
      icon: "fa-chart-line"
    },
    {
      value: "1+ Year",
      label: "Core Experience",
      description: "Professional experience in operations and data analytics.",
      icon: "fa-briefcase"
    },
    {
      value: "6+",
      label: "Global Courses",
      description: "Specialized certifications in logistics, analytics, and service design.",
      icon: "fa-certificate"
    }
  ],

  about: {
    title: "About Me",
    description: "I am a dynamic business graduate combining technical B.Tech (Information Technology) training with ongoing MBA specializations. My focus lies at the intersection of operational excellence, supply chain optimization, and data-driven decision-making. I specialize in identifying bottlenecks, automating tedious workflows, and converting unstructured data into actionable executive insights.",
    strengths: [
      {
        title: "Process Improvement",
        description: "Experienced in Value Stream Mapping (VSM) and identifying operational bottlenecks."
      },
      {
        title: "Data Analytics & BI",
        description: "Fluent in building dashboards in Power BI and advanced Excel to monitor SLA & KPIs."
      },
      {
        title: "Cross-Functional Collaboration",
        description: "Proven history of working between marketing, tech, and client teams to reduce project turnaround time."
      }
    ]
  },

  skills: [
    {
      category: "Analytics & BI",
      items: [
        { name: "Power BI", level: 90, icon: "fa-chart-bar" },
        { name: "Advanced MS Excel", level: 95, icon: "fa-file-excel", detail: "Macros, Pivot Tables" },
        { name: "SPSS", level: 80, icon: "fa-calculator" },
        { name: "Askia", level: 75, icon: "fa-server" },
        { name: "Market Sight", level: 75, icon: "fa-eye" },
        { name: "Data Storytelling", level: 85, icon: "fa-comment-dots" }
      ]
    },
    {
      category: "Operations & Supply Chain",
      items: [
        { name: "Inventory Tracking", level: 85, icon: "fa-boxes-packing" },
        { name: "Demand Planning", level: 80, icon: "fa-calendar-check" },
        { name: "Forecasting", level: 80, icon: "fa-magnifying-glass-chart" },
        { name: "Vendor Management", level: 85, icon: "fa-handshake" },
        { name: "Logistics & SLA", level: 85, icon: "fa-truck-ramp-box" },
        { name: "ERP (SAP)", level: 75, icon: "fa-network-wired" },
        { name: "Lean Manufacturing & VSM", level: 80, icon: "fa-industry" }
      ]
    },
    {
      category: "Strategy & Soft Skills",
      items: [
        { name: "SWOT & BCG Matrix", level: 85, icon: "fa-shapes" },
        { name: "B2B Marketing", level: 80, icon: "fa-bullseye" },
        { name: "Cross-functional Collaboration", level: 95, icon: "fa-people-group" },
        { name: "Client Management", level: 85, icon: "fa-user-tie" },
        { name: "Problem Solving", level: 90, icon: "fa-lightbulb" },
        { name: "Deadline Management", level: 90, icon: "fa-clock" }
      ]
    }
  ],

  experience: [
    {
      role: "Operations Intern",
      company: "Roots Industries",
      location: "Coimbatore, India",
      period: "May 2026 - Jul 2026",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=120", // Premium building placeholder
      highlights: [
        "Identified operational abnormalities across automation and assembly lines by analyzing time delays, space constraints, and workflow inefficiencies.",
        "Proposed process improvements, including digital dashboards, SOPs, and tablet-based maintenance checklists, to boost efficiency and visibility.",
        "Conducted Value Stream Mapping (VSM) data collection and gained hands-on exposure to SAP, lean manufacturing, and ERP applications."
      ],
      tools: ["Lean Manufacturing", "Value Stream Mapping", "SAP", "ERP", "SOPs", "Process Automation"]
    },
    {
      role: "Associate Data Analyst",
      company: "Merkle (Dentsu Group)",
      location: "Coimbatore, India",
      period: "Feb 2022 - Mar 2023",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=120", // Analytics chart placeholder
      highlights: [
        "Engineered end-to-end workflow automation using Excel macros and the HAP utility, cutting operational effort by over 30% and freeing team capacity for higher-value tasks.",
        "Improved reporting accuracy by 15% and ensured data integrity across business-critical reports.",
        "Built standardized dashboards in Power BI and Excel to monitor operational metrics, enabling real-time visibility into product performance.",
        "Collaborated cross-functionally with marketing, technology, and client teams to streamline data handoff and reduce turnaround time."
      ],
      tools: ["Excel Macros", "HAP Utility", "Power BI", "Workflow Automation", "Reporting", "Cross-functional Collaboration"]
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "PSG Institute of Management",
      location: "Coimbatore, India",
      period: "2025 - Present",
      grade: "Pursuing",
      details: "Focusing on Operations Management, Supply Chain Management, and Business Process Improvement."
    },
    {
      degree: "Bachelor of Technology (B.Tech), Information Technology",
      institution: "Sri Ramakrishna Engineering College",
      location: "Coimbatore, India",
      period: "2018 - 2022",
      grade: "First Class",
      details: "Gained core foundation in data structures, database management systems, programming, and software engineering methodologies."
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Kamaraj Matriculation Higher Secondary School",
      location: "Coimbatore, India",
      period: "2018",
      grade: "State Board",
      details: "Focused on Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Kamaraj Matriculation Higher Secondary School",
      location: "Coimbatore, India",
      period: "2016",
      grade: "State Board",
      details: "General Secondary Education curriculum."
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Integrated Financial Dashboard & Strategic Marketing Plan",
      subtitle: "Bright Castings",
      description: "Conducted an end-to-end organizational analysis of a B2B manufacturer, identifying structural and procedural bottlenecks.",
      objective: "Identify operational gaps in unstructured workflows and design a digital transition roadmap.",
      contribution: "Conducted workflows audit, mapped data dependencies, and designed a phased strategy to transition the firm from manual paper-based logs to digital dashboards with minimal team disruption.",
      technologies: ["B2B Strategy", "Process Mapping", "Digital Transformation", "Operations Analysis"],
      pdfLink: "", // Add link to project report/PDF if available
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      demoLink: "" // Add interactive link if available
    },
    {
      id: "project-2",
      title: "E-Waste & Logistics Dashboard",
      subtitle: "Green Era Recyclers",
      description: "Designed a supply chain monitoring system tracking waste collection, sorting, and processing rates.",
      objective: "Establish real-time visibility across the reverse logistics supply chain.",
      contribution: "Designed and implemented interactive dashboard components tracking material flow across collection points, segregation stages, and recycling outputs.",
      technologies: ["Power BI", "Reverse Supply Chain", "Logistics", "Operations KPI"],
      pdfLink: "",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
      demoLink: ""
    },
    {
      id: "project-3",
      title: "Employee Productivity & Stress Monitoring System",
      subtitle: "Academic Research & ML Implementation",
      description: "Developed a predictive model to identify employee stress levels using non-invasive behavioral KPIs.",
      objective: "Enable HR and leadership teams to optimize productivity and prevent employee burnout proactively.",
      contribution: "Developed the Machine Learning classification model, engineered features using key behavioral indicators, and simulated predictive dashboard views for management teams.",
      technologies: ["Python", "Machine Learning", "Predictive Modeling", "Behavioral KPIs"],
      pdfLink: "",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      demoLink: ""
    }
  ],

  certifications: [
    {
      name: "Vendor Management in Supply Chain",
      issuer: "TCS iON",
      date: "2024",
      credentialId: "TCS-VMSC-88910",
      verifyUrl: "assets/404195_71315_7877138.pdf"
    },
    {
      name: "Microsoft Advertising Certified Professional",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-BAE-2023",
      verifyUrl: "assets/NITHISH SHRIRAM_S S-BAAP_CERT (1).pdf"
    },
    {
      name: "Service Design",
      issuer: "Deakin University, Australia",
      date: "2024",
      credentialId: "DKN-SD-29931",
      verifyUrl: "https://www.deakin.edu.au"
    },
    {
      name: "Advanced Google Analytics",
      issuer: "Google",
      date: "2023",
      credentialId: "GOOG-AGA-9923",
      verifyUrl: "https://analytics.google.com"
    },
    {
      name: "Digital Marketing",
      issuer: "Accenture",
      date: "2023",
      credentialId: "ACN-DM-77821",
      verifyUrl: "assets/digital-skills-digital-marketing_certificate_of_achievement_ronn962.pdf"
    },
    {
      name: "Int'l Business Leadership",
      issuer: "UCSI University, Malaysia",
      date: "2024",
      credentialId: "UCSI-IBL-44512",
      verifyUrl: "https://www.ucsiuniversity.edu.my"
    }
  ],

  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Tamil", level: "Native or bilingual proficiency" }
  ],

  interests: [
    { name: "Product Prototyping", icon: "fa-scissors" },
    { name: "Data Analytics & Visualization", icon: "fa-chart-pie" },
    { name: "Business Process Automation", icon: "fa-robot" },
    { name: "Travel & Exploration", icon: "fa-compass" }
  ]
};
