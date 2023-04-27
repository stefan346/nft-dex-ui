const items = [
    { name: 'MADS/SOL', price: 71.24, change_24h: 2.31 },
    { name: 'MADS/SOL', price: 71.24, change_24h: 2.31 },
];
export default function Instruments() {
    return (
        <div className="h-full w-full">
            <div className="flex items-stretch gap-4 w-full h-14 border-b">
                <div className="flex-1 flex pl-4 items-center font-medium text-lg">MAD/SOL</div>
                <div className="flex-1 flex items-center pr-4 justify-end text-lg font-medium">71.24</div>
            </div>
            <div className="pb-2">
                <div className="grid grid-cols-12 font-medium text-xs pl-4 pr-4 pt-4 mb-1">
                    <div className="col-span-5">Instrument</div>
                    <div className="col-span-3 text-right">Price</div>
                    <div className="col-span-4 text-right">24H Change</div>
                </div>
                {items.map((item, index) => (
                    <div className="grid grid-cols-12 mb-1 text-sm p-2 ml-2 mr-2 font-medium text-sm hover:bg-hover cursor-pointer">
                        <div className="col-span-5">{item.name}</div>
                        <div className="col-span-3 text-right">{item.price} SOL </div>
                        <div className="col-span-4 text-right">{item.change_24h}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
