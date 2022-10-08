<?php
$host = "localhost";
$userName = "root";
$password = "";
$dbName = "full-stack";

$link = mysqli_connect($host, $userName, $password, $dbName);
mysqli_set_charset($link, "utf8");


function getProducts(){
global $link;

$result = mysqli_query($link, "SELECT * FROM `products`");

$arr = [];
    while($obj = mysqli_fetch_assoc($result)){
        $obj["date"] = date('d/m/y', strtotime($obj['date']));
        $arr[] = $obj;
    }
    echo json_encode($arr);
}

function removeProducts(){
    global $link;

    mysqli_query($link, "DELETE FROM `products` WHERE `id` = " . $_POST[`id`]);
}

$action = '';
if(isset($_POST['action'])){
    $action = $_POST['action'];
}
if($action == 'delete'){
    removeProducts();
}else{
    getProducts();
}
?>