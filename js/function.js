//header와 scolltop버튼 이벤트
$(function(){
    $(window).on("scroll",function(){
        
        scrollTop = $(this).scrollTop();
        console.log("scrollTop의 값은 ", scrollTop);

        if (scrollTop > 250) {
            $("header").addClass("none");
        }else{
            $("header").removeClass("none");  
        };

        if (scrollTop > 10) {
            $(".scolltop").fadeIn(200);
        }else{
            $(".scolltop").fadeOut(200);  
        };
    });

    $(".scolltop>a").on("click",function(evt){
        evt.preventDefault();

        $("html,body").stop().animate({
            scrollTop: 0
          });
    });

});

//lan 이벤트
$(function(){
    var $lan=$("header>.header_wrap>.lan");
    var $lanList=$("header>.header_wrap>.lan>ul>li");

   $lan.on({
       "mouseenter":function(){
            $lanList.stop().slideDown(200);
       },
       "mouseleave":function(){
            $lanList.stop().slideUp(200);   
       }
   });
});

//nav 이벤트
$(function(){
    var $nav=$("header>.header_wrap>nav");
    var $gnbMnu=$("header>.header_wrap>nav>.gnb>li>a");
    var $sub_bg=$("header>.bg_sub");
    var $sub_banner=$("header>.header_wrap>nav>.sub_banner");
    var $sub_mnu=$("header>.header_wrap>nav>.gnb>li>.sub");
    var $toggle=$("header>.header_wrap>nav>.toggle_btn>a");
    var $lan=$("header>.header_wrap>.lan");
    
    $nav.on({
        "mouseenter":function(){
            $("header").css({
                backgroundColor:'#fff',
                'border-bottom':'1px solid #f3f3f3'
            });
            
            $gnbMnu.css({
                color:'#262626'
            });
            
            $toggle.parent().addClass("on");
            
            $sub_bg.stop().slideDown(200);
            $sub_banner.stop().slideDown(200);
            $sub_mnu.stop().fadeIn(200);

            $lan.addClass("on");
        },
        
        "mouseleave":function(){
            $("header").css({
                backgroundColor:'rgba(0,0,0,0)',
                'border-bottom':'none'           
            });
            
            $gnbMnu.css({
                color:'#fff'
            });        
            
            $toggle.parent().removeClass("on");        
            
            $sub_bg.stop().slideUp(200);
            $sub_banner.stop().slideUp(200);
            $sub_mnu.stop().fadeOut(200);
            
            $lan.removeClass("on");
        }
    });

    
    
    
    $sub_bg.on({        
        "mouseenter":function(){        
            $("header").css({
                backgroundColor:'#fff',
                'border-bottom':'1px solid #f3f3f3'
            });

            $gnbMnu.css({
                color:'#262626'
            });

            $toggle.parent().addClass("on");

            $(this).stop().slideDown(200);
            $sub_banner.stop().slideDown(200);
            $sub_mnu.stop().fadeIn(200);
            $lan.addClass("on");
        },
        
        "mouseleave":function(){
            $("header").css({
                backgroundColor:'rgba(0,0,0,0)',
                'border-bottom':'none'           
            });
            
            $gnbMnu.css({
                color:'#fff'
            });        
            
            $toggle.parent().removeClass("on");        
            
            $(this).stop().slideUp(200);
            $sub_banner.stop().slideUp(200);
            $sub_mnu.stop().fadeOut(200); 
            $lan.remocveClass("on");
        }               
        
    });// $sub_bg mouseenter 이벤트
});

//#slide 이벤트
$(function(){
    var $indicator=$("#slides>.slides-pagination>li>a");
    var $slides=$("#slides>.slides-container>li");
    var nowIdx=0;

    function slideMove(){
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $slides.filter('.on').stop().fadeOut(1000).removeClass('on'); //이전 슬라이드 사라짐
        $slides.eq(nowIdx).stop().fadeIn(1000).addClass('on'); //이번에 나타날 슬라이드가 나타남 
    }

    function nextIdx(){
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    }
    
    //autoplay
    intervalKey=setInterval(function(){
        nextIdx();
        slideMove();
    },2000);

    $indicator.on('click',function(evt){
        evt.preventDefault();
        
        clearInterval(intervalKey);
        nowIdx=$indicator.index(this);
        slideMove();
    });
});

//#business-wrap slide 이벤트
$(function(){
    var $container=$("#business-wrap>.business-slides>.slides-container");
    var $btnPrev=$("#business-wrap .slide-controls>a.prev");
    var $btnNext=$("#business-wrap .slide-controls>a.next");
    var $page=$("#business-wrap .slide-page>ol>li");
    var nowIdx=0;

    function pageMove(){
        $page.eq(nowIdx).addClass("on").siblings().removeClass("on");
    };

    function counter(){
        var $counter=$("#business-wrap .slide-counter>span>strong");
        $counter.text(nowIdx+1);
    };


    $btnPrev.on("click",function(evt){
        evt.preventDefault();

        $container.stop().animate({
            marginLeft:-1900
        },200,  function(){
            $container.children('li').last().prependTo($container);
            $container.css('margin-left', -3200);
        });

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=6;
        }
        pageMove();
        counter();
    });

    $btnNext.on("click",function(evt){
        // console.log("li의 width = ",-$container.find("li").width())
        evt.preventDefault();

        $container.stop().animate({
            marginLeft:-4500
        },200,  function(){
            $container.children('li').eq(0).appendTo($container);
            $container.css('margin-left', -3200);
        });
        
        if(nowIdx<6){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        pageMove();
        counter();
    });
});

//.footer-wrap familt-site 이벤트
$(function(){
    $("input,button").on("click",function(){
        $(".family-site>.list>.site-list").slideToggle(200);
    });
});