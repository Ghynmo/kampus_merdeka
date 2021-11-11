import { useState } from "react"
import { useDispatch } from "react-redux"
import { tambahPengunjung } from "../store/passengerSlice"

function PassengerInput() {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        nama : "",
        umur : "",
        jenisKelamin : "Pria"
    })

    const [editing, setEditing] = useState(true)

    const onChange = e => {
        setData({...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = data.nama && data.umur && data.jenisKelamin
        if (formIsNotEmpty) {
            const newData = {
                nama : data.nama,
                umur : data.umur,
                jenisKelamin : data.jenisKelamin
            }

            dispatch(tambahPengunjung(newData))
            setData({
                nama : "",
                umur : "",
                jenisKelamin : "Pria"
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    const handleBukaInput = () => {
        setEditing(false)
    }

    const handleTutupInput = () => {
        setEditing(true)
    }

    const viewMode = {};
    const editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <div style={{marginTop: "20px"}}>
            <div onSubmit={() => {}} style={viewMode}>
                <p>Masukkan Nama Anda</p>
                <input type="text" placeholder="Nama anda..." value={data.nama} name="nama" onChange={onChange}></input>

                <p>Masukkan Umur Anda</p>
                <input type="number" placeholder="Umur anda..." value={data.umur} name="umur" onChange={onChange}></input>

                <p>Masukkan Jenis Kelamin Anda</p>
                <select onChange={onChange} name="jenisKelamin">
                    <option value="Pria" selected>Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>

                <div style={{marginTop: "30px"}}>
                    <button onClick={handleSubmit} style={{marginRight: "5px"}}>Submit</button>
                    <button onClick={handleTutupInput} style={{marginLeft: "5px"}}>Selesai</button>
                </div>
            </div>
            <button onClick={handleBukaInput} style={editMode}>Masukkan Nama Penumpang</button>
        </div>
    )
}

export default PassengerInput