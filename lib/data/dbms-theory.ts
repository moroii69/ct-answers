import type { Question } from "../types"

export const dbmsTheoryQuestions: Question[] = [
  {
    id: "1.1.1",
    title: "Relational Data Model",
    description: "Explain the relational data model and its components",
    difficulty: "Medium",
    subject: "dbms-theory",
    questionType: "theory",
    codetantraLink: "https://codetantra.com/question/1.1.1",
    question: `
# Relational Data Model

## Question
Explain the **relational data model**, its components, and why it has become the dominant data model for commercial databases.

## Expected Answer
Your answer should cover:
- Definition of the **relational model**
- Key components (**relations, tuples, attributes**)
- Properties of relations
- **Advantages** over other data models
- Examples of relational database tables
    `,
    solution: `
The **relational data model** is a database model based on first-order predicate logic, proposed by **E.F. Codd** in 1970. It organizes data into relations (tables), which consist of tuples (rows) and attributes (columns).

## Components of the Relational Model

1. **Relations (Tables)**: Two-dimensional tables where data is stored
2. **Tuples (Rows)**: Each row in a relation represents a record or entity instance
3. **Attributes (Columns)**: Each column represents a property or characteristic of the entity
4. **Domain**: The set of allowable values for an attribute
5. **Schema**: The structure of the relation (table definition)
6. **Keys**: Attributes used to identify tuples and establish relationships

## Properties of Relations

1. **Atomicity**: All values in a relation are atomic (indivisible)
2. **Uniqueness**: No duplicate tuples are allowed
3. **Column homogeneity**: All values in a column are of the same type
4. **Column order irrelevance**: The order of columns doesn't matter
5. **Row order irrelevance**: The order of rows doesn't matter
6. **Each cell contains exactly one value**: No multi-valued attributes

## Advantages of the Relational Model

1. **Simplicity**: Easy to understand and use
2. **Structural independence**: Applications are insulated from how data is structured
3. **Set-oriented access**: Operations work on sets of data rather than navigating individual records
4. **Data integrity**: Constraints can be defined to ensure data validity
5. **Flexible querying**: **SQL** provides powerful query capabilities
6. **ACID properties**: Ensures reliable transaction processing

The relational model has become **dominant** due to its mathematical foundation, simplicity, flexibility, and the standardization of **SQL** as a query language.
`,
    language: "sql",
  },
  {
    id: "2.1.1",
    title: "Database Normalization MCQ",
    description: "Multiple choice question about database normalization",
    difficulty: "Medium",
    subject: "dbms-theory",
    questionType: "mcq",
    codetantraLink: "https://codetantra.com/question/2.1.1",
    question: `
# Database Normalization

## Question
Which of the following statements about **database normalization** are true?

**Select all that apply:**
    `,
    solution: "",
    language: "sql",
    mcqOptions: [
      {
        id: "1",
        text: "First Normal Form (1NF) requires that all attributes contain only atomic values",
        isCorrect: true,
      },
      {
        id: "2",
        text: "Second Normal Form (2NF) requires that a relation be in 1NF and all non-key attributes be fully functionally dependent on the primary key",
        isCorrect: true,
      },
      { id: "3", text: "Third Normal Form (3NF) eliminates all functional dependencies", isCorrect: false },
      { id: "4", text: "Normalization always improves database performance", isCorrect: false },
      { id: "5", text: "Boyce-Codd Normal Form (BCNF) is a stronger form of 3NF", isCorrect: true },
      { id: "6", text: "Denormalization is never recommended in database design", isCorrect: false },
    ],
  },
]
