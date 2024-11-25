import { Component } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-jobsposts',
  templateUrl: './jobsposts.component.html',
  styleUrls: ['./jobsposts.component.css']
})
export class JobspostsComponent {
  jobs: Job[] = [];  // All jobs fetched from the backend
  filteredJobs: Job[] = [];  // Jobs after applying the filter
  loading = true;  // A loading indicator to show while data is being fetched
  error: string = '';  // For error handling

  filters = {
    location: '',
    minSalary: null,
    maxSalary: null,
    workMode: '',
    experience: ''
  };

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  // Fetch all jobs on initial load (no filters applied)
  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe(
      (data) => {
        this.jobs = data;
        this.filteredJobs = data;  // Initially, show all jobs
        this.loading = false;
      },
      (error) => {
        this.error = 'Error fetching jobs. Please try again later.';
        this.loading = false;
      }
    );
  }

  // Method to apply filters to the jobs list
  applyFilters(): void {
    this.filteredJobs = this.jobs.filter(job => {
      let matches = true;

      // Location Filter
      if (this.filters.location && !job.location.toLowerCase().includes(this.filters.location.toLowerCase())) {
        matches = false;
      }

      // Salary Range Filter
      if (this.filters.minSalary && job.salary < this.filters.minSalary) {
        matches = false;
      }
      if (this.filters.maxSalary && job.salary > this.filters.maxSalary) {
        matches = false;
      }

      // Work Mode Filter
      if (this.filters.workMode && job.workModel !== this.filters.workMode) {
        matches = false;
      }

      // Experience Filter
      if (this.filters.experience && job.experience !== this.filters.experience) {
        matches = false;
      }

      return matches;
    });
  }
}