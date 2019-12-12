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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
        // 监听功能的按钮
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // 让group可以点击
        this.Group_mbtn.touchEnabled = true;
        // 事件委托
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var theBtn = e.target;
            if (theBtn.selected && typeof theBtn.selected !== "undefined") {
                _this.toggleBtn(theBtn);
            }
            else {
                theBtn.selected = true;
            }
        }, this);
    };
    // 切换按钮
    MainScene.prototype.toggleBtn = function (btn) {
        // 循环所有的toggleButton
        if (typeof this.Group_mbtn !== "undefined") {
            for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
                var activeBtn = this.Group_mbtn.getChildAt(i);
                activeBtn.selected = false;
            }
        }
        console.log(btn);
        if (btn === 0) {
            return;
        }
        btn = btn;
        btn.selected = true;
        // 获取当前点击的按钮的下标, 用来实现不同按钮对应的功能
        // 0 1 2 3 对应 玩家, 英雄, 物品, 关于
        var index = this.Group_mbtn.getChildIndex(btn);
        switch (index) {
            case 0:
                // 点击了玩家
                // 调用静态方法切换到玩家场景
                SceneManager.toPlayerScene();
                // 把按钮的层级提高
                // this.numChildren表示所有的子元素数量
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 1:
                // 点击了英雄
                SceneManager.toHeroList();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 2:
                // 点击了物品
                SceneManager.toGoodsList();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
