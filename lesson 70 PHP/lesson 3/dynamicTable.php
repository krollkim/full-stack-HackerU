<?
    require "./sqlConnect.php";

    $tableName ="clients";

    if(isset($_GET['table'])){
        $tableName = $_GET['table'];
    }

    mysqli_set_charset($link, "utf8");

    $result = mysqli_query($link, "SELECT * FROM `$tableName`");

    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $tablesRes = mysqli_query($link, "SELECT table_name FROM information_schema.tables WHERE table_schema = '$dbName'");
    $tables = mysqli_fetch_all($tablesRes, MYSQLI_ASSOC);

    $tables = array_column($tables, 'table_name');
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
    <form action="./dynamicTable.php" method="GET">
        <select name="table" class="form-control" style="max-width: 200px;" onchange="this.form.submit()">
            <?foreach($tables as $t){?>
                <option  <?= $t == $tableName? 'selected': '';?>><?=$t?></option>
            <?}?>
        </select>
        <h1><?=$tableName?></h1>
    </form>

    <table class="table tale-striped">
        <thead>
            <tr>
             <?foreach($arr[0] as $k => $v){ ?>
                <th><?=$k?></th>
             <?}?> 
            </tr>
        </thead>
        <tbody>
            <? foreach($arr as $item){?>
                <tr>
                <?foreach($item as $val){ ?>
                <td><?=$val?></td>
                <?}?> 
                </tr>
            <?}?>    
        </tbody>
    </table>
    
</body>
</html>