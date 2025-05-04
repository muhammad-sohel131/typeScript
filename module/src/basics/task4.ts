// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.

interface Book {
    name: string
    publishedYear: number
}

interface Magazine {
    title: string
    publishedYear: number
}

type union = Book | Magazine
const unionObj: union = {
    name: "KalerKonto",
    title: 'AmarDesh',
    publishedYear: 1293
}

type intersection = Book & Magazine
const intersectionObj: intersection = {
    publishedYear: 1923,
    name: "Tata",
    title: 'tik ace'
}

