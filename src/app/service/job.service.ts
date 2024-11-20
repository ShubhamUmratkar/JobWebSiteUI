import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';


@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:8080/api/jobs';  // Base URL for API

  constructor(private http: HttpClient) {}

  // Fetch all jobs
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/getAllJobs`);
  }
  

  // Save a job (if needed)
  saveJob(job: Job): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveJobs`, job);
  }
}


