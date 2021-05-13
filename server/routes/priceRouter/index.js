const express = require('express');
const router = express.Router();
const Controller = require("./controller");

/* 구, 시장정보 관련 API. 
 - /guCode = 서울시의 모든 '구'에 대한 코드를 리턴합니다.
 - /market = 서울시의 모든 시장/마트에 대한 코드를 리턴합니다.
*/

router.get('/guCode', Controller.getGuCode);
router.get('/market', Controller.getMarket);

/* Price 관련 API. 
 - /all = 모든 시장/마트의 가격 정보를 리턴합니다.
 - /average = 평균(Median 중간값을 사용) 가격 정보를 리턴합니다.
 - /detail/:guCode = 해당 '구'에 해당하는 시장/마트의 가격 정보를 리턴합니다.
*/

router.get('/all', Controller.getPriceAll);
router.get('/average', Controller.getPriceAverage);
router.get('/detail/:guCode', Controller.getPriceByGu)

module.exports = router;