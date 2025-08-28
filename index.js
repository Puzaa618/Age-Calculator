document.getElementById("button").onclick = function()
{
    const DateTime = luxon.DateTime;
    
    let inputBirth = document.getElementById("your-birth").value;
    let birthdate = DateTime.fromISO(inputBirth);
    let currentDate = DateTime.now();

    let age = currentDate.year - birthdate.year;

    let month = currentDate.month - birthdate.month;
    if(age < 3)
        {
            document.getElementById("result").style.color = "red";
            document.getElementById("result").textContent = `CERTIFIED CLOWN you --->🤡`;
            return;
        }
    if(month < 0)
        {
            document.getElementById("result").style.color = "black";
            age--;
            month += 12;
        }
    let date = currentDate.day - birthdate.day;
    let newdate;
    if(date < 0)
        {
            newdate = 30 + date;
            month--;
            document.getElementById("result").style.color = "black";
            document.getElementById("result").textContent = `${age} years ${month} months ${newdate} days old`
        }
    else
        {
            newdate = date;
            document.getElementById("result").textContent = `${age} years ${month} months`
        }

}
