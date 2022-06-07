# Music Theory + JavaScript

This tutorial demonstrates basic music concepts in JavaScript. All code on this page is MIT licensed.

To follow along, install the following package:

```
npm install go-music
```

The source code [can be found here](https://github.com/ronyeh/music).

## Note

A note is one tone played at a single pitch. When you strike a piano key, or pluck a guitar string, you are playing a note.

Notes have letter names, like A, B, C, D, E, F, G.

Using our JS library, you can learn the relationships between the notes:

```js
showNote('A');
```

Here's a fun website where you can explore notes: https://learningmusic.ableton.com/notes-and-scales/notes-and-scales.html


## Chord

```js
showChord('C major');
showChord('C major 1st inversion');
showChord('A minor');
```


## Interval

An interval is the distance between two notes.

```js
showInterval('C', 'A');
```


### See
* [JS Piano](https://piano.js.org/)
* [JS Guitar](https://guitar.js.org/)

### More Resources
* https://www.musictheory.net/lessons
* https://www.youtube.com/playlist?list=PL1302D94F247600CD
