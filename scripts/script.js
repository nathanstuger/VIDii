var spook1 = document.querySelector('article:first-of-type button')
var spook2 = document.querySelector('article:nth-of-type(2) button')
var spook3 = document.querySelector('article:nth-of-type(3) button')
var spook4 = document.querySelector('article:nth-of-type(4) button')
var spook5 = document.querySelector('article:nth-of-type(5) button')

var story1 = document.querySelector('main > section:nth-of-type(2)')
var story2 = document.querySelector('main > section:nth-of-type(3)')
var story3 = document.querySelector('main > section:nth-of-type(4)')
var story4 = document.querySelector('main > section:nth-of-type(5)')
var story5 = document.querySelector('main > section:nth-of-type(6)')


var button = document.querySelector('main > section:nth-of-type(2) button')
var button2 = document.querySelector('main > section:nth-of-type(3) button')
var button3 = document.querySelector('main > section:nth-of-type(4) button')
var button4 = document.querySelector('main > section:nth-of-type(5) button')
var button5 = document.querySelector('main > section:nth-of-type(6) button')




button.addEventListener('click', ()=>{
console.log('hheeeey')
    story1.classList.remove('show')
})


button2.addEventListener('click', ()=>{
console.log('hheeeey')
    story2.classList.remove('show')
})

button3.addEventListener('click', ()=>{
console.log('hheeeey')
    story3.classList.remove('show')
})

button4.addEventListener('click', ()=>{
console.log('hheeeey')
    story4.classList.remove('show')
})

button5.addEventListener('click', ()=>{
console.log('hheeeey')
    story5.classList.remove('show')
})




spook1.addEventListener('click', ()=>{
    console.log('hheeeey')
    story1.classList.add('show')
})
spook2.addEventListener('click', ()=>{
    console.log('hheeeey')
    story2.classList.add('show')
})
spook3.addEventListener('click', ()=>{
    console.log('hheeeey')
    story3.classList.add('show')
})
spook4.addEventListener('click', ()=>{
    console.log('hheeeey')
    story4.classList.add('show')
})
spook5.addEventListener('click', ()=>{
    console.log('hheeeey')
    story5.classList.add('show')
})



const update = (e) => {
  let x = e.clientX || e.touches[0].clientX
  let y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

// WAAROP luisteren voor een event? WELK event, WAT doen
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
//for(const spook of spoken){
//  spook.addEventListener('click',()=>{
//    huidigVerhaal = spook.id;
//    toggleVenster();
//  })
//}
//sluitVenster.addEventListener('click',toggleVenster);