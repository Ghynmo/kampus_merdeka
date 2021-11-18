import { useSubscription } from '@apollo/client'
import { SubscriptionTodo } from 'graphql/subscribe'

export default function useSubscriptionTodo() {
    const {data, loading, error} = useSubscription(SubscriptionTodo)
    
    return {
        data, loading, error
    }
}
