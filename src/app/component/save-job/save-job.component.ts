import { Component } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/service/job.service';


@Component({
  selector: 'app-save-job',
  templateUrl: './save-job.component.html',
  styleUrls: ['./save-job.component.css'],
})
export class SaveJobComponent {
  job: Job = {
    id: undefined, // Optional
    title: '',
    category: '',
    location: '',
    employmentType: '',
    workModel: '',
    experience: '',
    salary: 0.0,
    status: '',
    adminId: 0,
    created_at: new Date().toISOString().slice(0, 16), // Current datetime in proper format
    updated_at: new Date().toISOString().slice(0, 16),
    jobDescription: '',
    skills: '',
    company: '', // New field for company
  };

  constructor(private jobService: JobService) {}

  saveJob(jobForm: any): void {
    if (!jobForm.valid) {
      alert('Please fill out all required fields!');
      return;
    }

    this.jobService.saveJob(this.job).subscribe({
      next: (response) => {
        alert('Job saved successfully!');
        console.log('Response:', response);
      },
      error: (error) => {
        console.error('Error saving job:', error);
        alert('Failed to save the job. Check the console for details.');
      },
    });
  }
}
