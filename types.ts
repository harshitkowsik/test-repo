export type Page = "home" | "courses" | "courseList" | "registration" | "feedback" | "about" | "contact";
export type Theme = "light" | "dark" | "system";
export type CourseCategory = 'training_placement' | 'professional' | 'academics' | 'competitive_exams' | 'entrance_exams' | 'language';

export interface FormDataState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  education: string;
  experience: string;
  motivation: string;
}