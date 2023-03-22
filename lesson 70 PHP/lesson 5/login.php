<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>my website - login</title>
</head>
<?
    require 'services/sqlConnect.php';

    $errorMassage = "";

    if (isset($_POST['email'], $_POST['password'])) {
        $user = $db->get("users", [
            "id [Int]",
            "fullName",
            "email",
            "isAdmin [Bool]",
        ], [
            "AND" => [
                "email" => $_POST['email'],
                "password" => md5($_POST['password']),
            ],
        ]);

        if (empty($user)) {
            $errorMassage = "שם משתמש או סיסמה לא נכונים";
        } else {
            $_SESSION['user'] = $user;

            header("Location: home.php");
        }
    }
?>
<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
<form class="container" method="POST" action="./login.php">
<div class="card bg-dark">
    <h1>login</h1>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label">email</label>
            <input type="email" class="form-control" name="email">
        </div>
        <div class="mb-3">
            <label class="form-label">password</label>
            <input type="password" class="form-control" name="password">
        </div>
    </div>

    <button class="btn bg-primary" type="submit">login</button>
</div>
</form>

    <? include 'template/footer.php'; ?>
</body>

</html>