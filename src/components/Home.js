import React from 'react'
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

export default function Home() { 
    return (
        <div>
            <Header/>
            <ListPassenger/>
            <PassengerInput/>
        </div>
    )
}
