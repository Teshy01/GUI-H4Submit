/*
Name: Hritesh Rajanagan
Contact Information: hritesh_rajanagan@student.uml.edu
*/

// event listener allows table to stay on screen rather than refresh off
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('table').addEventListener("submit", function(event) {
        event.preventDefault();
        validateRows();
    });
});


$(document).ready(function() {
    $( "#tabs" ).tabs();
    checkVals();
    sliderFunc();
    checkVals();
    $("#minCol").on("input", function() {
        myGetValues();
        checkVals();
    });
    $("#maxCol").on("input", function() {
        myGetValues();
        checkVals();
    });
    $("#minRow").on("input", function() {
        myGetValues();
        checkVals();
    });
    $("#maxRow").on("input", function() {
        myGetValues();
        checkVals();
    });
    $("#minCol").val(ui.value).on("input", function() {
        myGetValues();
        checkVals();
    });
    
});

function checkVals() {
    $("#table").validate({    
        rules: {
            minCol: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThan: "#maxCol"
            },
            maxCol: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThan: "#minCol"
                
            },
            minRow: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThan: "#maxRow"
            },
            maxRow: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThan: "#minRow"
            },
        },
        messages: {
            minCol: {
                min: "The minCol number is too low. minCol must be greater than -50 but less than 50.",
                max: "The minCol number is too high. minCol must be greater than -50 but less than 50.",
                number: "minCol value is not a number between -50 and 50.",
                required: "Error, no minCol value inputted. Please enter a value.",
                lessThan: "Error, minCol > maxCol. Make sure minCol is < or = maxCol"
            },
            maxCol: {
                min: "The maxCol number is too low. minCol must be greater than -50 but less than 50.",
                max: "The maxCol number is too high. maxCol must be greater than -50 but less than 50.",
                number: "maxCol value is not a number between -50 and 50.",
                required: "Error, no maxCol value inputted. Please enter a value.",
                greaterThan: "Error, minCol > maxCol. Make sure maxCol is > or = minCol"
            },
            minRow: {
                min: "The minRow number is too low. minRow must be greater than -50 but less than 50.",
                max: "The minRow number is too high. minRow must be greater than -50 but less than 50.",
                number: "minRow value is not a number between -50 and 50.",
                required: "Error, no minRow value inputted. Please enter a value.",
                lessThan: "Error, minRow > maxRow. Make sure minRow is < or = maxRow."
            },
            maxRow: {
                min: "The maxRow number is too low. maxRow must be greater than -50 but less than 50.",
                max: "The maxRow number is too high. maxRow must be greater than -50 but less than 50.",
                number: "maxRow value is not a number between -50 and 50.",
                required: "Error, no maxRow value inputted. Please enter a value.",
                greaterThan: "Error, minRow > maxRow. Make sure maxRow is > or = minRow."
            },
        }    
    
      });
      $.validator.addMethod("lessThan",
      function (value, element, param) {
            var $otherElement = $(param);
            return parseInt(value, 10) <= parseInt($otherElement.val(), 10);
      });
      $.validator.addMethod("greaterThan",
      function (value, element, param) {
            var $otherElement = $(param);
            return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
      });
    
}

function sliderFunc() {

    $('#slider1').slider({
      min:-50,
      max:50,
      step: 1,
      value: 0,
      slide: function(event, ui){
          $("#minRow").val(ui.value);
          removeOldTable();
          checkVals();
          validateRows();
          
      }
  });
  $('#slider2').slider({
      min:-50,
      max:50,
      step: 1,
      value: 0,
      slide: function(event, ui){
          $("#maxRow").val(ui.value);
          removeOldTable();
          checkVals();
          validateRows();
          
      }
  });
  $('#slider3').slider({
      min:-50,
      max:50,
      step: 1,
      value: 0,
      slide: function(event, ui){
          $("#minCol").val(ui.value);
          removeOldTable();
          checkVals();
          validateRows();
          
      }
  });
  $('#slider4').slider({
      min:-50,
      max:50,
      step: 1,
      value: 0,
      slide: function(event, ui){
          $("#maxCol").val(ui.value);
          removeOldTable();
          checkVals();
          validateRows();
          
      }
  });
  $("#minRow").change(function (){
      $("#slider1").slider("value",$("#minRow").val());
      checkVals();
  })
  $("#maxRow").change(function (){
      $("#slider2").slider("value",$("#maxRow").val());
      checkVals();
  })
  $("#minCol").change(function (){
      $("#slider3").slider("value",$("#minCol").val());
      checkVals();
  })
  $("#maxCol").change(function (){
      $("#slider4").slider("value",$("#maxCol").val());
      checkVals();
  })
}



