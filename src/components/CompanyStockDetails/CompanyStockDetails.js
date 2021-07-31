import React, {useEffect, useState} from "react";
import './stock.scss'
import service from "../../service/service";
import useToken from "../../hooks/useToken";

export default function CompanyStockDetails({searchId}) {
    const [data, setData] = useState({});
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = useToken()

    useEffect(() => {
        const fetchData = async () => {
            if (searchId) {
                setReady(false)
                setLoading(true);
                const headers = {
                    'Authorization': 'Bearer ' + token
                }
                const params = {id: searchId}
                const result = await service.Stock().stockData({params, headers});
                setData(result.data.data[0])
                setReady(true);
                setLoading(false);
            }
        }
        fetchData()
    }, [searchId])

    return (
        <React.Fragment>
            {
                ready &&
                <div className={"stock-details-wrapper"}>
                    <h1 className={"sub-title"}>
                        {data.Name}
                    </h1>
                    <div className={"result-container"}>
                        <div>
                            <SingleItem title={'Market Cap'} value={`₹${data.MarketCap}`} index={1}/>
                            <SingleItem title={'Current Price'} value={`₹${data.CurrentMarketPrice}`} index={2}/>
                            <SingleItem title={'Stock P/E'} value={`${data.StockPe}%`} index={3}/>
                            <SingleItem title={'Debt'} value={`₹${data.Debt}`} index={4}/>
                        </div>
                        <div>
                            <SingleItem title={'Dependent Yield'} value={`${data.DividendYield}%`} index={5}/>
                            <SingleItem title={'ROEC'} value={`${data.ROCE}%`} index={6}/>
                            <SingleItem title={"ROE"} value={`${data.ROEPreviousAnnum}%`} index={7}/>
                        </div>
                        <div>
                            <SingleItem title={"Debt Equality"} value={`${data.DebtToEquity}%`} index={8}/>
                            <SingleItem title={'Eps'} value={`₹${data.EPS}`} index={9}/>
                            <SingleItem title={'Reserves'} value={`₹${data.Reserves}`} index={10}/>
                        </div>
                    </div>
                </div>}
            {loading && <Loader/>}
        </React.Fragment>
    )
}

function SingleItem({title, value, index}) {

    const evenOdd = (e) => {
        return e % 2 !== 0;
    }

    return (
        <div className={(evenOdd(index) ? "item-wrapper background-even" : "item-wrapper background-odd")}>
            <p className={"title"}>
                {title}
            </p>
            <p className={"value"}>
                {value}
            </p>
        </div>
    )
}

function Loader() {
    return (
        <div className={"loading"}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}