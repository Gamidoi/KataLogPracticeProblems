import {XMasLightsGrid} from "./xMasLightsGrid";
import {XMasLights} from "./xMasLights";

test ("testing on off functions of class XMasLightsGrid", () => {
    let xmasLights: XMasLightsGrid = new XMasLightsGrid();
    expect(xmasLights.turnLightsOn([1,1], [3,3])).toBe(9);
    expect(xmasLights.turnLightsOn([1,1], [5,5])).toBe(34);
    expect(xmasLights.turnLightsOff([1,1], [3,3])).toBe(25);
    expect(xmasLights.toggleLights([1,1], [5,5])).toBe(75);
})
test ("is there a spare empty array in xMasLightsGrid?", () => {
    let xmasLights: XMasLightsGrid = new XMasLightsGrid();
    expect(xmasLights.lightGrid.length).toBe(1000);
    expect(xmasLights.lightGrid[5].length).toBe(1000);
})