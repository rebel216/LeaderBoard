const list = document.querySelector('.score-list');

const addToUI = (arr) => {
  list.innerHTML = '';
  arr.forEach((item) => {
    list.innerHTML += `
    <li class="item">${item.user} : ${item.score}</li>
    `;
  });
};
export default addToUI;
