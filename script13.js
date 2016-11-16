$(document).ready(function(){
    
    // old API call  url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE257?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
	 $.ajax({
	     
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/K1:O65?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
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
            
          
          //use 16 4 for the total number, also can add in the sheet the leader
          // $('.test').append("<b>" + obj.values[16][4] +"</b>"); 
           
            
             //Team Buttons        
         
             
             $('.button-one').append("<tr><td>" + obj.values[0][1] + " " + obj.values[16][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[15][1] + " " + obj.values[32][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[31][1] + " " + obj.values[48][4] + "</td></tr>" );
             $('.button-one').append("<tr><td>" + obj.values[47][1] + " " + obj.values[64][4] + "</td></tr>" );
 
             
                         
                         
            
            
            
               
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

    
	 $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/K1:O65?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
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
             

            
             
                         
                         
            
            
            
               
        }//end data call
    
      });//end ajax
      
      
      
            }

            