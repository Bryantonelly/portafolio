import { Component } from '@angular/core';

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Abre el primer proyecto por defecto
  activeProjectIndex: number | null = 0;

  projects: Project[] = [
    {
      number: '01',
      category: 'Public Sector / Enterprise Platform',
      title: 'Sistema Informativo de Garantías Mobiliarias (SIGM)',
      description: 'Participación en el desarrollo del sistema nacional de garantías mobiliarias para SUNARP. Implementación de módulos transaccionales y componentes UI.',
      tags: ['Java', 'Spring Boot', 'Angular', 'Oracle PL/SQL', 'REST APIs'],
      liveUrl: 'https://sigm.sunarp.gob.pe/garantias-mobiliarias/inicio'
    },
    {
      number: '02',
      category: 'Microservices & Clean Architecture',
      title: 'Banking & Accounts Microservices Core',
      description: 'Ecosistema bancario distribuido implementando arquitectura hexagonal, Service Discovery, API Gateway, programación funcional y manejo centralizado de excepciones.',
      tags: ['Java 17', 'Spring Boot', 'Spring Cloud Eureka', 'API Gateway', 'Hexagonal Arch'],
      githubUrl: 'https://github.com/Bryantonelly/challenge-nttdata/tree/bville'
    },
    {
      number: '03',
      category: 'Security & Backend Template',
      title: 'Spring Security & JWT Authentication API',
      description: 'API REST robusta para autenticación y autorización segura con control de versiones en base de datos mediante Liquibase y documentación OpenAPI/Swagger.',
      tags: ['Spring Security', 'JWT', 'Liquibase', 'PostgreSQL', 'Gradle', 'Swagger'],
      githubUrl: 'https://github.com/Bryantonelly/plantilla-login-jwt-spring-security'
    },
    {
      number: '04',
      category: 'Distributed Systems',
      title: 'Banking Ecosystem Microservices',
      description: 'Diseño modular de microservicios para cuentas, clientes, créditos y movimientos con enrutamiento dinámico y balanceo de carga.',
      tags: ['Java', 'Spring Boot', 'Eureka', 'Spring Cloud Gateway', 'JPA / Hibernate'],
      githubUrl: 'https://github.com/Bryantonelly/nttdata-project-bank/tree/main'
    },
    {
      number: '05',
      category: 'Freelance & Architecture Migration',
      title: 'Gestión de Reportes e Inventarios (Ingetec)',
      description: 'Sistema administrativo para seguimiento de inventarios e instalaciones. Desarrollado originalmente en Java y posteriormente migrado a arquitectura Node.js.',
      tags: ['Java', 'Node.js', 'Express', 'SQL', 'Freelance'],
      githubUrl: 'https://github.com/Bryantonelly/app-reportes-ingetec'
    }
  ];

  toggleProject(index: number): void {
    this.activeProjectIndex = this.activeProjectIndex === index ? null : index;
  }
}