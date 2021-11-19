import { useMutation } from "@apollo/client"
import { InsertPassenger } from "../graphql/mutation"
import { GetPassenger } from "../graphql/query"

export default function useInsertPassenger() {
    const [insertPassenger, {loading: loadingInsert}] = useMutation(InsertPassenger, 
        {refetchQueries: [GetPassenger]})
    
    return {
        insertPassenger, loadingInsert
    }
}
