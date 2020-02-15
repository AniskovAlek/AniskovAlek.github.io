<?php

if (file_exists('file.xml')) {
    /*$xml = simplexml_load_file('file.xml');
    $str = new SimpleXMLElement($xml);
    echo $str;*/
    $myfile = fopen("file.xml", "r");
$str = '';
while(!feof($myfile)) {
  $str.=fgets($myfile, 4896);
}
echo $str;
}

?>
