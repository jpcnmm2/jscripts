/* 
 var title =Area_check(obj['country'])+' '+' '+flags.get(obj['countryCode']);

 var subtitle ='🍎'+City_ValidCheck(obj['city'])+'-'+'('+ ISP_ValidCheck(obj['org'])+')'+'🌍';

 */

 if ($response.statusCode != 200) {
   $done(null);
 }

 const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
 var city0 = " ";
 var isp0 = " ";
 function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }

 /*function City_ValidCheck(para) {
   if(para) {
   return para
   } 
   else
   {
   return city0
   }
 }
 */
function ENWORD(par) {
  par = par.replace(/[\.\_\-\d]+/g," ")
  let myRequest = {
        url: "http://translate.google.cn/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=" + encodeURI(par),
        method: "GET"
    };
$task.fetch(myRequest).then(response => {
  //console.log($response.body)
        data = response.body
        par = data.split(/[\"]+/g)[1];
        console.log(par);
        return par;
     }, reason =>{
        return par;
   })
}
 function ISP_ValidCheck(para) {
  if(para.indexOf("Oracle Cloud Infrastructure")>-1)
   {
   para = para.replace("Oracle Cloud Infrastructure","甲骨文云服务")
   return para
   }
   if(para=="Amazon.com, Inc."){
   return "亚马逊云服务" 
   }
   if(para.indexOf("AWS")>-1){
    para = para.replace("AWS","亚马逊云服务")
    return para
   }
   if(para.indexOf("Microsoft Azure Cloud") >-1 ){
    para = para.replace("Microsoft Azure Cloud","微软云服务")
    return "微软云服务"
   } 
   else if(para=="Microsoft Corporation"){
   return "微软云服务" 
   }
   else if(para=="Chunghwa Telecom Co. Ltd."){
   return "中华电信" 
   }
   else if(para=="Alibaba.com LLC"){
   return "阿里云服务" 
   }
   else if(para.indexOf("Hong Kong Telecommunications")>-1){
   return "香港电讯有限公司（HKT）" 
   }
   else if(para.indexOf("PCCW IMS")>-1){
   return "电讯盈科（PCCW）" 
   }
   else if(para=="DigitalOcean, LLC"){
   return "数字海洋（DigitalOcean）" 
   }
   else if(para.indexOf("AWS EC2 (us-west")>-1){
   return "亚马逊美西云服务" 
   }
   else if(para.indexOf("AWS EC2 (us-east")>-1){
   return "亚马逊美东云服务" 
   }
   else if(para=="AWS EC2 (ap-northeast-2)"){
   return "亚马逊东北亚云服务" 
   }
   else if(para=="AWS EC2 (ap-southeast-1)"){
   return "亚马逊东南亚云服务"
   }
   else if(para=="Newmedia Express PTE LTD"){
   return "新媒体快递" 
   }
   else if(para=="Taiwan Fixed Network CO., LTD.")   {
   return "台湾固网股份"
   }
   else if(para=="Hostigation")   {
   return "大谷互联网" 
   }
   else if(para=="CL Online network Technology Co., Ltd"){
   return "中联在线网络科技" 
   }
   else if(para=="CodecCloud(HK)Limited"){
   return "编码器云(香港)" 
   }
   else if(para=="RESNET INC DBA of RESIDENTIAL NETWORKING SOLUTIONS LLC")   
   {
   return "RESNET住宅网络解决方案" 
   }
   else if(para=="Hong Kong Broadband Network Ltd")   {
   return "香港宽频网络（HKBN）" 
   }
   else if(para=="ALICLOUD-HK")   {
   return "香港阿里云"
   }
   else if(para.indexOf("Tencent")>-1)   {
   return "腾讯云服务"
   }
   else if(para=="HGC Global Communications Limited")   {
   return "和记环球电讯"
   }
   else if(para=="Eons Data Communications Limited")   {
   return "Eons数据通讯"
   }
   else if(para.indexOf("UCLOUD INFORMATION TECHNOLOGY") > -1 )   {
   return "UCloud信息科技"
   }
   else if(para.indexOf("Virtual Machine Solutions LLC") > -1 )    {
   return "VirMach"
   }
   else if(para.indexOf("Hytron Network Services Limited") > -1 )   {
   return "Hytron网络服务"
   }
   else if(para.indexOf("Globaldata Investments Inc") > -1 )   {
   return "Globaldata"
   }
   else if(para=="Quicksilver Express Courier, Inc.")   {
   return "快银快递"
   }
   else if(para=="Oracle Corporation")   {
   return "甲骨文云服务"
   }
   else if(para.indexOf("Oracle Public Cloud")>-1)   {
   para = para.replace("Oracle Public Cloud","甲骨文云服务")
   return para
   }
   else if(para.indexOf("Networks Limited")>-1){
    para = para.replace("Networks Limited","网络技术有限公司")
    return para
   }
   else if(para.indexOf("Root Technologies")>-1){
    return "Root Networks"
   }
   else if(para=="Microsoft Azure Cloud (eastasia)"){
   return "微软云服务"
   }
   else if(para=="Microsoft Corporation"){
   return "微软云服务" 
   }
   else if(para=="Chunghwa Telecom Co. Ltd."){
   return "中华电信" 
   }
   else if(para=="Alibaba.com LLC"){
   return "阿里云服务" 
   }
   else if(para=="AWS EC2 (us-west-2)"){
   return "亚马逊云服务" 
   }
   else if(para=="Newmedia Express PTE LTD"){
   return "新媒体快递有限公司" 
   }
   else if(para=="Taiwan Fixed Network")   {
   return "台湾固网股份有限公司" 
   }
   else if(para=="Eons Data Communications Limited")   {
   return "Eons数据通讯"
   }
   else if(para.indexOf("UCLOUD INFORMATION TECHNOLOGY") > -1 )   {
   return "UCloud信息科技"
   }
   else if(para.indexOf("Virtual Machine Solutions LLC") > -1 )   {
   return "VirMach"
   }
   else if(para.indexOf("Hytron Network Services Limited") > -1 )   {
   return "Hytron网络服务"
   }
   
   else if(para.indexOf("Globaldata Investments Inc") > -1 )   {
   return "Globaldata"
   }
   else if (para=="Oracle Corporation")   {
   return "甲骨文公司" 
   }
   else if(para=="LoadEdge Limited")   {
   return "LoadEdge" 
   }
   else
   {
   return para
   }
 }

 function Area_check(para) {
   if(para=="中华民国"){
   return "台湾省"
   } 
   else if(para=="台湾"){
   return "台湾省"
   } 
   else
   {
   return para
   }
 }
 function City_ValidCheck(regionName) {
   if(regionName=="Kowloon"){
   return "九龙"
   } 
   else if(regionName=="Central and Western District"){
   return "中西部"
   }
   else if(regionName=="臺灣省 or 台灣省"){
   return "台湾省"
   } 
   else if(regionName=="Moscow"){
   return "莫斯科"
   } 
   else if(regionName=="新加坡"){
   return "新加坡"
   } 
   else if(regionName=="Tuen Mun"){
   return "屯门"
   }
   else if(regionName=="Palo Alto"){
   return "帕洛阿尔托"
   } 
   else if(regionName=="Central"){
   return "中心"
   }
   else if(regionName=="Sha Tin"){
   return "沙田"
   }
  else if(regionName=="Shatin"){
   return "沙田"
   }
  else if(regionName=="Sai Kung District"){
   return "西贡区"
   }
  else if(regionName=="Tseung Kwan O"){
   return "将军澳"
  }
  else if(regionName.indexOf("Tsuen Wan") > -1 ) { return "将军澳" }
  else if(regionName=="Tai Wai"){
   return "大围村"
   }
   else if(regionName=="San Jose")
   {
   return "圣何塞"
   }
   else if(regionName=="Fremont")
   {
   return "弗里蒙特"
   }
   else if(regionName=="Ashburn")
   {
   return "阿什本"
   }
   else if(regionName=="Heiwajima")
   {
   return "平和岛"
   }
   else if(regionName=="Tokyo")
   {
   return "东京"
   }
   else if(regionName=="Osaka")
   {
   return "大阪"
   }
   else if(regionName=="Taichung")
   {
   return "台中"
   }
   else 
   {
   return regionName
   }
 }
 function Org_ValidCheck(para) { 
   if(para.indexOf("Oracle Cloud Infrastructure")>-1)
   {
   para = para.replace("Oracle Cloud Infrastructure","甲骨文云服务")
   return para
   }
   if(para.indexOf("AWS")>-1){
    para = para.replace("AWS","亚马逊云服务")
    return para
   }
   if(para.indexOf("Microsoft Azure Cloud") >-1 ){
    para = para.replace("Microsoft Azure Cloud","微软云服务")
    return "微软云服务"
   } 
   else if(para=="Microsoft Corporation"){
   return "微软云服务" 
   }
   else if(para=="Chunghwa Telecom Co. Ltd."){
   return "中华电信" 
   }
   else if(para=="Alibaba.com LLC"){
   return "阿里云服务" 
   }
   else if(para.indexOf("Hong Kong Telecommunications") >-1 ){
   return "香港电讯有限公司（HKT）" 
   }
   else if(para=="DigitalOcean, LLC"){
   return "数字海洋（DigitalOcean）" 
   }
   else if(para.indexOf("AWS EC2 (us-west")>-1){
   return "亚马逊美西云服务" 
   }
   else if(para.indexOf("AWS EC2 (us-east")>-1){
   return "亚马逊美东云服务" 
   }
   else if(para=="AWS EC2 (ap-northeast-2)"){
   return "亚马逊东北亚云服务" 
   }
   else if(para=="AWS EC2 (ap-southeast-1)"){
   return "亚马逊东南亚云服务"
   }
   else if(para=="Newmedia Express PTE LTD"){
   return "新媒体快递" 
   }
   else if(para=="Taiwan Fixed Network CO., LTD.")   {
   return "台湾固网股份"
   }
   else if(para=="Hostigation")   {
   return "大谷互联网" 
   }
   else if(para=="CL Online network Technology Co., Ltd"){
   return "中联在线网络科技" 
   }
   else if(para=="CodecCloud(HK)Limited"){
   return "编码器云(香港)" 
   }
   else if(para=="RESNET INC DBA of RESIDENTIAL NETWORKING SOLUTIONS LLC")   
   {
   return "RESNET住宅网络解决方案" 
   }
   else if(para=="Hong Kong Broadband Network Ltd")   {
   return "香港宽频网络（HKBN）" 
   }
   else if(para=="ALICLOUD-HK")   {
   return "香港阿里云"
   }
   else if(para.indexOf("Tencent")>-1)   {
   return "腾讯云服务"
   }
   else if(para=="HGC Global Communications Limited")   {
   return "和记环球电讯"
   }
   else if(para=="Eons Data Communications Limited")   {
   return "Eons数据通讯"
   }
   else if(para.indexOf("UCLOUD INFORMATION TECHNOLOGY") > -1 )   {
   return "UCloud信息科技"
   }
   else if(para.indexOf("Virtual Machine Solutions LLC") > -1 )    {
   return "VirMach"
   }
   else if(para.indexOf("Hytron Network Services Limited") > -1 )   {
   return "Hytron网络服务"
   }
   else if(para.indexOf("Globaldata Investments Inc") > -1 )   {
   return "Globaldata"
   }
   else if(para=="Quicksilver Express Courier, Inc.")   {
   return "快银快递"
   }
   else if(para=="Oracle Corporation")   {
   return "甲骨文云服务"
   }
   else if(para.indexOf("Oracle Public Cloud")>-1)   {
   para = para.replace("Oracle Public Cloud","甲骨文云服务")
   return para
   }
   else if(para.indexOf("Networks Limited")>-1){
    para = para.replace("Networks Limited","网络技术有限公司")
    return para
   }
   else if(para.indexOf("Root Technologies")>-1){
    return "Root Networks"
   }
   else
   {
   return para
   }
 }

 var flags = new Map([[ "AC" , "🇦🇨" ] , [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "HK" , "🇭🇰" ] , [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JP" , "🇯🇵" ] , [ "KR" , "🇰🇷" ] , [ "MO" , "🇲🇴" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NL" , "🇳🇱" ] , [ "PH" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇨🇳" ] , [ "UA" , "🇺🇦" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ] , [ "ZA" , "🇿🇦" ]])
 var body = $response.body;
 var obj = JSON.parse(body);
 var title = flags.get(obj['countryCode'])+' '+ City_ValidCheck(obj['city']);
var subtitle = Org_ValidCheck(obj['isp']) + " ➠ "+ obj['country']; 
if  (obj['isp'] == "") { 
    subtitle = Org_ValidCheck(obj['org']) + " ➠ "+ obj['country']; 
}
var ip = obj['query'];
/*
var description = '服务商:'+ISP_ValidCheck(obj['isp']) +'\n'+'DNS:'+ obj['reverse'] +'\n'+'地区:' +City_ValidCheck(obj['regionName'])+obj['district']+'\n' +'洲际:'+obj['continent'] +'\n'+'IP:'+obj['query'] +'\n' +'托管:'+ obj['hosting'];
*/
var description = '商家:'+ISP_ValidCheck(obj['org']) +'\n' +'国家:'+ obj['country'] +'\n'+'地区:' +City_ValidCheck(obj['regionName'])+'\n'+'城市:'+ City_ValidCheck(obj['city'])+'\n' +'IP:'+obj['query'];

$done({title, subtitle, ip, description});
