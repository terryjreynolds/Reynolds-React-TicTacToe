export function findSquaresToLight(arr) {
  let array = [];

  Object.entries(arr).map(c => c.includes(true) && array.push(c));
  const refined = [];
  array.map(c => refined.push(c[0]));
  console.log("c0", refined);
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
/* export function minimax(newBoard, player) {
  //available spots
  var availSpots = emptyIndexies(newBoard);

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, Player)) {
    return { score: -10 };
  } else if (winning(newBoard, Computer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  // an array to collect all the objects
  var moves = [];

  // loop through available spots
  for (var i = 0; i < availSpots.length; i++) {
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    var move = {};
    move.index = newBoard[availSpots[i]];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;

    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == Computer) {
      var result = minimax(newBoard, Player);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, Computer);
      move.score = result.score;
    }

    //reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  var bestMove;
  if (player === Computer) {
    var bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    // else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
  return moves[bestMove];
}
 */
