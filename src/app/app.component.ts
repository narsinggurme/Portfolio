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
    window.open('src/assets/resume/Narsing_Gurme.pdf', '_blank');
  }

  ngOnInit() {

    // Default dark mode
    document.documentElement.classList.add('dark');

    // ✅ SEO TITLE
    this.titleService.setTitle(
      'Narsing Gurme | Full Stack Java Developer (Angular & Spring Boot)'
    );

    // ✅ META TAGS
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

      // Open Graph (LinkedIn / WhatsApp)
      { property: 'og:title', content: 'Narsing Gurme | Full Stack Java Developer' },
      {
        property: 'og:description',
        content:
          'Full Stack Java Developer specializing in Angular, Spring Boot, Microservices, and Fintech platforms.'
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://narsing-gurme.onrender.com'
      }
    ]);
  }
}
