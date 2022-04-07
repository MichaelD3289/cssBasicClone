const menuButton = document.querySelector('.menu')
const menuBar = document.querySelector('.mainNav')
const menuNav = document.querySelector('.mainMenu')


if(window.innerWidth < 975) {
  menuBar.classList.add('scrolled')
} else {
  menuBar.classList.remove('scrolled')
}

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('clicked')
  menuNav.classList.toggle('clicked')
  menuBar.classList.toggle('clicked')
})

document.addEventListener('scroll', e => {
  console.log(e.target.defaultView)
  const {scrollY, innerWidth} = e.target.defaultView
  
  if(scrollY) {
    menuBar.classList.add('scrolled')
  } else if (!scrollY && innerWidth > 975) {
    menuBar.classList.remove('scrolled')
  }

})

document.addEventListener('resize', (e) => {
  if(window.innerWidth < 975) {
    menuBar.classList.add('scrolled')
  }
})

function handleChange({target: {value, name}}) {

 (name === "first" || name === "last") ? 
   
  setFormData(prev => {
      return {
        ...prev,
        name: { 
          ...prev.name,
          [name]: value},
      };
    });
   
    : setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }