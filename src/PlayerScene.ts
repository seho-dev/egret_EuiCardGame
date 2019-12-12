class PlayerScene extends eui.Component implements eui.UIComponent {
	// 玩家_返回按钮
	public btn_return: eui.Button;
	public hero_scroller: eui.Scroller;
	public hero_list: eui.List;


	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		let souceArray: Array<any> = [
			{ image: "resource/art/profile/skillIcon01.png", name: "旋龙幻杀" },
			{ image: "resource/art/profile/skillIcon02.png", name: "魔魂天咒" },
			{ image: "resource/art/profile/skillIcon03.png", name: "天魔舞" },
			{ image: "resource/art/profile/skillIcon04.png", name: "痴情咒" },
			{ image: "resource/art/profile/skillIcon05.png", name: "无间寂" },
			{ image: "resource/art/profile/skillIcon06.png", name: "霸天戮杀" },
			{ image: "resource/art/profile/skillIcon07.png", name: "灭魂狂飙" }
		]
		// 把数组转换eui的数组
		let euiArr: eui.ArrayCollection = new eui.ArrayCollection(souceArray);
		this.hero_list.dataProvider = euiArr;
		this.hero_scroller.horizontalScrollBar.autoVisibility = false; // 滚动条取消
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backMain, this);
	}


	/**
	 * 回到主界面
	 */
	private backMain() {
		console.log("进入");
		SceneManager.toMainScene();
	}
}