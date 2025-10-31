export type Page = "home" | "courses" | "courseList" | "registration" | "feedback" | "about" | "contact";
export type Theme = "light" | "dark" | "system";
export type CourseCategory = 'pharma' | 'language' | 'academics' | 'tech' | 'professional';

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