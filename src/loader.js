(function(){
    var config = document.getElementById('loader.js').getAttribute("config");
    if (config){
        config = eval("(" + config + ")");
        var list = config.list;
        var html = document.getElementsByTagName('html')[0];


        // 同源的js还可以使用ajax方式获取内容使其生效

        // 循环添加
        for (var i = 0;i < list.length; i++){
            var el = document.createElement('script');
            el.src = config.base + list[i] + '.js';
            html.appendChild(el);
            // html.removeChild(el);
        }
    }
})();