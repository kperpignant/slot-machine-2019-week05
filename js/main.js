//---- **Created with assistance from ChatGPT to form the core engine of this game** -----


const grid = document.getElementById('myGrid');

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

const coinsAvailOutput = document.querySelector('#coinsAvail');
const coinsSpentOutput = document.querySelector('#coinsSpent');

const spinButton1 = document.getElementById('spinButton1');
const spinButton2 = document.getElementById('spinButton2');
const spinButton3 = document.getElementById('spinButton3');

let coinsAvailAtStart = 100;
let coinsAvailCur = coinsAvailAtStart;
let coinsSpentAtStart = 0;
let coinsSpentCur = 0;
const coinsCostToSpin1 = 1;
const coinsCostToSpin2 = 2;
const coinsCostToSpin3 = 3;

isSpin1 = false;
isSpin2 = false;
isSpin3 = false;

coinsAvailOutput.innerText = coinsAvailCur;
coinsSpentOutput.innerText = coinsSpentCur;

const sonicSym = 2;
const tailsSym = 2;
const eggmanSym = 2;
const barSym = 3;
const jackPotSym = 4;

//----- Define the symbols and their score values -----
const symbols = [
    { name: "sonic", src: "img/Sonic.webp", value: 1},
    { name: "tails", src: "img/tails.webp", value: 1},
    { name: "eggman", src: "img/Eggman.webp", value: 1},
    { name: "bar", src: "img/Bar.webp", value: 2},
    { name: "jackpot", src: "img/Jackpot.webp", value: 3}
];
//---- Load the images for the symbols -----
const preloadImg = [];
symbols.forEach(symbol => {
    const img = new Image();
    img.src = symbol.src;
    preloadImg.push({...symbol,img});

});
//---- Random Number Generation -----
function getRandomSymbol(){
    return preloadImg[Math.floor(Math.random() * preloadImg.length)];
}
//---- Imitate a delay in the 'spin' of the slots ----
function spinner(reel, delay, callback){
    const img = reel.querySelector("img");
    img.src="";
    setTimeout(() => {
        const symbol = getRandomSymbol();
        img.src = symbol.src;

        if(callback) callback(symbol);
    }, delay);
}
//---- Received player input, generate the spin results ----
document.getElementById('spinButton1').addEventListener('click', () =>{

    if(coinsAvailCur >= coinsCostToSpin1){
        isSpin1 = true;
        doMath();

        const results = [];
        const bet = coinsCostToSpin1;

        spinner(slot1, 1500, symbol =>{
            results.push(symbol);
            if(results.length ===3) checkResults(results, bet);
        });
        spinner(slot2, 1500, symbol => {
            results.push(symbol);
            if(results.length === 3) checkResults(results, bet);
        });
        spinner(slot3, 1500, symbol => {
            results.push(symbol);
            if(results.length === 3) checkResults(results, bet);
        });
    }
});
//---- Received player input, generate the spin results ----
document.getElementById('spinButton2').addEventListener('click', () =>{

    if(coinsAvailCur >= coinsCostToSpin2){
        isSpin2 = true;
        doMath();

        const results = [];
        const bet = coinsCostToSpin2;
        spinner(slot1, 1500, symbol =>{
            results.push(symbol);
            if(results.length ===3) checkResults(results, bet);
        });
        spinner(slot2, 1500, symbol => {
            results.push(symbol);
            if(results.length === 3) checkResults(results, bet);
        });
        spinner(slot3, 1500, symbol => {
            results.push(symbol);
            if(results.length === 3) checkResults(results, bet);
        });
    }
});
//---- Received player input, generate the spin results ----
document.getElementById('spinButton3').addEventListener('click', () =>{

    if(coinsAvailCur >= coinsCostToSpin3){
        isSpin3 = true;
        doMath();

        const results = [];
        const bet = coinsCostToSpin3;
        spinner(slot1, 1500, symbol =>{
            results.push(symbol);
            if(results.length ===3) checkResults(results, bet);
        });
        spinner(slot2, 1500, symbol => {
            results.push(symbol);
            if(results.length === 3) checkResults(results, bet);
        });
        spinner(slot3, 1500, symbol => {
            results.push(symbol);
            if(results.length === 3) checkResults(results, bet);
        });
    }
});
//---- Do the math for adding and subtracting coins ----
function doMath(){

    if(isSpin1){
        coinsAvailCur = coinsAvailCur - coinsCostToSpin1;
        coinsSpentCur = coinsSpentCur + coinsCostToSpin1;
        coinsAvailOutput.innerText = coinsAvailCur;
        coinsSpentOutput.innerText = coinsSpentCur;
        isSpin1 = false
    }

    if(isSpin2){
        coinsAvailCur = coinsAvailCur - coinsCostToSpin2;
        coinsSpentCur = coinsSpentCur + coinsCostToSpin2;
        coinsAvailOutput.innerText = coinsAvailCur;
        coinsSpentOutput.innerText = coinsSpentCur;
        isSpin2 = false
    }

    if(isSpin3){
        coinsAvailCur = coinsAvailCur - coinsCostToSpin3;
        coinsSpentCur = coinsSpentCur + coinsCostToSpin3;
        coinsAvailOutput.innerText = coinsAvailCur;
        coinsSpentOutput.innerText = coinsSpentCur;
        isSpin3 = false;
    }
}
//---- Get and display results of a spin to the player if a win ----
function checkResults(results, bet){
    console.log("spin results:", results.map(s => s.name));

    if(results[0].name === results[1].name && results[1].name === results[2].name){
        const multiplier = results[0].value;
        const winnings = bet * multiplier;
        alert(`you hit 3 ${results[0].name}s! Payout: ${winnings} coins`);
        coinsAvailCur += winnings;
        coinsAvailOutput.innerText = coinsAvailCur;
    }
     else{
        // alert('No win, try again!');
        console.log('No win, try again!');
     }
}