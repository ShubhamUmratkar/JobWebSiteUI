import { Component, OnInit } from '@angular/core';
import { Internship } from 'src/app/model/internship.model';
import { InternshipService } from 'src/app/service/service-internship.service';



@Component({
  selector: 'app-view-all-internship',
  templateUrl: './view-all-internship.component.html',
  styleUrls: ['./view-all-internship.component.css']
})
export class ViewAllInternshipComponent implements OnInit {
  internships: Internship[] = [];

  constructor(private internshipService: InternshipService) {}

  ngOnInit(): void {
    this.fetchAllInternships();
  }

  fetchAllInternships() {
    this.internshipService.getAllInternships().subscribe(
      (data: Internship[]) => {
        this.internships = data;
        console.log('All internships:', this.internships);
      },
      (error) => {
        console.error('Error fetching internships:', error);
      }
    );
  }
}
