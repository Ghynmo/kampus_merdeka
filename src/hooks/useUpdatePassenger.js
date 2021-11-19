import { useMutation } from "@apollo/client"
import { UpdatePassenger } from "../graphql/mutation"
import { GetPassenger } from "../graphql/query"

export default function useUpdatePassenger() {
    const [updatePassenger, {loading: loadingUpdate}] = useMutation(UpdatePassenger, 
        {refetchQueries: [GetPassenger]})
    
    return {
        updatePassenger, loadingUpdate
    }
}
