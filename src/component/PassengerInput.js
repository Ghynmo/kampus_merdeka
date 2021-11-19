import { useState } from "react"
import "./Home.css"
import {GetPassenger} from "./ListPassenger"
import {gql, useMutation} from '@apollo/client'

const InsertPassenger = gql`
  mutation MyMutation($object: passenger_insert_input = {}) {
    insert_passenger_one(object: $object) {
      id
    }
  }
`

function PassengerInput(props) {
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  })
  
  const [insertPassenger, {loading: loadingInsert}] = useMutation(InsertPassenger, {refetchQueries: [GetPassenger]})

  if (loadingInsert){
    return <h3>Loading...</h3>
  }
  
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        insertPassenger({
          variables:{
            object: {
              nama: state.nama,
              umur: state.umur,
              jenis_kelamin: state.jenisKelamin
            }
          }
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" defaultValue>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
