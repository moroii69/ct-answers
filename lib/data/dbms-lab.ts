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






  
                       {
    id: "3.1.12",
    title: "Self Join",
    description: "Use of SELF JOIN in SQL",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9227852b5fa9227baf/67760dd727852b5fa9227bd9/677f734b25fb113d7a94a1fe",
    question: `
You are tasked with finding pairs of related items on CodeTantra. These are items that share the same category. This will help identify items within the same category that might be suitable for cross-selling.

**Table: items**:
| Column Name       | Data Type     | Constraints                                       |
|-------------------|---------------|---------------------------------------------------|
| item_id           | SERIAL        | PRIMARY KEY                                       |
| item_name         | VARCHAR(255)  | NOT NULL                                          |
| item_category_id  | INTEGER       | REFERENCES item_categories (item_category_id)     |


**Table: item_categories**
| Column Name         | Data Type     | Constraints     |
|---------------------|---------------|-----------------|
| item_category_id    | SERIAL        | PRIMARY KEY     |
| item_category_name  | VARCHAR(255)  | NOT NULL        |


**Data Snapshot for items**
| item_id | item_name  | item_category_id |
|---------|------------|------------------|
| 1       | Laptop     | 1                |
| 2       | Smartphone | 2                |
| 3       | Headphones | 2                |
| 4       | Tablet     | 1                |
| 5       | Camera     | 3                |


**Data Snapshot for item_categories**
| item_category_id | item_category_name |
|------------------|--------------------|
| 1                | Electronics         |
| 2                | Accessories         |
| 3                | Cameras             |


Write an SQL query to find pairs of related items. These pairs are items that belong to the same category. The output should include:
- The name of the first item (item_name).
- The name of the second item (related_item_name).
- The name of the category (item_category_name) they belong to.


Ensure that you do not include the same item pairing twice and that an item is not paired with itself.


**Expected Output**:
| item_name  | related_item_name | item_category_name |
|------------|-------------------|---------------------|
| Laptop     | Tablet            | Electronics         |
| Tablet     | Laptop            | Electronics         |
| Smartphone | Headphones        | Accessories         |
| Headphones | Smartphone        | Accessories         |





`,
    solution: `
SELECT 
    i1.item_name AS item_name,
    i2.item_name AS related_item_name,
    ic.item_category_name
FROM 
    items i1
JOIN 
    items i2
    ON i1.item_category_id = i2.item_category_id
    AND i1.item_id < i2.item_id
JOIN 
    item_categories ic
    ON i1.item_category_id = ic.item_category_id;


`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },
  




  
                       {
    id: "4.1.1",
    title: "SQL Basic Operations",
    description: "Perform basic SQL operations",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9827852b5fa9227bb1/67760ddb27852b5fa9227bdb/6796e0970d345328c20a8218",
    question: `
You were given a table named orders with following details:

![Cat Image](https://i.postimg.cc/zB5NfrV9/2025-06-03-10-07-41-Course.png)



Perform below SQL queries using PostgreSql:



Query 1: Retrieve all order details where the customer_id is 1
- Columns to retrieve: All columns from the orders table for a specific customer_id of 1.

Query 2: Retrieve all distinct product names available in the orders table.
- Columns to retrieve: product_name.

Query 3: Get the product name and highest sold product from a given supplier_id (in this case, supplier_id 1) as total_sold. The result should be ordered in descending order based on total_sold, and only the top product should be selected.
- Columns to retrieve: product_name, total_sold (calculated as the sum of quantity), filtered by supplier_id = 1.

Query 4: Retrieve the product_category and a comma-separated list of product_name as products, grouping by product_category.
- Columns to retrieve: product_category, a comma-separated list of product_name (using STRING_AGG function).

Query 5: List the products whose unit_price is greater than the average price of all products.
- Columns to retrieve: product_name, unit_price.

Query 6: List all details of the orders table.
- Columns to retrieve: All columns from the orders table.

Query 7: Retrieve distinct product_name for products sold in the year 1997.
- Columns to retrieve: product_name.

Query 8: Retrieve all details of an order where the order_id is 1.
- Columns to retrieve: All columns from the orders table for a specific order_id of 1.

`,
    solution: `
-- -- Q1
SELECT *
FROM orders
WHERE customer_id = 1;


-- -- Q2
SELECT DISTINCT product_name
FROM orders;


-- -- Q3
SELECT product_name, SUM(quantity) AS total_sold
FROM orders
WHERE supplier_id = 1
GROUP BY product_name
ORDER BY total_sold DESC
LIMIT 1;


-- -- Q4
SELECT product_category, STRING_AGG(product_name, ', ') AS products
FROM orders
GROUP by product_category;


-- -- Q5
SELECT product_name, unit_price
FROM orders
WHERE unit_price > (SELECT AVG(unit_price) FROM orders);


-- -- -- Q6
SELECT *
FROM orders;


-- -- -- Q7 
SELECT DISTINCT product_name
FROM orders
WHERE (extract(year FROM order_date)) = 1997;


-- -- -- Q8 
SELECT *
FROM orders
WHERE order_id = 1; 

`,
    language: "sql",
    testCasesPassed: 8,
    totalTestCases: 8,
    totalHiddenTestCases: 0,
  },   





                        {
    id: "4.1.2",
    title: "Full Outer Join - Police Department",
    description: "Use of FULL OUTER JOIN in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9827852b5fa9227bb1/67760ddb27852b5fa9227bdb/6781f641fa36c0414371cada",
    question: `
Imagine you're working for a Police Department that maintains two separate databases:

- **officers** – This table holds details of police officers, including their name and rank.
- **assignments** – This table contains information about the police precinct (area) each officer is assigned to and their years of service.


The department wants a full outer join of the two tables to create a comprehensive list of all officers and their corresponding assignments (precinct and years of service). If an officer has no assignment, or a precinct has no officer assigned, the result should still include them with NULL values where the data is missing.

**Table: officers**:
| officer_id | officer_name | rank      |
|------------|--------------|-----------|
| 101        | John Smith   | Sergeant  |
| 102        | Emily Davis  | Detective |
| 103        | Michael Lee  | Constable |


**Table: assignments**:
| precinct_id | precinct_name | years_of_service |
|-------------|----------------|------------------|
| 101         | Downtown       | 5                |
| 102         | East Side      | 3                |
| 104         | West End       | 4                |
| 105         | North Park     | 2                |


**Expected Output**:
| officer_id | officer_name | rank      | precinct_id | precinct_name | years_of_service |
|------------|--------------|-----------|-------------|----------------|------------------|
| 101        | John Smith   | Sergeant  | 101         | Downtown       | 5                |
| 102        | Emily Davis  | Detective | 102         | East Side      | 3                |
| 103        | Michael Lee  | Constable | NULL        | NULL           | NULL             |
| NULL       | NULL         | NULL      | 104         | West End       | 4                |
| NULL       | NULL         | NULL      | 105         | North Park     | 2                |



`,
    solution: `
SELECT
    officers.officer_id,
    officers.officer_name,
    officers.rank,
    assignments.precinct_id,
    assignments.precinct_name,
    assignments.years_of_service
FROM officers
FULL OUTER JOIN assignments
    ON officers.officer_id = assignments.precinct_id;

`,
    language: "sql",
    testCasesPassed: 4,
    totalTestCases: 4,
    totalHiddenTestCases: 0,
  },





                         {
    id: "4.1.3",
    title: "Natural Join",
    description: "Use of NATURAL JOIN in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9827852b5fa9227bb1/67760ddb27852b5fa9227bdb/6781f692fa36c0414371cb79",
    question: `
Imagine you are working for a school where you manage records of students from two different classes, Class A and Class B. Both classes have their own database tables that store different kinds of information. Class A contains details about the students' names and marks, while Class B contains their personal details such as address and age. Now, the school administration wants to generate a report that combines the academic performance (marks) of students with their personal details (address and age) for those students who belong to both tables.



Your task is to help the administration by writing an SQL query that will produce a combined report with the following details:
- id (Student ID)
- name (Student Name)
- Marks (Marks scored by the student)
- address (Student's address)
- age (Student's age)


However, note that only students who appear in both Class A and Class B should be included in the report. This scenario is particularly relevant for generating a detailed report for the upcoming school event where the students' names, marks, addresses, and ages will be announced.


**Table: class_A**:
| id  | name    | Marks |
|------|---------|-------|
| 101  | Abirami | 98    |
| 102  | Arthi   | 88    |
| 103  | Babu    | 92    |


**Table: class_B**:
| id  | address   | age |
|------|-----------|-----|
| 101  | Trichy    | 20  |
| 102  | Thottiam  | 22  |
| 104  | Namakkal  | 23  |
| 105  | Salem     | 24  |


Write an SQL query to calculate the natural join of the two classes (class_A and class_B) based on the common column "id." Provide the result with columns id, name, marks, address, and age.

**Output**:
| id  | name    | Marks | address  | age |
|------|---------|-------|----------|-----|
| 101  | Abirami | 98    | Trichy   | 20  |
| 102  | Arthi   | 88    | Thottiam | 22  |



`,
    solution: `
SELECT 
    class_A.id,
    class_A.name,
    class_A.Marks,
    class_B.address,
    class_B.age
FROM class_A
NATURAL JOIN class_B;


`,
    language: "sql",
    testCasesPassed: 4,
    totalTestCases: 4,
    totalHiddenTestCases: 0,
  },




                           {
    id: "4.1.4",
    title: "Cross Join - Satellite Prevention",
    description: "Use of CROSS JOIN in SQL",
    difficulty: "Easy",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9827852b5fa9227bb1/67760ddb27852b5fa9227bdb/6781f6a8fa36c0414371cba2b79",
    question: `
You are tasked with analyzing satellite communication systems and the performance of their signals across different regions. You have access to two tables, satellite_system and communication_data, which store information about various satellites and their corresponding communication data.


**Table: satellite_system**:
| id  | satellite_name | frequency |
|------|----------------|-----------|
| 101  | GalaxyX        | 98        |
| 102  | StarLink       | 88        |
| 103  | ComSat         | 92        |


**Table: communication_data**:
| id  | location | signal_strength |
|------|----------|-----------------|
| 101  | Trichy   | 100             |
| 102  | Thottiam | 95              |
| 104  | Namakkal | 85              |
| 105  | Salem    | 80              |


Write an SQL query to perform the following tasks:

- For each satellite system in the satellite_system table, match it with the corresponding communication data in the communication_data table by id.
- The final output should display the id, satellite_name, frequency from the satellite_system table, and the location, signal_strength from the communication_data table.
- The results should include all the regions (location) where the signal data is available, even if the satellite systems are not performing well in some regions.

**Expected Output**:
| id  | satellite_name | frequency | location  | signal_strength |
|-----|----------------|-----------|-----------|-----------------|
| 101 | GalaxyX        | 98        | Trichy    | 100             |
| 101 | GalaxyX        | 98        | Thottiam  | 95              |
| 101 | Galaxy         | 98        | Namakkal  | 85              |
| 101 | Galaxy         | 98        | Salem     | 80              |
| 102 | StarLink       | 88        | Trichy    | 100             |
| 102 | StarLink       | 88        | Thottiam  | 95              |
| 102 | StarLink       | 88        | Namakkal  | 85              |
| 102 | StarLink       | 88        | Salem     | 80              |
| 103 | ComSat         | 92        | Trichy    | 100             |
| 103 | ComSat         | 92        | Thottiam  | 95              |
| 103 | ComSat         | 92        | Namakkal  | 85              |
| 103 | ComSat         | 92        | Salem     | 80              |


`,
    solution: `
SELECT 
    satellite_system.id,
    satellite_system.satellite_name,
    satellite_system.frequency,
    communication_data.location,
    communication_data.signal_strength
FROM satellite_system
CROSS JOIN communication_data;



`,
    language: "sql",
    testCasesPassed: 4,
    totalTestCases: 4,
    totalHiddenTestCases: 0,
  },


  

                           {
    id: "4.1.5",
    title: "Nested Queries - 1",
    description: "Use of Nested Queries in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9827852b5fa9227bb1/67760ddb27852b5fa9227bdb/65eaad7baf6055302fcf8750",
    question: `
Write a SQL statement to select sname from the table sstud1 that is also present in sstud2 by using a nested query.

**Table sstud1**:
| sname  | place   |
|--------|---------|
| prajan | chennai |
| anand  | chennai |
| kumar  | chennai |
| ravi   | chennai |

**Table sstud2**:
| sname  | dept | marks |
|--------|------|-------|
| prajan | cse  | 700   |
| anand  | it   | 650   |
| vasu   | cse  | 680   |
| ravi   | it   | 600   |


**Output**:
| sname  |
|--------|
| prajan |
| anand  |
| ravi   |




`,
    solution: `
SELECT sname
FROM sstud1
WHERE sname IN (SELECT sname FROM sstud2);
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },



                             {
    id: "4.1.6",
    title: "Nested Queries - 2",
    description: "Use of Nested Queries in SQL",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9827852b5fa9227bb1/67760ddb27852b5fa9227bdb/65eab06daf6055302fcf897e",
    question: `


Write a SQL statement to select sname from the table sstud1 that is not present in sstud2 by using a nested query.


**Table sstud1**:
| sname  | place   |
|--------|---------|
| prajan | chennai |
| anand  | chennai |
| kumar  | chennai |
| ravi   | chennai |

**Table sstud2**:
| sname  | dept | marks |
|--------|------|-------|
| prajan | cse  | 700   |
| anand  | it   | 650   |
| vasu   | cse  | 680   |
| ravi   | it   | 600   |


**Output**:
| sname  |
|--------|
| kumar   |




`,
    solution: `
SELECT sname
FROM sstud1
WHERE sname NOT IN (SELECT sname FROM sstud2);
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,
  },



  
                             {
    id: "5.1.1",
    title: "Swap Two Numbers",
    description: "Write a SQL query to swap two numbers",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/66a0b8e8fef0284825ff3c4a",
    question: `
You are required to create a pgSQL function named **swap_numbers**. This function should take two integer parameters, **num1** and **num2**, which represent the integers to be swapped. The function should swap the values of these two integers and return the swapped values in a table format. The result should be a table with two columns: **swapped_num1**, which is the new value of the first integer after swapping, and **swapped_num2**, which is the new value of the second integer after swapping.




`,
    solution: `
CREATE OR REPLACE FUNCTION swap_numbers(num1 INT, num2 INT)
RETURNS TABLE(swapped_num1 INT, swapped_num2 INT) as $$
BEGIN
	RETURN QUERY
	SELECT num2, num1;
END;
$$ LANGUAGE plpgsql;
`,
    language: "sql",
    testCasesPassed: 4,
    totalTestCases: 4,
    totalHiddenTestCases: 0,
  },



    
                             {
    id: "5.1.2",
    title: "Largest of Three Numbers",
    description: "Write a SQL query to find the largest of three numbers",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/66a0cf64fef0284825ff555a",
    question: `
You are required to create a pgSQL function named **find_largest_number**. This function should take three integer parameters, **num1**, **num2**, and **num3**, and return the largest of these three integers.


`,
    solution: `
create or replace function find_largest_number(num1 int, num2 int, num3 int)
returns int as $$
declare 
	largest int;
begin
	largest := greatest(num1, num2, num3);
	return largest;
END;
$$ language plpgsql;
`,
    language: "sql",
    testCasesPassed: 4,
    totalTestCases: 4,
    totalHiddenTestCases: 0,
  },



                              {
    id: "5.1.3",
    title: "Average of Subjects",
    description: "Write a SQL query to find average and grade subjects",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/67935cab21a60e0acd06333e",
    question: `

You are required to implement a PL/pgSQL program that calculates the grade based on the average of marks obtained in 6 subjects. The output should return a grade based on the following criteria:
- **Grade A**: If the average marks are greater than or equal to 90.
- **Grade B**: If the average marks are between 80 (inclusive) and 90 (exclusive).
- **Grade C**: If the average marks are between 70 (inclusive) and 80 (exclusive).
- **Grade D**: If the average marks are between 60 (inclusive) and 70 (exclusive).
- **Grade F**: If the average marks are below 60.


Requirements:
- PL/pgSQL function named calculate_grade that takes the marks of 6 subjects as input (each subject being an integer) is already provided in the editor.
- You need to write the required the logic such that the function should return a single character grade (A, B, C, D, or F) based on the average of the marks.

The formula for calculating the grade is:
- Compdute the total marks by adding the marks of all 6 subjects.
- Calculate the average by dividing the total marks by 6.
- Determine the grade based on the computed average using the criteria listed above.


`,
    solution: `
CREATE OR REPLACE FUNCTION calculate_grade(
    subject1 INTEGER, subject2 INTEGER, subject3 INTEGER, 
    subject4 INTEGER, subject5 INTEGER, subject6 INTEGER
)
RETURNS TEXT AS $$
DECLARE
    total INTEGER;
    average DECIMAL;
    grade CHAR;
BEGIN
    -- Calculate total marks
    total := subject1 + subject2 + subject3 + subject4 + subject5 + subject6;

    -- Calculate average marks
    average := total / 6.0;

    -- Determine the grade based on average
    IF average >= 90 THEN
        grade := 'A';
    ELSIF average >= 80 THEN
        grade := 'B';
    ELSIF average >= 70 THEN
        grade := 'C';
    ELSIF average >= 60 THEN
        grade := 'D';
    ELSE
        grade := 'F';
    END IF;

    -- Return the grade
    RETURN grade;
END $$ LANGUAGE plpgsql;


`,
    language: "sql",
    testCasesPassed: 4,
    totalTestCases: 4,
    totalHiddenTestCases: 0,
  },



                               {
    id: "5.1.4",
    title: "Sum of Digits",
    description: "Write a SQL function to calculate the sum of digits of a integer",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/679365bc21a60e0acd064811",
    question: `
In this task, you are required to write a SQL function that calculates the sum of the digits of a given integer. The function should take a single integer as input and return the sum of its digits.

**Function Signature**:
\`\`\`
CREATE OR REPLACE FUNCTION sum_of_digits(v_num INTEGER)
RETURNS INTEGER AS $$
\`\`\`

**Steps**:

- Define the function sum_of_digits which will take an integer as input.
- Extract each digit of the number using modulus (%) and integer division (/).
- Add the digits together.
- Return the sum of digits.

`,
    solution: `
CREATE OR REPLACE FUNCTION sum_of_digits(v_num INTEGER)
RETURNS INTEGER AS $$
DECLARE
    digit INTEGER;
    sum INTEGER := 0;
    num INTEGER := ABS(v_num);
BEGIN
    WHILE num > 0 LOOP
        digit := num % 10;
        sum := sum + digit;
        num := num / 10;
    END LOOP;

    RETURN sum;
END $$ LANGUAGE plpgsql;


`,
    language: "sql",
    testCasesPassed: 3,
    totalTestCases: 3,
    totalHiddenTestCases: 0,
  },




                                 {
    id: "5.1.5",
    title: "Reversing a Number",
    description: "Write a pgSQL function to reverse a given number",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/668e60ae961c047cbe6ec303",
    question: `
Write a pgSQL function to reverse a given integer number.

Create a function named reverse_number that takes an integer parameter n and returns the reversed number as an integer.

**Function Signature**:
\`\`\`
CREATE OR REPLACE FUNCTION reverse_number(n INTEGER)
RETURNS INTEGER AS $$
\`\`\`

`,
    solution: `
CREATE OR REPLACE FUNCTION reverse_number(n INTEGER)
RETURNS INTEGER AS $$
DECLARE
	reversed_str TEXT := '';
	digit CHAR;
	n_str TEXT;
BEGIN
	n_str := n::TEXT;

	FOR i IN REVERSE LENGTH(n_str)..1 LOOP
		reversed_str := reversed_str || SUBSTRING(n_str, i, 1);
	END LOOP;


	RETURN reversed_str::INTEGER;
END;
$$ LANGUAGE plpgsql;


`,
    language: "sql",
    testCasesPassed: 6,
    totalTestCases: 6,
    totalHiddenTestCases: 0,
  },



  
                                 {
    id: "5.1.6",
    title: "Prime Number",
    description: "Write a pgSQL function to check if a number is prime.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/679367c121a60e0acd064d8d",
    question: `

In this task, you are required to write a SQL function that checks whether a given number is prime. A prime number is a number greater than 1 that has no divisors other than 1 and itself.

Function Signature:
\`\`\`
CREATE OR REPLACE FUNCTION is_prime(v_num INTEGER)
RETURNS TEXT AS $$
\`\`\`  

**Steps**:

- Define the function is_prime which will take an integer as input.
- Always assume the number is greater than 2
- Check if the number is divisible by any integer from 2 to the square root of the number.
- If no divisors are found, return 'Prime', else return 'Not Prime'.

`,
    solution: `
CREATE OR REPLACE FUNCTION is_prime(v_num INTEGER)
RETURNS TEXT AS $$
DECLARE
	i INTEGER;
	max_limit INTEGER;
BEGIN

	max_limit := FLOOR(SQRT(v_num));

	FOR i IN 2..max_limit LOOP
		IF v_num % i = 0 THEN
			RETURN 'Not Prime';
		END IF;
	END LOOP;

	RETURN 'Prime';
END;
$$ LANGUAGE plpgsql;


`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 1,
    totalHiddenTestCases: 1,

  },




                                   {
    id: "5.1.7",
    title: "Fact Function to find Factorial",
    description: "Write a pgSQL function to find the factorial of a number.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760d9f27852b5fa9227bb7/67760ddf27852b5fa9227bde/65eed1127af14534324027e8d",
    question: `

Ceate a PL/SQL function fact that calculates and returns the factorial of an integer

**Function Signature**:-
\`\`\`
CREATE OR REPLACE FUNCTION fact(n INTEGER)
RETURNS INTEGER AS $$
\`\`\`

**Steps**:

- Define the function fact which will take an integer n as input.
- Initialize a variable b to store the result of the factorial, and set it to 1 initially.
- Use a loop to multiply b by each integer from 1 to n.
- After the loop completes, return the calculated factorial as the output of the function.


**Expected Output**:

- When the function is called with fact(5), it should return 120
- When the function is called with fact(0), it should return 1.
`,
    solution: `
CREATE OR REPLACE FUNCTION fact(n INTEGER)
RETURNS INTEGER AS $$
DECLARE
	b INTEGER := 1;
	i INTEGER;
BEGIN
	IF n < 0 THEN
		RAISE EXCEPTION 'Factorial is not defined for negative numbers';
	END IF;

	FOR i IN 1..n LOOP
		b := b * i;
	END LOOP;

	RETURN b;
END;

$$ LANGUAGE plpgsql;


`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 4,
    totalHiddenTestCases: 4,

  },



                                     {
    id: "6.1.1",
    title: "IN, OUT AND INOUT Parameters",
    description: "Write a pgSQL function to demonstrate IN, OUT and INOUT parameters",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760da527852b5fa9227bbb/67760de227852b5fa9227be0/66a09882fef0284825ff1d32",
    question: `

Write a stored procedure named add_numbers that demonstrates the use of IN, OUT, and INOUT parameters. The procedure should perform the following operations:
1. Accept three parameters:
- a (integer) as an IN parameter.
- b (integer) as an IN parameter.
- initial_result (integer) as an INOUT parameter.

2. Calculate the sum of the a and b parameters and update initial_result with this sum.

3. Output the final sum through an OUT parameter named final_result.



Note: A partial code has been given to you in the editor, complete the required code.

`,
    solution: `
CREATE OR REPLACE PROCEDURE add_numbers(
     
     
       IN a INT,                -- Input parameter for the first integer
       IN b INT,                -- Input parameter for the second integer
       INOUT initial_result INT, -- INOUT parameter to receive and update the result
       INOUT final_result INT     -- Output parameter to return the final sum

)
LANGUAGE plpgsql
AS $$
BEGIN
	initial_result := a+b;
	final_result := initial_result;
END;
$$;

`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,

  },





                                       {
    id: "6.1.2",
    title: "Stored Procedure - Retrieving Most Recent Order Details for a Customer",
    description: "Write a stored procedure to retrieve the most recent order details for a customer",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760da527852b5fa9227bbb/67760de227852b5fa9227be0/66a09882fef0284825ff1d32",
    question: `

You are tasked with creating a stored procedure get_order_details_by_customer that retrieves the order details for a given customer from the orders table. The procedure should accept a customer ID as an input parameter and return the following details for the most recent order associated with that customer:
- order_id
- order_date
- required_date
- shipped_date


Stored Procedure "get_order_details_by_customer" Definition: 

Input Parameter: p_customer_id (of type INT): Customer ID for which the order details need to be retrieved.


**Functionality**:

- The stored procedure will retrieve the most recent order based on the order_date for the given p_customer ID.
- The procedure will raise a notice with the message: "Fetching order details for customer ID: [p_customer_id]" when executed.
- The order details should be fetched in descending order of order_date (i.e., the most recent order first), and only one row should be fetched.
- In the query, reference the customer_id of the table to the procedure's input parameter as p_customer_id to correctly fetch the order details for the specified customer.


The procedure should return the details for the most recent order of the specified customer in the following format:

- order_id (of type INT): The ID of the most recent order.
- order_date (of type DATE): The date the order was placed.
- required_date (of type DATE): The date the order is required by.
- shipped_date (of type DATE): The date the order was shipped.
`,
    solution: `
CREATE OR REPLACE PROCEDURE get_order_details_by_customer(
    IN p_customer_id INT,
    OUT order_id INT,
    OUT order_date DATE,
    OUT required_date DATE,
    OUT shipped_date DATE
)
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE NOTICE 'Fetching order details for customer ID: %', p_customer_id;

    SELECT 
        o.order_id,
        o.order_date,
        o.required_date,
        o.shipped_date
    INTO 
        order_id,
        order_date,
        required_date,
        shipped_date
    FROM 
        orders o
    WHERE 
        o.customer_id = p_customer_id
    ORDER BY 
        o.order_date DESC
    LIMIT 1;
END;
$$;


`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    totalHiddenTestCases: 0,

  },



  
                                       {
    id: "6.1.3",
    title: "Stored Procedures - Calculating Total Ordered Quantity for a Given Product",
    description: "Write a stored procedure to calculate the total ordered quantity for a specific product.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760da527852b5fa9227bbb/67760de227852b5fa9227be0/67a01032e02f6d031c14052d",
    question: `

You are provided with a table product_orders, which contains product names and their ordered quantities. Your task is to create a stored procedure that calculates the total quantity ordered for a given product.



**Instructions**:

The **product_orders** table has already been created and populated with sample data. You do not need to create or insert data.
Implement a stored procedure named get_total_quantity, which:

- Accepts p_product_name (VARCHAR) as an input parameter.
- Returns the total quantity ordered for the given product using p_total_quantity (INT) as an output parameter.
- Uses COALESCE(SUM(quantity), 0) to handle cases where a product might not exist.

Raises a NOTICE message in the format:
\`\`\`
NOTICE: Total Quantity for <product_name>: <total_quantity>
\`\`\`

**Table product_orders:**

| Column Name | Data Type |
|-------------|-----------|
| product_name | VARCHAR(255)   |
| quantity     | INT       | 
`,
    solution: `
CREATE OR REPLACE PROCEDURE get_total_quantity(
	IN p_product_name VARCHAR,
	OUT p_total_quantity INT
)

LANGUAGE plpgsql
AS $$
BEGIN
	SELECT COALESCE(SUM(quantity), 0)
	INTO p_total_quantity
	FROM product_orders
	WHERE product_name = p_product_name;TRIM(LOWER(product_name)) = TRIP (LOWER(p_product_name));

	RAISE NOTICE 'Total Quantity for %: %', p_product_name, p_total_quantity;
END;
$$;
`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    totalHiddenTestCases: 0,

  },




                                         {
    id: "6.1.4",
    title: "Stored Procedure - Retrieving Top 10 Products Based on Highest Unit Price",
    description: "Write a stored procedure to retrieve the top 10 products based on the highest unit price.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/67760da527852b5fa9227bbb/67760de227852b5fa9227be0/67a0147de02f6d031c14068b",
    question: `

You are required to create a stored procedure called get_top_products that retrieves the top 10 products with the highest unit prices from the products table and raises a NOTICE for each of these products displaying their name and price.



Use the products table, which has the following structure:
\`\`\`
CREATE TABLE products (
  product_name VARCHAR(100),
  unit_price NUMERIC
);
\`\`\`

**Steps**:
- Create the Procedure: Define a procedure named get_top_products using the CREATE OR REPLACE PROCEDURE statement.
- Declare Local Variables: Declare two local variables:
product_name (type VARCHAR): To store the name of the product.unit_price (type NUMERIC): To store the unit price of the product.
- Query the Top Products: Use a FOR loop to iterate over the results of a query that fetches the top 10 products ordered by unit_price in descending order. The query should select the product_name and unit_price from the products table.
- Raise Notice for Each Product: Inside the loop, use the RAISE NOTICE statement to print the product_name and its corresponding unit_price for each of the top 10 products.  The RAISE NOTICE statement outputs information to the log or console, displaying messages formatted as:
\`\`\`
RAISE NOTICE Product: <product_name>, Price: <unit_price>
\`\`\`

- **Looping Logic**: The FOR loop will automatically manage the iteration over the results of the query, ensuring that the procedure handles only the top 10 products with the highest prices.


`,
    solution: `
CREATE OR REPLACE PROCEDURE get_top_products()
LANGUAGE plpgsql
AS $$
DECLARE
	v_product_name VARCHAR(100);
	v_unit_price NUMERIC;
BEGIN
	FOR v_product_name, v_unit_price IN
		SELECT product_name, unit_price
		FROM products
		ORDER BY unit_price DESC
		LIMIT 10
	LOOP
		RAISE NOTICE 'Product: %, Price: %', v_product_name, v_unit_price;
	END LOOP;
END;
$$;
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    totalHiddenTestCases: 0,

  },

{
      id: "7.1.1",
    title: "Views - Display Products",
    description: "Write a PostgreSQL view.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/679eeab8a4ac7127a5521e9e/679eead1a4ac7127a5521ea9/67a143dedf84d402881537cf",
    question: `
You are working with a PostgreSQL database that contains a table called products, which stores details about various products in the inventory. Your task is to create a view named available_products that retrieves only the products that are currently in stock (i.e., products with a stock quantity greater than zero).

**Requirements**:
- Create a view named available_products that selects the name and stock_qty of products where stock_qty > 0.

| Column Name | Data Type     | Constraints   |
|-------------|---------------|---------------|
| product_id  | SERIAL        | PRIMARY KEY   |
| name        | VARCHAR(255)  | NOT NULL      |
| stock_qty   | INT           | NOT NULL      |


**Expected Output**: If select query is performed then the output should be displayed as below for the created view.
| name   | stock_qty |
|--------|-----------|
| Laptop | 10        |
| Chair  | 5         |


`,
    solution: `
CREATE VIEW available_products AS
SELECT name, stock_qty
FROM products
WHERE stock_qty > 0;

`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    totalHiddenTestCases: 0,

  },


  {
      id: "7.1.2",
    title: "Views - Display Products by Category",
    description: "Write a PostgreSQL view that displays products by category.",
    difficulty: "Medium",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/679eeab8a4ac7127a5521e9e/679eead1a4ac7127a5521ea9/67a14944df84d4028815380c",
    question: `
You are working with a PostgreSQL database that contains a table called products, which stores details about various products in the inventory. Your task is to create a view named products_by_category that retrieves products grouped by their category.


**Requirements**:
- Create a view named products_by_category that selects category, name, and stock_qty from the products table.

| Column Name | Data Type     | Constraints   |
|-------------|---------------|---------------|
| product_id  | SERIAL        | PRIMARY KEY   |
| name        | VARCHAR(255)  | NOT NULL      |
| category    | VARCHAR(255)  | NOT NULL      |
| stock_qty   | INT           | NOT NULL      |


**Expected Output**: If select query is performed then the output should be displayed as below for the created view.

| category    | name   | stock_qty |
|-------------|--------|-----------|
| Electronics | Laptop | 10        |
| Furniture   | Chair  | 5         |



`,
    solution: `
CREATE VIEW products_by_category AS
SELECT category, name, stock_qty
FROM products;

`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    totalHiddenTestCases: 0,

  },


    {
      id: "7.1.3",
    title: "Views - 3",
    description: "Create a view named invoices that retrieves all the relevant details from these tables for each order..",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/679eeab8a4ac7127a5521e9e/679eead1a4ac7127a5521ea9/67a14e1bdf84d4028815384a",
    question: `
You are working with a PostgreSQL database that contains three tables: orders, customers, and shippers. Your task is to create a view named invoices that retrieves all the relevant details from these tables for each order.



**Requirements**: Write an SQL query to create a view named invoices that retrieves order details by performing joins between the orders, customers, and shippers tables using customer_id and shipper_id as foreign keys to display the following columns:

- order_id
- customer_name (alias for customers.name)
- customer_email (alias for customers.email)
- customer_phone (alias for customers.phone)
- shipper_name (alias for shippers.name)
- shipper_contact (alias for shippers.contact)
- order_date
- total_amount


The result should display all the columns listed above by joining the relevant data from the orders, customers, and shippers tables. You should also ensure that each column is correctly aliased for clarity.


Table Schemas:

**orders Table**

| Column Name  | Data Type     | Constraints   |
|--------------|---------------|----------------|
| order_id     | SERIAL        | PRIMARY KEY    |
| customer_id  | INT           | NOT NULL       |
| shipper_id   | INT           | NOT NULL       |
| order_date   | DATE          | NOT NULL       |
| total_amount | DECIMAL(10,2) | NOT NULL       |



**customers Table**
| Column Name | Data Type     | Constraints   |
|-------------|---------------|----------------|
| customer_id | SERIAL        | PRIMARY KEY    |
| name        | VARCHAR(255)  | NOT NULL       |
| email       | VARCHAR(255)  | UNIQUE         |
| phone       | VARCHAR(50)   | NOT NULL       |


**shippers Table**
| Column Name | Data Type     | Constraints   |
|-------------|---------------|---------------|
| shipper_id  | SERIAL        | PRIMARY KEY   |
| name        | VARCHAR(255)  | NOT NULL      |
| contact     | VARCHAR(50)   | NOT NULL      |



**Expected Output**:
The view should display all columns from these tables if select operation is performed as below:



![Output](https://i.ibb.co/Dg15n0Lh/ssssss.png)

`,
    solution: `
CREATE VIEW invoices AS
SELECT
	o.order_id,
	c.name AS customer_name,
	c.email AS customer_email,
	c.phone AS customer_phone,
	s.name AS shipper_name,
	s.contact AS shipper_contact,
	o.order_date,
	o.total_amount
FROM 
	orders o
JOIN
	customers c ON o.customer_id = c.customer_id
JOIN
	shippers s ON o.shipper_id = s.shipper_id;

`,
    language: "sql",
    testCasesPassed: 2,
    totalTestCases: 2,
    totalHiddenTestCases: 0,

  },



      {
      id: "8.1.1",
    title: "Trigger after INSERT",
    description: "Create a trigger that updates the product quantity after a sale is inserted.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/679eeabfa4ac7127a5521ea1/679eead7a4ac7127a5521eac/66a231c5fa5cb20ba3bb9650",
    question: `
You are tasked with managing a retail company's SQL database. The company uses a database to track product inventory and sales.

You need to create a trigger to ensure that the inventory levels are updated correctly whenever a new sale is inserted.

**Table Definitions and Data:**

products:
| Column Name | Data Type     | Constraints              |
|-------------|---------------|---------------------------|
| productid   | INT           | PRIMARY KEY              |
| productname | VARCHAR       | NOT NULL                 |
| category    | VARCHAR       | -                        |
| price       | DECIMAL(10,2) | CHECK (price > 0)        |
| quantity    | INT           | DEFAULT 0                |


| productID | productName | category    | price   | quantity |
|-----------|-------------|-------------|---------|----------|
| 1         | Laptop      | Electronics | 1000.00 | 50       |
| 2         | Smartphone  | Electronics | 500.00  | 100      |
| 3         | Tablet      | Electronics | 300.00  | 75       |


sales:
| Column Name  | Data Type | Constraints                    |
|--------------|-----------|-------------------------------|
| saleid       | INT       | PRIMARY KEY                   |
| productid    | INT       | REFERENCES products(productid) |
| saledate     | DATE      | -                             |
| quantitysold | INT       | CHECK (quantitysold > 0)      |


Task
1. Create a Trigger Function:
Write a function named update_product_quantity that Updates the quantity in the products table by subtracting the quantitySold from the existing quantity whenever a new sale is inserted.

2. Create a Trigger: Define a trigger named after_sale_insert that:
- Fires after an insert operation on the sales table.
- Executes the update_product_quantity function to update the products table.

`,
    solution: `
CREATE OR REPLACE FUNCTION update_product_quantity()
RETURNS TRIGGER AS $$
BEGIN
	UPDATE products
	SET quantity = quantity - NEW.quantitysold
	WHERE productid = NEW.productid;

	return NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_sale_insert
AFTER INSERT ON sales
FOR EACH ROW
EXECUTE FUNCTION update_product_quantity()
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,

  },



        {
      id: "8.1.2",
    title: "Trigger after DELETE",
    description: "Create a trigger that updates the product quantity after a sale is deleted.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/679eeabfa4ac7127a5521ea1/679eead7a4ac7127a5521eac/66a34a63270ebe2eabdc1398",
    question: `
You are tasked with managing a retail company's SQL database. The company uses a database to track product inventory and sales.



You need to create a trigger to ensure that the inventory levels are updated correctly whenever a sale is deleted.


Table Definitions and Data:
products:
| Column Name | Data Type     | Constraints          |
|-------------|---------------|---------------------|
| productid   | INT           | PRIMARY KEY         |
| productname | VARCHAR       | NOT NULL            |
| category    | VARCHAR       | -                   |
| price       | DECIMAL(10,2) | CHECK (price > 0)   |
| quantity    | INT           | DEFAULT 0           |

| productID | productName | category    | price   | quantity |
|-----------|-------------|-------------|---------|----------|
| 1         | Laptop      | Electronics | 1000.00 | 50       |
| 2         | Smartphone  | Electronics | 500.00  | 100      |
| 3         | Tablet      | Electronics | 300.00  | 75       |


sales:

| Column Name  | Data Type | Constraints                      |
|--------------|-----------|---------------------------------|
| saleid       | INT       | PRIMARY KEY                     |
| productid    | INT       | REFERENCES products(productid)  |
| saledate     | DATE      | -                               |
| quantitysold | INT       | CHECK (quantitysold > 0)        |


| saleid | productid | saledate   | quantitysold |
|--------|-----------|------------|--------------|
| 1      | 1         | 2024-07-01 | 5            |
| 2      | 2         | 2024-07-02 | 10           |
| 3      | 3         | 2024-07-03 | 8            |



Task
1. Create a Trigger Function: Write a function named restore_product_quantity that:
- Updates the quantity in the products table by adding the quantitysold to the existing quantity whenever a sale is deleted.


2. Create a Trigger: Define a trigger named after_sale_delete that:
- Fires after a delete operation on the sales table.
- Executes the restore_product_quantity function to update the products table.

`,
    solution: `
CREATE OR REPLACE FUNCTION restore_product_quantity() 
RETURNS TRIGGER AS $$
BEGIN
	UPDATE products
	SET quantity = quantity + OLD.quantitysold
	WHERE productid = OLD.productid;

	RETURN NULL;
END;

$$LANGUAGE plpgsql;

CREATE TRIGGER after_sales_delete
AFTER DELETE ON sales
FOR EACH ROW
EXECUTE FUNCTION restore_product_quantity()
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,

  },

          {
      id: "8.1.3",
    title: "Trigger after UPDATE",
    description: "Create a trigger that updates the product quantity after a sale is updated.",
    difficulty: "Hard",
    subject: "dbms-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=6770dcc1bc55a071e3955736#/contents/679eeabfa4ac7127a5521ea1/679eead7a4ac7127a5521eac/66a359bc270ebe2eabdc2171",
    question: `
You are tasked with managing a retail company's SQL database. The company uses a database to track product inventory and sales.



You need to create a trigger to ensure that the inventory levels are updated correctly whenever a sale is updated.


Table Definitions and Data:
products:
| Column Name | Data Type     | Constraints          |
|-------------|---------------|---------------------|
| productid   | INT           | PRIMARY KEY         |
| productname | VARCHAR       | NOT NULL            |
| category    | VARCHAR       | -                   |
| price       | DECIMAL(10,2) | CHECK (price > 0)   |
| quantity    | INT           | DEFAULT 0           |

| productID | productName | category    | price   | quantity |
|-----------|-------------|-------------|---------|----------|
| 1         | Laptop      | Electronics | 1000.00 | 50       |
| 2         | Smartphone  | Electronics | 500.00  | 100      |
| 3         | Tablet      | Electronics | 300.00  | 75       |


sales:

| Column Name  | Data Type | Constraints                      |
|--------------|-----------|---------------------------------|
| saleid       | INT       | PRIMARY KEY                     |
| productid    | INT       | REFERENCES products(productid)  |
| saledate     | DATE      | -                               |
| quantitysold | INT       | CHECK (quantitysold > 0)        |


| saleid | productid | saledate   | quantitysold |
|--------|-----------|------------|--------------|
| 1      | 1         | 2024-07-01 | 5            |
| 2      | 2         | 2024-07-02 | 10           |
| 3      | 3         | 2024-07-03 | 8            |



Task
1. Create a Trigger Function: Write a function named update_product_quantity that:

- Updates the quantity in the products table by adjusting the quantity(quantity = quantity + old quantitysold - new quantitysold) based on the old and new quantitysold values whenever a sale is updated.


2. Create a Trigger: Define a trigger named after_sale_update that:
- Fires after an update operation on the sales table.
- Executes the update_product_quantity function to update the products table.

`,
    solution: `
CREATE OR REPLACE FUNCTION update_product_quantity()
RETURNS TRIGGER AS $$
BEGIN
	UPDATE products
	SET quantity = quantity + OLD.quantitysold - NEW.quantitysold
	WHERE productid = NEW.productid;

	RETURN NULL;
END;

$$ LANGUAGE plpgsql;

CREATE TRIGGER after_sale_update
AFTER UPDATE ON sales
FOR EACH ROW
EXECUTE FUNCTION update_product_quantity()
`,
    language: "sql",
    testCasesPassed: 1,
    totalTestCases: 1,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,

  },
]
