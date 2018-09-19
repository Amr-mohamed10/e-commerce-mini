 /* eslint-env node, mocha */

/*global console , $ ,document*/

/* eslint no-console: 0*/

/*global window */

/* Data - scroll */

$(function () {
  
    'use strict';
    
  $('#Home,#about-us,#services,#solutions,#products,#contact-us').addClass('block');

if ($("#Home,#about-us,#services,#solutions,#products,#contact-us").hasClass("block")) {
  $("#Home,#about-us,#services,#solutions,#products,#contact-us").css({"min-height": "1200px", "background-color": "#EEEE", "padding": "20px 0", "margin": "20px", "text-align": "center"}); }
    // calculate body padding debend on navbar padding // 
    
        $('body').css('padding-top', $('.navbar').innerHeight());

    // scroll //
    $('.navbar li a').click(function(e) {
    
    e.preventDefault();
    
    $('html,body').animate({
        
        scrollTop : $('#' + $(this).data('scroll')).offset().top - 60
        
    }, 1000);
    });

    // add active class // 
   
    $('.navbar li a').click(function() {
   
    //$('.navbar a').removeClass('active');
        
    //$(this).addClass('active');
            
 $(this).addClass('active1').parent().siblings().find('a').removeClass('active1')    
    
    });

   

    $(window).scroll(function() {
        
        // Sync Navbar links With Sections // 

        $('.block').each(function() {
            
          if($(window).scrollTop() >= $(this).offset().top - 100) {
             
              var blockID = $(this).attr('id');
             
              $('.navbar a').removeClass('active2');
              
            $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active2');

          }  
            
        });

        // Scroll button //
        
        if($(window).scrollTop() >= 1000) {
         
        
            if($('.scroll').is(':hidden')) {
               
                $('.scroll').fadeIn(1000);
               
               }
            }else {
            
          $('.scroll').fadeOut(1000);
        }
               
            });
    
    // click to top scroll
    
     $('.scroll').click(function (e) {e.preventDefault(); 
    
    $('html,body').animate({
        
        scrollTop : 0
        
    }, 1000);
   
     });
    
    // show popup
    
    $('.show-popup').click(function() {
        
        $('.pop').fadeIn(1000);
    });

    // close popup
    
    $('.inner-pop button').click(function(e) {
        
        e.preventDefault();
        
        $(this).parentsUntil('.pop').parent().fadeOut(500);
    });

    // make escape hidde popup 
    
    // keyCode : escape = 27 
    
  $(document).keydown(function (e) {
      
      if(e.keyCode === 27){
          
        $('.pop').fadeOut();  
      }
      
  });
    
    // button with effects
    
    $('.show-button-from-left').hover(function() {
        
        $(this).find('span').eq(0).animate({
            
            width: '100%'
        }, 500);
        
    }, function () {
        
        $(this).find('span').eq(0).animate({
            
            width: '0'
        }, 500);
        
        
    });
    
    // hover from top
    
        $('.show-button-from-top').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            height:'100%'
        },500);
        
    }, function(){
        
        $(this).find('span').eq(0).animate({
            
            height:'0'
        },500);
        
        
    });

    // hover from border bottom 
    
    $('.show-button-from-border').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            width:'100%'
        },500);
        
    }, function(){
        
        $(this).find('span').eq(0).animate({
            
            width:'0'
        },500);
        
        
    });
    
    
    // hover form top
    
            $('.show-button-from-border').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            width:'3px'
        },500);
        
    }, function(){
        
        $(this).find('span').eq(0).animate({
            
            width:'0'
        },500);
    });
    
    // Star button bounce //
    
    // make function for bounce button //
    
    function bounceElment (selector,times,distance,speed){
        
        for (var i = 0 ; i < times; i= i + 1 ){  // DO LOOP FOR Repetition event 
            
        $(selector).animate({
            
        top:'-=' + distance  // (-=) that char used for decrease your currently value
            
        },speed).animate({
            
         top:'+=' + distance  // (-=) that char used for increase your currently value

        },speed);

    }

        }
    
    $('.bounce').on('click',function(){
        
        bounceElment(this,5,20,400);
    });
    
    
    // End button bounce //
    
    //fixed menu
    
$( ".fa-gear" ).click(function() {
    
  $( this ).parent('.fixed-menu').toggleClass( "is-visible" );
    
    
    if($('.fixed-menu').hasClass('is-visible')){
        
    
          $(this).parent('.fixed-menu').animate({
              
              left: 0 
              
          },500);
        
        $('body').animate({
              
              paddingLeft: $('.fixed-menu').innerWidth() - 20 + 'px'
              
          },500);

        
    } else{
           $( this ).parent('.fixed-menu').animate({
              
              left: '-' + $(this).parent('.fixed-menu').innerWidth() + 'px'
               
          },500);
       
        $('body').animate({
              
              paddingLeft: 0
              
          },500);

    }
    
});

    

    // animated progress bar 
    
