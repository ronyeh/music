// MIT Licensed

// Conventions:
// - In the comments throughout this library, # stands for sharp and b stands for flat.

// The number assigned to a note name is arbitrary. We start with A because it's the first letter of the alphabet. :-)
// Most music lessons begin in the key of C, so you could assign C = 0, C#/Db = 1, D = 2, and so on.
// When you "sharp" a note, add 1 to its note number. A "double sharp" adds 2 to its note number.
// When you "flat" a note, subtract 1 from its note number. A "double flat" subtracts 2 from its note number.
// Note numbers range from 0 through 11. The numbers wrap around, so -1 is the same as 11, and 12 is the same as 0.
enum Notes {
    A = 0,
    B = 2,
    C = 3,
    D = 5,
    E = 7,
    F = 8,
    G = 10,
}

type Note = string | number;

enum Solfege {
    Do = 1,
    Re = 2,
    Mi = 3,
    Fa = 4,
    Sol = 5,
    La = 6,
    Ti = 7,
}

// Movable Do Solfege: https://en.wikipedia.org/wiki/Solf%C3%A8ge
function showSolfege() {
    // TODO
}

// https://en.wikipedia.org/wiki/Nashville_Number_System
function showNashvilleNumberSystem() {
    // TODO
}

function getInterval(noteA: Note, noteB: Note): number[] {
    // TODO

    // TEMP: a basic stub implementation.
    if (noteA === Notes.A && noteB === Notes.C) {
        return [3, 9];
    }

    // An interval distance of 0 or 12 semitones represents the same note (unison).
    return [0, 12];
}

/**
 * Display the number of semitones between two notes.
 */
function showInterval(noteA: Note, noteB: Note): void {
    console.log("The interval between notes " + noteA + " and " + noteB + " is " + getInterval(noteA, noteB) + " semitones.");
}
