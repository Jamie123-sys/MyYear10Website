gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.idToCallbackMap = new Map();
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDGroundObjects1= [];
gdjs.Level_321Code.GDGroundObjects2= [];
gdjs.Level_321Code.GDPlatformObjects1= [];
gdjs.Level_321Code.GDPlatformObjects2= [];
gdjs.Level_321Code.GDPlatformSmallObjects1= [];
gdjs.Level_321Code.GDPlatformSmallObjects2= [];
gdjs.Level_321Code.GDGlintObjects1= [];
gdjs.Level_321Code.GDGlintObjects2= [];
gdjs.Level_321Code.GDSpikesObjects1= [];
gdjs.Level_321Code.GDSpikesObjects2= [];
gdjs.Level_321Code.GDCheckpointObjects1= [];
gdjs.Level_321Code.GDCheckpointObjects2= [];
gdjs.Level_321Code.GDDoorGlowObjects1= [];
gdjs.Level_321Code.GDDoorGlowObjects2= [];
gdjs.Level_321Code.GDDoorObjects1= [];
gdjs.Level_321Code.GDDoorObjects2= [];
gdjs.Level_321Code.GDDustObjects1= [];
gdjs.Level_321Code.GDDustObjects2= [];
gdjs.Level_321Code.GDHillsFarObjects1= [];
gdjs.Level_321Code.GDHillsFarObjects2= [];
gdjs.Level_321Code.GDHillsNearObjects1= [];
gdjs.Level_321Code.GDHillsNearObjects2= [];
gdjs.Level_321Code.GDScoreTextObjects1= [];
gdjs.Level_321Code.GDScoreTextObjects2= [];


gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDustObjects1Objects = Hashtable.newFrom({"Dust": gdjs.Level_321Code.GDDustObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDGlintObjects1Objects = Hashtable.newFrom({"Glint": gdjs.Level_321Code.GDGlintObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Level_321Code.GDSpikesObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.Level_321Code.GDCheckpointObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDustObjects1Objects = Hashtable.newFrom({"Dust": gdjs.Level_321Code.GDDustObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0.12);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(7631636);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0.12);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) <= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.Level_321Code.GDDustObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDustObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) - 2, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")) + 56, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Fall");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Glint"), gdjs.Level_321Code.GDGlintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDGlintObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDGlintObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDGlintObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGlintObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Level_321Code.GDSpikesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSpikesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(50);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0.25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")) > 1200);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(50);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0.25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.Level_321Code.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCheckpointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDCheckpointObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCheckpointObjects1[i].getVariableNumber(gdjs.Level_321Code.GDCheckpointObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDCheckpointObjects1[k] = gdjs.Level_321Code.GDCheckpointObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCheckpointObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDCheckpointObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCheckpointObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCheckpointObjects1[i].returnVariable(gdjs.Level_321Code.GDCheckpointObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDCheckpointObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCheckpointObjects1[i].setAnimationName("On");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Level_321Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCheckpointObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Level_321Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCheckpointObjects1[0].getPointY("")) - 20);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(Math.round(Math.max(0, 90 - gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)) * 10));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("papercut", "lastscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) > 0.25;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDDustObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDustObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) - 2, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")) + 56, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) <= 0.25;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dust"), gdjs.Level_321Code.GDDustObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDustObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDustObjects1[i].returnVariable(gdjs.Level_321Code.GDDustObjects1[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dust"), gdjs.Level_321Code.GDDustObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDustObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDustObjects1[i].getVariableNumber(gdjs.Level_321Code.GDDustObjects1[i].getVariables().getFromIndex(0)) > 0.18 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDustObjects1[k] = gdjs.Level_321Code.GDDustObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDustObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDDustObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDustObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDustObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, Math.min(Math.max((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), 280), 3520), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, Math.min(Math.max((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 195), 470), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.25, "Far", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 470 + (gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 470) * 0.25, "Far", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.55, "Near", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 470 + (gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 470) * 0.55, "Near", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, Math.min(Math.max((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), 280), 3520) + gdjs.randomInRange(-6, 6), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, Math.min(Math.max((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 195), 470) + gdjs.randomInRange(-6, 6), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Level_321Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreTextObjects1[i].setString("SCORE " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + "    TIME " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene))));
}
}
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDGroundObjects1.length = 0;
gdjs.Level_321Code.GDGroundObjects2.length = 0;
gdjs.Level_321Code.GDPlatformObjects1.length = 0;
gdjs.Level_321Code.GDPlatformObjects2.length = 0;
gdjs.Level_321Code.GDPlatformSmallObjects1.length = 0;
gdjs.Level_321Code.GDPlatformSmallObjects2.length = 0;
gdjs.Level_321Code.GDGlintObjects1.length = 0;
gdjs.Level_321Code.GDGlintObjects2.length = 0;
gdjs.Level_321Code.GDSpikesObjects1.length = 0;
gdjs.Level_321Code.GDSpikesObjects2.length = 0;
gdjs.Level_321Code.GDCheckpointObjects1.length = 0;
gdjs.Level_321Code.GDCheckpointObjects2.length = 0;
gdjs.Level_321Code.GDDoorGlowObjects1.length = 0;
gdjs.Level_321Code.GDDoorGlowObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDustObjects1.length = 0;
gdjs.Level_321Code.GDDustObjects2.length = 0;
gdjs.Level_321Code.GDHillsFarObjects1.length = 0;
gdjs.Level_321Code.GDHillsFarObjects2.length = 0;
gdjs.Level_321Code.GDHillsNearObjects1.length = 0;
gdjs.Level_321Code.GDHillsNearObjects2.length = 0;
gdjs.Level_321Code.GDScoreTextObjects1.length = 0;
gdjs.Level_321Code.GDScoreTextObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDGroundObjects1.length = 0;
gdjs.Level_321Code.GDGroundObjects2.length = 0;
gdjs.Level_321Code.GDPlatformObjects1.length = 0;
gdjs.Level_321Code.GDPlatformObjects2.length = 0;
gdjs.Level_321Code.GDPlatformSmallObjects1.length = 0;
gdjs.Level_321Code.GDPlatformSmallObjects2.length = 0;
gdjs.Level_321Code.GDGlintObjects1.length = 0;
gdjs.Level_321Code.GDGlintObjects2.length = 0;
gdjs.Level_321Code.GDSpikesObjects1.length = 0;
gdjs.Level_321Code.GDSpikesObjects2.length = 0;
gdjs.Level_321Code.GDCheckpointObjects1.length = 0;
gdjs.Level_321Code.GDCheckpointObjects2.length = 0;
gdjs.Level_321Code.GDDoorGlowObjects1.length = 0;
gdjs.Level_321Code.GDDoorGlowObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDustObjects1.length = 0;
gdjs.Level_321Code.GDDustObjects2.length = 0;
gdjs.Level_321Code.GDHillsFarObjects1.length = 0;
gdjs.Level_321Code.GDHillsFarObjects2.length = 0;
gdjs.Level_321Code.GDHillsNearObjects1.length = 0;
gdjs.Level_321Code.GDHillsNearObjects2.length = 0;
gdjs.Level_321Code.GDScoreTextObjects1.length = 0;
gdjs.Level_321Code.GDScoreTextObjects2.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
