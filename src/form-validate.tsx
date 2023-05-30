
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
    let empty: HTMLElement | null = document.getElementById('empty');
    if(day.value === '' || month.value === '' || year.value === '') {
        console.log('empty');
    }

    let yearValue = parseInt(year.value);
    if(yearValue > 2023){
        year?.classList.remove('input');
        year?.classList.add('input-error');
        validYear?.classList.remove('sr-only');
        validYear?.classList.add('error');
    } 
    
    

    let monthValue = parseInt(month.value);
    if(month.value > 12) {
        month?.classList.remove('input');
        month?.classList.add('input-error');
        validMonth?.classList.remove('sr-only');
        validMonth?.classList.add('error');

    }

    
        switch(month.value) {
            case '4':
                if(day.value === '31') {
                    day?.classList.remove('input');
                    day?.classList.add('input-error');
                    validDay?.classList.remove('sr-only');
                    validDay?.classList.add('error');
                }
                break;
                case '6':
                  if(day.value === '31') {
                      day?.classList.remove('input');
                      day?.classList.add('input-error');
                      validDay?.classList.remove('sr-only');
                      validDay?.classList.add('error');
                  }
                  break;
                case '9':
                    if(day.value === '31') {
                            day?.classList.remove('input');
                            day?.classList.add('input-error');
                            validDay?.classList.remove('sr-only');
                            validDay?.classList.add('error');
                    }
                    break;
                case '11':
                    if(day.value === '31') {
                                day?.classList.remove('input');
                                day?.classList.add('input-error');
                                validDay?.classList.remove('sr-only');
                                validDay?.classList.add('error');
                    }
                    break;
                default: console.log('worked');
        }

}