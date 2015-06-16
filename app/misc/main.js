Handlebars.registerHelper('list', function(context, options) {
  var ret = "";
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(context[i]);
  }
  return ret;
});

Handlebars.registerHelper('p', function(context, options) {
  var ret = "";
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(context[i]);
  }
  return ret;
});
//compile function
compileHBS = function(){
  var theTemplateScript = $("#block-expressions-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var theCompiledHtml = theTemplate(context);
  $('#content-placeholder').html(theCompiledHtml);
  runPumpkin(context.clientID, context.host);
  runGoogleAnalytics(context.analyticsCode);
}
//marpro function
runPumpkin = function(clientId, host){
  (function(w,pk){
    var s=w.createElement('script');
    s.type='text/javascript';
    s.async=true;
    s.src='//pumpkin.' + context.host + '/pumpkin.js';
    var f=w.getElementsByTagName('script')[0];
    f.parentNode.insertBefore(s,f);
    if(!pk.__S){
      window._pk=pk;pk.__S = 1.1;
    }
    pk.host='conversion.' + context.host;
    pk.clientId=context.clientID;
  })(document,window._pk||[])
}
//Google Analytics: change UA-XXXXX-X to be your site's ID.
runGoogleAnalytics = function(code){
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create',code);ga('send','pageview');
  }
  //compile
  compileHBS(context);
  $("body").css("background-image", "url("+context.backgroundImage+")");
  $("body").css("background-position", context.backgroundPosition);
