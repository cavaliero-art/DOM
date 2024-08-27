function like(){
    if(this.style.color=='black'){
        this.style.color='red'
        
    }
    else{
        this.style.color='black'
    }

}
function remove(){
    this.parentElement.parentElement.parentElement.parentElement.style.display="none"

}
var trash=document.getElementsByClassName('fa-trash-alt')
var cards=document.getElementsByClassName('card')
for (var j=0;j<trash.length;j++){
    trash[j].addEventListener('click',remove)
}



var hearts=document.getElementsByClassName('fa-heart')
for (var i=0;i<hearts.length;i++){
    hearts[i].addEventListener('click',like)
}
var pluses=document.getElementsByClassName('fa-plus-circle')
for (var h=0;h<pluses.length;h++){
   pluses[h].addEventListener('click',add)
   pluses[h].addEventListener('click',addTotal)
}


function add(){

    console.log(this.parentElement.getElementsByClassName("quantity")[0].innerHTML++)
}


var minuses = document.getElementsByClassName('fa-minus-circle');
for (var k = 0; k < minuses.length; k++) {
    minuses[k].addEventListener('click', subtract);
    minuses[k].addEventListener('click', subtractTotal);
}

function add() {
    // yselecti elemtn quantite fi parent element
    var quantityElement = this.parentElement.getElementsByClassName("quantity")[0];

    // yrodou integer we kol mra yetzed 1 we updatih
    quantityElement.innerHTML = parseInt(quantityElement.innerHTML) + 1;

    //kima print
    console.log(quantityElement.innerHTML);
}

function subtract() {
    // // yselecti elemtn quantite fi parent element
    var quantityElement = this.parentElement.getElementsByClassName("quantity")[0];

    // yrodou integer and ychfou condition verifiee wla le
    if (parseInt(quantityElement.innerHTML) > 0) {
        quantityElement.innerHTML = parseInt(quantityElement.innerHTML) - 1;
    }

    // kima print 
    console.log(quantityElement.innerHTML);
}

 



function addTotal(){

    var price = parseInt(this.parentElement.parentElement.getElementsByClassName('unit-price')[0].innerHTML)
    var value=parseInt(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("total")[0].innerHTML)
    value+=price    
    this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("total")[0].innerHTML=`${value} $`
}

function subtractTotal(){
    var price = parseInt(this.parentElement.parentElement.getElementsByClassName('unit-price')[0].innerHTML)
    var value=parseInt(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("total")[0].innerHTML)
    if(value-price>=0){
        value-=price 
    }   
    this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("total")[0].innerHTML=`${value} $`
}
