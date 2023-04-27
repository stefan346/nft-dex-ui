const items = {
    asks: [
        { sum: 34, quantity: 23, price: 110.0 },
        { sum: 11, quantity: 1, price: 109.0 },
        { sum: 10, quantity: 10, price: 108.0 },
        { sum: 69, quantity: 5, price: 107.0 },
        { sum: 64, quantity: 13, price: 106.0 },
        { sum: 51, quantity: 15, price: 105.0 },
        { sum: 36, quantity: 2, price: 104.0 },
        { sum: 34, quantity: 23, price: 103.0 },
        { sum: 11, quantity: 1, price: 102.0 },
        { sum: 10, quantity: 10, price: 101.0 },
    ],
    bids: [
        { sum: 3, quantity: 3, price: 99 },
        { sum: 32, quantity: 29, price: 98 },
        { sum: 38, quantity: 6, price: 97 },
        { sum: 42, quantity: 4, price: 96 },
        { sum: 55, quantity: 13, price: 95 },
        { sum: 66, quantity: 11, price: 94 },
        { sum: 73, quantity: 7, price: 93 },
        { sum: 3, quantity: 3, price: 92 },
        { sum: 32, quantity: 29, price: 91 },
        { sum: 38, quantity: 6, price: 90 },
    ],
    askSum: 69,
    decimals: 2,
    lastPrice: 100,
    quoteCurrency: 'BTC',
};

export default function OrderBook() {
    return (
        <div>
            <div className="grid grid-cols-3 font-medium text-xs p-4">
                <div>Price</div>
                <div className="text-right">Quantity</div>
                <div className="text-right">Sum</div>
            </div>
            <div className="h-48 pl-4 overflow-auto flex flex-col-reverse place-content-end">
                {items.asks.map((item) => (
                    <div className="grid grid-cols-3 relative font-medium text-sm">
                        <div className="z-10">{item.price}</div>
                        <div className="text-right z-10">{item.quantity}</div>
                        <div className="text-right z-10">{item.sum}</div>
                        <div
                            className="h-full w-full col-span-3 right-0 absolute bg-gray-200"
                            style={{ width: '10%' }}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="h-12 font-medium flex">
                <div className="flex-1 flex items-center justify-start">
                    <div className="pl-4 text-lg">71.23</div>
                    <div className="text-xs pl-2">$5201.23</div>
                </div>
            </div>
            <div className="h-48 pl-4 overflow-auto">
                <div className="flex flex-col-reverse">
                    {items.bids.map((item) => (
                        <div className="grid grid-cols-3 relative font-medium text-sm">
                            <div className="z-10">{item.price}</div>
                            <div className="text-right z-10">{item.quantity}</div>
                            <div className="text-right z-10">{item.sum}</div>
                            <div
                                className="h-full w-full col-span-3 right-0 absolute bg-gray-200"
                                style={{ width: '10%' }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
