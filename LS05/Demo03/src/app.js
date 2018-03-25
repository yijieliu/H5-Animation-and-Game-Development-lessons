
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

       /* var layer1=new cc.LayerColor(cc.color.RED,200,200);
        var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        var layer3=new cc.LayerColor(cc.color.BLUE,200,200);
        layer1.ignoreAnchor=false;
        layer2.ignoreAnchor=false;
        layer3.ignoreAnchor=false;
        layer1.setAnchorPoint(0,0);
        layer2.setAnchorPoint(1,1);
        layer2.setAnchorPoint(1,0);

        layer1.setPosition(0,0);
        layer2.setPosition(size.width-50,size.height-200);
        layer3.setPosition(size.width-50,50);


        //layer1.rotation=45;
       // layer2.rotation=45;
        //layer1.scale=0.5;
        //layer2.scale=0.5;

        this.addChild(layer1);
        this.addChild(layer2);
        this.addChild(layer3);*/
      /* var node3=new cc.Sprite(res.Red_png);
       node3.setAnchorPoint(cc.p(1.0,1.0));
       node3.x=200;
       node3.y=200;
       this.addChild(node3);

       var node4=new cc.Sprite(res.Yellow_png);
       node4.setAnchorPoint(cc.p((0.5,0.5)));
       node4.x=50;
       node4.y=50;
       this.addChild(node4);*/
       var node5=new cc.Sprite(res.Red_png);
       node5.setAnchorPoint(cc.p(1.0,1.0));
       node5.x=200;
       node5.y=200;
       this.addChild(node5);

        var node6=new cc.Sprite(res.Yellow_png);
        node6.setAnchorPoint(cc.p(0.5,0.5));
        node6.x=200;
        node6.y=200;
        this.addChild(node6);

        var point=node5.convertToWorldSpaceAR(node6.getPosition());
        cc.log(point.x);
        cc.log(point.y);


        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

