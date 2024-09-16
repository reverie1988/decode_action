#2024-09-16 13:20:47
import requests
QFC=print
QFU=True
QFi=str
QFA=int
QFY=False
QFo=Exception
QFd=range
QNf=abs
QNF=None
QNp=dict
QNe=len
QNc=exit
QNm=sorted
QNg=open
QFG=requests.session
import base64
QFh=base64.b64decode
import random
QFJ=random.randint
import time
QFH=time.time
QFR=time.sleep
import json
QFu=json.dumps
QFO=json.loads
import os
QFT=os.environ
from datetime import datetime
QFy=datetime.strptime
QFr=datetime.now
QFK=datetime.strftime
from functools import partial
from urllib.parse import parse_qs,urlparse,quote
QFC=partial(QFC,flush=QFU)
QfF='酷狗'
QfN='1660965001'
Qfp=QFh("NDMuMTM4LjcxLjQz").decode()
Qfe='Android10-AndroidPhone-11265-201-0-MusicalNoteProtocol-wifi'
def QFW():
 Qfc=QFK(QFr(),'%Y-%m-%d %H:%M:%S')
 return Qfc
def QFL(QFi):
 Qfm=QFO(QFu(QFi))
 Qfg=QFr()
 QfP=QFK(Qfg,'%H')
 for Qfn in Qfm:
  if Qfn["start_hour"]<=QFA(QfP)and Qfn["state"]!=2:
   return Qfn["id"]
 return 0
def QFX(oldtime):
 Qfz=QFr()
 Qfl=Qfz.year+Qfz.month+Qfz.day
 Qft=QFy(oldtime,"%Y-%m-%d %H:%M:%S")
 QfW=Qft.year+Qft.month+Qft.day
 return QfW-Qfl
def QFk():
 try:
  QfL='mstc/musicsymbol/v1/user/info?dfid='+Qfd["dfid"]+'&clientver='+Qfd["clientver"]+'&mid='+Qfd["mid"]+'&clienttime='+QFi(QFq())+'&token='+Qfd["token"]+'&uuid='+Qfd["uuid"]+'&appid='+Qfd["appid"]+'&from=client&spec=13&userid='+Qfd["userid"]
  aa=urlparse(QfL).query
  bb=QFE(parse_qs(aa))
  QfX=QFx(bb,0,"","",QFY)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('get',QfL,"")
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   Qfj=QfV["data"]["account"]["balance_coins"]
   QfB=Qfj/10000
   QFC('KG海盗船 账号['+QfV["data"]["base"]["nickname"]+'('+QFP+')'+'] '+QFi(Qfj)+'狗狗币 约等于%.2f大洋'%QfB)
   return QfV["data"]["base"]["nickname"],QfV["data"]["state"]["is_new_user"],QfB
  else:
   QFC('KG海盗船 获取账户信息失败 '+QfV["error"])
   return '',QFY,0
 except QFo as e:
  QFC('error: '+QFi(e))
