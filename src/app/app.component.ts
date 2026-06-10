import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isDark = true;
  isMenuOpen = false;

  roles: string[] = [
    '2+ Years Experienced Java Backend Developer',
    'Spring Boot Microservices Engineer',
    'Fintech & Banking Application Developer',
    'Secure REST & SOAP API Specialist',
    'Angular Frontend Collaborator',
    'Cloud & DevOps Enthusiast'
  ];

  typedText = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;

  typingSpeed = 100;
  deletingSpeed = 60;
  pauseAfterTyping = 1500;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {

    document.documentElement.classList.add('dark');

    this.titleService.setTitle(
      'Narsing Gurme | Java Backend Developer'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Narsing Gurme is a Java Backend Developer with 2+ years of experience building secure banking and fintech applications using Spring Boot, Microservices, Angular, Oracle, Kafka, and Cloud technologies.'
      },
      {
        name: 'keywords',
        content:
          'Narsing Gurme, Java Backend Developer, Spring Boot, Microservices, Angular, Fintech Developer, Banking Applications'
      },
      { name: 'author', content: 'Narsing Gurme' },
      { name: 'robots', content: 'index, follow' },

      {
        property: 'og:title',
        content: 'Narsing Gurme | Java Backend Developer'
      },
      {
        property: 'og:description',
        content:
          'Experienced Java Backend Developer specializing in Spring Boot, Microservices, Banking & Fintech Systems.'
      },
      { property: 'og:type', content: 'website' }
    ]);

    this.startTypingEffect();
  }

  startTypingEffect() {

    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {

      this.typedText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;

        setTimeout(() => {
          this.startTypingEffect();
        }, this.pauseAfterTyping);

        return;
      }

    } else {

      this.typedText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    setTimeout(() => {
      this.startTypingEffect();
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

 downloadResume() {
  window.open('/resume/Narsing_Gurme_Resume.pdf', '_blank');
}
}