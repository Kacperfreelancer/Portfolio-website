const heading = ['Freelancer.', 'WebDeveloper.', 'Copywriter.', 'Programmer.'];
const title = document.querySelector('.write-script');
let iterator = 0
let index = 0
let currentPhrase = []
let isDelete = false
let isEnd = false


const typeMachine = () => {
  isEnd = false;
  title.textContent = currentPhrase.join('')

  if (iterator < heading.length) {

    if (!isDelete && index <= heading[iterator].length) {
      currentPhrase.push(heading[iterator][index])
      index++
      title.textContent = currentPhrase.join('');
    }

    if (isDelete && index <= heading[iterator].length) {
      currentPhrase.pop(heading[iterator][index])
      index--
      title.textContent = currentPhrase.join('');
    }

    if (index === heading[iterator].length) {
      isEnd = true;
      isDelete = true;
    }

    if (isDelete && index === 0) {
      currentPhrase = [];
      isDelete = false
      iterator++
      if (iterator === heading.length)
        iterator = 0
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 200) + 200
  const time = isEnd ? 2000 : isDelete ? speedUp : normalSpeed;
  setTimeout(typeMachine, time);
}

typeMachine()

// Menu animation

const icon = document.querySelector('.burger-icon')
const menu = [...document.querySelectorAll('.menu')]
const allNavItems = [...document.querySelectorAll(".nav-animation")]

const handleAniamtion = () => {
  menu.forEach(item => {
    item.classList.toggle('active')
  })

  handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = `.${delayTime}s`;
    delayTime++;
    item.addEventListener('click', handleAniamtion)
  });
};

const handleIconColor = () => {
  const headerHeight = document.querySelector('.intro').scrollHeight;
  console.log(headerHeight)
  console.log(window.scrollY)

  if (window.scrollY > headerHeight - 50) {
    icon.classList.add('black')
  } else {
    icon.classList.remove('black')
  }
}

icon.addEventListener('click', handleAniamtion);
window.addEventListener('scroll', handleIconColor)