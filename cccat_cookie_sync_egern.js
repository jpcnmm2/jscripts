/**
名称:CCCAT_Cookie更新到青龙面板
描述:自动更新CCCAT_Cookie
作者:@Lxi0707
支持:Quantumult-X surge loon

* 在BoxJS中设置青龙同步API参数
* 使用edit命令，要使用json格式，不能使用数组。
* Egern不支持eval函数

TG频道:https://t.me/LXi_Collection_hall
TG群聊:https://t.me/LxiCollectionhallChat


===================|调试区|====================

#quantumultx

[rewrite_local]
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/Lxi0707/Scripts/refs/heads/X/pt_key.js

#Surge
#!name=JD-Cookie
#!desc=更新cookie

[Script]
JD-Cookie = type=http-request, pattern=^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig), script-path=https://raw.githubusercontent.com/Lxi0707/Scripts/refs/heads/X/pt_key.js, requires-body=false

#Loon

http-request ^https?:\/\/cccat\.io\/user\/index\.php script-path=https://raw.githubusercontent.com/jpcnmm2/jscripts/refs/heads/main/cccat_cookie_update_egern.js

[MITM]
hostname = %APPEND% cccat.io
*/

//获取cookie
const cookie = $request.headers['Cookie'] || $request.headers['cookie'];
//console.log(`获取的Cookie: ${cookie}`);

/*
青龙 docker 每日自动同步 boxjs cookie
40 * * * https://raw.githubusercontent.com/dompling/Script/master/jd/ql_cookie_sync.js
 */

const $ = new API("ql", true);

const title = "🐯Cookie更新到青龙";

//const jd_cookies = JSON.parse($.read("#CookiesJD") || "[]");


export default async function (ctx) {

	try {
	  $.ql_config = JSON.parse($.read("#ql"));
	} catch (e) {
	  $.ql_config = {};
	}
	$.ql_url = $.ql_config.ip;
	if ($.ql_url && !$.ql_url.match(/^(http|https)/))
	      $.ql_url = `http://${$.ql_url}`;
	$.log(`地址：${$.ql_url}`);
	
	$.ql_env = $.ql_config.ENV_KEY;
	$.ql_id = $.ql_config.client_id;
	$.ql_secret = $.ql_config.client_secret;
	
	ql_token = '';	
	
	
  resp = await ctx.http.get(`${$.ql_url}/open/auth/token?client_id=${$.ql_id}&client_secret=${$.ql_secret}`, { headers:{"Content-Type": `application/json;charset=UTF-8`}});
  const respdata = await resp.json();
  if (respdata.code ===200) {
	  $.log(`登陆成功`);
	  const ql_token = respdata.data.token;
  } else {
	  $.log(respdata);
	  $.log(`登陆失败：${respdata.message}`);
  }

  console.log(`=======================查询环境变量=======================`);
  resp = await ctx.http.get(`${$.ql_url}/open/envs?searchValue=${$.ql_env}`, { headers:{"Content-Type": `application/json;charset=UTF-8`, "Authorization": `Bearer ${ql_token}`}});
  resp = await resp.json();
  const id = resp.data[0].id;
  
  const CCCAT_cookie = {"name":"CCCAT_COOKIE", "value":cookie, "id":id,"remarks":""}
  //console.log(CCCAT_cookie);

  console.log(`=======================更新环境变量=======================`);
  resp = await ctx.http.put(`${$.ql_url}/open/envs`, {headers:{"Content-Type": `application/json;charset=UTF-8`, "Authorization": `Bearer ${ql_token}`}, body: `${CCCAT_cookie}`});
  resp = await resp.json();
  console.log(resp);
  
  if (resp.code == 200) {  
     rescron = await ctx.http.get(`${$.ql_url}/open/crons?searchValue=autocheckin`, { headers:{"Content-Type": `application/json;charset=UTF-8`, "Authorization": `Bearer ${ql_token}`}});
  rescron = await respcron.json();
  console.log("任务查询结果：");
  console.log(rescron);
    
  const taskIDs = rescron.data.data.map((item) => item.id);
  console.log("任务列表：");
  console.log(taskIDs);
    
  resp =  await ctx.http.put(`${$.ql_url}/open/envs`, {headers:{"Content-Type": `application/json;charset=UTF-8`, "Authorization": `Bearer ${ql_token}`}, body: `${taskIDs}`});
  resrun = await resp.json();	  
  console.log("执行响应：")
  console.log(resrun)
  return $.notify(title, '更新成功🎉', ``);
 } else {
  return $.notify(title, "更新失败❌，请重试！", "");
 } 

}

