export const profile = {
  name: "Kundurthi Abhiram",
  title: "AI & Data Science Undergraduate",
  tagline:
    "Building things that turn raw signals — footsteps, text, data — into useful output.",
  location: "Faridabad (NCR), India",
  email: "abhi8904876457@gmail.com",
  phone: "+91 7795747952",
  github: "https://github.com/Abhiram-k1",
  linkedin: "https://www.linkedin.com/in/kundurthi-abhiram-287b57291/",
  cgpa: "8.3",
  summary:
    "Aspiring AI & Data Science professional with hands-on experience across machine learning, data analytics, and IoT systems. AI Club President recognized for an award-winning hardware project and a top-2000 competitive programming rank, with certifications from Goldman Sachs, Google, IBM, NVIDIA, Oracle, and Vanderbilt University.",
};

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    school: "Amrita Vishwa Vidyapeetham, Faridabad (NCR Campus)",
    period: "2024 – 2028 (Expected)",
    detail: "CGPA: 8.3 · NIRF 2025 Rank #17",
    highlights: [
      "President, AI Club (ASOAI)",
      "Best Hardware Project Awardee",
      "Courses: Data Structures & Algorithms, Machine Learning, Computational Mechanics, Data Analytics",
    ],
  },
  {
    degree: "Intermediate (11th–12th)",
    school: "Narayana Junior College, India",
    period: "Apr 2021 – Mar 2023",
    detail: "",
    highlights: ["Sports Committee Head", "Prime Event Organizer"],
  },
  {
    degree: "High School (Grades 4–10)",
    school: "Sri Chaitanya Techno School, Bangalore",
    period: "May 2015 – Feb 2021",
    detail: "",
    highlights: [
      "Vikings House Captain — led house to overall championship",
      "KSCA Cricket Player · IGKO Gold Medalist",
      "School Cabinet Member (2 years) · Science Fair Winner · Lead Guitarist, AB World",
    ],
  },
];

export const experience = [
  {
    role: "AI Club President",
    org: "Amrita Vishwa Vidyapeetham (ASOAI)",
    period: "Jan 2025 – Present",
    points: [
      "Lead tech events, speaker sessions, hackathons, and AI-based student initiatives.",
      "Collaborate with the Cultural Club on interdisciplinary innovation programs.",
    ],
  },
  {
    role: "Google Student Ambassador",
    org: "Google",
    period: "Aug 2025 – Feb 2026",
    points: [
      "Promoted Google Cloud and AI tools among students; organized workshops and campus outreach.",
    ],
  },
  {
    role: "AI & ML Intern",
    org: "Elevate Labs",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Built and evaluated ML models as part of AI/ML internship tasks; worked on data preprocessing pipelines.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Cognifyz Technologies",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Built restaurant rating prediction, recommendation, cuisine classification, and geographical analysis models.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Elevvo Pathways",
    period: "Aug 2025",
    points: [
      "Completed ML internship tasks focused on predictive analytics and model evaluation.",
    ],
  },
  {
    role: "Risk Analyst — Virtual Experience",
    org: "Goldman Sachs (Forage)",
    period: "Jun 2025",
    points: [
      "Performed credit risk assessments, investment evaluations, and risk mitigation strategy development using Excel.",
    ],
  },
  {
    role: "Data Analyst — Virtual Experience",
    org: "Quantium (Forage)",
    period: "Jun 2025",
    points: [
      "Conducted customer segmentation, uplift modeling, and strategy development using Python and R.",
    ],
  },
  {
    role: "Campus Ambassador — ISP 49",
    org: "Internshala",
    period: "Mar 2025 – Jul 2025",
    points: [
      "Acted as liaison between Internshala and the university; promoted internships and drove campus engagement.",
    ],
  },
  {
    role: "Project Lead — Footstep Power Generation",
    org: "Amrita Vishwa Vidyapeetham",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Built an IoT-based piezoelectric power harvesting system with Arduino, Raspberry Pi, and ThingSpeak cloud integration; awarded Best Hardware Project.",
    ],
  },
];

