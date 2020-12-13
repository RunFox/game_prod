gdjs.menuCode = {};
gdjs.menuCode.GDfoneObjects1= [];
gdjs.menuCode.GDfoneObjects2= [];
gdjs.menuCode.GDtitleObjects1= [];
gdjs.menuCode.GDtitleObjects2= [];
gdjs.menuCode.GDsightObjects1= [];
gdjs.menuCode.GDsightObjects2= [];
gdjs.menuCode.GDbutton1Objects1= [];
gdjs.menuCode.GDbutton1Objects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};
gdjs.menuCode.conditionTrue_1 = {val:false};
gdjs.menuCode.condition0IsTrue_1 = {val:false};
gdjs.menuCode.condition1IsTrue_1 = {val:false};
gdjs.menuCode.condition2IsTrue_1 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.menuCode.GDsightObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.menuCode.GDbutton1Objects1});gdjs.menuCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.menuCode.GDsightObjects1);
{for(var i = 0, len = gdjs.menuCode.GDsightObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDsightObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.menuCode.GDsightObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDsightObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button1"), gdjs.menuCode.GDbutton1Objects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "button");
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.condition0IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbutton1Objects1[i].getOpacity() < 255 ) {
        gdjs.menuCode.condition0IsTrue_1.val = true;
        gdjs.menuCode.GDbutton1Objects1[k] = gdjs.menuCode.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbutton1Objects1.length = k;}gdjs.menuCode.conditionTrue_1.val = true && gdjs.menuCode.condition0IsTrue_1.val;
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDbutton1Objects1 */
{for(var i = 0, len = gdjs.menuCode.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDbutton1Objects1[i].setOpacity(gdjs.menuCode.GDbutton1Objects1[i].getOpacity() + (5));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "button");
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button1"), gdjs.menuCode.GDbutton1Objects1);
{for(var i = 0, len = gdjs.menuCode.GDbutton1Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDbutton1Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\..\\Music\\sound\\Occams Laser - Temperance (t9music.ru).mp3", true, 100, 1);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button1"), gdjs.menuCode.GDbutton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.menuCode.GDsightObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDsightObjects1Objects, gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDbutton1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition1IsTrue_0;
gdjs.menuCode.condition0IsTrue_1.val = false;
gdjs.menuCode.condition1IsTrue_1.val = false;
{
gdjs.menuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.menuCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDbutton1Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbutton1Objects1[i].getOpacity() >= 255 ) {
        gdjs.menuCode.condition1IsTrue_1.val = true;
        gdjs.menuCode.GDbutton1Objects1[k] = gdjs.menuCode.GDbutton1Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbutton1Objects1.length = k;}}
gdjs.menuCode.conditionTrue_1.val = true && gdjs.menuCode.condition0IsTrue_1.val && gdjs.menuCode.condition1IsTrue_1.val;
}
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", true);
}}

}


{


{
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDfoneObjects1.length = 0;
gdjs.menuCode.GDfoneObjects2.length = 0;
gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDsightObjects1.length = 0;
gdjs.menuCode.GDsightObjects2.length = 0;
gdjs.menuCode.GDbutton1Objects1.length = 0;
gdjs.menuCode.GDbutton1Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
