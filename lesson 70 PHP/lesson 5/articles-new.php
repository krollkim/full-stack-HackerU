<?
    require 'services/sqlConnect.php';

    if (isset($_POST['publishedTime'], $_POST['title'], $_POST['description'])) {
        $db->insert("articles", [
            "publishedTime" => $_POST['publishedTime'],
            "title" => $_POST['title'],
            "description" => $_POST['description'],
        ]);

        header("Location: articles-manage.php");
    }
?>

<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>my website - create article</title>
</head>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
    <form class="container" method="POST" action="./articles-new.php">
        <div class="card bg-dark">
            <h1>create article </h1>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">published time </label>
                    <input type="date" class="form-control" name="publishedTime" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">title</label>
                    <input type="text" class="form-control" name="title" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">description</label>
                    <textarea name="description" class="form-control" cols="30" rows="10"></textarea>
                </div>
            </div>

            <button class="btn bg-primary" type="submit">add <i class="fa fa-save"></i></button>
        </div>
    </form>

    <? include 'template/footer.php'; ?>
</body>

</html>