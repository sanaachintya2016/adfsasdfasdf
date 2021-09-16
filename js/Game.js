class Game {
constructor(){




}

getState(){ // this function to read in the database
var gameStateRef = db.ref("gameState");
 gameStateRef.on("value" , function(data){gameState = data.val()})

}   
updateState(state){ // function updateState update the database file (write)
db.ref("/").update({gameState:state})//"/" refers to the main database inside which gamestate in created
    
}

async start(){
if(gameState === 0){
player = new Player();

var playerCountRef = await db.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();

}

form = new Form();
form.display();

}
car1 = createSprite(100,200);
car1.addImage(car1Img);
car2= createSprite(300,200);
car2.addImage(car2Img);
car3 = createSprite(500,200);
car3.addImage(car3Img);
car4 = createSprite(700,200);
car4.addImage(car4Img);
cars = [car1,car2,car3,car4];

}
play(){
form.hideForm();

player.getFinishedPlayers();


textSize(20);
fill("red");
text("GAME START",120,100);
player.getPlayerInfo();
if(allPlayers!== undefined){
    image(trackImg , 0 , -displayHeight*6 , displayWidth , displayHeight*7);
var index = 0;
var x = 100;
var y;
    for(var plr in allPlayers)
    {
index = index+1;
x=x+250;
y=displayHeight - allPlayers[plr].distance;
cars[index-1].x=x;
cars[index-1].y=y;

if(index === player.index){
cars[index-1].shapeColor="red";
camera.position.x = displayWidth/2;
camera.position.y = cars[index-1].y
}else{
    cars[index-1].shapeColor = "black";
}
    

    }

    }
if(keyIsDown(UP_ARROW)){
    player.distance = player.distance + 50;
    player.updateNameDistance();

}
if(player.distance === 5200){
    player.rank = player.rank +1
    text("RANK : " + player.rank , 100,-4650 )   
    gameState = 2;
    player.updateFinishedPlayers();
 
}
drawSprites();
}
end(){

    console.log("GAME ENDED")
}
}