import { Role } from "./Role";
import { Dayjs } from "dayjs"; //to use?
export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    createdAt: Date;
    role: Role;
    isActive: boolean;
  }


    export function isAdmin(user: User): boolean {
        let isAdmin =  user.role === Role.Admin ?  true :  false;
        return isAdmin;
  }
