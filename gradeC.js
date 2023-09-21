const letters = ["C+", "C", "C-"];
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


    if (letterGrade && letterGrade.textContent.trim() === 'C+') {
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
    }
});
alert('Replacing grades with C\'s...');
