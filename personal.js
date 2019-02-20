/*
一般事件
onclick				鼠标触发事件   click只能监听左键
ondblclick 			鼠标双击时触发此事件
onmousedown  		按下鼠标时触发此事件
onmouseup   		鼠标按下后松开鼠标时触发此事件

onmousedown.button == 0 为左键
onmousedown.button == 1 为中间滑轮
onmousedown.button == 2 为右键

onmouseover 		当鼠标移动到某对象范围的上方时触发此事件
onmousemove 		鼠标移动时触发此事件
onmouseout	 		当鼠标离开某对象范围时触发此事件
onkeypress  		当键盘上的某个键被按下并且释放时触发此事件
onkeydown	 		当键盘上某个按键被按下时触发此事件
onkeyup		 		当键盘上某个按键被按放开时触发此事件    

页面相关事件
onabort				图片在下载时被用户中断
onbeforeunload		当前页面的内容将要被改变时触发此事件
onerror				出现错误时触发此事件
onload				页面内容完成时触发此事件
onmove				浏览器的窗口被移动时触发此事件
onresize			当浏览器的窗口大小被改变时触发此事件
onscroll			浏览器的滚动条位置发生变化时触发此事件
onstop				浏览器的停止按钮被按下时触发此事件或者正在下载的文件被中断
onunload			当前页面将被改变时触发此事件

表单相关事件
onblur				当前元素失去焦点时触发此事件
onchange			当前元素失去焦点并且元素的内容发生改变而触发此事件
onfocus				当某个元素获得焦点时触发此事件
onreset				当表单中RESET的属性被激发时触发此事件
onsubmit			一个表单被递交时触发此事件

编辑事件
onbeforecopy		当页面当前的被选择内容将要复制到浏览者系统的剪贴板前触发此事件
onbeforecut			当页面中的一部分或者全部的内容将被移离当前页面[剪贴]并移动到浏览者的系统剪贴板时触发此事件
onbeforeeditfocus	当前元素将要进入编辑状态
onbeforepaste		内容将要从浏览者的系统剪贴板传送[粘贴]到页面中时触发此事件
onbeforeupdate		当浏览者粘贴系统剪贴板中的内容时通知目标对象
oncontextmenu		当浏览者按下鼠标右键出现菜单时或者通过键盘的按键触发页面菜单时触发的事件
oncopy				当页面当前的被选择内容被复制后触发此事件
oncut				当页面当前的被选择内容被剪切时触发此事件
ondrag				当某个对象被拖动时触发此事件 [活动事件]
ondragdrop			一个外部对象被鼠标拖进当前窗口或者帧
ondragend			当鼠标拖动结束时触发此事件，即鼠标的按钮被释放了
ondragenter			当对象被鼠标拖动的对象进入其容器范围内时触发此事件
ondragleave			当对象被鼠标拖动的对象离开其容器范围内时触发此事件
ondragover			当某被拖动的对象在另一对象容器范围内拖动时触发此事件
ondragstart			当某对象将被拖动时触发此事件
ondrop				在一个拖动过程中，释放鼠标键时触发此事件
onlosecapture		当元素失去鼠标移动所形成的选择焦点时触发此事件
onpaste 			当内容被粘贴时触发此事件
onselect			当文本内容被选择时的事件
onselectstart		当文本内容选择将开始发生时触发的事件

数据绑定 	
onafterupdate		当数据完成由数据源到对象的传送时触发此事件
oncellchange		当数据来源发生变化时
ondataavailable		当数据接收完成时触发事件
ondatasetchanged	数据在数据源发生变化时触发的事件
ondatasetcomplete	当来子数据源的全部有效数据读取完毕时触发此事件
onerrorupdate		当使用onBeforeUpdate事件触发取消了数据传送时，代替onAfterUpdate事件
onrowenter			当前数据源的数据发生变化并且有新的有效数据时触发的事件
onrowexit			当前数据源的数据将要发生变化时触发的事件
onrowsdelete		当前数据记录将被删除时触发此事件
onrowsinserted		当前数据源将要插入新数据记录时触发此事件

外部事件 	
onafterprint 		当文档被打印后触发此事件
onbeforeprint 		当文档即将打印时触发此事件
onfilterchange 		当某个对象的滤镜效果发生变化时触发的事件
onhelp 				当浏览者按下F1或者浏览器的帮助选择时触发此事件
onpropertychange 	当对象的属性之一发生变化时触发此事件
onreadystatechange 	当对象的初始化属性值发生变化时触发此事件

移动端事件
touchstart			当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
touchmove			当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
touchend			当手指从屏幕上离开的时候触发。
touchcancel			当系统停止跟踪触摸的时候触发。
touches				表示当前跟踪的触摸操作的touch对象的数组。
targetTouches		特定于事件目标的Touch对象的数组。
changeTouches		表示自上次触摸以来发生了什么改变的Touch对象的数组。


滚动条事件
window.pageYOffset	滚动条位置   Y为竖  X为横
document.body.scrollLeft		document.documentElement.scrollLeft ie方法 
scrollBy			累计滚动事件
scroll				滚动事件

*/


