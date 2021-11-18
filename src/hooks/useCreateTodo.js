import { useMutation } from '@apollo/client'
import { GetTodoList } from 'graphql/query'
import { CreateTodo } from 'graphql/mutation'

export default function useCreateTodo() {
    const [createTodo, {loading: loadingCreate}] = useMutation(CreateTodo, 
        {refetchQueries: [GetTodoList]})
    
    return {
        createTodo, loadingCreate
    }
}
