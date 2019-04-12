<a href="guide">Guia, lista de arquivos</a>
<br><Br>
<?php
$path="guide/";
$dir = dir($path);

while(($arq = $dir->read() ) !== false){
    echo (
            $arq!='..' && $arq!='.' 
            ?'<div><a href="'.$path.$arq.'">'.$arq.'</a></div>'
            :''
    );
}

$dir->close();
