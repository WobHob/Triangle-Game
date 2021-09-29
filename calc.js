// For Area
// const base_size = document.querySelector(".base-input");
// const height_size = document.querySelector(".height-input");
const resultArea = document.querySelector(".result");

// For hypotenuse
const inputSide = document.querySelectorAll(".input");
const result = document.querySelector(".result");

const calcButton = document.querySelector(".btn-check");


//calulate area of triangle
calcButton.addEventListener("click", function calcArea() {
    if (inputSide[0].value > 0 && inputSide[1].value > 0) {
        const res = 1 / 2 * Number(inputSide[0].value) * Number(inputSide[1].value);
        resultArea.innerText = "The area of the Triangle is " + res;
    } else {
        resultArea.innerText = "Values must be greater than 0";
    }
});

//hypotenuse
calcButton.addEventListener("click", function calcHypotenuse() {
    if (Number(inputSide[0].value) > 0 && Number(inputSide[1].value) > 0) {
        const sum = sumOfSquares(inputSide[0].value, inputSide[1].value);
        const hypotenuse = Math.sqrt(sum);
        result.innerText = "The length of Hypotenuse is " + hypotenuse.toFixed(2);
    } else {
        result.innerText = "Values must be greater than 0"
    }
});

function sumOfSquares() {
    const sum = Number(inputSide[0].value) * Number(inputSide[0].value) + Number(inputSide[1].value) * Number(inputSide[1].value);
    return sum;
}