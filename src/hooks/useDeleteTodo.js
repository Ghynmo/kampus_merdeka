import { useMutation } from '@apollo/client'
import { GetTodoList } from 'graphql/query'
import { DeleteTodo } from 'graphql/mutation'

export default function useDeleteTodo() {
    const [deleteTodo, {loading: loadingDelete}] = useMutation(DeleteTodo, 
        {refetchQueries: [GetTodoList]})
    
    return {
        deleteTodo, loadingDelete
    }
}
