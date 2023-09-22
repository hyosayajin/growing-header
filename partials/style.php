<?php

if (isset($css)) 

    echo <<<HTML

        <link rel="stylesheet" href = "{$css}" >
    
HTML;

?>

<style>

    :root {
        background: center / cover no-repeat url(/assets/img/background.jpg);
    }

</style>
