<!DOCTYPE html>
<html>
<head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
  <v-app
    id="inspire"
  >
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">KPI Surfrut Cereza 2018</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <div id="chart_div"></div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
  <script type="text/javascript" src="https://apis.google.com/js/api.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"></script>
  <script src="https://apis.google.com/js/auth.js?onload=init"></script>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
  <script src="<?php echo base_url() ?>js/kpi_j.js"></script>
  <script src="<?php echo base_url(); ?>js/kpi2.js"></script>
</body>
</html>
