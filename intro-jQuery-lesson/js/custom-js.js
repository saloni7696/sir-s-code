$(document).ready(function(){
    $(function(){
        $('#head').load('meta.html');
        $('#header').load('header.html');
        $('#footer').load('footer.html');
    });
    //here we will find the dimension of the div woth the id div1
    $(".btn-1").click(function(){
        var txt = "";
        txt += "<p>Width of div: " + $('#div1').width() + "px</p>";
        txt += "<p>Height of div: " + $('#div1').Height() + "px</p>";
        $("#div1").html(txt);
    });
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    $("#accordian li h3").click(function(){
        var $parent = $(this).parent();
        if($parent.hasClass('active')) return;
        $("#accordian ul .row").not().slideUp();
        $(this).next().slideDown(function(){
            $parent.addClass('active').siblings().removeClass('active');
        });
    });
    function rotate(){
        var lastChild = $('.slider div:last-child').clone();
        $('.slider div').removeClass('firstSlide');
        $('.slider div : last-child').remove();
        $('lastChild').addClass('firstSlide');
        $(lastChild).addClass('firstSlide');
    }
    window.setInterval(function(){
        rotate();
    }, 4000);
    
});