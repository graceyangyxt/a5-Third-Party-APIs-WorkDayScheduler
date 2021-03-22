 var saveBtn= $('.saveBtn');
 var textarea= $('.description');
 var timeBlock= $('.time-block').children();
 var currentDay= $('#currentDay');

var current= moment();
var currentHour= current.hour();
var date = current.format('dddd, MMMM DD YYYY'); 

currentDay.text(date);

  // get a reference to all timeblocks
for(var i=0; i<9; i++){
    var data=$('.time-block').children().eq(i);
    var hour= data.children().eq(0).text();

    if (currentHour < hour){
      textarea.addClass('future'); 
    }else if(currentHour == hour){
      textarea.addClass('present');
    }else{
      textarea.addClass('past');
    }
  }


  saveBtn.on('click',function(){
    var todoTask = $(this).siblings(".description").val();
    // var taskAtHour = $(this).siblings(".hour").val();
    var taskAtHour = $(this).parent().attr("id");
    console.log("this is taskAtHour", taskAtHour)
   
    localStorage.setItem(JSON.stringify(taskAtHour),todoTask);
  });
  
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

