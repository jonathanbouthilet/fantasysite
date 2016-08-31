$(document).ready(function(){
//	alert("test");
	// $.get("https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AC3?key=AIzaSyDfYy6fomFxp1To61M6GYzSEw-StrbEA6k",function(data){
      //  var json = $.parseJSON(data);
	//	alert(json);
        
	 //});
	 

	 $.ajax({
                  url: "https://sheets.googleapis.com/v4/spreadsheets/1akhr89xy3Ka0uU__DFQwFOiX9LWSEief_TtuR-g685o/values/A1%3AE128?key=AIzaSyAu87BNGJXdihEYsIOEjI8pMU9dntFcd3o",
                  // Handle as Text
                
                  dataType: "text",
                  success: function(data) {
                     
                      // Parse JSON file
                      var obj = $.parseJSON(data);
                      //Store data into a variable
                      // Display Players
                      $('.title1').append("<b>" +obj.values[1][0] +"</b></br>");
                     
                      for(var i = 3; i < 17; i++){
                          //if(i!=15)
                        // $('.one').append("<tr><td>"+obj.values[i][0] + "</td><td>" + obj.values[i][1] + "</td><td>" + obj.values[i][2]+ "</td><td>" + obj.values[i][3] + "</td><td>" +obj.values[i][4] +"</td></tr></br></br>");
                            $('.one').append("<tr></tr>");
                          
                          for(var j = 0; j < 5; j++){
                              
                        if(i!=15)
                         $('.one tr:last').append("<td>" + obj.values[i][j] + "</td>" );  
                        }
                          
                          
                      }
                    //  $('.one').append("<tr><td>"+obj.values[3][0] + "</td><td>" + obj.values[3][1] + "</td><td>" + obj.values[3][2]+ "</td><td>" + obj.values[3][3] + "</td><td>" +obj.values[3][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>" + obj.values[4][0] + "</td><td>" + obj.values[4][1] + "</td><td>" + obj.values[4][2]+ "</td><td>" + obj.values[4][3] + "</td><td>" +obj.values[4][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>" + obj.values[5][0] + "</td><td>" + obj.values[5][1] + "</td><td>" + obj.values[5][2]+ "</td><td>" + obj.values[5][3] + "</td><td>" +obj.values[5][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>" +obj.values[6][0] + "</td><td>" + obj.values[6][1] + "</td><td>" + obj.values[6][2]+ "</td><td>" + obj.values[6][3] + "</td><td>" +obj.values[6][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>" +obj.values[7][0] + "</td><td>" + obj.values[7][1] + "</td><td>" + obj.values[7][2]+ "</td><td>" + obj.values[7][3] + "</td><td>" +obj.values[7][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>" +obj.values[8][0] + "</td><td>" + obj.values[8][1] + "</td><td>" + obj.values[8][2]+ "</td><td>" + obj.values[8][3] + "</td><td>" +obj.values[8][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>"+obj.values[9][0] + "</td><td>" + obj.values[9][1] + "</td><td>" + obj.values[9][2]+ "</td><td>" + obj.values[9][3] + "</td><td>" +obj.values[9][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>"+obj.values[10][0] + "</td><td>" + obj.values[10][1] + "</td><td>" + obj.values[10][2]+ "</td><td>" + obj.values[10][3] + "</td><td>" +obj.values[10][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>"+obj.values[11][0] + "</td><td>" + obj.values[11][1] + "</td><td>" + obj.values[11][2]+ "</td><td>" + obj.values[11][3] + "</td><td>" +obj.values[11][4] +"</td></tr></br></br>");
                     // $('.one').append("<tr><td>"+obj.values[12][0] + "</td><td>" + obj.values[12][1] + "</td><td>" + obj.values[12][2]+ "</td><td>" + obj.values[12][3] + "</td><td>" +obj.values[12][4] +"</td></tr></br></br>");
                     // $('.one').append("<tr><td>"+obj.values[13][0] + "</td><td>" + obj.values[13][1] + "</td><td>" + obj.values[13][2]+ "</td><td>" + obj.values[13][3] + "</td><td>" +obj.values[13][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>"+obj.values[14][0] + "</td><td>" + obj.values[14][1] + "</td><td>" + obj.values[14][2]+ "</td><td>" + obj.values[14][3] + "</td><td>" +obj.values[14][4] +"</td></tr></br></br>");
                      //$('.one').append("<tr><td>"+obj.values[16][0] + "</td><td>" + obj.values[16][1] + "</td><td>" + obj.values[16][2]+ "</td><td>" + obj.values[16][3] + "</td><td>" +obj.values[16][4] +"</td></tr></br></br>");
                   
                   
                      $('.title2').append("<b>" +obj.values[17][0] +"</b></br>");
                      $('.two').append("<tr><td>"+obj.values[3][0] + "</td><td>" + obj.values[3][1] + "</td><td>" + obj.values[3][2]+ "</td><td>" + obj.values[3][3] + "</td><td>" +obj.values[3][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>" + obj.values[4][0] + "</td><td>" + obj.values[4][1] + "</td><td>" + obj.values[4][2]+ "</td><td>" + obj.values[4][3] + "</td><td>" +obj.values[4][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>" + obj.values[5][0] + "</td><td>" + obj.values[5][1] + "</td><td>" + obj.values[5][2]+ "</td><td>" + obj.values[5][3] + "</td><td>" +obj.values[5][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>" +obj.values[6][0] + "</td><td>" + obj.values[6][1] + "</td><td>" + obj.values[6][2]+ "</td><td>" + obj.values[6][3] + "</td><td>" +obj.values[6][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>" +obj.values[7][0] + "</td><td>" + obj.values[7][1] + "</td><td>" + obj.values[7][2]+ "</td><td>" + obj.values[7][3] + "</td><td>" +obj.values[7][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>" +obj.values[8][0] + "</td><td>" + obj.values[8][1] + "</td><td>" + obj.values[8][2]+ "</td><td>" + obj.values[8][3] + "</td><td>" +obj.values[8][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[9][0] + "</td><td>" + obj.values[9][1] + "</td><td>" + obj.values[9][2]+ "</td><td>" + obj.values[9][3] + "</td><td>" +obj.values[9][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[10][0] + "</td><td>" + obj.values[10][1] + "</td><td>" + obj.values[10][2]+ "</td><td>" + obj.values[10][3] + "</td><td>" +obj.values[10][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[11][0] + "</td><td>" + obj.values[11][1] + "</td><td>" + obj.values[11][2]+ "</td><td>" + obj.values[11][3] + "</td><td>" +obj.values[11][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[12][0] + "</td><td>" + obj.values[12][1] + "</td><td>" + obj.values[12][2]+ "</td><td>" + obj.values[12][3] + "</td><td>" +obj.values[12][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[13][0] + "</td><td>" + obj.values[13][1] + "</td><td>" + obj.values[13][2]+ "</td><td>" + obj.values[13][3] + "</td><td>" +obj.values[13][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[14][0] + "</td><td>" + obj.values[14][1] + "</td><td>" + obj.values[14][2]+ "</td><td>" + obj.values[14][3] + "</td><td>" +obj.values[14][4] +"</td></tr></br></br>");
                      $('.two').append("<tr><td>"+obj.values[16][0] + "</td><td>" + obj.values[16][1] + "</td><td>" + obj.values[16][2]+ "</td><td>" + obj.values[16][3] + "</td><td>" +obj.values[16][4] +"</td></tr></br></br>");   
                  }
      });
      
      
 
 });