import json
import numpy as np
import operator
from __PriceData__ import makePriceData

def makeAverageData():
    price_data = dict()
    check_product = dict()
    with open("./json/PRICE_DATA.json", "r") as price_json:
        price_data = json.load(price_json)
    with open("./json/default/check_product.json", "r") as check_json:
        check_product = json.load(check_json)

    # 실제 저장할 Average Price (Median 값 사용)
    category = check_product
    for price in price_data['DATA']:
        for p in price['items']:
            name = p['name']
            for c in category['DATA']:
                if name == c['name']:
                    c['price'].append(p['price'])
    
    for c in category['DATA']:
        c['price'] = np.median(c['price'])

    AVERAGE_DATA = category
    with open('./json/AVERAGE_DATA.json', 'w', encoding='utf-8') as make_file:
        json.dump(AVERAGE_DATA, make_file, indent="\t", ensure_ascii=False)
