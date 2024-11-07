export interface Employee {
    index: number;
    name: string;
    grade: string;
    designation: string;
    imageBase64: string;
    managerIndex?: number;
    level?: number;
    employeeNumber?: number;
    experience?: number;
    university?: string;
    qualification?: string;
}
