let title = document.getElementById("title");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");


let count = 0;



function clicker(){

    count+= 1;
    title.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "red";
    btn.style.backgroundColor = "red";
}

function clicker2(){

        count-= 1;
        title.innerText = count + " keer geklikt";
        document.body.style.backgroundColor = "blue";
        btn2.style.backgroundColor = "blue";


    }

    function clicker3(){

        count =1;
        title.innerText = count + "keer geklikt"
    }
 

   