// @ts-nocheck
import * as d3 from "d3";

interface AutoGraphArgs {
    
}

const width = 928;
const height = 600;
const padding = 1;

export class AutoGraph {
    private readonly _svg: d3.Selection<SVGSVGElement, undefined, null, undefined>;

    constructor( private readonly _args: AutoGraphArgs) {
        this._svg = this.createSvgElement();
    }

    addNode() {

    }

    private createSvgElement() {

        return d3.create("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "width: auto; height: auto;")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10);
    }

    get svgElement() {
        return this._svg.node();
    }

}
