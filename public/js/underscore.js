<!DOCTYPE html>
<html lang="en">

<head>
	<noscript><meta http-equiv="refresh" content="0; URL=/files/miranda/F03P94R1E/underscore.js?nojsmode=1" /></noscript>
<script type="text/javascript">
window.load_start_ms = new Date().getTime();
window.load_log = [];
window.logLoad = function(k) {
	var ms = new Date().getTime();
	window.load_log.push({
		k: k,
		t: (ms-window.load_start_ms)/1000
	})
}
if(self!==top)window.document.write("\u003Cstyle>body * {display:none !important;}\u003C\/style>\u003Ca href=\"#\" onclick="+
"\"top.location.href=window.location.href\" style=\"display:block !important;padding:10px\">Go to Slack.com\u003C\/a>");
</script>


<script type="text/javascript">
window.callSlackAPIUnauthed = function(method, args, callback) {
	var url = '/api/'+method+'?t='+new Date().getTime();
	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			req.onreadystatechange = null;
			var obj;
			
			if (req.status == 200) {
				if (req.responseText.indexOf('{') == 0) {
					try {
						eval('obj = '+req.responseText);
					} catch (err) {
						console.warn('unable to do anything with api rsp');
					}
				}
			}
			
			obj = obj || {
				ok: false	
			}
			
			callback(obj.ok, obj, args);
		}
	}
	
	req.open('POST', url, 1);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var args2 = [];
	for (i in args) {
		args2[args2.length] = encodeURIComponent(i)+'='+encodeURIComponent(args[i]);
	}

	req.send(args2.join('&'));
}
</script>
			<meta name="referrer" content="no-referrer">
			<meta name="superfish" content="nofish">
	<script type="text/javascript">



var TS_last_log_date = null;
var TSMakeLogDate = function() {
	var date = new Date();
	
	var y = date.getFullYear();
	var mo = date.getMonth()+1;
	var d = date.getDate();

	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	var ms = date.getMilliseconds();
	var str = y+'/'+mo+'/'+d+' '+h+':'+mi+':'+s+'.'+ms;
	if (TS_last_log_date) {
		var diff = date-TS_last_log_date;
		//str+= ' ('+diff+'ms)';
	}
	TS_last_log_date = date;
	return str+' ';
}

var TSSSB = {
	
	
	call: function() {
		return false;
	}
	
	
}

</script>	<script type="text/javascript">TSSSB.call('didFinishLoading');</script>
	    <meta charset="utf-8">
    <title data-title-suffix="playground Slack">underscore.js | playground Slack</title>
    <meta name="author" content="Slack">

							
																		
    									
		
		<!-- output_css "core" -->
    <link href="https://slack.global.ssl.fastly.net/34029/style/rollup-plastic_1423197396.css" rel="stylesheet" type="text/css">

	<!-- output_css "regular" -->
    <link href="https://slack.global.ssl.fastly.net/28071/style/comments_1423075881.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/34331/style/stars_1423619235.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/32874/style/print_1421432294.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/34737/style/files_1424377311.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/31650/style/libs_codemirror_1419288190.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/32682/style/libs_lato-1_1421282038.css" rel="stylesheet" type="text/css">

	

	
	
	

	<!--[if lt IE 9]>
	<script src="https://slack.global.ssl.fastly.net/1261/js/libs_html5shiv_1361923886.js"></script>
	<![endif]-->

	
<link id="favicon" rel="shortcut icon" href="https://slack.global.ssl.fastly.net/20655/img/icons/favicon-32.png" sizes="16x16 32x32 48x48" type="image/png" />

<link rel="icon" href="https://slack.global.ssl.fastly.net/9427/img/icons/app-256.png" sizes="256x256" type="image/png" />

<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://slack.global.ssl.fastly.net/21506/img/icons/ios-152.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://slack.global.ssl.fastly.net/21506/img/icons/ios-144.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://slack.global.ssl.fastly.net/21506/img/icons/ios-120.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://slack.global.ssl.fastly.net/21506/img/icons/ios-114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://slack.global.ssl.fastly.net/21506/img/icons/ios-72.png" />
<link rel="apple-touch-icon-precomposed" href="https://slack.global.ssl.fastly.net/21506/img/icons/ios-57.png" />