def QFV():
 try:
  QfL='/mstc/musicsymbol/v1/system/infos?srcappid=2919&clientver='+Qfd["clientver"]+'&clienttime='+QFi(QFq(QFU))+'&mid='+Qfd["mid"]+'&uuid='+Qfd["uuid"]+'&dfid='+Qfd["dfid"]+'&appid='+Qfd["appid"]+'&userid='+Qfd["userid"]+'&token='+Qfd["h5_token"]+'&from=client&spec=15&channel=musicsymbol11265'
  Qfb=urlparse(QfL).query
  Qfs=QFE(parse_qs(Qfb))
  QfX=QFx(Qfs,2816,"","",QFU)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('post',QfL,QfX["data"]["body"])
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']获取任务列表成功')
   for QfM in QfV["data"]["tasks"]:
    Qfa=QfM["state"]["max_done_count"]
    Qfw=QfM["state"]["done_count"]
    QfS=Qfa-Qfw
    QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']'+QfM["profile"]["name"]+' 完成进度'+QFi(Qfw)+'/'+QFi(Qfa))
    if QfS!=0:
     for Qfv in QFd(0,QfS):
      if QfM["profile"]["taskid"]==1108:
       for Qfq in QfM["state"]["meals"]:
        Qfg=QFr()
        QfP=QFK(Qfg,'%H')
        if Qfq["start_hour"]<=QFA(QfP)and Qfq["state"]==0:
         Qfx=Qfq["id"]
         QFb(QfM["profile"]["taskid"],QfM["profile"]["name"],QFi(Qfx),"")
         QFR(2)
       break
      elif QfM["profile"]["taskid"]==1105:
       QfD=QfM["state"]["next_award_time"]
       QfE=QfM["state"]["server_time"]
       QfI=QfE-QfD
       if(QfE-QfD)<0:
        QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']'+QfM["profile"]["name"]+' 未到领取时间,剩余('+QFi(QNf(QfI))+'/s)')
        break
      elif QfM["profile"]["taskid"]==1107:
       if Qfw>0:
        QFR(13)
        QFs()
       else:
        Qfw+=1
      elif QfM["profile"]["taskid"]==1:
       QFB()
       continue
      QFb(QfM["profile"]["taskid"],QfM["profile"]["name"],"","")
      QFR(2)
      if QfM["profile"]["taskid"]==1105:break
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']获取任务列表失败 '+QfV["error"])
 except QFo as e:
  QFC('error: '+QFi(e))
def QFj(QfP,double_code=QNF):
 try:
  if double_code!=QNF:
   QfG="翻倍"
   Qfh=QFi(QFq(QFU)-QFJ(3000,5000))
  else:
   QfG=""
   Qfh=QFi(QFq(QFU))
  QfL='mstc/musicsymbol/v1/task/signon?srcappid=2919&clientver='+Qfd["clientver"]+'&clienttime='+Qfh+'&mid='+Qfd["mid"]+'&uuid='+Qfd["uuid"]+'&dfid='+Qfd["dfid"]+'&appid='+Qfd["appid"]+'&userid='+Qfd["userid"]+'&token='+Qfd["h5_token"]+'&from=client'
  Qfb=urlparse(QfL).query
  Qfs=QFE(parse_qs(Qfb))
  if double_code!=QNF:
   QfX=QFx(Qfs,1,QfP,double_code,QFU)
  else:
   QfX=QFx(Qfs,1,QfP,"",QFU)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('post',QfL,QfX["data"]["body"])
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']每日签到'+QfG+'掠夺 '+QFi(QfV["data"]["awards"]["coins"])+'狗狗币')
   if "double_code" in QfV["data"]:
    double_code=QfV["data"]["double_code"]
    QFR(2)
    QFj(QfP,double_code)
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']每日签到失败 '+QfV["error"])
 except QFo as e:
  QFC('error: '+QFi(e))
def QFB():
 try:
  QfL='/mstc/musicsymbol/v1/task/sign_state?userid='+Qfd["userid"]+'&token='+Qfd["h5_token"]+'&appid='+Qfd["appid"]+'&from=client&dfid='+Qfd["dfid"]+'&mid='+Qfd["mid"]+'&clientver='+Qfd["clientver"]+'&clienttime='+QFi(QFq())+'&uuid='+Qfd["uuid"]
  aa=urlparse(QfL).query
  bb=QFE(parse_qs(aa))
  QfX=QFx(bb,0,"","",QFY)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('get',QfL,'')
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   for QfR in QfV["data"]["list"]:
    Qfg=QFr()
    QfP=QFK(Qfg,'%Y%m%d')
    if QfR["state"]==0 and QFA(QfR["code"])<QFA(QfP):
     QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']签到补签 '+QfR["code"])
     QFj(QfR["code"])
    if QfR["state"]==0 and QFA(QfR["code"])==QFA(QfP):
     QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']去签到')
     QFj(QfR["code"])
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']每日签到失败 '+QfV["error"])
 except QFo as e:
  QFC('error: '+QFi(e))
