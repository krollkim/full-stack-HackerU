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
<main style="padding: 16px; min-height: 55vh;">
        <div class="row">
            <? foreach ($articles as $a) { ?>
                <div class="col-sm-4">
                    <div class="card bg-dark">
                        <div class="card-body">
                            <h4 class="card-title"><?= $a['title'] ?></h4>
                            <p class="card-text"><?= $a['description'] ?></p>
                            <a href="#" class="btn btn-primary">show article</a>
                        </div>
                    </div>
                </div>
            <? } ?>
        </div>
    </main>
</div>
<?include 'template/footer.php'?>

</body>



</html>