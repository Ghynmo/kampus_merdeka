import { useMutation } from '@apollo/client'
import { GetTodoList } from 'graphql/query'
import { UpdateTodo } from 'graphql/mutation'

export default function useUpdateTodo() {
    const [updateTodo, {loading: loadingUpdate}] = useMutation(UpdateTodo, 
        {refetchQueries: [GetTodoList]})
    
    return {
        updateTodo, loadingUpdate
    }
}
