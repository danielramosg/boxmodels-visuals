
async function loadSVGscene(){
const newsvg = await d3.svg("landscape4.svg");
var svgNode = newsvg.getElementsByTagName("svg")[0];
document.getElementById("svg").appendChild(svgNode);
// var innerSVG = d3.select("#svg").select("svg");
// innerSVG.attr("width",450).attr("height",400);

pthSnow1 = d3.select("#snow1").attr("d");
pthSnow1b = d3.select("#snow1b").attr("d");
d3.select("#snow1b").remove();

pthSnow2 = d3.select("#snow2").attr("d");
pthSnow2b = d3.select("#snow2b").attr("d");
d3.select("#snow2b").remove();

pthSnow3 = d3.select("#snow3").attr("d");
pthSnow3b = d3.select("#snow3b").attr("d");
d3.select("#snow3b").remove();

ipSnow1 = d3.interpolate(pthSnow1,pthSnow1b);
ipSnow2 = d3.interpolate(pthSnow2,pthSnow2b);
ipSnow3 = d3.interpolate(pthSnow3,pthSnow3b);

pthSunrays = d3.select("#sunrays").attr("transform");
pthSunrays_b = d3.select("#sunrays_b").attr("transform");
d3.select("#sunrays_b").remove();
ipSunrays = d3.interpolate(pthSunrays,pthSunrays_b);

// d3.select("#layer3").style("display","inline");



//updateCO2(4);
setInterval(giggleCO2,800);

}


function updateSnow(x){
  var x = Math.max(x,1e-6);
  x=x/100;
  d3.select("#snow1").attr("d",ipSnow1(x));
  d3.select("#snow2").attr("d",ipSnow2(x));
  d3.select("#snow3").attr("d",ipSnow3(x));
}

function updateSunrays(x){
  var x = Math.max(x,1e-6);
  x=x/100;
  d3.select("#sunrays").attr("transform",ipSunrays(x));
}


async function revealObj(obj){
  const t = d3.transition().duration(1000).ease(d3.easeLinear);
  if (obj.style("opacity") != "1" || obj.style("display")=="none") {
    obj.style("opacity",0);
    obj.style("display","inline");
    obj.transition(t).style("opacity",1);
  }
}

async function vanishObj(obj){
  const t = d3.transition().duration(1000).ease(d3.easeLinear);

  await obj.transition(t).style("opacity",0).end();
  obj.style("display","none");
}

// svg = d3.select("#svg");
// CO2_pos = [{x:500,y:500},{x:600,y:500}];
// molecs = svg.selectAll(".molec").data(CO2_pos);

function updateCO2 (x){
  var n = Math.floor(x);

  while(CO2_pos.length < n ) {
        CO2_pos.push({x: (630*Math.random()+10) , y:300});
    }
  while(CO2_pos.length > n ) {
        CO2_pos.pop();
    }

  molecs = svg.selectAll(".molec").data(CO2_pos);
  var g = molecs.enter()
    .append("g")
    .attr("class","molec")
    .attr("transform",(d,i) => "translate(" + d.x + ',' + d.y + ')');

      g.append("circle").attr("cx",-7).attr("r",4).attr("fill","white");
      g.append("circle").attr("cx",7).attr("r",4).attr("fill","white");
      g.append("circle").attr("cx",0).attr("r",6.5).attr("fill","black");

  molecs.exit().remove();
}

function giggleCO2 () {
  svg.selectAll(".molec")
      .transition().duration(800).ease(d3.easeLinear)
      .attr("transform",d =>
                  "translate(" +
                  (d.x + 20 * (Math.random()-0.5) )
                  + ',' +
                  (d.y + 20 * (Math.random()-0.5) )
                  + ') rotate(' +
                  (360 * (Math.random()-0.5) )
                  + ')'
                );
}



// function GHElayer () {
// if (d3.select("#GHEboxes").node().checked) {
//       revealObj(d3.select("#layer2"))
//     } else {
//       vanishObj(d3.select("#layer2"))
//     }
// }
