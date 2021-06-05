
jQuery.fn.extend({ajaxSubmit:function(callback,validate){var form;var sendValues={};validate=(typeof validate!=='undefined')?validate:true;if(this.is(":submit")){form=this.parents("form");sendValues[this.attr("name")]=this.val()||"";}else if(this.is("form")){form=this;}else{return null;}
if(validate&&form.get(0).onsubmit&&form.get(0).onsubmit()===false)return null;var values=form.serializeArray();for(var i=0;i<values.length;i++){var name=values[i].name;if(name in sendValues){var val=sendValues[name];if(!(val instanceof Array)){val=[val];}
val.push(values[i].value);sendValues[name]=val;}else{sendValues[name]=values[i].value;}}
var ajaxOptions={url:form.attr("action"),data:sendValues,type:form.attr("method")||"get"};if(callback){ajaxOptions.success=callback;}
return jQuery.ajax(ajaxOptions);}});