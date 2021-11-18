import ListItem from './ListItem';
import {gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { useState, useEffect } from 'react';


export const GetPassenger = gql`
    query MyQuery {
        passenger {
        id
        jenis_kelamin
        nama
        umur
        }
    }  
`

const GetPassengerbyId = gql`
    query MyQuery($id: Int) {
        passenger(where: {id: {_eq: $id}}) {
        id
        jenis_kelamin
        nama
        umur
        }
    }
`

const UpdatePassenger = gql`
    mutation MyMutation($id: Int!, $_set: passenger_set_input = {}) {
        update_passenger_by_pk(pk_columns: {id: $id}, _set: $_set) {
        id
        jenis_kelamin
        nama
        umur
        }
    }  
`

const DeletePassenger = gql`
    mutation MyMutation($id: Int!) {
        delete_passenger_by_pk(id: $id) {
        id
        }
    }
`

const ListPassenger = props => {
    const {data, loading, error} = useQuery(GetPassenger)
    const [getDataById, {data: oneData, loading: loadingLazy, error: errorLazy}] = useLazyQuery(GetPassengerbyId)
    const [updatePassenger, {loading: loadingUpdate}] = useMutation(UpdatePassenger, 
        {refetchQueries: [GetPassenger]})
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeletePassenger, 
        {refetchQueries: [GetPassenger]})

    const [PassengerId, setPassengerId] = useState(0)
    const [list, setlist] = useState([])
    const [showEdit, setshowEdit] = useState({
        active: false,
        editPage: 'none',
        noneditPage: ''  
    })

    // useEffect(() => {
    //     if (data !== oneData){
    //         setlist(oneData?.passenger)
    //     }
    //     console.log('oneData useEffect', list)
    // }, [oneData])
    
    useEffect(() => {
        if (oneData?.passenger === []){
            setlist(data?.passenger)
        } 
        else{
            setlist(oneData?.passenger)
            console.log('list===onedata', oneData)
        }
    }, [oneData])

    useEffect(() => {
        if (data === oneData){
            setlist(data?.passenger)
            console.log('Initialdata')
        } else {
            console.log('data affected, and not same with oneData')
        }
    }, [data])
    
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
        if (data !== oneData){
            setlist(oneData?.passenger)
            console.log('changging data to one')
        }
        console.log('oneData')
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
    }

    const onDeletePassenger = (ID) => {
        deletePassenger({
            variables: {
                id: ID
            }
        })
        setlist(data?.passenger)
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