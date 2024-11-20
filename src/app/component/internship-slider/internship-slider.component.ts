import { Component } from '@angular/core';

@Component({
  selector: 'app-internship-slider',
  templateUrl: './internship-slider.component.html',
  styleUrls: ['./internship-slider.component.css']
})
export class InternshipSliderComponent {
  internships = [
    { title: 'Quality Analyst', company: 'Google', location: 'Mumbai', salary: '10,000', duration: 3 },
    { title: 'Full Stack Developer', company: 'Microsoft', location: 'Delhi', salary: '25,000', duration: 6 },
    { title: 'Data Science', company: 'Accenture', location: 'Pune', salary: '22,000', duration: 10 },
    { title: 'UI/UX Designer', company: 'Adobe', location: 'Bangalore', salary: '18,000', duration: 4 },
    { title: 'Software Engineer', company: 'Amazon', location: 'Hyderabad', salary: '30,000', duration: 12 }
  ];

  currentIndex = 0;

  // Show previous internship, wrapping around if necessary
  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.internships.length - 1;
  }

  // Show next internship, wrapping around if necessary
  nextSlide() {
    this.currentIndex = (this.currentIndex < this.internships.length - 1) ? this.currentIndex + 1 : 0;
  }

  // Method to get three internships: previous, current, and next
  getVisibleInternships() {
    const length = this.internships.length;
    return [
      this.internships[(this.currentIndex - 1 + length) % length], // Previous slide
      this.internships[this.currentIndex],                         // Current (active) slide
      this.internships[(this.currentIndex + 1) % length]           // Next slide
    ];
  }

  // Helper methods for CSS styling based on the index
  isActive(index: number): boolean {
    return index === 1;  // Middle element in `getVisibleInternships()` is active
  }

  isPrev(index: number): boolean {
    return index === 0;  // First element in `getVisibleInternships()` is previous
  }

  isNext(index: number): boolean {
    return index === 2;  // Last element in `getVisibleInternships()` is next
  }
}
