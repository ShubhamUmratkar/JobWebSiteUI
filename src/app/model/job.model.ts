export interface Job {
  id?: number;
  title: string;
  category: string;
  location: string;
  employmentType: string;
  workModel: string;
  experience: string;
  salary: number;
  status: string;
  adminId?: number;
  created_at?: string; // ISO datetime string
  updated_at?: string; // ISO datetime string
  jobDescription: string; // Description of the job
  skills: string; // Comma-separated skills
  company: string; // Name of the company
}
