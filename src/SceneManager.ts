class SceneManager {
    public _stage: egret.DisplayObjectContainer;
    public mainScene: MainScene;
    public playerScene: PlayerScene;
    public heroList: HeroScene;
    // public goodsList: GoodIndex;

    constructor() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
        this.heroList = new HeroScene();
        // this.goodsList = new GoodIndex();
    }

    static sceneManager: SceneManager;
    static get instance() {
        if (!this.sceneManager) {
            this.sceneManager = new SceneManager();
        }
        return this.sceneManager;
    }

    /**
     * 设置根场景
     */
    public setStage(s: egret.DisplayObjectContainer) {
        this._stage = s
    }


    /**
     * 弹窗
     */

    static showInfo(arr: string[]){
        let tips: string = "你选择了:";
        if(arr.length === 0){
            tips = "厉害了，你什么都没选"
        }else{
            tips += arr.toString();
        }
        // 新建一个消息弹窗
        let bgImg:egret.Bitmap = new egret.Bitmap();
        bgImg.texture = RES.getRes("toast-bg_png");
        SceneManager.instance.mainScene.addChild(bgImg); // 添加到主界面之中
        bgImg.x = SceneManager.instance.mainScene.width / 2 - bgImg.width / 2
        bgImg.y = 500
        bgImg.height = 40
        // 新建一个label用来显示文字
        let label: eui.Label = new eui.Label();
        label.text = tips; // 把提示语放到里面
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2
        label.y = 510
        label.height = 40;
        // 创建一个定时器，把弹窗删除掉
        let timer: egret.Timer = new egret.Timer(2000,1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, e => {
            // 从主页面上删除
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(bgImg)
        }, this)
    }
    /**
      * 删除其他场景
      * @param scene 不需要删除的场景
    */
    private removeOther(scene) {
        //, this.goodsList
        let arr = [this.playerScene, this.heroList];
        arr.forEach((item) => {
            if (scene === item) {
                return
            }
            if (item.parent) {
                this.mainScene.removeChild(item)
            }
        })
    }

    /**
     * 主场景
     */
    static toMainScene() {
        let stage: egret.DisplayObjectContainer = this.instance._stage // (根) 舞台
        let mainScene = SceneManager.instance.mainScene // 主场景

        // 取消所有按钮的选中状态
        mainScene.toggleBtn(0);
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if (!mainScene.parent) {
            // 未被添加到场景
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene)
        }
        // 判断玩家场景是否有父级，如果有父级，那么就删除掉玩家场景
        SceneManager.instance.removeOther(SceneManager.instance.mainScene)
    }

    /**
     * 玩家场景
     */
    static toPlayerScene() {
        this.instance.removeOther(this.instance.playerScene)
        let stage: egret.DisplayObjectContainer = this.instance._stage
        // 把玩家场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.playerScene)
    }

    /**
     * 英雄场景
     */
    static toHeroList() {
        this.instance.removeOther(this.instance.heroList)
        let stage: egret.DisplayObjectContainer = this.instance._stage
        // 把英雄场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.heroList)
    }

    /**
     * 物品场景
     */
    
    // static toGoodsList() {
    //     this.instance.removeOther(this.instance.goodsList);
    //     let stage: egret.DisplayObjectContainer = this.instance._stage
    //     this.instance.mainScene.addChild(this.instance.goodsList);
    // }
}