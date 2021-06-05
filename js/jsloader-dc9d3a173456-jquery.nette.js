
jQuery.extend({nette:{updateSnippet:function(id,html){$("#"+id).html(html);},success:function(payload){if(!payload)return;if(payload.redirect){window.location.href=payload.redirect;return;}
if(payload.snippets){for(var i in payload.snippets){jQuery.nette.updateSnippet(i,payload.snippets[i]);}}}}});jQuery.ajaxSetup({success:jQuery.nette.success,dataType:"json"});