<html>
<body>
  <head>
    <script src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  </head>
  <button id="authorize-button" style="visibility: hidden">Authorize</button>
  <button onclick="makeApiCall()">Actualizar</button>
  <div id="chart_div"></div>
  <div id="chart_div2"></div>
  <hr>
  <button onclick="authenticate().then(loadClient)">autorizar y carga</button>
<button onclick="execute()">ingresar lo dato a la hoja </button>
  <script type="text/javascript" src="https://apis.google.com/js/api.js"></script>
  <script src="<?php echo base_url(); ?>js/kpi2.js"></script>
  <script src="https://apis.google.com/js/auth.js?onload=init"></script>
  <!-- <script src="https://www.gstatic.com/charts/loader.js"></script> -->

</body>
</html>
