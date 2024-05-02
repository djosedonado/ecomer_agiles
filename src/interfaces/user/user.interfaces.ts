export interface User {
  id?: string;
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  isActive?: boolean;
  roles?: string[];
}
