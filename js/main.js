
When the Q key is pressed {
  in the player 1 row, change current square class to inactive 
  Change class of the square to the right of current square to active. 
}

When the P key is pressed {
  in the player 2 row, change current square class to inactive. 
  Change class of the square to the right of current square to active. 
}

When the class of square id p1square10 is active, and the class of square id p2square10 is inactive {
  alert: Player 1 wins!
}

When the class of square id p2square10 is active, and the class of square id p1square10 is inactive {
  alert: Player 2 wins!
}

When the reset button is pressed {
  Set the class of the square with id: p1square1 to active. 
  Set the class of the square with id: p2square1 to active. 
  Set the class of all other squares to inactive. 
}
