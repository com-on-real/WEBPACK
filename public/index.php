<?php
session_start();
header('Access-Control-Allow-Origin: *');
$debug = 'false'; // all / simple / false
define('ROOT', dirname(__DIR__));

require(ROOT . '/config/ini.php');
require(ROOT.'/controller/controller.php');

//define('DOMAINE', $domaine);
define('RACINE', 'https://');

$page = $_GET['page'];

try
{
	switch($page)
	{
		case 'page1':
			page1();
		break;

		case 'page2':
			page2();
		break;

		case 'page3':
			page3();
		break;
	}
}
catch(Exception $e)
{
    $errorMessage = $e->getMessage();
    require('view/errorView.php');
    require('view/template/siteweb.php');
    require('view/vitrine/construct/modal.php');
}