import { Role } from "./Role";

export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    role: Role;
    isActive: boolean;
  }
  
    
    export function isAdmin(user: User): boolean {
        let isAdmin =  user.role === Role.Admin ?  true :  false;
        return isAdmin;
  }