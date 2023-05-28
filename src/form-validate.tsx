
export default function formValidate() {
    // use this for form submit 
    // test for empty input 
    // test for valid days of month
    // test for valid months, nothing over 12
    // test for vaild years, nothing over current year
    let day: HTMLElement | null = document.getElementById('day');
    let month: HTMLElement | null = document.getElementById('month');
    let year: HTMLElement | null = document.getElementById('year');
    console.log(day.value);
    if(day.value === '') {
        console.log('empty');
    }

}