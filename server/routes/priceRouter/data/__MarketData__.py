from urllib.request import urlretrieve, urlopen
from urllib.error import HTTPError
from bs4 import BeautifulSoup
import requests
import json

def makeMarketData():
    gu_data = dict()
    with open("./json/GU_DATA.json", "r") as gu_json:
        gu_data = json.load(gu_json)
    sijang_data = []
    mart_data = []

    for item in gu_data['DATA']:
        sijang_result = requests.get("https://tearstop.seoul.go.kr/mulga/inc/marketList_ajax.jsp?m_gu_code={}&type_code=001".format(item['gu_code']))
        mart_result = requests.get("https://tearstop.seoul.go.kr/mulga/inc/marketList_ajax.jsp?m_gu_code={}&type_code=002".format(item['gu_code']))
        sijang_result = sijang_result.json()
        mart_result = mart_result.json()
        for r in sijang_result['row']:
            sijang_data.append({
                'guName': item["gu"],
                'guCode': item["gu_code"],
                'codeName': r['codeName'],
                'codeValue': r['codeValue']
            })
        for r in mart_result['row']:
            mart_data.append({
                'guName': item['gu'],
                'guCode': item['gu_code'],
                'codeName': r['codeName'],
                'codeValue': r['codeValue']
            })
        MARKET_DATA = dict()
        MARKET_DATA["DESCRIPTION"] = {
            'sijang_data': [
              {
                'guName': '구 이름', 
                'guCode': '구 코드', 
                'codeName': '시장(마트) 이름', 
                'codeValue': '마켓 코드'
              },
            ],
            'mart_data': [
              {
                'guName': '구 이름', 
                'guCode': '구 코드', 
                'codeName': '시장(마트) 이름', 
                'codeValue': '마켓 코드'
              },
            ] 
        }
        MARKET_DATA["DATA"] = {
          "sijang_data" : sijang_data,
          "mart_data" : mart_data
        }
        with open('./json/MARKET_DATA.json', 'w', encoding='utf-8') as make_file:
            json.dump(MARKET_DATA, make_file, indent="\t", ensure_ascii=False)