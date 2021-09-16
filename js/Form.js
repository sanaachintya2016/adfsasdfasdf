class Form {
constructor(){
this.title = createElement("h2");
this.input = createInput("name");
this.button = createButton("play");
this.greeting = createElement("h2");
this.reset = createButton("reset")

}
hideForm(){
this.input.hide();
this.button.hide();
this.greeting.hide();

}

display(){
this.title.html("Car Racing Game");
this.title.position(displayWidth/2+200,50);
this.input.position(displayWidth/2+150,250);
this.reset.position(displayWidth-100,50)
this.button.position(displayWidth/2+350,250);

this.button.mousePressed(()=>
{
this.input.hide();
this.button.hide();

player.name = this.input.value();
playerCount = playerCount + 1;
player.index = playerCount;
player.updateCount(playerCount);
this.greeting.html("Hello " + player.name);
this.greeting.position(displayWidth/2+250,200);
})
this.reset.mousePressed(()=>{
game.updateState(0);
player.updateCount(0);


})

}

}