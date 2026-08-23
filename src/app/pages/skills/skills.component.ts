import { Component, OnInit } from '@angular/core';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillGroups: SkillGroup[] = [
    {
      title: 'Backend & Architecture',
      skills: [
        'Java 21 / 17 / 8',
        'Spring Boot',
        'Spring WebFlux',
        'Python (FastAPI, Flask)',
        'Node.js',
        'Microservicios',
        'Arquitectura Hexagonal',
        'Event-Driven'
      ]
    },
    {
      title: 'Cloud, DevOps & Observability',
      skills: [
        'GitHub Certified (GH300)',
        'Docker',
        'Kubernetes',
        'Azure Functions',
        'Jenkins CI/CD',
        'GitFlow / GitHub / Bitbucket',
        'OpenTelemetry',
        'Grafana & Kibana'
      ]
    },
    {
      title: 'Databases & Security',
      skills: [
        'Oracle PL/SQL',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Liquibase',
        'OAuth 2.0 / JWT',
        'HashiCorp Vault'
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        'Angular (v17)',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5 / CSS3 / BEM',
        'React',
        'Next.js'
      ]
    },
    {
      title: 'Voice, AI & Methodologies',
      skills: [
        'Asterisk / SIP / VoIP',
        'Pipecat (Voice AI)',
        'Modelado UML',
        'Scrum / Kanban',
        'JIRA & Confluence'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}