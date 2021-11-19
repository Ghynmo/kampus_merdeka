import { useSubscription } from '@apollo/client'
import { SubscriptionPassenger } from '../graphql/subscription'

export default function useSubscriptionPassenger() {
    const {data, loading, error} = useSubscription(SubscriptionPassenger)
    
    return {
        data, loading, error
    }
}