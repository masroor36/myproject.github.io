function myfunction(){
    var input, filter, ul, li, a, i;
    input=document.getElementById("mySearch");
    filter = input.ariaValueMax.toUpperCase();
    ul = document.getElementById("myMenue");
    li = ul.getElementsByTagName("li");
    for(i=0; i<li.length; i++){
        a=li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)>-1)
        {
            li[i].style.display="";            
        }
        else
        {
            li[i].style.display="none";
        }
    }
}