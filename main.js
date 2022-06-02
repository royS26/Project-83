var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    var newWidth = screen.width - 70;

    var height = screen.height;
    var newHeight = screen.height - 300;

    if(width < 992){
        document.getElementsById("myCanvas").width = newWidth;
        document.getElementsById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchStart", my_touchStart);
    
    function my_touchStart(e)
    {
        console.log("my_touchStart");
        //Addictonal Activity start
        Color = document.getElementById("Color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity end//
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    }

    function clearArea(){
        myCanvas.body.style.background = "white";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)\s\help-desk
    {

        console.log("my_touchmove");

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

