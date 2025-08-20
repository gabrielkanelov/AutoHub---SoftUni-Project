export interface User {
  _id: string;
  email: string;
  username: string;
  tel?: string;
  themes?: string[];
  posts?: string[];
  created_at?: string;
}