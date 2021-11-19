import { gql } from '@apollo/client';


export const InsertPassenger = gql`
  mutation MyMutation($object: passenger_insert_input = {}) {
    insert_passenger_one(object: $object) {
      id
    }
  }
`

export const UpdatePassenger = gql`
mutation MyMutation($id: Int!, $_set: passenger_set_input = {}) {
    update_passenger_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    jenis_kelamin
    nama
    umur
    }
}  
`

export const DeletePassenger = gql`
mutation MyMutation($id: Int!) {
    delete_passenger_by_pk(id: $id) {
    id
    }
}
`
