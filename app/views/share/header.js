!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.header=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,l,s){var t,r=null!=e?e:{},m=n.helperMissing,i="function",p=a.escapeExpression;return'\n<div class="header">\n	<h3>name:'+p((t=null!=(t=n.name||(null!=e?e.name:e))?t:m,typeof t===i?t.call(r,{name:"name",hash:{},data:s}):t))+"</h3>			\n	<p>age:"+p((t=null!=(t=n.age||(null!=e?e.age:e))?t:m,typeof t===i?t.call(r,{name:"age",hash:{},data:s}):t))+" 	\n</div>\n\n"},useData:!0})}();