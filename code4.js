gdjs.victoryCode = {};
gdjs.victoryCode.GDfoneObjects1= [];
gdjs.victoryCode.GDfoneObjects2= [];
gdjs.victoryCode.GDNewObjectObjects1= [];
gdjs.victoryCode.GDNewObjectObjects2= [];

gdjs.victoryCode.conditionTrue_0 = {val:false};
gdjs.victoryCode.condition0IsTrue_0 = {val:false};
gdjs.victoryCode.condition1IsTrue_0 = {val:false};


gdjs.victoryCode.eventsList0 = function(runtimeScene) {

{


gdjs.victoryCode.condition0IsTrue_0.val = false;
{
gdjs.victoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.victoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "10029.mp3", false, 100, 1);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


};

gdjs.victoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.victoryCode.GDfoneObjects1.length = 0;
gdjs.victoryCode.GDfoneObjects2.length = 0;
gdjs.victoryCode.GDNewObjectObjects1.length = 0;
gdjs.victoryCode.GDNewObjectObjects2.length = 0;

gdjs.victoryCode.eventsList0(runtimeScene);
return;

}

gdjs['victoryCode'] = gdjs.victoryCode;