def QFb(taskid,name,other,other2):
 try:
  if other2:
   QfG="翻倍"
   Qfh=QFi(QFq()-QFJ(30,50))
  else:
   QfG=""
   Qfh=QFi(QFq()-QFJ(15,20))
  QfL='mstc/musicsymbol/v1/task/submit?dfid='+Qfd["dfid"]+'&clientver='+Qfd["clientver"]+'&mid='+Qfd["mid"]+'&clienttime='+Qfh+'&token='+Qfd["token"]+'&uuid='+Qfd["uuid"]+'&appid='+Qfd["appid"]+'&from=client&userid='+Qfd["userid"]
  aa=urlparse(QfL).query
  bb=QFE(parse_qs(aa))
  QfX=QFx(bb,taskid,other,other2,QFY)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('post',QfL,QfX["data"]["body"])
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']'+name+QfG+'掠夺 '+QFi(QfV["data"]["awards"]["coins"])+'狗狗币')
   if 'double_code' in QNp(QNp(QfV)["data"]):
    QFR(2)
    QFb(taskid,name,other,QfV["data"]["double_code"])
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']'+name+'失败 '+QfV["error"])
 except QFo as e:
  QFC('error: '+QFi(e))
def QFs():
 try:
  QfL='mstc/musicsymbol/v1/lottery/exchange?srcappid=2919&clientver='+Qfd["clientver"]+'&clienttime='+QFi(QFq(QFU))+'&mid='+Qfd["mid"]+'&uuid='+Qfd["uuid"]+'&dfid='+Qfd["dfid"]+'&appid='+Qfd["appid"]+'&userid='+Qfd["userid"]+'&token='+Qfd["h5_token"]+'&from=client'
  Qfb=urlparse(QfL).query
  Qfs=QFE(parse_qs(Qfb))
  QfX=QFx(Qfs,11007,"","",QFU)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('post',QfL,QfX["data"]["body"])
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   Qfa=QfV["data"]["max_done_count"]
   Qfw=QfV["data"]["done_count"]
   QfH=QfV["data"]["lottery"]["chances"]
   if QfH:
    QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']抽奖机会 +'+QFi(QfH)+' 进度'+QFi(Qfw)+'/'+QFi(Qfa))
    return QFU
   return QFY
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']获取抽奖机会失败 '+QfV["error"])
   return QFY
 except QFo as e:
  QFC('error: '+QFi(e))
def QFM():
 try:
  QfL='mstc/musicsymbol/v1/withdraw/levels?dfid='+Qfd["dfid"]+'&clientver='+Qfd["clientver"]+'&mid='+Qfd["mid"]+'&clienttime='+QFi(QFq())+'&token='+Qfd["token"]+'&uuid='+Qfd["uuid"]+'&appid='+Qfd["appid"]+'&from=client&userid='+Qfd["userid"]
  Qfb=urlparse(QfL).query
  Qfs=QFE(parse_qs(Qfb))
  QfX=QFx(Qfs,0,'',"",QFY)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('post',QfL,'')
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']提现列表')
   return QFU
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']提现失败:'+QfV["error"])
   return QFY
 except QFo as e:
  QFC('error: '+QFi(e))
def QFa():
 try:
  QfL='mstc/musicsymbol/v1/withdraw/history?userid='+Qfd["userid"]+'&token='+Qfd["h5_token"]+'&appid=1005&from=client&dfid='+Qfd["dfid"]+'&mid='+Qfd["mid"]+'&clientver=11265&clienttime='+QFi(QFq())+'&uuid='+Qfd["uuid"]
  Qfb=urlparse(QfL).query
  Qfs=QFE(parse_qs(Qfb))
  QfX=QFx(Qfs,0,'',"",QFY)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('get',QfL,'')
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   if QNe(QfV["data"]["list"]):
    QfO=QfV["data"]["list"][0]["addtime"]
    Qfu=QFX(QfO)
    if Qfu>=0:
     QFC('KG海盗船 账号['+QFn+'('+QFP+')'+'('+QFP+')'+']提现失败:今日已提现')
     return QFY
    elif Qfu<0:
     return QFU
    else:
     return QFY
   else:
    return QFU
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']提现失败:'+QfV["error"])
   return QFY
 except QFo as e:
  QFC('error: '+QFi(e))
