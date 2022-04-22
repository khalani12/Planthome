function currentTime(){
    let dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();

    if(dt.getHours() >= 5 && dt.getHours() <= 10 )
        {
        document.getElementById("welcome-message").innerHTML = "Good Morning ";
        }

    else if(dt.getHours() >= 23 && dt.getHours() <= 4 )
        {
        document.getElementById("welcome-message").innerHTML = "Someone's up late ";
        }

    else if(dt.getHours() >= 11 && dt.getHours() <= 15 )
        {
        document.getElementById("welcome-message").innerHTML = "Good Afternoon ";
        }

    else(dt.getHours() >= 16 && dt.getHours() <= 22 )
        {
        document.getElementById("welcome-message").innerHTML = "Good Evening ";
        }

    }

setInterval(currentTime,1000);







