  // JavaScript Document
var num=0;//表示第一个操作数，显示在屏幕中的
var resualt=0;
var numshow="0";
var operate=0;     //输入状态 0为此数继续输入， 1为转换到下一个数输入
var calcul=0;
var quit=0;


	function clearscreen(){                                //清理屏幕
			num=0;
			resualt=0;
			document.getElementById("numscreen").value="0";
		}
	function omover(obj){                                //显示颜色
			obj.style.backgroundColor="#43F7EE";
		}
	function omout(obj){								//移开失去颜色
			obj.style.backgroundColor="#79F865";
		}
	
	function command(innum){                                   //改
       var str=String(document.getElementById("numscreen").value);    //获得当前显示数据
       str=(str!="0") ? ((operate==0) ? str : "") : "";        //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
      str=str + String(innum);                   //给当前值追加字符
      document.getElementById("numscreen").value=str; //刷新显示
      operate=0;   //重置输入状态
      quit=0;      //重置防止重复按键的标志
      }

	function del(){                                        //退格键
		
		var str=String(document.getElementById("numscreen").value);
		len=str.length;
		str = (str!="0") ? ((operate==0)? str.substr(0,len-1) : str) : str;
		document.getElementById("numscreen").value=str;
	}

	function TwoZero(){
		var str=String(document.getElementById("numscreen").value);
		str=(str!="0") ? ((operate==0) ? str+"00" : str) :str;
		document.getElementById("numscreen").value=str;
	}

	function OneZero(){
		var str=String(document.getElementById("numscreen").value);
		str =(str!="0") ? ((operate==0) ? str+"0" : str) :str;
		document.getElementById("numscreen").value=str;
	}
	function point(){
		var str=String(document.getElementById("numscreen").value);
		var Pcount=0;                           //显示中出现小数点的次数
		var i=0;
		len=str.length;
		for(i=0;i<len;i++){
			if(str.substr(i,1)=="."){
				Pcount++;
			}	
		}
		str = (Pcount==0) ? ((operate==0) ? str+"." :str ) :str;
		document.getElementById("numscreen").value=str;
	}

	
	

	function calculate(){
	      numshow=Number(document.getElementById("numscreen").value);
	     if(num!=0 && quit!=1){                            //判断前一个运算数是否为零
	          switch(calcul){                                   //判断要输入状态
	              case 1:resualt=num+numshow;break;               //计算"+" 
	              case 2:resualt=num-numshow;break;               //计算"-"
	              case 3:resualt=num*numshow;break;               
	              case 4:if(numshow!=0){resualt=num/numshow;}else{alert("被除数不能为0！！！")} break;
	              case 5:resualt=num%numshow;break;
	              }
	         	quit=1;
	          }
	      else{
	          resualt=numshow;
	         }
	     numshow=String(resualt);
	     document.getElementById("numscreen").value=numshow;
	     num=resualt;   //存储当前值
	     }
	

	function plus(){
		
	
		calculate();
		operate=1;
		calcul=1;
		
	}

	function reduce(){
		calculate();
		operate=1;
		calcul=2;
	}

	function multiply(){
		calculate();
		operate=1;
		calcul=3;
	}

	function divide(){
		calculate();
		operate=1;
		calcul=4;
		
	}

	function remainder(){
		calculate();
		operate=1;
		calcul=5;
	}

	function equal(){
		
	
		calculate();
		operate=1;
		num=0;
		resualt=0;
		numshow="0";
	}

	