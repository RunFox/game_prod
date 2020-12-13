gdjs.deathCode = {};
gdjs.deathCode.GDfoneObjects1= [];
gdjs.deathCode.GDfoneObjects2= [];
gdjs.deathCode.GDgame_95overObjects1= [];
gdjs.deathCode.GDgame_95overObjects2= [];

gdjs.deathCode.conditionTrue_0 = {val:false};
gdjs.deathCode.condition0IsTrue_0 = {val:false};
gdjs.deathCode.condition1IsTrue_0 = {val:false};


gdjs.deathCode.eventsList0 = function(runtimeScene) {

{


gdjs.deathCode.condition0IsTrue_0.val = false;
{
gdjs.deathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.deathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menu");
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{


gdjs.deathCode.condition0IsTrue_0.val = false;
{
gdjs.deathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "menu");
}if (gdjs.deathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


};

gdjs.deathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.deathCode.GDfoneObjects1.length = 0;
gdjs.deathCode.GDfoneObjects2.length = 0;
gdjs.deathCode.GDgame_95overObjects1.length = 0;
gdjs.deathCode.GDgame_95overObjects2.length = 0;

gdjs.deathCode.eventsList0(runtimeScene);
return;

}

gdjs['deathCode'] = gdjs.deathCode;
