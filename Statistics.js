class Statistics {
 constructor(){
  this.gameResults = [{win: true, bid: 20}, {win: false, bid: -10}, {win: true, bid: 10}];
 }
 addGameToStatistics(win, bid){
  let gameResult = {
      win,
      bid
  }
  this.gameResults.push(gameResult)
 }
 showGameStatistics(){
  let games = this.gameResults.length;
  let wins = this.gameResults.filter(result => result.win).length;
  let losses = this.gameResults.filter(result => !result.win).length;

//   console.log(games, wins, losses);
  return [games, wins, losses];
 }
}

const stats = new Statistics()