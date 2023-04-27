const items = [
    { title: 'Volume', value: '11´401.83' },
    { title: '24H Change', value: '2.31%' },
    { title: '24H High', value: '75.21' },
    { title: '24H Low', value: '69.21' },
];
export default function PriceChart() {
    return (
        <div className="h-full w-full">
            <div className="flex items-stretch gap-4 w-full h-14 border-b">
                {items.map((item) => (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-right">
                            <div className="text-xs font-medium">{item.title}</div>
                            <div className="text-sm font-medium">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            price chart...
        </div>
    );
}