/*

HTTP 协议的 8 种请求类型介绍
HTTP 协议中共定义了八种方法或者叫“动作”来表明对 Request-URI 指定的资源的不同操作方式，具体介绍如下：
OPTIONS：返回服务器针对特定资源所支持的HTTP请求方法。也可以利用向Web服务器发送'*'的请求来测试服务器的功能性。
HEAD：向服务器索要与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息。
GET：向特定的资源发出请求。
POST：向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的创建和/或已有资源的修改。
PUT：向指定资源位置上传其最新内容。
DELETE：请求服务器删除 Request-URI 所标识的资源。
TRACE：回显服务器收到的请求，主要用于测试或诊断。
CONNECT：HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。
虽然 HTTP 的请求方式有 8 种，但是我们在实际应用中常用的也就是 get 和 post，其他请求方式也都可以通过这两种方式间接的来实现。

网络协议部分

*/

function ele(e){
	var event = e || window.event;
	var target = event.target || event.srcElement;
	
}//捕捉事件源对象


//以下封装函数兼容所有主流浏览器 包括IE6以上

function addevent(ele,type,handle){//ele 为需要绑定函数的对象  type 为绑定方法  handle为绑定函数
	if(ele.addEventListener){
		ele.addEventListener(type, handle, false);
	}else if(ele.attachEvent){
		ele.attachEvent("on" + type, function(){
			handle.call(ele)
		})
	}else{
		elem["on" + type] = handle;
	}
}//事件绑定处理原生方法

function stopBubble(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble = true;
	}
}//取消冒泡

function cancelHandler(event){
	if(event.preventDefault){
		event.preventDefault()
	}else{
		event.returnValue = false;
	}	
}//阻止默认事件

function scrolloffset(){
	if(window.pageYOffset){
		return{
			x : window.pageXOffset,
			y : window.pageYOffset,
		}
	}else{
		return {
			x : document.body.scrollLeft + document.documentElement.scrollLeft,
			y : document.body.scrollTop + document.documentElement.scrollTop,
		}
	}
}//滚动条坐标

//以下是一件复制功能   兼容IOS
function copyNum(box){
    var NumClip = document.getElementById(box);
    var NValue=NumClip.value;
    var valueLength = NValue.length;
    selectText(NumClip, 0, valueLength);
    if(document.execCommand('copy', false, null)){
        document.execCommand('copy', false, null)// 执行浏览器复制命令
        alert("复制成功")
    }else{
        alert("复制失败")
}
function selectText(textbox, startIndex, stopIndex) {
    if(textbox.createTextRange) {//ie
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex);//起始光标
        range.moveEnd('character', stopIndex - startIndex);//结束光标
        range.select();//不兼容苹果
    }else{//firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex);
        textbox.focus();
    }
}
//以上是一件复制功能   兼容IOS
//v-model  专门对于表单 改变文本框
//V-TEXT 对于文本渲染
//v-show 显示隐藏  
//v-if 显示隐藏  通过if隐藏式删除
//v-bind 绑定属性  绑定动态属性
//v-for 循环
//v-on 绑定事件
//filter 过滤器 和后台交互 过滤字段对于接口返回的数据进行转换
//Componet 组件 复用功能
