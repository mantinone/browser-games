class GameManager {
  constructor() {
    this.selected = false
    this.legalSpaces = []
    this.turn = 1
    this.board = new Board( 8, 8 )
    this.placeStartingPositions()
  }

  onClick( coord ) {
    const piece = this.board.getSquare( coord )

    if( !piece && !this.selected ){
      return
    } else if( !piece && this.selected ){
      this.movePiece( this.selected.coord , coord )
      this.selected = false
    } else if( piece ){
      this.selected = { coord: coord, piece: piece }
    }
  }

  getSelected() {
    return this.selected
  }

  determineLegalMoves( piece, coord ){

  }

  movePiece ( startCoord, endCoord ) {
    this.board.setSquare( endCoord, this.board.getSquare( startCoord ))
    this.board.setSquare( startCoord, false )
  }

  placeScattered () {
    this.board.setSquare( 'e7', new Piece( KNIGHT, BLACK ) )
  }

  placeStartingPositions () {
    for( let i = 0; i < this.board.grid.length; i++){
      this.board.grid[i][1] = new Piece( PAWN, WHITE )
      this.board.grid[i][6] = new Piece( PAWN, BLACK )
    }

    this.board.setSquare( 'a1', new Piece( ROOK, WHITE ) )
    this.board.setSquare( 'b1', new Piece( KNIGHT, WHITE ) )
    this.board.setSquare( 'c1', new Piece( BISHOP, WHITE ) )
    this.board.setSquare( 'd1', new Piece( QUEEN, WHITE ) )
    this.board.setSquare( 'e1', new Piece( KING, WHITE ) )
    this.board.setSquare( 'f1', new Piece( BISHOP, WHITE ) )
    this.board.setSquare( 'g1', new Piece( KNIGHT, WHITE ) )
    this.board.setSquare( 'h1', new Piece( ROOK, WHITE ) )
    
    this.board.setSquare( 'a8', new Piece( ROOK, BLACK ) )
    this.board.setSquare( 'b8', new Piece( KNIGHT, BLACK ) )
    this.board.setSquare( 'c8', new Piece( BISHOP, BLACK ) )
    this.board.setSquare( 'd8', new Piece( QUEEN, BLACK ) )
    this.board.setSquare( 'e8', new Piece( KING, BLACK ) )
    this.board.setSquare( 'f8', new Piece( BISHOP, BLACK ) )
    this.board.setSquare( 'g8', new Piece( KNIGHT, BLACK ) )
    this.board.setSquare( 'h8', new Piece( ROOK, BLACK ) )
  }
}