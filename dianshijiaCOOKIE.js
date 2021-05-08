//独立COOKIE文件     ck在``里面填写，多账号换行
let DsjurlVal= `{"Accept-Encoding":"gzip, deflate","AppVerCode":"187","userid":"b92c823ae4963760e80190a7d6847ef6","language":"zh_CN","Host":"api.gaoqingdianshi.com","AppVerName":"1.84","HwDevice":"Iphone","hwModel":"iPhone11,8","hwBrand":"iPhone","HwId":"3bc77e1a77904d91bc974a0b4b5f96aa","countryCode":"","ssid":"","Connection":"keep-alive","uuid":"3bc77e1a77904d91bc974a0b4b5f96aa","Cache-Control":"no-cache","ispId":"","Accept-Language":"zh-Hans;q=1","User-Agent":"Dsj/Client1.2","MarketChannelName":"Iphone","hwMac":"","Generation":"com.dianshijia.mobile.ios","Accept":"*/*","Authorization":"Tm1NNE5EQTJNVEpsTmpBMU5URXdPREZqWkdFM05UY3dOMk16WlRObU1tST18MTYxMjgzNDg5MTAwMTM4MzMzMXxlMjIxOWZhNzRmNDQ0ZWZmMWJhMDE4M2NiNDYxYWUyNTVkMjk2ZDEw","appId":"19227f89ea1a166451593601eb8a1b4f","cityCode":"330300","erid":"33243","routerMac":"","ethMac":"","Cookie":"beegosessionID=ca2b50b58dc9ba7aee17bc14c4f33b85","areaCode":"330000","gpsCityCode":""}
{"Accept-Encoding":"gzip, deflate","AppVerCode":"187","userid":"050d826f2599fa4bf16ee6e4f6c27678","language":"zh_CN","Host":"api.gaoqingdianshi.com","AppVerName":"1.84","hwModel":"iPhone 5s","hwBrand":"iPhone","countryCode":"","ssid":"","Connection":"keep-alive","uuid":"21b8d9ff0798410199a6c36636a532d2","ispId":"","hwMac":"","Accept-Language":"zh-Hans;q=1","User-Agent":"Dsj/Client1.2","MarketChannelName":"Iphone","Generation":"com.dianshijia.mobile.ios","Accept":"*/*","Authorization":"TXpnNFlqa3lNVFZpWmprNE1HSTJOR1ZrTURFelkyUXhOekpqWmpKbU1EZz18MTYxMzg4MDkyMTM3NzUzMDg3MHxhYzYzMDcxODhlYmQyZjk5ZjJlZTU5ZmRjOTc1MjUyNGIzMDA1NTNj","appId":"19227f89ea1a166451593601eb8a1b4f","cityCode":"330300","erid":"14729","routerMac":"382c4a96d460","ethMac":"","Cookie":"beegosessionID=88f306e374829fd67dd2fbc8034fc656","areaCode":"330000","gpsCityCode":""}`

let DrawalVal= `http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=randTx&rs=yaaRVJPpRqkSPeDFZNtYszYo5dh4e&sign=d38b79d461f1697127229e5e242217f5
http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=randTx&rs=ZyRdYDuHbbkn1wn4zogUDPrli1&sign=ab9b61d11de66b44b86074e522e8475d`

let cookiearr = {
  DsjurlVal: DsjurlVal,
  DrawalVal: DrawalVal,
 
}

module.exports =  cookiearr
