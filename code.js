let but=document.querySelector(".header .links .bx-menu");
let appear=document.querySelector(".hidden");
let ret=document.querySelector(".hidden .logo .bx-x");
document.querySelector(".details").style.display="none";
but.addEventListener("click",function()
{
    appear.style.display="block";
    layout.style.display="block";
})
ret.addEventListener("click",function()
{
    appear.style.display="none";
    layout.style.display="none";
})

window.onscroll=function()
{
    if(window.scrollY >= 100)
    {
       document.querySelector(".details").style.display="block";
    }
    else
    {
        document.querySelector(".details").style.display="none";
    }
}