<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://slack.global.ssl.fastly.net/20655/img/icons/app-144.png" />	<script>
(function(g){var n=0,h=[];g.onerror=function(a,b,d,f,c){c=c||null;f=f||-1;k?l(a,b,d,f,null,c):h.push([a,b,d,f,null,c])};var k=0,p=function(a){return void 0==a?"":encodeURIComponent(""+a)},s=function(a){var b=[];for(i in a)b.push(i+"="+p(a[i]));var d=new XMLHttpRequest;try{d.open("POST","/jse",1),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.send(b.join("&"))}catch(f){r.apply(this,a)}},r=function(a){var b;b="/jse?_="+(new Date).getTime();for(var d in a)b+="&"+d+"="+p(a[d]).substr(0,
255);(new Image).src=b},t=function(a){a=a.stack.split("\n");if(3>a.length)return-2;a=a[1];if(!a)return-3;a=a.split("/");a=a[a.length-1];if(!a)return-4;a=a.split(":");return 3==a.length?parseInt(a[1]):-5},l=function(a,b,d,f,c,e){n++;if(!(10<n)){var h=g.location.href;a.target&&a.type&&(a=a.type);a.indexOf||(a="unknown:"+typeof a);a={e:a,u:b==h?"":b,l:d+(0<=f?", "+f:""),h:h,pl:k};b=e&&e.stack&&g.printStackTrace?printStackTrace({e:e}):e&&e.stack?e.stack:null;!c&&b&&(c="stack: "+b);c&&(a.d=c);g.boot_data&&
boot_data.version_uid&&(a.v=boot_data.version_uid);g.boot_data&&
boot_data.version_ts&&(a.vt=boot_data.version_ts);if(b&&b.length&&"object"==typeof b)try{c=[];for(var m=b.length-1;0<m;m--)b[m]&&c.unshift(b[m]);c.length&&(a.s=c.join("\n"))}catch(l){}1>a.l&&e&&e.stack&&"string"==typeof e.stack&&(a.l=t(e));s(a)}},q=function(){for(var a,b=0;b<h.length;b++)a=h[b],l.apply(this,a);h.length=0;h=null;k=1};g.addEventListener?g.addEventListener("load",q,!1):g.attachEvent("onload",q);g.badtoys||(g.badtoys={log:function(a,b){var d=a&&a.message?a.message:"unknown message";a&&a.name&&
(d=a.name+": "+d);a.stack&&(b=(b?b+" | ":"")+"stack: "+a.stack);var f=a&&a.fileName?a.fileName:"";!f&&a&&a.sourceURL&&(f=a.sourceURL);var c=0;a&&a.lineNumber&&(c=a.lineNumber);!c&&a&&a.line&&(c=a.line);var e=-1;a&&a.col&&(e=a.col);k?l(d,f,c,e,b,a):h.push([d,f,c,e,b,a])}})})(window);
</script>
			<script type="text/javascript">

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-106458-17', 'slack.com');
	ga('send', 'pageview');


	(function(e,c,b,f,d,g,a){e.SlackBeaconObject=d;
	e[d]=e[d]||function(){(e[d].q=e[d].q||[]).push([1*new Date(),arguments])};
	e[d].l=1*new Date();g=c.createElement(b);a=c.getElementsByTagName(b)[0];
	g.async=1;g.src=f;a.parentNode.insertBefore(g,a)
	})(window,document,"script","https://slack.global.ssl.fastly.net/15899/js/libs_beacon_1392444912.js","sb");
	sb('set', 'token', '3307f436963e02d4f9eb85ce5159744c');
	sb('set', 'user_id', 'U03P3L314');
	sb('set', 'user_batch', "immediate-launch");
	sb('set', 'user_created', "2015-02-20");
	sb('set', 'name_tag', 'plygr/rick');
	sb('track', 'pageview');


	function track(a){ga('send','event','web',a);sb('track',a);}

</script>	
</head>

  <body >

		  			<script>
		
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w > 1440) document.querySelector('body').classList.add('widescreen');
		
		</script>
	
  	
	

			<nav id="site_nav" class="no_transition">

	<div id="site_nav_contents">

		<div id="user_menu">
			<div id="user_menu_contents">
				<div id="user_menu_avatar">
										<span class="member_image thumb_48" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-02-20/3786024422_689419a44a51d6131540_192.jpg')"></span>
					<span class="member_image thumb_36" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-02-20/3786024422_689419a44a51d6131540_72.jpg')"></span>
				</div>
				<h3>Signed in as</h3>
				<span id="user_menu_name">rick</span>
			</div>
		</div>

		<div class="nav_contents">

			<ul class="primary_nav">
				<li><a href="/home"><i class="fa fa-home"></i>Home</a></li>
				<li><a href="/account"><i class="fa fa-user"></i>Account & Profile</a></li>
				<li><a href="/services/new"><i class="fa fa-wrench"></i>Integrations</a></li>
				<li><a href="/archives"><i class="fa fa-inbox"></i>Message Archives</a></li>
				<li><a href="/files"><i class="fa fa-file"></i>Files</a></li>
				<li><a href="/team"><i class="fa fa-book"></i>Team Directory</a></li>
									<li><a href="/stats"><i class="fa fa-tachometer"></i>Statistics</a></li>
													<li><a href="/customize"><i class="fa fa-magic"></i>Customize</a></li>
											</ul>

							<h3>Administration</h3>
				<ul id="admin_nav" class="secondary_nav">
					<li><a href="/admin/settings">Team Settings</a></li>
					<li><a href="/admin">Manage Your Team</a></li>
					<li><a href="/admin/invites">Invitations</a></li>
					<li><a href="/admin/billing">Billing</a></li>
					<li><a href="/admin/auth">Authentication</a></li>
				</ul>
			
		</div>

		<div id="footer">

			<ul id="footer_nav">
				<li><a href="/is">Tour</a></li>
				<li><a href="/apps">Apps</a></li>
				<li><a href="/brand-guidelines">Brand Guidelines</a></li>
				<li><a href="/help">Help</a></li>
				<li><a href="https://api.slack.com" target="_blank">API<i class="fa fa-external-link small_left_margin"></i></a></li>
									<li><a href="/account/gateways">Gateways</a></li>
								<li><a href="/pricing">Pricing</a></li>
				<li><a href="/help/requests/new">Contact</a></li>
				<li><a href="/terms-of-service">Policies</a></li>
				<li><a href="http://slackhq.com/" target="_blank">Our Blog</a></li>
				<li><a href="https://slack.com/signout/3785683030?crumb=s-1424454584-38dc13ca02-%E2%98%83">Sign Out<i class="fa fa-sign-out small_left_margin"></i></a></li>
			</ul>

			<p id="footer_signature">Made with <i class="fa fa-heart"></i> by Slack</p>

		</div>

	</div>
