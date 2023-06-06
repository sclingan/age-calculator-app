
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
    let button: HTMLElement | null = document.getElementById('button');
    

    /* 
    TODO:
         
    */

    // Test for empty inputs
    if(dayValue === '') {
        label[0].classList.add('label-error');
        emptyDay?.classList.remove('sr-only');
        emptyDay?.classList.add('error');
        day?.classList.remove('input');
        day?.classList.add('input-error');
        button?.classList.remove('button');
        button?.classList.add('button-error');
    } else {
        label[0].classList.remove('label-error');
        emptyDay?.classList.remove('error')
        emptyDay?.classList.add('sr-only');
        day?.classList.remove('input-error');
        day?.classList.add('input');
        button?.classList.remove('button-error');
        button?.classList.add('button');
    }

    if(monthValue === '') {
        label[1].classList.add('label-error');
        emptyMonth?.classList.remove('sr-only');
        emptyMonth?.classList.add('error');
        month?.classList.remove('input');
        month?.classList.add('input-error');
        button?.classList.remove('button');
        button?.classList.add('button-error');
    } else {
        label[1].classList.remove('label-error');
        emptyMonth?.classList.remove('error')
        emptyMonth?.classList.add('sr-only');
        month?.classList.remove('input-error');
        month?.classList.add('input');
        button?.classList.remove('button-error');
        button?.classList.add('button');
    }
                
        
    if(yearValue === '') {
        label[2].classList.add('label-error');
        emptyYear?.classList.remove('sr-only');
        emptyYear?.classList.add('error');
        year?.classList.remove('input');
        year?.classList.add('input-error');
        button?.classList.remove('button');
        button?.classList.add('button-error');
    } else {
        label[2].classList.remove('label-error');
        emptyYear?.classList.remove('error')
        emptyYear?.classList.add('sr-only');
        year?.classList.remove('input-error');
        year?.classList.add('input');
        button?.classList.remove('button-error');
        button?.classList.add('button');
    }

    // Test for correct year, nothing in the future           
    let yearsValue = parseInt(yearValue);
    if(yearsValue > 2023){
        year?.classList.remove('input');
        year?.classList.add('input-error');
        validYear?.classList.remove('sr-only');
        validYear?.classList.add('error');
        label[2].classList.add('error');
        button?.classList.remove('button');
        button?.classList.add('button-error');
    } else {
        label[2].classList.remove('error');
        validYear?.classList.remove('error');
        validYear?.classList.add('sr-only');
        year?.classList.remove('input-error');
        year?.classList.add('input');
        button?.classList.remove('button-error');
        button?.classList.add('button');

    }
    
    
    // Test for correct input on month
    let monthsValue = parseInt(monthValue);
    if(monthsValue > 12) {
        month?.classList.remove('input');
        month?.classList.add('input-error');
        validMonth?.classList.remove('sr-only');
        validMonth?.classList.add('error');
        label[1].classList.add('error');
        button?.classList.remove('button');
        button?.classList.add('button-error');

    } else {
        label[1].classList.remove('error');
        validMonth?.classList.remove('error');
        validMonth?.classList.add('sr-only');
        month?.classList.remove('input-error');
        month?.classList.add('input');
        button?.classList.remove('button-error');
        button?.classList.add('button');

    }

    // Test for correct number of days of the month
    switch(monthValue) {
        case '4':
            if(dayValue === '31') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('sr-only');
                validDay?.classList.add('error');
                label[0].classList.add('error');
                button?.classList.remove('button');
                button?.classList.add('button-error');
            } else {
                 day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-only');
                label[0].classList.remove('error');
                button?.classList.remove('button-error');
                button?.classList.add('button');
            }
            break;

            case '6':
                if(dayValue === '31') {
                    day?.classList.remove('input');
                    day?.classList.add('input-error');
                    validDay?.classList.remove('sr-only');
                    validDay?.classList.add('error');
                    label[0].classList.add('error');
                    button?.classList.remove('button');
                    button?.classList.add('button-error');
                } else {
                day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-only');
                label[0].classList.remove('error');
                button?.classList.remove('button-error');
                button?.classList.add('button');
                }
                break;

                case '9':
                    if(dayValue === '31') {
                            day?.classList.remove('input');
                            day?.classList.add('input-error');
                            validDay?.classList.remove('sr-only');
                            validDay?.classList.add('error');
                            label[0].classList.add('error');
                            button?.classList.remove('button');
                            button?.classList.add('button-error');
                    } else {
                        day?.classList.remove('input-error');
                        day?.classList.add('input');
                        validDay?.classList.remove('error');
                        validDay?.classList.add('sr-only');
                        label[0].classList.remove('error');
                        button?.classList.remove('button-error');
                        button?.classList.add('button');
                    }
                    break;

                case '11':
                    if(dayValue === '31') {
                                day?.classList.remove('input');
                                day?.classList.add('input-error');
                                validDay?.classList.remove('sr-only');
                                validDay?.classList.add('error');
                                label[0].classList.add('error');
                                button?.classList.remove('button');
                                button?.classList.add('button-error');
                    } else {
                        day?.classList.remove('input-error');
                        day?.classList.add('input');
                        validDay?.classList.remove('error');
                        validDay?.classList.add('sr-only');
                        label[0].classList.remove('error');
                        button?.classList.remove('button-error');
                        button?.classList.add('button');
                    }
                    break;

                default: console.log('worked');
        }

}