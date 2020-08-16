		var menu=document.querySelector("nav ul");
		var btn_scroll=document.querySelectorAll(".btnscroll");
		var miscroll=document.querySelector(".scroll");
		var boo_menu=true;
		function inicio(){
			menu.style="visibility:hidden";
			document.querySelector("#open").addEventListener("click",function(){
				if(boo_menu){
					menu.style="visibility:visible";boo_menu=false;
				}else{
					menu.style="visibility:hidden";boo_menu=true;
				}
			},false);
			btn_scroll[0].addEventListener("click",function(){
				miscroll.scrollLeft -= 90;
			},false);
			btn_scroll[1].addEventListener("click",function(){
				miscroll.scrollLeft += 90;
			},false);
		}
		
		window.addEventListener("load",inicio,false);