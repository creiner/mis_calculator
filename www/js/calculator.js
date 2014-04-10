function Calculator () {
    
    var self = this;
    
    $(".numpad button").click(function() {
        var val = $(this).html();
        var oldVal = $(".display input").val();
        
        if (val === "=") {
            var result = eval(oldVal);
            $(".display input").val(result);
        } else {
            $(".display input").val(oldVal + val);
        }   
    });
}
