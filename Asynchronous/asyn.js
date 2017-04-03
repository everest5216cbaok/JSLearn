//function f1(){
//    alert("run f1");
//}

function f1(callback){
    setTimeout(function(){
        alert("run f1");
        
        callback();
    }, 1000);
}

function f2(){
    alert("run f2");
}

//f1();
//f2();

f1(f2);