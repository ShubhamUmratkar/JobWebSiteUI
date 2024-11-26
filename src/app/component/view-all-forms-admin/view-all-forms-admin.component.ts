import { Component } from '@angular/core';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-view-all-forms-admin',
  templateUrl: './view-all-forms-admin.component.html',
  styleUrls: ['./view-all-forms-admin.component.css']
})
export class ViewAllFormsAdminComponent {
  forms: any[] = [];  // Array to hold the list of forms
  selectedForm: any = null;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.fetchForms();
  }

  // Method to fetch all forms from the backend
  fetchForms(): void {
    this.formService.getAllForms().subscribe(
      (data) => {
        this.forms = data;
      },
      (error) => {
        console.error('Error fetching forms:', error);
      }
    );
  }

  // Method to display selected form's details
  viewFormDetails(form: any): void {
    this.selectedForm = form;
  }
}