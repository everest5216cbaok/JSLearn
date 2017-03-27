function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subproperty;
}

var instance = new SubType();
//alert(instance.getSuperValue());
//
//var property = false;
//SuperType();
//alert(property);

alert(instance instanceof Object);
alert(instance instanceof SuperType);
alert(instance instanceof SubType);

alert(Object.prototype.isPrototypeOf(instance));
alert(SuperType.prototype.isPrototypeOf(instance));
alert(SubType.prototype.isPrototypeOf(instance));
