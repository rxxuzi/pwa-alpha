<?php
	$fp = fopen("./data/data.json", "w");

	if ($fp == false) {
		echo "Failure";
	} else {
		fwrite($fp, json_encode($_POST));
		fclose($fp);
	}
?>