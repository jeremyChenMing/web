// JavaScript Document

function getStyle(obj,sName){
			return obj.currentStyle?obj.currentStyle[sName]:getComputedStyle(obj,false)[sName];	
		}
	
function move(obj,json,options){
	var options=options||{};
	options.time=options.time||700;
	options.type=options.type||'linear';
	
	
	var start={};
	var dis={};
	
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));	
		dis[name]=json[name]-start[name];
	}
	
	
	var count=Math.round(options.time/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(
		function(){
			n++;
			
			for(var name in json){
				switch(options.type){
					case 'linear':
						var a=n/count;
						var cur=start[name]+dis[name]*a;
					break;
					case 'ease-in':
						var a=n/count;
						var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
					case 'ease-out':
						var a=1-n/count;
						var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;
				}
				
				if(name=='opacity'){
					obj.style[name]=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';		
				}else{
				
					obj.style[name]=cur+'px';	
				}
			}
			
			if(n==count){
				clearInterval(obj.timer);
				options.fn&&options.fn();
			}
		},30
	);
	
};	