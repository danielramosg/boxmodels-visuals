//Uses D3.V6

function DragInput (iniValue,minValue,maxValue,parent,callback) {
	this.value = iniValue

	//this.box = d3.select(place).append("svg").attr("width",50).attr("height",50)
	this.box = parent

	this.boox = this.box.append("rect")
		.attr("width",50).attr("height",30)
		.attr("rx",5)
		.attr("ry",20)
		.attr("fill","yellow")
		.attr("stroke","black");

  var uparrow = this.box.append("path")
    .attr("d","M 10 -5 l 30 0 l -15 -5 z")
    .attr("fill","yellow")
    .attr("stroke","black")
		.style("opacity",0);

  var downarrow = this.box.append("path")
    .attr("d","M 10 35 l 30 0 l -15 5 z")
    .attr("fill","yellow")
    .attr("stroke","black")
		.style("opacity",0);

	this.label = this.box.append("text");

	this.label
		.attr("x",25).attr("y",22)
    .attr("text-anchor","middle")
		.text(this.value);

	this.y0 = 0;
	this.value0 = 0;

	this.testfn = function (){
		console.log(this);
		}

	var This = this;

	this.showArrows = function(){
		uparrow.style("opacity",1);
		downarrow.style("opacity",1);
	}

	this.hideArrows = function(){
		const t = d3.transition().duration(200).ease(d3.easeLinear);
		uparrow.transition(t).style("opacity",0);
		downarrow.transition(t).style("opacity",0);
	}

	this.box.on("mousedown",This.showArrows);
	// this.box.on("click",this.hideArrows)
	//this.box.on("mouseup",This.hideArrows);


	this.dragstart = function (event){
		This.y0 = event.y;
		This.value0 = This.value;
		}

	this.dragged = function (event){
		let y = event.y;
		This.value = Math.max(Math.min( This.value0 + (This.y0 - y) ,maxValue) , minValue);
		This.label.text(This.value)
		callback(This.value);
		}

	this.dragended = function(event){
		This.hideArrows();
	}

	this.box.call(d3.drag()
		.on("drag",this.dragged)
		.on("start",this.dragstart)
		.on("end",this.dragended)
		)

}
