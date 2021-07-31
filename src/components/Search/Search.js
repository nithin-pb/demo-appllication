import React, {useEffect, useState} from "react";
import './search.scss';
import SearchIcon from '../../assets/images/search.svg'
import service from "../../service/service";
import useToken from "../../hooks/useToken";

export default function Search(props) {

    const [result, setResult] = useState([]);
    const [key, setKey] = useState([]);
    const [focused, setFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = useToken()

    const handleSearchChange = async () => {
        try {
            setLoading(true);
            const headers = {
                'Authorization': 'Bearer ' + token,
            }
            const params = {searchKey: key}
            const result = await service.Stock().stockSearch({params, headers})
            ;
            setResult(result.data.data)
        } catch (e) {
            alert('something went wrong')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (focused) {
            handleSearchChange()
        }
    }, [key])

    const handleClick = (e, name) => {
        props.onClick(e);
        setKey(name);
        setResult([]);
        setFocused(false);
    }

    return (
        <div style={{marginTop: 40}}>
            <div className={"search"}>
                <input type="text"
                       onFocus={() => setFocused(true)}
                       value={key}
                       autoComplete={"off"}
                       onChange={(e) => setKey(e.target.value)}
                       name="Search a company"
                       placeholder={"Search a company"}/>
                <img className={"search-icon"} src={SearchIcon} alt={'Searchicon'}/>
                {loading && <Loading/>}
                {(result.length > 0 && key.length > 0 && focused) &&
                <SearchResult searchResult={result} onClick={handleClick}/>}
            </div>
        </div>
    )
}


function SearchResult(props) {
    const {searchResult = []} = {...props}
    return (
        <div className={"search-result w-100"}>
            <ul>
                {
                    searchResult.map((company) => {
                        return (
                            <li key={company.SNo} className={'para'}
                                onClick={() => props.onClick(company.SNo, company.Name)}>
                                {company.Name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


function Loading() {
    return (
        <div className={"loading-search"}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}