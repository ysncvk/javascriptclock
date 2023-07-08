// writing firstName of user -begin-

let firstName = prompt("Lütfen Adınızı Girin")
let myName = document.querySelector("#myName")
myName.innerHTML = firstName

// writing firstName of user -end-

// writing time -begin

function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let day = date.getDay(); // 0 - 6

    switch (day){
        case 0:
        day ="Pazar"
        break;

        case 1:
        day ="Pazartesi"
        break;

        case 2:
        day ="Salı"
        break;
        
        case 3:
        day ="Çarşamba"
        break;

        case 4:
        day ="Perşembe"
        break;

        case 5:
        day ="Cuma"
        break;

        case 5:
        day ="Cumartesi"
        break;
    }
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + day;

    document.querySelector("#myClock").innerHTML = time;
    setTimeout(showTime, 1000);
    
}

showTime();
// writing time -end 