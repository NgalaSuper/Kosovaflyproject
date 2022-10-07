$('#buttondetails2').click(function(){
            
    if ($('#container1').is(':hidden')) {
       
       $('#container2').show('slide',{direction:'left'},1000);
    } else {
       
       $('#container1').hide('slide',{direction:'left'},1000);
    }
  });