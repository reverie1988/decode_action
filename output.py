#2024-09-16 13:26:46
"""
new Env('浩阅小说');
浩阅小说  - app  ah2.zhangyue.com
抓包带 zysid 的整个链接
例如 变量
export hyxsUrl='/zycl/sign/yushufang/sign?usr=xxxxxx'  # 多账号 换行 隔开
export hyxsToken='卡密'
定时
0 * * * *
"""
aruijl=str
aruijd=int
aruijY=print
aruijF=Exception
aruijD=type
aruijk=True
aruijo=False
aruijN=range
aruijJ=exit
aruijz=open
aruijx=len
import requests
aruimf=requests.session
import random
aruimw=random.randint
import base64
aruimE=base64.b64decode
import time
aruimG=time.sleep
aruims=time.time
aruimP=time.localtime
aruimp=time.strftime
import json
aruimH=json.loads
import os
aruijm=os.environ
from urllib.parse import quote
aruimj="1683739147745"
aruiml=aruimE("NDMuMTM4LjcxLjQz").decode()
aruimd='浩阅小说'
aruimY='ah2.zhangyue.com'
aruimF='https://'+aruimY
aruimD='saad.ms.zhangyue.net'
aruimk='https://'+aruimD
def aruimO():
 aruimo=aruimp('%Y-%m-%d %H:%M:%S',aruimP(aruims()))
 return aruimo
def aruimn():
 return aruijl(aruijd(aruims()*1000))
def aruimt(param):
 aruimN=param.split("?")[1]
 aruimJ=aruimN.split("&")
 aruimz={}
 for u in aruimJ:
  r=aruijl(u).split("=")
  aruimz[r[0]]=r[1]
 return aruimz
def aruimX():
 try:
  aruimx=aruimF+'/zycl/sign/yushufang/sign?usr='+aruimg["usr"]+'&rgt=7&p1='+aruimg["p1"]+'&p2='+aruimg["p2"]+'&p3='+aruimg["p3"]+'&p4='+aruimg["p4"]+'&p5=19&p7='+aruimg["p7"]+'&p9='+aruimg["p9"]+'&p16=Redmi+K30+Pro&p21=3&p22=10&p25='+aruimg["p25"]+'&p26=29&p29='+aruimg["p29"]+'&p31='+aruimg["p31"]+'&p33=com.yykuaile.sh&zysid='+aruimg["zysid"]+'&actId=b4e755bc6&date=0&signType=month'
  aruimB=aruimR('get',aruimx,'',aruimY)
  aruimU=aruimH(aruimB.text)
  if aruimU["code"]==0:
   aruijY("账号["+aruijl(aruimI)+"]签到成功 +"+aruijl(aruimU["body"]["todayReadSignAmount"]))
   aruimK("SIGN_WINDOW_VIDEO","100318")
  else:
   aruijY("账号["+aruijl(aruimI)+"]签到失败："+aruimU["msg"])
 except aruijF as e:
  aruijY('error: '+aruijl(e))
def aruimL():
 try:
  aruimx=aruimF+'/zycl/sign/yushufang/reload?usr='+aruimg["usr"]+'&rgt=7&p1='+aruimg["p1"]+'&p2='+aruimg["p2"]+'&p3='+aruimg["p3"]+'&p4='+aruimg["p4"]+'&p5=19&p7='+aruimg["p7"]+'&p9='+aruimg["p9"]+'&p16=Redmi+K30+Pro&p21=3&p22=10&p25='+aruimg["p25"]+'&p26=29&p29='+aruimg["p29"]+'&p31='+aruimg["p31"]+'&p33=com.yykuaile.sh&zysid='+aruimg["zysid"]+'&source=task&signType=month'
  aruimB=aruimR('get',aruimx,'',aruimY)
  aruimU=aruimH(aruimB.text)
  if aruimU["code"]==0:
   return aruimU["body"]["goldCoinDesc"],aruimU["body"]["goldCoinMomey"]
  else:
   return ''
 except aruijF as e:
  aruijY('error: '+aruijl(e))
  return ''
def aruime():
 try:
  aruimx=aruimF+'/zycl/sign/v2/treasure/donate?usr='+aruimg["usr"]+'&rgt=7&p1='+aruimg["p1"]+'&p2='+aruimg["p2"]+'&p3='+aruimg["p3"]+'&p4='+aruimg["p4"]+'&p5=19&p7='+aruimg["p7"]+'&p9='+aruimg["p9"]+'&p16=Redmi+K30+Pro&p21=3&p22=10&p25='+aruimg["p25"]+'&p26=29&p29='+aruimg["p29"]+'&p31='+aruimg["p31"]+'&p33=com.yykuaile.sh&activityId=100587'
  aruimS,aruimb,aruimA=aruimW(aruimx,'',"donate")
  aruimx+='&zysid='+aruimg["zysid"]+'&zysign='+aruimS
  aruimB=aruimR('get',aruimx,'',aruimY)
  aruimU=aruimH(aruimB.text)
  if aruimU["code"]==0:
   aruijY("账号["+aruijl(aruimI)+"]开宝箱成功 +"+aruijl(aruimU["body"]["amount"]))
  else:
   aruijY("账号["+aruijl(aruimI)+"]开宝箱失败："+aruimU["msg"])
 except aruijF as e:
  aruijY('error: '+aruijl(e))
