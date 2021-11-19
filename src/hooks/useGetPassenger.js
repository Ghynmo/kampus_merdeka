import { useQuery } from "@apollo/client"
import { GetPassenger } from "../graphql/query"

export default function useGetPassenger() {
    const {data, loading, error} = useQuery(GetPassenger)
    
    return {
        data, loading, error
    }
}
