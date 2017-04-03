//alert(window.navigator.appCodeName);
//alert(window.navigator.appVersion);
//alert(window.navigator.cookieEnabled);
//alert(window.navigator.javaEnabled());
//alert(window.navigator.product);

function hasPlugin(name){
    name = name.toLowerCase();
    for(var i = 0; i < navigator.plugins.length; ++i){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}

alert(hasPlugin("Flash"));

alert(hasPlugin("QuickTime"));