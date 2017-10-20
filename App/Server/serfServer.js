app.factory("serf",["ajaxServer",function(ajaxServer){
	return {
		getData:function(config){
			return ajaxServer.ajax(config.type,config.url);
		}
	}
}])