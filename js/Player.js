class Player {
constructor(){
this.index = null;
this.name = null;
this.distance = 0;
this.rank = null;
}
getCount(){
var playerCountRef = db.ref('playerCount');
playerCountRef.on("value" , function(data){playerCount = data.val()});

}
updateNameDistance()
{
var playerIndex = 'players/player' + this.index;
db.ref(playerIndex).set({name:this.name,distance : this.distance});

}
getPlayerInfo()
{
var playerInfoRef = db.ref('players');
playerInfoRef.on("value", function(data){allPlayers = data.val();})
//console.log(allPlayers);

}
updateCount(count){


    db.ref("/").update({playerCount : count,finishedPlayers:0});
}
getFinishedPlayers(){

    db.ref('finishedPlayers').on("value" , (data)=>{this.rank = data.val();});

}
updateFinishedPlayers(){

    db.ref("/").update({finishedPlayers : this.rank});
}
}