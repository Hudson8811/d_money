function hide(){
    let hidTxt = document.getElementById('hiddenText');
    let hidIco = document.getElementById('hiddenIco');
    let container = $('#dropContainer.abs.dropzone');
    
    container.removeClass('flex-center');
    container.addClass('itemListGrid');
    
    
    // container.style.display = "flex";
    // container.style.flexFlow ="row wrap";
    // container.style.justifyContent ="flex-start";
    // container.style.padding = "10px";
    // container.style.flexDirection ="row";
    //container.style.flexWrap = "wrap";
    hidTxt.style.display = "none";
    hidIco.style.display = "none";
    
}

let id;
let elem;
function allowDrop(ev){
    ev.preventDefault();
}

function dragStart({target}){
    id = target.id;
    elem = $(target).closest('.dragzone');
    hide();
}
function drop(ev){
    ev.target.append(document.getElementById(id).parentElement.parentElement.parentElement);
    elem.remove();
    delete openmenu;
    delete hidemenu;
}

/*style="display: flex;flex-flow: row wrap;justify-content:  flex-start; padding: 10px;"*/



$(document).ready(function() {
    $('#slider4').slider({
				range: true,
				min: 0,
				max: 1000,
				values: [0,1000],
                change: function( event, ui ) {
                    console.log(ui);
                    $('#one').text(ui['values'][0]);
                    $('#two').text(ui['values'][1]);
                }
			});
    
;
    
    
    //placeholder
    $( ".dragzone" ).mouseover(function() {
        $(this).find('.hidden-cotainer').toggleClass('second-active');
    });
    
    $( ".dragzone" ).mouseout(function() {
        $('.hidden-cotainer').removeClass('second-active');
    });



    $('#lanclick').click(function() {

        if( $(this).find('i').text() == 'keyboard_arrow_down' ){
            $(this).find('i').text('keyboard_arrow_up')
        } else {
            $(this).find('i').text('keyboard_arrow_down')
        }

        
        $(this).toggleClass('active');
        $('#hiddenLanguages').toggle();


    });


    $('.menu-item .title').click(function(e) {

        e.preventDefault();

        $(this).toggleClass('active');
        $(this).siblings('.dropdownMenu').toggleClass('active');

        if( $(this).find('i').text() == 'keyboard_arrow_down' ){
            $(this).find('i').text('keyboard_arrow_up')
        } else {
            $(this).find('i').text('keyboard_arrow_down')
        }



    });
    
  
    
});




function funSwitch(){
    let x = document.getElementById('rr1');
    if(x.checked){
         document.getElementById('pole').checked =true;
    }
    else if(!x.checked){
        document.getElementById('pole').checked = false;
    }
}

function funSwitch2(){
   let x = document.getElementById('rr2');
    if(x.checked){
         document.getElementById('pole2').checked =true;
    }
    else if(!x.checked){
        document.getElementById('pole2').checked = false;
    }
}

function funSwitch3(){
   let x = document.getElementById('rr3');
    if(x.checked){
         document.getElementById('pole3').checked =true;
    }
    else if(!x.checked){
        document.getElementById('pole3').checked = false;
    }
}

function funSwitch4(){
   let x = document.getElementById('rr4');
    if(x.checked){
         document.getElementById('pole4').checked =true;
    }
    else if(!x.checked){
        document.getElementById('pole4').checked = false;
    }
}

$(".verticalScroll").scroll(function(){
    $("#mainContent")
        .scrollLeft($(".verticalScroll").scrollLeft());
});
$("#mainContent").scroll(function(){
    $(".verticalScroll")
        .scrollLeft($("#mainContent").scrollLeft());
});












