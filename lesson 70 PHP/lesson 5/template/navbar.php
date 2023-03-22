<?
$path = explode('/', $_SERVER['SCRIPT_FILENAME']);
$active = array_pop($path);

$menu = [
    [ 'path' => 'home.php', 'icon' => 'home', 'name' => 'home' ],
    [ 'path' => 'about.php', 'icon' => 'info-circle', 'name' => 'about' ],
    [ 'path' => 'contact.php', 'icon' => 'phone', 'name' => 'contact info'],
    [ 'path' => 'articles-managment.php', 'icon' => 'cog', 'name' => 'articles managment', 'loggedOnly' => true],
    [ 'path' => 'contact-managment.php', 'icon' => 'server', 'name' => 'Management inquiries', 'adminOnly' => true ],
];
?>

<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
<div class="container-fluid">
<ul class="navbar-nav">
<? 
foreach ($menu as $m) { 
    if(isset($m['loggedOnly'])){
        if($m['loggedOnly'] && !isset($_SESSION['user'])){
            continue;
        }
    }

    if (isset($m['adminOnly'])) {
        if ($m['adminOnly']) {
            if (isset($_SESSION['user'])) {
                if (!$_SESSION['user']['isAdmin']) {
                    continue;
                }
            } else {
                continue;
            }
        }
    }
?>
<li class="nav-item">
    <a class="nav-link <?= $active == $m['path'] ? 'active' : '' ?>" href="<?= $m['path'] ?>"><i class="fa fa-<?= $m['icon'] ?>"></i> <?= $m['name'] ?></a>
</li>
    <? } ?>
</ul>

<? if (!isset($_SESSION['user'])) { ?>
    <ul class="navbar-nav navbar-right">
        <li class="nav-item">
            <a class="nav-link <?= $active == 'login.php' ? 'active' : '' ?>" href="login.php"><i class="fa fa-sign-in"></i> login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link <?= $active == 'signup.php' ? 'active' : '' ?>" href="signup.php"><i class="fa fa-edit"></i> sign in</a>
        </li>
    </ul>
<? } else { ?>
    <ul class="navbar-nav navbar-right">
        <li class="nav-item">
            <a class="nav-link <?= $active == 'user-area.php' ? 'active' : '' ?>" href="user-area.php"><i class="fa fa-user"></i> personal-area</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="logout.php"><i class="fa fa-sign-out"></i> logout</a>
        </li>
    </ul>
<? } ?>
</div>
</nav>