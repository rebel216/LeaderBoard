import Leaderboard from './js/LeaderBoard.js';
import './style.css';

const addForm = document.querySelector('form');
const playerName = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.refresh');
const list = document.querySelector('.score-list');

const leaderboard = new Leaderboard();

let gameId;
const startGame = () => {
  leaderboard
    .NewGame('my cool new game')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[3]];
    });
};

const addToUI = (arr) => {
  list.innerHTML = '';
  arr.forEach((item) => {
    list.innerHTML += `
    <li class="item">${item.user} : ${item.score}</li>
    `;
  });
};

const getScores = () => {
  leaderboard.getScores(gameId).then((response) => addToUI(response.result));
};

const addScore = (e) => {
  leaderboard.postScore(gameId, playerName.value, score.value);

  playerName.value = '';
  score.value = '';
  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', addScore);
refresh.addEventListener('click', getScores);
