import { useLazyQuery } from "@apollo/client"
import { GetPassengerbyId } from "../graphql/query"

export default function useGetPassengerbyId() {
    const [getDataById, {data: oneData, loading: loadingLazy, error: errorLazy}] = useLazyQuery(GetPassengerbyId)
    
    return {
        getDataById, oneData, loadingLazy, errorLazy
    }
}
