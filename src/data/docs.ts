export type DocTopic = {
    slug: string;
    title: string;
    content?: string;
};

export type DocModule = {
    title: string;
    items: DocTopic[];
};

export type DocTier = {
    title: string;
    modules: DocModule[];
};

export const docsData: DocTier[] = [
    {
        title: "Foundation Tier: Core Concepts & Introduction",
        modules: [
            {
                title: "Module 1: Introduction to BIM",
                items: [
                    { slug: "1.1-what-is-bim", title: "1.1 What is Building Information Modeling?", content: "# What is Building Information Modeling?\n\nContent coming soon..." },
                    { slug: "1.2-history-evolution", title: "1.2 History and Evolution of BIM", content: "# History and Evolution of BIM\n\nContent coming soon..." },
                    { slug: "1.3-bim-vs-cad", title: "1.3 BIM vs CAD: Understanding the Difference", content: "# BIM vs CAD\n\nContent coming soon..." },
                    { slug: "1.4-benefits-bim", title: "1.4 Benefits of BIM in Construction", content: "# Benefits of BIM\n\nContent coming soon..." },
                    { slug: "1.5-bim-adoption", title: "1.5 BIM Adoption Worldwide", content: "# BIM Adoption Worldwide\n\nContent coming soon..." },
                    { slug: "1.6-industry-drivers", title: "1.6 Industry Drivers for BIM Implementation", content: "# Industry Drivers\n\nContent coming soon..." },
                    { slug: "1.7-terminology", title: "1.7 Common BIM Terminology and Glossary", content: "# Common BIM Terminology\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 2: BIM Fundamentals",
                items: [
                    { slug: "2.1-core-principles", title: "2.1 Core Principles of BIM", content: "# Core Principles of BIM\n\nContent coming soon..." },
                    { slug: "2.2-bim-workflow", title: "2.2 BIM Workflow Overview", content: "# BIM Workflow Overview\n\nContent coming soon..." },
                    { slug: "2.3-info-management", title: "2.3 Information Management in BIM", content: "# Information Management\n\nContent coming soon..." },
                    { slug: "2.4-cde", title: "2.4 Common Data Environment (CDE)", content: "# Common Data Environment (CDE)\n\nContent coming soon..." },
                    { slug: "2.5-bim-lifecycle", title: "2.5 The Role of BIM in Project Lifecycle", content: "# BIM in Project Lifecycle\n\nContent coming soon..." },
                    { slug: "2.6-collaborative-bim", title: "2.6 Collaborative BIM vs Traditional Methods", content: "# Collaborative BIM vs Traditional Methods\n\nContent coming soon..." },
                    { slug: "2.7-bim-use-cases", title: "2.7 BIM Use Cases Across Industries", content: "# BIM Use Cases\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 3: Understanding BIM Dimensions",
                items: [
                    { slug: "3.1-intro-dimensions", title: "3.1 Introduction to BIM Dimensions", content: "# Introduction to BIM Dimensions\n\nContent coming soon..." },
                    { slug: "3.2-2d-bim", title: "3.2 2D BIM: Traditional Drawings", content: "# 2D BIM\n\nContent coming soon..." },
                    { slug: "3.3-3d-bim", title: "3.3 3D BIM: Geometric Modeling", content: "# 3D BIM\n\nContent coming soon..." },
                    { slug: "3.4-4d-bim", title: "3.4 4D BIM: Time and Scheduling", content: "# 4D BIM\n\nContent coming soon..." },
                    { slug: "3.5-5d-bim", title: "3.5 5D BIM: Cost Estimation and Budgeting", content: "# 5D BIM\n\nContent coming soon..." },
                    { slug: "3.6-6d-bim", title: "3.6 6D BIM: Sustainability and Energy Analysis", content: "# 6D BIM\n\nContent coming soon..." },
                    { slug: "3.7-7d-bim", title: "3.7 7D BIM: Facility Management and Operations", content: "# 7D BIM\n\nContent coming soon..." },
                    { slug: "3.8-8d-bim", title: "3.8 8D BIM: Safety and Risk Management", content: "# 8D BIM\n\nContent coming soon..." },
                    { slug: "3.9-9d-bim", title: "3.9 9D BIM: Lean Construction", content: "# 9D BIM\n\nContent coming soon..." },
                    { slug: "3.10-10d-bim", title: "3.10 10D BIM: Industrialized Construction", content: "# 10D BIM\n\nContent coming soon..." },
                ]
            }
        ]
    },
    {
        title: "Beginner Tier: Getting Started with BIM",
        modules: [
            {
                title: "Module 4: BIM Levels of Development (LOD)",
                items: [
                    { slug: "4.1-intro-lod", title: "4.1 Introduction to LOD", content: "# Introduction to LOD\n\nContent coming soon..." },
                    { slug: "4.2-lod-vs-detail", title: "4.2 LOD vs Level of Detail", content: "# LOD vs Level of Detail\n\nContent coming soon..." },
                    { slug: "4.3-lod-100", title: "4.3 LOD 100: Conceptual Design", content: "# LOD 100\n\nContent coming soon..." },
                    { slug: "4.4-lod-200", title: "4.4 LOD 200: Schematic Design", content: "# LOD 200\n\nContent coming soon..." },
                    { slug: "4.5-lod-300", title: "4.5 LOD 300: Detailed Design", content: "# LOD 300\n\nContent coming soon..." },
                    { slug: "4.6-lod-350", title: "4.6 LOD 350: Construction Documentation", content: "# LOD 350\n\nContent coming soon..." },
                    { slug: "4.7-lod-400", title: "4.7 LOD 400: Fabrication and Assembly", content: "# LOD 400\n\nContent coming soon..." },
                    { slug: "4.8-lod-500", title: "4.8 LOD 500: As-Built and Facility Management", content: "# LOD 500\n\nContent coming soon..." },
                    { slug: "4.9-choosing-lod", title: "4.9 Choosing Appropriate LOD for Projects", content: "# Choosing LOD\n\nContent coming soon..." },
                    { slug: "4.10-lod-deliverables", title: "4.10 LOD in Project Deliverables and Contracts", content: "# LOD in Contracts\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 5: BIM Software Introduction",
                items: [
                    { slug: "5.1-software-overview", title: "5.1 Overview of BIM Software Landscape", content: "# BIM Software Landscape\n\nContent coming soon..." },
                    { slug: "5.2-revit", title: "5.2 Autodesk Revit: Architecture, Structure, MEP", content: "# Autodesk Revit\n\nContent coming soon..." },
                    { slug: "5.3-archicad", title: "5.3 Graphisoft ArchiCAD", content: "# ArchiCAD\n\nContent coming soon..." },
                    { slug: "5.4-navisworks", title: "5.4 Autodesk Navisworks: Review and Coordination", content: "# Navisworks\n\nContent coming soon..." },
                    { slug: "5.5-tekla", title: "5.5 Tekla Structures: Structural BIM", content: "# Tekla Structures\n\nContent coming soon..." },
                    { slug: "5.6-sketchup", title: "5.6 SketchUp and BIM Extensions", content: "# SketchUp\n\nContent coming soon..." },
                    { slug: "5.7-microstation", title: "5.7 Bentley MicroStation and OpenBuildings", content: "# MicroStation\n\nContent coming soon..." },
                    { slug: "5.8-trimble-connect", title: "5.8 Trimble Connect and Collaboration Tools", content: "# Trimble Connect\n\nContent coming soon..." },
                    { slug: "5.9-selection-criteria", title: "5.9 Software Selection Criteria", content: "# Software Selection\n\nContent coming soon..." },
                    { slug: "5.10-free-options", title: "5.10 Free and Educational Software Options", content: "# Free Software Options\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 6: Basic BIM Workflow",
                items: [
                    { slug: "6.1-project-setup", title: "6.1 Project Setup and Planning", content: "# Project Setup\n\nContent coming soon..." },
                    { slug: "6.2-bep-basics", title: "6.2 Creating BIM Execution Plans (BEP) - Basics", content: "# BEP Basics\n\nContent coming soon..." },
                    { slug: "6.3-naming-conventions", title: "6.3 File Naming Conventions", content: "# File Naming Conventions\n\nContent coming soon..." },
                    { slug: "6.4-model-organization", title: "6.4 Model Organization and Structure", content: "# Model Organization\n\nContent coming soon..." },
                    { slug: "6.5-templates", title: "6.5 Working with Templates", content: "# Working with Templates\n\nContent coming soon..." },
                    { slug: "6.6-collaboration-basics", title: "6.6 Basic Collaboration Workflows", content: "# Basic Collaboration\n\nContent coming soon..." },
                    { slug: "6.7-version-control", title: "6.7 Version Control Fundamentals", content: "# Version Control\n\nContent coming soon..." },
                    { slug: "6.8-quality-control", title: "6.8 Quality Control Basics", content: "# Quality Control\n\nContent coming soon..." },
                    { slug: "6.9-clash-basics", title: "6.9 Basic Clash Detection Concepts", content: "# Basic Clash Detection\n\nContent coming soon..." },
                    { slug: "6.10-handover-basics", title: "6.10 Model Handover Basics", content: "# Model Handover\n\nContent coming soon..." },
                ]
            }
        ]
    },
    {
        title: "Intermediate Tier: Professional BIM Practice",
        modules: [
            {
                title: "Module 7: ISO 19650 Standards - Part 1",
                items: [
                    { slug: "7.1-intro-iso19650", title: "7.1 Introduction to ISO 19650 Series", content: "# ISO 19650 Series\n\nContent coming soon..." },
                    { slug: "7.2-iso19650-1", title: "7.2 ISO 19650-1: Concepts and Principles", content: "# ISO 19650-1\n\nContent coming soon..." },
                    { slug: "7.3-info-management-framework", title: "7.3 Information Management Framework", content: "# Information Management Framework\n\nContent coming soon..." },
                    { slug: "7.4-delivery-cycle", title: "7.4 Information Delivery Cycle", content: "# Information Delivery Cycle\n\nContent coming soon..." },
                    { slug: "7.5-appointing-vs-appointed", title: "7.5 Appointing Party vs Appointed Party", content: "# Appointing vs Appointed Party\n\nContent coming soon..." },
                    { slug: "7.6-eir", title: "7.6 Exchange Information Requirements (EIR)", content: "# EIR\n\nContent coming soon..." },
                    { slug: "7.7-air", title: "7.7 Asset Information Requirements (AIR)", content: "# AIR\n\nContent coming soon..." },
                    { slug: "7.8-oir", title: "7.8 Organizational Information Requirements (OIR)", content: "# OIR\n\nContent coming soon..." },
                    { slug: "7.9-maturity-levels", title: "7.9 BIM Maturity Levels and ISO 19650", content: "# BIM Maturity Levels\n\nContent coming soon..." },
                    { slug: "7.10-transition-pas1192", title: "7.10 Transition from PAS 1192 to ISO 19650", content: "# Transition from PAS 1192\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 8: ISO 19650 Standards - Part 2",
                items: [
                    { slug: "8.1-iso19650-2", title: "8.1 ISO 19650-2: Delivery Phase", content: "# ISO 19650-2\n\nContent coming soon..." },
                    { slug: "8.2-iso19650-3", title: "8.2 ISO 19650-3: Operational Phase", content: "# ISO 19650-3\n\nContent coming soon..." },
                    { slug: "8.3-iso19650-4", title: "8.3 ISO 19650-4: Information Exchange", content: "# ISO 19650-4\n\nContent coming soon..." },
                    { slug: "8.4-iso19650-5", title: "8.4 ISO 19650-5: Security-minded Approach", content: "# ISO 19650-5\n\nContent coming soon..." },
                    { slug: "8.5-iso19650-6", title: "8.5 ISO 19650-6: Health and Safety", content: "# ISO 19650-6\n\nContent coming soon..." },
                    { slug: "8.6-national-annexes", title: "8.6 National Annexes and Regional Adaptations", content: "# National Annexes\n\nContent coming soon..." },
                    { slug: "8.7-certification", title: "8.7 ISO 19650 Certification Process", content: "# Certification Process\n\nContent coming soon..." },
                    { slug: "8.8-implementation", title: "8.8 Implementing ISO 19650 in Organizations", content: "# Implementation in Organizations\n\nContent coming soon..." },
                    { slug: "8.9-digital-twins", title: "8.9 ISO 19650 and Digital Twins", content: "# ISO 19650 and Digital Twins\n\nContent coming soon..." },
                    { slug: "8.10-future-iso", title: "8.10 Future of ISO 19650", content: "# Future of ISO 19650\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 9: BIM Execution Planning",
                items: [
                    { slug: "9.1-bep-purpose", title: "9.1 Purpose and Importance of BEP", content: "# Purpose of BEP\n\nContent coming soon..." },
                    { slug: "9.2-bep-components", title: "9.2 Components of a BIM Execution Plan", content: "# Components of BEP\n\nContent coming soon..." },
                    { slug: "9.3-pir", title: "9.3 Project Information Requirements (PIR)", content: "# PIR\n\nContent coming soon..." },
                    { slug: "9.4-goals-objectives", title: "9.4 Defining BIM Goals and Objectives", content: "# Goals and Objectives\n\nContent coming soon..." },
                    { slug: "9.5-roles-responsibilities", title: "9.5 BIM Roles and Responsibilities", content: "# Roles and Responsibilities\n\nContent coming soon..." },
                    { slug: "9.6-exchange-protocols", title: "9.6 Information Exchange Protocols", content: "# Exchange Protocols\n\nContent coming soon..." },
                    { slug: "9.7-model-development", title: "9.7 Model Development Procedures", content: "# Model Development Procedures\n\nContent coming soon..." },
                    { slug: "9.8-qa-qc", title: "9.8 Quality Assurance/Quality Control (QA/QC) Plans", content: "# QA/QC Plans\n\nContent coming soon..." },
                    { slug: "9.9-tech-requirements", title: "9.9 Software and Technology Requirements", content: "# Technology Requirements\n\nContent coming soon..." },
                    { slug: "9.10-bep-templates", title: "9.10 BEP Templates and Examples", content: "# BEP Templates\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 10: Advanced Revit Techniques",
                items: [
                    { slug: "10.1-advanced-families", title: "10.1 Advanced Family Creation", content: "# Advanced Family Creation\n\nContent coming soon..." },
                    { slug: "10.2-parametric-design", title: "10.2 Parametric Design in Revit", content: "# Parametric Design\n\nContent coming soon..." },
                    { slug: "10.3-adaptive-components", title: "10.3 Adaptive Components", content: "# Adaptive Components\n\nContent coming soon..." },
                    { slug: "10.4-worksharing", title: "10.4 Worksharing and Central Models", content: "# Worksharing\n\nContent coming soon..." },
                    { slug: "10.5-phasing", title: "10.5 Phasing and Design Options", content: "# Phasing and Design Options\n\nContent coming soon..." },
                    { slug: "10.6-advanced-mep", title: "10.6 Advanced MEP Systems Modeling", content: "# Advanced MEP\n\nContent coming soon..." },
                    { slug: "10.7-structural-integration", title: "10.7 Structural Analysis Integration", content: "# Structural Analysis Integration\n\nContent coming soon..." },
                    { slug: "10.8-revit-api", title: "10.8 Revit API and Automation Basics", content: "# Revit API\n\nContent coming soon..." },
                    { slug: "10.9-dynamo", title: "10.9 Dynamo for Revit: Visual Programming", content: "# Dynamo for Revit\n\nContent coming soon..." },
                    { slug: "10.10-custom-addons", title: "10.10 Custom Revit Add-ins and Plugins", content: "# Custom Add-ins\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 11: Coordination and Clash Detection",
                items: [
                    { slug: "11.1-intro-coordination", title: "11.1 Introduction to Model Coordination", content: "# Model Coordination\n\nContent coming soon..." },
                    { slug: "11.2-navisworks-setup", title: "11.2 Setting Up Navisworks for Clash Detection", content: "# Navisworks Setup\n\nContent coming soon..." },
                    { slug: "11.3-clash-types", title: "11.3 Types of Clashes: Hard, Soft, Workflow", content: "# Clash Types\n\nContent coming soon..." },
                    { slug: "11.4-running-tests", title: "11.4 Running Clash Tests", content: "# Running Clash Tests\n\nContent coming soon..." },
                    { slug: "11.5-reporting", title: "11.5 Clash Reporting and Documentation", content: "# Clash Reporting\n\nContent coming soon..." },
                    { slug: "11.6-bcf", title: "11.6 BCF (BIM Collaboration Format) Workflow", content: "# BCF Workflow\n\nContent coming soon..." },
                    { slug: "11.7-resolving-clashes", title: "11.7 Resolving Clashes in Source Models", content: "# Resolving Clashes\n\nContent coming soon..." },
                    { slug: "11.8-coordination-meetings", title: "11.8 Coordination Meetings and Protocols", content: "# Coordination Meetings\n\nContent coming soon..." },
                    { slug: "11.9-federation-strategies", title: "11.9 Model Federation Strategies", content: "# Model Federation\n\nContent coming soon..." },
                    { slug: "11.10-advanced-strategies", title: "11.10 Advanced Clash Detection Strategies", content: "# Advanced Strategies\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 12: BIM for Different Disciplines",
                items: [
                    { slug: "12.1-architectural-bim", title: "12.1 Architectural BIM Best Practices", content: "# Architectural BIM\n\nContent coming soon..." },
                    { slug: "12.2-structural-bim", title: "12.2 Structural BIM Workflows", content: "# Structural BIM\n\nContent coming soon..." },
                    { slug: "12.3-mep-bim", title: "12.3 MEP (Mechanical, Electrical, Plumbing) BIM", content: "# MEP BIM\n\nContent coming soon..." },
                    { slug: "12.4-civil-bim", title: "12.4 Civil and Infrastructure BIM", content: "# Civil BIM\n\nContent coming soon..." },
                    { slug: "12.5-landscape-bim", title: "12.5 Landscape Architecture in BIM", content: "# Landscape Architecture\n\nContent coming soon..." },
                    { slug: "12.6-interior-design", title: "12.6 Interior Design and BIM", content: "# Interior Design\n\nContent coming soon..." },
                    { slug: "12.7-quantity-surveying", title: "12.7 Quantity Surveying and BIM", content: "# Quantity Surveying\n\nContent coming soon..." },
                    { slug: "12.8-construction-management", title: "12.8 Construction Management with BIM", content: "# Construction Management\n\nContent coming soon..." },
                    { slug: "12.9-fm-bim", title: "12.9 Facilities Management and BIM", content: "# Facilities Management\n\nContent coming soon..." },
                    { slug: "12.10-multidisciplinary", title: "12.10 Multi-disciplinary Coordination", content: "# Multi-disciplinary Coordination\n\nContent coming soon..." },
                ]
            },
            {
                title: "Module 13: Data Management and CDE",
                items: [
                    { slug: "13.1-cde-principles", title: "13.1 Common Data Environment Principles", content: "# CDE Principles\n\nContent coming soon..." },
                    { slug: "13.2-cde-platforms", title: "13.2 CDE Platforms and Solutions", content: "# CDE Platforms\n\nContent coming soon..." },
                    { slug: "13.3-doc-management", title: "13.3 Document Management in BIM", content: "# Document Management\n\nContent coming soon..." },
                    { slug: "13.4-info-containers", title: "13.4 Information Containers and Formats", content: "# Information Containers\n\nContent coming soon..." },
                    { slug: "13.5-file-naming-adv", title: "13.5 File Naming and Classification Systems", content: "# File Naming Advanced\n\nContent coming soon..." },
                    { slug: "13.6-access-control", title: "13.6 Access Control and Permissions", content: "# Access Control\n\nContent coming soon..." },
                    { slug: "13.7-version-control-adv", title: "13.7 Version Control Advanced", content: "# Version Control Advanced\n\nContent coming soon..." },
                    { slug: "13.8-data-security", title: "13.8 Data Security in BIM Projects", content: "# Data Security\n\nContent coming soon..." },
                    { slug: "13.9-cloud-collaboration", title: "13.9 Cloud-based BIM Collaboration", content: "# Cloud Collaboration\n\nContent coming soon..." },
                    { slug: "13.10-bim360-acc", title: "13.10 BIM 360 and Autodesk Construction Cloud", content: "# BIM 360 & ACC\n\nContent coming soon..." },
                ]
            }
        ]
    }
];

export function getTopic(slug: string): DocTopic | undefined {
    for (const tier of docsData) {
        for (const module of tier.modules) {
            for (const item of module.items) {
                if (item.slug === slug) return item;
            }
        }
    }
    return undefined;
}

export function getPrevNext(slug: string): { prev?: DocTopic; next?: DocTopic } {
    const allTopics: DocTopic[] = [];
    docsData.forEach(tier => {
        tier.modules.forEach(module => {
            allTopics.push(...module.items);
        });
    });

    const currentIndex = allTopics.findIndex(item => item.slug === slug);

    if (currentIndex === -1) return {};

    return {
        prev: currentIndex > 0 ? allTopics[currentIndex - 1] : undefined,
        next: currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : undefined
    };
}

export function getBreadcrumbs(slug: string): { tier: string; module: string; topic: string } | undefined {
    for (const tier of docsData) {
        for (const module of tier.modules) {
            for (const item of module.items) {
                if (item.slug === slug) {
                    return {
                        tier: tier.title,
                        module: module.title,
                        topic: item.title
                    };
                }
            }
        }
    }
    return undefined;
}
