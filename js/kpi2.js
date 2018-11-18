// GENERA GRÁFICOS DESDE HOJA DE CALCULO GOOGLE*******************************************************************************************************

var clientId = '573871884336-qdk2leve38prvkc8l463cvqj7mbep434.apps.googleusercontent.com';
var scopes = 'https://www.googleapis.com/auth/drive.file';

google.setOnLoadCallback(makeApiCall);
    google.load('visualization', '1',
            {
              'packages':['corechart', 'table', 'geomap', 'bar']
            }
    );

function init() {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}

function makeApiCall() {
  var queryString = encodeURIComponent("SELECT *");
  // var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1VPzO-_3z3rRJxIKbcBZhzB1GOf08Nz1FWVLah8s5BR0/gviz/tq?tq=" + queryString);
  var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1VPzO-_3z3rRJxIKbcBZhzB1GOf08Nz1FWVLah8s5BR0/gviz/tq?range=C:P");
  query.send(handleSampleDataQueryResponse);
}

function handleTqResponse(resp) {
  document.write(JSON.stringify(resp));
}

function handleSampleDataQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  console.log(data);
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  var chart2 = new google.visualization.Table(document.getElementById('chart_div2'));
  chart.draw(data, { title:"CONTROL DE TEMPERATURA AMBIENTAL EN CÁMARAS DESPACHO", vAxis: { title: 'Temperatura °C' }, animation: { duration: 1000, startup: true } });
  // chart2.draw(data, { legend: { position: 'none' } });
}

// FIN GENERA GRÁFICOS DESDE HOJA DE CALCULO GOOGLE***************************************************************************************************

// INGRESAR DATOS A HOJA DE CALCULO GOOGLE************************************************************************************************************
function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.sheets.spreadsheets.values.update({
    "spreadsheetId": "1VPzO-_3z3rRJxIKbcBZhzB1GOf08Nz1FWVLah8s5BR0",
    "range": "A4",
    "includeValuesInResponse": true,
    "responseDateTimeRenderOption": "SERIAL_NUMBER",
    "responseValueRenderOption": "UNFORMATTED_VALUE",
    "valueInputOption": "RAW",
    "resource": {
      "range": "A4",
      "majorDimension": "ROWS",
      "values": [
        [
          "A4",
          "$1",
          "$2",
          ""
        ],
        [
          "A4",
          "4/1/2016",
          "4/15/2016",
          ""
        ]
      ]
    }
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "573871884336-qdk2leve38prvkc8l463cvqj7mbep434.apps.googleusercontent.com"});
});
