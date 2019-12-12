// 必须要继承自 eui.ItemRenderer
class GoodsItem extends eui.ItemRenderer {
	public constructor() {
		super()
		// 把这个 类和皮肤 联系起来
		this.skinName = 'resource/skins/skins_item/goodsItem.exml';
	}

}