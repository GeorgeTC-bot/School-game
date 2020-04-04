class createBar{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        if(size > 70){
            size = 70;
        }
        this.size;
        this.barX = this.x;
        this.point = Math.round(random(this.x,this.x + 70));
    }
    barCreate(){
        this.barX -= 1;

        this.size = 70 - (player[1] * 20/100);

        framecount += 1;

        if(this.barX < this.x){
            this.barX = this.x;
        }
        else if(this.barX + this.size > this.x + 70){
            this.barX = (this.x + 70)- this.size;
        }

        if(framecount % 100 === 0){
            this.point = Math.round(random(this.x + this.size,this.x + 70));

            if(this.barX < this.point && this.barX + this.size > this.point){
                player[1] += 1;
            }  
            else{
                player[1] -= 1;
            }      
        }
        fill("grey");
        rect(this.x,this.y,70,10);
        fill("green");
        rect(this.barX,this.y,this.size,10);
        fill("red");
        line(this.point,this.y,this.point,this.y + 10);
        fill("black");
        text(player[1],this.x + 30,this.y + 23);
        text(framecount % 100,this.x + 30,this.y + 46);
    }
}