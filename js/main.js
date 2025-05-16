$(function(){
	let count=1;
	let total=4;

	$(".visual_wrap .controller").addClass("active");
	$(".slider li").eq(count-1).addClass("active");

	let id=setInterval(function(){
		$(".controller .next").trigger("click");
	}, 6000);

	$(".controller .prev").click(function(e){
		e.preventDefault();

		$(".visual_wrap .controller").removeClass("active");

		if(count > 1){
			count--;
		}
		else{
			count=total;
		}
		galleryInterface();
	});

	$(".controller .next").click(function(e){
		e.preventDefault();

		$(".visual_wrap .controller").removeClass("active");

		if(count < total){
			count++;
		}
		else{
			count=1;
		}

		galleryInterface();
	});

	$(".controller .prev, .controller .next").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(function(){
				$(".controller .next").trigger("click");
			}, 6000);
		}
	);

	function galleryInterface(){
		setTimeout(function(){
			$(".visual_wrap .controller .num").text(count);
			$(".visual_wrap .controller").addClass("active");
			$(".slider li").removeClass("active");
			$(".slider li").eq(count-1).addClass("active");
		}, 80);
	}

	// tab
	$(".tab").click(function(){
		$("header nav").toggleClass("active");
		$(".tab").toggleClass("close");
		$("body").toggleClass("fixed");
	});

	// fm_site
	$(".fm_site").click(function(){
		const itemList=document.getElementById('itemList');

		itemList.style.display = itemList.style.display === 'none' || itemList.style.display === '' ? 'block' : 'none';
	});
});