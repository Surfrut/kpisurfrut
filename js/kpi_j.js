new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

function drawChart() {
  var query = new google.visualization.Query("select *");
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
  chart.draw(data, null);
}
