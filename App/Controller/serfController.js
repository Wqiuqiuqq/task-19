app.controller("serfController",["$scope","$stateParams","serf","$timeout",function($scope,$stateParams,serf,$timeout){
	var config={
		type:"get",
		url:"http://localhost:8899/?"+$stateParams.id
	};
	serf.getData(config).then(function(result){
		console.log(result);
		$scope.data=result;
	})
	$timeout(function(){
		$(".head li").click(function(){
			$(this).addClass("headon").siblings().removeClass("headon");
		})
		var swiper=new Swiper(".banner",{
			pagination:".swiper-pagination",
			autoplay:2000,
			loop:true
		})
		var myScroll = new IScroll('.limit-content', {
		    scrollX: true
		});
		$("#more").click(function(){
			var str="";
			str+=`<ul>
				<li class="col-xs-6 bdr1 bdb1">
					<img src="Content/images/car1.jpg" alt="" />
					<h5>上海大众-全新旅途L</h5>
					<p>上海大众-全新旅途L享2年0利率</p>
					<span>1元 <small class="text-through text-gray ml15">1.4万</small></span>
				</li>
				<li class="col-xs-6 bdb1">
					<img src="Content/images/car2.jpg" alt="" />
					<h5>上海大众-全新旅途L</h5>
					<p>上海大众-全新旅途L享2年0利率</p>
					<span>1元 <small class="text-through text-gray ml15">1.4万</small></span>
				</li>
			
				<li class="col-xs-6 bdb1">
					<img src="Content/images/car3.jpg" alt="" />
					<h5>上海大众-全新旅途L</h5>
					<p>上海大众-全新旅途L享2年0利率</p>
					<span>1元 <small class="text-through text-gray ml15">1.4万</small></span>
				</li>
				<li class="col-xs-6 bdb1 bdl1">
					<img src="Content/images/car4.jpg" alt="" />
					<h5>上海大众-全新旅途L</h5>
					<p>上海大众-全新旅途L享2年0利率</p>
					<span>1元 <small class="text-through text-gray ml15">1.4万</small></span>
				</li>
			</ul>`;
			$(".car-content").append(str);
		})
	},1000)
}])