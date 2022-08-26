var img1 = document.querySelector(".img1").getAttribute("src");
  var img1Round = Math.round(Math.random()*5) + 1;
  console.log(img1Round);
  if(img1Round > 0){
    img1 = "images/dice"+img1Round+".png";
    document.querySelector(".img1").setAttribute("src",img1);
  }
  else{
    document.querySelector(".result").innerHTML = "<strong><em>Player 2 win!!</em></strong>";
  }
  
  console.log("////////////////////");
  var img2 = document.querySelector(".img2").getAttribute("src");
  var img2Round = Math.round(Math.random()*5) + 1;
  console.log(img2Round);
  if(img2Round > 0){
    img2 = "images/dice"+img2Round+".png";
    document.querySelector(".img2").setAttribute("src",img2);
  }
  else{
    document.querySelector(".result").innerHTML = "<strong><em>Player 1 win!!</em></strong>";
  }
  // img2 = "images/dice"+Math.round(Math.random()*6)+".png";
  
  if(img1Round > img2Round)
  {
    document.querySelector(".result").innerHTML = "<strong><em>Player 1 win!!</em></strong>";
  }
  else if(img1Round === img2Round){
    document.querySelector(".result").innerHTML = "<strong><em>Match Draw!!</em></strong>"
  }
  else{
    document.querySelector(".result").innerHTML = "<strong><em>Player 2 win!!</em></strong>"
  }
  