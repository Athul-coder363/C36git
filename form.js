class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,0);   
        var input = createInput("Name");
        var button = createButton("PLAY");
        input.position(400,160);
        button.position(400,200);
        var greet = createElement('h3');
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name  =  input.value();
        playerCount +=1;
        player.update(name);
        player.updateCount(playerCount);
        greet.html("hello"+name);
        greet.position(400,160);
        });
    }
}