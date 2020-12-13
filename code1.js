gdjs.level1Code = {};
gdjs.level1Code.GDsightObjects1= [];
gdjs.level1Code.GDsightObjects2= [];
gdjs.level1Code.GDbackgroundObjects1= [];
gdjs.level1Code.GDbackgroundObjects2= [];
gdjs.level1Code.GDgangster1Objects1= [];
gdjs.level1Code.GDgangster1Objects2= [];
gdjs.level1Code.GDammoObjects1= [];
gdjs.level1Code.GDammoObjects2= [];
gdjs.level1Code.GDskullObjects1= [];
gdjs.level1Code.GDskullObjects2= [];
gdjs.level1Code.GDboomObjects1= [];
gdjs.level1Code.GDboomObjects2= [];
gdjs.level1Code.GDlife3Objects1= [];
gdjs.level1Code.GDlife3Objects2= [];
gdjs.level1Code.GDlife2Objects1= [];
gdjs.level1Code.GDlife2Objects2= [];
gdjs.level1Code.GDlifeObjects1= [];
gdjs.level1Code.GDlifeObjects2= [];
gdjs.level1Code.GDrat2Objects1= [];
gdjs.level1Code.GDrat2Objects2= [];
gdjs.level1Code.GDratObjects1= [];
gdjs.level1Code.GDratObjects2= [];

gdjs.level1Code.conditionTrue_0 = {val:false};
gdjs.level1Code.condition0IsTrue_0 = {val:false};
gdjs.level1Code.condition1IsTrue_0 = {val:false};
gdjs.level1Code.condition2IsTrue_0 = {val:false};
gdjs.level1Code.conditionTrue_1 = {val:false};
gdjs.level1Code.condition0IsTrue_1 = {val:false};
gdjs.level1Code.condition1IsTrue_1 = {val:false};
gdjs.level1Code.condition2IsTrue_1 = {val:false};


gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.level1Code.GDgangster1Objects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level1Code.GDsightObjects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.level1Code.GDgangster1Objects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDskullObjects1Objects = Hashtable.newFrom({"skull": gdjs.level1Code.GDskullObjects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level1Code.GDsightObjects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDammoObjects1Objects = Hashtable.newFrom({"ammo": gdjs.level1Code.GDammoObjects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level1Code.GDsightObjects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDammoObjects1Objects = Hashtable.newFrom({"ammo": gdjs.level1Code.GDammoObjects1});gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDboomObjects1Objects = Hashtable.newFrom({"boom": gdjs.level1Code.GDboomObjects1});gdjs.level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Life").setNumber(3);
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level1Code.GDsightObjects1);
{for(var i = 0, len = gdjs.level1Code.GDsightObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDsightObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.level1Code.GDsightObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDsightObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{



}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "gangster");
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.level1Code.GDgangster1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDgangster1Objects1Objects, gdjs.random(900), 370, "");
}{for(var i = 0, len = gdjs.level1Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDgangster1Objects1[i].setZOrder(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gangster");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("gangster1"), gdjs.level1Code.GDgangster1Objects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level1Code.GDsightObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
{gdjs.level1Code.conditionTrue_1 = gdjs.level1Code.condition1IsTrue_0;
gdjs.level1Code.condition0IsTrue_1.val = false;
gdjs.level1Code.condition1IsTrue_1.val = false;
{
gdjs.level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDsightObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDgangster1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.level1Code.condition0IsTrue_1.val ) {
{
gdjs.level1Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}}
gdjs.level1Code.conditionTrue_1.val = true && gdjs.level1Code.condition0IsTrue_1.val && gdjs.level1Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDgangster1Objects1 */
gdjs.level1Code.GDskullObjects1.length = 0;

{gdjs.deviceVibration.startVibration(5);
}{for(var i = 0, len = gdjs.level1Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDgangster1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDskullObjects1Objects, (( gdjs.level1Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level1Code.GDgangster1Objects1[0].getPointX("")), (( gdjs.level1Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level1Code.GDgangster1Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.level1Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDgangster1Objects1[i].resetTimer("fire");
}
}{for(var i = 0, len = gdjs.level1Code.GDskullObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDskullObjects1[i].setZOrder(0);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


{



}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
{gdjs.level1Code.conditionTrue_1 = gdjs.level1Code.condition1IsTrue_0;
gdjs.level1Code.condition0IsTrue_1.val = false;
{
gdjs.level1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}gdjs.level1Code.conditionTrue_1.val = true && gdjs.level1Code.condition0IsTrue_1.val;
}
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zvuk-vyistrel-iz-makarova-7743.mp3", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ammo"), gdjs.level1Code.GDammoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level1Code.GDsightObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
{gdjs.level1Code.conditionTrue_1 = gdjs.level1Code.condition1IsTrue_0;
gdjs.level1Code.condition0IsTrue_1.val = false;
gdjs.level1Code.condition1IsTrue_1.val = false;
{
gdjs.level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level1Code.condition0IsTrue_1.val ) {
{
gdjs.level1Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDsightObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDammoObjects1Objects, true, runtimeScene, false);
}}
gdjs.level1Code.conditionTrue_1.val = true && gdjs.level1Code.condition0IsTrue_1.val && gdjs.level1Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zvuk-schelchkov-pistoleta-kogda-konchilis-patronyi-7750.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ammo"), gdjs.level1Code.GDammoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level1Code.GDsightObjects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
{gdjs.level1Code.conditionTrue_1 = gdjs.level1Code.condition1IsTrue_0;
gdjs.level1Code.condition0IsTrue_1.val = false;
gdjs.level1Code.condition1IsTrue_1.val = false;
{
gdjs.level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDsightObjects1Objects, gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDammoObjects1Objects, false, runtimeScene, false);
}if ( gdjs.level1Code.condition0IsTrue_1.val ) {
{
gdjs.level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.level1Code.conditionTrue_1.val = true && gdjs.level1Code.condition0IsTrue_1.val && gdjs.level1Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(6);
}{gdjs.evtTools.sound.playSound(runtimeScene, "04127.mp3", false, 100, 1);
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "skull");
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("skull"), gdjs.level1Code.GDskullObjects1);
{for(var i = 0, len = gdjs.level1Code.GDskullObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDskullObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skull");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gangster1"), gdjs.level1Code.GDgangster1Objects1);

gdjs.level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level1Code.GDgangster1Objects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDgangster1Objects1[i].timerElapsedTime("fire", 0.9) ) {
        gdjs.level1Code.condition0IsTrue_0.val = true;
        gdjs.level1Code.GDgangster1Objects1[k] = gdjs.level1Code.GDgangster1Objects1[i];
        ++k;
    }
}
gdjs.level1Code.GDgangster1Objects1.length = k;}if (gdjs.level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level1Code.GDgangster1Objects1 */
gdjs.level1Code.GDboomObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_46level1Code_46GDboomObjects1Objects, (( gdjs.level1Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level1Code.GDgangster1Objects1[0].getPointX("")) + 56, (( gdjs.level1Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level1Code.GDgangster1Objects1[0].getPointY("")) + 23, "");
}{for(var i = 0, len = gdjs.level1Code.GDboomObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDboomObjects1[i].setZOrder(1);
}
}{runtimeScene.getVariables().get("booms").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "booms");
}{gdjs.evtTools.sound.playSound(runtimeScene, "370b925a30aca01.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.level1Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDgangster1Objects1[i].resetTimer("fire");
}
}{runtimeScene.getGame().getVariables().get("Life").sub(1);
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
gdjs.level1Code.condition1IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("booms")) == 1;
}if ( gdjs.level1Code.condition0IsTrue_0.val ) {
{
{gdjs.level1Code.conditionTrue_1 = gdjs.level1Code.condition1IsTrue_0;
gdjs.level1Code.condition0IsTrue_1.val = false;
{
gdjs.level1Code.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "booms");
}gdjs.level1Code.conditionTrue_1.val = true && gdjs.level1Code.condition0IsTrue_1.val;
}
}}
if (gdjs.level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("boom"), gdjs.level1Code.GDboomObjects1);
{for(var i = 0, len = gdjs.level1Code.GDboomObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDboomObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Life")) == 2;
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("life3"), gdjs.level1Code.GDlife3Objects1);
{for(var i = 0, len = gdjs.level1Code.GDlife3Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDlife3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Life")) == 1;
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("life2"), gdjs.level1Code.GDlife2Objects1);
{for(var i = 0, len = gdjs.level1Code.GDlife2Objects1.length ;i < len;++i) {
    gdjs.level1Code.GDlife2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Life")) == 0;
}if (gdjs.level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("life"), gdjs.level1Code.GDlifeObjects1);
{for(var i = 0, len = gdjs.level1Code.GDlifeObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDlifeObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "death", true);
}}

}


{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 10;
}if (gdjs.level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cutscene", false);
}}

}


{


{
}

}


};

gdjs.level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1Code.GDsightObjects1.length = 0;
gdjs.level1Code.GDsightObjects2.length = 0;
gdjs.level1Code.GDbackgroundObjects1.length = 0;
gdjs.level1Code.GDbackgroundObjects2.length = 0;
gdjs.level1Code.GDgangster1Objects1.length = 0;
gdjs.level1Code.GDgangster1Objects2.length = 0;
gdjs.level1Code.GDammoObjects1.length = 0;
gdjs.level1Code.GDammoObjects2.length = 0;
gdjs.level1Code.GDskullObjects1.length = 0;
gdjs.level1Code.GDskullObjects2.length = 0;
gdjs.level1Code.GDboomObjects1.length = 0;
gdjs.level1Code.GDboomObjects2.length = 0;
gdjs.level1Code.GDlife3Objects1.length = 0;
gdjs.level1Code.GDlife3Objects2.length = 0;
gdjs.level1Code.GDlife2Objects1.length = 0;
gdjs.level1Code.GDlife2Objects2.length = 0;
gdjs.level1Code.GDlifeObjects1.length = 0;
gdjs.level1Code.GDlifeObjects2.length = 0;
gdjs.level1Code.GDrat2Objects1.length = 0;
gdjs.level1Code.GDrat2Objects2.length = 0;
gdjs.level1Code.GDratObjects1.length = 0;
gdjs.level1Code.GDratObjects2.length = 0;

gdjs.level1Code.eventsList0(runtimeScene);
return;

}

gdjs['level1Code'] = gdjs.level1Code;
