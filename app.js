(function () {

    let screen = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-res');
    let clear = document.querySelector('.btn-clr');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    
    equal.addEventListener('click',function(e){
        
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let result = eval(screen.value);
            screen.value = result;
        }
    });

    clear.addEventListener('click', function(e){
         screen.value = "";
    })

})();
