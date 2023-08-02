<?php
	// local
	// $dsn = 'mysql:host=127.0.0.1;dbname=gymnastics';
	// venue
	$dsn = 'mysql:host=192.168.130.13;dbname=gymnastics';
	$eventCode = isset($_GET['m']) ? $_GET['m'] : "usa21";
	$session = isset($_GET['ses']) ? $_GET['ses'] : '1';
	$level = isset($_GET['l']) ? $_GET['l'] : "SR";
	$event = isset($_GET['a']) ? $_GET['a'] : "AA";
	$program = isset($_GET['p']) ? $_GET['p'] : "W";
	$gender = isset($_GET['g']) ? $_GET['g'] : "F";
	$startsWith = isset($_GET['s']) ? $_GET['s'] : "0";
	$length = 20; // sanity
	try {
		$db = new PDO($dsn, 'usagym', 'usagym');
	} catch (Exception $e) {
		exit();
	}
	if($event == "team") {
		$sql = "SELECT rank, gym AS name, total FROM teamscores WHERE meetId='" . $eventCode . "' AND rank IS NOT NULL ORDER BY sort ASC LIMIT " . $startsWith . ", " . $length . ";";
	} else {
		$sql = "SELECT '' as rank, '' as club, '' as country, '' as compNum, '' as name, '' as total, 9999 as sort
			UNION ALL
			SELECT rank, club, country, scores.compNum, CONCAT(firstName, ' ', lastName) as name, TRUNCATE(total, 3) as total, sort
			FROM scores
			LEFT JOIN athletes ON scores.compNum = athletes.compNum AND scores.meetId = athletes.meetId
			WHERE scores.meetId='" . $eventCode . "'
				AND (scores.rank IS NOT NULL AND scores.rank != '')
				AND scores.level='" . $level . "'
				AND scores.event='" . $event . "'
				AND scores.session='" . $session . "'
				AND scores.program='" . $program . "'
			ORDER BY sort LIMIT " . $startsWith . ", " . $length . ";";
	}
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($results);
?>