def QFw(svar1):
 try:
  QfL=f'https://webcollects.kugou.com/v2/web/post?appid=1000&business=30050&_t='+QFi(QFq())
  QfT={"Host":"webcollects.kugou.com","Connection":"Keep-Alive","Origin":"https://h5.kugou.com","User-Agent":Qfe,"Accept-Encoding":"br, gzip, deflate","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"}
  QfK=quote('{"a":24183,"b":"点击","ft":"确认提现","r":"任务中心","svar1":'+QFi(svar1*10000)+',"appid":"1000","userid":"'+Qfd["userid"]+'","mid":"'+Qfd["mid"]+'","uuid":"'+Qfd["uuid"]+'","tv":11265,"timestamp":'+QFi(QFq(QFU))+'}')
  Qfb=urlparse(QfL).query
  Qfr=QFE(parse_qs(Qfb),QFU)
  QfX=QFx(Qfr,665,QfK,"",QFY)
  QfL+="&sign="+QfX["data"]["sigture"]
  Qfy="content="+quote(QfX["data"]["body"])
  Qfk=s.post(url=QfL,headers=QfT,data=Qfy).text
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   return QFU
  else:
   return QFY
 except QFo as e:
  QFC('error: '+QFi(e))
def QFS(coin):
 try:
  QfC="sky"
  QfL='mstc/musicsymbol/v1/withdraw/apply?dfid='+Qfd["dfid"]+'&clientver='+Qfd["clientver"]+'&mid='+Qfd["mid"]+'&clienttime='+QFi(QFq())+'&token='+Qfd["token"]+'&uuid='+Qfd["uuid"]+'&appid='+Qfd["appid"]+'&from=client&userid='+Qfd["userid"]
  QfK='{"openid":"'+Qfd["openid"]+'","nickname":"'+QfC+'","total_fee":'+QFi(coin*100)+',"coins":'+QFi(coin*10000)+',"channel":3}'
  Qfb=urlparse(QfL).query
  Qfs=QFE(parse_qs(Qfb))
  QfX=QFx(Qfs,666,QfK,"",QFY)
  QfL+="&signature="+QfX["data"]["sigture"]
  Qfk=QFv('post',QfL,QfK)
  QfV=QFO(Qfk)
  if QfV["status"]==1:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']申请提现'+QFi(coin)+'枚大洋 成功')
   return QFU
  else:
   QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']提现失败:'+QfV["error"])
   return QFY
 except QFo as e:
  QFC('error: '+QFi(e))
def QFv(method,QfL,QfK):
 QfU='https://gateway.kugou.com/'+QfL
 QfT={"Host":"gateway.kugou.com","Connection":"Keep-Alive","User-Agent":Qfe,"Accept-Encoding":"gzip, deflate",}
 if method=='post':
  QfT["Content-Type"]="application/json; charset=utf-8"
  Qfk=s.post(url=QfU,headers=QfT,data=QfK).text
 else:
  Qfk=s.get(url=QfU,headers=QfT).text
 return Qfk
def QFq(is13=QFY):
 if is13:
  return QFA(QFH()*1000)
 return QFA(QFH())
def QFx(Qfr,taskid,other,other2,ish5):
 QfL="http://"+Qfp+":3394/kg/kg_api.php"
 QfK={"url":Qfr,"taskid":taskid,"other":other,"other2":other2,"ish5":ish5,"type":QFN,"token":QFf,"method":"calculate","version":QfN}
 for Qfv in QFd(1,5):
  try:
   Qfk=s.post(url=QfL,json=QfK).text
   QfV=QFO(Qfk)
   if QfV["code"]==200:
    if taskid!=0 and taskid!=2816 and taskid!=666 and taskid!=665:
     QFC("KG海盗船 token剩余次数:"+QFi(QfV["num"])+"  token过期时间:"+QFi(QfV["date"]))
    return QfV
   else:
    QFC("KG海盗船 api请求失败："+QfV["msg"])
    QNc()
  except QFo as e:
   QFC('KG海盗船 api请求失败，尝试第'+QFi(Qfv+1)+'次获取！')
   QFR(5)
 QFC('KG海盗船 api请求失败！不再尝试获取。')
 QNc()
 return-1
