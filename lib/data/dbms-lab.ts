import type { Question } from "../types"

export const dbmsLabQuestions: Question[] = [
  {
    id: "1.1.1",
    title: "DDL - CREATE",
    description: "Create a table using DDL commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcd3bc55a071e3955816/6770dcdfbc55a071e395584e/66a87baa65af86390e942285",
    question: `
Write an SQL statement to create a table named employees with the following specifications:

| Column Name | Data Type       | Constraints             |
|-------------|------------------|--------------------------|
| employeeID  | INT              | PRIMARY KEY              |
| firstName   | VARCHAR(50)      | NOT NULL                 |
| lastName    | VARCHAR(50)      | NOT NULL                 |
| birthDate   | DATE             | -                        |
| hireDate    | DATE             | -                        |
| salary      | DECIMAL(10, 2)   | CHECK (salary >= 0)      |

**Output**: The table employees is successfully created with the mentioned columns and as there is no data inserted and selected, the query will return nothing.
    `,
    solution: `
CREATE TABLE employees (
	employeeID INT PRIMARY KEY,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	birthDate DATE,
	hireDate DATE,
	salary DECIMAL(10,2),
	CHECK (salary >= 0)
)
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    hiddenTestCasesPassed: 0,
    totalHiddenTestCases: 0,
  },
  {
    id: "1.1.2",
    title: "DDL - ALTER",
    description: "Alter a table using DDL commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcd3bc55a071e3955816/6770dcdfbc55a071e395584e/66a87f5e65af86390e9425a3",
    question: `
Write an SQL statement to add a new column email (VARCHAR(100)) to the table employees.

**Note**: You are not required to create the table, The table is already available in the database.

**Output**: The email column is added to the employees table.


    `,
    solution: `
ALTER TABLE employees
ADD email varchar(100)
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },
    {
    id: "1.1.3",
    title: "DDL - DROP",
    description: "Drop a table using DDL commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcd3bc55a071e3955816/6770dcdfbc55a071e395584e/66a8809465af86390e942697",
    question: `
Write an SQL statement to drop the table named employees from the database.

**Output**: The employees table will be completely removed from the database.

Note: You are not required to create the table, The table is already available in the database.
    `,
    solution: `
ALTER TABLE employees
ADD email varchar(100)
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },

      {
    id: "1.1.4",
    title: "DDL - TRUNCATE",
    description: "Truncate a table using DDL commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcd3bc55a071e3955816/6770dcdfbc55a071e395584e/66a8839965af86390e9428da",
    question: `
Write an SQL statement to remove all records from the employees table but keep the table structure intact.

Note: You are not required to create the table, The table is already available in the database.

**Output**: All records from the employees table are removed after performing the query.
    `,
    solution: `
TRUNCATE TABLE employees
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },
  
      {
    id: "2.1.1",
    title: "DML - INSERT",
    description: "Insert records into a table using DML commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcf9bc55a071e39558d5/6770dd05bc55a071e39558fa/66a8972865af86390e943a18",
    question: `
Write an SQL statement to insert a new employee to the employees table with the following details: 

**Note**: You are not required to create the table, The table is already available in the database.

| employeeID | firstName | lastName | birthDate  | hireDate   | salary   |
|------------|-----------|----------|------------|------------|----------|
| 3          | Alice     | Johnson  | 1985-03-10 | 2015-08-22 | 45000.00 |

Output: The new employee record with the provided details is inserted to the employees table.


    `,
    solution: `
TRUNCATE TABLE employees
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },

  
      {
    id: "2.1.2",
    title: "DML - UPDATE",
    description: "Truncate a table using DDL commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcf9bc55a071e39558d5/6770dd05bc55a071e39558fa/66a8996365af86390e943ca1",
    question: `
You have a table named employees with the following columns: employeeID, firstName, lastName, birthDate, hireDate, and salary.

Write an SQL statement to update the salary of the employee with employeeID 3 to 52000.00.
    `,
    solution: `
UPDATE employees SET salary='52000.00' WHERE employeeID='3'
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },
        {
    id: "2.1.3",
    title: "DML - DELETE",
    description: "Delete records from a table using DML commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/6770dcf9bc55a071e39558d5/6770dd05bc55a071e39558fa/66a8bbf08b6d063790982772",
    question: `
You have a table named employees with the following columns: employeeID, firstName, lastName, birthDate, hireDate, and salary.

Write an SQL statement to delete the record of the employee with employeeID 3.

**Output**: The record of the employee with employeeID 3 is deleted from the employees table.
    `,
    solution: `
DELETE FROM employees WHERE employeeID='3'
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },

          {
    id: "3.1.1",
    title: "DDL - DROP Column",
    description: "Drop a column from a table using DDL commands",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/66ceb9e09e89953122661661",
    question: `
Write an SQL statement to drop column birthDate from the table named employees from the database.

**Note**: You are not required to create the table, The table is already available in the database.

**Output**: The birthDate column from the employees table is dropped.
    `,
    solution: `
ALTER TABLE employees

DROP COLUMN birthDate
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },


            {
    id: "3.1.2",
    title: "ANY",
    description: "Use of ANY operator in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/67503a7fd293b83167dcc3ac",
    question: `
You are given a database table employees with columns id, name, department, and salary.


Write an SQL query to find the names of employees whose salaries are greater than the salary of any employee in the HR department using the ANY operator.
    
**Example**:
| id | name           | department | salary |
|----|----------------|------------|--------|
| 1  | John Doe       | Sales      | 50000  |
| 2  | Jane Smith     | HR         | 60000  |
| 3  | Samuel Green   | IT         | 75000  |
| 4  | Emily White    | HR         | 55000  |
| 5  | Michael Brown  | Finance    | 80000  |


**Expected Output**:
| name          |
|---------------|
| Jane Smith    |
| Samuel Green  |
| Michael Brown |

`,
    solution: `
SELECT name FROM employees
WHERE salary > ANY (select salary from employees WHERE department ='HR' )
`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },

              {
    id: "3.1.3",
    title: "ALL",
    description: "Use of ALL operator in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/67516ce61d1cca7a380cb81f",
    question: `
You are given a database table employees with columns id, name, department, and salary.

Write an SQL query to find the names of employees whose salaries are greater than all employees in the "HR" department using the ALL operator.

**Example**:
| id | name           | department | salary |
|----|----------------|------------|--------|
| 1  | John Doe       | Sales      | 50000  |
| 2  | Jane Smith     | HR         | 60000  |
| 3  | Samuel Green   | IT         | 75000  |
| 4  | Emily White    | HR         | 55000  |
| 5  | Michael Brown  | Finance    | 80000  |


**Expected Output**:
| name          |
|---------------|
| Samuel Green  |
| Michael Brown |

`,
    solution: `
SELECT name
FROM employees
WHERE salary > ALL (select salary from employees where department = 'HR')
`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },

  
              {
    id: "3.1.4",
    title: "IN",
    description: "Use of IN operator in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/67516fc61d1cca7a380cc0db",
    question: `
You are given a database table employees with columns id, name, department, and salary.

Write an SQL query to find the names of employees who work in either the "HR" department or the "Finance" department.

Example:
| id | name           | department | salary |
|----|----------------|------------|--------|
| 1  | John Doe       | Sales      | 50000  |
| 2  | Jane Smith     | HR         | 60000  |
| 3  | Samuel Green   | IT         | 75000  |
| 4  | Emily White    | HR         | 55000  |
| 5  | Michael Brown  | Finance    | 80000  |

**Expected Output**:
| name          |
|---------------|
| Jane Smith    |
| Emily White   |
| Michael Brown |

`,
    solution: `
SELECT name FROM employees
where department IN ( 'HR', 'Finance')
`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },

               {
    id: "3.1.5",
    title: "EXISTS",
    description: "Use of EXISTS operator in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/67517a501d1cca7a380ce0a1",
    question: `
You are given a database table employees with columns id, name, department, and salary.


Write an SQL query to find the names of employees who do not work in the "HR" department using the NOT EXISTS operator.

**Example**:
| id | name           | department | salary |
|----|----------------|------------|--------|
| 1  | John Doe       | Sales      | 50000  |
| 2  | Jane Smith     | HR         | 60000  |
| 3  | Samuel Green   | IT         | 75000  |
| 4  | Emily White    | HR         | 55000  |
| 5  | Michael Brown  | Finance    | 80000  |


**Expected Output**:
| name           |
|----------------|
| John Doe       |
| Samuel Green   |
| Michael Brown  |

`,
    solution: `
SELECT name
FROM employees e1
WHERE EXISTS (
	SELECT 1
	FROM employees e2
	WHERE e2.id = e1.id AND e2.department = 'HR'
);
`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },

                 {
    id: "3.1.6",
    title: "NOT EXISTS",
    description: "Use of NOT EXISTS operator in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/67517a501d1cca7a380ce0a1",
    question: `
You are given a database table employees with columns id, name, department, and salary.


Write an SQL query to find the names of employees who do not work in the "HR" department using the NOT EXISTS operator.

**Example**:
| id | name           | department | salary |
|----|----------------|------------|--------|
| 1  | John Doe       | Sales      | 50000  |
| 2  | Jane Smith     | HR         | 60000  |
| 3  | Samuel Green   | IT         | 75000  |
| 4  | Emily White    | HR         | 55000  |
| 5  | Michael Brown  | Finance    | 80000  |


**Expected Output**:
| name        |
|-------------|
| Jane Smith  |
| Emily White |


`,
    solution: `
SELECT name
FROM employees e1
WHERE NOT EXISTS (
	SELECT 1
	FROM employees e2
	WHERE e2.id = e1.id AND e2.department = 'HR'
);
`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },



                   {
    id: "3.1.7",
    title: "Set Operations - UNION",
    description: "Use of UNION operator in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/66ab62d8321dce3b0c38cbdd",
    question: `
You have a table named employees with the following columns: employeeID, firstName, lastName, birthDate, hireDate, and salary.

Write the SQL command to combine the results of two queries, one selecting all employees with a salary greater than 60000 and another selecting all employees hired after 2021-01-01.

**Example**:
| employeeID | firstName | lastName | birthDate  | hireDate   | salary   |
|------------|-----------|----------|------------|------------|----------|
| 1          | John      | Doe      | 1980-05-15 | 2020-01-01 | 50000.00 |
| 2          | Jane      | Smith    | 1985-08-22 | 2018-07-15 | 60000.00 |
| 3          | Jim       | Brown    | 1990-12-05 | 2019-03-25 | 55000.00 |
| 4          | Lisa      | Johnson  | 1975-03-10 | 2015-10-01 | 70000.00 |
| 5          | Tom       | Harris   | 1982-09-30 | 2021-05-20 | 45000.00 |



**Expected Output**:
| employeeID | firstName | lastName | birthDate  | hireDate   | salary   |
|------------|-----------|----------|------------|------------|----------|
| 4          | Lisa      | Johnson  | 1975-03-10 | 2015-10-01 | 70000.00 |
| 5          | Tom       | Harris   | 1982-09-30 | 2021-05-20 | 45000.00 |



`,
    solution: `
SELECT * FROM employees WHERE salary > '60000'
UNION
SELECT * FROM employees WHERE hireDate > '2021-01-01' 
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },



  
                   {
    id: "3.1.8",
    title: "Set Operations - INTERSECT",
    description: "Use of INTERSECT operator in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/66ab669a321dce3b0c38d07b",
    question: `
You have a table named employees with the following columns: employeeID, firstName, lastName, birthDate, hireDate, and salary.

Write the SQL command to find employees in the employees table who have a salary greater than 60000 and were hired after 2021-01-01.


`,
    solution: `
SELECT * FROM employees WHERE salary > '60000'
INTERSECT
SELECT * FROM employees WHERE hireDate > '2021-01-01'

`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },



                     {
    id: "3.1.9",
    title: "Simple Queries - Group By and Having Clause",
    description: "Use of GROUP BY and HAVING clause in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/65e085e710bc3473457f27d2",
    question: `
Write a SQL statement to select sarea and sum(spocket) as result from stud table by grouping them by sarea having max(spocket) is less than 600

**Table stud**:
| sname    | sid | sage | sarea        | sdept        | spocket |
|----------|-----|------|--------------|--------------|---------|
| Ashwin   | 101 | 19   | anna nagar   | aeronautical | 700     |
| Bhavesh  | 102 | 18   | nungambakkam | marine        | 500     |
| Pruthvik | 103 | 20   | anna nagar   | aerospace     | 800     |
| Charith  | 104 | 20   | kilpauk      | mechanical    | 100     |

**Output**:
| sarea        | result |
|--------------|--------|
| nungambakkam | 500    |
| kilpauk      | 100    |

`,
    solution: `
SELECT sarea, SUM(spocket) AS result
FROM stud
GROUP BY sarea
HAVING SUM(spocket) < 600;

`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },





  
                     {
    id: "3.1.10",
    title: "Left Outer Join",
    description: "Use of LEFT OUTER JOIN in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/65e571378ae3ae5596301d9c",
    question: `
Consider two classes, class_A and class_B, with the following structure:

**Table: class_A**:
| id (INT, PRIMARY KEY) | name (VARCHAR(20)) | marks (INT) |
|-----------------------|--------------------|-------------|
| 101                   | Abiram             | 98          |
| 102                   | Arthi              | 88          |
| 103                   | Babu               | 92          |


**Table: class_B**:
| id (INT, PRIMARY KEY) | address (VARCHAR(20)) | age (INT) |
|-----------------------|-----------------------|-----------|
| 101                   | Trichy                | 20        |
| 102                   | Thottiam              | 22        |
| 104                   | Namakkal              | 23        |
| 105                   | Salem                 | 24        |


**Output**:
| id  | name   | marks | id  | address  | age |
|-----|--------|-------|-----|----------|-----|
| 101 | Abiram | 98    | 101 | Trichy   | 20  |
| 102 | Arthi  | 88    | 102 | Thottiam | 22  |
| 103 | Babu   | 92    |     |          |     |


`,
    solution: `
SELECT * FROM class_A
LEFT OUTER JOIN class_B ON
class_A.id = class_B.id

`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },    




                       {
    id: "3.1.11",
    title: "Right Outer Join",
    description: "Use of RIGHT OUTER JOIN in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/65e599fc8ae3ae5596305479",
    question: `
Consider two classes, class_A and class_B, with the following structure:


**Table: class_A**:
| id (INT, PRIMARY KEY) | name (VARCHAR(20)) | marks (INT) |
|-----------------------|--------------------|-------------|
| 101                   | Abiram             | 98          |
| 102                   | Arthi              | 88          |
| 103                   | Babu               | 92          |


**Table: class_B**:
| id (INT, PRIMARY KEY) | address (VARCHAR(20)) | age (INT) |
|-----------------------|-----------------------|-----------|
| 101                   | Trichy                | 20        |
| 102                   | Thottiam              | 22        |
| 104                   | Namakkal              | 23        |
| 105                   | Salem                 | 24        |

Write an SQL query to perform the RIGHT OUTER JOIN between class_A and class_B on the id column. Provide the result with columns id, name, marks, address, and age.


**Output**:
| id  | name   | marks | id  | address  | age |
|-----|--------|-------|-----|----------|-----|
| 101 | Abiram | 98    | 101 | Trichy   | 20  |
| 102 | Arthi  | 88    | 102 | Thottiam | 22  |
|     |        |       | 104 | Namakkal | 23  |
|     |        |       | 105 |  Salem   | 24  |



`,
    solution: `
select * from class_A
right outer join class_b on
class_A.id = class_B.id

`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },   
]
