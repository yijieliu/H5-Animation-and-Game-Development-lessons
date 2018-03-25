var SecondLayer =cc.Layer.extend({
    ctor:function () {
        this._super();
        var size =cc.winSize;
        var sp1=new cc.Sprite(res.Bg1_jpg);
        sp1.x=size.width/2;
        sp1.y=size.height/2;
        this.addChild(sp1);
        var sp2=new cc.Sprite(res.P1_png);
        sp2.x=size.width/2;
        sp2.y=size.height/2;
        sp2.runAction(cc.rotateBy(5,0,360).reverse());
        this.addChild(sp2);
        return true;


    }
});

var SecondScene=cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer=new SecondLayer();
        this.addChild(layer);

    }
});