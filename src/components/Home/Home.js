import React, {useState} from "react";
import './home.scss'
import Search from "../Search/Search";
import CompanyStockDetails from "../CompanyStockDetails/CompanyStockDetails";

export default function Home() {

    const [searchId, setSearchId] = useState(null);

    return (
        <div className={"home-wrapper"}>
            <Header/>
            <Stock/>
            <Search onClick={(e) => setSearchId(e)}/>
            <CompanyStockDetails searchId={searchId}/>
        </div>
    )
}


function Header() {
    return (
        <div className={"header"}>
            <h1 className={"sub-title"}>
                Stocks
            </h1>
        </div>
    )
}


function Stock() {
    return (
        <div className="stock-wrapper">
            <div className={"heading-container"}>
                <h1 className={"title"}>
                    The Easiest way to buy and sell stocks
                </h1>
                <p className={"para"}>
                    Stock analysis and screening tool for investors in india
                </p>
            </div>
        </div>
    )
}