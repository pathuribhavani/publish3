function myfunction(){

    let length = Number($("#length").val());
    let base = Number($("#base").val());
    let height = Number($("#height").val());
    
    localStorage.setItem("length",length);
    localStorage.setItem("base",base);
    localStorage.setItem("height",height);
    
    if(length<0 ||base < 0 || height < 0){
     $("#result").html("Please enter positive values");
    }else{
    let volume = parseInt(length)*parseInt(base)*parseInt(height);
    alert(document.getElementById("result").innerHTML = volume);
  
 }

 
 }
 
 const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
 document.getElementById('submit').addEventListener('click', function() {
     $.ajax({url: url, success: function(result){
         var test = result;
         var image = result[0].image;
         document.getElementById("image").src = image
     }});
 });
 /*document.getElementById('submit').addEventListener('click', function() {
     fetch(url)
     .then((res) => { return res.json() })
     .then((data) => {           
         data.forEach((item) => {
             const { image } = item
 
             document.getElementById("image").src = image
      
         });
     })
     .catch(function (error) {
         console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
     })
 })*/