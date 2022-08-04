import React from 'react' 
import WelcomeSection from './WelcomeSection/WelcomeSection'
import ComeWithFriendsSection from './ComeWithFriendsSection/ComeWithFriendsSection'
import DeliverSection from './DeliverSection/DeliverSection'

const HomeBody = ()=>{

    return(<div>
                <WelcomeSection/>
                <ComeWithFriendsSection/>
                <DeliverSection/>
            </div>)
}


export default HomeBody