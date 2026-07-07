/* ============================================================
   PORTFOLIO DATA FILE
   ------------------------------------------------------------
   This is the ONLY file you need to touch to update your
   portfolio content. Add, remove, or edit entries in the
   arrays below — the site re-renders itself automatically.

   Rules of thumb:
   - Keep the { } and [ ] punctuation intact.
   - Wrap every piece of text in "double quotes".
   - Put a comma after every item except the last one in a list.
   - To add a new Project / Certification / Timeline entry,
     copy an existing block (the { ...whole thing... }) and
     paste it above or below, then edit the text.
   ============================================================ */

const PORTFOLIO_DATA = {

  // ---------------------------------------------------------
  // SITE / HERO
  // ---------------------------------------------------------
  site: {
    name: "Nithish Shriram",
    role: "MBA Candidate — Operations, Analytics & Process Improvement",
    tagline: "I turn messy workflows into measurable systems.",
    summary:
      "MBA candidate with 1+ year of experience in operations, process optimization, and KPI dashboard development — reduced manual effort by 30% and improved reporting accuracy by 15% through automation, Lean Manufacturing, and Six Sigma principles. Seeking an MBA internship in Operations Management, Supply Chain, or Business Process Improvement.",
    location: "Coimbatore, India",
    email: "nithishshriram@gmail.com",
    phone: "+91 96002 55804",
    linkedin: "https://linkedin.com/in/nithishshriram",
    github: "https://nithishshriram.github.io/Portfolio/",        
    resumeFile: "assets/Nithish_Shriram_Resume.pdf",
    // Live counters shown in the hero "dashboard" widget — pulled straight from your real results
    heroStats: [
      { value: 30, suffix: "%", label: "manual effort reduced" },
      { value: 15, suffix: "%", label: "reporting accuracy gained" },
      { value: 3,  suffix: "",  label: "end-to-end dashboards shipped" }
    ]
  },

  // ---------------------------------------------------------
  // ABOUT
  // ---------------------------------------------------------
  about: {
    paragraphs: [
      "I'm an MBA candidate at PSG Institute of Management with a background in Information Technology and hands-on experience turning operational chaos into clean, trackable systems. My work sits at the intersection of data analytics and process improvement — I like finding the one bottleneck that's quietly costing a team hours every week, and building the dashboard or SOP that removes it.",
      "At Merkle (Dentsu Group), I automated reporting workflows that cut manual effort by 30% and lifted reporting accuracy by 15%. At Roots Industries, I got hands-on with Lean Manufacturing, Value Stream Mapping, and SAP ERP on real assembly-line data. Across both, the throughline is the same: measure it, question it, simplify it."
    ],
    highlights: [
      { icon: "fa-chart-line", text: "Built KPI dashboards used for real-time operational visibility" },
      { icon: "fa-gears", text: "Automated reporting workflows with Excel macros & Power BI" },
      { icon: "fa-diagram-project", text: "Applied Lean, Six Sigma & VSM on live production lines" }
    ]
  },

  // ---------------------------------------------------------
  // SKILLS  (grouped into cards; level is 0-100 for the bar fill)
  // ---------------------------------------------------------
  skillGroups: [
    {
      title: "Analytics & BI",
      icon: "fa-chart-simple",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Advanced MS Excel (Macros, Pivot Tables)", level: 92 },
        { name: "SPSS", level: 75 },
        { name: "Data Storytelling", level: 85 },
        { name: "SQL (Basic)", level: 60 }
      ]
    },
    {
      title: "Operations & Supply Chain",
      icon: "fa-truck-fast",
      skills: [
        { name: "ERP (SAP)", level: 78 },
        { name: "Lean Manufacturing", level: 85 },
        { name: "Six Sigma (DMAIC)", level: 75 },
        { name: "Value Stream Mapping", level: 82 },
        { name: "KPI Dashboards & SLA Management", level: 88 }
      ]
    },
    {
      title: "Strategy & Soft Skills",
      icon: "fa-people-arrows",
      skills: [
        { name: "SWOT & BCG Matrix", level: 85 },
        { name: "Cross-functional Collaboration", level: 90 },
        { name: "Client Management", level: 80 },
        { name: "Problem Solving", level: 92 },
        { name: "Deadline Management", level: 88 }
      ]
    }
  ],

  // ---------------------------------------------------------
  // EXPERIENCE  (timeline, most recent first)
  // ---------------------------------------------------------
  experience: [
    {
      role: "Operations Intern",
      org: "Roots Industries",
      location: "Coimbatore, India",
      period: "May 2026 – Jul 2026",
      points: [
        "Identified operational abnormalities across automation and assembly lines by analyzing time delays, space constraints, and workflow inefficiencies using Lean & Kaizen principles.",
        "Proposed process improvements — digital KPI dashboards, SOPs, and tablet-based maintenance checklists — to boost efficiency and visibility.",
        "Conducted Value Stream Mapping (VSM) data collection to identify waste and streamline production workflows.",
        "Gained hands-on exposure to SAP ERP, Lean Manufacturing, and Six Sigma tools."
      ]
    },
    {
      role: "Associate Data Analyst",
      org: "Merkle (Dentsu Group)",
      location: "Coimbatore, India",
      period: "Feb 2022 – Mar 2023",
      points: [
        "Engineered end-to-end workflow automation using Excel macros and the HAP utility, cutting operational effort by over 30%.",
        "Improved reporting accuracy by 15% and ensured data integrity across business-critical reports.",
        "Built standardized KPI dashboards in Power BI and Excel for real-time visibility into product performance and SLA compliance.",
        "Collaborated cross-functionally with marketing, technology, and client teams to streamline data handoff and reduce turnaround time."
      ]
    }
  ],

  // ---------------------------------------------------------
  // PROJECTS
  // To add a new project, copy one whole { ... } block below
  // (including the outer braces) and edit its contents.
  // ---------------------------------------------------------
  projects: [
    {
      title: "Integrated Financial Dashboard & Strategic Marketing Plan",
      client: "Bright Castings",
      description:
        "An end-to-end organizational analysis of a B2B manufacturer, uncovering gaps in unstructured operational processes and mapping a path to digital maturity.",
      objective:
        "Diagnose why reporting and marketing decisions were slow, and design a phased plan to modernize both without disrupting live operations.",
      contribution:
        "Led the organizational analysis using SWOT and BCG Matrix frameworks, then authored a phased manual-to-digital transition strategy.",
      tech: ["SWOT Analysis", "BCG Matrix", "Excel", "Financial Modeling"],
      image: "",          // optional: path to a screenshot/graphic in /assets
      pdfLink: ""         // optional: path or URL to a project write-up PDF
    },
    {
      title: "E-Waste & Logistics Dashboard",
      client: "Green Era Recyclers",
      description:
        "An operations dashboard tracking material flow across collection, segregation, and recycling stages for a reverse-supply-chain business.",
      objective:
        "Give operations managers real-time visibility into where e-waste material is at any point in the recycling pipeline.",
      contribution:
        "Designed the dashboard structure and logistics tracking logic to visualize material flow end-to-end.",
      tech: ["Power BI", "Logistics Design", "Reverse Supply Chain"],
      image: "",
      pdfLink: ""
    },
    {
      title: "Employee Productivity & Stress Monitoring System",
      client: "Independent / Academic",
      description:
        "A machine learning model that classifies employee stress levels from behavioral KPIs — no wearables or sensors required.",
      objective:
        "Give HR teams an early-warning signal for burnout risk so they can act before productivity drops.",
      contribution:
        "Built the ML classification model using behavioral KPI data and translated results into HR-friendly outputs.",
      tech: ["Machine Learning", "Predictive Modeling", "HR Analytics"],
      image: "",
      pdfLink: ""
    }
  ],

  // ---------------------------------------------------------
  // CERTIFICATIONS
  // To add a new certificate, copy one { ... } block below
  // and edit it. Leave verifyUrl "" to hide the verify button.
  // ---------------------------------------------------------
  certifications: [
    {
      name: "Vendor Management in Supply Chain",
      issuer: "TCS iON",
      date: "",
      credentialId: "",
      verifyUrl: ""
    },
    {
      name: "Advanced Google Analytics",
      issuer: "Google",
      date: "",
      credentialId: "",
      verifyUrl: ""
    },
    {
      name: "Digital Marketing",
      issuer: "Accenture",
      date: "",
      credentialId: "",
      verifyUrl: ""
    },
    {
      name: "Service Design",
      issuer: "Deakin University, Australia",
      date: "",
      credentialId: "",
      verifyUrl: ""
    },
    {
      name: "International Business Leadership",
      issuer: "UCSI University, Malaysia",
      date: "",
      credentialId: "",
      verifyUrl: ""
    },
    {
      name: "Business Analytics with Excel",
      issuer: "Microsoft",
      date: "",
      credentialId: "",
      verifyUrl: ""
    }
  ],

  // ---------------------------------------------------------
  // EDUCATION (timeline, most recent first)
  // ---------------------------------------------------------
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "PSG Institute of Management, Coimbatore",
      period: "2025 – Present"
    },
    {
      degree: "Bachelor of Technology — Information Technology",
      school: "Sri Ramakrishna Engineering College, Coimbatore",
      period: "2018 – 2022"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      school: "Kamaraj Matriculation Higher Secondary School",
      period: "2018"
    },
    {
      degree: "Secondary School (10th Grade)",
      school: "Kamaraj Matriculation Higher Secondary School",
      period: "2016"
    }
  ],

  // ---------------------------------------------------------
  // ACHIEVEMENTS — add real ones here; these are placeholders
  // ---------------------------------------------------------
  achievements: [
    // Example — edit or delete:
    // { title: "Reduced reporting turnaround by 30%", org: "Merkle (Dentsu Group)" }
  ],

  // ---------------------------------------------------------
  // LANGUAGES — edit levels (Native / Fluent / Intermediate / Basic)
  // ---------------------------------------------------------
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" }
  ],

  // ---------------------------------------------------------
  // INTERESTS — short tags
  // ---------------------------------------------------------
  interests: [
    "Process Design", "Data Storytelling", "Lean Thinking", "Business Strategy"
  ]
};
