
// ----------------------btnsssss--------------
// const addUser = document.querySelector("#add-user");
// const doubleMone = document.querySelector("#double");
// const millionaires = document.querySelector("#show-millionaires");
// const sortt = document.querySelector("#sort");
// const calculateSum = document.querySelector("#calculate-wealth");

// // elemnt we need-----------------

// const maindiv=document.querySelector("#main");

// data array------------------

// const userData = [ 
//     {   namee:'omar agdib',
//         money: 1
//     },
//     {   namee:'zaka aziz',
//         money: 1
//     },
//     {   namee:'marra abd',
//         money: 1
//     },
//     {   namee:'mangala hiktor',
//         money: 1
//     },
//     {   namee:'roberto lomigiz',
//         money: 1
//     },
//     {   namee:'zalbador kra',
//         money: 1
//     },
//     {   namee:'bondagani sika',
//         money: 1
//     },
//     {   namee:'lhaj l3tmani',
//         money: 1
//     },
//     {   namee:'l3erbi sontimontal',
//         money: 1
//     },
//     {   namee:'fin glsti',
//         money: 1
//     },
// ]

    
//     // console.log(random)
    


// // let counter = 0;
// function rnadomUserMoney (){
//     let laaka=Math.floor(Math.random()*userData.length)
//     let randommon=userData[laaka].money;
//     // console.log(Math.floor(Math.random()*randommon*100000))
//     let ran = Math.floor(Math.random()*randommon*1000000)
//     return ran
// }
// function rnadomUserName (){
//     let userr=Math.floor(Math.random()*userData.length)
//     return userData[userr].namee;
    
// }



// const dolar = '$';
// addUser.addEventListener("click",  ()=> {
//     // console.log(dolar+rnadomUserMoney()+'.00');
//     // console.log(rnadomUserName())

//     const newItem = document.createElement('div');
//     newItem.classList.add('person');
//     const newName = document.createElement('div')
//     newName.innerHTML =`<h3>${rnadomUserName()}</h3> `;
//     newItem.appendChild(newName);
//     const newNum = document.createElement('div')
    
//     newNum.innerHTML = `<h3>${dolar+rnadomUserMoney()+'.00'}</h3>`;
//     newItem.appendChild(newNum);
//     maindiv.appendChild(newItem); 
// })


// let arr =[];

// doubleMone.addEventListener("click", ()=>{

//     let elem = document.querySelectorAll('.person');
//     elem.forEach(element => {
//         let itemm= element.querySelector('div:nth-child(2)>h3');
//         let textitemm=itemm.innerHTML;
//         // console.log(textitemm)
//         let turn=parseInt(textitemm.replace(dolar, ""));
//         let douuubl=itemm.textContent = `${turn*2}`;
        
//         arr.push(douuubl);
//         // console.table(arr)
//         arr.map(element =>{
//             itemm.textContent = `${dolar}${element}.00`;
//         })
//     });
// })


// let Rr=[]

// millionaires.addEventListener("click", ()=>{
//     let elem = document.querySelectorAll('.person');
    
    
//         elem.forEach(Element =>{
//             let itemm = Element.querySelector('div:nth-child(2)>h3');
//             let textitemm=itemm.textContent;
//             let turn = parseInt(textitemm.replace(dolar, ''))
//             Rr.push(turn)
//             if (turn < 1000000) {
//             Element.style.display='none'; 
//             }
        
//         })
    
// })
// // })


// let elemennt=[]
// sortt.addEventListener("click", ()=>{
//     let elem = document.querySelectorAll('.person');
//     elem.forEach(element => {
//         let itemm = element.querySelector('div:nth-child(2)>h3');
//         let textitemm=itemm.textContent;
//         let turnn = parseInt(textitemm.replace(dolar, ''))
//         elemennt.push(turnn)
//         elemennt.forEach(ele =>{
//             let sorted = ele.sort((a,b) => b - a );
//             itemm.innerHTML=sorted
//         })
        
//     });

// })




// calculateSum.addEventListener("click", ()=>{
//     let sum=numra.reduce((a,b) => (+a)+(+b))
//     console.log(arr)
//     let sumdiv=document.createElement('div');
//     sumdiv.classList.add('person')
//     let title=document.createElement('div');
//     let dis=title.innerHTML=`<h3>this is the wealth:</h3>`
//     let summ=document.createElement('div');
//     let last =summ.innerHTML=`<h3>${dolar}${sum}.00</h3>`
//     sumdiv.appendChild(title);
//     sumdiv.appendChild(summ)
//     maindiv.appendChild(sumdiv)
// })







