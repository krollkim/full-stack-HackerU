<?
    require "./sqlConnect.php";

    mysqli_set_charset($link, "utf8");

    $result = mysqli_query($link, "SELECT * FROM `clients`");

    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>clients</title>
</head>
<body>
    <table class="table tale-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            
        <? foreach($arr as $i => $item) {?>
            <tr>
                <td><?=$i + 1?></td>
                <td><?= $item['firstName']?></td>
                <td><?= $item['lastName']?></td>
                <td><?= $item['phone']?></td>
                <td><?= $item['email']?></td>
                <td><?= $item['city']?></td>
            </tr>
        <? } ?>

        </tbody>
    </table>
    
</body>
</html>