import { gql } from '@apollo/client';

export const GetTodoList = gql`
query MyQuery {
  todolist {
    id
    is_done
    title
  }
}
`

export const GetTodobyid = gql`
query MyQuery($_eq: Int!) {
  todolist(where: {id: {_eq: $_eq}}) {
    id
    is_done
    title
  }
}
`
