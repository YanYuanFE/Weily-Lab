/**
 * Created by Weily FE on 2016.
 */
$(function(){
    var ble=true;
    var menuTime=["50","100","150","200","250","300","350"];
    var menuTimes=["10","20","30","40","50","60","70"];
    $(".sq_menu").on("click",function(){
        var navLength=$(".sq_meun_nav .sq_nav_1").length;
        if(ble){
            $(".sq_meun_back").animate({"left":"0"},500);
            for(var i=0;i<navLength;i++){
                $(".nav"+i).delay(menuTime[i]).animate({"marginLeft":"0"},"slow");
            }
            ble=false;
        }else{
            $(".sq_meun_back").delay(100).animate({"left":"-50%"},500);
            for(var ii=0;ii<navLength;ii++){
                $(".nav"+ii).delay(menuTimes[ii]).animate({marginLeft:"-155%"},100);
            }
            ble=true;
        }
    });

    var nav=$(".sq_meun_nav").find(".sq_nav_1");
    nav.hover(function() {
        $(this).children(".sq_nav_park").css("opacity","1");
    },function(){
        $(this).children(".sq_nav_park").css("opacity","0");
    });
});

$(function(){
    //此处引用：鼠标滚轮mousewheel插件
    
    $(function(){
        var i=0;
        var $btn = $('.section-btn li'),
            $wrap = $('.section-wrap'),
            $arrow = $('.arrow');
        
        /*当前页面赋值*/
        function up(){i++;if(i==$btn.length){i=0};}
        function down(){i--;if(i<0){i=$btn.length-1};}
        
        /*页面滑动*/
        function run(){
            $btn.eq(i).addClass('on').siblings().removeClass('on'); 
            $wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
        };
        
        /*右侧按钮点击*/
        $btn.each(function(index) {
            $(this).click(function(){
                i=index;
                run();
            })
        });
        
        /*翻页按钮点击*/
        $arrow.one('click',go);
        function go(){
            up();run(); 
            setTimeout(function(){$arrow.one('click',go)},1000)
        };
        
        /*响应鼠标*/
        $wrap.one('mousewheel',mouse_);
        function mouse_(event){
            if(event.deltaY<0) {up()}
            else{down()}
            run();
            setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
        };
        
        /*响应键盘上下键*/
        $(document).one('keydown',k);
        function k(event){
            var e=event||window.event;
            var key=e.keyCode||e.which||e.charCode;
            switch(key) {
                case 38: down();run();  
                break;
                case 40: up();run();    
                break;
            };
            setTimeout(function(){$(document).one('keydown',k)},1000);
        }
    });
})