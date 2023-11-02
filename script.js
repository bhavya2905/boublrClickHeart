const loveME = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let clickTime =0;
loveME.addEventListener('click', (e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime()-clickTime) <800){
            createHeart(e)

            clickTime =0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e)=>{

    times.innerText = +times.innerText+1;
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y= e.clientY;

    const xOffset = e.target.offsetLeft;
    const yOffset = e.target.offsetTop

    const xInside = x - xOffset;
    const yInside = y-yOffset;

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveME.appendChild(heart)
}