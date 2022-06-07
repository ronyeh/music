declare enum Notes {
    A = 0,
    B = 2,
    C = 3,
    D = 5,
    E = 7,
    F = 8,
    G = 10
}
declare type Note = string | number;
declare enum Solfege {
    Do = 1,
    Re = 2,
    Mi = 3,
    Fa = 4,
    Sol = 5,
    La = 6,
    Ti = 7
}
declare function showSolfege(): void;
declare function showNashvilleNumberSystem(): void;
declare function getInterval(noteA: Note, noteB: Note): number[];
/**
 * Display the number of semitones between two notes.
 */
declare function showInterval(noteA: Note, noteB: Note): void;
