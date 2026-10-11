gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.idToCallbackMap = new Map();
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDPromptObjects1= [];
gdjs.StartCode.GDPromptObjects2= [];
gdjs.StartCode.GDBestTextObjects1= [];
gdjs.StartCode.GDBestTextObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestText"), gdjs.StartCode.GDBestTextObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("papercut", "best", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{for(var i = 0, len = gdjs.StartCode.GDBestTextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDBestTextObjects1[i].setString("best score " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDPromptObjects1.length = 0;
gdjs.StartCode.GDPromptObjects2.length = 0;
gdjs.StartCode.GDBestTextObjects1.length = 0;
gdjs.StartCode.GDBestTextObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDPromptObjects1.length = 0;
gdjs.StartCode.GDPromptObjects2.length = 0;
gdjs.StartCode.GDBestTextObjects1.length = 0;
gdjs.StartCode.GDBestTextObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
