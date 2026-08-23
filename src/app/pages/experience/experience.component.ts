import { Component, OnInit } from '@angular/core';

interface Experience {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
  backTitle: string;
  backSubtitle: string;
  achievements: { label?: string; text: string }[];
  isFlipped?: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      id: 'ntt-integratel-dito',
      number: '01',
      role: 'Backend & Cloud Developer',
      company: 'NTT DATA – Integratel (Dito)',
      period: '2024 – 2026',
      summary: 'Diseño e implementación de microservicios reactivos y funciones serverless para procesamiento transaccional de alto rendimiento.',
      tags: ['Java', 'Spring Boot', 'WebFlux', 'Azure Functions', 'Jenkins', 'Docker'],
      backTitle: 'Arquitectura Reactiva',
      backSubtitle: 'Cliente: Integratel (Dito)',
      achievements: [
        { label: 'Microservicios Reactivos:', text: 'Desarrollo con Spring Boot y WebFlux optimizando latencia y rendimiento transaccional.' },
        { label: 'Serverless:', text: 'Implementación de Azure Functions para procesamiento eficiente de eventos críticos de negocio.' },
        { label: 'CI/CD:', text: 'Configuración de pipelines automatizados en Jenkins y aseguramiento de cobertura de pruebas.' }
      ]
    },
    {
      id: 'ntt-integratel-ott',
      number: '02',
      role: 'Backend & Functional Analyst',
      company: 'NTT DATA – Integratel (OTT)',
      period: '2024 – 2025',
      summary: 'Ingeniería inversa, definición de contratos de API y análisis funcional de eventos para el sistema activador.',
      tags: ['APIs REST', 'UML', 'Event-Driven', 'Asynchronous Messaging', 'Microservicios'],
      backTitle: 'Integración & Eventos',
      backSubtitle: 'Cliente: Integratel (OTT)',
      achievements: [
        { label: 'Análisis Funcional:', text: 'Ingeniería inversa de servicios legados y levantamiento estratégico de requerimientos para activación.' },
        { label: 'Diseño Técnico:', text: 'Modelado con UML (diagramas de secuencia y casos de uso) y especificación de contratos de APIs.' },
        { label: 'Event-Driven:', text: 'Articulación técnica para migración hacia arquitecturas asíncronas orientadas a eventos.' }
      ]
    },
    {
      id: 'ntt-claro',
      number: '03',
      role: 'Backend Developer',
      company: 'NTT DATA – Claro (SmartWatch)',
      period: '2024',
      summary: 'Construcción y aseguramiento de calidad para APIs REST transaccionales conectadas a plataformas SmartWatch.',
      tags: ['Java', 'Spring Boot', 'JUnit', 'Mockito', 'SonarQube', 'GitFlow', 'Bitbucket'],
      backTitle: 'Calidad & APIs Telco',
      backSubtitle: 'Cliente: Claro',
      achievements: [
        { label: 'Desarrollo Backend:', text: 'Construcción y mantenimiento de APIs REST robustas bajo Spring Boot.' },
        { label: 'Code Quality:', text: 'Implementación exhaustiva de pruebas unitarias con JUnit/Mockito y análisis estático con SonarQube.' },
        { label: 'Control de Versiones:', text: 'Gestión del ciclo de vida del código y homologación de ramas con GitFlow en Bitbucket.' }
      ]
    },
    {
      id: 'ntt-bcp',
      number: '04',
      role: 'Backend Developer',
      company: 'NTT DATA – Banco de Crédito del Perú',
      period: '2024',
      summary: 'Desarrollo de microservicios para la Tribu Riesgo Banca Pyme con observabilidad distribuida y gestión de seguridad.',
      tags: ['Java', 'Spring Boot', 'OpenTelemetry', 'HashiCorp Vault', 'Microservicios'],
      backTitle: 'Observabilidad & Seguridad',
      backSubtitle: 'Cliente: BCP (Riesgo Pyme)',
      achievements: [
        { label: 'Microservicios Core:', text: 'Desarrollo de servicios escalables coordinando de forma técnica y funcional con líderes del banco.' },
        { label: 'Observabilidad:', text: 'Implementación de OpenTelemetry para monitoreo distribuido y salud de servicios productivos.' },
        { label: 'Seguridad:', text: 'Centralización y gestión de credenciales críticas mediante migración a HashiCorp Vault.' }
      ]
    },
    {
      id: 'ntt-telefonica',
      number: '05',
      role: 'Operations & Backend Support',
      company: 'NTT DATA – Telefónica Chile',
      period: '2024',
      summary: 'Soporte operativo especializado, diagnóstico de incidentes críticos y monitoreo en plataformas cloud telco.',
      tags: ['Jenkins', 'Grafana', 'Kibana', 'Cloud DevOps', 'Troubleshooting'],
      backTitle: 'Operaciones & Monitoreo',
      backSubtitle: 'Cliente: Telefónica Chile',
      achievements: [
        { label: 'Diagnóstico Crítico:', text: 'Resolución e investigación profunda de fallas sobre flujos transaccionales complejos.' },
        { label: 'Monitoreo:', text: 'Seguimiento de métricas y logs en tiempo real utilizando Grafana y Kibana.' },
        { label: 'Soporte DevOps:', text: 'Gestión y verificación de ejecuciones de pipelines en Jenkins.' }
      ]
    },
    {
      id: 'sunarp-central',
      number: '06',
      role: 'Full Stack Developer',
      company: 'SUNARP (Sede Central)',
      period: '2023 – 2024',
      summary: 'Construcción y mantenimiento de plataformas registrales transaccionales críticas a nivel nacional.',
      tags: ['Java 17', 'Spring Boot', 'Angular 17', 'Oracle PL/SQL', 'Docker', 'REST APIs'],
      backTitle: 'Logros & Plataforma',
      backSubtitle: 'SUNARP Sede Central',
      achievements: [
        { label: 'Desarrollo Core:', text: 'Módulos transaccionales y APIs REST robustas usando Java 17 y Spring Boot.' },
        { label: 'Frontend Integration:', text: 'Interfaces interactivas y consumo de endpoints con Angular 17.' },
        { label: 'Base de Datos:', text: 'Optimización de procedimientos almacenados y consultas complejas en Oracle PL/SQL.' },
        { label: 'Entrega:', text: 'Levantamiento de requerimientos funcionales y acompañamiento en pruebas UAT.' }
      ]
    },
    {
      id: 'sunarp-ix',
      number: '07',
      role: 'Full Stack Developer',
      company: 'SUNARP (Zona Registral N° IX)',
      period: '2022 – 2023',
      summary: 'Diseño e implementación de microservicios distribuidos y autenticación segura para trámites registrales.',
      tags: ['Java 8/17', 'Spring Cloud', 'OAuth 2.0', 'JWT', 'Microservicios', 'REST APIs'],
      backTitle: 'Seguridad & Servicios',
      backSubtitle: 'SUNARP Sede Lima',
      achievements: [
        { label: 'Microservicios:', text: 'Construcción de arquitectura distribuida y escalable con Spring Boot y Spring Cloud.' },
        { label: 'Seguridad Digital:', text: 'Implementación de esquemas de autenticación y autorización segura con OAuth 2.0 y JWT.' },
        { label: 'Integración:', text: 'Consumo y diseño de APIs REST alineadas a las necesidades operativas de la institución.' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleCardFlip(exp: Experience): void {
    exp.isFlipped = !exp.isFlipped;
  }

}