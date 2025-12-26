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
    'Full Stack Java Developer',
    'Spring Boot Microservices Engineer',
    'Angular & Frontend Specialist',
    'Fintech Application Developer',
    'REST API & Secure Backend Engineer'
  ];

  typedText = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;

  typingSpeed = 100;
  deletingSpeed = 60;
  pauseAfterTyping = 1500;
  pauseAfterDeleting = 500;

  startTypingEffect() {
    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      // Typing
      this.typedText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentRole.length) {
        setTimeout(() => (this.isDeleting = true), this.pauseAfterTyping);
      }
    } else {
      this.typedText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        setTimeout(() => { }, this.pauseAfterDeleting);
      }
    }

    setTimeout(
      () => this.startTypingEffect(),
      this.isDeleting ? this.deletingSpeed : this.typingSpeed
    );
  }


  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

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
    window.open(
      'https://drive.google.com/file/d/1Va7hjF8Z0uTUpoOAArLg6l-igBM2yWk1/view',
      '_blank'
    );
  }
  ngOnInit() {

    document.documentElement.classList.add('dark');

    this.titleService.setTitle(
      'Narsing Gurme | Full Stack Java Developer (Angular & Spring Boot)'
    );
    this.startTypingEffect();
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Narsing Gurme is a Full Stack Java Developer with 1.5+ years of experience building secure fintech and enterprise applications using Angular, Spring Boot, and Microservices.'
      },
      {
        name: 'keywords',
        content:
          'Narsing Gurme, Full Stack Java Developer, Angular Developer, Spring Boot, Fintech Developer'
      },
      { name: 'author', content: 'Narsing Gurme' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:title', content: 'Narsing Gurme | Full Stack Java Developer' },
      {
        property: 'og:description',
        content:
          'Full Stack Java Developer specializing in Angular, Spring Boot, Microservices, and Fintech platforms.'
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://narsinggurme.netlify.app/'
      }
    ]);
  }


}
