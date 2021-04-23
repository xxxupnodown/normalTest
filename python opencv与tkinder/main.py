import requests
import base64
import json
import cv2
import datetime
import image
import pandas

def 识别(cap):
    ret, frame = cap.read()
    if ret:
        name = str(datetime.datetime.now()).replace('.','').replace(':','-')
        cv2.imwrite('./images/' + name + r".jpg", frame)
        # client_id 为官网获取的AK， client_secret 为官网获取的SK
        host = 
        response = requests.get(host)
        if response:
            request_url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/classify/ingredient"
            # request_url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/animal" #动物
            f = open('./images/'+ name +'.jpg', 'rb')
            img = base64.b64encode(f.read())

            params = {"image":img, "top_num": 2}
            access_token = response.json()['access_token']
            request_url = request_url + "?access_token=" + access_token
            headers = {'content-type': 'application/x-www-form-urlencoded'}
            newresponse = requests.post(request_url, data=params, headers=headers)
            if newresponse:
                return newresponse.json()
    '''
                for item in newresponse.json()['result']:
                    if item['score'] > 0.6:
                        if item['name'] != '非果蔬食材':
                            return item['name']
                    else:
                        return "识别失败！"
'''

def 启动相机():
    cap = cv2.VideoCapture(0)
    return cap

def kaishi(cap, Log):
        result = 识别(cap)
        Log.insert('insert',result)
        '''result = { 'result' : [
        {'test': 123, 'name': 'test'},{ 'test': 456, 'name': 'why'}
        ]}'''
        # datatostr(result)
            
def datatostr(result):
    sr = pandas.Series(result)
    print(sr)