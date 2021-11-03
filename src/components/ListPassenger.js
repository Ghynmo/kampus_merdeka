import React from 'react'
import { ListItem } from './ListItem'

const ListPassenger = (props) => {

    const {data, hapusPengunjung} = props

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>jenisKelamin</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((passenger) => <ListItem key={passenger.id} item = {passenger} hapusPengunjung={hapusPengunjung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger
