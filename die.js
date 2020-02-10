const button = document.createElement('button');
button.textContent = 'New Dice!';
const buttonTwo = document.createElement('button');
buttonTwo.textContent = 'Roll Dice!';
const buttonThree = document.createElement('button');
buttonThree.textContent = 'Add Dice!';
const container = document.createElement('main');
container.className = 'container';

document.body.appendChild(button);
document.body.appendChild(buttonTwo);
document.body.appendChild(buttonThree);
document.body.appendChild(container);

let counter = 1;
let diceArr = [];
let adding = [];


class Box {
    constructor(value) {
        this.div = document.createElement('div');
        this.value = value
        this.div.className = 'box';
        this.div.id = counter;
        diceArr.push(this);
        this.roll();
        container.appendChild(this.div);
    };
    roll() {
        let numbers = (Math.floor((Math.random()) * 6) + 1);
        this.value = numbers;
        adding.push(numbers);
        console.log(adding);
        this.div.innerHTML = this.value;
    }
}
buttonThree.addEventListener('click', function () {
    var sum = 0;
    for (var i = 0; i < adding.length; i++) {
        sum += adding[i]
    }
    alert("The total of the dice is " + sum)
})

function reset() {
    sum = 0;
}

buttonTwo.addEventListener('click', () => diceArr.forEach(die => { die.roll() }));

button.addEventListener('click', function () {
    new Box();
    counter = (Math.floor((Math.random()) * 6) + 1);
});
// this.div.id.addEventListener('dblclick', () => {
//     if (this.div.id % 2 === 0) {
//         if (this.div.nextSibling === null) {
//             console.log("no new box");
//         } else {
//             container.removeChild(this.div.nextSibling);
//         }
//     } else {
//         if (this.div.previousSibiling === null) {
//             console.log('no new box');
//         } else {
//             container.removeChild(this.div.previousSibiling);
//         }
//     };
// });