const PROFILE = {
  name: "Muskan Suman",
  initials: "MS",
  title: "AI/ML Engineer",
  subtitle: "Computer Vision · LLM Systems · MLOps",
  tagline:
    "AI/ML Engineer who ships — from training custom neural networks to deploying scalable inference systems on AWS. I build production-grade ADAS pipelines and LLM-powered assistants, owning the full stack from model to metal.",
  email: "muskan.suman2907@gmail.com",
  phone: "+91 6265905745",
  location: "Gurugram, Haryana, India",
  github: "https://github.com/Muskansuman",
  linkedin: "https://www.linkedin.com/in/muskansuman29",
  resumeUrl: "./assets/Muskansuman.pdf",
  available: true,
};

const ROLES = [
  "Computer Vision Systems",
  "LLM & RAG Pipelines",
  "Production MLOps",
  "Edge AI & ADAS",
];

const STATS = [
  { value: "1+", label: "Years Production ML" },
  { value: "7+", label: "AI Systems Built" },
  { value: "86.7%", label: "DBDNet Accuracy" },
  { value: "IIT", label: "M.Tech Jodhpur" },
];

const ABOUT = [
  "I specialize in taking machine learning from research to reliable production — designing models, then deploying them as low-latency services on the cloud and at the edge, where failure isn't an option.",
  "Built production-grade ADAS pipelines processing real-time safety events for commercial fleets, and LLM-powered assistants using RAG, multi-agent architecture, and vector search.",
  "M.Tech from IIT Jodhpur — equally comfortable with the math behind a model and the infrastructure that serves it.",
];

const HIGHLIGHTS = [
  { label: "Education", value: "M.Tech — Robotics & Mobility Systems, IIT Jodhpur" },
  { label: "Current Role", value: "AI/ML Engineer at Novus Hi-Tech, Gurugram" },
  { label: "Specialization", value: "ADAS, Driver Monitoring, RAG & LLM Systems" },
  { label: "Location", value: "Gurugram, Haryana, India" },
];

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "AI / Machine Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "YOLOv8", "Transformers", "ONNX"],
  },
  {
    category: "GenAI & LLMs",
    items: ["RAG Pipelines", "Prompt Engineering", "VLMs", "VLLM", "pgvector", "NLP", "Embedding Models"],
  },
  {
    category: "Data",
    items: ["NumPy", "Pandas", "Feature Engineering", "Data Augmentation", "Synthetic Data"],
  },
  {
    category: "MLOps & Backend",
    items: ["FastAPI", "Docker", "MLflow", "Git", "CI/CD"],
  },
  {
    category: "AWS Cloud",
    items: ["Bedrock", "SageMaker", "EC2", "S3", "Lambda", "DynamoDB", "Aurora PostgreSQL", "ECR"],
  },
];

