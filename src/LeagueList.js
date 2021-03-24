import React, {useState, useEffect} from 'react'
import axios from 'axios'

function LeagueList() {

    let [leagueList, setLeagueList] = useState([])
    let [finalList, setFinalList] = useState([])

    useEffect(() =>{
        axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
             .then((res) =>{
                // console.log(res.data.leagues);
                let newArray = res.data.leagues.map((dt) =>{
                    // console.log(dt);

                    return {
                        idLeague: dt.idLeague
                    }
                })

                setLeagueList(newArray)
             })
    }, [])

    useEffect(() =>{
        axios.all(leagueList.map((item) =>{
            return axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${item.idLeague}`)
        })).then((res) =>{
            // console.log('setidfy me = ', res);

            let ufff = res.map((item) =>{
                // console.log(item);

                return {
                    id: item.data.leagues[0].idLeague,
                    cupName: item.data.leagues[0].strLeague,
                    thumbUrl: item.data.leagues[0].strLogo
                }
            })

            console.log(ufff);

            setFinalList(ufff)
        })
    },[leagueList])
    
    return (
        <div>
            {
                finalList.map((item) =>{
                    return (
                        <fieldset>
                            <h3>{item.cupName}</h3>
                            <img src={item.thumbUrl} alt=""/>
                        </fieldset>
                    )
                })
            }
        </div>
    )
}

export default LeagueList
