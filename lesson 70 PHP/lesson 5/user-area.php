<!DOCTYPE html>
<html>

<head>
    <?include 'template/meta.php'?>
    <title>my site</title>
</head>

<?
require 'services/sqlConnect.php';

if(!isset($_SESSION['user'])){
header("Location: login.php");
die();
}

if(isset($_POST['fullName'], $_POST['email'])){
    $db->update("users", [
        "fullName" => $_POST['fullName'],
        "email" => $_POST['email'],
    ],
        [
            "id" => $_SESSION['user']['id'],
        ]);

        $_SESSION['user']['fullName'] = $_POST['fullName'];
        $_SESSION['user']['email'] = $_POST['email'];
}   
elseif (isset($_POST['password'])) {
    $db->update("users", [
        "password" => md5($_POST['password']),
    ], [
        "id" => $_SESSION['user']['id'],
    ]);
}
?>
<body>
    
    <?include 'template/header.php'?>
    <?include 'template/navbar.php'?>
  
<div class="container">
<form class="formContainer" method="POST" action="./user-area.php">
<div class="card bg-dark">
<h1>personal details</h1>
<div class="card-body">
<div class="mb-3">
    <label class="form-label">full name</label>
    <input type="text" class="form-control" name="fullName" value="<?= $_SESSION['user']['fullName'] ?>" required>
</div>
<div class="mb-3">
    <label class="form-label">email</label>
    <input type="email" class="form-control" name="email" value="<?= $_SESSION['user']['email'] ?>" required>
</div>
</div>

<button class="btn bg-primary" type="submit">save <i class="fa fa-save"></i></button>
</div>
</form>

<form class="formContainer" method="POST" action="./user-area.php">
<div class="card bg-dark">
<h1>change password</h1>
<div class="card-body">
    <div class="mb-3">
        <label class="form-label">password</label>
        <input type="text" class="form-control" name="password" required>
    </div>
</div>

<button class="btn bg-primary" type="submit">change <i class="fa fa-check"></i></button>
</div>
</form>
</div>
<?include 'template/footer.php'?>

</body>



</html>