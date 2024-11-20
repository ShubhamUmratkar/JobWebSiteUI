import { Component } from '@angular/core';

@Component({
  selector: 'app-job-slider',
  templateUrl: './job-slider.component.html',
  styleUrls: ['./job-slider.component.css']
})
export class JobSliderComponent {
  jobs = [
    { title: 'Business Development', location: 'Gurgaon', salary: '20000-30000', openings: 20, type: 'Work From Home' },
    { title: 'Data Science', location: 'Pune, Nagpur', salary: '25000-35000', openings: 21, type: 'Work From Home' },
    { title: 'Web Development', location: 'Gurgaon', salary: '20000-30000', openings: 20, type: 'Onsite' }
  ];

  currentIndex = 0;

  // Show previous, current, and next job
  getVisibleJobs() {
    const length = this.jobs.length;
    return [
      this.jobs[(this.currentIndex - 1 + length) % length], // Previous job
      this.jobs[this.currentIndex],                         // Current (active) job
      this.jobs[(this.currentIndex + 1) % length]           // Next job
    ];
  }

  // Helper methods to apply the correct classes
  isActive(index: number): boolean {
    return index === 1;  // Middle element in `getVisibleJobs()` is active
  }

  isPrev(index: number): boolean {
    return index === 0;  // First element in `getVisibleJobs()` is previous
  }

  isNext(index: number): boolean {
    return index === 2;  // Last element in `getVisibleJobs()` is next
  }

  // Navigate to the previous job
  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.jobs.length - 1;
  }

  // Navigate to the next job
  next() {
    this.currentIndex = (this.currentIndex < this.jobs.length - 1) ? this.currentIndex + 1 : 0;
  }

  // Set the active job by index
  setActiveIndex(index: number) {
    this.currentIndex = index;
  }
}
