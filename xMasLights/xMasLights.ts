import {XMasLightsGrid} from "./xMasLightsGrid";

export function XMasLights() {
    let lightsGrid: XMasLightsGrid = new XMasLightsGrid();
    lightsGrid.turnLightsOn([887,9],[959,629]);
    lightsGrid.turnLightsOn([454,398],[844,448]);
    lightsGrid.turnLightsOff([539,243],[559,965]);
    lightsGrid.turnLightsOff([370,819],[676,868]);
    lightsGrid.turnLightsOff([145,40],[370,997]);
    lightsGrid.turnLightsOff([301,3],[808,453]);
    lightsGrid.turnLightsOn([351,678],[951,908]);
    lightsGrid.toggleLights([720,196],[897,994]);
    lightsGrid.toggleLights([831,394],[904,860]);

    console.log(lightsGrid.getLightsOnCount());

}
XMasLights();