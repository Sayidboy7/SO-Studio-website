var person = "Abdulla"; // data type = string;
    var age = 34; // data type = number 
    var isMarried = true; // data type = boolean;

    var x = "8",
        y = 2;
        

    var z = x + y;
    console.log(z);

    //BMI = body mass index 
    //BMI = weight / (height * height)
    //bmi < 14.99 underweight 14.00<bmi>24.99 normal;
    //25<bmi overweight
    

        var markweight = 55 ;
        var markheight = 1.76;
        var markbmi = markweight / ( markheight * markheight)

        console.log (markbmi)

        if (markbmi < 14.99){
            console.log("Siz ozg'in ekansiz.Siz Ko'proq Go'sht mahsulotlari tanavvul qilishigniz kerak.")
        }else if( markbmi >14.00 && markbmi < 24.99  ){
            console.log ("Sizning vazningiz Meyorida.")
        }else if ( 25 < markbmi > 50){
            console.log("Sizga parhez tavsifa qilamiz!")
        }else {
            console.log ( "Sizga nima yordan bera olamiz." )
        }

        var bobWeight = 65;
        var bobheight = 1.85;
        var bobbmi = bobWeight / ( bobheight * bobheight )
        
        console.log(bobbmi)

        var studenAge =18;
        var votingAge = 18;

        if ( studenAge >= votingAge) {
            // if True
            
            console.log("You Can Vote.")

        }else {
            // if False 

            console.log("Come back leter.")

        }

        var studentscore = 99;

        if( studentscore >=90){
            console.log("You Got A.Prefer!")
        } else if( studentscore<90 && studentscore>=80 ) {
            
            console.log("You Got B.")

        }else if( studentscore < 80 && studentscore >= 70 ){
            console.log("You Got D")
        }else {
            console.log("You Got F, loser.")
        }
