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

let dolar = '$';
let zero = '.00';
let count = 0;
const array = [];
const all = [];

function creatItem(i){
    if (i >= 0 && i < userData.length) {
        let elemennt = userData[i];
        let newItem = document.createElement('div');
        newItem.classList.add('person');
        let person = newItem;
        all.push(person)
        let left = document.createElement('div');
        left.innerHTML=`<h3>${elemennt.namee}</h3>`;
        newItem.appendChild(left);
        let right = document.createElement('div');
        right.innerHTML=`<h3>${dolar}${elemennt.money}${zero}</h3>`;
        let wealth = right;
        array.push(wealth);
        newItem.appendChild(right);
        maindiv.appendChild(newItem);
    }
}

addUser.addEventListener('click', ()=>{
    
    creatItem[count]
    count++;
    if (count >= userData.length) {
        count = 0;
    }
    creatItem(count);
    deleteTheLast();
})


doubleMone.addEventListener('click', ()=>{
    array.map(element =>{
        // console.log(element)
        let doubleItem = element.textContent.replace(dolar,"").replace(zero,"")*2;
        element.innerHTML = `<h3>${dolar}${doubleItem}${zero}</h3>`;
        // console.log(doubleItem)
    })
    deleteTheLast();
})


millionaires.addEventListener('click', ()=>{
    array.filter(element =>{
        let onlyMillions = element.textContent.replace(dolar,"").replace(zero,"")
        // console.log(onlyMillions)
        if (onlyMillions < 1000000) {
            element.parentElement.classList.add('none');
        }
    })
    deleteTheLast()
})


sortt.addEventListener('click', ()=>{
    
        let theWealth = all.map((element) => parseInt(element.children[1].textContent.replace(dolar, "").replace(zero, "")));
        let thePerson = all.map((element) => element.children[0].textContent);

        let combinedData = theWealth.map((wealth, index) => ({
            wealth,
            person: thePerson[index] }));
        // console.table(combinedData)
        combinedData.sort((a, b) => b.wealth - a.wealth);
    
        for (let i = 0; i < all.length; i++) {
            let element = all[i];
            element.children[1].innerHTML = `<h3>${dolar}${combinedData[i].wealth}${zero}</h3>`;
            element.children[0].innerHTML = `<h3>${combinedData[i].person}</h3>`;
        }
    })



    calculateSum.addEventListener('click',() =>{

        let total= array.map((element)=> parseInt(element.textContent.replace(dolar, "").replace(zero, "")));
        // console.log(total)
        let lastTotal = total.reduce((a,b) => a+b)
        let theSum = document.createElement('div');
        theSum.classList.add('last');
        let desc = document.createElement('div');
        theSum.appendChild(desc);
        let number = document.createElement('div');
        theSum.appendChild(number);
        maindiv.appendChild(theSum);
        desc.innerHTML= `<h3>THIS IS THE TOTAL:====></h3>`;
        number.innerHTML=`<h3>${dolar}${lastTotal}${zero}</h3>`;
    })





    function deleteTheLast() {
        let last = maindiv.children;
        for (let i = 0; i < last.length; i++) {
            const child = last[i];
            let theClass=child.classList;
            if (theClass.contains('last')) {
                child.style.display='none'
            } 
        }
    }