//function validate rows, checks input and then prints errors if needed
function validateRows(){

    checkVals();
    //parses ints from form into int variables
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);

    //if else statement to check inputted inputs!
    if(maxRow < minRow){
        //var text = "Error, minRow > maxRow";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(maxCol < minCol){
        //var text = "Error, minCol > maxCol";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(minRow)){
        //var text = "Error, minRow has an invalid value";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(maxRow)){
        //var text = "Error, maxRow has an invalid value";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(minCol)){
        //var text = "Error, minCol has an invalid value";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(maxCol)){
        //var text = "Error, maxCol has an invalid value";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(minRow  > 50 || minRow < -50){
        //var text = "Error, minRow must be greater than -50 but less than 50";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(maxRow  > 50 || maxRow < -50){
        //var text = "Error, maxRow must be greater than -50 but less than 50";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(minCol  > 50 || minCol < -50){
        //var text = "Error, minCol must be greater than -50 but less than 50";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(maxCol  > 50 || maxCol < -50){
        //var text = "Error, maxCol must be greater than -50 but less than 50";
        //document.getElementById("error").innerHTML = text;
        return false;
    }
    else {
        //function call for mult_table (table print mechanism)
        //function call for clearing previous table (since we print it out)
        //var text = "Table has printed!";
        //document.getElementById("error").innerHTML = text;
    }
        removeOldTable();
        checkVals();
        multTable(minRow, maxRow, minCol, maxCol);
}

function removeOldTable() {

    //gets placeholder id, and replaces it with empty placeholder
    var oldTable = document.getElementById("placeholder");
    var newPlaceHolder = document.createElement('div');
    newPlaceHolder.setAttribute("id","placeholder");
    oldTable.replaceWith(newPlaceHolder);
}

function multTable(minRow, maxRow, minCol, maxCol){

    removeOldTable();

    //for loop to print the table
    /*if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow))
    {    
    }
    else if (minCol <= -51 || minCol >= 51 || maxCol <= -51 || maxCol >= 51 || minRow <= -51 || minRow >= 51 || maxRow <= -51 || maxRow >= 51 )
    {        
    } 
    else if (maxCol < minCol || maxRow < minRow)
    {    
    }
    else
    {*/

    checkVals();
    if ( $('#table').valid() == true  ){
    //creating elements for table
    var body = document.getElementById("placeholder");
    var table = document.createElement('TABLE');
    var tblB = document.createElement('TBODY');
    table.appendChild(tblB);

    for (var i = minRow; i <= maxRow + 1; i++) {
        var tr = document.createElement('TR');
        tblB.appendChild(tr);
        for (var j = minCol; j <= maxCol + 1; j++) {
            var td = document.createElement('TD');            
            if (i == minRow && j == minCol){
               td.style.visibility = 'hidden';
               td.style.border = "none";
            } else if (j == minCol) {
               td.innerHTML = i-1;
            } else if(i == minRow) {
               td.innerHTML = j-1;
            } else {
               td.innerHTML =  (i-1) * (j-1);
            }
            tr.appendChild(td);
        }
    }
    //append table onto body
    body.appendChild(table);
}
}

var value = 0;


function destroyTabs(){
    $(".rem").remove();
    $("#tabs").tabs("destroy");
    $( "#tabs" ).tabs();
    $( "#tabs" ).tabs( "refresh" );
    tabNumber = 0;
}


$( function() {

var tabs = $( "#tabs" ).tabs();
tabs.on( "click", "span.ui-icon-close", function() {

    var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
    $( "#" + panelId ).remove();
    
    tabs.tabs( "refresh" );
  });


} );




function multTableTab(){

    checkVals();
    if ($('#table').valid() == true ){

    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);

    

    $("ul").append("<li class=\"rem\"><a href=\"" + '#' + "tabNumber" + value + "\">" + '[' + minCol  + 'x' + maxCol + ']' +  '[' + minRow +  'x' +  maxRow + ']' + "</a><span class=\"ui-icon ui-icon-close\" role=\"presentation\">Remove Tab</span></li>");
    $("div#tabs").append("<div class=\"rem\" id=\"" + "tabNumber" + value  + "\"></div>");
    
    //creating elements for table
    var body = document.getElementById("tabNumber" + value);
    var table = document.createElement('TABLE');
    var tblB = document.createElement('TBODY');
    table.appendChild(tblB);

    for (var i = minRow; i <= maxRow + 1; i++) {
        var tr = document.createElement('TR');
        tblB.appendChild(tr);
        for (var j = minCol; j <= maxCol + 1; j++) {
            var td = document.createElement('TD');            
            if (i == minRow && j == minCol){
               td.style.visibility = 'hidden';
               td.style.border = "none";
            } else if (j == minCol) {
               td.innerHTML = i-1;
            } else if(i == minRow) {
               td.innerHTML = j-1;
            } else {
               td.innerHTML =  (i-1) * (j-1);
            }
            tr.appendChild(td);
            }
        }
        //append table onto body
        body.appendChild(table);
    value = value + 1;
    $("#tabs").tabs("destroy");
    $("#tabs").tabs();
    $("#tabs").tabs("refresh");
}
}