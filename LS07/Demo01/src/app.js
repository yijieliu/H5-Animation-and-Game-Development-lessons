
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var labelTTF =new cc.LabelTTF("玩家："+this.second,"",60);
        labelTTF.x=50;
        labelTTF.y=size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);

        labelTTF.setFontFillColor(cc.color.RED);
        labelTTF.setFontSize(50);
        labelTTF.enableStroke(cc.color.YELLOW,3);
        this.label=labelTTF;

        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);

        return true;
    },
      myTimer:function (dt) {
          this.second+=1;
          this.label.setString("玩家："+this.second);
      }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

