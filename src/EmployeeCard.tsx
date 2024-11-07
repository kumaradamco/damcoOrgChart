// EmployeeCard.tsx

import * as React from "react";
import { Employee } from "./types";

interface EmployeeCardProps {
  employee: Employee;
  toggleSubordinates: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = React.memo(
  ({ employee, toggleSubordinates }) => {
    const isVacant = !employee.name || employee.name === "Vacant Position";

    return (
      <div
        className={`employee-card ${isVacant ? "vacant" : ""}`}
        onClick={toggleSubordinates}
      >
        {!isVacant ? (
          <div className="card-content">
            <img className="employee-photo" src={employee.imageBase64} />
            <div className="employee-name-label">الاسم:</div>
            <div className="employee-name">{employee.name}</div>
            <div className="employee-name">{employee.designation}</div>
            <div className="employee-grade-label">Grasde:</div>
            <div className="employee-grade">{employee.grade}</div>
            <div className="employee-grade-label">Employee Number:</div>
            <div className="employee-grade">{employee.employeeNumber}</div>
            <div className="employee-grade-label">Experience:</div>
            <div className="employee-grade">{employee.experience}</div>
            <div className="employee-grade-label"> University/College:</div>
            <div className="employee-grade">{employee.university}</div>
            <div className="employee-grade-label">Qualification:</div>
            <div className="employee-grade">{employee.qualification}</div>
            <div className="employee-designation">
              {employee.designation || "No Designation"}
            </div>
          </div>
        ) : (
          <div className="vacant-card">
            <div className="vacant-text">منصب شاغر</div>
            <div className="vacant-designation">
              {employee.designation || "No Designation"}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default EmployeeCard;
