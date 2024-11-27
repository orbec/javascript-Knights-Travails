function knightMoves(start, end) {
  const knightMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const isWithinBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const currentPos = path[path.length - 1];

    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((step) => console.log(step));
      return path;
    }

    for (const move of knightMoves) {
      const nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
      if (
        isWithinBoard(nextPos[0], nextPos[1]) &&
        !visited.has(nextPos.toString())
      ) {
        visited.add(nextPos.toString());
        queue.push([...path, nextPos]);
      }
    }
  }
}

knightMoves([5, 2], [0, 0]);
