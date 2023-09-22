<?php
    $li_list = [
        "hyoarts" => "https://hyoarts.fr",
        "creations" => "https://hyosekai.com",
    ];
?>
<header id="header" class="header">

    <nav id="headerNavigation" class="header-navigation">

        <ul id="headerNavigationList">
            <?php foreach ($li_list as $key => $value) : ?>

                <li <?= "id=\"{$key}\" class=\"{$key}\"" ?> >

                    <a <?= "href={$value}" ?> target="_blank"> <?= $key ?> </a>

                </li>

            <?php endforeach ?>

        </ul>

    </nav>

</header>