$('.progress span').each(function(){
    
    
    $(this).animate({
        
        width: $(this).attr('data-progress')
        
    },1000, function(){
        
        $(this).text($(this).attr('data-progress'))
    });
           
});

    
    // change websie themes 
$('.change-colors li').on('click',function(){
    
    $('body').attr('data-default-color',$(this).data('color'));
});
    

    //  gallery //
    
    $('.thumbanils img').on('click',function(){
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
        
        $('.master img').hide().attr('src',$(this).attr('src')).fadeIn(1000);
    });
    
    
    $('.gallery .fa-chevron-right').on('click',function(){
        
        if($('.thumbanils .selected').is(':last-child')){
            
           $('.thumbanils img').eq(0).click(); 
        }else{
       
            
            $('.thumbanils .selected').next().click();
        }
    });
    
    
    $('.gallery .fa-chevron-left').on('click',function(){
        
        if($('.thumbanils .selected').is(':first-child')){
            
           $('.thumbanils img:last').click(); 
        }else{

        
        $('.thumbanils .selected').prev().click();
        }
        
        });
    
        // make thumbanils width Dynamic //

    var NubOfThubnails = $('.thumbanils').children().length,
        
        MarginOfThubnails = '0.5',
        
        TotalMarginOfThubnails = (NubOfThubnails - 1) * MarginOfThubnails , 
        
        // because the last child won't has a margin right

        ThubnailsWidth = (100 - TotalMarginOfThubnails) / NubOfThubnails ; 
    
    
        $('.gallery .thumbanils img').css({
            
            'width':ThubnailsWidth + '%',
            
            'margin-right':MarginOfThubnails + '%'
        });
    
    $('.gallery .thumbanils img:last-child').css('margin-right',0);
    
    
    // Star products // 

    $('.product i , .item i').on('click',function(){
        
        $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
    })
    
    
// switch list and grid view 
    
    $(".view-option i").on('click',function(){
        
        $(this).addClass('active').siblings().removeClass('active');
        
        $('.items').removeClass('list-view grid-view').addClass($(this).data('class'));
        
    });
    
    // Star error message //
    
    $('.message').each(function(){
      
        $(this).animate({
        
            top: '67px'
        
    }, 1000, function(){
            
            $(this).delay(3000).fadeOut();
        });
        
    });
    // End error message //

    
    // Star form // 
   
        // Star hide and show placeholder // 
    
