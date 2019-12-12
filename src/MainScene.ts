class MainScene extends eui.Component implements eui.UIComponent {
	// 按钮组的group
	public Group_mbtn: eui.Group;
	// 玩家按钮
	public mbtnPlayer: eui.ToggleButton;
	public constructor() {
		super();
		// 监听功能的按钮
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// 让group可以点击
		this.Group_mbtn.touchEnabled = true;
		// 事件委托
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, e => {
			let theBtn = <eui.ToggleButton>e.target;
			if (theBtn.selected && typeof theBtn.selected !== "undefined") {
				this.toggleBtn(theBtn);
			} else {
				theBtn.selected = true;
			}
		}, this)
	}

	// 切换按钮
	public toggleBtn(btn: eui.ToggleButton | number) {
		// 循环所有的toggleButton
		if (typeof this.Group_mbtn !== "undefined") {
			for (let i = 0; i < this.Group_mbtn.numChildren; i++) {
				let activeBtn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i);
				activeBtn.selected = false;
			}
		}
		console.log(btn)
		if (btn === 0) {
			return;
		}
		btn = <eui.ToggleButton>btn;
		btn.selected = true;

		// 获取当前点击的按钮的下标, 用来实现不同按钮对应的功能
		// 0 1 2 3 对应 玩家, 英雄, 物品, 关于
		let index = this.Group_mbtn.getChildIndex(<eui.ToggleButton>btn);
		switch (index) {
			case 0:
				// 点击了玩家
				// 调用静态方法切换到玩家场景
				SceneManager.toPlayerScene()
				// 把按钮的层级提高
				// this.numChildren表示所有的子元素数量
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break;
			case 1:
				// 点击了英雄
				SceneManager.toHeroList();
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break;
			case 2:
				// 点击了物品
				SceneManager.toGoodsList();
				this.setChildIndex(this.Group_mbtn, this.numChildren);
				break;
		}
	}
}