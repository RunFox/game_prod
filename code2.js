gdjs.level2Code = {};
gdjs.level2Code.GDboomObjects1= [];
gdjs.level2Code.GDboomObjects2= [];
gdjs.level2Code.GDsightObjects1= [];
gdjs.level2Code.GDsightObjects2= [];
gdjs.level2Code.GDgangster13Objects1= [];
gdjs.level2Code.GDgangster13Objects2= [];
gdjs.level2Code.GDgangster1Objects1= [];
gdjs.level2Code.GDgangster1Objects2= [];
gdjs.level2Code.GDammoObjects1= [];
gdjs.level2Code.GDammoObjects2= [];
gdjs.level2Code.GDlife3Objects1= [];
gdjs.level2Code.GDlife3Objects2= [];
gdjs.level2Code.GDlife2Objects1= [];
gdjs.level2Code.GDlife2Objects2= [];
gdjs.level2Code.GDlifeObjects1= [];
gdjs.level2Code.GDlifeObjects2= [];
gdjs.level2Code.GDbackgroundObjects1= [];
gdjs.level2Code.GDbackgroundObjects2= [];
gdjs.level2Code.GDpeopleObjects1= [];
gdjs.level2Code.GDpeopleObjects2= [];
gdjs.level2Code.GDskullObjects1= [];
gdjs.level2Code.GDskullObjects2= [];
gdjs.level2Code.GDbloodObjects1= [];
gdjs.level2Code.GDbloodObjects2= [];
gdjs.level2Code.GDneonObjects1= [];
gdjs.level2Code.GDneonObjects2= [];

gdjs.level2Code.conditionTrue_0 = {val:false};
gdjs.level2Code.condition0IsTrue_0 = {val:false};
gdjs.level2Code.condition1IsTrue_0 = {val:false};
gdjs.level2Code.condition2IsTrue_0 = {val:false};
gdjs.level2Code.conditionTrue_1 = {val:false};
gdjs.level2Code.condition0IsTrue_1 = {val:false};
gdjs.level2Code.condition1IsTrue_1 = {val:false};
gdjs.level2Code.condition2IsTrue_1 = {val:false};


gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.level2Code.GDgangster1Objects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level2Code.GDsightObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.level2Code.GDgangster1Objects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDskullObjects1Objects = Hashtable.newFrom({"skull": gdjs.level2Code.GDskullObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level2Code.GDsightObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDammoObjects1Objects = Hashtable.newFrom({"ammo": gdjs.level2Code.GDammoObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level2Code.GDsightObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDammoObjects1Objects = Hashtable.newFrom({"ammo": gdjs.level2Code.GDammoObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDboomObjects1Objects = Hashtable.newFrom({"boom": gdjs.level2Code.GDboomObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDpeopleObjects1Objects = Hashtable.newFrom({"people": gdjs.level2Code.GDpeopleObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDpeopleObjects1Objects = Hashtable.newFrom({"people": gdjs.level2Code.GDpeopleObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDgangster1Objects1Objects = Hashtable.newFrom({"gangster1": gdjs.level2Code.GDgangster1Objects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects = Hashtable.newFrom({"sight": gdjs.level2Code.GDsightObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDpeopleObjects1Objects = Hashtable.newFrom({"people": gdjs.level2Code.GDpeopleObjects1});gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDbloodObjects1Objects = Hashtable.newFrom({"blood": gdjs.level2Code.GDbloodObjects1});gdjs.level2Code.eventsList0 = function(runtimeScene) {

{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Life").setNumber(3);
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level2Code.GDsightObjects1);
{for(var i = 0, len = gdjs.level2Code.GDsightObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDsightObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.level2Code.GDsightObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDsightObjects1[i].setY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "gangster");
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.level2Code.GDgangster1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDgangster1Objects1Objects, gdjs.random(900), 450, "");
}{for(var i = 0, len = gdjs.level2Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDgangster1Objects1[i].setZOrder(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gangster");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gangster1"), gdjs.level2Code.GDgangster1Objects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level2Code.GDsightObjects1);

gdjs.level2Code.condition0IsTrue_0.val = false;
gdjs.level2Code.condition1IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level2Code.condition0IsTrue_0.val ) {
{
{gdjs.level2Code.conditionTrue_1 = gdjs.level2Code.condition1IsTrue_0;
gdjs.level2Code.condition0IsTrue_1.val = false;
gdjs.level2Code.condition1IsTrue_1.val = false;
{
gdjs.level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects, gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDgangster1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.level2Code.condition0IsTrue_1.val ) {
{
gdjs.level2Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}}
gdjs.level2Code.conditionTrue_1.val = true && gdjs.level2Code.condition0IsTrue_1.val && gdjs.level2Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level2Code.GDgangster1Objects1 */
gdjs.level2Code.GDskullObjects1.length = 0;

{gdjs.deviceVibration.startVibration(5);
}{for(var i = 0, len = gdjs.level2Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDgangster1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDskullObjects1Objects, (( gdjs.level2Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level2Code.GDgangster1Objects1[0].getPointX("")), (( gdjs.level2Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level2Code.GDgangster1Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.level2Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDgangster1Objects1[i].resetTimer("fire");
}
}{for(var i = 0, len = gdjs.level2Code.GDskullObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDskullObjects1[i].setZOrder(0);
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
gdjs.level2Code.condition1IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level2Code.condition0IsTrue_0.val ) {
{
{gdjs.level2Code.conditionTrue_1 = gdjs.level2Code.condition1IsTrue_0;
gdjs.level2Code.condition0IsTrue_1.val = false;
{
gdjs.level2Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}gdjs.level2Code.conditionTrue_1.val = true && gdjs.level2Code.condition0IsTrue_1.val;
}
}}
if (gdjs.level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zvuk-vyistrel-iz-makarova-7743.mp3", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ammo"), gdjs.level2Code.GDammoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level2Code.GDsightObjects1);

gdjs.level2Code.condition0IsTrue_0.val = false;
gdjs.level2Code.condition1IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if ( gdjs.level2Code.condition0IsTrue_0.val ) {
{
{gdjs.level2Code.conditionTrue_1 = gdjs.level2Code.condition1IsTrue_0;
gdjs.level2Code.condition0IsTrue_1.val = false;
gdjs.level2Code.condition1IsTrue_1.val = false;
{
gdjs.level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level2Code.condition0IsTrue_1.val ) {
{
gdjs.level2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects, gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDammoObjects1Objects, true, runtimeScene, false);
}}
gdjs.level2Code.conditionTrue_1.val = true && gdjs.level2Code.condition0IsTrue_1.val && gdjs.level2Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zvuk-schelchkov-pistoleta-kogda-konchilis-patronyi-7750.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ammo"), gdjs.level2Code.GDammoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level2Code.GDsightObjects1);

gdjs.level2Code.condition0IsTrue_0.val = false;
gdjs.level2Code.condition1IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if ( gdjs.level2Code.condition0IsTrue_0.val ) {
{
{gdjs.level2Code.conditionTrue_1 = gdjs.level2Code.condition1IsTrue_0;
gdjs.level2Code.condition0IsTrue_1.val = false;
gdjs.level2Code.condition1IsTrue_1.val = false;
{
gdjs.level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects, gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDammoObjects1Objects, false, runtimeScene, false);
}if ( gdjs.level2Code.condition0IsTrue_1.val ) {
{
gdjs.level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.level2Code.conditionTrue_1.val = true && gdjs.level2Code.condition0IsTrue_1.val && gdjs.level2Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level2Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(12);
}{gdjs.evtTools.sound.playSound(runtimeScene, "04127.mp3", false, 100, 1);
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "skull");
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("skull"), gdjs.level2Code.GDskullObjects1);
{for(var i = 0, len = gdjs.level2Code.GDskullObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDskullObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skull");
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Life")) == 0;
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("life"), gdjs.level2Code.GDlifeObjects1);
{for(var i = 0, len = gdjs.level2Code.GDlifeObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDlifeObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "death", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gangster1"), gdjs.level2Code.GDgangster1Objects1);

gdjs.level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level2Code.GDgangster1Objects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDgangster1Objects1[i].timerElapsedTime("fire", 0.9) ) {
        gdjs.level2Code.condition0IsTrue_0.val = true;
        gdjs.level2Code.GDgangster1Objects1[k] = gdjs.level2Code.GDgangster1Objects1[i];
        ++k;
    }
}
gdjs.level2Code.GDgangster1Objects1.length = k;}if (gdjs.level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level2Code.GDgangster1Objects1 */
gdjs.level2Code.GDboomObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDboomObjects1Objects, (( gdjs.level2Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level2Code.GDgangster1Objects1[0].getPointX("")) + 56, (( gdjs.level2Code.GDgangster1Objects1.length === 0 ) ? 0 :gdjs.level2Code.GDgangster1Objects1[0].getPointY("")) + 23, "");
}{for(var i = 0, len = gdjs.level2Code.GDboomObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDboomObjects1[i].setZOrder(1);
}
}{runtimeScene.getVariables().get("booms").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "booms");
}{gdjs.evtTools.sound.playSound(runtimeScene, "370b925a30aca01.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.level2Code.GDgangster1Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDgangster1Objects1[i].resetTimer("fire");
}
}{runtimeScene.getGame().getVariables().get("Life").sub(1);
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
gdjs.level2Code.condition1IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("booms")) == 1;
}if ( gdjs.level2Code.condition0IsTrue_0.val ) {
{
{gdjs.level2Code.conditionTrue_1 = gdjs.level2Code.condition1IsTrue_0;
gdjs.level2Code.condition0IsTrue_1.val = false;
{
gdjs.level2Code.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "booms");
}gdjs.level2Code.conditionTrue_1.val = true && gdjs.level2Code.condition0IsTrue_1.val;
}
}}
if (gdjs.level2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("boom"), gdjs.level2Code.GDboomObjects1);
{for(var i = 0, len = gdjs.level2Code.GDboomObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDboomObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Life")) == 2;
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("life3"), gdjs.level2Code.GDlife3Objects1);
{for(var i = 0, len = gdjs.level2Code.GDlife3Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDlife3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Life")) == 1;
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("life2"), gdjs.level2Code.GDlife2Objects1);
{for(var i = 0, len = gdjs.level2Code.GDlife2Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDlife2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "people");
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.level2Code.GDpeopleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDpeopleObjects1Objects, gdjs.randomInRange(44, 909), gdjs.randomInRange(450, 510), "");
}{for(var i = 0, len = gdjs.level2Code.GDpeopleObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDpeopleObjects1[i].setZOrder(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "people");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gangster1"), gdjs.level2Code.GDgangster1Objects1);
gdjs.copyArray(runtimeScene.getObjects("people"), gdjs.level2Code.GDpeopleObjects1);

gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDpeopleObjects1Objects, gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDgangster1Objects1Objects, false, runtimeScene, false);
}if (gdjs.level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level2Code.GDpeopleObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDpeopleObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDpeopleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("people"), gdjs.level2Code.GDpeopleObjects1);
gdjs.copyArray(runtimeScene.getObjects("sight"), gdjs.level2Code.GDsightObjects1);

gdjs.level2Code.condition0IsTrue_0.val = false;
gdjs.level2Code.condition1IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.level2Code.condition0IsTrue_0.val ) {
{
{gdjs.level2Code.conditionTrue_1 = gdjs.level2Code.condition1IsTrue_0;
gdjs.level2Code.condition0IsTrue_1.val = false;
gdjs.level2Code.condition1IsTrue_1.val = false;
{
gdjs.level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDsightObjects1Objects, gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDpeopleObjects1Objects, false, runtimeScene, false);
}if ( gdjs.level2Code.condition0IsTrue_1.val ) {
{
gdjs.level2Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}}
gdjs.level2Code.conditionTrue_1.val = true && gdjs.level2Code.condition0IsTrue_1.val && gdjs.level2Code.condition1IsTrue_1.val;
}
}}
if (gdjs.level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level2Code.GDpeopleObjects1 */
gdjs.level2Code.GDbloodObjects1.length = 0;

{gdjs.deviceVibration.startVibration(5);
}{for(var i = 0, len = gdjs.level2Code.GDpeopleObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDpeopleObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level2Code.mapOfGDgdjs_46level2Code_46GDbloodObjects1Objects, (( gdjs.level2Code.GDpeopleObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDpeopleObjects1[0].getPointX("")), (( gdjs.level2Code.GDpeopleObjects1.length === 0 ) ? 0 :gdjs.level2Code.GDpeopleObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.level2Code.GDpeopleObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDpeopleObjects1[i].resetTimer("fire");
}
}{for(var i = 0, len = gdjs.level2Code.GDbloodObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDbloodObjects1[i].setZOrder(0);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "blood");
}if (gdjs.level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("blood"), gdjs.level2Code.GDbloodObjects1);
{for(var i = 0, len = gdjs.level2Code.GDbloodObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDbloodObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blood");
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "badfinal", true);
}}

}


{


gdjs.level2Code.condition0IsTrue_0.val = false;
{
gdjs.level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 15;
}if (gdjs.level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "victory", true);
}}

}


};

gdjs.level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2Code.GDboomObjects1.length = 0;
gdjs.level2Code.GDboomObjects2.length = 0;
gdjs.level2Code.GDsightObjects1.length = 0;
gdjs.level2Code.GDsightObjects2.length = 0;
gdjs.level2Code.GDgangster13Objects1.length = 0;
gdjs.level2Code.GDgangster13Objects2.length = 0;
gdjs.level2Code.GDgangster1Objects1.length = 0;
gdjs.level2Code.GDgangster1Objects2.length = 0;
gdjs.level2Code.GDammoObjects1.length = 0;
gdjs.level2Code.GDammoObjects2.length = 0;
gdjs.level2Code.GDlife3Objects1.length = 0;
gdjs.level2Code.GDlife3Objects2.length = 0;
gdjs.level2Code.GDlife2Objects1.length = 0;
gdjs.level2Code.GDlife2Objects2.length = 0;
gdjs.level2Code.GDlifeObjects1.length = 0;
gdjs.level2Code.GDlifeObjects2.length = 0;
gdjs.level2Code.GDbackgroundObjects1.length = 0;
gdjs.level2Code.GDbackgroundObjects2.length = 0;
gdjs.level2Code.GDpeopleObjects1.length = 0;
gdjs.level2Code.GDpeopleObjects2.length = 0;
gdjs.level2Code.GDskullObjects1.length = 0;
gdjs.level2Code.GDskullObjects2.length = 0;
gdjs.level2Code.GDbloodObjects1.length = 0;
gdjs.level2Code.GDbloodObjects2.length = 0;
gdjs.level2Code.GDneonObjects1.length = 0;
gdjs.level2Code.GDneonObjects2.length = 0;

gdjs.level2Code.eventsList0(runtimeScene);
return;

}

gdjs['level2Code'] = gdjs.level2Code;
