//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        // 当被添加到舞台的时候，说明资源已经被加载完成
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }

    private textField: egret.TextField;
    private bgImg: egret.Bitmap // 背景图
    private loadImg: egret.Bitmap // loading图标


    private createView(): void {
        // 赋值舞台的宽高
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;

        // 背景图片
        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes("loading_jpg");
        this.addChild(this.bgImg);


        // loading图标
        this.loadImg = new egret.Bitmap();
        this.loadImg.texture = RES.getRes('loading2_png');
        this.loadImg.anchorOffsetX = this.loadImg.width / 2;
        this.loadImg.anchorOffsetY = this.loadImg.height / 2;
        this.loadImg.x = this.width / 2;
        this.loadImg.y = this.height / 2;
        this.addChild(this.loadImg);


        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = this.height / 2 - this.textField.height / 2;;
        this.textField.width = 480;
        this.textField.height = 20;
        this.textField.textAlign = "center";

        // 监听帧事件
        this.addEventListener(egret.Event.ENTER_FRAME, this.updata, this);
    }


    private updata(): void{
        this.loadImg.rotation += 5;
    }


    // 这个函数在加载时候会自动调用
    public onProgress(current: number, total: number): void {
        let percent = Math.floor((current / total) * 100);
        this.textField.text = `${percent}%`;
    }
}
