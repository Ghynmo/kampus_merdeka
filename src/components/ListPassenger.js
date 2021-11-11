import { useDispatch, useSelector } from "react-redux"
import { hapusPengunjung } from "../store/passengerSlice"
import ListItem from "./ListItem"

const ListPassenger = () => {
    const passengers = useSelector((state) => state.passenger.passengers)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Daftar Pengunjung</h1>
            <h3>Stasiun Pemalang</h3>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td style={{border: "1px solid black"}}>Nama</td>
                    <td style={{border: "1px solid black"}}>Umur</td>
                    <td style={{border: "1px solid black"}}>Jenis Kelamin</td>
                </thead>
                {passengers.map((item) => <ListItem key={item.id} item ={item} hapusPengunjung={() => {dispatch(hapusPengunjung(item.id))}}/>)}
            </table>
        </div>
    )
}

export default ListPassenger