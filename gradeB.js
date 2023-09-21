const letters = ["B+", "B", "B-"];
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


    if (letterGrade && letterGrade.textContent.trim() === 'B+') {
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
    }
});
alert('Replacing grades with B\'s...');
