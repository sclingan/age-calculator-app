
export default function formValidate() {
    let day: HTMLElement | null = document.getElementById('day');
    let dayValue = (document.getElementById('day') as HTMLInputElement).value;
    let month: HTMLElement | null = document.getElementById('month');
    let monthValue = (document.getElementById('month') as HTMLInputElement).value;
    let year: HTMLElement | null = document.getElementById('year');
    let yearValue = (document.getElementById('year') as HTMLInputElement).value;
    let validYear: HTMLElement | null = document.getElementById('valid-year');
    let validMonth: HTMLElement | null = document.getElementById('valid-month');
    let validDay : HTMLElement | null = document.getElementById('valid-day');
    let label = document.getElementsByTagName('label') as HTMLCollectionOf<HTMLElement>;
    let emptyDay: HTMLElement | null = document.getElementById('empty-day');
    let emptyMonth: HTMLElement | null = document.getElementById('empty-month');
    let emptyYear: HTMLElement | null = document.getElementById('empty-year');
    
    // Test for empty inputs
    if(dayValue === '') {
        label[0].classList.add('label-error');
        emptyDay?.classList.remove('sr-hidden');
        emptyDay?.classList.add('error');
        day?.classList.remove('input');
        day?.classList.add('input-error');
    } else {
        label[0].classList.remove('label-error');
        emptyDay?.classList.remove('error')
        emptyDay?.classList.add('sr-hidden');
        day?.classList.remove('input-error');
        day?.classList.add('input');
    }

    if(monthValue === '') {
        label[1].classList.add('label-error');
        emptyMonth?.classList.remove('sr-hidden');
        emptyMonth?.classList.add('error');
        month?.classList.remove('input');
        month?.classList.add('input-error');
    } else {
        label[1].classList.remove('label-error');
        emptyMonth?.classList.remove('error')
        emptyMonth?.classList.add('sr-hidden');
        month?.classList.remove('input-error');
        month?.classList.add('input');
    }
                
        
    if(yearValue === '') {
        label[2].classList.add('label-error');
        emptyYear?.classList.remove('sr-hidden');
        emptyYear?.classList.add('error');
        year?.classList.remove('input');
        year?.classList.add('input-error');
    } else {
        label[2].classList.remove('label-error');
        emptyYear?.classList.remove('error')
        emptyYear?.classList.add('sr-hidden');
        year?.classList.remove('input-error');
        year?.classList.add('input');
    }

    // Test for correct year, nothing in the future           
    let yearsValue = parseInt(yearValue);
    if(yearsValue > 2023){
        year?.classList.remove('input');
        year?.classList.add('input-error');
        validYear?.classList.remove('srhidden');
        validYear?.classList.add('error');
        label[2].classList.add('error');
    } else {
        label[2].classList.remove('error');
        validYear?.classList.remove('error');
        validYear?.classList.add('sr-hidden');
        year?.classList.remove('input-error');
        year?.classList.add('input');

    }
    
    
    // Test for correct input on month
    let monthsValue = parseInt(monthValue);
    if(monthsValue > 12) {
        month?.classList.remove('input');
        month?.classList.add('input-error');
        validMonth?.classList.remove('sr-hidden');
        validMonth?.classList.add('error');
        label[1].classList.add('error');

    } else {
        label[1].classList.remove('error');
        validMonth?.classList.remove('error');
        validMonth?.classList.add('sr-hidden');
        month?.classList.remove('input-error');
        month?.classList.add('input');

    }

    // Test for correct number of days of the month
    switch(monthValue) {
        case '2':
            if(dayValue > '28') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('sr-hidden');
                validDay?.classList.add('error');
                label[0].classList.add('error');
            } else {
                 day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-hidden');
                label[0].classList.remove('error');
            }
            break;

        case '4':
            if(dayValue === '31') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('sr-hidden');
                validDay?.classList.add('error');
                label[0].classList.add('error');
            } else {
                 day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-hidden');
                label[0].classList.remove('error');
            }
            break;

        case '6':
            if(dayValue === '31') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('sr-hidden');
                validDay?.classList.add('error');
                label[0].classList.add('error');
            } else {
                day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-hidden');
                label[0].classList.remove('error');
            }
            break;

        case '9':
            if(dayValue === '31') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('sr-hidden');
                validDay?.classList.add('error');
                label[0].classList.add('error');
            } else {
                day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-hidden');
                label[0].classList.remove('error');
            }
            break;

        case '11':
            if(dayValue === '31') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('srhidden');
                validDay?.classList.add('error');
                label[0].classList.add('error');
            } else {
                day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-hidden');
                label[0].classList.remove('error');
            }
            break;

            default: console.log('worked');
        }

}