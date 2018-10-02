export function findSquaresToLight(arr) {
  let array = [];

  Object.entries(arr).map(c => c.includes(true) && array.push(c));
  const refined = [];
  array.map(c => refined.push(c[0]));
  return refined;
}
export function objectMaker(el1, el2, el3) {
  let stateObject = {
    [el1]: true,
    [el2]: true,
    [el3]: true
  };
  return stateObject;
}
export function emptyIndexies(board) {
  let array = [];
  board.map(c => c !== "O" && c !== "X").map((c, i) => c && array.push(i));
  return array;
}
export function winning(board, contestant) {
  if (
    (board[0] === contestant &&
      board[1] === contestant &&
      board[2] === contestant) ||
    (board[3] === contestant &&
      board[4] === contestant &&
      board[5] === contestant) ||
    (board[6] === contestant &&
      board[7] === contestant &&
      board[8] === contestant) ||
    (board[0] === contestant &&
      board[3] === contestant &&
      board[6] === contestant) ||
    (board[1] === contestant &&
      board[4] === contestant &&
      board[7] === contestant) ||
    (board[2] === contestant &&
      board[5] === contestant &&
      board[8] === contestant) ||
    (board[0] === contestant &&
      board[4] === contestant &&
      board[8] === contestant) ||
    (board[2] === contestant &&
      board[4] === contestant &&
      board[6] === contestant)
  ) {
    return true;
  } else {
    return false;
  }
}
export function numerizeBoard(arr) {
  let numerizedBoard = [];
  arr.map(
    (c, i) => (c === "" ? numerizedBoard.push(i) : numerizedBoard.push(c))
  );
  return numerizedBoard;
}
