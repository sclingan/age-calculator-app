
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
    if(day.value === '' || month.value === '' || year.value === '') {
        console.log('empty');
    }

    let yearValue = parseInt(year.value);
    if(yearValue > 2023){
        console.log('error for year');
    } 
    
    

    let monthValue = parseInt(month.value);
    if(month.value > 12) {
        console.log('month error');
    }

    
        switch(month.value) {
            case '4':
                if(day.value === '31') {
                    console.log('error');
                }
                break;
                case '6':
                  if(day.value === '31') {
                      console.log('error');
                  }
                  break;
                case '9':
                    if(day.value === '31') {
                            console.log('error');
                    }
                    break;
                case '11':
                    if(day.value === '31') {
                                console.log('error');
                    }
                    break;
                default: console.log('worked');
        }

}