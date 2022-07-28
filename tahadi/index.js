if(localStorage.getItem('FilMinHon') == 'error'){
    alert("game over");
    document.getElementById('principale').style.display = 'none'; 
    document.getElementById('finish').innerHTML = "Game Over"; 
    document.body.style.background = 'black';
}
var possible = 0;
var firstcheck = 1;
var secondcheck = 0;
var total = 0;
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li value='22' class='zero' id='zero'>0</li>";
    document.getElementsByClassName("zero")[index].value = index +1;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='one'>1</li>" ;
    document.getElementsByClassName("one")[index].value = index +8;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='two'>2</li>" ;
    document.getElementsByClassName("two")[index].value = index +15;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='three'>3</li>" ;
    document.getElementsByClassName("three")[index].value = index +22;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='four'>4</li>" ;
    document.getElementsByClassName("four")[index].value = index +29;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='five'>5</li>" ;
    document.getElementsByClassName("five")[index].value = index +36;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='six'>6</li>" ;
    document.getElementsByClassName("six")[index].value = index +43;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='seven'>7</li>" ;
    document.getElementsByClassName("seven")[index].value = index +50;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='eight'>8</li>" ;
    document.getElementsByClassName("eight")[index].value = index +57;
}
for (let index = 0; index < 7; index++) {
    document.getElementById("list").innerHTML += "<li class='nine'>9</li>" ;
    document.getElementsByClassName("nine")[index].value = index +64;
}

// #############  0
for (let index = 0; index < 7; index++) {
    document.getElementsByClassName("zero")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("zero")[index].style.background == "black"){
            document.getElementsByClassName("zero")[index].style.background = 'white';
            document.getElementsByClassName("zero")[index].style.color = 'green';
            document.getElementsByClassName("zero")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('zero')[index].value;
    }
    document.getElementsByClassName("zero")[index].style.background = "black";
    })

// ###############     1



    document.getElementsByClassName("one")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("one")[index].style.background == "black"){
            document.getElementsByClassName("one")[index].style.background = 'white';
            document.getElementsByClassName("one")[index].style.color = 'green';
            document.getElementsByClassName("one")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('one')[index].value;
    }
    document.getElementsByClassName("one")[index].style.background = "black";
    })

// ###############  2

    document.getElementsByClassName("two")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("two")[index].style.background == "black"){
            document.getElementsByClassName("two")[index].style.background = 'white';
            document.getElementsByClassName("two")[index].style.color = 'green';
            document.getElementsByClassName("two")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('two')[index].value;
    }
    document.getElementsByClassName("two")[index].style.background = "black";
    })

// ###############  3

    document.getElementsByClassName("three")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("three")[index].style.background == "black"){
            document.getElementsByClassName("three")[index].style.background = 'white';
            document.getElementsByClassName("three")[index].style.color = 'green';
            document.getElementsByClassName("three")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('three')[index].value;
    }
    document.getElementsByClassName("three")[index].style.background = "black";
    })

// ###############  four

    document.getElementsByClassName("four")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("four")[index].style.background == "black"){
            document.getElementsByClassName("four")[index].style.background = 'white';
            document.getElementsByClassName("four")[index].style.color = 'green';
            document.getElementsByClassName("four")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('four')[index].value;
    }
    document.getElementsByClassName("four")[index].style.background = "black";
    })

// ###############  five

    document.getElementsByClassName("five")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("five")[index].style.background == "black"){
            document.getElementsByClassName("five")[index].style.background = 'white';
            document.getElementsByClassName("five")[index].style.color = 'green';
            document.getElementsByClassName("five")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('five')[index].value;
    }
    document.getElementsByClassName("five")[index].style.background = "black";
    })

// ############### six

    document.getElementsByClassName("six")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("six")[index].style.background == "black"){
            document.getElementsByClassName("six")[index].style.background = 'white';
            document.getElementsByClassName("six")[index].style.color = 'green';
            document.getElementsByClassName("six")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('six')[index].value;
    }
    document.getElementsByClassName("six")[index].style.background = "black";
    })

// ###############  seven

    document.getElementsByClassName("seven")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("seven")[index].style.background == "black"){
            document.getElementsByClassName("seven")[index].style.background = 'white';
            document.getElementsByClassName("seven")[index].style.color = 'green';
            document.getElementsByClassName("seven")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('seven')[index].value;
    }
    document.getElementsByClassName("seven")[index].style.background = "black";
    })

// ###############  eight

    document.getElementsByClassName("eight")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("eight")[index].style.background == "black"){
            document.getElementsByClassName("eight")[index].style.background = 'white';
            document.getElementsByClassName("eight")[index].style.color = 'green';
            document.getElementsByClassName("eight")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('eight')[index].value;
    }
    document.getElementsByClassName("eight")[index].style.background = "black";
    })

// ###############  nine

    document.getElementsByClassName("nine")[index].addEventListener('click',function check(){
        if(document.getElementsByClassName("nine")[index].style.background == "black"){
            document.getElementsByClassName("nine")[index].style.background = 'white';
            document.getElementsByClassName("nine")[index].style.color = 'green';
            document.getElementsByClassName("nine")[index].style.border = '1px green solid';
            possible --;
            if(possible == 0){
                firstcheck = 0;
            }
            return false
        }
        if(possible >=1){
            alert("please check up one and complet your check");
            return false;
        }
    possible ++;
    if(possible == 1){
        firstcheck = document.getElementsByClassName('nine')[index].value;
    }
    document.getElementsByClassName("nine")[index].style.background = "black";
    })
}
// ###############
var score = 0;
if(localStorage.getItem('score') != null){
    score = localStorage.getItem('score');
}
function draw(){
    secondcheck = Math.random() * 100;
    console.log(secondcheck.toFixed(0));
    if (firstcheck == 0) {
        alert("please check one");
        return false;
    }
    if (firstcheck == secondcheck.toFixed(0)) {
        alert("you win");
        localStorage.setItem('score' , score++);
        document.getElementById('cheked').innerHTML = score;
    }else{
        alert("game over");
        document.getElementById('done').style.display = 'none'; 
        document.getElementById('finish').innerHTML = "Game Over"; 
        localStorage.setItem('FilMinHon',"error");
    }
}

setInterval(() => {
    document.getElementById('cheked').innerHTML = possible;
}, 500);


