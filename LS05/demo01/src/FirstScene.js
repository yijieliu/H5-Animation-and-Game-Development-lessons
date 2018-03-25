var FirstLayer =cc.Layer.extend({
    ctor:function () {
        this_super();
        var size =cc.winSize;
        var sp1=new cc.Sprite(res.Red_png);
        sp1.x=200;
        sp1.y=200;
        this.addChild(sp1);
        return true;


    }
});

var FirstScene=cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer=new FirstLayer();
        this.addChild(layer);

    }
});