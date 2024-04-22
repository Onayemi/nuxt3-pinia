export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  token: string;
}
