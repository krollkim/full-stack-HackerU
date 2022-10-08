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

  function removeProduct(){
    global $link;

    $id = mysqli_real_escape_string($link,$_POST['id']);

    mysqli_query($link, "DELETE FROM `products` WHERE `id` = $id");
  }


  function addProduct(){
    global $link;

    $name = mysqli_real_escape_string($link,$_POST['name']);
    $price = mysqli_real_escape_string($link,$_POST['price']);
    
    mysqli_query($link, "INSERT INTO `products`(`name`, `price`, `date`) VALUES ('$name',$price ,CURRENT_DATE())");

   $id = mysqli_insert_id($link);

   $result = mysqli_query($link, "SELECT * FROM `products` WHERE `id` = $id");

   echo json_encode( mysqli_fetch_assoc($result));
  }

  $action= '';

  if(isset($_POST['action'])){
    $action= $_POST['action'];
  }

  if($action == 'delete'){
    removeProduct();
  }else if($action == 'add'){
    addProduct();
  }else{
    getProducts();
  }


  
?>