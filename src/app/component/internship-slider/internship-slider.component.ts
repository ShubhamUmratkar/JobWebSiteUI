import { Component } from '@angular/core';
import { Internship } from 'src/app/model/internship.model';
import { InternshipService } from 'src/app/service/service-internship.service';

@Component({
  selector: 'app-internship-slider',
  templateUrl: './internship-slider.component.html',
  styleUrls: ['./internship-slider.component.css']
})
export class InternshipSliderComponent {
  internships: Internship[] = [];
  currentIndex = 0;

  constructor(private internshipService: InternshipService) {}

  ngOnInit(): void {
    this.fetchInternships();
  }

  // Fetch internships from the database
  fetchInternships() {
    this.internshipService.getAllInternships().subscribe(
      (data) => {
        this.internships = data;
      },
      (error) => {
        console.error('Error fetching internships:', error);
      }
    );
  }

  // Existing methods
  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.internships.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.internships.length - 1) ? this.currentIndex + 1 : 0;
  }

  getVisibleInternships() {
    const length = this.internships.length;
    return [
      this.internships[(this.currentIndex - 1 + length) % length],
      this.internships[this.currentIndex],
      this.internships[(this.currentIndex + 1) % length]
    ];
  }

  isActive(index: number): boolean {
    return index === 1;
  }

  isPrev(index: number): boolean {
    return index === 0;
  }

  isNext(index: number): boolean {
    return index === 2;
  }
}
