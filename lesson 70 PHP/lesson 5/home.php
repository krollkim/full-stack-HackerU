<!DOCTYPE html>
<html>

<head>
    <?include 'template/meta.php'?>
    <title>my site</title>
</head>

<?
    require 'services/sqlConnect.php';

    $articles = $db->select("articles", [
        "id [Int]",
        "addedTime",
        "publishedTime",
        "title",
        "description",
        "content",
    ], [
        "isDeleted" => false,
        "ORDER" => ["publishedTime" => "DESC"],
        "LIMIT" => 8,
    ]);
?>
<body>
    
    <?include 'template/header.php'?>
    <?include 'template/navbar.php'?>
  
<div class="container">
<main>
<? foreach ($articles as $a) { ?>
<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
<div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
<div class="col">
<div class="card h-100 shadow-sm  bg-dark">
    <div class="card-body">
        <h5 class="card-title"><?= $a['title'] ?></h5>
        <p class="card-p"><?= $a['description'] ?></p>
        <div class="text-center my-4"> <a href="#" class="btn btn-warning bg-primary">watch article</a> </div>
    </div>
</div>
</div>
</div>
</div>
<? } ?>
</main>
</div>
<?include 'template/footer.php'?>

</body>



</html>