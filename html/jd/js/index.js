window.onload=function(){
	var dizhi = document.getElementById('box');
	var p1 = document.getElementById('place');
	var oDiv = document.getElementById('address');
	oDiv.onmouseover=function(){
		p1.className='place';
		dizhi.style.display='block';
		}
	oDiv.onmouseout=function(){
		p1.className='bg_jiao';
		dizhi.style.display='none';
		}
	//登录栏项目js效果；	
	var oLogin = document.getElementById('login');
	var oLi = oLogin.getElementsByTagName('li');
	for(var i=0;i<oLi.length;i++){
		oLi[i].onmouseover=function(){
			this.className='list';
			}
		oLi[i].onmouseout=function(){
			this.className='';
			}
		}
	//购物车js效果；
	var  buy = document.getElementById('buycar');
	var  a = buy.getElementsByTagName('a')[0];
	var  p = buy.getElementsByTagName('p')[0];
	buy.onmouseover=function(){
		a.className='action';
		p.style.display='block';
		}
	buy.onmouseout=function(){
		a.className='';
		p.style.display='none';
		}
	//侧边选项框的js效果；
	var lu2 = document.getElementById('menu');
	var li2 = lu2.getElementsByTagName('li');
	var div2 = lu2.getElementsByTagName('div');
	for(var i=0;i<li2.length;i++){
		li2[i].index=i;
		li2[i].onmouseover=function(){
			this.className='show_list';
			div2[this.index].style.display='block';
			}
		li2[i].onmouseout=function(){	
			this.className='';
			div2[this.index].style.display='none';
			}
		}
	//广告转换的js效果；
	(function(){
		var banner = document.getElementById('banner');
		var oUl = banner.getElementsByTagName('ul')[0];
		var aLi = oUl.children;
		oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';
		var L = aLi[1].offsetWidth;
		var n=0;
		var change_span = banner.getElementsByTagName('span');
		for(var i=0;i<change_span.length;i++)
		{
			(function(index){
				change_span[i].onmouseover=function(){
					for(j=0;j<change_span.length;j++){
						change_span[j].className='';
					}
					this.className='btn_pos';
					n=index;
					move(oUl,'left',-index*L)
				}
			})(i);
		}
		var timer = null;
		banner.onmouseover = function(){
			clearInterval(timer);	
		};
		banner.onmouseout = function(){
			timer = setInterval(next,2000);
		};
		clearInterval(timer);	
		timer = setInterval(next,2000);
		
		function next()
		{
			n++;
			n==aLi.length && (n=0);
			move(oUl,'left',-n*L);
			for(j=0;j<change_span.length;j++){
				change_span[j].className='';
			}
			change_span[n].className='btn_pos';
			
			
		}
		function move(obj,name,target)
		{
			
			var count=Math.floor(500/30);
			var n=0;
			var start=parseInt(getStyle(obj,name));
			var dis = target-start;
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				n++;
				var cur = start+dis*n/count;
				obj.style[name]=cur+'px';
				if(n== count)
				{
					clearInterval(obj.timer);
				}	
				
			},30);
		}
		function getStyle(obj,name)
		{
			return (obj.currentStyle || getComputedStyle(obj,false))[name];
		}
	})();
	var ul3 = document.getElementById('title');
	var li3 = ul3.getElementsByTagName('li');
	for(var i=0;i<li3.length;i++){
		li3[i].onmouseover=function(){
			for(var i=0;i<li3.length;i++){
				li3[i].className='';
				}
			this.className='show_bor';
			}
		}
	
	}