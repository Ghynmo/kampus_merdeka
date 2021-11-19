import ListItem from './ListItem';
import { useState, useEffect } from 'react';
import useGetPassenger from '../hooks/useGetPassenger'
import useGetPassengerbyId from '../hooks/useGetPassengerbyId'
import useUpdatePassenger from '../hooks/useUpdatePassenger'
import useDeletePassenger from '../hooks/useDeletePassenger'
import useSubscription from '../hooks/useSubscriptionPassenger'

const ListPassenger = props => {
    // const {data, loading, error} = useGetPassenger()
    const {getDataById, oneData, loadingLazy, errorLazy} = useGetPassengerbyId()
    
    const {updatePassenger, loadingUpdate} = useUpdatePassenger()
    const {deletePassenger, loadingDelete} = useDeletePassenger()
    const {data, loading, error} = useSubscription()
    
    const [PassengerId, setPassengerId] = useState(0)
    const [list, setlist] = useState([])
    const [showEdit, setshowEdit] = useState({
        active: false,
        editPage: 'none',
        noneditPage: ''  
    })

    useEffect(() => {
        console.log('trig data')
        if (showEdit.active === true){

        } else {
            console.log('Initial')
            setlist(data?.passenger)
        }
    }, [data])

    useEffect(() => {
        setlist(oneData?.passenger)
        console.log('show onedata and not same with list')
    }, [oneData])
    
    useEffect(() => {
        if (showEdit.active === true){
            setshowEdit({
                ...showEdit,
                editPage: "",
                noneditPage: "none"
            })
        } else {
            setshowEdit({
                ...showEdit,
                editPage: "none",
                noneditPage: ""
            })
        }
    }, [showEdit.active])
    
    if (loading || loadingLazy || loadingUpdate || loadingDelete) {
        return <h2>Loading...</h2>
    }

    if (error || errorLazy) {
        console.log(error)
        return null
    }
   
    const onGetPassenger = () => {
        setlist(data?.passenger)
        setshowEdit({
            ...showEdit,
            active: false
        })
        console.log('allData')
    }
    
    const onChangePassenger = (e) => {
        if (e.target) {
            setPassengerId(e.target.value)
        }
    }

    const onGetPassengerbyid = () => {
        getDataById({
            variables: {
                id: PassengerId
            }
        })
    }

    const onUpdatePage = (ID) => {
        getDataById({
            variables: {
                id: ID
            }
        })
        setshowEdit({
            ...showEdit,
            active: true
        })
        setlist(oneData?.passenger)
        console.log('oneUpdatePage')
    }

    const saveUpdate = (data) => {
        updatePassenger({
            variables:{
                id: data.id,
                _set:{
                    nama: data.updateNama,
                    umur: data.updateUmur,
                    jenis_kelamin: data.updateGender,
                }
            }
        })
        console.log('update oneData')
    }

    const onDeletePassenger = (ID) => {
        deletePassenger({
            variables: {
                id: ID
            }
        })
        console.log('onDelete')
    }

    return (
        <div>
            <div style={{display: showEdit.noneditPage}}>
                <input value={PassengerId} onChange={onChangePassenger}></input>
                <button onClick={onGetPassengerbyid}>GetbyId</button>
                <button onClick={onGetPassenger}>ShowAll</button>
            </div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <tr>
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                    </tr>
                </thead>
                {list?.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        updatePengunjung={onUpdatePage}
                        simpanUpdate={saveUpdate}
                        hapusPengunjung={onDeletePassenger}
                        backToHome={onGetPassenger}
                        showEdit={showEdit}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;