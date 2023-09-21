const letters = ["A", "A-"];
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


    if (letterGrade && letterGrade.textContent.trim() === 'A') {
        percentGrade.textContent = `${
            (Math.random() * (99.9 - 94.0) + 94.0).toFixed(1)
        }%`;
    } else if (letterGrade && letterGrade.textContent.trim() === 'A-') {
        percentGrade.textContent = `${
            (Math.random() * (93.4 - 90.0) + 90.0).toFixed(1)
        }%`;
    }
});
alert('Replacing grades with A\'s...');
