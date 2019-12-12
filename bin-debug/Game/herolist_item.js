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
var heroList_item = (function (_super) {
    __extends(heroList_item, _super);
    function heroList_item() {
        var _this = _super.call(this) || this;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/skins/skins_item/heroListItem.exml';
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplate, _this);
        return _this;
    }
    // 当数据改变时，更新视图
    heroList_item.prototype.dataChanged = function () {
        // isSeleted 是我们提供数据的某个字段
        this.ce_select.selected = this.data.isSelected;
    };
    heroList_item.prototype.onComplate = function () {
        var _this = this;
        this.ce_select.addEventListener(eui.UIEvent.CHANGE, function (e) {
            _this.data.isSelected = _this.ce_select.selected;
        }, this);
    };
    return heroList_item;
}(eui.ItemRenderer));
__reflect(heroList_item.prototype, "heroList_item");
