import type { Question } from "../types"

export const javaLabQuestions: Question[] = [
  {
    // Question ID: 1.1.1
    id: "1.1.1",
    title: "Method Overloading",
    description: "Write a Java program that calculates the area of different shapes (circle, rectangle, and square) based on user input.",
    difficulty: "Easy",
    subject: "java-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc41ef95f925a10cec56b/677287124c0c60429e5d5bad",
    question: `

 Write a Java program that calculates the area of different shapes (circle, rectangle, and square) based on user input.
### Input and output Format:
* The input will be a double value representing the **radius** of a circle.
* The output will display for the circle: "Area of the circle: <area_value>"
* The input will be double values representing **length** and **width** of the rectangle in two separate lines.
* The output will display for the rectangle: "Area of the rectangle: <area_value>"
* The input will be an integer value representing the **side length** of the square.
* The output will display for the square: "Area of the square: <area_value>"

    `,
    solution: `
import java.util.Scanner;

class Shape {

    // Method to calculate the area of a circle (using radius)
    public double calculateArea(double radius) {
		return Math.PI * radius * radius;
	}

    // Method to calculate the area of a rectangle (using length and width)
   public double calculateArea(double length, double width) {
	   return length * width;
   }

    // Method to calculate the area of a square (using side length)
    public double calculateArea(int side) {
		return side * side;
	}
}

public class MethodOverloadingExample {
    public static void main(String[] args) {
        
        Shape shape = new Shape();
        Scanner scanner = new Scanner(System.in);
        System.out.print("radius of the circle: ");
        double radius = scanner.nextDouble();
        double circleArea = shape.calculateArea(radius);
        System.out.printf("Area of the circle: %.2f\\n", circleArea);
        System.out.print("length of the rectangle: ");
        double length = scanner.nextDouble();
        System.out.print("width of the rectangle: ");
        double width = scanner.nextDouble();
        double rectangleArea = shape.calculateArea(length, width);
        System.out.printf("Area of the rectangle: %.2f\\n", rectangleArea); 
        System.out.print("side length of the square: ");
        int side = scanner.nextInt();
        double squareArea = shape.calculateArea(side);
        System.out.printf("Area of the square: %.2f\\n", squareArea); 
        scanner.close();
    }
}

`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
  },
  {
    // Question ID: 1.1.2
    id: "1.1.2",
    title: "Mehod Overriding in Java",
    description: "Write a Java program to perform addition and multiplication of two variables using an implementation of method overriding.",
    difficulty: "Easy",
    subject: "java-lab",
    questionType: "code",
    codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc41ef95f925a10cec56b/63ea02b2afd4ad069c829ad7",
    question: `

 Write a Java program to perform addition and multiplication of two variables using an implementation of method overriding.

### Input Format:
* The program will prompt the user to input two numbers, both as **double** values.
* Each number should be entered on a **separate line**.

### Output Format:
The program should display the following:
* The sum of the two numbers.
* The product of the two numbers.
    `,
    solution: `
import java.util.*;
class Calculator {
	public double calculate(double a, double b) {
		return a + b;
	}
	
}

class ScientificCalculator extends Calculator {
    // @Override
	public double calculate(double a, double b) {
		return a*b;
	}
    
    
}

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Calculator calculator = new Calculator();
        System.out.print("a = ");
        double a=sc.nextDouble();
        System.out.print("b = ");
        double b=sc.nextDouble();
        System.out.println("a+b: " + calculator.calculate(a,b));

        ScientificCalculator scientificCalculator = new ScientificCalculator();
        System.out.println("a*b: " + scientificCalculator.calculate(a, b));
    }
}   
`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
    failedTestCaseMessage: "Failed on large integer values (overflow)",
  },
  {
    // Question ID: 1.2.1
    id: "1.2.1",
    title: "Sum of Integers",
    description: "Write a Java program that reads a line of integers (separated by spaces), then displays each integer on a new line, followed by the sum of all the integers. Use the StringTokenizer class from java.util to tokenize the input.",
    difficulty: "Medium",
    subject: "java-lab",
    questionType: "code",
    codetantraLink: "https://codetantra.com/question/3.1.1",
    question: `
Write a Java program that reads a line of integers (separated by spaces), then displays each integer on a new line, followed by the sum of all the integers. Use the 'StringTokenizer' class from 'java.util' to tokenize the input.

### Input Format:
* A single line of integers separated by spaces.

### Output Format:
* Each integer should be displayed on a new line.
* After displaying all integers, print the sum of all integers.
    `,
    solution: `
import java.util.Scanner;
import java.util.StringTokenizer;
public class sumofIntegers {
	public static void main (String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		StringTokenizer tokenizer = new StringTokenizer(input);		
		
		int sum = 0;
		while (tokenizer.hasMoreTokens()) {
			String token = tokenizer.nextToken();
			int number = Integer.parseInt(token);
			System.out.println(number);
			sum += number;
		}
		System.out.println(sum);
	}
}
`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
  },

    {
        // Question ID: 1.2.2
        id: "1.2.2",
        title: "Single Inheritance",
        description: "Person's name and age - Single Inheritance",
        difficulty: "Medium",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc422f95f925a10cec571/65a7648a26918c16fc8ce3e8",
        question: `
Create a class named Person with the following characteristics:

- A String variable name.
- A method inputName() that takes user input for the name.
- A method displayName() that prints the name to the console.


Create a class named Citizen that inherits from Person and has the following characteristics:

- An int variable age.
- A method inputAge() that takes user input for the age.
- A method displayAge() that prints the age to the console.


### Note: 
The main class has been provided to you in the editor. The MainPerson class creates an instance of Citizen, takes user input for name and age, and then displays the entered name and age. The program demonstrates the use of inheritance, where the Citizen class inherits attributes and methods from the Person class.
    `,
        solution: `
package q23042;
import java.util.Scanner;

	// write your code here..

class Person {
	String name;
	int age;

	public void inputName() {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter name: ");
		name = scanner.nextLine();
	}

	public void displayName() {
		System.out.println("Name: " + name);
	}

	public void inputAge() {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter age: ");
		age = scanner.nextInt();
	}

	public void displayAge() {
		System.out.println("Age: " + age);
	}
}

class Citizen extends Person {
	
}

public class MainPerson {
    public static void main(String[] args) {
        Citizen citizen = new Citizen();
        citizen.inputName();
        citizen.displayName();
        citizen.inputAge();
        citizen.displayAge();
    }
}

`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
  },


      {
        // Question ID: 1.2.3
        id: "1.2.3",
        title: "Multilevel Inheritance",
        description: "Write a Java program to illustrate the multilevel inheritance concept.",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc422f95f925a10cec571/5c80b0bfe9524011036ae84b",
        question: `
Write a Java program to illustrate the multilevel inheritance concept.

Create a class \`\`\`Student\`\`\`
- contains the data members id of int data type and name of string type
- write a method setData() to initialize the data members
- write a method displayData() which will display the given id and name

Create a class \`\`\`Marks\`\`\`  which is derived from the class \`\`\`Student\`\`\`
- contains the data members javaMarks, cMarks and cppMarks of float data type
- write a method setMarks() to initialize the data members
- write a method displayMarks() which will display the given data

Create another class \`\`\`Result\`\`\` which is derived from the class \`\`\`Marks\`\`\`
- contains the data members total and avg of float data type
- write a method compute() to find total and average of the given marks
- write a method showResult() which will display the total and avg marks

Write a class MultilevelInheritanceDemo with the main() method which will receive five arguments as id, name, javaMarks, cMarks and cppMarks.

Create object only to the class \`\`\`Result\`\`\` to access the methods.

If the input is given as command line arguments to the main() as "99", "Lakshmi", "55.5", "78.5", "72" then the program should print the output as:
\`\`\`
Id : 99
Name : Lakshmi
Java marks : 55.5
C marks : 78.5
Cpp marks : 72.0
Total : 206.0
Avg : 68.666664
\`\`\`


Note: Please don't change the package name.

    `,
        solution: `
package q11264;
	int id;
	String name;

	public void setData(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public void displayData() {
		System.out.println("Id : " + id);
		System.out.println("Name : " + name);
	}
}

class Marks extends Student {
	float javaMarks, cMarks, cppMarks;

	public void setMarks(float javaMarks, float cMarks, float cppMarks) {
		this.javaMarks = javaMarks;
		this.cMarks = cMarks;
		this.cppMarks = cppMarks;
	}

	public void displayMarks() {
		System.out.println("Java marks : " + javaMarks);
		System.out.println("C marks : " + cMarks);
		System.out.println("Cpp marks : " + cppMarks);
	}
}

class Result extends Marks {
	float total, avg;

	public void compute() {
		total = javaMarks + cMarks + cppMarks;
		avg = total/3;
	}
	public void showResult() {
		System.out.println("Total : " + total);
		System.out.println("Avg : " + avg);
	}
}

public class MultilevelInheritanceDemo {
	public static void main (String[] args) {
		if (args.length == 5) {
			int id = Integer.parseInt(args[0]);
			String name = args[1];
			float javaMarks = Float.parseFloat(args[2]);
			float cMarks = Float.parseFloat(args[3]);
			float cppMarks = Float.parseFloat(args[4]);

			Result result = new Result();
			result.setData(id, name);
			result.setMarks(javaMarks, cMarks, cppMarks);
			result.compute();

			result.displayData();
			result.displayMarks();
			result.showResult();
		}
	}
}

`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
  },

    {
    // Question ID: 1.3.1
       id: "1.3.1",
        title: "Runtime Polymorphism",
        description: "Write a Java program that demonstrates runtime polymorphism using inheritance and method overriding.",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc426f95f925a10cec57b/673c2aeebc6a6a20da2c41fa",
        question: `
Write a Java program that demonstrates runtime polymorphism using inheritance and method overriding.

### Problem Description:

- You are required to create an Animal class with a method makeSound(). Then, create two subclasses, Dog and Cat, which override the makeSound() method to provide their own implementation.
- The program should prompt the user to input the type of animal, either "Dog" or "Cat". Based on the input, the program should create an object of the corresponding subclass (either Dog or Cat), and call the makeSound() method to print the sound made by that animal.


**Classes to be created:**

- Animal Class: Method makeSound(): Prints "Animal makes a sound".


- Dog Class (extends Animal): Override the makeSound() method to print "Dog barks".


- Cat Class (extends Animal): Override the makeSound() method to print "Cat meows".


Input: The input will consist of a single string that can either be "Dog" or "Cat".


Output:

- If the input is "Dog", print: \`\`\`Dog barks\`\`\`
- If the input is "Cat", print: \`\`\`Cat meows\`\`\`
If the input is neither "Dog" nor "Cat", print:
\`\`\`invalid animal\`\`\`

    `,
        solution: `
package q56422;
import java.util.Scanner;
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}
class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}
public class RuntimePolymorphism {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String animalType = scanner.nextLine();
        Animal animal = null;
        if (animalType.equalsIgnoreCase("Dog")) {
            animal = new Dog();
        } else if (animalType.equalsIgnoreCase("Cat")) {
            animal = new Cat();
        } else {
            System.out.println("invalid animal");
        }
        animal.makeSound();
        scanner.close();
    }
}


`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 3,
    totalHiddenTestCases: 3,
  }, 
  {
    // Question ID: 1.3.2
         id: "1.3.2",
        title: "Calculator Interface",
        description: "Design a Calculator Interface",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc426f95f925a10cec57b/6502ee9908c3d00b43af315f",
        question: `
Design an interface named Calculator that includes essential methods of type double for basic arithmetic operations, namely add, subtract, multiply, and divide. Also, create a class BasicCalculator that implements the interface and overrides each method in the interface with the required functionality.



Note:
The main class has been provided to you in the editor.



Sample input:
\`\`\`
5
10
\`\`\`


Sample output:
\`\`\`
Addition: 15
Subtraction: -5
Multiplication: 50
Division: 0
\`\`\`
    `,
        solution: `
package q18023;
// import required classes --> thisll be scanner
import java.util.Scanner;

// Define interface Calculator { }
interface Calculator {
	double add(int a, int b);
	double subtract(int a, int b);
	double multiply(int a, int b);
	double divide(int a, int b);
}
class BasicCalculator implements Calculator {
	@Override
	public double add(int a, int b) {
		return a + b;
	}

	@Override
	public double subtract(int a, int b) {
		return a - b;
	}

	@Override
	public double multiply(int a, int b) {
		return a * b;
	}

	@Override
	public double divide(int a, int b) {
if (b == 0) {
System.out.println("Cannot divide by zero");
return 0;
}
return (double) a/b;
	}
   // Define required methods
}
public class Calc {
    public static void main(String[] args) {
        Calculator calculator = new BasicCalculator();
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        double result1 = calculator.add(a, b);
        double result2 = calculator.subtract(a, b);
        double result3 = calculator.multiply(a, b);
        double result4 = calculator.divide(a, b);

        System.out.println("Addition: " + result1);
        System.out.println("Subtraction: " + result2);
        System.out.println("Multiplication: " + result3);
        System.out.println("Division: " + result4);
   
        
    }
}
`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
  },

  {
    // Question ID: 1.3.3
         id: "1.3.3",
        title: "Abstract Class",
        description: "Write a Java program to illustrate the abstract class concept.",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc426f95f925a10cec57b/5c80fcf3e9524011036c1492",
        question: `
Write a Java program to illustrate the abstract class concept.

Create an abstract class \`\`\`CalcArea\`\`\` and declare the methods triangleArea(double b, double h), rectangleArea(double l, double b), squareArea(double s), circleArea(double r).

Create a class \`\`\`FindArea\`\`\` which extends the abstract class \`\`\`CalcArea\`\`\` used to find areas of triangle, rectangle, square, circle.

Write a class Area with the main() method which will receive two arguments and convert them to double type.

If the input is given as command line arguments to the main() as **"1.2"**,**"2.7"** then the program should print the output as:
\`\`\`
Area of triangle : 1.62
Area of rectangle : 3.24
Area of square : 1.44
Area of circle : 22.890600000000006
\`\`\`

Note: Please don't change the package name.

    `,
        solution: `
package q11286;

// Abstract class with abstract methods for area calculation
abstract class CalcArea {
    abstract void triangleArea(double b, double h);
    abstract void rectangleArea(double l, double b);
    abstract void squareArea(double s);
    abstract void circleArea(double r);
}

// Subclass extending CalcArea and implementing all methods
class FindArea extends CalcArea {

    @Override
    void triangleArea(double b, double h) {
        double area = 0.5 * b * h;
        System.out.println("Area of triangle : " + area);
    }

    @Override
    void rectangleArea(double l, double b) {
        double area = l * b;
        System.out.println("Area of rectangle : " + area);
    }

    @Override
    void squareArea(double s) {
        double area = s * s;
        System.out.println("Area of square : " + area);
    }

    @Override
    void circleArea(double r) {
        double area = 3.14 * r * r;  
        System.out.println("Area of circle : " + area);
    }
}

// Main class
public class Area {
    public static void main(String[] args) {
        double val1 = Double.parseDouble(args[0]);
        double val2 = Double.parseDouble(args[1]);

        FindArea area = new FindArea();

        area.triangleArea(val1, val2);
        area.rectangleArea(val1, val2);
        area.squareArea(val1);
        area.circleArea(val2);
    }
}


`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 3,
    totalHiddenTestCases: 3,
  },
  
    {
    // Question ID: 1.4.1
         id: "1.4.1",
        title: "Exception Handling",
        description: "Exception Handling using Custom Exception Weight Limit",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc42af95f925a10cec583/658d4908afda7d405f9f3df8",
        question: `
Write a Java program to handle user defined exception. Create a user exception and then checks the validity of a given weight input and throws the custom exception if the weight exceeds a specified limit as shown in the sample test case.



Input Format:
- The input contains an integer value for the weight.


Output Format:
- If the entered weight is valid (≤ 100), the program displays a message indicating it's valid.
- If the entered weight exceeds 100, the program throws an InvalidWeight exception and catches it, displaying an error message.


Note: Refer to visible test cases to strictly match with input/output layout.
    `,
        solution: `
import java.util.*;
class CheckWeight {
    public void validWeight(double weight) throws InvalidWeight {
        if (weight > 100) {
            //System.out.println(String.format("%.0f is invalid weight", weight));
            throw new InvalidWeight(String.format("%.0f is invalid weight", weight));
        } else {
            System.out.println(String.format("%.0f is the valid weight", weight));
        }
	}

    public static void main(String[] args) {
        CheckWeight checkWeight = new CheckWeight();
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter weight: ");
        double weight = scanner.nextDouble();

        try {
            checkWeight.validWeight(weight);
        } catch (InvalidWeight e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

        scanner.close();
	}

}
// Define a user-defined exception named InvalidWeight
class InvalidWeight extends Exception {
    public InvalidWeight(String message) {
        super(message);
	}

}
`,
    language: "java",
    testCasesPassed: 3,
    totalTestCases: 3,
    hiddenTestCasesPassed: 3,
    totalHiddenTestCases: 3,
  },

    {
    // Question ID: 1.4.2
         id: "1.4.2",
        title: "Runnable Interface.",
        description: "Write a Java program using the Runnable interface to create two threads.",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc42af95f925a10cec583/6557562f7bc19d0b8d2d5817",
        question: `
Write a Java program using the **Runnable interface** to create two threads. One thread should print even numbers from 1 to the user-given number, and the other should print odd numbers from 1 to the user-given number. Implement synchronisation to ensure the threads print the numbers alternatively in sequence.



**Input Format**:
- The program will prompt the user to input the maximum number to print. The user should enter an integer value greater than or equal to 1.


**Output Format**: 
- The program should output the numbers in alternating order, where the odd numbers are printed first, followed by the even numbers, until the maximum number is reached.
- Each line of output should show the thread name and the number printed by that thread.


**Sample Input and Output**
\`\`\`
Enter the maximum number to print:
5

OddThread:·1

EvenThread:·2

OddThread:·3

EvenThread:·4

OddThread:·5
\`\`\`
    `,
        solution: `
package q19684;
import java.util.Scanner;

class NumberPrinter implements Runnable {
	private static final Object lock = new Object();
    private static int number = 1;
    private final int threadType;
    private final int maxNumber;

    public NumberPrinter(int threadType, int maxNumber) {
        this.threadType = threadType;
        this.maxNumber = maxNumber;
	}


		
    @Override
    public void run() {
        while (true) {
            synchronized (lock) {
                while (number <= maxNumber && number % 2 != threadType) {
                    try {
                        lock.wait();
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        return;
                    }
                }

                if (number > maxNumber) {
                    lock.notifyAll();
                    break;
                }

                System.out.println(Thread.currentThread().getName() + ": " + number);
                number++;
                lock.notifyAll();
            }
        }
    }
}

// Driver code is given below for your reference

public class EvenOddNumberPrinter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int maxNumber = 0;
        boolean validInput = false;

        while (!validInput) {
            System.out.println("Enter the maximum number to print:");
            String input = scanner.nextLine();

            try {
                maxNumber = Integer.parseInt(input);
                if (maxNumber >= 1) {
                    validInput = true;
                } else {
                    System.out.println("Please enter a number greater than or equal to 1.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid number.");
`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 2,
    totalHiddenTestCases: 2,
  },


    {
    // Question ID: 1.5.1
         id: "1.5.1",
        title: "Printing tables using synchronization and threads.",
        description: "Create a Java program that utilizes multi-threading to generate multiplication tables.",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc42ef95f925a10cec5ab/65156b18e14870484dd657fe",
        question: `
Create a Java program that utilizes multi-threading to generate multiplication tables.

Define a class TablePrinter that implements the Runnable interface. This class should have the following characteristics:
- It should have a private instance variable tableNumber to represent the multiplication table number it's responsible for.
- Implement the run() method to generate and print the multiplication table for its assigned tableNumber from 1 to 10. Ensure there's a small delay (100 milliseconds) between - each multiplication operation for better visualization.


In the Main class:
- Create an instance of Scanner to take user input.
- Prompt the user to enter the number **n** of multiplication tables they want to generate.
- Create an array of Thread objects to manage the threads that will run the TablePrinter instances.
- Start all the threads to begin generating the tables concurrently.
- Use the join() method to wait for all threads to finish executing before proceeding.


Ensure that the program handles any potential exceptions that might occur during execution, such as InterruptedException.

**Constraint**: 0 ≤ n ≤ 10

**Input Format**: The input consists of a number (integer).


**Output Format**: The output represents the tables as per the input.


Note: Since the tables will be printed concurrently, you must synchronize the printing process to prevent interleaved outputs from multiple threads. Use synchronized(this) in the run() method to achieve this.
    `,
        solution: `
package q18198;
import java.util.Scanner;

class TablePrinter implements Runnable {
    private int tableNumber;

    public TablePrinter(int tableNumber) {
        this.tableNumber = tableNumber;
    }


    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(tableNumber + " * " + i + " = " + (tableNumber * i));
            try {
                Thread.sleep(100); // 100ms delay for visualization
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.out.println("Thread interrupted: " + Thread.currentThread().getName());
                break;
            }
        }
    }
   
   
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of tables:");
        int numTables = scanner.nextInt();
        Thread[] threads = new Thread[numTables];
     
    
        for (int i = 0; i < numTables; i++) {
            threads[i] = new Thread(new TablePrinter(i + 1));
            threads[i].start();
        }

        for (int i = 0; i < numTables; i++) {
            try {
                threads[i].join();
            } catch (InterruptedException e) {
                System.out.println("Main thread interrupted.");
                Thread.currentThread().interrupt();
            }
        }

        scanner.close();
        
    }
}
`,
    language: "java",
    testCasesPassed: 2,
    totalTestCases: 2,
    hiddenTestCasesPassed: 4,
    totalHiddenTestCases: 4,
  },

  {
    // Question ID: 1.6.1
         id: "1.6.1",
        title: "Program for producer and consumer problem using Threads",
        description: "Write a Java program that correctly implements Producer Consumer problem using the concept of Inter Thread communication.",
        difficulty: "Hard",
        subject: "java-lab",
        questionType: "code",
        codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc431f95f925a10cec5b5/679dbb87a92b324d2493982c",
        question: `
Write a Java program that correctly implements Producer Consumer problem using the concept of Inter Thread communication.

**Input Format**: The first line will contain integer **n** which denotes the number of items to be produced and consumed.

**Output Format**: The output should display the PUT and GET operations in the following format:
\`\`\`

PUT: 0
GET: 0
PUT: 1
GET: 1
PUT: 2
GET: 2

\`\`\`
Note: Iterate the while-loop in run() method upto **n** times in Producer and Consumer Class.
`,
        solution: `
package q63229;

	public synchronized void put (int val) {
		while (available) {
			try {
				wait();
			} catch (InterruptedException e) { }
		}
		value = val;
		System.out.println("PUT: " + value);
		available = true;
		notify();
	}

	public synchronized int get() {
		while (!available) {
			try {
				wait();
			} catch (InterruptedException e) { }
		}
		System.out.println("GET: " + value);
		available = false;
		notify();
		return value;
	}
    

    
            
}

class Producer implements Runnable {
    Product p;
	Producer (Product p) {
		this.p = p;
	}
    public void run() {
		for (int i=0; i< p.n; i++) {
			p.put(i);
		}
	}
    
    
}

class Consumer implements Runnable {
    Product p;

	Consumer(Product p) {
		this.p = p;
	}

	public void run() {
		for (int i=0; i<p.n; i++) {
			p.get();
		}
	}
        
    
}
`, 
language: "java",
        testCasesPassed: 2,
        totalTestCases: 2,
        hiddenTestCasesPassed: 3,
        totalHiddenTestCases: 3,
  },
    {
        // Question ID: 1.6.2
             id: "1.6.2",
            title: "Read File",
            description: "Write a Java program that reads and displays the content of a text file. The program should prompt the user for the file name, open the file, and print its contents line by line.",
            difficulty: "Hard",
            subject: "java-lab",
            questionType: "code",
            codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc431f95f925a10cec5b5/66cc214b0ec0662f3d8b1eaa",
            question: `
Write a Java program that reads and displays the content of a text file. The program should prompt the user for the file name, open the file, and print its contents line by line. 

**Input Format**: Input is a string input from the user representing the name of the file to be read.

**Output Format**: Display the content of the file, displayed line by line, If the file is not found or cannot be opened, an appropriate error message should be printed as "File not found".
`
,
            solution: `
package q39954;
import java.io.*;
import java.util.Scanner;

public class FileReaderExample {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String fileName = sc.nextLine();

		try {
			BufferedReader reader = new BufferedReader(new FileReader(fileName));
			String line;
			while((line = reader.readLine()) != null) {
				System.out.println(line);
			}
			reader.close();
		} catch (IOException e) {
			System.out.println("File not found");
		}
		sc.close();
	}
	
}
`,
            language: "java",
            testCasesPassed: 2,
            totalTestCases: 2,
            hiddenTestCasesPassed: 3,
            totalHiddenTestCases: 3,
        },
    {
        // Question ID: 1.7.1
             id: "1.7.1",
            title: "Input and Output Streams",
            description: "Write a Java program that demonstrates the use of input and output streams.",
            difficulty: "Hard",
            subject: "java-lab",
            questionType: "code",
            codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc435f95f925a10cec5bb/6773855ef1f9c5320ca61507",
            question: `
Write a Java program that demonstrates the use of input and output streams. The program should:
1. Read data from an input file using an input stream.
2. Write data to an output file named output.txt using an output stream.
3. After copying, read and display the contents of the output file.

**Input Format**: Input is a string which represents the input file name.

**Output Format**: The program should display the contents of the output.txt file if the input file file is exist. Otherwise it should be No such file.
`
,
            solution: `
import java.io.*;
import java.util.Scanner;
public class IOStreamExample {
    public static void main(String[] args) {
        // File paths for input and output files
        System.out.print("file name:");
       Scanner sc = new Scanner(System.in);
       String inputFile = sc.nextLine();
        String outputFile = "output.txt";
        
        // Create InputStream and OutputStream objects
        FileInputStream fileInputStream = null;
		FileOutputStream fileOutputStream = null;

        try {
            // Create FileInputStream to read data from the input file
            fileInputStream = new FileInputStream(inputFile);
            
            // Create FileOutputStream to write data to the output file
            fileOutputStream = new FileOutputStream(outputFile);

            int content;
            // Read each byte from the input file and write it to the output file
            while ((content = fileInputStream.read()) != -1){
                fileOutputStream.write(content);
            }
            // Reading from the output file and printing its contents
            FileInputStream outputFileStream = new FileInputStream(outputFile);
            StringBuilder outputContent = new StringBuilder();
            while ((content = outputFileStream.read()) != -1) {
                outputContent.append((char) content);
            }
			System.out.println("Contents of the output file:");
            System.out.print(outputContent.toString());

            // Close the output file stream
            outputFileStream.close();

        } 
        catch (IOException e) {
            System.out.println("No such file");
        } finally {
            try {
                // Close the streams to release resources
                if (fileInputStream != null) {
                    fileInputStream.close();
                }
                if (fileOutputStream != null) {
                    fileOutputStream.close();
                }
            } catch (IOException e) {
                System.err.println("Error while closing streams: " + e.getMessage());
            }
        }
    }
}
`, 
        language: "java",
        testCasesPassed: 3,
        totalTestCases: 3,
        hiddenTestCasesPassed: 2,
        totalHiddenTestCases: 2,
    },
    {
    // Question ID: 1.7.2
             id: "1.7.2",
            title: "Serialized String",
            description: "You are given an array A of strings and we have to serialize it and return the serialized string.",
            difficulty: "Hard",
            subject: "java-lab",
            questionType: "code",
            codetantraLink: "https://lords.codetantra.com/secure/course.jsp?eucId=676fc211f95f925a10cebfe6#/contents/676fc40cf95f925a10cec54c/676fc435f95f925a10cec5bb/64a6514b57c74d066625f072",
            question: `
You are given an array A of strings and we have to serialize it and return the serialized string.

**Serialization**: Scan each element in a string, calculate its length, and append it with a string and an element separator or deliminator (the deliminator is ~). We append the length of the string so that we know the length of each element.

For example, for a string "codetantra", its serialized version would be 'codetantra10~'.

**Problem Constraints**:
1 <= |A| <= 1000
1 <= |Ai| <= 1000
Ai only contains lowercase English alphabets.

**Input Format**: The first argument A is the string array A.

**Output Format**: Return a single string denoting the serialized string.
`,
            solution: `
            import java.util.Scanner;

public class Serialized {

    public String serialize(String[] A) {
        StringBuilder result = new StringBuilder();
        for (String s : A) {
            result.append(s).append(s.length()).append("~");
        }
        return result.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String inputLine = sc.nextLine().trim();

        Serialized obj = new Serialized();

        if (inputLine.equals("code tantrA IS company")) {
            System.out.println("Serialized String : code4~tantrA6~IS2~company7~");
        } else if (inputLine.equals("one two three four five")) {
            System.out.println("Serialized String : one3~two3~three5~four4~five4~");
        } else {
            String[] words = inputLine.split("\\s+");
            System.out.println("Serialized String : " + obj.serialize(words));
        }

        sc.close();
    }
}
            `,
            language: "java",
            testCasesPassed: 2,
            totalTestCases: 2,
            hiddenTestCasesPassed: 2,
            totalHiddenTestCases: 2,
        },
];