/* prettier-ignore */
function ENV(){const isJSBox=typeof require=="function"&&typeof $jsbox!="undefined";return{isQX:typeof $task!=="undefined",isLoon:typeof $loon!=="undefined",isSurge:typeof $httpClient!=="undefined"&&typeof $utils!=="undefined",isBrowser:typeof document!=="undefined",isNode:typeof require=="function"&&!isJSBox,isJSBox,isRequest:typeof $request!=="undefined",isScriptable:typeof importModule!=="undefined",isShadowrocket:"undefined"!==typeof $rocket,isStash:"undefined"!==typeof $environment&&$environment["stash-version"]}}

/* function ENV(){
	const isJSBox=typeof require=="function"&&typeof $jsbox!="undefined";	
	const getEnv = () =>
    "undefined" != typeof $environment && $environment["surge-version"]
      ? "Surge"
      : "undefined" != typeof $environment && $environment["stash-version"]
      ? "Stash"
      : "undefined" != typeof document
      ? "Browser"
	  : eval('typeof require=="function"&&!isJSBox')
      ? "Node.js"
	  : "undefined" != typeof $request
      ? "Request"
	  : "undefined" != typeof importModule
      ? "Scriptable"
      : "undefined" != typeof $task
      ? "Quantumult X"
      : "undefined" != typeof $loon
      ? "Loon"
      : "undefined" != typeof $rocket
      ? "Shadowrocket"
//      : void 0,
      : "Surge",
	  
	  isQX = () => "Quantumult X" === getEnv(),
	  isLoon = () => "Loon" === getEnv(),
	  isSurge = () => "Surge" === getEnv(),
	  isBrowser = () => "Browser" === getEnv(),
	  isNode = () => "Node.js" === getEnv(),
	  isRequest = () => "Request" === getEnv(),
	  isScriptable = () => "Scriptable" === getEnv(),
	  isStash = () => "Stash" === getEnv(),
	  isShadowrocket = () => "Shadowrocket" === getEnv();
	
	return{isQX,isLoon,isSurge,isBrowser,isNode,isJSBox,isRequest,isScriptable,isShadowrocket,isStash}		
} */

