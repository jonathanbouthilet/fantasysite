$(document).ready(function(){
    
    
	 $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE257?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
        // Handle as Text
                
        dataType: "text",
        success: function(data) {
                     
            // Parse JSON file
            var obj = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            $('.one').append("<caption><b>" +obj.values[1][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 3; i < 17; i++){
                         
            $('.one').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=15)
                        $('.one tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
             $('.two').append("<caption><b>" +obj.values[17][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 19; i < 33; i++){
                         
            $('.two').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=31)
                        $('.two tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.three').append("<caption><b>" +obj.values[33][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 35; i < 49; i++){
                         
            $('.three').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=47)
                        $('.three tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.four').append("<caption><b>" +obj.values[49][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 51; i < 65; i++){
                         
            $('.four').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=63)
                        $('.four tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
           
            
             //Team Buttons        
         
             
             $('.button-one').append("<tr><td>" + obj.values[0][1] + " " + obj.values[16][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[15][1] + " " + obj.values[32][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[31][1] + " " + obj.values[48][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[47][1] + " " + obj.values[64][4] + "</td></tr>" );
             
             $('.button-two').append("<tr><td>" + obj.values[63][1] + " " + obj.values[80][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[79][1] + " " + obj.values[96][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[95][1] + " " + obj.values[112][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[111][1] + " " + obj.values[128][4] + "</td></tr>" );
             
             $('.button-three').append("<tr><td>" + obj.values[127][1] + " " + obj.values[144][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[143][1] + " " + obj.values[160][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[159][1] + " " + obj.values[176][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[175][1] + " " + obj.values[192][4] + "</td></tr>" );
             
             $('.button-four').append("<tr><td>" + obj.values[191][1] + " " + obj.values[208][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[207][1] + " " + obj.values[224][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[223][1] + " " + obj.values[240][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[239][1] + " " + obj.values[256][4] + "</td></tr>" );
            
            
            
             
                         
                         
            
            
            
               
        }//end data call
    
      });//end ajax
      
      
 
 }); //end function
 
 function One(){
               
                //Clear the current tables
                $('.one').empty();
                $('.two').empty();
                $('.three').empty();
                $('.four').empty();
                
                $('.button-one').empty();
                $('.button-two').empty();
                $('.button-three').empty();
                $('.button-four').empty();
    
	 $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE257?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
        // Handle as Text
                
        dataType: "text",
        success: function(data) {
                     
            // Parse JSON file
            var obj = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            $('.one').append("<caption><b>" +obj.values[1][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 3; i < 17; i++){
                         
            $('.one').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=15)
                        $('.one tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
             $('.two').append("<caption><b>" +obj.values[17][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 19; i < 33; i++){
                         
            $('.two').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=31)
                        $('.two tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.three').append("<caption><b>" +obj.values[33][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 35; i < 49; i++){
                         
            $('.three').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=47)
                        $('.three tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.four').append("<caption><b>" +obj.values[49][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 51; i < 65; i++){
                         
            $('.four').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=63)
                        $('.four tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
           
            
             //Team Buttons        
         
             
             $('.button-one').append("<tr><td>" + obj.values[0][1] + " " + obj.values[16][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[15][1] + " " + obj.values[32][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[31][1] + " " + obj.values[48][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[47][1] + " " + obj.values[64][4] + "</td></tr>" );
             
             $('.button-two').append("<tr><td>" + obj.values[63][1] + " " + obj.values[80][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[79][1] + " " + obj.values[96][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[95][1] + " " + obj.values[112][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[111][1] + " " + obj.values[128][4] + "</td></tr>" );
             
             $('.button-three').append("<tr><td>" + obj.values[127][1] + " " + obj.values[144][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[143][1] + " " + obj.values[160][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[159][1] + " " + obj.values[176][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[175][1] + " " + obj.values[192][4] + "</td></tr>" );
             
             $('.button-four').append("<tr><td>" + obj.values[191][1] + " " + obj.values[208][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[207][1] + " " + obj.values[224][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[223][1] + " " + obj.values[240][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[239][1] + " " + obj.values[256][4] + "</td></tr>" );
            
            
            
             
                         
                         
            
            
            
               
        }//end data call
    
      });//end ajax
      
      
      
            }
          
function Two(){
               
                //Clear the current tables
                $('.one').empty();
                $('.two').empty();
                $('.three').empty();
                $('.four').empty();
                
                $('.button-one').empty();
                $('.button-two').empty();
                $('.button-three').empty();
                $('.button-four').empty();
    
	 $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE257?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
        // Handle as Text
                
        dataType: "text",
        success: function(data) {
                     
            // Parse JSON file
            var obj = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            $('.one').append("<caption><b>" +obj.values[65][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 67; i < 81; i++){
                         
            $('.one').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 79)
                        $('.one tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
             $('.two').append("<caption><b>" +obj.values[81][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 83; i < 97; i++){
                         
            $('.two').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=95)
                        $('.two tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.three').append("<caption><b>" +obj.values[97][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 99; i < 113; i++){
                         
            $('.three').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 111)
                        $('.three tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.four').append("<caption><b>" +obj.values[113][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 115; i < 129; i++){
                         
            $('.four').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 127)
                        $('.four tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
           
            
             //Team Buttons        
         
             
             $('.button-one').append("<tr><td>" + obj.values[0][1] + " " + obj.values[16][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[15][1] + " " + obj.values[32][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[31][1] + " " + obj.values[48][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[47][1] + " " + obj.values[64][4] + "</td></tr>" );
             
             $('.button-two').append("<tr><td>" + obj.values[63][1] + " " + obj.values[80][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[79][1] + " " + obj.values[96][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[95][1] + " " + obj.values[112][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[111][1] + " " + obj.values[128][4] + "</td></tr>" );
             
             $('.button-three').append("<tr><td>" + obj.values[127][1] + " " + obj.values[144][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[143][1] + " " + obj.values[160][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[159][1] + " " + obj.values[176][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[175][1] + " " + obj.values[192][4] + "</td></tr>" );
             
             $('.button-four').append("<tr><td>" + obj.values[191][1] + " " + obj.values[208][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[207][1] + " " + obj.values[224][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[223][1] + " " + obj.values[240][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[239][1] + " " + obj.values[256][4] + "</td></tr>" );
            
            
            
             
                         
                         
            
            
            
               
        }//end data call
    
      });//end ajax
      
      
      
            }
            
function Three(){
               
                //Clear the current tables
                $('.one').empty();
                $('.two').empty();
                $('.three').empty();
                $('.four').empty();
                
                $('.button-one').empty();
                $('.button-two').empty();
                $('.button-three').empty();
                $('.button-four').empty();
    
	 $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE257?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
        // Handle as Text
                
        dataType: "text",
        success: function(data) {
                     
            // Parse JSON file
            var obj = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            $('.one').append("<caption><b>" +obj.values[129][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 131; i < 145; i++){
                         
            $('.one').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i!=143)
                        $('.one tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
             $('.two').append("<caption><b>" +obj.values[145][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 147; i < 161; i++){
                         
            $('.two').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 159)
                        $('.two tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.three').append("<caption><b>" +obj.values[161][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 163; i < 177; i++){
                         
            $('.three').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 175)
                        $('.three tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.four').append("<caption><b>" +obj.values[177][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 179; i < 193; i++){
                         
            $('.four').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 191)
                        $('.four tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
           
            
             //Team Buttons        
         
             
             $('.button-one').append("<tr><td>" + obj.values[0][1] + " " + obj.values[16][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[15][1] + " " + obj.values[32][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[31][1] + " " + obj.values[48][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[47][1] + " " + obj.values[64][4] + "</td></tr>" );
             
             $('.button-two').append("<tr><td>" + obj.values[63][1] + " " + obj.values[80][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[79][1] + " " + obj.values[96][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[95][1] + " " + obj.values[112][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[111][1] + " " + obj.values[128][4] + "</td></tr>" );
             
             $('.button-three').append("<tr><td>" + obj.values[127][1] + " " + obj.values[144][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[143][1] + " " + obj.values[160][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[159][1] + " " + obj.values[176][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[175][1] + " " + obj.values[192][4] + "</td></tr>" );
             
             $('.button-four').append("<tr><td>" + obj.values[191][1] + " " + obj.values[208][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[207][1] + " " + obj.values[224][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[223][1] + " " + obj.values[240][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[239][1] + " " + obj.values[256][4] + "</td></tr>" );
            
            
            
             
                         
                         
            
            
            
               
        }//end data call
    
      });//end ajax
      
      
      
            }
            
function Four(){
               
                //Clear the current tables
                $('.one').empty();
                $('.two').empty();
                $('.three').empty();
                $('.four').empty();
                
                $('.button-one').empty();
                $('.button-two').empty();
                $('.button-three').empty();
                $('.button-four').empty();
    
	 $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE257?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
        // Handle as Text
                
        dataType: "text",
        success: function(data) {
                     
            // Parse JSON file
            var obj = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            $('.one').append("<caption><b>" +obj.values[193][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 195; i < 209; i++){
                         
            $('.one').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 207)
                        $('.one tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
             $('.two').append("<caption><b>" +obj.values[209][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 211; i < 225; i++){
                         
            $('.two').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 223)
                        $('.two tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.three').append("<caption><b>" +obj.values[225][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 227; i < 241; i++){
                         
            $('.three').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if( i!= 239)
                        $('.three tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
            
            $('.four').append("<caption><b>" +obj.values[241][0] +"</b></caption>");
            
            //loop for table         
            for(var i = 243; i < 257; i++){
                         
            $('.four').append("<tr></tr>");
                          
                for(var j = 0; j < 5; j++){
                              
                    if(i != 255)
                        $('.four tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                }
                          
                          
            } //end table loop
           
            
             //Team Buttons        
         
             
             $('.button-one').append("<tr><td>" + obj.values[0][1] + " " + obj.values[16][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[15][1] + " " + obj.values[32][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[31][1] + " " + obj.values[48][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[47][1] + " " + obj.values[64][4] + "</td></tr>" );
             
             $('.button-two').append("<tr><td>" + obj.values[63][1] + " " + obj.values[80][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[79][1] + " " + obj.values[96][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[95][1] + " " + obj.values[112][4] + "</td></tr>" );
             $('.button-two').append("<tr><td>" + obj.values[111][1] + " " + obj.values[128][4] + "</td></tr>" );
             
             $('.button-three').append("<tr><td>" + obj.values[127][1] + " " + obj.values[144][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[143][1] + " " + obj.values[160][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[159][1] + " " + obj.values[176][4] + "</td></tr>" );
             $('.button-three').append("<tr><td>" + obj.values[175][1] + " " + obj.values[192][4] + "</td></tr>" );
             
             $('.button-four').append("<tr><td>" + obj.values[191][1] + " " + obj.values[208][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[207][1] + " " + obj.values[224][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[223][1] + " " + obj.values[240][4] + "</td></tr>" );
             $('.button-four').append("<tr><td>" + obj.values[239][1] + " " + obj.values[256][4] + "</td></tr>" );
            
            
            
             
                         
                         
            
            
            
               
        }//end data call
    
      });//end ajax
      
      
      
            }
             