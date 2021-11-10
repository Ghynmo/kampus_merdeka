import React, { useRef } from 'react'
import { useState } from 'react'
import './reactform.css'

export default function ReactForm() {

    const dataAwal = {
        judul: '',
        pengarang: '',
        cetakan: '',
        tahunTerbit: 0,
        kotaTerbit: '',
        harga: 0

    }

    const [data, setdata] = useState(dataAwal)

    const regex = /^[A-Za-z ]*$/;

    const fotoInput = useRef(null)

    const handleInput = (e) => {
        const name = e.target.name
        const val = e.target.value

        setdata({
            ...data,
            [name]: val
        })
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Judul</label>
                <input type="text" className="" name="judul" onChange={handleInput} value={data.judul} pattern="A-Za-z" required/>

                <label htmlFor="">Pengarang</label>
                <input type="text" className="" name="pengarang" onChange={handleInput} value={data.pengarang} />

                <label htmlFor="">Cetakan</label>
                <input type="text" className="" name="cetakan" onChange={handleInput} value={data.cetakan} />

                <label htmlFor="">Tahun terbit</label>
                <input type="text" className="" name="tahunTerbit" onChange={handleInput} value={data.tahunTerbit} />

                <label htmlFor="">Kota terbit</label>
                <input type="text" className="" name="kotaTerbit" onChange={handleInput} value={data.kotaTerbit} />

                <label htmlFor="">Harga</label>
                <input type="number" className="" name="harga" onChange={handleInput} value={data.harga} />

                <label htmlFor="">Foto sampul</label>
                <input type="file" className="" name="fotoSampul" refs={fotoInput} />

                <div className="btn-group">
                    <button>Submit</button>
                    <button>Reset</button>
                </div>
            </form>
        </div>
    )
}
