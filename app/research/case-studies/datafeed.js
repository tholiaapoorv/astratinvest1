
async function loadJson() {
    try {
        let response = await fetch("data_point.json");
        let data = await response.json();
        console.log("data fetched successfully");
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}
let jsonData = await loadJson();
class CustomDatafeed {
    async onReady(cb) {
        console.log("onReady")
        setTimeout(() => cb({
            supported_resolutions: ["1M"],
            supports_marks: false,
            supports_timescale_marks: false,
            supports_time: false,
        }), 0)
    }
    async searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
        console.log("searchSymbols");
        onResultReadyCallback([]);
    }
    async resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback, extension) {
        console.log("resolveSymbol")
        try {
            setTimeout(() => {
                onSymbolResolvedCallback({
                    name: 'NIFTY 50',
                    ticker: 'NIFTY 50',
                    description: 'NIFTY 50',
                    type: 'stock',
                    session: '24x7',
                    timezone: 'Etc/UTC',
                    exchange: 'NIFTY 50',
                    minmov: 1,
                    pricescale: 100,
                    has_intraday: false,
                    visible_plots_set: 'ohlc',
                    has_weekly_and_monthly: false,
                    supported_resolutions: ["1M"],
                    volume_precision: 0,
                    data_status: 'streaming',
                });
            }, 0)

        }
        catch (e) {
            setTimeout(() => {
                onResolveErrorCallback(e.message);
            }, 0);

        }
    }
    async getBars(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {
        console.log("getBars")
        const from = periodParams.from;
        const to = periodParams.to;
        const filteredBars = jsonData.filter(bar => {
            const timeSec = Math.floor(bar.time / 1000);
            return timeSec >= from && timeSec <= to;
        }).map(({ mark, ...rest }) => rest);

        if (filteredBars.length === 0) {
            setTimeout(() => onHistoryCallback([], { noData: true }), 0);
        } else if (filteredBars.length < periodParams.countBack) {
            setTimeout(() => onHistoryCallback(filteredBars, { noData: true }), 0);
        } else {
            setTimeout(() => onHistoryCallback(filteredBars, { noData: false }), 0);
        }
    }
    async subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
        console.log('[subscribeBars]: Real-time updates disabled for static data');
    }
    async unsubscribeBars(subscriberUID) {
        console.log('[unsubscribeBars]: Real-time updates disabled for static data');
    }
}
const customDatafeed = new CustomDatafeed();
export default customDatafeed;

