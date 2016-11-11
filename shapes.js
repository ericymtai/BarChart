var dataArray = [15,24,5,121,1,11,38];

var dataWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];

var svg1 = d3.select("body").append("svg").attr("height", height).attr("width",width);

var height = 550;
var width = 570;

var margin = {left:0, right:25, top:490, bottom:0};

var x = d3.scaleLinear()
            // .domain([0, d3.max(dataArray)])
            .domain([d3.max(dataArray), 0])
            .range([width-80,0]);

// console.log(y(0));
// console.log(y(30));
// console.log(y(70));

var yAxis = d3.axisBottom(x).ticks(7).tickPadding(5).tickSize(15);

// var yAxis = d3.axisLeft(y);



var svg1 = d3.select("#canvax")
    .append("svg")
              .style('background', 'transparent')
              .style('padding-top', 1)
          .attr("height", height)
          .attr("width", width);

svg1.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
          .attr("height", 20)
          .attr("width", function(d,i){ return   d * ((width-80)/d3.max(dataArray)) })
          .attr("fill","#a7ddef")
          .attr("x", 0)
          .attr("y", function(d,i){ return i*70+7; });

svg1.selectAll("rect.rect2")
      .data(dataArray)
      .enter().append("rect")
          .attr("class","rect2")
          .attr("height", 34)
          // .attr("width", function(d,i){ return d*10+10; })
          .attr('width', width-80)
          .attr("fill","transparent")
          .attr("stroke","#2185d6")
          .attr("stroke-width","2px")
          .attr("x", 0)
          .attr("y", function(d,i){ return i*70; });

svg1.append("text").selectAll("tspan")
    .data(dataArray)
    .enter().append("tspan")
      // .attr("x", height*2)
      // .attr("y",function(d,i){ return 60 + (i*50); })
      .attr("x", 560)
      .attr("y", function(d,i){ return 16 + (i*71); })
      .attr("fill","none")
      .attr("stroke","blue")
      // .attr("stroke-width","2")
      .attr("dominant-baseline","middle")
      .attr("text-anchor","end")
      .attr("font-size","20")
      .text(function(d){ return d; });

svg1.append("g")
.attr("class","axis y")
.attr("transform","translate(" + margin.left + "," + margin.top + ")")
.call(yAxis);
