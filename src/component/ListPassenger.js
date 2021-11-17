import ListItem from './ListItem';
import {gql, useLazyQuery} from '@apollo/client';
import { useState } from 'react';

const GetPassengerbyId = gql `
    query MyQuery($id: Int) {
        passenger(where: {id: {_eq: $id}}) {
        jenis_kelamin
        nama
        umur
        }
    }
`

const ListPassenger = props => {
    const [getdata, {data, loading, error}] = useLazyQuery(GetPassengerbyId)
    const [PassengerId, setPassengerId] = useState(0)
    const [list, setlist] = useState([])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        console.log(error)
        return null
    }

    const onGetPassengerbyid = () => {
        getdata({
            variables: {
                id: PassengerId
            }
        })
        setlist(data?.passenger)
    }

    const onChangePassenger = (e) => {
        if (e.target) {
            setPassengerId(e.target.value)
        }
    }

    return (
        <div>
            <input value={PassengerId} onChange={onChangePassenger}></input>
            <button onClick={onGetPassengerbyid}>GetbyId</button>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.passenger.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;