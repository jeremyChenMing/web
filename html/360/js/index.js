window.onload = function (){
	var aLeftMove = document.getElementsByClassName('left-move');
	var aRightMove = document.getElementsByClassName('right-move');
	var aShowMove = document.getElementsByClassName('hover-show');	
	
	for ( var i=0; i<aShowMove.length; i++)
	{
		aShowMove[i].index=i;
		aShowMove[i].onmouseover = function(){
			aLeftMove[this.index].className = 'left-move show';
			aRightMove[this.index].className = 'right-move show';
		};
		aShowMove[i].onmouseout = function(){
			aLeftMove[this.index].className = 'left-move';
			aRightMove[this.index].className = 'right-move';
		};
	}
	// 商品list hover 效果 小包包
	var aGoodsList = document.getElementsByClassName('goods-list');
	
	for( var i=0; i<aGoodsList.length; i++)
	{
		aListHover(aGoodsList[i]);
	}
	function aListHover(aListName)
	{
		var aGdList = aListName.getElementsByTagName('div');
		for( var i=0; i<aGdList.length; i++)
		{
			aGdList[i].onmouseover = function(){
				this.style.background = '#f3f3f3';	
			};
			aGdList[i].onmouseout = function(){
				this.style.background = '';	
			};
		}
	}
	//  图片hover 遮罩效果
	var aHoverOpa = document.getElementsByClassName('j-opa');
	for ( var i=0; i<aHoverOpa.length; i++)
	{
		aHoverOpa[i].onmouseover = function (){
			this.className = 'j-opa hover-opa';	
		};
		aHoverOpa[i].onmouseout = function (){
			this.className = 'j-opa';	
		};
	}
	// 选项卡 js
	tab('j-tab');
	function tab(sName)
	{
		var aTab = document.getElementsByClassName(sName);
		for ( var i=0; i<aTab.length; i++)
		{
			_tab(aTab[i]);
		}
		
		function _tab (aTab)
		{
			var aBtn = aTab.getElementsByClassName('j-btn');
			var aBox = aTab.getElementsByClassName('j-box');
			for ( var i=0; i<aBtn.length; i++)
			{	
				(function(index){
					aBtn[i].onmouseover = function (){
						for ( var i=0; i<aBtn.length; i++)
						{
							aBtn[i].className = 'j-btn';
							aBox[i].className = 'j-box';
						}
						this.className = 'j-btn active';
						aBox[index].className = 'j-box active';	
						
					};
				})(i);
			}
			
		}
	}
};