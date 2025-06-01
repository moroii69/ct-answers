import type { Question } from "../types"

export const dbmsLabQuestions: Question[] = [
  {
    id: "1.1.1",
    title: "Create Database and Tables",
    description: "Create a database and tables for a student management system",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://codetantra.com/question/1.1.1",
    question: `
# Create Database and Tables

## Problem Statement
Create a database named **'StudentDB'** and design tables for a student management system with the following requirements:

1. A table for **students** with ID, name, email, and department
2. A table for **courses** with ID, name, credits, and instructor
3. A table for **enrollments** that connects students with courses

## Expected Output
The tables should have the following structure:

**Students Table:**
- student_id (INT, **PRIMARY KEY**)
- name (VARCHAR(100), **NOT NULL**)
- email (VARCHAR(100), **UNIQUE, NOT NULL**)
- department (VARCHAR(50))

**Courses Table:**
- course_id (INT, **PRIMARY KEY**)
- name (VARCHAR(100), **NOT NULL**)
- credits (INT, **NOT NULL**)
- instructor (VARCHAR(100))

**Enrollments Table:**
- student_id (INT, **FOREIGN KEY**)
- course_id (INT, **FOREIGN KEY**)
- grade (CHAR(2))
- **PRIMARY KEY** (student_id, course_id)
    `,
    solution: `
-- Create the database
CREATE DATABASE StudentDB;

-- Use the database
\\c StudentDB

-- Create Students table
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50)
);

-- Create Courses table
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    credits INT NOT NULL,
    instructor VARCHAR(100)
);

-- Create Enrollments table
CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Insert sample data into Students
INSERT INTO Students (student_id, name, email, department)
VALUES 
    (1, 'John Doe', 'john.doe@example.com', 'Computer Science'),
    (2, 'Jane Smith', 'jane.smith@example.com', 'Electrical Engineering'),
    (3, 'Bob Johnson', 'bob.johnson@example.com', 'Mathematics');

-- Insert sample data into Courses
INSERT INTO Courses (course_id, name, credits, instructor)
VALUES 
    (101, 'Introduction to Programming', 3, 'Dr. Alan Turing'),
    (102, 'Database Systems', 4, 'Dr. Edgar Codd'),
    (103, 'Calculus I', 4, 'Dr. Isaac Newton');

-- Insert sample data into Enrollments
INSERT INTO Enrollments (student_id, course_id, grade)
VALUES 
    (1, 101, 'A'),
    (1, 102, 'B'),
    (2, 101, 'A'),
    (2, 103, 'B+'),
    (3, 103, 'A-');
`,
    language: "sql",
    testCasesPassed: 10,
    totalTestCases: 10,
    hiddenTestCasesPassed: 5,
    totalHiddenTestCases: 5,
  },
  {
    id: "2.1.1",
    title: "Basic SQL Queries",
    description: "Write basic SQL queries for data retrieval",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://codetantra.com/question/2.1.1",
    question: `
# Basic SQL Queries

## Problem Statement
Given an **Employees table** with columns: emp_id, name, department, salary, hire_date

Write **SQL queries** to:
1. List all employees in the **IT department**
2. Find the employee with the **highest salary**
3. Calculate the **average salary** by department
4. List employees hired in **2019**
5. Count the number of employees in each department

## Expected Output Format
Each query should return appropriate columns and be **properly formatted**.
    `,
    solution: `
-- 1. List all employees in the IT department
SELECT * 
FROM Employees 
WHERE department = 'IT';

-- 2. Find the employee with the highest salary
SELECT * 
FROM Employees 
WHERE salary = (SELECT MAX(salary) FROM Employees);

-- 3. Calculate the average salary by department
SELECT department, AVG(salary) as avg_salary 
FROM Employees 
GROUP BY department;

-- 4. List employees hired in 2019
SELECT * 
FROM Employees 
WHERE hire_date BETWEEN '2019-01-01' AND '2019-12-31';

-- 5. Count the number of employees in each department
SELECT department, COUNT(*) as employee_count 
FROM Employees 
GROUP BY department;
`,
    language: "sql",
    testCasesPassed: 5,
    totalTestCases: 5,
    totalHiddenTestCases: 0,
  },
]
