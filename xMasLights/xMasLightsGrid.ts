export class XMasLightsGrid {
    lightGrid: number[][];
    totalLitLights: number;
     constructor() {
         let buildArray: number[][] = [];
         for (let i = 0; i < 1000; i++) {
             buildArray.push([]);
             for (let j = 0; j < 1000; j++) {
                 buildArray[i].push(0);
             }
         }
         this.lightGrid = buildArray;
         this.totalLitLights = 0;
     }

     turnLightsOn([startX,startY]: [number,number], [endX,endY]: [number,number]): number{
         for (let i = startX; i <= endX; i++) {
             for (let j = startY; j <= endY; j++) {
                 this.totalLitLights++;
                 this.lightGrid[i][j]++;
             }
         }
         return this.totalLitLights;
    }

    turnLightsOff([startX,startY]: [number,number], [endX,endY]: [number,number]): number{
        for (let i = startX; i <= endX; i++) {
            for (let j = startY; j <= endY; j++) {
                if (this.lightGrid[i][j] > 0) {
                    this.totalLitLights--;
                    this.lightGrid[i][j]--;
                }
            }
        }
        return this.totalLitLights;
    }

    toggleLights([startX,startY]: [number,number], [endX,endY]: [number,number]): number{
        for (let i = startX; i <= endX; i++) {
            for (let j = startY; j <= endY; j++) {
                this.totalLitLights += 2;
                this.lightGrid[i][j] += 2;
            }
        }
        return this.totalLitLights;
    }

    getLightsOnCount() {
         return this.totalLitLights;
    }

}