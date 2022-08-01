<?php
	// local
//	$dsn = 'mysql:host=127.0.0.1;dbname=gymnastics';
	// venue
	$dsn = 'mysql:host=192.168.130.13;dbname=gymnastics';
	$discipline = isset($_GET['d']) ? $_GET['d'] : "W";
	$limit = 4;
	if($discipline == "M") {
		$limit = 6;
	}
	try {
		$db = new PDO($dsn, 'usagym', 'usagym');
	} catch (Exception $e) {
		exit();
	}
	$sql = "SELECT * FROM scoreboard LIMIT " . $limit;
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($results);
?>