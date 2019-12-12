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
var HeroScene = (function (_super) {
    __extends(HeroScene, _super);
    function HeroScene() {
        return _super.call(this) || this;
    }
    HeroScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // 原始数组
        var dataArr = [
            { image: 'resource/art/heros_goods/heros01.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros03.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
            { image: 'resource/art/heros_goods/heros04.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros05.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false }
        ];
        // 转换eui数组
        var euiArray = new eui.ArrayCollection(dataArr);
        this.list_list.dataProvider = euiArray;
        // 设置list_hero的项呈视器 (这里直接写类名,而不是写实例)
        this.list_list.itemRenderer = heroList_item;
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        // 点击确定
        this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
            // 拿到数据源
            var dataProvider = _this.list_list.dataProvider;
            var selectArr = [];
            for (var i = 0; i < dataProvider.length; i++) {
                var item = dataProvider.getItemAt(i);
                if (item.isSelected) {
                    selectArr.push(item.name);
                }
            }
            SceneManager.showInfo(selectArr);
        }, this);
    };
    return HeroScene;
}(eui.Component));
__reflect(HeroScene.prototype, "HeroScene", ["eui.UIComponent", "egret.DisplayObject"]);
