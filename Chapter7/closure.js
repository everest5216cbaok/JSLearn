//(function (){
//    alert("Test if run!");
//})();

//function createComparisonFunction(propertyName){
//    return function(object1, object2){
//        var value1 = object1[propertyName];
//        var value2 = object2[propertyName];
//        
//        if(value1 < value2){
//            return -1;
//        }else if(value1 > value2){
//            return 1;
//        }else{
//            return 0;
//        }
//    }
//}
//
//var object1 = {
//    "name":"jay",
//    "age":33
//}
//
//var object2 = {
//    "name":"tab",
//    "age":28
//}
//
//var func = createComparisonFunction("name");
//var result = func(object1, object2);
//alert(result);

function createFunctions(){
    var result = new Array();
    
    for(var i = 0; i < 10; i++){
        result[i] = (function(num){
            return function(){
                return num;
            }
        })(i);
    }
    
    return result;
}

var result = createFunctions();
for(var i=5; i<result.length; ++i){
    console.log(result[i]());
    //alert(result[i]());
}
