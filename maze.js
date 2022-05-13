function mazeSolver(maze, index = [0, 0]) {
    let row = index[0];
    let column = index[1];
    let path = "";

    if (maze[row][column] === "e") {
        return path;
    } else if (maze[row][column] === " ") {
        if (column < maze[row].length - 1 && maze[row][column + 1] !== "*") {
            maze[row][column] = "*";
            path = "R";
            return path + mazeSolver(maze, [row, column + 1])
        }
        if (row < maze.length - 1 && maze[row + 1][column] !== "*") {
            maze[row][column] = "*";
            path = "D";
            return path + mazeSolver(maze, [row + 1, column]);
        }
        if (row > 0 && maze[row - 1][column] !== "*") {
            maze[row][column] = "*";
            path = "U";
            return path + mazeSolver(maze, [row - 1, column]);
        }
        if (column > 0 && maze[row][column - 1] !== "*") {
            maze[row][column] = "*";
            path = "L";
            return path + mazeSolver(maze, [row, column - 1]);
        }
    }
}

let maze1 = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze2 = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let maze3 = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', '*', '*', '*'],
    [' ', '*', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', ' ', '*', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeSolver(maze1));
console.log(mazeSolver(maze2));
console.log(mazeSolver(maze3));