def aruimK(aruijD):
 try:
  aruimh=aruimn()
  aruimS,aruimb,aruimA=aruimW(aruimg["usr"],aruimh,aruijD)
  aruimx=aruimk+'/rewarded-video/report?app_id=10116&zysid='+aruimg["zysid"]+'&usr='+aruimg["usr"]+'&rgt=7&p1='+aruimg["p1"]+'&pc=10&p2='+aruimg["p2"]+'&p3='+aruimg["p3"]+'&p4='+aruimg["p4"]+'&p5=19&p6=&p7='+aruimg["p7"]+'&p9='+aruimg["p9"]+'&p12=&p16=Redmi+K30+Pro&p21=3&p22=10&p25='+aruimg["p25"]+'&p26=29&p28=&p29='+aruimg["p29"]+'&p30=&p31='+aruimg["p31"]+'&p33=com.yykuaile.sh&bookId=null&chapterId=null&appId=10116&id='+aruimA+'&ext='
  aruimM="usr="+aruimg["usr"]+"&sign="+aruimS+"&position="+aruimb+"&timestamp="+aruimh
  aruimB=aruimR('post',aruimx,aruimM,aruimD,aruijk)
  aruimU=aruimH(aruimB.text)
  if aruimU["code"]==0:
   aruijY("账号["+aruijl(aruimI)+"]看视频成功 +"+aruijl(aruimU["body"]["giftAmount"]))
   if aruijd(aruimU["body"]["remainViewCount"])>0:
    aruimG(aruimw(3,5))
    aruimK(aruijD)
  else:
   aruijY("账号["+aruijl(aruimI)+"]看视频失败："+aruimU["msg"])
 except aruijF as e:
  aruijY('error: '+aruijl(e))
def aruimR(method,aruimx,aruimM,host,isVideo=aruijo):
 aruimV={"Host":host,"User-Agent":"Mozilla/5.0 (Linux; Android 10; Redmi K30 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 zyApp/zhuiduReader zyVersion/1.5.4 zyChannel/290004 zyAppid/zybc0e74",}
 if isVideo:
  aruimV["User-Agent"]="okhttp/3.11.0"
  aruimV["content-type"]="application/x-www-form-urlencoded"
 else:
  aruimV["Accept"]="application/json"
 if method=='post':
  aruimB=s.post(url=aruimx,headers=aruimV,data=aruimM)
 else:
  aruimB=s.get(url=aruimx,headers=aruimV)
 return aruimB
def aruimW(userId,aruimh,taksid):
 aruimx="http://"+aruiml+":3394/zdxs/zdxs_api.php"
 aruimM={"token":aruimC,"method":"calculate","userId":userId,"timestamp":aruimh,"taskId":taksid,"version":aruimj}
 for aruimy in aruijN(1,5):
  try:
   aruimB=s.post(url=aruimx,json=aruimM).text.strip()
   aruimU=aruimH(aruimB)
   if aruimU["code"]==200:
    aruijY(aruimd+" token剩余次数:"+aruijl(aruimU["num"])+"  token过期时间:"+aruijl(aruimU["date"]))
    return aruijl(aruimU["sign"]),aruijl(aruimU["type"]),aruijl(aruimU["id"])
   else:
    aruijY(aruimd+" api请求失败："+aruimU["msg"])
    aruijJ()
  except aruijF as e:
   aruijY(aruimd+' api请求失败，尝试第'+aruijl(aruimy+1)+'次获取！')
   aruimG(5)
 aruijY(aruimd+' api请求失败！不再尝试获取。')
 aruijJ()
 return-1
def aruimq():
 aruimx="http://"+aruiml+":3394/zdxs/zdxs_api.php"
 aruimM={"token":aruimC,"method":"check","version":aruimj}
 for aruimy in aruijN(1,5):
  try:
   aruimB=s.post(url=aruimx,json=aruimM).text.strip()
   aruimU=aruimH(aruimB)
   if aruimU["code"]==200:
    aruijY(aruimd+" token剩余次数:"+aruijl(aruimU["num"])+"  token过期时间:"+aruijl(aruimU["date"]))
    return aruimU
   else:
    aruijY(aruimd+" api请求失败："+aruimU["msg"])
    aruijJ()
  except aruijF as e:
   aruijY(aruimd+' api请求失败，尝试第'+aruijl(aruimy+1)+'次获取！')
   aruimG(5)
 aruijY(aruimd+' api请求失败！不再尝试获取。')
 aruijJ()
 return-1
if __name__=='__main__':
 s=aruimf()
 try:
  aruimC=aruijm.get("hyxsToken")
  if "@" in aruijm.get("hyxsUrl"):
   aruimQ=aruijm["hyxsUrl"].split("@")
  else:
   aruimQ=aruijm["hyxsUrl"].split("\n")
 except:
  with aruijz('hyxsUrl.txt','r')as f:
   aruimQ=f.read().split('\n')
 aruijY(aruimd,flush=aruijk)
 aruijY('==================共找到'+aruijl(aruijx(aruimQ))+'个ck==================')
 aruijY('==================脚本执行- 北京时间(UTC+8)：'+aruimO()+'=====================\n')
 aruimq()
 aruimI=1
 for ck in aruimQ:
  aruijY('----- 开始【第 '+aruijl(aruimI)+' 个账号】 -----')
  aruimg=aruimt(ck)
  aruimc,aruimv=aruimL()
  aruijY("账号["+aruijl(aruimI)+"]金币"+aruimc+" ≈ "+aruimv+"元")
  aruimX()
  aruime()
  aruimK("sign1"),aruimK("sign2"),aruimK("bank"),aruimK("welfare1"),aruimK("welfare2")
  aruimI+=1
 aruijY('-----脚本执行结束 北京时间(UTC+8)：'+aruimO()+'-----')
