import { useState } from "react"
import "./Home.css"
const ListItem = (props) => {
    const { id, nama, umur, jenis_kelamin } = props.data
    const { editPage, noneditPage} = props.showEdit

    const [state, setstate] = useState({
        id: props.data.id,
        updateNama: nama,
        updateUmur: umur,
        updateGender: jenis_kelamin
    })

    const onChange = (e) => {
        if (e.target.value !== ""){
            setstate({
              ...state,
              [e.target.name]: e.target.value,
            })
        }
      }

    return (
        <tbody>
            <tr>
                <td>{nama}</td>
                <td>{umur}</td>
                <td>{jenis_kelamin}</td>
                <td className="removeBorder" style={{display: noneditPage}} onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
                <td className="removeBorder" style={{display: noneditPage}} onClick={() => props.updatePengunjung(id)}><button>Edit</button></td>
            </tr>
            
            <tr style={{display: editPage}}>
                <td><input placeholder="Update Nama" name="updateNama" onChange={onChange}/></td>
                <td><input placeholder="Update Umur" name="updateUmur" onChange={onChange}/></td>
                <td>
                    <select name="updateGender" onChange={onChange}>
                        <option defaultValue></option>
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>
                </td>
                <td className="removeBorder"><button onClick={() => props.simpanUpdate(state)}>Save</button></td>
                <td className="removeBorder"><button onClick={() => props.backToHome()}>Cancel</button></td>
            </tr>

        </tbody>
    )
}

export default ListItem;