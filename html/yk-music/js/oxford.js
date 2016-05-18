// JavaScript Document

window.onload =function(){
	var pindao_show = document.getElementById('pindao_show');
	var show_pindao = document.getElementById('show_pindao');
	var download_show = document.getElementById('download_show');
	var show_download= document.getElementById('show_download');
	toShow(pindao_show,show_pindao);
	toShow(download_show,show_download);
	function toShow(a,b){
		a.onmouseover=function(){
		b.style.display='block';
		}
		a.onmouseout=function(){
		b.style.display='none';
		}
	}
	var oBtn1 = document.getElementById('show_list1_btn');
	var aBtn1 = oBtn1.getElementsByTagName('a');
	var oShow1 = document.getElementById('show_list1');
	var oDiv1 = oShow1.getElementsByTagName('div');
	addClass(aBtn1,oDiv1,'action1');
	var oBtn2 = document.getElementById('show_list2_btn');
	var aBtn2 = oBtn2.getElementsByTagName('a');
	var oShow2 = document.getElementById('show_list2');
	var oDiv2 = oShow2.getElementsByTagName('ul');
	
	addClass(aBtn2,oDiv2,'active2');
	function addClass(a_btn,show,a){
		for(var i=0;i<a_btn.length;i++){
		a_btn[i].index=i;	
		a_btn[i].onmouseover=function(){
			for(var i=0;i<a_btn.length;i++){
			show[i].style.display='none';
			a_btn[i].className='';
			}
			show[this.index].style.display='block';
			this.className=a;
			}
		}
	}
	var toClose=document.getElementById('guanbi');
	var banner=document.getElementById('banner');
	
	toClose.onclick=function(){
		banner.style.display='none';
	}
	//轮播图
	;(function(){
		var oUl = document.getElementById('content');
		var oParent = oUl.parentNode;
		var aLi = oUl.children;
		var timer = null;
		var oP = document.getElementById('masg');
		oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';	
		var aShowBtn = document.getElementById('show-btn').children;
		var now = 0;
		var arr = ['可爱的乔巴医生','改变自己，从细节做起','帅帅的力宏王','宽广的天空','看看我的小胡子帅不'];
		for(var i=0; i<aShowBtn.length; i++)
		{
			(function(index){
				aShowBtn[i].onmouseover = function(){
					for(var i=0; i<aShowBtn.length; i++)
					{
						aShowBtn[i].className = '';
					}	
					this.className = 'active';
					move(oUl,'left',-index*aLi[0].offsetWidth);
					now=index;
					oP.innerHTML = arr[index];
				};
			})(i);
		}
		
		timer = setInterval(next,2000);
		oParent.onmouseover=function(){
			clearInterval(timer);	
		};
		oParent.onmouseout = function(){
			timer = setInterval(next,2000);
		};
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		oNext.onclick=function(){
			now--;
			(now==-1) && (now=aLi.length-1);
			move(oUl,'left',-now*aLi[0].offsetWidth);
			for(var i=0; i<aShowBtn.length; i++)
			{
				aShowBtn[i].className = '';
			}	
			aShowBtn[now].className = 'active';	
			oP.innerHTML = arr[now];	
		};
		
		oPrev.onclick = next;
		function next()
		{
			now++;
			(now==aLi.length) && (now=0);
			move(oUl,'left',-now*aLi[0].offsetWidth);
			for(var i=0; i<aShowBtn.length; i++)
			{
				aShowBtn[i].className = '';
			}	
			aShowBtn[now].className = 'active';	
			oP.innerHTML = arr[now];
		}
	})();
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
	//搜索下拉菜单
	var oT = document.getElementById('search');
	var oUl=document.getElementById('searchBox');
	var oBtn=document.getElementById('search_btn');
	var iNow=-1;
	var oldValue='';
	oT.onkeyup=function(ev){
		var oEvent=ev || event;
		if(oEvent.keyCode==40 || oEvent.keyCode==38){
			return;	
		}
		if(oEvent.keyCode==13){
			window.open('https://www.baidu.com/s?wd='+oT.value,'_self');
			oT.value='';
		}
		jsonp({
			url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
			data:{
				wd:oT.value	
			},
			success:function(json){
				oUl.innerHTML='';
				
				var arr=json.s;
				
				if(arr.length){
					oUl.style.display='block';
				}else{
					oUl.style.display='none';
				}
				//DOM
				for(var i=0; i<arr.length; i++){
					var oLi=document.createElement('li');
					oLi.innerHTML=arr[i];
					oUl.appendChild(oLi);
					
					(function(index){
						oLi.onmouseover=function(){
							for(var i=0; i<oUl.children.length; i++){
								oUl.children[i].className='';
								
							}
							this.className='on';
							
							oT.value=this.innerHTML;
						};
						oLi.onmouseout=function(){
							for(var i=0; i<oUl.children.length; i++){
								oUl.children[i].className='';
								
							}	
						};
						oLi.onclick=function(){
							window.open('https://www.baidu.com/s?wd='+this.innerHTML,'_self');
							oT.value='';	
						};
					})(i);
				}
			}	
		});
		oldValue=oT.value;	
	};
	
	//点击搜索
	oBtn.onclick=function(){
		window.open('https://www.baidu.com/s?wd='+oT.value,'_self');
		oT.value='';	
	};
	oUl.onmouseleave=function(){
		this.style.display='none';	
	};
}
function json2url(json){
	var arr=[];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}
function jsonp(json){
	json=json || {};
	if(!json.url)return;
	json.data=json.data || {};
	json.cbName=json.cbName || 'cb';
	
	
	var fnName='jsonp'+Math.random();
	fnName=fnName.replace('.','');
	
	window[fnName]=function(data){
		json.success && json.success(data);	
		
		//删除
		oHead.removeChild(oS);
	}
	
	json.data[json.cbName]=fnName;
	
	var oS=document.createElement('script');	
	oS.src=json.url+'?'+json2url(json.data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);	
	
}