</nav>	
	<header>
					<a id="menu_toggle" class="no_transition">
				<span class="menu_icon"></span>
				<span class="menu_label">Menu</span>
				<span class="vert_divider"></span>
			</a>
			<h1 id="header_team_name" class="inline_block no_transition">
				<a href="/home">
					<i class="fa fa-home" /></i>
					playground
				</a>
			</h1>
			<div class="header_nav">
				<div class="header_btns float_right">
					<a id="team_switcher">
						<i class="fa fa-th-large"></i>
						<span class="block label">Teams</span>
					</a>
					<a href="/help" id="help_link">
						<i class="fa fa-life-ring"></i>
						<span class="block label">Help</span>
					</a>
					<a href="/messages">
						<img src="https://slack.global.ssl.fastly.net/21506/img/icons/ios-64.png" srcset="https://slack.global.ssl.fastly.net/21506/img/icons/ios-32.png 1x, https://slack.global.ssl.fastly.net/21506/img/icons/ios-64.png 2x" />
						<span class="block label">Launch</span>
					</a>
				</div>
						                    <ul id="header_team_nav">
		                        		                            <li class="active">
		                            	<a href="https://plygr.slack.com/home" target="https://plygr.slack.com/">
		                            				                            			<i class="fa fa-check active_icon"></i>
		                            				                            				                            			<i class="team_icon default" >P</i>
		                            				                            		<span class="switcher_label team_name">playground</span>
		                            	</a>
		                            </li>
		                        		                        <li id="add_team_option"><a href="https://slack.com/signin" target="_blank"><i class="fa fa-plus team_icon"></i> <span class="switcher_label">Sign in to another team...</span></a></li>
		                    </ul>
		                			</div>
		
		
	</header>

	<div id="page">

		<div id="page_contents" >

<p class="print_only">
	<strong>Created by miranda on February 21, 2015 at 1:49 AM</strong><br />
	<span class="subtle_silver break_word">https://plygr.slack.com/files/miranda/F03P94R1E/underscore.js</span>
</p>

<div class="file_header_container no_print"></div>

<div class="alert_container">
		<div class="file_public_link_shared alert" style="display: none;">
			<a id="file_public_link_revoker" class="btn btn_small btn_outline float_right" data-toggle="tooltip" title="You can revoke the public link to this file. This will cause any previously shared links to stop working.">Revoke</a>
		
	<i class="fa fa-link"></i> Public Link: <a class="file_public_link" href="https://slack-files.com/T03P3L30W-F03P94R1E-51f7d19ffb" target="new">https://slack-files.com/T03P3L30W-F03P94R1E-51f7d19ffb</a>
</div></div>

