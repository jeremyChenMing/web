window.onload=function(){var e=document.getElementById("box"),t=document.getElementById("place"),n=document.getElementById("address");n.onmouseover=function(){t.className="place",e.style.display="block"},n.onmouseout=function(){t.className="bg_jiao",e.style.display="none"};for(var o=document.getElementById("login"),l=o.getElementsByTagName("li"),s=0;s<l.length;s++)l[s].onmouseover=function(){this.className="list"},l[s].onmouseout=function(){this.className=""};var a=document.getElementById("buycar"),m=a.getElementsByTagName("a")[0],c=a.getElementsByTagName("p")[0];a.onmouseover=function(){m.className="action",c.style.display="block"},a.onmouseout=function(){m.className="",c.style.display="none"};for(var i=document.getElementById("menu"),u=i.getElementsByTagName("li"),r=i.getElementsByTagName("div"),s=0;s<u.length;s++)u[s].index=s,u[s].onmouseover=function(){this.className="show_list",r[this.index].style.display="block"},u[s].onmouseout=function(){this.className="",r[this.index].style.display="none"};!function(){function e(){for(m++,m==s.length&&(m=0),t(l,"left",-m*a),j=0;j<c.length;j++)c[j].className="";c[m].className="btn_pos"}function t(e,t,o){var l=Math.floor(500/30),s=0,a=parseInt(n(e,t)),m=o-a;clearInterval(e.timer),e.timer=setInterval(function(){s++;var n=a+m*s/l;e.style[t]=n+"px",s==l&&clearInterval(e.timer)},30)}function n(e,t){return(e.currentStyle||getComputedStyle(e,!1))[t]}var o=document.getElementById("banner"),l=o.getElementsByTagName("ul")[0],s=l.children;l.style.width=s[0].offsetWidth*s.length+"px";for(var a=s[1].offsetWidth,m=0,c=o.getElementsByTagName("span"),i=0;i<c.length;i++)!function(e){c[i].onmouseover=function(){for(j=0;j<c.length;j++)c[j].className="";this.className="btn_pos",m=e,t(l,"left",-e*a)}}(i);var u=null;o.onmouseover=function(){clearInterval(u)},o.onmouseout=function(){u=setInterval(e,2e3)},clearInterval(u),u=setInterval(e,2e3)}();for(var g=document.getElementById("title"),d=g.getElementsByTagName("li"),s=0;s<d.length;s++)d[s].onmouseover=function(){for(var e=0;e<d.length;e++)d[e].className="";this.className="show_bor"}};