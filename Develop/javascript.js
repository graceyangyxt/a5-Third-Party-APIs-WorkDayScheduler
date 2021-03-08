// button
 //get a reference to all of the save buttons $('.saveBtn')
 //01 02 jQuery element
 var saveBtn= $('.saveBtn');
 var textarea= $('.description');
 var timeBlock= $('.time-block').children();

 // add a click handler to each saveButton using .on() method
 //03 04 click event- http://api.jquery.com/on/

 // traverse the DOM to get the values that we need to store in localstorage .parent() .sibling()
 //07 08 dom traversal- https://api.jquery.com/category/traversing/
 
 //setItems to localstorage
 //week 04
 saveBtn.on('click',function(){
  var todoTask = $(this).siblings(".description").val();
  localStorage.setItem("todoTask",todoTask);
});


//handle color coding
  // use moment library to get the current
  // http://momentjs.com/docs/#/get-set/hour
  var current= moment();
  var currentHour= current.hour();
  console.log(currentHour);

  // get a reference to all timeblocks
 for(var i=0; i<8; i++){
    var data=$('.time-block').children().eq(i);
    var hour= data.children().eq(0).text();
    console.log(hour)
   

    if (currentHour < hour){
     data.addClass('future'); //给hour增加一个新的class
    }else if(currentHour == hour){
     data.addClass('present');
    }else{
     data.addClass('past');
    }
  }
  // loop through the timeblocks
  //week3

     //get the data-hour value timeblocks[i].data('hour')

     // if,else -condition we compare the currentHour with the timeblock <(past) ===(present),else(future)
     //week3

     // adding or removing (or both) classes
    





//get the data from localstorage and populate the timeblocks
 //geItem 

 //reference to the textarea (id)

 // .val()

   //approach 
   //--> $('textarea'); 
   //--> loop 
   // get a reference to the id of .parent()
   //--> .val()=localStorage.getItem(parentID)

// current day--> top of calendar
  // moment library - .format()
  // 25 26 moment-format- http://momentjs.com/docs/#/displaying

// call the colorcoding function
// setInterval ->15000
// week4

