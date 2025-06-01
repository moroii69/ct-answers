import type { Question } from "../types"

export const javaTheoryQuestions: Question[] = [
  {
    id: "1.1.1",
    title: "Java Programming Paradigm",
    description: "Explain the Java programming paradigm and its features",
    difficulty: "Easy",
    subject: "java-theory",
    questionType: "theory",
    codetantraLink: "https://codetantra.com/question/1.1.1",
    question: `
# Java Programming Paradigm

## Question
Explain the Java programming paradigm and its key features that make it popular for enterprise applications.

## Expected Answer
Your answer should cover:
- Object-oriented nature of Java
- Platform independence (**Write Once, Run Anywhere**)
- Robustness and security features
- **Automatic memory management**
- Rich standard library
    `,
    solution: `
Java is primarily an **object-oriented programming language** that incorporates several paradigms:

## 1. Object-Oriented Programming (OOP)
Java is fundamentally object-oriented, supporting:
- **Encapsulation**: Data hiding through access modifiers
- **Inheritance**: Extending classes to reuse code
- **Polymorphism**: Method overloading and overriding
- **Abstraction**: Abstract classes and interfaces

## 2. Platform Independence
Java follows **"Write Once, Run Anywhere" (WORA)** principle:
- Java code compiles to bytecode (.class files)
- Bytecode runs on any device with a Java Virtual Machine (JVM)
- No need to recompile for different platforms

## 3. Robustness and Security
- **Strong type checking** at compile time
- Runtime checking
- **Automatic memory management** (garbage collection)
- Exception handling mechanism
- Security manager for defining access rules

## 4. Automatic Memory Management
- **Garbage collector** automatically reclaims memory
- Eliminates memory leaks and dangling pointer errors
- Developers don't need to explicitly allocate/deallocate memory

## 5. Rich Standard Library
- Java API provides **extensive functionality**
- Collections framework
- Concurrency utilities
- I/O and networking
- GUI development (Swing, JavaFX)

These features make Java particularly suitable for **enterprise applications** where reliability, maintainability, and scalability are critical requirements.
`,
    language: "java",
  },
  {
    id: "2.1.1",
    title: "Java Features MCQ",
    description: "Multiple choice question about Java features",
    difficulty: "Easy",
    subject: "java-theory",
    questionType: "mcq",
    codetantraLink: "https://codetantra.com/question/2.1.1",
    question: `
# Java Features

## Question
Which of the following are features of the Java programming language?

**Select all that apply:**
    `,
    solution: "",
    language: "java",
    mcqOptions: [
      { id: "1", text: "Platform independence", isCorrect: true },
      { id: "2", text: "Pointer arithmetic", isCorrect: false },
      { id: "3", text: "Automatic memory management", isCorrect: true },
      { id: "4", text: "Multiple inheritance of classes", isCorrect: false },
      { id: "5", text: "Strong type checking", isCorrect: true },
      { id: "6", text: "Operator overloading", isCorrect: false },
    ],
  },
  {
    id: "3.1.1",
    title: "Object-Oriented Concepts",
    description: "Explain the four pillars of OOP in Java",
    difficulty: "Medium",
    subject: "java-theory",
    questionType: "theory",
    codetantraLink: "https://codetantra.com/question/3.1.1",
    question: `
# Object-Oriented Programming Concepts

## Question
Explain the **four pillars** of Object-Oriented Programming in Java with examples.

## Expected Answer
Your answer should cover:
- **Encapsulation**
- **Inheritance**
- **Polymorphism**
- **Abstraction**
    `,
    solution: `
The **four pillars** of Object-Oriented Programming in Java are:

## 1. Encapsulation
**Encapsulation** is the bundling of data and methods that operate on that data within a single unit (class). It also involves data hiding using access modifiers.

**Example:**
\`\`\`java
public class Student {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
\`\`\`

## 2. Inheritance
**Inheritance** allows a class to inherit properties and methods from another class, promoting code reusability.

**Example:**
\`\`\`java
public class Animal {
    public void eat() {
        System.out.println("Animal is eating");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("Dog is barking");
    }
}
\`\`\`

## 3. Polymorphism
**Polymorphism** allows objects of different types to be treated as objects of a common base type. It includes method overloading and overriding.

**Example:**
\`\`\`java
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
\`\`\`

## 4. Abstraction
**Abstraction** hides the complex implementation details and shows only the essential features of an object.

**Example:**
\`\`\`java
abstract class Vehicle {
    abstract void start();
    
    public void stop() {
        System.out.println("Vehicle stopped");
    }
}

public class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car started");
    }
}
\`\`\`

These **four pillars** work together to create robust, maintainable, and scalable object-oriented programs.
`,
    language: "java",
  },
]
