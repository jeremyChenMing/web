window.onload=function(){     

/*弧度转角度*/
function a2d(n){
	return n*180/Math.PI;
}
function getPos(obj){
	var l=0;
	var t=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {l:l,t:t}
}
function hoverDir(obj,ev){
	var X=ev.clientX;
	var Y=ev.clientY;
	//var cX=obj.offsetLeft+obj.offsetWidth/2;
	var cX=getPos(obj).l+obj.offsetWidth/2;
	var cY=getPos(obj).t+obj.offsetHeight/2;
	//var cY=obj.offsetTop+obj.offsetHeight/2;	
	var a=cY-Y;
	var b=cX-X;
	var A=Math.atan2(a,b);
	var angle=a2d(A)+180;
	var num=Math.round(angle/90)%4;
	return (Math.round((Math.atan2(a,b)*180/Math.PI+180)/90))%4;
}
/*鼠标跟随运动*/
var oJsDemo=document.getElementById('jsDemo');
var aLi=oJsDemo.children;
var aSpan=oJsDemo.getElementsByTagName('span')
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(ev){
		var oEv=ev||event
		var from=oEv.fromElement||oEv.relatedTarget;
		if(this.contains(from))return;
		var n=hoverDir(this,oEv);
		switch(n){
			case 0:
				aSpan[this.index].style.left=180+'px';
				aSpan[this.index].style.top=0+'px';
			break;
			case 1:
				aSpan[this.index].style.left=0+'px';
				aSpan[this.index].style.top=150+'px';
			break;
			case 2:
				aSpan[this.index].style.left=-180+'px';
				aSpan[this.index].style.top=0+'px';
			break;
			case 3:
				aSpan[this.index].style.left=0+'px';
				aSpan[this.index].style.top=-150+'px';
			break;
		}
		move(aSpan[this.index],{top:0,left:0},{duration:500})
	};

	aLi[i].onmouseout=function(ev){
		var oEv=ev||event
		var to=oEv.toElement||oEv.relatedTarget;
		if(this.contains(to))return;
		var n=hoverDir(this,oEv);
		switch(n){
			case 0:
				move(aSpan[this.index],{top:0,left:180},{duration:500})
			break;
			case 1:
				move(aSpan[this.index],{top:150,left:0},{duration:500})
			break;
			case 2:
				move(aSpan[this.index],{top:0,left:-180},{duration:500})
			break;
			case 3:
				move(aSpan[this.index],{top:-150,left:0},{duration:500})
			break;
		}
	};
}
}