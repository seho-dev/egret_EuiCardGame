var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PlayerScene = (function (_super) {
    __extends(PlayerScene, _super);
    function PlayerScene() {
        return _super.call(this) || this;
    }
    PlayerScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayerScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var souceArray = [
            { image: "resource/art/profile/skillIcon01.png", name: "旋龙幻杀" },
            { image: "resource/art/profile/skillIcon02.png", name: "魔魂天咒" },
            { image: "resource/art/profile/skillIcon03.png", name: "天魔舞" },
            { image: "resource/art/profile/skillIcon04.png", name: "痴情咒" },
            { image: "resource/art/profile/skillIcon05.png", name: "无间寂" },
            { image: "resource/art/profile/skillIcon06.png", name: "霸天戮杀" },
            { image: "resource/art/profile/skillIcon07.png", name: "灭魂狂飙" }
        ];
        // 把数组转换eui的数组
        var euiArr = new eui.ArrayCollection(souceArray);
        this.hero_list.dataProvider = euiArr;
        this.hero_scroller.horizontalScrollBar.autoVisibility = false; // 滚动条取消
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backMain, this);
    };
    /**
     * 回到主界面
     */
    PlayerScene.prototype.backMain = function () {
        console.log("进入");
        SceneManager.toMainScene();
    };
    return PlayerScene;
}(eui.Component));
__reflect(PlayerScene.prototype, "PlayerScene", ["eui.UIComponent", "egret.DisplayObject"]);
