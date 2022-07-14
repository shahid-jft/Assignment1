function colorChange()
{
    let lbl=document.getElementsByClassName('lbl');
    lbl=Array.from(lbl);   
    let lblcolor=''; 
    if(document.getElementById('red').checked)
    {
       lblcolor='red';
    }
    if(document.getElementById('green').checked)
    {
        lblcolor='green';   
    }
    if(document.getElementById('blue').checked)
    {
        lblcolor='blue';
    }
    lbl.forEach(function(lbl)
       {
            lbl.style.backgroundColor=lblcolor;
       });
}