const PROJECTS = [
  {
    category: "Fleet AI / RAG",
    title: "Fleet-GPT — AI-Driven Fleet Management Assistant",
    description:
      "Production RAG system using LLMs, AWS Bedrock, and pgvector on Aurora PostgreSQL for real-time querying of structured and unstructured fleet data. Scalable backend with workflow orchestration, dynamic tool calling, semantic retrieval, and multi-agent integration.",
    metrics: ["Real-time RAG", "Multi-agent tools", "Low-latency inference"],
    stack: ["AWS Bedrock", "pgvector", "Aurora PostgreSQL", "FastAPI"],
    github: null,
  },
  {
    category: "ADAS / Computer Vision",
    title: "Driver-Monitoring False-Alert Reduction Pipeline",
    description:
      "Production-scale ADAS pipeline using YOLOv11, YOLOv11-Pose, OpenCV, FastAPI, AWS Lambda, DynamoDB, and EC2 to re-validate safety events (phone use, drowsiness, smoking, FCW, lane departure). Multi-stage inference with object detection, pose estimation, geometric reasoning, and temporal filtering.",
    metrics: ["Object detection + pose", "Temporal filtering", "Async queue service"],
    stack: ["YOLOv11", "YOLOv11-Pose", "FastAPI", "AWS Lambda"],
    github: null,
  },
  {
    category: "Deep Learning",
    title: "Drowsy Disambiguator — DBDNet",
    description:
      "Designed and trained DBDNet, a lightweight 1D-CNN with Multi-Head Self-Attention (~13K parameters) for real-time drowsiness detection. End-to-end pipeline with BlazeFace, TFLite eye-state classification, blink analytics, FastAPI, Docker, and AWS ECR.",
    metrics: ["86.7% accuracy", "0.90 F1 · 0.99 ROC-AUC", "Retention 33% → 100%"],
    stack: ["PyTorch", "Self-Attention", "TFLite", "AWS ECR"],
    github: null,
  },
  {
    category: "Computer Vision",
    title: "Synthetic Data Generation & Domain Adaptation",
    description:
      "Synthetic data generation and augmentation pipeline using diffusion-based image synthesis and prompt engineering. Representation-space and semantic-domain analysis with CLIP embeddings, PCA visualization, and TF-IDF to study synthetic-to-real distribution shifts.",
    metrics: ["Diffusion synthesis", "CLIP + PCA analysis", "Domain adaptation"],
    stack: ["Diffusion Models", "CLIP", "PCA", "TF-IDF"],
    github: null,
  },
  {
    category: "LLM / Applied ML",
    title: "AutoValuator AI — Car Price Prediction Assistant",
    description:
      "End-to-end conversational vehicle valuation platform integrating a Random Forest regression model with Llama-3.3-70B (Groq) for natural-language feature extraction and explainable predictions. Production FastAPI microservice with JWT auth, rate limiting, and Prometheus/Grafana monitoring.",
    metrics: ["Llama-3.3-70B", "Redis-backed memory", "Prometheus/Grafana"],
    stack: ["Random Forest", "Groq", "FastAPI", "Streamlit"],
    github: "https://github.com/Muskansuman/AutoValuator-AI-LLM-Powered-Car-Price-Prediction-Assistant",
    demo: "https://car-price-predictor-bot.streamlit.app/",
  },
  {
    category: "Computer Vision",
    title: "Terrain Traversability Segmentation",
    description:
      "Semantic and instance segmentation pipelines for autonomous driving scenes using UNet, YOLOv8, and Detectron2 on a custom dataset of 1,000+ annotated images. Implemented UNet from scratch with IoU loss and advanced augmentation.",
    metrics: ["mAP@50 of 0.91", "UNet from scratch", "1,000+ images"],
    stack: ["UNet", "YOLOv8", "Detectron2", "OpenCV"],
    github: "https://github.com/Muskansuman/Road_segmentation_for_autonomous_vehicles",
  },
  {
    category: "Physics-ML",
    title: "Hybrid Physics-ML Wind Farm Layout Optimization",
    description:
      "Hybrid optimization framework integrating a physics-based Jensen wake model with an XGBoost surrogate model (R²=0.90) to accelerate wind farm layout evaluation and AEP prediction. Applied SLSQP, L-BFGS-B, and multistart optimization.",
    metrics: ["XGBoost R²=0.90", "+20.45% AEP", "Constrained optimization"],
    stack: ["XGBoost", "SLSQP", "Jensen Model", "Python"],
    github: "https://github.com/Muskansuman/Hybrid-Physics-ML-Wind-Farm-Layout-Optimization",
  },
];

const EXPERIENCE = [
  {
    period: "Jul 2024 — Present",
    role: "AI / ML Engineer",
    org: "Novus Hi-Tech",
    location: "Gurugram, Haryana",
    points: [
      "Built Fleet-GPT — a production RAG system using LLMs, AWS Bedrock, and pgvector on Aurora PostgreSQL for real-time fleet data querying with multi-agent orchestration.",
      "Engineered a production-scale ADAS driver-monitoring pipeline (YOLOv11, YOLOv11-Pose, FastAPI, AWS Lambda) to re-validate safety events and suppress false-positive alerts.",
      "Designed and trained DBDNet for drowsiness detection — 86.7% accuracy, improving heavy-drowsy retention from 33% to 100% over the rule-based baseline.",
      "Developed a synthetic data generation pipeline using diffusion-based image synthesis and CLIP/PCA-based domain-shift analysis.",
    ],
  },
  {
    period: "Jul 2023 — May 2025",
    role: "M.Tech — Robotics & Mobility Systems",
    org: "Indian Institute of Technology (IIT) Jodhpur",
    location: "CGPA 7.89 / 10",
    points: [
      "Thesis: Vibration Estimation in Autonomous Vehicles Using IMU Data.",
      "Applied EMD, VMD, and Hilbert Transform for vibration-frequency analysis using IMU sensor data.",
      "Developed parametric models for road-induced vibration estimation supporting suspension calibration and sensor-fusion systems.",
    ],
  },
  {
    period: "Jul 2018 — May 2022",
    role: "B.Tech — Aeronautical Engineering",
    org: "Nitte Meenakshi Institute of Technology",
    location: "Bangalore · CGPA 8.55 / 10",
    points: [
      "Built strong foundations in control systems, aerodynamics, and applied engineering mathematics.",
    ],
  },
];
