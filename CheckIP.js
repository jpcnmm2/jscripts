/* 
 var title =Area_check(obj['country'])+' '+' '+flags.get(obj['countryCode']);

 var subtitle ='๐'+City_ValidCheck(obj['city'])+'-'+'('+ ISP_ValidCheck(obj['org'])+')'+'๐';

 */

 if ($response.statusCode != 200) {
   $done(null);
 }

 const emojis= ['๐','๐ฒ','โ ๏ธ','๐','๐ต','๐ฆ','๐','๐ฅ','๐บ','๐ง','๐ฌ','๐ฆ','๐','โณ๏ธ','๐ด','๐ค','๐ฝ','๐ค','๐', '๐บ', '๐', '๐ถ', '๐ผ','๐', '๐ฅ']
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
   if(para=="Microsoft Azure Cloud (eastasia)"){
   return "ๅพฎ่ฝฏไบๆๅก"
   } 
   else if(para=="Chunghwa Telecom Co. Ltd."){
   return "ไธญๅ็ตไฟก" 
   }
   else if(para=="Alibaba.com LLC"){
   return "้ฟ้ไบๆๅก" 
   }
   else if(para=="Hong Kong Telecommunications (HKT) Limited"){
   return "้ฆๆธฏ็ต่ฎฏๆ้ๅฌๅธ" 
   }
   else if(para=="DigitalOcean, LLC"){
   return "ๆฐๅญๆตทๆดๆ้ๅฌๅธ" 
   }
   else if(para=="AWS EC2 (us-west-2)"){
   return "ไบ้ฉฌ้ไบๆๅก" 
   }
   else if(para=="Newmedia Express PTE LTD"){
   return "ๆฐๅชไฝๅฟซ้ๆ้ๅฌๅธ" 
   }
   else if(para=="Taiwan Fixed Network")   {
   return "ๅฐๆนพๅบ็ฝ่กไปฝๆ้ๅฌๅธ" 
   }
   else if (para=="Oracle Corporation")   {
   return "็ฒ้ชจๆๅฌๅธ" 
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
   if(para=="ไธญๅๆฐๅฝ"){
   return "ๅฐๆนพ็"
   } 
   else if(para=="ๅฐๆนพ"){
   return "ๅฐๆนพ็"
   } 
   else
   {
   return para
   }
 }
 function City_ValidCheck(regionName) {
   if(regionName=="Kowloon"){
   return "ไน้พ"
   } 
   else if(regionName=="Central and Western District"){
   return "ไธญ่ฅฟ้จ"
   }
   else if(regionName=="่บ็ฃ็ or ๅฐ็ฃ็"){
   return "ๅฐๆนพ็"
   } 
   else if(regionName=="Moscow"){
   return "่ซๆฏ็ง"
   } 
   else if(regionName=="ๆฐๅ ๅก"){
   return "ๆฐๅ ๅก"
   } 
   else if(regionName=="Tuen Mun"){
   return "ๅฑฏ้จ"
   }
   else if(regionName=="Palo Alto"){
   return "ๅธๆด้ฟๅฐๆ"
   } 
   else if(regionName=="Central"){
   return "ไธญๅฟ"
   }
   else if(regionName=="Sha Tin"){
   return "ๆฒ็ฐ"
   }
  else if(regionName=="Shatin"){
   return "ๆฒ็ฐ"
   }
  else if(regionName=="Tai Wai"){
   return "ๅคงๅดๆ"
   }
   else if(regionName=="San Jose")
   {
   return "ๅฃไฝๅก"
   }
   else if(regionName=="Fremont")
   {
   return "ๅผ้่็น"
   }
   else if(regionName=="Ashburn")
   {
   return "้ฟไปๆฌ"
   }
   else if(regionName=="Heiwajima")
   {
   return "ๅนณๅๅฒ"
   }
   else if(regionName=="Tokyo")
   {
   return "ไธไบฌ"
   }
   else if(regionName=="Osaka")
   {
   return "ๅคง้ช"
   }
   else if(regionName=="Taichung")
   {
   return "ๅฐไธญ"
   }
   else 
   {
   return regionName
   }
 }
 function Org_ValidCheck(para) { 
   if(para.indexOf("Oracle Cloud Infrastructure")>-1)
   {
   para = para.replace("Oracle Cloud Infrastructure","็ฒ้ชจๆไบๆๅก")
   return para
   }
   if(para.indexOf("AWS")>-1){
    para = para.replace("AWS","ไบ้ฉฌ้ไบๆๅก")
    return para
   }
   if(para=="Microsoft Azure Cloud (eastasia)"){
   return "ๅพฎ่ฝฏไบๆๅก"
   } 
   else if(para=="Chunghwa Telecom Co. Ltd."){
   return "ไธญๅ็ตไฟก" 
   }
   else if(para=="Alibaba.com LLC"){
   return "้ฟ้ไบๆๅก" 
   }
   else if(para=="Hong Kong Telecommunications (HKT) Limited"){
   return "้ฆๆธฏ็ต่ฎฏๆ้ๅฌๅธ" 
   }
   else if(para=="DigitalOcean, LLC"){
   return "ๆฐๅญๆตทๆด" 
   }
   else if(para.indexOf("AWS EC2 (us-west")>-1){
   return "ไบ้ฉฌ้็พ่ฅฟไบๆๅก" 
   }
   else if(para.indexOf("AWS EC2 (us-east")>-1){
   return "ไบ้ฉฌ้็พไธไบๆๅก" 
   }
   else if(para=="AWS EC2 (ap-northeast-2)"){
   return "ไบ้ฉฌ้ไธๅไบไบๆๅก" 
   }
   else if(para=="AWS EC2 (ap-southeast-1)"){
   return "ไบ้ฉฌ้ไธๅไบไบๆๅก"
   }
   else if(para=="Newmedia Express PTE LTD"){
   return "ๆฐๅชไฝๅฟซ้" 
   }
   else if(para=="Taiwan Fixed Network CO., LTD.")   {
   return "ๅฐๆนพๅบ็ฝ่กไปฝ"
   }
   else if(para=="Hostigation")   {
   return "ๅคง่ฐทไบ่็ฝ" 
   }
   else if(para=="CL Online network Technology Co., Ltd"){
   return "ไธญ่ๅจ็บฟ็ฝ็ป็งๆ" 
   }
   else if(para=="CodecCloud(HK)Limited"){
   return "็ผ็ ๅจไบ(้ฆๆธฏ)" 
   }
   else if(para=="RESNET INC DBA of RESIDENTIAL NETWORKING SOLUTIONS LLC")   
   {
   return "RESNETไฝๅฎ็ฝ็ป่งฃๅณๆนๆก" 
   }
   else if(para=="Hong Kong Broadband Network Ltd")  
   {
   return "้ฆๆธฏๅฎฝ้ข็ฝ็ป" 
   }
   else if(para=="ALICLOUD-HK")
   {
   return "้ฆๆธฏ้ฟ้ไบ"
   }
   else if(para.indexOf("Tencent")>-1)
   {
   return "่พ่ฎฏไบๆๅก"
   }
   else if(para=="HGC Global Communications Limited")
   {
   return "ๅ่ฎฐ็ฏ็็ต่ฎฏ"
   }
   else if(para=="Quicksilver Express Courier, Inc.")
   {
   return "ๅฟซ้ถๅฟซ้"
   }
   else if(para=="Oracle Corporation")
   {
   return "็ฒ้ชจๆไบๆๅก"
   }
   else if(para.indexOf("Oracle Public Cloud")>-1)
   {
   para = para.replace("Oracle Public Cloud","็ฒ้ชจๆไบๆๅก")
   return para
   }
   else if(para.indexOf("Networks Limited")>-1){
    para = para.replace("Networks Limited","็ฝ็ปๆๆฏๆ้ๅฌๅธ")
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

 var flags = new Map([[ "AC" , "๐ฆ๐จ" ] , [ "AF" , "๐ฆ๐ซ" ] , [ "AI" , "๐ฆ๐ฎ" ] , [ "AL" , "๐ฆ๐ฑ" ] , [ "AM" , "๐ฆ๐ฒ" ] , [ "AQ" , "๐ฆ๐ถ" ] , [ "AR" , "๐ฆ๐ท" ] , [ "AS" , "๐ฆ๐ธ" ] , [ "AT" , "๐ฆ๐น" ] , [ "AU" , "๐ฆ๐บ" ] , [ "AW" , "๐ฆ๐ผ" ] , [ "AX" , "๐ฆ๐ฝ" ] , [ "AZ" , "๐ฆ๐ฟ" ] , [ "BB" , "๐ง๐ง" ] , [ "BD" , "๐ง๐ฉ" ] , [ "BE" , "๐ง๐ช" ] , [ "BF" , "๐ง๐ซ" ] , [ "BG" , "๐ง๐ฌ" ] , [ "BH" , "๐ง๐ญ" ] , [ "BI" , "๐ง๐ฎ" ] , [ "BJ" , "๐ง๐ฏ" ] , [ "BM" , "๐ง๐ฒ" ] , [ "BN" , "๐ง๐ณ" ] , [ "BO" , "๐ง๐ด" ] , [ "BR" , "๐ง๐ท" ] , [ "BS" , "๐ง๐ธ" ] , [ "BT" , "๐ง๐น" ] , [ "BV" , "๐ง๐ป" ] , [ "BW" , "๐ง๐ผ" ] , [ "BY" , "๐ง๐พ" ] , [ "BZ" , "๐ง๐ฟ" ] , [ "CA" , "๐จ๐ฆ" ] , [ "CF" , "๐จ๐ซ" ] , [ "CH" , "๐จ๐ญ" ] , [ "CK" , "๐จ๐ฐ" ] , [ "CL" , "๐จ๐ฑ" ] , [ "CM" , "๐จ๐ฒ" ] , [ "CN" , "๐จ๐ณ" ] , [ "CO" , "๐จ๐ด" ] , [ "CP" , "๐จ๐ต" ] , [ "CR" , "๐จ๐ท" ] , [ "CU" , "๐จ๐บ" ] , [ "CV" , "๐จ๐ป" ] , [ "CW" , "๐จ๐ผ" ] , [ "CX" , "๐จ๐ฝ" ] , [ "CY" , "๐จ๐พ" ] , [ "CZ" , "๐จ๐ฟ" ] , [ "DE" , "๐ฉ๐ช" ] , [ "DG" , "๐ฉ๐ฌ" ] , [ "DJ" , "๐ฉ๐ฏ" ] , [ "DK" , "๐ฉ๐ฐ" ] , [ "DM" , "๐ฉ๐ฒ" ] , [ "DO" , "๐ฉ๐ด" ] , [ "DZ" , "๐ฉ๐ฟ" ] , [ "EA" , "๐ช๐ฆ" ] , [ "EC" , "๐ช๐จ" ] , [ "EE" , "๐ช๐ช" ] , [ "EG" , "๐ช๐ฌ" ] , [ "EH" , "๐ช๐ญ" ] , [ "ER" , "๐ช๐ท" ] , [ "ES" , "๐ช๐ธ" ] , [ "ET" , "๐ช๐น" ] , [ "EU" , "๐ช๐บ" ] , [ "FI" , "๐ซ๐ฎ" ] , [ "FJ" , "๐ซ๐ฏ" ] , [ "FK" , "๐ซ๐ฐ" ] , [ "FM" , "๐ซ๐ฒ" ] , [ "FO" , "๐ซ๐ด" ] , [ "FR" , "๐ซ๐ท" ] , [ "GA" , "๐ฌ๐ฆ" ] , [ "GB" , "๐ฌ๐ง" ] , [ "HK" , "๐ญ๐ฐ" ] , [ "ID" , "๐ฎ๐ฉ" ] , [ "IE" , "๐ฎ๐ช" ] , [ "IL" , "๐ฎ๐ฑ" ] , [ "IM" , "๐ฎ๐ฒ" ] , [ "IN" , "๐ฎ๐ณ" ] , [ "IS" , "๐ฎ๐ธ" ] , [ "IT" , "๐ฎ๐น" ] , [ "JP" , "๐ฏ๐ต" ] , [ "KR" , "๐ฐ๐ท" ] , [ "MO" , "๐ฒ๐ด" ] , [ "MX" , "๐ฒ๐ฝ" ] , [ "MY" , "๐ฒ๐พ" ] , [ "NL" , "๐ณ๐ฑ" ] , [ "PH" , "๐ต๐ญ" ] , [ "RO" , "๐ท๐ด" ] , [ "RS" , "๐ท๐ธ" ] , [ "RU" , "๐ท๐บ" ] , [ "RW" , "๐ท๐ผ" ] , [ "SA" , "๐ธ๐ฆ" ] , [ "SB" , "๐ธ๐ง" ] , [ "SC" , "๐ธ๐จ" ] , [ "SD" , "๐ธ๐ฉ" ] , [ "SE" , "๐ธ๐ช" ] , [ "SG" , "๐ธ๐ฌ" ] , [ "TH" , "๐น๐ญ" ] , [ "TN" , "๐น๐ณ" ] , [ "TO" , "๐น๐ด" ] , [ "TR" , "๐น๐ท" ] , [ "TV" , "๐น๐ป" ] , [ "TW" , "๐จ๐ณ" ] , [ "UA" , "๐บ๐ฆ" ] , [ "UK" , "๐ฌ๐ง" ] , [ "UM" , "๐บ๐ฒ" ] , [ "US" , "๐บ๐ธ" ] , [ "UY" , "๐บ๐พ" ] , [ "UZ" , "๐บ๐ฟ" ] , [ "VA" , "๐ป๐ฆ" ] , [ "VE" , "๐ป๐ช" ] , [ "VG" , "๐ป๐ฌ" ] , [ "VI" , "๐ป๐ฎ" ] , [ "VN" , "๐ป๐ณ" ] , [ "ZA" , "๐ฟ๐ฆ" ]])
 var body = $response.body;
 var obj = JSON.parse(body);
 var title = flags.get(obj['countryCode'])+' '+ City_ValidCheck(obj['city']);
var subtitle = Org_ValidCheck(obj['org']) + " โ  "+ obj['country'];
var ip = obj['query'];
/*
var description = 'ๆๅกๅ:'+ISP_ValidCheck(obj['isp']) +'\n'+'DNS:'+ obj['reverse'] +'\n'+'ๅฐๅบ:' +City_ValidCheck(obj['regionName'])+obj['district']+'\n' +'ๆดฒ้:'+obj['continent'] +'\n'+'IP:'+obj['query'] +'\n' +'ๆ็ฎก:'+ obj['hosting'];
*/
var description = 'ๆๅกๅ:'+ISP_ValidCheck(obj['isp']) +'\n' +'ๅฝๅฎถ:'+ obj['country'] +'\n'+'ๅฐๅบ:' +City_ValidCheck(obj['regionName'])+'\n'+'ๅๅธ:'+ City_ValidCheck(obj['city'])+'\n' +'IP:'+obj['query'];

$done({title, subtitle, ip, description});
