<?php
	// local
	//	$dsn = 'mysql:host=127.0.0.1;dbname=gymnastics';
	// venue
	$dsn = 'mysql:host=192.168.130.13;dbname=gymnastics';

	$limit = 8;

	try {
		$db = new PDO($dsn, 'usagym', 'usagym');
	} catch (Exception $e) {
		exit();
	}
	$sql = "SELECT * FROM leaderboard WHERE position='1' ORDER BY 'rank' ASC LIMIT " . $limit;
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($results);
?>