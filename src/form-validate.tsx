
export default function formValidate() {
    // use this for form submit 
    // test for empty input 
    // test for valid days of month
    // 2 febuary 28 days,4 april 30days, 6 june 30 days, 9 september 30days, 11 november 30days
    // test for valid months, nothing over 12
    // test for vaild years, nothing over current year
    let day: HTMLElement | null = document.getElementById('day');
    let month: HTMLElement | null = document.getElementById('month');
    let year: HTMLElement | null = document.getElementById('year');
    let validYear: HTMLElement | null = document.getElementById('valid-year');
    let validMonth: HTMLElement | null = document.getElementById('valid-month');
    let validDay : HTMLElement | null = document.getElementById('valid-day');
    let label = document.getElementsByTagName('label') as HTMLCollectionOf<HTMLElement>;
    let emptyDay: HTMLElement | null = document.getElementById('empty-day');
    let emptyMonth: HTMLElement | null = document.getElementById('empty-month');
    let emptyYear: HTMLElement | null = document.getElementById('empty-year');

    if(day.value === '') {
     label[0].classList.add('error');
     emptyDay?.classList.remove('sr-only');
     emptyDay?.classList.add('error');
     day?.classList.remove('input');
        day?.classList.add('input-error');
    } else {
        label[0].classList.remove('error');
        emptyDay?.classList.remove('error')
        emptyDay?.classList.add('sr-only');
        day?.classList.remove('input-error');
        day?.classList.add('input');
    }

                
    if(month.value === '') {
        label[1].classList.add('error');
        emptyMonth?.classList.remove('sr-only');
        emptyMonth?.classList.add('error');
        month?.classList.remove('input')
        month?.classList.add('input-error');
    } else {
        label[1].classList.remove('error');
        emptyMonth?.classList.remove('error')
        emptyMonth?.classList.add('sr-only');
        month?.classList.remove('input-error');
        month?.classList.add('input');
    }
                
        
    if(year.value === '') {
        label[2].classList.add('error');
        emptyYear?.classList.remove('sr-only');
        emptyYear?.classList.add('error');
        year?.classList.remove('input');
        year?.classList.add('input-error');
    } else {
        label[2].classList.remove('error');
        emptyYear?.classList.remove('error')
        emptyYear?.classList.add('sr-only');
        year?.classList.remove('input-error');
        year?.classList.add('input');
    }

                
    let yearValue = parseInt(year.value);
    if(yearValue > 2023){
        year?.classList.remove('input');
        year?.classList.add('input-error');
        validYear?.classList.remove('sr-only');
        validYear?.classList.add('error');
        label[2].classList.add('error');
    } else {
        label[1].classList.remove('error');
        validYear?.classList.remove('error');
        validYear?.classList.add('sr-only');
        year?.classList.remove('input-error');
        year?.classList.add('input');

    }
    
    

    let monthValue = parseInt(month.value);
    if(monthValue > 12) {
        month?.classList.remove('input');
        month?.classList.add('input-error');
        validMonth?.classList.remove('sr-only');
        validMonth?.classList.add('error');
        label[1].classList.add('error');

    } else {
        label[1].classList.remove('error');
        validMonth?.classList.remove('error');
        validMonth?.classList.add('sr-only');
        month?.classList.remove('input-error');
        month?.classList.add('input');

    }

    
    switch(month.value) {
        case '4':
            if(day.value === '31') {
                day?.classList.remove('input');
                day?.classList.add('input-error');
                validDay?.classList.remove('sr-only');
                validDay?.classList.add('error');
                label[0].classList.add('error');
            } else {
                 day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-only');
                label[0].classList.remove('error');
            }
            break;

            case '6':
                if(day.value === '31') {
                    day?.classList.remove('input');
                    day?.classList.add('input-error');
                    validDay?.classList.remove('sr-only');
                    validDay?.classList.add('error');
                    label[0].classList.add('error');
                } else {
                day?.classList.remove('input-error');
                day?.classList.add('input');
                validDay?.classList.remove('error');
                validDay?.classList.add('sr-only');
                label[0].classList.remove('error');
                }
                break;

                case '9':
                    if(day.value === '31') {
                            day?.classList.remove('input');
                            day?.classList.add('input-error');
                            validDay?.classList.remove('sr-only');
                            validDay?.classList.add('error');
                            label[0].classList.add('error');
                    } else {
                        day?.classList.remove('input-error');
                        day?.classList.add('input');
                        validDay?.classList.remove('error');
                        validDay?.classList.add('sr-only');
                        label[0].classList.remove('error');
                    }
                    break;

                case '11':
                    if(day.value === '31') {
                                day?.classList.remove('input');
                                day?.classList.add('input-error');
                                validDay?.classList.remove('sr-only');
                                validDay?.classList.add('error');
                                label[0].classList.add('error');
                    } else {
                        day?.classList.remove('input-error');
                        day?.classList.add('input');
                        validDay?.classList.remove('error');
                        validDay?.classList.add('sr-only');
                        label[0].classList.remove('error');
                    }
                    break;

                default: console.log('worked');
        }

}