
$(document).ready(function(){
    var owl =  $('.screenshots')
    owl.owlCarousel({
      items:4,
      margin:30,
      dotsContainer:".pagination",
    })
    $('.pagination span').click(function () {
      var dots = $('.pagination span');
      dots.removeClass('active');
      $(this).addClass('active')
      var myIndex = $(this).index();
      myIndex = parseInt(myIndex * 4);
      owl.trigger('to.owl.carousel', [myIndex, 250]);
    });

    var testi = $('#testimonial');
    testi.owlCarousel({
      items:1,
      loop:true,
      navs:true,
    })
    $('.prev').click(function(){
      testi.trigger('prev.owl.carousel', [300])
      console.log($(this).attr('class'))
    })
    $('.next').click(function(){
      testi.trigger('next.owl.carousel', [300])
      console.log($(this).attr('class'))
    })

    $('#sendMessage').on('submit',function(e){
        e.preventDefault();
        var data =$(this).serialize();
        console.log(data);
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: data,
            success: function(){
                
            }
        });
    })

});