# About this project

This is a personal web portfolio I've developed on my free time, to showcase my side projects and make them accesible on the internet. The current plan for this webpage consists on having the following sections:

## Home page[^2]

As the main purpose of this webpage is to be used as a web portfolio (besides bragging rights), this section will be just a simple landing page, with a few images and some basic info about myself. I'm sure that over time I'll add more stuff to it, to try and make it a little more interesting (We'll see how that goes).

## Conway's Game of Life

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a well known cellular automaton created by John Horton Conway in 1970. It's a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

This section hosts an interactive canvas that allows for user interaction in a 2D grid, marking cells as alive or dead (black or white, respectively), to watch them evolve over time.

## Pathfinding Algorithms Visualization[^2]

This section hosts an interactive canvas in wich you can place and move the start position, end position, checkpoint[^1] and obstacles around in a grid, to then be solved by one of the following pathfinding algorithms:

-   [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
-   [Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search)[^1]
-   [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)[^1]
-   [A\* search algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)[^1]

On top of that, it will have a few maze generator algorithms, to facilitate for quick testing and comparison between the pathfinding algorithms. It currently has only a random recursively backtracking algorithm that I whipped out one afternoon after not being super happy with my quick google search.

## Sorting Algorithms Visualization[^2]

This section hosts a non-interactive canvas which displays an adjustable array of bars to be sorted by one of the following algorithms:

-   [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
-   [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)[^1]
-   [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)[^1]
-   [Quixksort](https://en.wikipedia.org/wiki/Quicksort)[^1]
-   [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)[^1]
-   [Bucket Sort](https://en.wikipedia.org/wiki/Bucket_sort)[^1]
-   [Shell Sort](https://en.wikipedia.org/wiki/Shellsort)[^1]
-   [Heap Sort](https://en.wikipedia.org/wiki/Heapsort)[^1]

# The future of this project

As this is a personal project, in which I only work on in my free time (and when I'm in the mood for it), I can't really give a comprehensive list of features, let alone a time table. But I can list a few ideas I have for the page, in no particular order, which I'll be implementing... who knows when.

-   General layout and design: Broadly speaking, the looks of the page need a LOT of work. This includes just about everything, from the footer to the general color palette. This is the most long-term item on this list, and will evolve as my ideas and the page itself evolves. Not much else to say about this, but expect changes all around.

-   Mobile Integration: This page was primarily design to be used on desktop, but I'll be doing my best to make it as mobile friendly as possible. From layout to touchscreen support for the canvas, I plan for this page to be as responsive as it can be.

-   Line charts: The idea is to implement a line chart for both the pathfinding and sorting sections, which will display how each algorithm performed compared to the last few runs.

-   Ant Colony Optimization: This is another big one. I'm planning on adding a new section with another interactive grid, to showcase the ACO algorithm. It will have most, if not all, of the features from the pathfinding grid (eg: drawing, stepping, animating, etc...)

-   Section specific content: what I mean by this, is that I want to give some background on how each algorithm works, maybe some pseudo-code, and generally more information about what's going on on each section behind the scenes.

-   General optimization: Nothing specific about this, just do some clean-up all across, try to get the page to run as smoothly as I can, to give a better user experience.

---

# This project was created using:

-   [Next.js](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Sass](https://sass-lang.com/)
-   [React Icons](https://react-icons.github.io/react-icons/)

## Run on your local machine

First, Install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Lastly, open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

[^1]: Not implemented yet
[^2]: Work in progress / Partially implemented
