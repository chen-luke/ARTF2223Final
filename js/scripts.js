
function replaceChamp(e) {
    
    let img = document.getElementById(e.target.id);
    let curChamp = document.getElementById("curr_champ");
    curChamp.src = img.src;
}

function clickerUpdate() {

    let idx = document.getElementById("money").innerHTML.indexOf("$");
    let foodMoney = document.getElementById("money").innerHTML.substr(idx+1);
    let poopAmt = document.getElementById("poop_amt").innerHTML.substr(13,3);

    foodMoney = Math.round(parseFloat(foodMoney) * 100 + 10) / 100;
    if (foodMoney % 1 === 0) {
        document.getElementById("money").innerHTML = "Food Money: $" + foodMoney + ".0";
        if (foodMoney % 3 === 0){
            poopAmt++;
            document.getElementById("poop_amt").innerHTML = "Poop Amount: " + poopAmt + ".0 oz";
        }
    }
    else{
        document.getElementById("money").innerHTML = "Food Money: $" + foodMoney;
    }

    updateBuyMsg(foodMoney);

    if (foodMoney % 1 === 0) {
        showImage();
    }

}

function updateBuyMsg(currEarning) {

    if (currEarning > 0.5 && currEarning < 1.5) {

        document.getElementById("clicker_msg").innerHTML = "Thats it? You can do better than that!!!"
        
      } else if (currEarning > 1.5 && currEarning < 3.0) {

        document.getElementById("clicker_msg").innerHTML = "Make them SUFFER!!!!"
        
      } else if (currEarning > 3.0 && currEarning < 5.0) {

        document.getElementById("clicker_msg").innerHTML = "MORE! MORE! Let them feel the STINK!!"

      } else if (currEarning > 5.0 && currEarning < 7.0) {

        document.getElementById("clicker_msg").innerHTML = "AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!"
        
      } else if (currEarning > 7.0 && currEarning < 10.0) {

        document.getElementById("clicker_msg").innerHTML = "Thank you! All our doggos is going to eat well tonight!!"  
      }
}


function showImage() {
    // myImage : ID of image on which to place new image

    var image = document.getElementById('enemy');
    
    console.log(image.width);
    
    margin = 20;
    
    l = image.offsetLeft;
    t = image.offsetTop;
    w = image.width;
    h = image.height;
    
    // Location inside the image
    offX = parseInt(Math.random() * w);
    offY = parseInt(Math.random() * h);
    
    if(offX > margin) offX -= margin;
    if(offY > margin) offY -= margin;

    l += offX;
    t += offY;

    var newImage = document.createElement("img");
    newImage.setAttribute('src', 'imgs/poop.png');
    newImage.setAttribute('class', 'overlays');
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";
    newImage.style.position = "absolute";
    document.getElementById("enemy_box").appendChild(newImage);
    //document.body.appendChild(newImage);
}    