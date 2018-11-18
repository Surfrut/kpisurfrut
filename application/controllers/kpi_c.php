<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class kpi_c extends CI_Controller{

  public function __construct(){
    parent::__construct();
  }

  function index(){
    // $this->load->view('index');
    $this->load->view('index2');
  }

}