<div id="file_page" class="card top_padding">

	<p class="small subtle_silver no_print meta">
		44KB JavaScript/JSON snippet created on <span class="date">February 21st 2015</span>.
				<span class="file_share_list"></span>
	</p>

	<a id="file_action_cog" class="action_cog action_cog_snippet float_right no_print">
		<span>Actions </span><i class="fa fa-cog"></i>
	</a>
	<a id="snippet_expand_toggle" class="float_right no_print">
		<i class="fa fa-expand "></i>
		<i class="fa fa-compress hidden"></i>
	</a>

	<div class="large_bottom_margin clearfix">
		<pre id="file_contents">//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we&#039;re in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler &quot;advanced&quot; mode.
  if (typeof exports !== &#039;undefined&#039;) {
    if (typeof module !== &#039;undefined&#039; &amp;&amp; module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = &#039;1.6.0&#039;;

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**&#039;s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach &amp;&amp; obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i &lt; length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i &lt; length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**&#039;s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap &amp;&amp; obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = &#039;Reduce of empty array with no initial value&#039;;

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**&#039;s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length &gt; 2;
    if (obj == null) obj = [];
    if (nativeReduce &amp;&amp; obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**&#039;s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length &gt; 2;
    if (obj == null) obj = [];
    if (nativeReduceRight &amp;&amp; obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**&#039;s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter &amp;&amp; obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**&#039;s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery &amp;&amp; obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result &amp;&amp; predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**&#039;s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome &amp;&amp; obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf &amp;&amp; obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can&#039;t optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator &amp;&amp; _.isArray(obj) &amp;&amp; obj[0] === +obj[0] &amp;&amp; obj.length &lt; 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed &gt; lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator &amp;&amp; _.isArray(obj) &amp;&amp; obj[0] === +obj[0] &amp;&amp; obj.length &lt; 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed &lt; lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object&#039;s values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a &gt; b || a === void 0) return 1;
        if (a &lt; b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), &#039;value&#039;);
  };

  // An internal function used for aggregate &quot;group by&quot; operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object&#039;s values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object&#039;s values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low &lt; high) {
      var mid = (low + high) &gt;&gt;&gt; 1;
      iterator.call(context, array[mid]) &lt; value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n &lt; 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow &amp;&amp; _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, &#039;length&#039;).concat(0));
    var results = new Array(length);
    for (var i = 0; i &lt; length; i++) {
      results[i] = _.pluck(arguments, &#039;&#039; + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i &lt; length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn&#039;t supply us with indexOf (I&#039;m looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**&#039;s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == &#039;number&#039;) {
        i = (isSorted &lt; 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf &amp;&amp; array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i &lt; length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**&#039;s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf &amp;&amp; array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length &lt;= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx &lt; length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**&#039;s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind &amp;&amp; func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i &lt; length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position &lt; arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object&#039;s methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error(&#039;bindAll must be passed function names&#039;);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you&#039;d like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous &amp;&amp; options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining &lt;= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout &amp;&amp; options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last &lt; wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate &amp;&amp; !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i &gt;= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times &lt; 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object&#039;s properties.
  // Delegates to **ECMAScript 5**&#039;s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object&#039;s properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i &lt; length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i &lt; length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i &lt; length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to &quot;tap into&quot; a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren&#039;t identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case &#039;[object String]&#039;:
        // Primitives and their corresponding object wrappers are equivalent; thus, `&quot;5&quot;` is
        // equivalent to `new String(&quot;5&quot;)`.
        return a == String(b);
      case &#039;[object Number]&#039;:
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case &#039;[object Date]&#039;:
      case &#039;[object Boolean]&#039;:
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case &#039;[object RegExp]&#039;:
        return a.source == b.source &amp;&amp;
               a.global == b.global &amp;&amp;
               a.multiline == b.multiline &amp;&amp;
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != &#039;object&#039; || typeof b != &#039;object&#039;) return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor &amp;&amp; !(_.isFunction(aCtor) &amp;&amp; (aCtor instanceof aCtor) &amp;&amp;
                             _.isFunction(bCtor) &amp;&amp; (bCtor instanceof bCtor))
                        &amp;&amp; (&#039;constructor&#039; in a &amp;&amp; &#039;constructor&#039; in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == &#039;[object Array]&#039;) {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) &amp;&amp; eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) &amp;&amp; !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An &quot;empty&quot; object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj &amp;&amp; obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5&#039;s native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == &#039;[object Array]&#039;;
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each([&#039;Arguments&#039;, &#039;Function&#039;, &#039;String&#039;, &#039;Number&#039;, &#039;Date&#039;, &#039;RegExp&#039;], function(name) {
    _[&#039;is&#039; + name] = function(obj) {
      return toString.call(obj) == &#039;[object &#039; + name + &#039;]&#039;;
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn&#039;t any inspectable &quot;Arguments&quot; type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj &amp;&amp; _.has(obj, &#039;callee&#039;));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== &#039;function&#039;) {
    _.isFunction = function(obj) {
      return typeof obj === &#039;function&#039;;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) &amp;&amp; !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) &amp;&amp; obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == &#039;[object Boolean]&#039;;
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i &lt; n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      &#039;&amp;&#039;: &#039;&amp;amp;&#039;,
      &#039;&lt;&#039;: &#039;&amp;lt;&#039;,
      &#039;&gt;&#039;: &#039;&amp;gt;&#039;,
      &#039;&quot;&#039;: &#039;&amp;quot;&#039;,
      &quot;&#039;&quot;: &#039;&amp;#x27;&#039;
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp(&#039;[&#039; + _.keys(entityMap.escape).join(&#039;&#039;) + &#039;]&#039;, &#039;g&#039;),
    unescape: new RegExp(&#039;(&#039; + _.keys(entityMap.unescape).join(&#039;|&#039;) + &#039;)&#039;, &#039;g&#039;)
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each([&#039;escape&#039;, &#039;unescape&#039;], function(method) {
    _[method] = function(string) {
      if (string == null) return &#039;&#039;;
      return (&#039;&#039; + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + &#039;&#039;;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /&lt;%([\s\S]+?)%&gt;/g,
    interpolate : /&lt;%=([\s\S]+?)%&gt;/g,
    escape      : /&lt;%-([\s\S]+?)%&gt;/g
  };

  // When customizing `templateSettings`, if you don&#039;t want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    &quot;&#039;&quot;:      &quot;&#039;&quot;,
    &#039;\\&#039;:     &#039;\\&#039;,
    &#039;\r&#039;:     &#039;r&#039;,
    &#039;\n&#039;:     &#039;n&#039;,
    &#039;\t&#039;:     &#039;t&#039;,
    &#039;\u2028&#039;: &#039;u2028&#039;,
    &#039;\u2029&#039;: &#039;u2029&#039;
  };

  var escaper = /\\|&#039;|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig&#039;s implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join(&#039;|&#039;) + &#039;|$&#039;, &#039;g&#039;);

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = &quot;__p+=&#039;&quot;;
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return &#039;\\&#039; + escapes[match]; });

      if (escape) {
        source += &quot;&#039;+\n((__t=(&quot; + escape + &quot;))==null?&#039;&#039;:_.escape(__t))+\n&#039;&quot;;
      }
      if (interpolate) {
        source += &quot;&#039;+\n((__t=(&quot; + interpolate + &quot;))==null?&#039;&#039;:__t)+\n&#039;&quot;;
      }
      if (evaluate) {
        source += &quot;&#039;;\n&quot; + evaluate + &quot;\n__p+=&#039;&quot;;
      }
      index = offset + match.length;
      return match;
    });
    source += &quot;&#039;;\n&quot;;

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = &#039;with(obj||{}){\n&#039; + source + &#039;}\n&#039;;

    source = &quot;var __t,__p=&#039;&#039;,__j=Array.prototype.join,&quot; +
      &quot;print=function(){__p+=__j.call(arguments,&#039;&#039;);};\n&quot; +
      source + &quot;return __p;\n&quot;;

    try {
      render = new Function(settings.variable || &#039;obj&#039;, &#039;_&#039;, source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = &#039;function(&#039; + (settings.variable || &#039;obj&#039;) + &#039;){\n&#039; + source + &#039;}&#039;;

    return template;
  };

  // Add a &quot;chain&quot; function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each([&#039;pop&#039;, &#039;push&#039;, &#039;reverse&#039;, &#039;shift&#039;, &#039;sort&#039;, &#039;splice&#039;, &#039;unshift&#039;], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == &#039;shift&#039; || name == &#039;splice&#039;) &amp;&amp; obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each([&#039;concat&#039;, &#039;join&#039;, &#039;slice&#039;], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === &#039;function&#039; &amp;&amp; define.amd) {
    define(&#039;underscore&#039;, [], function() {
      return _;
    });
  }
}).call(this);
</pre>

		<p class="file_page_meta no_print" style="line-height: 1.5rem;">
			<label class="checkbox normal mini float-right no_top_padding no_min_width">
				<input type="checkbox" id="file_preview_wrap_cb"> wrap long lines
			</label>
		</p>

	</div>

	<div id="comments_holder" class="clearfix clear_both">
	<div class="col span_1_of_6"></div>
	<div class="col span_4_of_6 no_right_padding">
		<div id="file_page_comments">
					</div>	
		<form action="https://plygr.slack.com/files/miranda/F03P94R1E/underscore.js" 
		id="file_comment_form" 
					class="comment_form"
				method="post">
			<a href="/team/rick" class="member_preview_link" data-member-id="U03P3L314" >
			<span class="member_image thumb_36" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-02-20/3786024422_689419a44a51d6131540_72.jpg')"></span>
		</a>		
		<input type="hidden" name="addcomment" value="1" />
	<input type="hidden" name="crumb" value="s-1424454584-f99c845ec9-☃" />

	<textarea id="file_comment" data-el-id-to-keep-in-view="file_comment_submit_btn" class="comment_input small_bottom_margin" name="comment" wrap="virtual" ></textarea>
	<span class="input_note float_left cloud_silver file_comment_tip">cmd+enter to submit</span>	<button id="file_comment_submit_btn" type="submit" class="btn float_right  ladda-button" data-style="expand-right"><span class="ladda-label">Add Comment</span></button>
</form>

<form action="https://plygr.slack.com/files/miranda/F03P94R1E/underscore.js" 
		id="file_edit_comment_form" 
					class="edit_comment_form hidden"
				method="post">
	<textarea id="file_edit_comment" class="comment_input small_bottom_margin" name="comment" wrap="virtual"></textarea><br>
	<span class="input_note float_left cloud_silver file_comment_tip">cmd+enter to submit</span>	<input type="submit" class="save btn float_right " value="Save Changes" />
	<button class="cancel btn btn_outline float_right small_right_margin ">Cancel</button>
</form>	
	</div>
	<div class="col span_1_of_6"></div>
</div>
</div>

	

		
	</div>
	<div id="overlay"></div>
</div>




<script type="text/javascript">
var cdn_url = 'https://slack.global.ssl.fastly.net';
</script>
			<script type="text/javascript">
<!--
	// common boot_data
	var boot_data = {
		start_ms: new Date().getTime(),
		app: 'web',
		is_mobile: false,
		user_id: 'U03P3L314',
		version_ts: '1424410707',
		version_uid: '34774',
		redir_domain: 'slack-redir.com',
		api_url: '/api/',
		team_url: 'https://plygr.slack.com/',
		image_proxy_url: 'https://slack-imgs.com/',
		api_token: 'xoxs-3785683030-3785683038-3783793155-a2f2a1412e',
		feature_status: false,
		feature_attachments_inline: false,
		feature_search_attachments: false,
		feature_chat_sounds: false,
		feature_darken_scroll_handle: false,
		feature_cmd_autocomplete: true,
		feature_require_at: true,
		feature_image_proxy: true,
		feature_channel_eventlog_client: true,
		feature_simple_smile: true,
		feature_bot_users: true,
		feature_post_previews: false,
		feature_user_hidden_msgs: false,
		feature_muting: true,
		feature_macssb1_banner: true,
		feature_latest_event_ts: true,
		feature_new_team_directory: true,
		feature_no_redirects_in_ssb: true,
		feature_referer_policy: true,
		feature_client_exif_orientation_on_uploads: true,
		feature_spaces: false,
		feature_comment_mentions_autocomplete: true,
		feature_lato_fonts: true,
		feature_at_channel_warning: true,
		feature_at_channel_warning_non_admin_message: true,
		feature_flexpane_rework: false,
		feature_ms_on_space: true,
		feature_a11y_keyboard_shortcuts: false,
		feature_email_ingestion: false,
		feature_email_integration: false,
		feature_pins: false,
		feature_join_leave_rollups: true,
		feature_bot_message_label: true,
		feature_file_url_private_conversion: false,
		feature_spaces_in_windows: false,

		img: {
			app_icon: 'https://slack.global.ssl.fastly.net/20655/img/slack_growl_icon.png'
		},
		page_needs_custom_emoji: false
	};

	

	// client boot data
			boot_data.login_data = JSON.parse('{\"ok\":true,\"self\":{\"id\":\"U03P3L314\",\"name\":\"rick\",\"prefs\":{\"highlight_words\":\"\",\"user_colors\":\"\",\"color_names_in_list\":true,\"growls_enabled\":true,\"tz\":\"Asia\\/Taipei\",\"push_dm_alert\":true,\"push_mention_alert\":true,\"push_everything\":true,\"push_idle_wait\":2,\"push_sound\":\"b2.mp3\",\"push_loud_channels\":\"\",\"push_mention_channels\":\"\",\"push_loud_channels_set\":\"\",\"email_alerts\":\"none\",\"email_alerts_sleep_until\":0,\"email_misc\":true,\"email_weekly\":true,\"welcome_message_hidden\":false,\"all_channels_loud\":true,\"loud_channels\":\"\",\"never_channels\":\"\",\"loud_channels_set\":\"\",\"show_member_presence\":true,\"search_sort\":\"timestamp\",\"expand_inline_imgs\":true,\"expand_internal_inline_imgs\":true,\"expand_snippets\":false,\"posts_formatting_guide\":true,\"seen_welcome_2\":true,\"seen_ssb_prompt\":false,\"search_only_my_channels\":false,\"emoji_mode\":\"default\",\"has_invited\":true,\"has_uploaded\":true,\"has_created_channel\":false,\"search_exclude_channels\":\"\",\"messages_theme\":\"default\",\"webapp_spellcheck\":true,\"no_joined_overlays\":false,\"no_created_overlays\":false,\"dropbox_enabled\":false,\"seen_user_menu_tip_card\":true,\"seen_team_menu_tip_card\":false,\"seen_channel_menu_tip_card\":false,\"seen_message_input_tip_card\":true,\"seen_channels_tip_card\":true,\"seen_domain_invite_reminder\":false,\"seen_member_invite_reminder\":false,\"seen_flexpane_tip_card\":false,\"seen_search_input_tip_card\":false,\"mute_sounds\":true,\"arrow_history\":false,\"tab_ui_return_selects\":true,\"obey_inline_img_limit\":true,\"new_msg_snd\":\"knock_brush.mp3\",\"collapsible\":false,\"collapsible_by_click\":true,\"require_at\":false,\"mac_ssb_bounce\":\"\",\"mac_ssb_bullet\":true,\"win_ssb_bullet\":true,\"expand_non_media_attachments\":true,\"show_typing\":true,\"pagekeys_handled\":true,\"last_snippet_type\":\"\",\"display_real_names_override\":0,\"time24\":false,\"enter_is_special_in_tbt\":false,\"graphic_emoticons\":false,\"convert_emoticons\":true,\"autoplay_chat_sounds\":true,\"ss_emojis\":true,\"sidebar_behavior\":\"\",\"mark_msgs_read_immediately\":true,\"start_scroll_at_oldest\":true,\"snippet_editor_wrap_long_lines\":false,\"ls_disabled\":false,\"sidebar_theme\":\"default\",\"sidebar_theme_custom_values\":\"\",\"f_key_search\":false,\"k_key_omnibox\":true,\"speak_growls\":false,\"mac_speak_voice\":\"com.apple.speech.synthesis.voice.Alex\",\"mac_speak_speed\":250,\"comma_key_prefs\":false,\"at_channel_suppressed_channels\":\"\",\"push_at_channel_suppressed_channels\":\"\",\"prompted_for_email_disabling\":false,\"full_text_extracts\":false,\"no_text_in_notifications\":false,\"muted_channels\":\"\",\"no_macssb1_banner\":false,\"privacy_policy_seen\":true,\"search_exclude_bots\":false,\"fuzzy_matching\":false,\"load_lato_2\":false,\"fuller_timestamps\":false,\"last_seen_at_channel_warning\":0,\"temp_archive_viewer\":false,\"enable_flexpane_rework\":false,\"flex_resize_window\":false},\"created\":1424422276},\"team\":{\"id\":\"T03P3L30W\",\"name\":\"playground\",\"email_domain\":\"\",\"domain\":\"plygr\",\"msg_edit_window_mins\":-1,\"prefs\":{\"default_channels\":[\"C03P3L31J\",\"C03P3L31N\"],\"msg_edit_window_mins\":-1,\"allow_message_deletion\":true,\"hide_referers\":true,\"display_real_names\":false,\"who_can_at_everyone\":\"regular\",\"who_can_at_channel\":\"ra\",\"warn_before_at_channel\":\"always\",\"who_can_create_channels\":\"regular\",\"who_can_archive_channels\":\"regular\",\"who_can_create_groups\":\"ra\",\"who_can_post_general\":\"ra\",\"who_can_kick_channels\":\"admin\",\"who_can_kick_groups\":\"regular\",\"retention_type\":0,\"retention_duration\":0,\"group_retention_type\":0,\"group_retention_duration\":0,\"dm_retention_type\":0,\"dm_retention_duration\":0,\"require_at_for_mention\":0,\"compliance_export_start\":0},\"icon\":{\"image_34\":\"https:\\/\\/slack.global.ssl.fastly.net\\/28461\\/img\\/avatars-teams\\/ava_0011-34.png\",\"image_44\":\"https:\\/\\/slack.global.ssl.fastly.net\\/28461\\/img\\/avatars-teams\\/ava_0011-44.png\",\"image_68\":\"https:\\/\\/slack.global.ssl.fastly.net\\/28461\\/img\\/avatars-teams\\/ava_0011-68.png\",\"image_88\":\"https:\\/\\/slack.global.ssl.fastly.net\\/28461\\/img\\/avatars-teams\\/ava_0011-88.png\",\"image_102\":\"https:\\/\\/slack.global.ssl.fastly.net\\/28461\\/img\\/avatars-teams\\/ava_0011-102.png\",\"image_132\":\"https:\\/\\/slack.global.ssl.fastly.net\\/28461\\/img\\/avatars-teams\\/ava_0011-132.png\",\"image_default\":true},\"over_storage_limit\":false},\"latest_event_ts\":\"1424453984.000000\",\"channels\":[{\"id\":\"C03P3L31J\",\"name\":\"general\",\"is_channel\":true,\"created\":1424422276,\"creator\":\"U03P3L314\",\"is_archived\":false,\"is_general\":true,\"is_member\":true,\"members\":[\"U03P1QJUT\",\"U03P3L314\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"This channel is for team-wide communication and announcements. All team members are in this channel.\",\"creator\":\"\",\"last_set\":0}},{\"id\":\"C03P1SHL5\",\"name\":\"parse-study\",\"is_channel\":true,\"created\":1424423092,\"creator\":\"U03P1QJUT\",\"is_archived\":false,\"is_general\":false,\"is_member\":true,\"members\":[\"U03P1QJUT\",\"U03P3L314\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"F8, we are coming!\",\"creator\":\"U03P1QJUT\",\"last_set\":1424423092}},{\"id\":\"C03P3L31N\",\"name\":\"random\",\"is_channel\":true,\"created\":1424422276,\"creator\":\"U03P3L314\",\"is_archived\":false,\"is_general\":false,\"is_member\":true,\"members\":[\"U03P1QJUT\",\"U03P3L314\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"A place for non-work banter, links, articles of interest, humor or anything else which you\'d like concentrated in some place other than work-related channels.\",\"creator\":\"\",\"last_set\":0}}],\"groups\":[],\"ims\":[{\"id\":\"D03P3L31C\",\"is_im\":true,\"user\":\"USLACKBOT\",\"created\":1424422276,\"is_user_deleted\":false},{\"id\":\"D03P1QJUX\",\"is_im\":true,\"user\":\"U03P1QJUT\",\"created\":1424422614,\"is_user_deleted\":false}],\"users\":[{\"id\":\"U03P1QJUT\",\"name\":\"miranda\",\"deleted\":false,\"status\":null,\"color\":\"4bbe2e\",\"real_name\":\"Miranda Wu\",\"tz\":\"Asia\\/Ulaanbaatar\",\"tz_label\":\"Ulaanbaatar Time\",\"tz_offset\":28800,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3783850461_3fd054be1e3ba3736b16_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3783850461_3fd054be1e3ba3736b16_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3783850461_3fd054be1e3ba3736b16_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3783850461_3fd054be1e3ba3736b16_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3783850461_3fd054be1e3ba3736b16_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3783850461_3fd054be1e3ba3736b16_original.jpg\",\"first_name\":\"Miranda\",\"last_name\":\"Wu\",\"title\":\"Founder\",\"skype\":\"\",\"phone\":\"\",\"real_name\":\"Miranda Wu\",\"real_name_normalized\":\"Miranda Wu\",\"email\":\"miranda.github@gmail.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03P3L314\",\"name\":\"rick\",\"deleted\":false,\"status\":null,\"color\":\"9f69e7\",\"real_name\":\"Rick Tsai\",\"tz\":\"Asia\\/Taipei\",\"tz_label\":\"Taiwan Standard Time\",\"tz_offset\":28800,\"profile\":{\"first_name\":\"Rick\",\"last_name\":\"Tsai\",\"title\":\"Founder\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3786024422_689419a44a51d6131540_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3786024422_689419a44a51d6131540_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3786024422_689419a44a51d6131540_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3786024422_689419a44a51d6131540_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3786024422_689419a44a51d6131540_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-20\\/3786024422_689419a44a51d6131540_original.jpg\",\"real_name\":\"Rick Tsai\",\"real_name_normalized\":\"Rick Tsai\",\"email\":\"rick.github.tsai@gmail.com\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":true,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"USLACKBOT\",\"name\":\"slackbot\",\"deleted\":false,\"status\":null,\"color\":\"757575\",\"real_name\":\"Slack Bot\",\"tz\":null,\"tz_label\":\"Pacific Standard Time\",\"tz_offset\":-28800,\"profile\":{\"first_name\":\"Slack\",\"last_name\":\"Bot\",\"image_24\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_24.png\",\"image_32\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_32.png\",\"image_48\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_48.png\",\"image_72\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_72.png\",\"image_192\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_192.png\",\"real_name\":\"Slack Bot\",\"real_name_normalized\":\"Slack Bot\",\"email\":null},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false}],\"bots\":[],\"svn_rev\":\"34774\",\"min_svn_rev\":34338,\"version_ts\":1424410707,\"min_version_ts\":1423675397,\"cache_version\":\"v5-dog\"}');
	
//-->
</script>		
			
	
	<!-- output_js "core" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34301/js/rollup-core_required_1423607630.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/28787/js/libs_bootstrap_plastic_1415154507.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/13459/js/libs_fastclick_1386624392.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/26610/js/libs_headroom_1412189418.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/33018/js/plastic_1421694645.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34177/js/TS.web_1423268572.js" crossorigin="anonymous"></script>

			<!-- output_js "secondary" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34736/js/rollup-secondary_required_1424377331.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34561/js/TS.storage_1423877607.js" crossorigin="anonymous"></script>

		<!-- output_js "regular" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34002/js/TS.web.comments_1423084072.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34744/js/TS.web.file_1424381594.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/31541/js/libs_codemirror_1419026077.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/34301/js/codemirror_load_1423607627.js" crossorigin="anonymous"></script>

		<script type="text/javascript">
	<!--
		boot_data.page_needs_custom_emoji = true;
		
		boot_data.file = JSON.parse('{\"id\":\"F03P94R1E\",\"created\":1424454550,\"timestamp\":1424454550,\"name\":\"underscore.js\",\"title\":\"underscore.js\",\"mimetype\":\"text\\/plain\",\"filetype\":\"javascript\",\"pretty_type\":\"JavaScript\\/JSON\",\"user\":\"U03P1QJUT\",\"editable\":true,\"size\":45489,\"mode\":\"snippet\",\"is_external\":false,\"external_type\":\"\",\"is_public\":true,\"public_url_shared\":false,\"url\":\"https:\\/\\/slack-files.com\\/files-pub\\/T03P3L30W-F03P94R1E-51f7d19ffb\\/underscore.js\",\"url_download\":\"https:\\/\\/slack-files.com\\/files-pub\\/T03P3L30W-F03P94R1E-51f7d19ffb\\/download\\/underscore.js\",\"url_private\":\"https:\\/\\/files.slack.com\\/files-pri\\/T03P3L30W-F03P94R1E\\/underscore.js\",\"url_private_download\":\"https:\\/\\/files.slack.com\\/files-pri\\/T03P3L30W-F03P94R1E\\/download\\/underscore.js\",\"permalink\":\"https:\\/\\/plygr.slack.com\\/files\\/miranda\\/F03P94R1E\\/underscore.js\",\"permalink_public\":\"https:\\/\\/slack-files.com\\/T03P3L30W-F03P94R1E-51f7d19ffb\",\"edit_link\":\"https:\\/\\/plygr.slack.com\\/files\\/miranda\\/F03P94R1E\\/underscore.js\\/edit\",\"preview\":\"\\/\\/     Underscore.js 1.6.0\\n\\/\\/     http:\\/\\/underscorejs.org\\n\\/\\/     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\\n\\/\\/     Underscore may be freely distributed under the MIT license.\\n\\n(function() {\\n\\n  \\/\\/ Baseline setup\\n  \\/\\/ --------------\\n\",\"preview_highlight\":\"<div class=\\\"sssh-code\\\"><div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/     Underscore.js 1.6.0<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/     http:\\/\\/underscorejs.org<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/     Underscore may be freely distributed under the MIT license.<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span>&#40;<\\/span><span class=\\\"sssh-keyword\\\">function<\\/span><span>&#40;<\\/span><span>&#41;<\\/span> <span>&#123;<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre>  <span class=\\\"sssh-comment\\\">\\/\\/ Baseline setup<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre>  <span class=\\\"sssh-comment\\\">\\/\\/ --------------<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<\\/div>\",\"lines\":1344,\"lines_more\":1334,\"channels\":[\"C03P1SHL5\"],\"groups\":[],\"ims\":[],\"comments_count\":0}');
		boot_data.file.comments = JSON.parse('[]');

		

		var g_editor;

		$(function(){

			var wrap_long_lines = !!TS.model.code_wrap_long_lines;

			g_editor = CodeMirror(function(elt){
				var content = document.getElementById("file_contents");
				content.parentNode.replaceChild(elt, content);
			}, {
				value: $('#file_contents').text(),
				lineNumbers: true,
				matchBrackets: true,
				indentUnit: 4,
				indentWithTabs: true,
				enterMode: "keep",
				tabMode: "shift",
				viewportMargin: Infinity,
				readOnly: true,
				lineWrapping: wrap_long_lines
			});

			$('#file_preview_wrap_cb').bind('change', function(e) {
				TS.model.code_wrap_long_lines = $(this).prop('checked');
				g_editor.setOption('lineWrapping', TS.model.code_wrap_long_lines);
			})

			$('#file_preview_wrap_cb').prop('checked', wrap_long_lines);

			CodeMirror.switchSlackMode(g_editor, 'javascript');
		});

		
		$('#file_comment').css('overflow', 'hidden').autogrow();
	//-->
	</script>

			<script type="text/javascript">TS.boot(boot_data);</script>
	<!-- slack-www191 / 2015-02-20 09:49:44 / v34774 -->

</body>
</html>