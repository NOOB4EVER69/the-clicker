var data_p = [];


addp.onclick = function() {
    var x = document.getElementById("zero_1").innerHTML = 0;
    var y = document.getElementById("zero_1").innerHTML = 0;
    var int_p = document.getElementById("inp").value;
    var int_p_1 = document.getElementById("inp1").value;
 

    if (int_p == "" , int_p_1 == "") {
        console.log("enter a player name");
    } else if (1 + 1 == 2) {

        data_p.unshift({
            pl1_name : int_p,
            pl2_name : int_p_1,
        },)

        console.log(data_p);

        gg.style.visibility = "hidden";
        gg1.style.visibility = "visible"
        
        

        
        document.getElementById("pl1_h").innerHTML = `${data_p[0].pl1_name}`
        document.getElementById("pl2_h").innerHTML = `${data_p[0].pl2_name}`
    };


    document.addEventListener('keydown', function(event) {
        if (event.key === 's' && gg1.style.visibility == "visible") {
            
            document.getElementById("pl1_0").innerHTML = ++x ;
    }});

    document.addEventListener('keydown', function(event) {
        if (event.key === 'k' && gg1.style.visibility == "visible") {
            
            document.getElementById("pl2_0").innerHTML = ++y ;
    }});


    document.addEventListener('keydown', function(event) {
        if (event.key === 'a' && gg1.style.visibility == "visible") {
            
            timer1();
    }});


    
    function timer1() {
        
        
        setTimeout(function() {

            console.log(`time is up!!`);
            won()

        }, 3000);
   }

   function won() {

    gg1.style.visibility = "hidden";
    gg2.style.visibility = "visible";

    

    if (x > y ) {
        document.getElementById("win1").innerHTML = `${data_p[0].pl1_name} won by ${x} point`;
       } else if (y > x ) {
        document.getElementById("win1").innerHTML = `${data_p[0].pl2_name} won by ${y} point`;
        
       } else if (x == y) {
        document.getElementById("win1").innerHTML = `its a tie`

       }
   }

   rest.onclick = function restt() {

        gg.style.visibility = "visible";
        gg1.style.visibility = "hidden";
        gg2.style.visibility = "hidden";
        document.getElementById("pl1_0").innerHTML = 0; 
        document.getElementById("pl2_0").innerHTML = 0;

        
   }


};



