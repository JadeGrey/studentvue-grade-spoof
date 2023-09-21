const lettersInput = prompt("From decending order, place the letter grades you want separated by commas and a space (Ex. A-, C, B+, A, F)\nDo NOT use + on A or -/+ on F")
const letters = lettersInput.split(',').map((str) => str.trim());
const letterGrades = document.querySelectorAll('.mark');
const percentGrades = document.querySelectorAll('.score');
const gradesDivs = document.querySelectorAll('div:has(.mark):has(.score):not(.mark-count)');
const validGrades = [
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F"
];

if (percentGrades.length === letters.length) {

    let index = 0
    letterGrades.forEach((element) => {
        if (element.parentNode.querySelector('.mark-count')) {
            return
        }

        if (validGrades.includes(letters[index])) {
            element.textContent = letters[index];
        } else {
            alert(`'${
                letters[index]
            }' is not a valid grade, if you think this is an issue dm jade.grey on discord.`)
        } index++
    });
    
    gradesDivs.forEach((div) => {
        const letterGrade = div.querySelector('.mark');
        const percentGrade = div.querySelector('.score');
        if (letterGrade && letterGrade.textContent.trim() === 'A') {
            percentGrade.textContent = `${
                (Math.random() * (99.9 - 94.0) + 94.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'A-') {
            percentGrade.textContent = `${
                (Math.random() * (93.4 - 90.0) + 90.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'B+') {
            percentGrade.textContent = `${
                (Math.random() * (89.3 - 87.0) + 87.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'B') {
            percentGrade.textContent = `${
                (Math.random() * (86.3 - 83.0) + 83.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'B-') {
            percentGrade.textContent = `${
                (Math.random() * (82.3 - 80.0) + 80.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'C+') {
            percentGrade.textContent = `${
                (Math.random() * (79.3 - 77.0) + 77.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'C') {
            percentGrade.textContent = `${
                (Math.random() * (76.3 - 73.0) + 73.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'C-') {
            percentGrade.textContent = `${
                (Math.random() * (72.3 - 70.0) + 70.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'D+') {
            percentGrade.textContent = `${
                (Math.random() * (69.3 - 67.0) + 67.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'D') {
            percentGrade.textContent = `${
                (Math.random() * (66.3 - 65.0) + 65.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'D-') {
            percentGrade.textContent = `${
                (Math.random() * (64.3 - 63.0) + 63.0).toFixed(1)
            }%`;
        } else if (letterGrade && letterGrade.textContent.trim() === 'F') {
            percentGrade.textContent = `${
                (Math.random() * (62.3 - 0.0) + 0.0).toFixed(1)
            }%`;
        }
    });
} else {
    alert(`The number of classes does not match the number of grades provided. ${
        gradesDivs.length
    } to ${
        letters.length
    }`);
    if (confirm("Would you like to try again?")) {
        printComb()
    }
}
