function sub(){
    var exp = document.calc.textview.value;
    document.calc.textview.value = exp.substring(0, exp.length-1);
}