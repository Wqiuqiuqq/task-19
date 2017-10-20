var fs=require("fs"),
	path=require("path"),
	url=require("url"),
	gulp=require("gulp"),
	server=require('gulp-webserver');
	
gulp.task("server",function(){
	gulp.src("./")
		.pipe(server({
			port:8899,
			host:"localhost",
			livereload:true,
			directoryListing:{
				path:"./",
				enable:true
			},
			middleware:function(req,res,next){
				var objUrl=url.parse(req.url);
				
				var mocks=path.join(__dirname,"Data",objUrl.query+".json");
				console.log(mocks);
				fs.exists(mocks,function(exist){
					if(!exist){
						res.writeHead(404,{
							"Content-Type":"text/json;charset=utf8"
						})
						res.write("Can not find this file");
						res.end();
					}else{
						fs.readFile(mocks,function(err,data){
							res.writeHead(200,{
								"Content-Type":"text/json;charset=utf8",
								"Access-Control-Allow-Origin":"*"
							})
							res.end(data.toString());
						})
					}
				})
			}
		}))
})
