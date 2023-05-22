

export default function ageCalculator(e) {
    e.preventDefault();
    let day: HTMLElement = document.getElementById('day');
    let month: HTMLElement = document.getElementById('month');
    let year: HTMLElement = document.getElementById('year');
    console.log(day.value);
    console.log(month.value);
    console.log(year.value);
}