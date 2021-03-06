<?php
// Decode manifest name
$json_manifest = file_get_contents(ROOT.'/public/assets/manifest.json');
$json_manifest = json_decode($json_manifest, true);
$css = str_replace('/public/', '', $json_manifest['app.css']);
$js = str_replace('/public/', '', $json_manifest['app.js']);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="<?= $css ?>">
	<title><?= $title ?></title>
</head>
<body>
	<?= $content ?>
	<script type="text/javascript" src="<?= $js ?>"></script>
</body>
</html>