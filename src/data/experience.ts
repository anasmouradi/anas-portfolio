export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string[];
  technologies: string[];
  featured?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "mdm-pfe",
    role: "Stagiaire Ingénieur PFE — Application Mobile Device Management (MDM)",
    company: "Pcard",
    type: "Projet de Fin d'Études",
    period: "Janv. 2026 — Avril 2026",
    description: [
      "Conception et développement d'une solution MDM complète pour l'administration centralisée de centaines d'appareils mobiles (utilisateurs, appareils, politiques de sécurité).",
      "Développement de modules de surveillance temps réel, de reporting et d'administration à distance exposés via des API REST sécurisées.",
      "Pilotage de l'analyse des besoins et de l'architecture logicielle, depuis le cadrage technique jusqu'au déploiement en environnement de production.",
    ],
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST API", "WebSocket"],
    featured: true,
  },
  {
    id: "ocr-intern",
    role: "Stagiaire Développeur OCR",
    company: "Pcard",
    type: "Stage Technique",
    period: "Juin 2025 — Août 2025",
    description: [
      "Développement d'un système de reconnaissance optique de caractères (OCR) automatisant l'extraction de données à partir de documents scannés.",
      "Mise en place d'un pipeline de prétraitement d'images haute précision (débruitage, redressement / deskewing, binarisation) améliorant nettement la qualité d'extraction.",
      "Intégration et optimisation de la bibliothèque Tesseract OCR dans le workflow d'automatisation documentaire.",
    ],
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Node.js", "Image Processing"],
  },
  {
    id: "web-intern",
    role: "Stagiaire Développeur Web",
    company: "Neotrack",
    type: "Stage",
    period: "Juillet 2024 — Septembre 2024",
    description: [
      "Développement d'une plateforme e-commerce complète avec gestion du catalogue produits, panier dynamique et traitement des commandes.",
      "Construction de l'interface utilisateur responsive et des services back-end associés en architecture MVC.",
      "Exécution des tests fonctionnels et optimisation continue des performances et de l'expérience utilisateur (UX).",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "HTML/CSS", "MySQL"],
  },
];