const userData = [ 
    {   namee:'ramo agdib',
        money: 346436
    },
    {   namee:'يباياسي ايف',
        money: 3568
    },
    {   namee:'marad abad',
        money: 676900
    },
    {   namee:'mangala hiktor',
        money: 135365
    },
    {   namee:'roberto lomigiz',
        money: 13464589
    },
    {   namee:'zalbador kra',
        money: 96075
    },
    {   namee:'يءسس حمطك',
        money: 14577
    },
    {   namee:'lhaj l3tmani',
        money: 456658
    },
    {   namee:'تافلازسثل لق',
        money: 87689554
    },
    {   namee:'fin glsti',
        money: 7879796
    },
    {   namee:'achkadir nta tema',
        money: 99796
    },
]




const addUser = document.querySelector("#add-user");
const doubleMone = document.querySelector("#double");
const millionaires = document.querySelector("#show-millionaires");
const sortt = document.querySelector("#sort");
const calculateSum = document.querySelector("#calculate-wealth");

// elemnt we need-----------------

const maindiv=document.querySelector("#main");



// function randomName (){
//     const ranuse=Math.floor(Math.random()*userData.length);
//     return userData[ranuse]
    
// }
// console.log(randomName())

const dolar = '$';
const zero = '.00';

let counter= 0;


// function creatitems(elementt){
//     const newItem=document.createElement('div');
//         newItem.classList.add('person');
//         const left = document.createElement('div');
//         left.innerHTML = `<h3>${elementt.namee}</h3>`;
//         newItem.appendChild(left);
//         const right = document.createElement('div');
//         right.innerHTML = `<h3>${dolar}${elementt.money}.00</h3>`;
//         let mon = `${elementt.money}`;
//         array.push(mon)
//         newItem.appendChild(right);
//         maindiv.appendChild(newItem)
//     }

const array=[];


function getinside(index) {
    if (index >= 0 && index < userData.length) {
        let element =userData[index]
        const newItem=document.createElement('div');
        newItem.classList.add('person');
        const left = document.createElement('div');
        left.innerHTML = `<h3>${element.namee}</h3>`;
        newItem.appendChild(left);
        const right = document.createElement('div');
        right.innerHTML = `<h3>${dolar}${element.money}${zero}</h3>`;
        let mon = right;
        array.push(mon)
        newItem.appendChild(right);
        maindiv.appendChild(newItem)
    }
}

function deletTheSum(){
    let itman=maindiv.children;
    for (let i = 0; i < itman.length; i++) {
        let child = itman[i];
        let classList = child.classList;
    if (classList.contains( 'last' )) {
        child.style.display='none'
    }
}
}

addUser.addEventListener("click", ()=>{
    // console.log(randomName())
        getinside[counter];
        counter++;
        if(counter>=userData.length+1){
            counter=0;
        }
        getinside(counter);
        deletTheSum()
})




doubleMone.addEventListener('click', ()=>{
    array.map(element=>{
        
        let item=element.textContent.replace(dolar, '')*2
        element.innerHTML = `<h3>${dolar}${item}${zero}</h3>`;
        deletTheSum()
    })
})




millionaires.addEventListener('click', ()=>{
    array.filter(element=>{
        let item=element.textContent.replace(dolar, '')
        if (item < 1000000) {
            element.parentElement.classList.add('none')
        }
        deletTheSum()
    })
})

sortt.addEventListener("click", ()=>{
    const numbers = array.map(item => item.textContent.replace(dolar, "").replace(zero,''));
    // console.log(numbers)
    numbers.sort((a, b) => b - a);
    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML = `<h3>${dolar}${numbers[i]}${zero}</h3>`;
    }
})


calculateSum.addEventListener('click', ()=>{
    const number = array.map(item => parseInt(item.textContent.replace(dolar, '').replace(zero,'')))
    let summ =number.reduce((a,b)=> a + b)
    console.log(summ)
        let elem = document.createElement('div')
        elem.classList.add('last')
        let tit = document.createElement('h3')
        let desc = document.createElement('h3')
        desc.textContent =` THIS IS THE TOTAL:`;
        elem.appendChild(desc);
        tit.textContent=`${dolar}${summ}${zero}`;
        elem.appendChild(tit);
        maindiv.appendChild(elem);  

})