<div class="p-5 bg-dark text-white text-center">
    <? if (isset($_SESSION['user'])) { ?>
        <p class="userName"><?= $_SESSION['user']['fullName'] ?>, welcome!</p>
    <? } ?>
<h1>web 4 articles</h1>
<p>manage, add edit and delete articles, resize this responsive page to see the effect!</p>
</div>