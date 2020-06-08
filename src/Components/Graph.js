import React, { Component } from 'react';
var d3 = require('d3');
const axios = require('axios');

const data = {
    nodes: [
        {
            name: "tt0057115", 
            group: 1
        },
        {
            name: "tt0482571", 
            group: 2
        }, 
        {
            name: "tt0816692", 
            group: 3
        },
        {
            name: "tt0382932",
            group: 4
        },
        {
            name: "tt0266987",
            group: 5
         },
         {
            name: "tt8579674",
            group: 6
         },
         {
            name: "tt5013056",
            group: 7
        },
        {
            name:  "tt1375666",
            group: 8
        }
    ],
    links: [
        {
            source: 1,
            target: 0,
            value: 1
        }
    ]
}

export class Graph extends Component {
    constructor(){
        super();
        this.state = {
            poster: '',
            actor: '',
        }
    }
    drag = (simulation) => {
        function dragStarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        function dragEnded(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded)
    }

    chart(nodes,links) {
        const width = 1920;
        const height = 1080;

        const obj_links = links.map(d =>Object.create(d));
        const obj_nodes = nodes.map(d =>Object.create(d));

        const svg = d3.create("svg")
            .attr("viewBox", [0,0,width, height]);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", d=>Math.sqrt(d.value));


        const color = (node) => {
            if (node.group == 1)
                return d3.color("steelblue");
            return d3.color("pink");
        }

        const radius = (node) => {
            if (node.group == 1)
                return 60;
            return 100;
        }

        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d=>{return d.index; }).distance(400))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill",color)
            .call(this.drag(simulation));

        

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        return svg.node();
    } 
    componentDidMount() {
        axios.get('https://www.omdbapi.com/?apikey=305fe9e5&i=' + this.props.name)
        .then(response => {
            this.setState({
                poster: response.data.Poster,
                actor: response.data.Actors,
            })
        })

        const elem = document.getElementById("mysvg");
        elem.appendChild(this.chart(data.nodes, data.links));
    } 

    render() {
        return <div id="mysvg">
             
        </div>
    }

}

export default Graph;