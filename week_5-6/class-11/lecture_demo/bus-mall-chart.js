function drawChart() {
	var chart = new CanvasJS.Chart("chart-container", {
		title:{
			text: "Total Clicks for Each Product"
		},
		data: [
		{
			type: "column",
			dataPoints: images,
		}
		]
	});
	chart.render();
}
