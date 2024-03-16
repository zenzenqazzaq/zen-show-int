const { FootballLeague } = require('zen-football-leagues');
const { roundNumber } = require('zen-round-number');

function showInt() {
    const a = roundNumber();
    console.log(a)
    a = FootballLeague.getTeams();
}

module.exports = showInt;
