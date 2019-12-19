<?php
// Decode manifest name
$json_manifest = file_get_contents('public/manifest.json');
$json_manifest = json_decode($json_manifest, true);
$css = $json_manifest['app.css'];
$js = $json_manifest['app.js'];
?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="<?= $css ?>">
	<title><?= $title ?></title>
</head>
<body>
<ul class="menu">
  <li><a href="#">One</a></li>
  <li><a href="#">Two</a></li>
  <li><a href="#">Three</a></li>
  <li><a href="#">Four</a></li>
</ul>
	<?= $content ?>
	<script type="text/javascript" src="<?= $js ?>"></script>
</body>
</html>