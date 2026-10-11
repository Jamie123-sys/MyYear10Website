gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.idToCallbackMap = new Map();
gdjs.EndCode.GDResultTextObjects1= [];
gdjs.EndCode.GDResultTextObjects2= [];
gdjs.EndCode.GDBestTextObjects1= [];
gdjs.EndCode.GDBestTextObjects2= [];
gdjs.EndCode.GDPromptObjects1= [];
gdjs.EndCode.GDPromptObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.EndCode.GDResultTextObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("papercut", "lastscore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("papercut", "best", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.EndCode.GDResultTextObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDResultTextObjects1[i].setString("you made it - " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestText"), gdjs.EndCode.GDBestTextObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("papercut", "best", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{for(var i = 0, len = gdjs.EndCode.GDBestTextObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDBestTextObjects1[i].setString("NEW BEST - " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestText"), gdjs.EndCode.GDBestTextObjects1);
{for(var i = 0, len = gdjs.EndCode.GDBestTextObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDBestTextObjects1[i].setString("best " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDResultTextObjects1.length = 0;
gdjs.EndCode.GDResultTextObjects2.length = 0;
gdjs.EndCode.GDBestTextObjects1.length = 0;
gdjs.EndCode.GDBestTextObjects2.length = 0;
gdjs.EndCode.GDPromptObjects1.length = 0;
gdjs.EndCode.GDPromptObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDResultTextObjects1.length = 0;
gdjs.EndCode.GDResultTextObjects2.length = 0;
gdjs.EndCode.GDBestTextObjects1.length = 0;
gdjs.EndCode.GDBestTextObjects2.length = 0;
gdjs.EndCode.GDPromptObjects1.length = 0;
gdjs.EndCode.GDPromptObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
