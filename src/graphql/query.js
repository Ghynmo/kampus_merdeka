import { gql } from '@apollo/client';


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

export const GetPassengerbyId = gql`
    query MyQuery($id: Int) {
        passenger(where: {id: {_eq: $id}}) {
        id
        jenis_kelamin
        nama
        umur
        }
    }
`
