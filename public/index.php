<?php
    if (defined("DIR")) {

        require constant("DIR") . "vendor/autoload.php";

        define("__DIR", dirname(__FILE__) . DIRECTORY_SEPARATOR );
        
    } else {
        
        require dirname(__DIR__) . DIRECTORY_SEPARATOR . "vendor/autoload.php";
        
        define("__DIR", dirname(__DIR__) . DIRECTORY_SEPARATOR );
    }
    

    const 
    __DS = DIRECTORY_SEPARATOR,
    __PARTIALS = __DIR . "partials" . __DS,
    __ROOT = __DIR . "public" . __DS; 
?>

<!DOCTYPE html>

<html lang="fr">

<?php require_once __PARTIALS . "manifest.php"?>

<?php require_once __PARTIALS . "head.php"?>

<body id="body" class="body">

    <div id="app" class="app">

<?php require_once __PARTIALS . "header.php"?>


<?php require_once __PARTIALS . "main.php"?>

        
<?php require_once __PARTIALS . "footer.php"?>

    </div>

<?php require_once __PARTIALS . "javascript.php"?>

</body>

</html>