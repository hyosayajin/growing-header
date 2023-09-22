<?php
    $li_list = [
        "home",
        "first",
        "second",
        "third",
        "forth",
        "fifth",
        "contact"

    ];
?>
<header id="growingHeader" class="header growing-header">

    <button id="headerTriggerButton" class="header-trigger-btn"> h </button>

    <nav id="headerNavigation" class="header-navigation">

        <ul id="headerNavigationList">
            <?php foreach ($li_list as $key => $value) : ?>

                <li <?= "id=\"{$value}\" class=\"{$value}\"" ?> >

                    <a href="#"> <?= $value ?> </a>

                </li>

            <?php endforeach ?>

        </ul>

    </nav>

</header>