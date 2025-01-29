const Discord = require("discord.js")
const TicTacToeEN = require("discord-tictactoe")

new TicTacToeEN({
  token: 'ENTER_TOKEN_HERE',
  language: 'en',
  command: 'tictactoe',
  commandOptionName: 'opponent',
  textCommand: '!ttt'
}).login().then(() => console.log("The tic tac toe is online in ENGLISH!"));


