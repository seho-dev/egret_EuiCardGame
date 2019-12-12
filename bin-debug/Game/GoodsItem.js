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
// 必须要继承自 eui.ItemRenderer
var GoodsItem = (function (_super) {
    __extends(GoodsItem, _super);
    function GoodsItem() {
        var _this = _super.call(this) || this;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/skins/skins_item/goodsItem.exml';
        return _this;
    }
    return GoodsItem;
}(eui.ItemRenderer));
__reflect(GoodsItem.prototype, "GoodsItem");
