const letters = ["D+", "D", "D-"];
const letterGrades = document.querySelectorAll('.mark');
const percentGrades = document.querySelectorAll('.score');
const gradesDivs = document.querySelectorAll('div:has(.mark):has(.score):not(.mark-count)');

letterGrades.forEach((element) => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];
    element.textContent = randomLetter;
});

gradesDivs.forEach((div) => {
    const letterGrade = div.querySelector('.mark');
    const percentGrade = div.querySelector('.score');


    if (letterGrade && letterGrade.textContent.trim() === 'D+') {
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
    }
});
alert('Replacing grades with D\'s...');
