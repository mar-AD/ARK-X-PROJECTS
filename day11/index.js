

let sezurs = document.querySelector(".img");
let place = document.querySelector(".middle");
let result = document.querySelector(".results");
let btn = document.querySelector(".btn");
let imgs = document.querySelectorAll(".imgg");


let arrrray = [  
    'scissors.png',
    'rock.png',
    'paper.png'
] 


let computerPick;
let counter = 0;


btn.addEventListener("click", ()=>{
    computerPick = arrrray[getComputerChoice()];
    if (counter<arrrray.length) {
        counter ++;   
        sezurs.classList.add("none");
        // result.classList.add("nonee")
    }else{
        counter = 0;
        
    }
    // seting a timeout to reload every 4s--------------------

    setTimeout(() => {
        location.reload()
    }, 4000);
    
})
// getting a random value ---------------------------

function getComputerChoice (){
    const i = Math.floor(Math.random() * arrrray.length);
    return i;
}


// the possible conditons ------------------------

for (let i = 0; i < imgs.length; i++) {
    const element = imgs[i];
    element.addEventListener("click", (t)=>{
    const tar = t.target;
    const userPick = tar.src.substring(tar.src.lastIndexOf('/') + 1);
    // console.log(userPick)

    if (userPick=== computerPick) {
        sezurs.src=computerPick;
        place.innerHTML="you are even, try again";
        element.classList.add('none');
        console.log(computerPick)
    }else if (userPick=== 'scissors.png' && computerPick==='rock.png'){
        sezurs.src=computerPick;
        place.innerHTML="the computer won";
        place.classList.add("red");
        element.classList.add('none');
    }else if (userPick=== 'scissors.png' && computerPick==='paper.png'){
        sezurs.src=computerPick;
        place.innerHTML="the user won";
        place.classList.add("green");
        element.classList.add('none');
    }else if (userPick=== 'rock.png' && computerPick==='paper.png'){
        sezurs.src=computerPick;
        place.innerHTML="the computer won";
        place.classList.add("red");
        element.classList.add('none');
    }else if (userPick=== 'rock.png' && computerPick==='scissors.png'){
        sezurs.src=computerPick;
        place.innerHTML="the user won";
        place.classList.add("green");
        element.classList.add('none');
    }else if (userPick=== 'paper.png' && computerPick==='scissors.png'){
        sezurs.src=computerPick;
        place.innerHTML="the computer won";
        place.classList.add("red");
        element.classList.add('none');
    }else if (userPick=== 'paper.png' && computerPick==='rock.png'){
        sezurs.src=computerPick;
        place.innerHTML="the user won";
        place.classList.add("green");
        element.classList.add('none');
    }else{
        sezurs.src=computerPick;
        place.innerHTML="this is wrong";
        
    }
})
}

        

