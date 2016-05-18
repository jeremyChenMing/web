window.onload=function(){     

/*pagging---分页运动*/
	var oWkList=document.getElementById('wkList');
	var aLiwk=oWkList.children;
	var oPaging=document.getElementById('paging');

//存储位置
	var pos=[];
	for(var i=0;i<aLiwk.length;i++){
		pos[i]={left:aLiwk[i].offsetLeft,top:aLiwk[i].offsetTop};
	}
//写入位置
	for(var j=0;j<aLiwk.length;j++){
		aLiwk[j].style.left=pos[j].left+'px';
		aLiwk[j].style.top=pos[j].top+'px';
		aLiwk[j].style.position='absolute';
		aLiwk[j].style.margin=0;
	}
	oPaging.onclick=function(){
		var n=aLiwk.length-1;
		var timerwk=setInterval(function(){
			(function(index){
				move(aLiwk[n],{
					left:oPaging.offsetLeft,
					top:oPaging.offsetTop,
					width:0,
					height:0
				},{	
					complete:function(){
						if(index==0){
							//alert('完成');
							var n=0
							var timerwk=setInterval(function(){
								move(aLiwk[n],{
									top:pos[n].top,
									left:pos[n].left,
									width:180,
									height:180,
								});
								n++;
								if(n==aLiwk.length){
									//alert('完成')
									clearInterval(timerwk);
								}
							},100);
						}
					}
				});
			})(n);
			n--;
			if(n==-1){
				clearInterval(timerwk)
			}
		},100)
	};

/*分页运动注释*/
	var aNotes=oWkList.getElementsByTagName('div');
	for(var i=0;i<aLiwk.length;i++){
		aLiwk[i].index=i;
		aLiwk[i].onmouseover=function(){
			move(aNotes[this.index],{
				height:50,
				opacity:1
			},{duration:300});
		};
		aLiwk[i].onmouseout=function(){
			move(aNotes[this.index],{
				height:0,
				opacity:0
			},{duration:300});
		};
	}

};