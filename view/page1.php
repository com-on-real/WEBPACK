<?php
$title = "Page1";
ob_start();
?>

<h1 id="h1">Page 1</h1>

<?php
$content = ob_get_clean();