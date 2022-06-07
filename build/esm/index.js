// MIT Licensed
// Conventions:
// - In the comments throughout this library, # stands for sharp and b stands for flat.
// The number assigned to a note name is arbitrary. We start with A because it's the first letter of the alphabet. :-)
// Most music lessons begin in the key of C, so you could assign C = 0, C#/Db = 1, D = 2, and so on.
// When you "sharp" a note, add 1 to its note number. A "double sharp" adds 2 to its note number.
// When you "flat" a note, subtract 1 from its note number. A "double flat" subtracts 2 from its note number.
// Note numbers range from 0 through 11. The numbers wrap around, so -1 is the same as 11, and 12 is the same as 0.
var Notes;
(function (Notes) {
    Notes[Notes["A"] = 0] = "A";
    Notes[Notes["B"] = 2] = "B";
    Notes[Notes["C"] = 3] = "C";
    Notes[Notes["D"] = 5] = "D";
    Notes[Notes["E"] = 7] = "E";
    Notes[Notes["F"] = 8] = "F";
    Notes[Notes["G"] = 10] = "G";
})(Notes || (Notes = {}));
var Solfege;
(function (Solfege) {
    Solfege[Solfege["Do"] = 1] = "Do";
    Solfege[Solfege["Re"] = 2] = "Re";
    Solfege[Solfege["Mi"] = 3] = "Mi";
    Solfege[Solfege["Fa"] = 4] = "Fa";
    Solfege[Solfege["Sol"] = 5] = "Sol";
    Solfege[Solfege["La"] = 6] = "La";
    Solfege[Solfege["Ti"] = 7] = "Ti";
})(Solfege || (Solfege = {}));
// Movable Do Solfege: https://en.wikipedia.org/wiki/Solf%C3%A8ge
function showSolfege() {
    // TODO
}
// https://en.wikipedia.org/wiki/Nashville_Number_System
function showNashvilleNumberSystem() {
    // TODO
}
function getInterval(noteA, noteB) {
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
function showInterval(noteA, noteB) {
    console.log("The interval between notes " + noteA + " and " + noteB + " is " + getInterval(noteA, noteB) + " semitones.");
}
//# sourceMappingURL=index.js.map