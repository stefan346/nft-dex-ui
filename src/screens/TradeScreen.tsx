import Instruments from '../components/Instruments';
import OrderBook from '../components/OrderBook';
import PriceChart from '../components/PriceChart';

export function TradeScreen() {
    return (
        <div>
            <div className="grid grid-cols-12 border-b">
                <div className="col-span-2 border-r">
                    <Instruments />
                </div>
                <div className="border-r col-span-5">
                    <PriceChart />
                </div>
                <div className="col-span-2 border-r">
                    <OrderBook />
                </div>
                <div className="col-span-3 border-r">trade</div>
            </div>
            <div></div>
            <div className="grid grid-cols-12 border-b">
                <div className="col-span-9 border-r">open orders</div>
                <div className="col-span-3">balance</div>
            </div>
        </div>
    );
}
