import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

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

  private typingTimer: any;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {

    document.documentElement.classList.add('dark');

    this.titleService.setTitle(
      'Narsing Gurme | Java Backend Developer'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Java Backend Developer with 2+ years experience in Banking and Fintech Applications.'
      },
      {
        name: 'keywords',
        content:
          'Java, Spring Boot, Microservices, Kafka, Angular, Oracle, Backend Developer'
      }
    ]);

    this.startTypingEffect();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
  }

  startTypingEffect() {

    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {

      this.typedText = currentRole.substring(
        0,
        this.charIndex + 1
      );

      this.charIndex++;

      if (this.charIndex === currentRole.length) {

        this.isDeleting = true;

        this.typingTimer = setTimeout(() => {
          this.startTypingEffect();
        }, this.pauseAfterTyping);

        return;
      }

    } else {

      this.typedText = currentRole.substring(
        0,
        this.charIndex - 1
      );

      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex =
          (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.typingTimer = setTimeout(() => {
      this.startTypingEffect();
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle(
      'dark',
      this.isDark
    );
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/resume/Narsing_Gurme_Resume.pdf';
    link.download = 'Narsing_Gurme_Resume.pdf';
    link.click();
  }
}