gdjs.badfinalCode = {};
gdjs.badfinalCode.GDbadfinalObjects1= [];
gdjs.badfinalCode.GDbadfinalObjects2= [];
gdjs.badfinalCode.GDtitleObjects1= [];
gdjs.badfinalCode.GDtitleObjects2= [];

gdjs.badfinalCode.conditionTrue_0 = {val:false};
gdjs.badfinalCode.condition0IsTrue_0 = {val:false};
gdjs.badfinalCode.condition1IsTrue_0 = {val:false};


gdjs.badfinalCode.eventsList0 = function(runtimeScene) {

{


gdjs.badfinalCode.condition0IsTrue_0.val = false;
{
gdjs.badfinalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.badfinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menu");
}{gdjs.evtTools.sound.playSound(runtimeScene, "01891.mp3", false, 100, 1);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{


gdjs.badfinalCode.condition0IsTrue_0.val = false;
{
gdjs.badfinalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "menu");
}if (gdjs.badfinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


{


{
}

}


};

gdjs.badfinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.badfinalCode.GDbadfinalObjects1.length = 0;
gdjs.badfinalCode.GDbadfinalObjects2.length = 0;
gdjs.badfinalCode.GDtitleObjects1.length = 0;
gdjs.badfinalCode.GDtitleObjects2.length = 0;

gdjs.badfinalCode.eventsList0(runtimeScene);
return;

}

gdjs['badfinalCode'] = gdjs.badfinalCode;
