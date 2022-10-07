window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "10";
  } else {
    document.getElementById("navbar").style.top = "10px";
  }
}

document.getElementById("buttoni-search-flight").onclick = function replace(){
  document.getElementById("home-change-content2").style.display="none";
  document.getElementById("home-change-content1").style.display="block";
  document.getElementById("buttoni-search-flight").style.backgroundColor = "#e31e24";
  document.getElementById("buttoni-search-hotels").style.backgroundColor = "white";
  document.getElementById("buttoni-search-flight").style.color = "white";
  document.getElementById("buttoni-search-hotels").style.color = "black";
}

  document.getElementById("buttoni-search-hotels").onclick = function replace(){
    document.getElementById("home-change-content1").style.display="none";
    document.getElementById("home-change-content2").style.display="block";
    document.getElementById("buttoni-search-hotels").style.backgroundColor = "#e31e24";
    document.getElementById("buttoni-search-flight").style.backgroundColor = "white";
    document.getElementById("buttoni-search-hotels").style.color = "white";
    document.getElementById("buttoni-search-flight").style.color = "black";
  }

  //Buttondetails

  
  document.getElementById("buttondetails2").onclick = function replace(){
    document.getElementById("container1").style.display="none";
    document.getElementById("container2").style.display="grid";
    document.getElementById("buttondetails2").style.backgroundColor = "#a1282c";
    document.getElementById("buttondetails3").style.backgroundColor = "white";
   
  }

    document.getElementById("buttondetails3").onclick = function replace(){
    document.getElementById("container1").style.display="grid";
    document.getElementById("container2").style.display="none";
    document.getElementById("buttondetails3").style.backgroundColor = "#a1282c";
    document.getElementById("buttondetails2").style.backgroundColor = "white";
  } 
