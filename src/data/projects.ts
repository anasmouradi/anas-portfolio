export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "mobile-device-management",
    number: "01",
    title: "Mobile Device Management",
    category: "Enterprise Platform",
    description:
      "A centralized MDM solution for monitoring, managing and administering mobile devices through a modern web platform.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
      "WebSocket",
      "Firebase",
    ],
    featured: true,
    features: [
      "Centralized device monitoring",
      "Device administration",
      "Monitoring and reporting",
      "Remote administration",
      "REST API integration",
      "Real-time communication",
      "Firebase Cloud Messaging",
    ],
  },

  {
    slug: "ocr-document-processing",
    number: "02",
    title: "OCR Document Processing",
    category: "Document Intelligence",
    description:
      "An OCR solution designed to extract text from images using preprocessing techniques and Tesseract OCR.",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "Tesseract OCR",
    ],
    features: [
      "Image preprocessing",
      "Image denoising",
      "Deskewing",
      "Binarization",
      "OCR text extraction",
      "Tesseract integration",
      "OCR optimization",
    ],
  },

  {
    slug: "ecommerce-platform",
    number: "03",
    title: "E-Commerce Platform",
    category: "Web Application",
    description:
      "A complete e-commerce platform covering product management, shopping cart and order management.",
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    features: [
      "Product management",
      "Shopping cart",
      "Order management",
      "Frontend development",
      "Backend development",
      "Testing",
      "UX improvements",
    ],
  },
];