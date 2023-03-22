<div class="p-5 bg-dark text-white text-center">
    <? if (isset($_SESSION['user'])) { ?>
        <p class="userName"><?= $_SESSION['user']['fullName'] ?>, welcome!</p>
    <? } ?>
<h1>landing page</h1>
<p>see my projects, And resize this responsive page to see the effect!</p>
</div>