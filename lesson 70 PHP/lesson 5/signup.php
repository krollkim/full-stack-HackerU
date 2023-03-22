<!DOCTYPE html>
<html dir="rtl">

<head>
<? include 'template/meta.php'; ?>
<title>האתר שלי - הרשמה</title>
</head>

<?
require 'services/sqlConnect.php';

if (isset($_POST['fullName'], $_POST['email'], $_POST['password'])) {
// הוספת יוזר חדש
$db->insert("users", [
"fullName" => $_POST['fullName'],
"email" => $_POST['email'],
"password" => md5($_POST['password']),
]);

// המזהה של היוזר החדש שנוסף
$insertId = $db->id();

// מקבלים את האובייקט החדש
$user = $db->get("users", [
"id [Int]",
"fullName",
"email",
], [
"id" => $insertId,
]);

// כבר בהרשמה אנחנו מחברים את היוזר
$_SESSION['user'] = $user;

// מעבירים את המשתמש לדף הבית
header("Location: home.php");
}
?>

<body>
<? include 'template/header.php'; ?>
<? include 'template/navbar.php'; ?>

<form class="container" method="POST" action="./signup.php">
<div class="card bg-dark">
<h1>signup</h1>
<div class="card-body">
    <div class="mb-3">
        <label class="form-label">full-name</label>
        <input type="text" class="form-control" name="fullname" required>
    </div>
    <div class="mb-3">
        <label class="form-label">email</label>
        <input type="email" class="form-control" name="email" required>
    </div>
    <div class="mb-3">
        <label class="form-label">password</label>
        <input type="password" class="form-control" name="password" required>
    </div>
</div>

<button class="btn bg-primary" type="submit">signup</button>
</div>
</form>

<? include 'template/footer.php'; ?>
</body>

</html>