$(document).ready(function () {

    $('.checkbox-button_edit').click(function () {
        $('.input-field-custom').toggleClass('input-active');
    });


$(document).ready(function(){

    $('.select-window').change(function(event){

    var currentId = event.target.id;
    var parentId = $(this).closest('.preview').attr('id');
    console.log(parentId)
    var selectVal = $('#' + currentId + ' ' + 'option:selected').val();
        if(selectVal == '1'){
            $('#' + parentId + ' ' + '.mobile-preview').show()
            $('#' + parentId + ' ' + '.tablet-preview').hide()
        }
        else{
            if((selectVal == '2')){
                $('#' + parentId + ' ' + '.mobile-preview').hide()
                $('#' + parentId + ' ' + '.tablet-preview').show()
            }
        } 
    })  
   


});

// mobile-commerce.html

    $('.table-block-month .date').click(function(){
        $('.table-block-month').hide()
        $('.table-block-days').show()
    })
    $('.table-block-days .date').click(function(){
        $('.table-block-days').hide()
        $('.table-block-hours').show()
    })
    $('.table-block-days .link').click(function(){
        $('.table-block-days').hide()
        $('.table-block-month').show()
    })
    $('.table-block-hours .link').click(function(){
        $('.table-block-hours').hide()
        $('.table-block-days').show() 
    })

});

// about.html смена пакета
$('.vip-pack').hide()
$(document).ready(function(){
    
    $('#package-check').change(function(){
        if(this.checked){
            $('.vip').css('color', '#26a69a')
            $('.standart').css('color', 'rgba(0,0,0,0.54)')
            $('.vip-pack').slideDown('slow')
        }
        else{
            $('.vip').css('color', 'rgba(0,0,0,0.54)')
            $('.standart').css('color', '#26a69a')
            $('.vip-pack').slideUp('slow')
        }
    })

});