//function SuperType(){
//    this.property = true;
//}
//
//SuperType.prototype.getSuperValue = function(){
//    return this.property;
//}
//
//function SubType(){
//    this.subproperty = false;
//}
//
////inherit from SuperType
//SubType.prototype = new SuperType();
//
//SubType.prototype.getSubValue = function(){
//    return this.subproperty;
//}
//
////override existing method
//SubType.prototype.getSuperType = function(){
//    return false;
//}
//
//var instance = new SubType();
////alert(instance.getSuperValue());
////
////var property = false;
////SuperType();
////alert(property);
//
////alert(instance instanceof Object);
////alert(instance instanceof SuperType);
////alert(instance instanceof SubType);
////
////alert(Object.prototype.isPrototypeOf(instance));
////alert(SuperType.prototype.isPrototypeOf(instance));
////alert(SubType.prototype.isPrototypeOf(instance));
//
//
//////problems of prototype chain
////function SuperType(){
////    this.colors = ["red", "blue", "green"];
////}
////
////function SubType(){
////}
////
////SubType.prototype = new SuperType();
////
////var instance1 = new SubType();
////instance1.colors.push("black");
////
////var instance2 = new SubType();
////alert(instance2.colors);

//function SuperType(){
//    this.colors = ["red", "blue", "green"];
//}
//
//function SubType(){
//    //继承了SuperType
//    SuperType.call(this);
//}
//
//var instance1 = new SubType();
//instance1.colors.push("black");
//alert(instance1.colors);
//
//var instance2 = new SubType();
//alert(instance2.colors);

//function SuperType(name){
//    this.name = name;
//}
//
//function SubType(){
//    SuperType.call(this, "Nicholas");
//    
//    this.age = 29;
//}
//
//var instance = new SubType();
//alert(instance.name);
//alert(instance.age);


function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
    alert(this.name);
}

function SubType(name, age){
    SuperType.call(this, name);//do--1
    this.age = age;
}

//继承方法
SubType.prototype = new SuperType();//do--2
SubType.prototype.constructor= SubType;//do--3 need?
//添加自己的原型方法？那不就是添加SuperType实例的方法么？
SubType.prototype.sayAge = function(){
    alert(this.age);
}

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);
instance2.sayName();
instance2.sayAge();