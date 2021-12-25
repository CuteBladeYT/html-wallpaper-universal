//  Date Type
//      * - Month represented in 3 letters name
//      
//      1 - Day.Month.Year
//      2 - Day Month Year *
//
//      3 - Month.Day.Year
//      4 - Month Day Year *
//
const dateType = 2
//


setInterval(() => {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    if (hour.toString().length == 1) {
        hour = "0" + time.getHours();
    };
    if (minute.toString().length == 1) {
        minute = "0" + time.getMinutes();
    };
    if (second.toString().length == 1) {
        second = "0" + time.getSeconds();
    };



    document.querySelector("#clock").innerHTML = "" + hour + ":" + minute + " " + second;


    var day = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();

    document.querySelector("#date").innerHTML = calculateDate();
}, 1000)

function calculateDate() {
    var dt = dateType.toString();
    var t = new Date();
    switch (dt) {
        case "1":
            return "" + t.getDate() + "." + (t.getMonth() + 1) + "." + t.getFullYear();
            break;
        case "2":
            return "" + t.getDate() + " " + calculateMonth((t.getMonth() + 1)) + " " + t.getFullYear();
            break;
        case "3":
            return "" + (t.getMonth() + 1) + "." + t.getDate() + "." + t.getFullYear();
            break;
        case "4":
            return "" + calculateMonth((t.getMonth() + 1)) + " " + t.getDate() + " " + t.getFullYear();
            break;
    };
}

function calculateMonth(mo) {
    parseFloat(mo);
    switch (mo) {
        case 1:
            return "Jan";
            break;
        case 2:
            return "Feb";
            break;
        case 3:
            return "Mar";
            break;
        case 4:
            return "Apr";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "Jun";
            break;
        case 7:
            return "Jul";
            break;
        case 8:
            return "Aug";
            break;
        case 9:
            return "Sep";
            break;
        case 10:
            return "Oct";
            break;
        case 11:
            return "Nov";
            break;
        case 12:
            return "Dec";
            break;
    };
}