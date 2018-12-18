(function(){
    'use strict';
    let price = document.getElementById('price');
    let num = document.getElementById('num');
    let unit = document.getElementById('unit');
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let reset = document.getElementById('reset');

    function checkInput(){
        if(
            price.value.match(/^[1-9][0-9]*$/) !== null &&
            num.value.match(/^[1-9][0-9]*$/) !==null
        ){
            btn.classList.remove('disabled');
        }else{
            btn.classList.add('disabled');
        }
    }

    btn.addEventListener('click',function(){
        let payLess;
        let short;
        let payMore;
        let over;
        let str;
        
        if(this.classList.contains('disabled')===true){
            return;
        }

        payLess = Math.floor(price.value/num.value/unit.value)*unit.value;
        short = price.value - (payLess*num.value);
        payMore = Math.ceil(price.value /num.value/unit.value)*unit.value;
        over = Math.abs(price.value - (payMore*num.value));

        if(unit.value === "5000000000000000"){
            result.textContent = "5000兆円欲しい！"
        }else{
    
            if(over === 0 && short === 0){
                str = `一人${price.value/num.value}円ちょうどです!`;
            }else{
                str =
                `一人${payLess}円だと${short}円足りません。`+
                `一人${payMore}円だと${over}円余ります。`;
            }
            result.textContent = str;
        }

        reset.classList.remove('hidden');


    });

    price.addEventListener('keyup',checkInput);
    num.addEventListener('keyup',checkInput);

    reset.addEventListener('click',function(){
        result.textContent ="ここに結果を表示します";
        price.value="";
        num.value="";
        unit.value=100;

        btn.classList.add('disabled');
        this.classList.add('hidden');
        price.focus();
    });
    price.focus();

})();
