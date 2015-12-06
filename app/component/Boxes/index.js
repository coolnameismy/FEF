


define(function(require, exports, module) {


	var Handlebars = require('handlebars');
	// var demoTpl = require('../component/Tpl/demoList.handlebars');
 
 	
	var Boxes = function(){
		
		var render = function(data){
			var tpl = require("boxes.tpl");
	    	var demoTplc = Handlebars.compile(tpl);
	    	$("body").html( demoTplc(data));
		    console.log(Handlebars);
			console.log("boxes render");
		};
	

	};
	

	exports.Boxes = Boxes();
		



});