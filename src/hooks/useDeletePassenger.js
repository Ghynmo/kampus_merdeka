import { useMutation } from "@apollo/client"
import { DeletePassenger } from "../graphql/mutation"
import { GetPassenger } from "../graphql/query"

export default function useDeletePassenger() {
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeletePassenger, 
        {refetchQueries: [GetPassenger]})
    
    return {
        deletePassenger, loadingDelete
    }
}