def QFD():
 QfL="http://"+Qfp+":3394/kg/kg_api.php"
 QfK={"token":QFf,"method":"check","version":QfN}
 for Qfv in QFd(1,5):
  try:
   Qfk=s.post(url=QfL,json=QfK).text
   QfV=QFO(Qfk)
   if QfV["code"]==200:
    QFC("KG海盗船 token剩余次数:"+QFi(QfV["num"])+"  token过期时间:"+QFi(QfV["date"]))
    return QfV
   else:
    QFC("KG海盗船 api请求失败："+QfV["msg"])
    QNc()
  except QFo as e:
   QFC('KG海盗船 api请求失败，尝试第'+QFi(Qfv+1)+'次获取！')
   QFR(5)
 QFC('KG海盗船 api请求失败！不再尝试获取。')
 QNc()
 return-1
def QFE(QfL,iscashing=QFY):
 Qfy=QNp(QNm(QfL.items(),key=lambda x:x[0]))
 Qfi=""
 for QfA,QfY in Qfy.items():
  if iscashing:
   Qfi+=QfA+QfY[0]
  else:
   Qfi+=QfA+'='+QfY[0]
 return Qfi
def QFI(QfL):
 Qfo=urlparse(QfL).query
 Qfd=parse_qs(Qfo)
 Qfi:QNp={}
 for QfA,QfY in Qfd.items():
  Qfi[QfA]=QfY[0]
 return Qfi
if __name__=='__main__':
 s=QFG()
 QFf=QFT.get("kgtoken")
 QFN=QFT.get("kgmethod")
 QFp=QFT.get("kugouquota")
 QFe=QFT.get("kugoutxtime")
 if not QFf:
  QFC("kgtoken不能为空")
  QNc()
 try:
  if "@" in QFT.get("kugouurl"):
   QFc=QFT["kugouurl"].split("@")
  else:
   QFc=QFT["kugouurl"].split("\n")
 except:
  with QNg('kugouurl.txt','r')as f:
   QFc=f.read().split('\n')
 if QFN==QNF:
  QFN='bf'
 QFC(QfF,flush=QFU)
 QFC('==================共找到'+QFi(QNe(QFc))+'个ck==================')
 QFC('==================脚本执行- 北京时间(UTC+8)：'+QFW()+'=====================\n')
 QFD()
 QFg=1
 for i in QFc:
  Qfd=QFI(i)
  QFP="无"
  if "name" in Qfd.keys():
   QFP=Qfd["name"]
  QFC('----- 开始【第 '+QFi(QFg)+' 个账号】-----')
  QFn,QFz,QFl=QFk()
  if QFz:
   QFb(1111,"新人连续签到奖励","","")
   QFb(1112,"领取新人专享3000狗狗币","","")
  QFV()
  QFg+=1
 QFC('-------------- 【账户资产】 --------------')
 for i in QFc:
  Qfd=QFI(i)
  QFP="无"
  if "name" in Qfd.keys():
   QFP=Qfd["name"]
  QFn,QFz,QFl=QFk()
  Qfg=QFr()
  QfP=QFK(Qfg,'%H')
  if QFe==QfP:
   if "openid" not in Qfd.keys():
    QFC("缺少提现参数 openid")
    continue
   QFt=QNF
   if QFp is QNF:
    if 5>QFl>=2:
     QFt="2"
    elif 10>QFl>=5:
     QFt="5"
    elif 20>QFl>=10:
     QFt="10"
    elif QFl>=20:
     QFt="20"
   else:
    QFt=QFp
   if QFt=="2" or QFt=="5" or QFt=="10" or QFt=="20":
    if QFA(QFt)<=QFl:
     if QFa():
      QFw(QFA(QFt))
      QFM()
      QFS(QFA(QFt))
      QFR(5)
    else:
     QFC('KG海盗船 账号['+QFn+'('+QFP+')'+']当前的狗狗币不足以提现')
   else:
    QFC("提现额度必须为 2、5、10、20")
