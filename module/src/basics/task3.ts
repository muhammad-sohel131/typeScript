// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

type Person = {
    name: string
    address: string
    hair: string
    eye: string
    income: number
    expense: number
    hobbies: string[]
    familyMembers: string[]
    job: string
    skills: string[]
    maritalStatus: "Married" | "Unmarried"
    friends: string[]
}

const Sohel: Person = {
    name: 'Md Sohel',
    address: "Khilkhet, Dhaka",
    hair: 'black',
    eye: 'black',
    income: 6000,
    expense: 6500,
    hobbies: ["no fixed","change with time"],
    familyMembers: ['Father', 'Mother'],
    job: 'Student',
    skills: ['Next JS', 'TailwindCSS', 'MongoDB'],
    maritalStatus: 'Unmarried',
    friends: ['ami', 'se', 'ami']
}

console.log(Sohel)