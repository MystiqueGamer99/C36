class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');
    }

    display(){
        var title = createElement('h2', "CAR RACING GAME");
        title.position(130,0);
        this.input.position(130,160);       
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(130,160);
        });
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}