<?
    require 'services/sqlConnect.php';


    if (!isset($_GET['id'])) {
        header("HTTP/1.0 404 Not Found");
        die();
    }

    if (isset($_POST['publishedTime'], $_POST['title'], $_POST['description'])) {
        $db->update("articles", [
            "publishedTime" => $_POST['publishedTime'],
            "title" => $_POST['title'],
            "description" => $_POST['description'],
        ], [
            "id" => $_GET['id'],
        ]);
    }

    $article = null;

    if (isset($_GET['id'])) {
    $article = $db->get("articles", [
        "id [Int]",
        "addedTime",
        "publishedTime",
        "title",
        "description",
        "content",
    ], [
        "id" => $_GET['id']
    ]);
}
   
if(empty($article)){
    header("HTTP/1.0 404 Not Found");
    die();
}

?>

<!DOCTYPE html>
<html>

<head>

    <? include 'template/meta.php'; ?>
    <title>my website - articles-edit</title>
</head>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
  <form class="container" method="POST" action="./articles-edit.php?id=<?= $article['id'] ?>">
        <div class="card bg-dark">
            <h1>edit article [<?= $article['id'] ?>]</h1>
            <p style="text-align: center;"> created time: <?= $article['addedTime'] ?></p>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">publishedTime</label>
                    <input type="date" class="form-control" name="publishedTime" value="<?= date("Y-m-d", strtotime($article['publishedTime'])) ?>" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">title</label>
                    <input type="text" class="form-control" name="title" value="<?= $article['title'] ?>" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">description</label>
                    <textarea name="description" class="form-control" cols="30" rows="10"><?= $article['description'] ?></textarea>
                </div>
            </div>

            <button class="btn bg-primary" type="submit">save <i class="fa fa-save"></i></button>
        </div>
    </form>
    <? include 'template/footer.php'; ?>
</body>

</html>