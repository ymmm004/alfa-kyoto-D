'use strict'
/* ヒントの開閉を設定します */
{
  const cardOpen = document.querySelectorAll(".card__title");
  for (let i = 0; i < cardOpen.length; i++){
    cardOpen[i].addEventListener('click', cardToggle);
  }
  function cardToggle(event) {
    var content = event.currentTarget.parentNode;
    content.classList.toggle('is-open');
  }
}