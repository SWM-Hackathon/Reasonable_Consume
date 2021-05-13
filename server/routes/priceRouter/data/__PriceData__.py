from urllib.request import urlretrieve, urlopen
from urllib.error import HTTPError
from bs4 import BeautifulSoup
import requests
import json

def namePreprocess(name):
    if name == '무(1kg)':
        return '무'
    if name == '닭고기(육계)':
        return '닭고기'
    if name == '쇠고기(한우,불고기)':
        return '쇠고기'
    if name == '상추(100g)':
        return '상추'
    if name == '사과(부사, 300g)':
        return '사과'
    if name == '양파(1.5kg망)':
        return '양파'
    if name == '배(신고, 600g)':
        return '배'
    if name == '조기(냉동,수입산)':
        return '조기'
    if name == '돼지고기(생삼겹살)':
        return '돼지고기'
    if str(name).find('배추') != -1:
        return '배추'
    if str(name).find('호박') != -1:
        return '호박'
    if str(name).find('애호박') != -1:
        return '애호박'
    if str(name).find('오이') != -1:
        return '오이'
    if str(name).find('오징어') != -1:
        return '오징어'
    if str(name).find('명태') != -1:
        return '명태'
    if str(name).find('고등어') != -1:
        return '고등어'
    if str(name).find('조기') != -1:
        return '조기'
    if str(name).find('동태') != -1:
        return '동태'
    return name
def unitPreprocess(unit):
    if str(unit).find('1마리') != -1:
        return '1마리'
    if str(unit).find('10개') != -1:
        return '10개'
    if str(unit).find('30개') != -1:
        return '30개'
    if str(unit).find('1망') != -1:
        return '1망'
    if str(unit).find('1개') != -1:
        return '1개'
    if str(unit).find('600g') != -1:
        return '600g'
    if str(unit).find('1포기') != -1:
        return '1포기'
    if unit == '300g':
        return '1개'
    if unit == '1.5kg':
        return '1망'
    if unit == '230g':
        return '1개'
    if unit == '1.8kg':
        return '30개'
    if unit == '500g':
        return '10개'
    return unit


def makePriceData():
    gu_data = dict()
    with open("./json/GU_DATA.json", "r") as gu_json:
        gu_data = json.load(gu_json)

    data = []
    for item in gu_data['DATA']:
        sijang_result = requests.get("https://tearstop.seoul.go.kr/mulga/inc/marketList_ajax.jsp?m_gu_code={}&type_code=001".format(item['gu_code'])).json()
        mart_result = requests.get("https://tearstop.seoul.go.kr/mulga/inc/marketList_ajax.jsp?m_gu_code={}&type_code=002".format(item['gu_code'])).json()

    for r in sijang_result['row']:
      # 엑셀파일 크롤링
        m_seq = r['codeValue']
        url = "https://tearstop.seoul.go.kr/mulga/info/price01_excel.jsp?m_seq={}&m_yyyymm=202105".format(m_seq)
        res = urlopen(url).read()

        # HTML Parsing
        bs = BeautifulSoup(res, 'html.parser')
        tag = bs.select("tr td span")
        
        # MARKET_DATA
        Market_data= {
            "m_seq": m_seq,
            "gu_code": item['gu_code'],
            "market_name": r['codeName'],
            "items": []
        }

        product = {
          "name": '',
          "unit": '',
          "price": 0,
          "etc": ''
        }
        count = 1
        for t in tag:
            cnt = count % 4
            if cnt == 1:
                product['name'] = namePreprocess(t.contents[0])
            elif cnt == 2:
                product['unit'] = unitPreprocess(t.contents[0])
            elif cnt == 3:
                product['price'] = int(str(t.contents[0]).replace(',', ''))
            else:
                try:
                    product['etc'] = t.contents[0]
                except:
                    product['etc'] = ''
                Market_data['items'].append(product)
                product = {
                    "name": '',
                    "unit": '',
                    "price": 0,
                    "etc": ''
                }
            
            if cnt != 4:
                count += 1
            else:
                count = 1
        data.append(Market_data)
    

    for r in mart_result['row']:
        # 엑셀파일 크롤링
        m_seq = r['codeValue']
        url = "https://tearstop.seoul.go.kr/mulga/info/price01_excel.jsp?m_seq={}&m_yyyymm=202105".format(m_seq)
        res = urlopen(url).read()

        # HTML Parsing
        bs = BeautifulSoup(res, 'html.parser')
        tag = bs.select("tr td span")

        # MARKET_DATA
        Market_data= {
            "m_seq": m_seq,
            "gu_code": item['gu_code'],
            "market_name": r['codeName'],
            "items": []
        }

        product = {
            "name": '',
            "unit": '',
            "price": 0,
            "etc": ''
        }
        count = 1
        for t in tag:
            cnt = count % 4
            if cnt == 1:
                product['name'] = namePreprocess(t.contents[0])
            elif cnt == 2:
                product['unit'] = unitPreprocess(t.contents[0])
            elif cnt == 3:
                product['price'] = int(str(t.contents[0]).replace(',', ''))
            else:
                try:
                    product['etc'] = t.contents[0]
                except:
                    product['etc'] = ''
                Market_data['items'].append(product)
                product = {
                    "name": '',
                    "unit": '',
                    "price": 0,
                    "etc": ''
                }

            if cnt != 4:
                count += 1
            else:
                count = 1
        data.append(Market_data)

    PRICE_DATA = dict()
    PRICE_DATA["DESCRIPTION"] = {
        "m_seq": "판매처 코드",
        "gu_code": "구 코드",
        "market_name": "판매처 이름",
        "items": [
          {
            "name": "품목 이름",
            "unit": "단위",
            "price": "가격",
            "etc": "원산지"
          }
        ]
      }
    PRICE_DATA["DATA"] = data
    with open('./json/PRICE_DATA.json', 'w', encoding='utf-8') as make_file:
        json.dump(PRICE_DATA, make_file, indent="\t", ensure_ascii=False)
    