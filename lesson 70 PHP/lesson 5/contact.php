<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>my website - contact info</title>
</head>

<?
require 'services/sqlConnect.php';

if (isset($_POST['fullName'], $_POST['email'], $_POST['body']) && !isset($_SESSION['isSended'])) {
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        echo "you bum thats not your email address";
        die();
    }

    $db->insert("contact", [
        "fullName" => $_POST['fullName'],
        "email" => $_POST['email'],
        "body" => $_POST['body'],
    ]);

    $_SESSION['isSended'] = true;
}
?>
<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
    <?
    if(isset($_SESSION['isSended'])) { ?>
        <div class="container">
            <p>form have been sended successfully</p>
        </div>
   <? } else { ?>
<form class="container" method="POST" action="./contact.php">
<div class="card bg-dark">
<h1>contact</h1>
<div class="card-body">
    <div class="mb-3">
        <label class="form-label">full-name</label>
        <input type="text" class="form-control" name="fullName" required>
    </div>
    <div class="mb-3">
        <label class="form-label">email</label>
        <input type="email" class="form-control" name="email" required>
    </div>
    <div class="mb-3">
        <label class="form-label">content</label>
        <textarea name="body" class="form-control" cols="30" rows="10"></textarea>
    </div>
</div>

<button class="btn bg-primary" type="submit">submit</button>
</div>
</form>
  <? } ?>

    <? include 'template/footer.php'; ?>
</body>

</html>