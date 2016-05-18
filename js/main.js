window.onload=function(){


/*javascript 拖拽效果*/
	var oBoxmy=document.getElementById('myBox');
	var oUlmy=oBoxmy.children[0];
	var aLi=oUlmy.children;
	var aImg=oUlmy.getElementsByTagName('img');

	//大块的中心点位置 - X
	var boxC=oBoxmy.offsetWidth/2;
	//alert(boxC) 400px;
	var n=1;
	oUlmy.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-oUlmy.offsetLeft;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			if(l>boxC-0.5*aLi[0].offsetWidth){
				l=boxC-0.5*aLi[0].offsetWidth;	
			}
			if(l<boxC-(aLi.length-0.5)*aLi[0].offsetWidth){
				l=boxC-(aLi.length-0.5)*aLi[0].offsetWidth;
					
			}
			oUlmy.style.left=l+'px';
			setSize();
		};
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;	
		};
		
		return false;
	};	
	//设置ul的初始位置
	oUlmy.style.left=boxC-(n+0.5)*aLi[0].offsetWidth+'px';
	setSize();
	function setSize(){
		for(var i=0;i<aLi.length;i++){
			var l=aLi[i].offsetLeft+oUlmy.offsetLeft+aLi[i].offsetWidth/2;
			var x=Math.abs(boxC-l);
			//离得越近 - x越小		
			var scale=1-x/500;
			scale<0.5&&(scale=0.5);
			aImg[i].style.width=scale*520+'px';
			aImg[i].style.height=scale*358+'px';
			aImg[i].style.marginTop=-(aImg[i].offsetHeight-179)/2+'px';
			aImg[i].style.marginLeft=-(aImg[i].offsetWidth-260)/2+'px';
			
			aLi[i].style.zIndex=scale*1000;
		}	
	}

/*照片自动切换*/		
var oPhoto=document.getElementById('photo');
var oUlP=oPhoto.children[0];
var aLiP=oPhoto.getElementsByTagName('li');
var num=1;

function tab(n){
	for(var i=0; i<aLiP.length;i++){
		aLiP[i].style.opacity=0;
		//aLi[i].className='';
	}
	//aLi[n].style.opacity=1;	
	//aLi[n].className='show';
	move(aLiP[n],{opacity:1})
}

setInterval(function(){
	tab(num%3);
	num++;
},5000)

/*HTML5*/
var oUlBtnh5=document.getElementById('h5Btn');
var aLiBtn=oUlBtnh5.getElementsByTagName('li');
var oUlh5=document.getElementById('demoBox');

//alert(aLiBtn.length);
//alert(aLih5.length);
for(var c=0;c<2;c++){
	for(var r=0;r<4;r++){
		aLih5=document.createElement('li');
	
		aLih5.style.transition='all 1s ease';
		aLih5.style.transform='translate('+172*r+'px,'+195*c+'px) scale(1,1)';

		oUlh5.appendChild(aLih5);
	}
}
var aLih5=oUlh5.getElementsByTagName('li');
var name=['围绕效果','C3时钟','爆炸效果','反转效果','蒙版小效果','Y轴反转翻页','移动端静态页面','3D翻页'];
var href=[
	'../html/myself/roll.html',
	'../html/myself/clock.html',
	'../html/myself/Explosion.html',
	'../html/myself/reverse.html',
	'../html/myself/men.html',
	'../html/myself/PicYre.html',
	'../html/myself/mobile/mobile-phone.html',
	'../html/myself/3Drev.html'
]
for(var i=0;i<aLih5.length;i++){
	aLih5[i].innerHTML='<a href="'+href[i]+'" target="_blank" title="点我显示" >'+name[i]+'</a>';
}

for(var i=0;i<aLih5.length;i++){
	aLih5[i].style.position='absolute';
	aLih5[i].style.left=0;
	aLih5[i].style.top=0;
	aLih5[i].style.opacity=1;
	
}
var arr1X=[0,2,4,6,7]; //1 3 5 显示
var arr1Y=[1,3,5];
var arr2X=[0,1,4,6]; //2 3 5 7 显示
var arr2Y=[2,3,5,7];
var arr3X=[0,1,2,4,6];//3 5 7 显示
var arr3Y=[3,5,7];


aLiBtn[1].onclick=function(){
	for(var i=0;i<arr1X.length;i++){
		aLih5[arr1X[i]].style.opacity=0;
		//aLih5[arr1X[i]].style.transform='translate(0,0)';/*剩下的走为0*/
	}
	aLih5[1].style.transform='translate(0,0)';
	aLih5[3].style.transform='translate(172px,0)';
	aLih5[5].style.transform='translate(344px,0)';
	for(var i=0;i<arr1Y.length;i++){
		aLih5[arr1Y[i]].style.opacity=1;
	}
	
}
aLiBtn[0].onclick=function(){
	for(var i=0;i<aLih5.length;i++){
		aLih5[i].style.opacity=1;
	}
	aLih5[0].style.transform='translate(0,0)';
	aLih5[1].style.transform='translate(172px,0)';
	aLih5[2].style.transform='translate(344px,0)';
	aLih5[3].style.transform='translate(516px,0)';
	aLih5[4].style.transform='translate(0,195px)';
	aLih5[5].style.transform='translate(172px,195px)';
	aLih5[6].style.transform='translate(344px,195px)';
	aLih5[7].style.transform='translate(516px,195px)';
}
aLiBtn[2].onclick=function(){
	for(var i=0;i<arr2X.length;i++){
		aLih5[arr2X[i]].style.opacity=0;
		//aLih5[arr2X[i]].style.transform='translate(0,0)';/*走回0*/
	}
	aLih5[2].style.transform='translate(0,0)';
	aLih5[3].style.transform='translate(172px,0)';
	aLih5[5].style.transform='translate(344px,0)';
	aLih5[7].style.transform='translate(516px,0)';
	for(var i=0;i<arr2Y.length;i++){
		aLih5[arr2Y[i]].style.opacity=1;
	}	
}
aLiBtn[3].onclick=function(){
	for(var i=0;i<arr3X.length;i++){
		aLih5[arr3X[i]].style.opacity=0;
		//aLih5[arr3X[i]].style.transform='translate(0,0)';/*走回0*/
	}
	aLih5[3].style.transform='translate(0,0)';
	aLih5[5].style.transform='translate(172px,0)';
	aLih5[7].style.transform='translate(344px,0)';
	for(var i=0;i<arr3Y.length;i++){
		aLih5[arr3Y[i]].style.opacity=1;
	}
}


/*返回顶部*/
var oBtn=document.getElementById('btn');
var oSys=false;
var timerbtn=null;
document.onscroll=function(){
	if(oSys){
		clearInterval(timerbtn);
	}
	oSys=true;
	var sT=document.body.scrollTop||document.documentElement.scrollTop;
	if(sT>0){
		oBtn.style.display='block';
	}else{
		oBtn.style.display='none';
	}

};
oBtn.onclick=function(){
	var start=document.body.scrollTop||document.documentELement.scrollTop;
	var dis=0-start;
	var time=2000;
	var count=Math.floor(time/30);
	var n=0;
	clearInterval(timerbtn);
	timerbtn=setInterval(function(){
		oSys=false;
		n++;
		var a=1-n/count
		var cur=start+dis*(1-a*a);
		document.body.scrollTop=document.documentElement.scrollTop=cur;
		console.log(cur)
		if(n==count){
			clearInterval(timerbtn);
		}
	},30)
};

















	
};