// JavaScript Document

function agechecker() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("agebox").value;
    try {
		
        if(x == "")  throw "please input information";
        if(isNaN(x)) throw "use a number";
        x = Number(x);
		//i had to put the x < 18 before the others because it worked out that way, got to this conclusion by commenting out and testing.
		if(x < 18)   throw "Too young sorry, not allowed to receive emails";
		if(x = 18)   throw "Congratulations you're old enough, Email incoming!!";
        if(x > 18)   throw "Congratulations you're old enough,Email incoming!!";
       
    }
    catch(err) {
        message.innerHTML = " " + err;
    }
    finally {
        document.getElementById("agebox").value = "";
    }
}
