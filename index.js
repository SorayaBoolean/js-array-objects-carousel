const imgArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

let slideAttiva= 0;

const itemsDom = document.querySelector ('.items');

const thumbsContainerDom = document.querySelector ('.thumbs-container');

for (let i = 0; i < imgArray.length ; i++) {
    itemsDom.innerHTML += `<div class="item"><img class=img-slide src="${imgArray[i]}"/></div>`

    thumbsContainerDom.innerHTML += `<div class="thumb"><img class=img-slide src="${imgArray[i]}"/></div>`;
  }

const itemList = document.getElementsByClassName ('item')
itemList [slideAttiva].classList.add('show');

const thumbList = document.getElementsByClassName ('thumb')
thumbList [slideAttiva].classList.add('active');

const next = document.querySelector ('.next');
const precious = document.querySelector ('.previous')

next.addEventListener('click',
function () {
  itemList [slideAttiva].classList.remove('show');
  thumbList [slideAttiva].classList.remove('active');

  slideAttiva++;
  itemList [slideAttiva].classList.add('show');
  thumbList [slideAttiva].classList.add('active');

  previous.classList.remove('hidden')

  if (slideAttiva == itemList.length -1) {
    next.classList.add ('hidden')
  }
}
);

const previous = document.querySelector ('.previous');

previous.addEventListener('click',
function () {
  itemList [slideAttiva].classList.remove('show');
  thumbList [slideAttiva].classList.remove('active');


  slideAttiva--;
  itemList [slideAttiva].classList.add('show');
  thumbList [slideAttiva].classList.add('active');

  next.classList.remove ('hidden')

  if (slideAttiva == 0)
    previous.classList.add ('hidden')
  }
  )
