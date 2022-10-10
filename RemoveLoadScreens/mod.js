const loadscreenpanelFilename = 'global\\ui\\layouts\\loadscreenpanel.json';
const loadscreenpanelHDFilename = 'global\\ui\\layouts\\loadscreenpanelHD.json';

const loadscreenpanel = { "type": "TitleScreenHDPanel", "name": "LoadScreenPanel", "fields": { "fitToParent": true } };
const loadscreenpanelHD = { "type": "TitleScreenHDPanel", "name": "LoadScreenPanel", "fields": { "fitToParent": true } };

D2RMM.writeJson(loadscreenpanelFilename, loadscreenpanel);
D2RMM.writeJson(loadscreenpanelHDFilename, loadscreenpanelHD);