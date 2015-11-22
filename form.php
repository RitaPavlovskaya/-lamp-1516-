<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Form of registration</title>
    </head>
    <body>
        <?php
            $csvFile='CSV.csv';
            $csvData="{$_POST[userName]};{$_POST[email]};{$_POST[password]};{$_POST[aboutUser]};{$_POST[sex]}\r\n";
            file_put_contents($csvFile, $csvData, FILE_APPEND);
            echo "Hello, ".$_POST[userName],"!";
        ?>
    </body>
</html>