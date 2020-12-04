var dogimg , doghappyimg , dataBase;
var dog
var foodS
var foodleft = 20;
var position

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  doghappyimg = loadImage("images/dogImg.png");

}

function setup() {
  dataBase = firebase.database();
  createCanvas(500, 500);

  // var foodStock = dataBase.ref("Food/");
  // foodStock.on("value" , readStock);
  
  dog = createSprite(250 ,400);
  dog.addImage(dogimg);
  dog.scale = 0.2
  
}


function draw() {  

 
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)  )
  {
    foodleft  = foodleft - 1
   
    
  }
  
  drawSprites();
  stroke("black");
  textSize(30)
  text(foodleft + " milk bottles left " , 100 , 50);

  if(foodleft <= 0)
  {
    foodleft = 0
  }

}


// function readStock(data)
// {
//   foodS = data.val();
  
 

// }

// function writeStock(x)
// {
//   dataBase.ref("food").set({
//     value: x
//   })
  
// }


