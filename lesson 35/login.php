<?
    $userName = trim($_POST['userName']);
    $password = trim($_POST['password']);
    

    if($userName == 'kim kroll' && $password == 123){
        $massege = "התחברת בהצלחה";
        $isLogin = true;
    }else{
        $massege = "name or password are wrong";
        $isLogin = false;
    }
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form-PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form class="<?= $isLogin ? 'sucsses' : 'error'?>">
        <h1 class="h1_php"><?= $massege ?></h1>
    </form>
</body>

</html>
