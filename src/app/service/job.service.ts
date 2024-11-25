import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';


@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:8080/api/jobs';  

  constructor(private http: HttpClient) {}


  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/getAllJobs`);
  }
  

  saveJob(job: Job): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveJobs`, job);
  }

  searchJobs(searchParams: any): Observable<Job[]> {
    let params = new HttpParams();

    // Dynamically add non-empty search parameters to HttpParams
    Object.keys(searchParams).forEach(key => {
      if (searchParams[key]) {
        params = params.append(key, searchParams[key]);
      }
    });

    return this.http.get<Job[]>(`${this.apiUrl}/searchJobs`, { params });
  }

  // Other method examples for any other API requests if required (e.g., delete job, etc.)
  deleteJob(jobId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteJob/${jobId}`);
  }

  updateJob(job: Job): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateJob`, job);
  }
}