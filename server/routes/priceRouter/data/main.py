from __MarketData__ import makeMarketData
from __PriceData__ import makePriceData
from __AverageData__ import makeAverageData

if __name__ == "__main__":
    makeMarketData()
    makePriceData()
    makeAverageData()
    print("Finished!")