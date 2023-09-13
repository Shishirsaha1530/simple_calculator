let display = document.getElementById('display');
allBtn = document.querySelectorAll('button');
let screen = '';
for(let items of allBtn){
    items.addEventListener('click', function(e){
        var btnText = e.target.innerText;
          if ( btnText == "X") {
         btnText =  ' * ';
         screen += btnText;
        display.value = screen;    
    }
    else if (btnText== 'C'){
        screen = '';
         display.value = screen;
    }
    else if (btnText == '='){
         display.value = eval (screen)
    }
    else{
        screen +=btnText;
        display.value = screen;
    }
    }) 
}