export const projects = [
  {
    title: "AKA Key Compromise Predictor ML Framework",
    award: "98.4% ROC-AUC (XGBoost & SHAP)",
    period: "Jul 2025 – Aug 2025",
    stack: ["Python", "FastAPI", "XGBoost", "Streamlit", "Explainable AI"],
    description:
      "Designed a machine learning framework predicting session-key compromise in cryptographic exchanges (DH, TLS, SSH) before channel establishment. Features real-time predictions via WebSockets, Isotonic Regression calibration, and a Streamlit dashboard showing SHAP explainability waterfall plots.",
    signature: true,
    link: "https://zero-trust-ai-wstdo5muzny9jxtfeqvdyu.streamlit.app/",
  },
  {
    title: "PlaceNext — Placement Portal",
    award: "Full-Stack Enterprise App",
    period: "Jan 2025 – Apr 2025",
    stack: ["Node.js", "Express", "PostgreSQL", "Socket.IO", "JWT"],
    description:
      "A multi-tenant placement management system connecting students, company HRs, and institutional TPOs. Supports real-time hiring pipeline updates via WebSockets, secure JWT auth, robust relational schemas, and an interactive statistics dashboard.",
    signature: true,
  },
  {
    title: "Piezoelectric Footstep Power Generator",
    award: "Awarded — Best Hardware Project",
    period: "Nov 2024 – Jun 2025",
    stack: ["Arduino", "Raspberry Pi", "ThingSpeak", "IoT"],
    description:
      "Converts footstep mechanical energy into electricity using piezoelectric sensors, with real-time monitoring through cloud integration. Received Best Hardware Project award at Amrita Vishwa Vidyapeetham.",
    signature: true,
  },
  {
    title: "Secure Cryptography Communication Simulator",
    award: "Asymmetric & Symmetric Crypto",
    period: "May 2025",
    stack: ["Python", "Streamlit", "Cryptography", "RSA", "ECC"],
    description:
      "Interactive communication simulator implementing end-to-end encryption. Simulates Diffie-Hellman key exchange, Elliptic Curve Cryptography (ECC) signatures, RSA encryption, and SHA hashing for message integrity validation.",
    link: "https://secure-message-communication-using-public-key-cryptography-cqk.streamlit.app/",
  },
  {
    title: "Loan Approval Prediction Model",
    award: "~98% accuracy (Random Forest)",
    period: "May 2025 – Jun 2025",
    stack: ["Python", "Scikit-learn", "Streamlit", "PCA"],
    description:
      "Applied six ML algorithms — Logistic Regression, Decision Tree, Random Forest, KNN, Naive Bayes, SVM — for loan approval prediction. Added KMeans clustering with PCA for unsupervised applicant segmentation, deployed as real-time predictions via Streamlit.",
    link: "https://loan-approval-app-tcag8yuchhvvmuc5yayjwn.streamlit.app/",
  },
  {
    title: "Fraud Detection System",
    award: "Deployed via Streamlit",
    period: "2025",
    stack: ["Python", "Machine Learning", "Streamlit"],
    description:
      "A machine learning based fraud detection system identifying suspicious transactions with high accuracy.",
    link: "https://fraud-detection-system-y65zpmvqwyq23psebhhhqc.streamlit.app/",
  },
  {
    title: "Election Process Education (Elect-IQ)",
    award: "Interactive Education",
    period: "2025",
    stack: ["Python", "Streamlit"],
    description:
      "An interactive educational platform designed to educate users about the election process, voting rights, and democratic principles.",
    link: "https://election-process-education-d3ra8jrcon92cmxh8lzwtg.streamlit.app/#elect-iq",
  },
  {
    title: "Fake News Prediction Model",
    award: "Deployed via Flask",
    period: "Aug 2025 – Sep 2025",
    stack: ["Python", "NLP", "Scikit-learn", "Flask"],
    description:
      "A fake news classifier built with TF-IDF features and Logistic Regression and Random Forest models, evaluated on accuracy, precision, recall, and F1-score, and deployed for real-time news verification.",
  },
  {
    title: "Clinical Data Cleaning & Visualization",
    award: "Interactive Healthcare EDA",
    period: "Nov 2024 – Dec 2024",
    stack: ["Python", "Pandas", "Seaborn", "Sweetviz"],
    description:
      "Automated preprocessing pipeline that generates statistical summaries and interactive visualizations for healthcare datasets.",
  },
  {
    title: "AI Club Website — UI/UX Design",
    award: "",
    period: "2025",
    stack: ["Figma", "Flutter (planned)"],
    description:
      "Mobile-first and desktop-responsive layouts designed to showcase AI Club activities, events, and member projects.",
  },
];

