/**
 * Created by Yongrui on 2015/3/14.
 */

var circleCount = 25;
var circleArray = [];

var stage = new createjs.Stage("gameView");

createjs.Ticker.addEventListener("tick", stage);

for (var i = 0; i < circleCount; i++) {
    var circle = new createjs.Shape();
    circle.graphics.setStrokeStyle(15);
    circle.graphics.beginStroke("#113355");
    circle.compositeOperation = "lighter";
    circle.graphics.drawCircle(0, 0, (i+1)*4);
    stage.addChild(circle);

    var tween = createjs.Tween.get(circle)
        .to({x: 400, y: 400}, 1500*(0.5+i*0.04), createjs.Ease.bounceOut);

    circleArray.push({ref: circle});
}

stage.addEventListener("stagemouseup", handleMouseup);
function handleMouseup(event) {
    for (var i = 0; i < circleCount; i++) {
        var circle = circleArray[i].ref;
        createjs.Tween.get(circle, {override: true})
            .to({x: stage.mouseX, y: stage.mouseY}, 1500*(0.5+i*0.04), createjs.Ease.bounceOut)
    }
}