/*

        $('input[placeholder], textarea[placeholder]').focus(function(){

          $(this).removeAttr('placeholder'); 

        }).focusout(function(){

          $(this).attr('placeholder',$(this).data('class')); 

        });
*/
                     //or//
    
        var attrplace = '';         // storage placeholder value at that variable
    
        $('input[placeholder], textarea[placeholder]').focus(function(){
            
         attrplace =   $(this).attr('placeholder');
            
          $(this).removeAttr('placeholder'); 

        }).focusout(function(){

          $(this).attr('placeholder',attrplace); 

        });

        // End hide and show placeholder // 

        // Star error message //
    
        $('[required]').blur(function(){
        
            if($(this).val()== ''){
                
            //    $(this).next('span').fadeIn();
                //$('.the-message').fadeIn();
            }
            
        });
    
       // End error message // 

      // Star Asterisk // 
    
  $('[required]').before("<span class='asterisk'>*</span>");  
    
        $('[required]').blur(function(){
        
        if($(this).val()== ''){
                
         $(this).prev('span').fadeIn().delay(2000).fadeOut();
        //$('.the-message').fadeIn();
        
        }
            
        });
 
    // make Asterisk dimensions  dynamic //
    
        $('.asterisk').each(function(){
            
            $(this).css({
                
                'top': 18,
                
               'left': $(this).parent('div').find(':input').innerWidth() - 6
            });
            
            
        });
    
     // End Asterisk // 
    
    // Star upload box //
    
    $('.our-form input[type="file"]').change(function(){
        
        $(this).prev('span').text($(this).val());
        console.log($(this).val());
        
    })
    // End upload box  //
    
    // Star change input direction depend on languages // 
    
        var arabic =' ضصثقفغعهخحجدطكمنتالبيسشئءؤرلاىةوزظذ'  ,
        text = '';
    
    for(var i =0; i<arabic.length; i=i+1){
        
        text += arabic.charCodeAt(i) + '<br>';
    }

    $('[required]').keyup(function(){
        
        if($(this).val().charCodeAt(0)== text){
        

            $(this).css('direction','ltr'). $(this).attr('placeholder','type your email');

            
        }else{
            

            $(this).css('direction','rtl');
            
            

        }
    });
        
    // End change input direction depend on languages // 
    
    // Star The words are symbolic //
    
    $('.our-tag').on('keyup', function(Event){
                    
        var key= Event.keyCode || Event.which ;
                    
        if(key === 188){
            
            $('.tag').append('<span class="tag-words"><i class=" icon fa fa-times"></i>' + $(this).val().slice(0,-1) + '</span>')
                    $(this).val('');
            
            
        }
        
    
     });
    
            $('.tag').on('click','.fa-times',function(){
                
                $(this).parent('.tag-words').remove();
                
             
            });
    

        if($('.our-tag').val($('.tag-words').text()) == $('.tag-words').text()){
            
            console.log('yes');
        }
       
    
    // End The words are symbolic //

    
    // end form//
    
    // Star trim function //
    
    function trim (selector, maxlenth ){

        $(selector).each(function(){
            
        
        if($(selector).text().length > maxlenth){
            
       var select = $(selector).text().substr(0,maxlenth);
            
            $(this).text(select);
            
        } 
    });
    }
    //End trim function //

    // Star same height //
    
    var maxHeight = 0;
    
    $('.same-height div').each(function(){
        
        if($(this).height() > maxHeight){   // LOOP
            
          maxHeight =  $(this).height();
        }
    });
    
     $('.same-height div').height(maxHeight);
    
    // End same height //
    
    // Star shuffle cards // 
        
    var xindex = 0 ;
    
    $('.cards .card').on('click',function(){
        
        $(this).animate({
            
            left: '30%',
            
            marginTop: '30px'

        },400 ,function(){                 // call-back function
            
            xindex--;
            
            $(this).css('z-index',xindex);
            
        }).animate({
            
            left: $(this).css('left'),
            
            marginTop: 0 
        },400);
    });
    
    // End shuffle cards //
    
    // Star blink-warning //
    
     blink();
    
    function blink (){
        
    $('.warning').fadeOut(700,function(){
        
        $(this).fadeIn(700);
        
        blink();                    // Repeat function infinty //
        
    });
    
    }
    
    // End blink-warning //
    
    // Star to-do list //
    
    $('.add-task').on('submit',function(e){
        
        e.preventDefault();
        
        if($('.task-input').val() !=''){
            
            $('.tasks').append('<li>'+$('.task-input').val() +'</li>');
            
            $('.task-input').val('');
        }
        
    });
    
    $('.tasks').on('click','li',function(){        // li after click because there is an li dynamic // 
        
        $(this).css('text-decoration','line-through');
        
    });
    
   // End to-do list // 
    
        
        
  // Star type-writer //
    
var typeWriter = $('.writer').data('text'),
    writerLength = typeWriter.length,
    n = 0,
    
    theTyper= setInterval(function(){
        
        $('.writer').each(function(){
            
            $(this).html($(this).html() + typeWriter[n]);
            
        });
                    n = n+1 ;
            
            if( writerLength == n){
                
                clearInterval( theTyper);
            }
    },100);
 // End type-writer // 
    
// Star tables //
    
    var ages = 0;
    
$('.school tr:not(:first-child, :last-child) td:last-child').each(function(){
    
    ages +=parseInt($(this).text());   // parse int() converte string to intg 
});
    
    $('.the-total').text(ages);
    
// End  tables //
    
// Star qoutes-today //
    
$(document).ready(function autoChange(){
     
     $('.ticker-list .active').each(function(){
            
            if(! $(this).is(':last-child')){
             
             $(this).delay(1000).fadeOut(1000,function(){
                             
                    $(this).removeClass('active').next().addClass('active').fadeIn(); 
                 
                    autoChange();
             });
         }else{
             
            $(this).delay(1000).fadeOut(1000,function(){
                    
               $(this).removeClass('active');
                
            $('.ticker-list li').eq(0).addClass('active').fadeIn();
                
                autoChange();
         
            });
         }
     });
 });
// End qoutes-today //
    
// Star dynamic tabs //

    $(".tabs-list li").on('click',function(){
                
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('content')).siblings().hide();
         $($(this).data('content')).fadeIn();
        
    })
    
    // make the dynamic tabs vertical //
    
    $('.switch').on('click',function(){
        
        $('.dynamic-tabs').toggleClass('left-tabs');
        
    });
// End dynamic tabs //     

// Star suggest box //
    
    $('.email-suggest').on('keyup',function(){
        
        $(this).next().fadeIn(10);
        

    });

    if($('.email-suggest').val('')){
        
        $('body').on('click','.suggest-box li',function(){
        
        var value = $('.email-suggest').val();
        
       $('.email-suggest').val(value + $(this).text() + '.com');
        
        $('.suggest-box').fadeOut(100);
    });

        
    }
    
// End suggest box //     
});
        
    


