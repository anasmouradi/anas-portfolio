export interface ProjectCaseStudy {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  overview: string[];
  technologies: string[];
  featured?: boolean;
  features: string[];
  metrics: { label: string; value: string }[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
  };
  githubUrl?: string;
  role: string;
  timeline: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "mobile-device-management",
    number: "01",
    title: "Mobile Device Management (MDM)",
    category: "Enterprise Platform",
    role: "Lead Full-Stack Engineer (PFE)",
    timeline: "Janv. 2026 — Avril 2026",
    description:
      "A centralized MDM platform designed for real-time monitoring, security policy enforcement, and remote fleet administration.",
    overview: [
      "Engineered as a Graduation Project (PFE) at Pcard, this enterprise-grade MDM solution addresses the challenge of securely managing diverse mobile device fleets across remote workforces.",
      "The system establishes a persistent WebSocket and REST communication channel between mobile agents and an administrative dashboard, enabling instant policy distribution, real-time geofencing, remote lock/wipe, and battery/network diagnostics.",
      "Built with high reliability in mind, the backend services handle batch telemetry processing, automated security alerts, and comprehensive audit trails.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST API",
      "WebSocket",
      "Firebase Cloud Messaging",
      "Docker",
    ],
    featured: true,
    features: [
      "Centralized device fleet monitoring & telemetry",
      "Remote lock, wipe, and passcode reset commands",
      "Automated compliance policies & security audits",
      "Real-time WebSocket event notifications",
      "Firebase Cloud Messaging (FCM) push integration",
      "RESTful API endpoints with JWT authentication",
      "Comprehensive telemetry reports & export tools",
    ],
    metrics: [
      { label: "Managed Devices", value: "500+" },
      { label: "Command Latency", value: "< 250ms" },
      { label: "Uptime Target", value: "99.9%" },
      { label: "REST Endpoints", value: "35+" },
    ],
    architecture: {
      frontend: "React.js with responsive data tables, live telemetry graphs and interactive device controls.",
      backend: "Java Spring Boot microservices, Spring Security with JWT, WebSocket stomp messaging.",
      database: "MySQL with optimized relational schemas for device logs, policy mappings and audit trails.",
      devops: "Dockerized container deployment with health-check monitoring and CI/CD pipelines.",
    },
    githubUrl: "https://github.com/anasmouradi/anas-portfolio",
  },

  {
    slug: "ocr-document-processing",
    number: "02",
    title: "OCR Document Processing Pipeline",
    category: "Document Intelligence",
    role: "OCR Software Developer Intern",
    timeline: "Juin 2025 — Août 2025",
    description:
      "An automated optical character recognition pipeline combining advanced computer vision preprocessing with Tesseract OCR.",
    overview: [
      "Developed at Pcard, this OCR pipeline automates the ingestion and digitization of structured and unstructured physical documents, eliminating manual transcription overhead.",
      "The core innovation lies in the multi-stage image preprocessing pipeline: scanned documents undergo automated deskewing, noise filtering, adaptive thresholding (binarization), and perspective correction before text extraction.",
      "Integrated into a Node.js microservice architecture, allowing batch PDF and image uploads with instantaneous text parsing and confidence scoring.",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Tesseract OCR",
      "Node.js",
      "Express",
      "React",
      "Docker",
    ],
    features: [
      "Multi-stage image preprocessing (OpenCV)",
      "Automated deskewing and perspective normalization",
      "Adaptive binarization & noise removal filters",
      "High-accuracy Tesseract OCR engine integration",
      "Batch PDF and image parsing microservice",
      "Extracted text export (JSON, CSV, searchable PDF)",
      "Real-time extraction confidence metrics",
    ],
    metrics: [
      { label: "Accuracy Gain", value: "+38%" },
      { label: "Processing Speed", value: "1.2s / page" },
      { label: "Manual Effort Cut", value: "85%" },
      { label: "File Formats", value: "PNG/JPG/PDF" },
    ],
    architecture: {
      frontend: "React dashboard with drag-and-drop document uploader and side-by-side extracted text editor.",
      backend: "Node.js/Express API wrapper orchestrating a Python/OpenCV computer vision processing worker.",
      database: "Document metadata persistence with file storage links and OCR cache indices.",
      devops: "Containerized with pre-compiled Tesseract libraries and OCR language training data.",
    },
    githubUrl: "https://github.com/anasmouradi/anas-portfolio",
  },

  {
    slug: "ecommerce-platform",
    number: "03",
    title: "Modern E-Commerce Platform",
    category: "Web Application",
    role: "Full-Stack Web Developer Intern",
    timeline: "Juillet 2024 — Sept. 2024",
    description:
      "A complete e-commerce solution covering catalog management, dynamic shopping cart, checkout and administrative workflows.",
    overview: [
      "Built at Neotrack, this full-stack e-commerce application delivers a fast, intuitive shopping experience for customers alongside a powerful administration panel for inventory and sales tracking.",
      "The platform features dynamic product filtering, real-time stock verification, session-based shopping cart management, and multi-step order processing.",
      "Emphasis was placed on web performance, mobile-first responsiveness, and clean MVC architectural separation between presentation logic and relational database persistence.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MySQL",
      "Bootstrap",
    ],
    features: [
      "Dynamic catalog browsing & multi-criteria filtering",
      "Real-time shopping cart with session persistence",
      "Multi-step checkout with order validation",
      "Comprehensive administration dashboard for merchants",
      "Automated inventory tracking & stock alert triggers",
      "Role-based access control (Customers, Admins)",
      "Responsive mobile-first user interface",
    ],
    metrics: [
      { label: "Page Load Time", value: "< 1.5s" },
      { label: "Checkout Steps", value: "3 streamlined" },
      { label: "Test Coverage", value: "90% core flows" },
      { label: "Responsive", value: "100% Mobile" },
    ],
    architecture: {
      frontend: "Modern HTML5/CSS3 interface enhanced with JavaScript for asynchronous cart updates.",
      backend: "PHP Laravel framework utilizing Eloquent ORM, secure CSRF protection and MVC routing.",
      database: "Normalized MySQL relational database with foreign key constraints and transaction safety.",
      devops: "Apache/Nginx web server configuration with optimized asset caching and SSL security.",
    },
    githubUrl: "https://github.com/anasmouradi/anas-portfolio",
  },
];
