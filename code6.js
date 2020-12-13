gdjs.cutsceneCode = {};
gdjs.cutsceneCode.GDfoneObjects1= [];
gdjs.cutsceneCode.GDfoneObjects2= [];

gdjs.cutsceneCode.conditionTrue_0 = {val:false};
gdjs.cutsceneCode.condition0IsTrue_0 = {val:false};
gdjs.cutsceneCode.condition1IsTrue_0 = {val:false};


gdjs.cutsceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.cutsceneCode.condition0IsTrue_0.val = false;
{
gdjs.cutsceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.cutsceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menu");
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "10678.mp3", false, 100, 1);
}}

}


{


gdjs.cutsceneCode.condition0IsTrue_0.val = false;
{
gdjs.cutsceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "menu");
}if (gdjs.cutsceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", true);
}}

}


{


{
}

}


};

gdjs.cutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cutsceneCode.GDfoneObjects1.length = 0;
gdjs.cutsceneCode.GDfoneObjects2.length = 0;

gdjs.cutsceneCode.eventsList0(runtimeScene);
return;

}

gdjs['cutsceneCode'] = gdjs.cutsceneCode;
