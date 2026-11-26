/**
 * ============================================================================
 * PERSONAL ACADEMIC WEBSITE CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================================
 * Edit this file to update your bio, research interests, experience, projects,
 * publications, education, skills, awards, CV path, photo, or social links.
 * No HTML or CSS changes are required for routine content updates.
 * ============================================================================
 */

window.ACADEMIC_PROFILE = {
  // --------------------------------------------------------------------------
  // 1. BASIC IDENTITY & META
  // --------------------------------------------------------------------------
  name: "Joy Das",
  initials: "JD",
  title: "Prospective PhD Applicant · Multimodal AI, NLP & Trustworthy ML",
  affiliation: "B.Sc. in Computer Science & Engineering, CUET",
  location: "Dhaka, Bangladesh",
  status: "Seeking MS/PhD Opportunities",

  /**
   * Profile photograph:
   * Drop your portrait image into `assets/images/profile.jpg` and set:
   *   photo: "assets/images/profile.jpg"
   * Leave as "" to display a clean academic monogram placeholder instead.
   */
  photo: "",
  photoAlt: "Portrait of Joy Das",

  /**
   * Curriculum Vitae (PDF):
   * Replace `assets/cv/Joy_Das_CV.pdf` with a newer PDF using the same filename,
   * OR update `path` below to a new filename or external URL.
   */
  cv: {
    path: "assets/cv/Joy_Das_CV.pdf",
    filename: "Joy_Das_CV.pdf",
    lastUpdated: "2026",
    note: "Includes full academic history, research details, publications, technical skills, and coursework."
  },

  // --------------------------------------------------------------------------
  // 2. CONTACT & ACADEMIC PROFILE LINKS
  // Leave any optional link as "" to hide it automatically.
  // --------------------------------------------------------------------------
  links: {
    //email: "joydas2004114@gmail.com",
    github: "https://github.com/Joy2004114",
    linkedin: "https://www.linkedin.com/in/joy-das-744ba1317",// Example: "https://scholar.google.com/citations?user=YOUR_ID"
    orcid: ""          // Example: "https://orcid.org/0000-0000-0000-0000"
  },

  // --------------------------------------------------------------------------
  // 3. HERO / ABOUT INTRODUCTION
  // Keep concise, natural, and research-focused (2–3 short paragraphs).
  // --------------------------------------------------------------------------
  introParagraphs: [
    "I recently completed my B.Sc. in Computer Science and Engineering at Chittagong University of Engineering & Technology (CUET), Bangladesh, where I worked as an Undergraduate Research Fellow in the CUET NLP Lab under the supervision of Prof. Dr. M. Moshiul Hoque.",
    "My research interests lie in multimodal AI, particularly computer vision and NLP. I am interested in exploring their applications across different domains, including healthcare. I am also interested in trustworthy AI and developing reliable and secure machine learning systems.",
    "I am currently applying for Fall 2027 PhD programs in Computer Science and Artificial Intelligence, with particular interest in multimodal representation learning, adversarial robustness, and reliable ML systems."
  ],

  focusTags: [
  "Multimodal AI",
  "Computer Vision",
  "Natural Language Processing",
  "Trustworthy AI"
  ],

// --------------------------------------------------------------------------
  // 4. UNDERGRADUATE THESIS
  // --------------------------------------------------------------------------
  thesis: {
    title: "Transformer-Based Multimodal Framework for Detecting Hate Speech on Social Media",
    institution: "CUET NLP Lab, Chittagong University of Engineering & Technology (CUET)",
    institutionUrl: "https://cuet.ac.bd/",
    supervisor: "Prof. Dr. M. Moshiul Hoque",
    supervisorUrl: "https://aclanthology.org/people/mohammed-moshiul-hoque/",
    grade: "Thesis Grade: 4.00 / 4.00",
    duration: "2025 – 2026",
    summary:
      "Investigated multimodal hate speech detection on Bengali social media, where harmful intent often spans spoken audio, video frames, and text simultaneously.",
    highlights: [
      "Developed BanglaMMH, a Bengali multimodal hate speech dataset containing 2,001 aligned text, audio, and video samples.",
      "Designed a transformer-based trimodal framework integrating BanglaBERT, Whisper, and ViViT using cross-attention and learnable modality weighting.",
      "Evaluated unimodal, bimodal, and trimodal configurations across fusion strategies, with the best trimodal model achieving a macro F1-score of 0.88."
    ],
    technologies: ["BanglaBERT", "Whisper", "ViViT", "Cross-Attention", "Multimodal Fusion", "Python"],
    links: [] // Optional: add { label: "GitHub Repository", url: "..." } or paper/slides link later
  },
  // --------------------------------------------------------------------------
  // 5. RESEARCH EXPERIENCE
  // --------------------------------------------------------------------------
 researchExperience: [
    {
      role: "Undergraduate Research Fellow",
      organization: "CUET NLP Lab, Chittagong University of Engineering & Technology (CUET)",
      organizationUrl: "https://cuet.ac.bd/",
      supervisor: "Prof. Dr. M. Moshiul Hoque",
      supervisorUrl: "https://aclanthology.org/people/mohammed-moshiul-hoque/",
      duration: "Feb 2025 – Present",
      points: [
        "Conducted research on multimodal hate speech detection for Bangla social media across text, audio, and video.",
        "Led dataset collection and preprocessing, experimental design, transformer-based multimodal modeling, and systematic evaluation.",
        "Co-authored a shared-task paper on Arabic multimodal hateful meme detection, published in the proceedings of ArabicNLP 2025 (co-located with EMNLP 2025)."
      ]
    }
  ],
  // --------------------------------------------------------------------------
  // 5B. INDUSTRY & SECURITY EXPERIENCE (Compact subsection)
  // --------------------------------------------------------------------------
  industryExperience: [
    {
      role: "Quality Assurance Intern",
      organization: "Sheba Platform Limited",
      organizationUrl: "https://sheba-platform.xyz/",
      duration: "Oct 2025 – Nov 2025",
      summary:
        "Executed structured test cases and prepared QA reports in Jira within an Agile/Scrum workflow. Identified a password-reset security flaw allowing previous-password reuse and contributed to enforcing password validation on a production platform serving 50,000+ users."
    },
    {
      role: "Junior Penetration Tester (Intern)",
      organization: "Fred Intelligence Limited",
      organizationUrl: "https://fredbd.com/",
      duration: "Aug 2025 – Sep 2025",
      summary:
        "Assisted in web application vulnerability assessments and penetration testing using Nmap, Burp Suite, and OWASP ZAP, identifying security configuration issues including missing HSTS headers."
    }
  ],

  // --------------------------------------------------------------------------
  // 6. RESEARCH PROJECTS & TECHNICAL CONTRIBUTIONS
  // Set `featured: true` and `highlightLabel` to subtly spotlight recent work.
  // --------------------------------------------------------------------------
  projects: [
    {
      title: "Lung Cancer Prediction",
      highlightLabel: "Healthcare AI · Machine Learning",
      goal: "Predict lung cancer risk from survey-based patient features",
      modelLabel: "Model",
      models: "Logistic Regression",
      results: "Achieved 97% accuracy and 0.97 macro F1-score",
      whatIDid: [
        "Data cleaning and categorical feature encoding",
        "Exploratory data and correlation analysis",
        "Feature engineering and feature selection",
        "Class imbalance handling using ADASYN",
        "Model training and performance evaluation"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      links: []
    },
    {
      title: "SKODA Used Car Price Prediction",
      highlightLabel: "Data Analytics · Machine Learning",
      goal: "Predict the resale price of used SKODA cars using vehicle characteristics",
      modelLabel: "Model",
      models: "Linear Regression",
      results: "Evaluated prediction performance using MAE, MSE, RMSE, and R²",
      whatIDid: [
        "Data cleaning and exploratory data analysis",
        "Categorical feature encoding and preprocessing",
        "Price trend and feature relationship visualization",
        "Regression model training and evaluation",
        "Actual vs. predicted price analysis"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      links: []
    },
    {
      title: "Telecom Customer Churn Prediction",
      highlightLabel: "Business Analytics · Machine Learning",
      goal: "Predict whether a telecom customer is likely to churn",
      modelLabel: "Model",
      models: "Decision Tree Classifier",
      results: "Achieved 91.9% accuracy and 0.85 ROC-AUC after hyperparameter tuning",
      whatIDid: [
        "Data cleaning and categorical feature encoding",
        "Feature scaling and feature selection",
        "Decision Tree model training and evaluation",
        "Hyperparameter tuning using GridSearchCV and cross-validation",
        "ROC curve and confusion matrix analysis"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Joy2004114/Telecom_Customer_Churn" }
      ]
    },
    {
      title: "Network Intrusion Detection",
      highlightLabel: "Cybersecurity · Machine Learning · XAI",
      goal: "Detect malicious network traffic using SHAP-based XAI to distinguish attacks from benign activity and explain model predictions.",
      modelLabel: "Models",
      models: "Random Forest, XGBoost, SVM, ANN, GRU, DNN",
      results: "Best reported F1-score of 0.9963 with Random Forest",
      whatIDid: [
        "Data preprocessing and feature scaling",
        "Class imbalance handling using SMOTE",
        "ML and deep learning model training",
        "Performance comparison using classification metrics",
        "SHAP-based feature importance analysis to interpret model predictions"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Joy2004114/Network-Intrusion-Detection" }
      ]
    },
    {
      title: "Home Inventory Management System",
      highlightLabel: "Full-Stack Web Development · MERN Stack · Web Security",
      goal: "Develop a secure web-based system for managing household inventory and tracking items efficiently.",
      modelLabel: "System",
      models: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      results: "Built a complete inventory management application with secure authentication, user verification, password reset, search, filtering, notifications, and reporting.",
      whatIDid: [
        "Led the project team and coordinated development tasks using Jira",
        "Developed item management, search, filtering, notification, and reporting features",
        "Implemented secure authentication, user verification, and password-reset functionality",
        "Designed and integrated frontend, backend, and database components",
        "Followed SDLC principles throughout development and testing"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Jira"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Joy2004114/Home-Inventory-Management-System" }
      ]
    },
    {
      title: "Stadium and Ticket Management System",
      highlightLabel: "Full-Stack Web Development · MERN Stack",
      goal: "Develop a web-based platform for stadium event management and online ticket booking.",
      modelLabel: "System",
      models: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      results: "Built an event and ticket booking system with user authentication, real-time seat tracking, secure payment integration, and an admin dashboard.",
      whatIDid: [
        "Developed event management and ticket booking functionalities",
        "Implemented user authentication and real-time seat availability tracking",
        "Integrated secure online payment functionality",
        "Built an admin panel for event management and basic analytics",
        "Developed and integrated frontend, backend, and database components"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      links: []
    }
  ],

 // --------------------------------------------------------------------------
  // 7. PUBLICATIONS
  // If empty ([]), the Publications section and navbar link are hidden automatically.
  // --------------------------------------------------------------------------
  publications: [
    {
      title: "joy_2004114 at MAHED Shared Task: Filtering Hate Speech from Memes using A Multimodal Fusion-based Approach",
      authors: ["Joy Das", "Alamgir Hossain", "Mohammed Moshiul Hoque"],
      highlightAuthor: "Joy Das",
      venue: "Proceedings of The Third Arabic Natural Language Processing Conference: Shared Tasks (ArabicNLP 2025), co-located with EMNLP 2025, Suzhou, China",
      publisher: "Association for Computational Linguistics (ACL)",
      pages: "pp. 683–691",
      date: "Nov 2025",
      year: "2025",
      note: "Ranked 6th out of 42 participating teams (Macro F1: 0.63) · DOI: 10.18653/v1/2025.arabicnlp-sharedtasks.94",
      links: [
        { label: "ACL Anthology", url: "https://aclanthology.org/2025.arabicnlp-sharedtasks.94/" },
        { label: "PDF", url: "https://aclanthology.org/2025.arabicnlp-sharedtasks.94.pdf" },
        { label: "DOI", url: "https://doi.org/10.18653/v1/2025.arabicnlp-sharedtasks.94" }
      ],
      bibtex: `@inproceedings{das-etal-2025-joy,
    title = "joy{\\_}2004114 at {MAHED} Shared Task : Filtering Hate Speech from Memes using A Multimodal Fusion-based Approach",
    author = "Das, Joy  and
      Hossain, Alamgir  and
      Moshiul Hoque, Mohammed",
    editor = "Darwish, Kareem  and
      Ali, Ahmed  and
      Abu Farha, Ibrahim  and
      Touileb, Samia  and
      Zitouni, Imed  and
      Abdelali, Ahmed  and
      Al-Ghamdi, Sharefah  and
      Alkhereyf, Sakhar  and
      Zaghouani, Wajdi  and
      Khalifa, Salam  and
      AlKhamissi, Badr  and
      Almatham, Rawan  and
      Hamed, Injy  and
      Alyafeai, Zaid  and
      Alowisheq, Areeb  and
      Inoue, Go  and
      Mrini, Khalil  and
      Alshammari, Waad",
    booktitle = "Proceedings of The Third {A}rabic Natural Language Processing Conference: Shared Tasks",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.arabicnlp-sharedtasks.94/",
    doi = "10.18653/v1/2025.arabicnlp-sharedtasks.94",
    pages = "683--691",
    ISBN = "979-8-89176-356-2"
}`
    },
    {
      title: "OncoReGen: A Reinforcement-Guided GPT Pipeline for Precision Oncology and EGFR Inhibitor Discovery",
      authors: [
        "Istahak Ahammed",
        "Abid Hossain",
        "Snaholata Mondal",
        "Md. Al-Mamun Provath",
        "Musfequa Rahman",
        "Rifa Nawal",
        "Joy Das"
      ],
      highlightAuthor: "Joy Das",
      venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      publisher: "IEEE",
      pages: "pp. 1016–1021",
      date: "Dec 2025",
      year: "2025",
      note: "DOI: 10.1109/ICCIT68739.2025.11491169",
      links: [
        { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/11491169" },
        { label: "DOI", url: "https://doi.org/10.1109/ICCIT68739.2025.11491169" }
      ],
      bibtex: `@INPROCEEDINGS{11491169,
  author={Ahammed, Istahak and Hossain, Abid and Mondal, Snaholata and Provath, Md. Al-Mamun and Rahman, Musfequa and Nawal, Rifa and Das, Joy},
  booktitle={2025 28th International Conference on Computer and Information Technology (ICCIT)},
  title={OncoReGen: A Reinforcement-Guided GPT Pipeline for Precision Oncology and EGFR Inhibitor Discovery},
  year={2025},
  volume={},
  number={},
  pages={1016-1021},
  keywords={Protocols;HTTP;Artificial intelligence;Deep learning;Generative Pre-trained transformer;Machine learning;Reinforcement learning;Predictive models;Convolutional neural networks;Large language models;Reinforcement learning;EGFR;PPO;SMILES;Molecular generation;Drug Discovery},
  doi={10.1109/ICCIT68739.2025.11491169}
}`
    }
  ],
  // --------------------------------------------------------------------------
  // 8. EDUCATION
  // --------------------------------------------------------------------------
 education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Chittagong University of Engineering & Technology (CUET)",
      institutionUrl: "https://cuet.ac.bd/",
      department: "Department of Computer Science and Engineering",
      duration: "2022 – 2026",
      location: "Chattogram, Bangladesh",
      details: [
        "CGPA: 3.54 / 4.00 · Average GPA (Last 4 Semesters): 3.75 / 4.00",
        "Undergraduate Thesis: Transformer-Based Multimodal Framework for Detecting Hate Speech on Social Media (Grade: 4.00 / 4.00, Supervisor: Prof. Dr. M. Moshiul Hoque)"
      ],
      courses: [
        "Machine Learning",
        "Artificial Intelligence",
        "Theory of Computing",
        "Applied Statistics and Queuing Theory",
        "Data Structures",
        "Algorithms",
        "Structured Programming",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Digital Systems Design",
        "Digital Logic Design",
        "Computer Graphics",
        "Compiler Design",
        "Information Security",
        "System Analysis and Design",
        "Computer Networks",
        "Computer Architecture",
        "Computer Peripherals and Interfacing",
        "Microprocessors and Assembly Language Programming",
        "Operating Systems",
        "Data Communication",
        "Fourier Analysis and Laplace Transformation",
        "Numerical Analysis",
        "Discrete Mathematics"
      ]
    }
  ],
  // --------------------------------------------------------------------------
  // 9. TECHNICAL SKILLS (No proficiency bars or arbitrary percentages)
  // --------------------------------------------------------------------------
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "JavaScript", "Bash Scripting"]
    },
    {
      category: "Machine Learning & Deep Learning",
      items: [
        "TensorFlow",
        "scikit-learn",
        "Transformer-Based Models",
        "Multimodal Learning",
        "Model Evaluation",
        "Hyperparameter Tuning"
      ]
    },
    {
      category: "Cybersecurity & Security Testing",
      items: [
        "Web Application Penetration Testing",
        "Vulnerability Assessment",
        "Burp Suite",
        "Metasploit",
        "OWASP ZAP",
        "Wireshark",
        "Nmap"
      ]
    },
    {
      category: "Systems, DevOps & Web Development",
      items: ["Linux", "Git", "Docker", "CI/CD", "MERN Stack (MongoDB, Express.js, React.js, Node.js)", "Jira"]
    }
  ],

  // --------------------------------------------------------------------------
  // 10. AWARDS, CERTIFICATIONS & ACADEMIC SERVICE
  // Any empty sub-array is automatically omitted.
  // --------------------------------------------------------------------------
  achievements: {
    awards: [
      {
        title: "Top 10 Finalist — Environmental Case Competition",
        organization: "ASME EFx",
        url: ""
      },
      {
        title: "Top 100 National Finalist (Top <2%) — Green Energy Olympiad (GEO2025)",
        organization: "CLEAN",
        url: "https://www.cleanbd.org/"
      }
    ],
    certifications: [
      {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI & Stanford (Coursera)",
        topics: "Supervised, Unsupervised & Reinforcement Learning, ML Algorithms, Deep Learning",
        url: "https://www.coursera.org/account/accomplishments/specialization/SWX6WKR0ZD0F"
      },
      {
        title: "IBM Cybersecurity Analyst Professional Certificate",
        issuer: "IBM (Coursera)",
        topics: "Threat Hunting, IAM, Threat Intelligence, Incident Response, Digital Forensics, Penetration Testing",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/SNV6P0WXC4X9"
      },
       {
        title: "Applied Cryptography",
        issuer: "Coursera",
        topics: "Symmetric & Asymmetric Cryptography, RSA, ECC, Key Management, Hash Functions, MACs, Digital Signatures",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2O5WLBLWIYQ1"
      },
      {
        title: "Jr Penetration Tester",
        issuer: "TryHackMe",
        topics: "Web Security, Burp Suite, Network Security, Vulnerability Research, Metasploit, Privilege Escalation",
        url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-HW4B65JRZX.pdf"
      }
    ],
    service: [
      "Ambassador, ICRCS-2025",
      "General Secretary, Greater Mymensingh Association (GMA)",
      "General Secretary, BNMPC Cycling Club",
      "Organizing Secretary, House of Language and Literature"
    ]
  },

  // --------------------------------------------------------------------------
  // 11. FOOTER
  // --------------------------------------------------------------------------
  footerNote: "Academic Research Webpage · Built for clarity and reproducibility."
};
