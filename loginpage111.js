function logg() {
    var x = document.getElementById("eml").value;
    console.log(x);
    if (x == "") {
      alert(" email must be filled out");
      
    }
    var y = document.getElementById("passw").value;
    console.log(y);
    if (y == "") {
      alert("password  must be filled out");
     
    }
    if(x!=""&&y!="")
    {
      alert("you are successfull logedin");
       // window.location.replace ="abacus.html";
      //  window.location.href = "http://www.w3schools.com";
           window.open("index.html","_blank");
    }
   
}
