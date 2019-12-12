class HeroScene extends eui.Component implements eui.UIComponent {
	// 返回按钮
	public btn_return: eui.Button;
	// 确定选择按钮
	public btn_select: eui.Button;
	// list列表
	public list_list: eui.List;
	// 选择框
	public ce_select: eui.CheckBox;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// 原始数组
		let dataArr: any[] = [
			{ image: 'resource/art/heros_goods/heros01.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros03.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
			{ image: 'resource/art/heros_goods/heros04.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros05.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
			{ image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false }
		]
		// 转换eui数组
		let euiArray: eui.ArrayCollection = new eui.ArrayCollection(dataArr);
		this.list_list.dataProvider = euiArray;
		// 设置list_hero的项呈视器 (这里直接写类名,而不是写实例)
		this.list_list.itemRenderer = heroList_item;
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)
		// 点击确定
		this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0);
			// 拿到数据源
			let dataProvider = this.list_list.dataProvider;
			let selectArr: string[] = [];
			for (let i = 0; i < dataProvider.length; i++) {
				let item = dataProvider.getItemAt(i);
				if(item.isSelected){
					selectArr.push(item.name);
				}
			}
			SceneManager.showInfo(selectArr);
		}, this)
	}

}