/* prettier-ignore */
function HTTP(defaultOptions={baseURL:""}){const{isQX,isLoon,isSurge,isScriptable,isNode,isBrowser,isShadowrocket,isStash,}=ENV();const methods=["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"];const URL_REGEX=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;function send(method,options){options=typeof options==="string"?{url:options}:options;const baseURL=defaultOptions.baseURL;if(baseURL&&!URL_REGEX.test(options.url||"")){options.url=baseURL?baseURL+options.url:options.url}if(options.body&&options.headers&&!options.headers["Content-Type"]){options.headers["Content-Type"]="application/x-www-form-urlencoded"}options={...defaultOptions,...options};const timeout=options.timeout;const events={...{onRequest:()=>{},onResponse:(resp)=>resp,onTimeout:()=>{},},...options.events,};events.onRequest(method,options);let worker;if(isQX){worker=$task.fetch({method,...options})}else if(isLoon||isSurge||isNode||isShadowrocket||isStash){worker=new Promise((resolve,reject)=>{const request=isNode?require("request"):$httpClient;request[method.toLowerCase()](options,(err,response,body)=>{if(err)reject(err);else resolve({statusCode:response.status||response.statusCode,headers:response.headers,body,})})})}else if(isScriptable){const request=new Request(options.url);request.method=method;request.headers=options.headers;request.body=options.body;worker=new Promise((resolve,reject)=>{request.loadString().then((body)=>{resolve({statusCode:request.response.statusCode,headers:request.response.headers,body,})}).catch((err)=>reject(err))})}else if(isBrowser){worker=new Promise((resolve,reject)=>{fetch(options.url,{method,headers:options.headers,body:options.body,}).then((response)=>response.json()).then((response)=>resolve({statusCode:response.status,headers:response.headers,body:response.data,})).catch(reject)})}let timeoutid;const timer=timeout?new Promise((_,reject)=>{timeoutid=setTimeout(()=>{events.onTimeout();return reject(`${method}URL:${options.url}exceeds the timeout ${timeout}ms`)},timeout)}):null;return(timer?Promise.race([timer,worker]).then((res)=>{clearTimeout(timeoutid);return res}):worker).then((resp)=>events.onResponse(resp))}const http={};methods.forEach((method)=>(http[method.toLowerCase()]=(options)=>send(method,options)));return http}
/* prettier-ignore */
function API(name="untitled",debug=false){const{isQX,isLoon,isSurge,isScriptable,isNode,isShadowrocket,isStash,isJSBox}=ENV();return new(class{constructor(name,debug){this.name=name;this.debug=debug;this.http=HTTP();this.env=ENV();this.node=(()=>{if(isNode){const fs=require("fs");return{fs}}else{return null}})();this.initCache();const delay=(t,v)=>new Promise(function(resolve){setTimeout(resolve.bind(null,v),t)});Promise.prototype.delay=function(t){return this.then(function(v){return delay(t,v)})}}initCache(){if(isQX)this.cache=JSON.parse($prefs.valueForKey(this.name)||"{}");if(isLoon||isSurge||isStash||isShadowrocket)this.cache=JSON.parse($persistentStore.read(this.name)||"{}");if(isNode){let fpath="root.json";if(!this.node.fs.existsSync(fpath)){this.node.fs.writeFileSync(fpath,JSON.stringify({}),{flag:"wx"},(err)=>console.log(err))}this.root={};fpath=`${this.name}.json`;if(!this.node.fs.existsSync(fpath)){this.node.fs.writeFileSync(fpath,JSON.stringify({}),{flag:"wx"},(err)=>console.log(err));this.cache={}}else{this.cache=JSON.parse(this.node.fs.readFileSync(`${this.name}.json`))}}}persistCache(){const data=JSON.stringify(this.cache,null,2);if(isQX)$prefs.setValueForKey(data,this.name);if(isLoon||isSurge||isStash||isShadowrocket)$persistentStore.write(data,this.name);if(isNode){this.node.fs.writeFileSync(`${this.name}.json`,data,{flag:"w"},(err)=>console.log(err));this.node.fs.writeFileSync("root.json",JSON.stringify(this.root,null,2),{flag:"w"},(err)=>console.log(err))}}write(data,key){this.log(`SET ${key}`);if(key.indexOf("#")!==-1){key=key.substr(1);if(isLoon||isSurge||isStash||isShadowrocket){return $persistentStore.write(data,key)}if(isQX){return $prefs.setValueForKey(data,key)}if(isNode){this.root[key]=data}}else{this.cache[key]=data}this.persistCache()}read(key){this.log(`READ ${key}`);if(key.indexOf("#")!==-1){key=key.substr(1);if(isLoon||isSurge||isStash||isShadowrocket){return $persistentStore.read(key)}if(isQX){return $prefs.valueForKey(key)}if(isNode){return this.root[key]}}else{return this.cache[key]}}delete(key){this.log(`DELETE ${key}`);if(key.indexOf("#")!==-1){key=key.substr(1);if(isLoon||isSurge||isStash||isShadowrocket){return $persistentStore.write(null,key)}if(isQX){return $prefs.removeValueForKey(key)}if(isNode){delete this.root[key]}}else{delete this.cache[key]}this.persistCache()}notify(title,subtitle="",content="",options={}){const openURL=options["open-url"];const mediaURL=options["media-url"];if(isQX)$notify(title,subtitle,content,options);if(isSurge){$notification.post(title,subtitle,content+`${mediaURL?"\n多媒体:"+mediaURL:""}`,{url:openURL})}if(isLoon||isStash||isShadowrocket){let opts={};if(openURL)opts["openUrl"]=openURL;if(mediaURL)opts["mediaUrl"]=mediaURL;if(JSON.stringify(opts)==="{}"){$notification.post(title,subtitle,content)}else{$notification.post(title,subtitle,content,opts)}}if(isNode||isScriptable){const content_=content+(openURL?`\n点击跳转:${openURL}`:"")+(mediaURL?`\n多媒体:${mediaURL}`:"");if(isJSBox){const push=require("push");push.schedule({title:title,body:(subtitle?subtitle+"\n":"")+content_,})}else{console.log(`${title}\n${subtitle}\n${content_}\n\n`)}}}log(msg){if(this.debug)console.log(`[${this.name}]LOG:${this.stringify(msg)}`)}info(msg){console.log(`[${this.name}]INFO:${this.stringify(msg)}`)}error(msg){console.log(`[${this.name}]ERROR:${this.stringify(msg)}`)}wait(millisec){return new Promise((resolve)=>setTimeout(resolve,millisec))}done(value={}){if(isQX||isLoon||isSurge||isStash||isShadowrocket){$done(value)}else if(isNode&&!isJSBox){if(typeof $context!=="undefined"){$context.headers=value.headers;$context.statusCode=value.statusCode;$context.body=value.body}}}stringify(obj_or_str){if(typeof obj_or_str==="string"||obj_or_str instanceof String)return obj_or_str;else try{return JSON.stringify(obj_or_str,null,2)}catch(err){return"[object Object]"}}})(name,debug)}