export const academicProjects = [
  "Library Management System — Java, OOP",
  "Credit Risk Score Prediction System — ML + MIS analytics",
  "Fracture Toughness Prediction using Physics-Informed Deep Learning — Material Informatics",
];

export const skills = {
  Languages: ["Python", "R", "Java", "C", "C++", "HTML"],
  "Libraries & Frameworks": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Sweetviz",
    "Streamlit",
    "Flask",
    "OpenCV",
    "TensorFlow",
  ],
  "Platforms & Tools": [
    "Google Cloud",
    "Vertex AI",
    "ThingSpeak",
    "Git",
    "GitHub",
    "Jupyter",
    "VS Code",
    "PyCharm",
    "Excel",
    "Figma",
    "Arduino IDE",
    "Linux",
  ],
  Concepts: [
    "Supervised & Unsupervised ML",
    "Deep Learning",
    "NLP",
    "Explainable AI",
    "Data Cleaning",
    "Uplift Modeling",
    "Cryptography",
    "IoT",
    "Cloud Computing",
  ],
};

export const certifications = [
  { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", org: "Oracle", date: "Sep 2025" },
  { name: "Goldman Sachs Risk Job Simulation", org: "Goldman Sachs / Forage", date: "Jun 2025" },
  { name: "Quantium Data Analytics Job Simulation", org: "Quantium / Forage", date: "Jun 2025" },
  { name: "AI Agents and Agentic AI with Python & Generative AI", org: "Vanderbilt University (Coursera)", date: "Jun 2025" },
  { name: "Fine Tune Gemma with LoRA", org: "LetsUpgrade", date: "Aug 2025" },
  { name: "N8N Crash Course – Automate Your Life with AI", org: "LetsUpgrade", date: "Aug 2025" },
  { name: "Build Real World AI Applications with Gemini and Imagen", org: "Google", date: "Jul 2025" },
  { name: "Prompt Design in Vertex AI", org: "Google", date: "Jul 2025" },
  { name: "Getting Started with AI on Jetson Nano", org: "NVIDIA", date: "Feb 2025" },
  { name: "Data Visualization with Python", org: "IBM / Cognitive Class", date: "Feb 2025" },
  { name: "Prompt Engineering for Everyone", org: "IBM / Cognitive Class", date: "Feb 2025" },
  { name: "Ansible Essentials", org: "NVIDIA", date: "Feb 2025" },
  { name: "Introduction to LLMs", org: "Google Cloud Skills Boost", date: "Jan 2025" },
  { name: "Microsoft Office Specialist: Excel 2016", org: "Infosys Springboard", date: "Jan 2025" },
  { name: "Java (Basic) & Python (Basic)", org: "HackerRank", date: "Jan 2025" },
  { name: "C Language", org: "CAT Computer Point", date: "Jul 2024" },
];

export const awards = [
  { name: "Best Hardware Project — Footstep Power Generation", org: "Amrita Vishwa Vidyapeetham", date: "2025" },
  { name: "SUPERHACK 2025 Participant", org: "Hack2Skill x SuperOps", date: "Feb 2026" },
  { name: "Gen AI Exchange Hackathon Participant", org: "Google Cloud", date: "Jan 2026" },
  { name: "IBM Maitreyee 2025 Participant", org: "IBM", date: "Sep 2025" },
  { name: "Felicity'25 Hackathon Participant", org: "IIIT Hyderabad", date: "Aug 2025" },
  { name: "Agentic AI Day Participant", org: "Google Cloud x Hack2Skill", date: "Sep 2025" },
  { name: "OpenAI x NxtWave GenAI Buildathon Participant", org: "OpenAI x NxtWave", date: "Sep 2025" },
  { name: "Top 2000 Rank (1610) — IICPC CodeFest'25 Prelims", org: "IICPC", date: "Mar 2025" },
  { name: "IGKO Gold Medalist (Level 2)", org: "SOF", date: "2020" },
];

export const languages = [
  { name: "Kannada", level: "Native" },
  { name: "Telugu", level: "Native" },
  { name: "English", level: "Full Professional" },
  { name: "Hindi", level: "Full Professional" },
  { name: "German", level: "Limited Working" },
  { name: "Tamil", level: "Limited Working" },
];
