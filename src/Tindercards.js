import React, {useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './Tindercards.css'
import instance from './Axios'

const Tindercards = () => {
    const [people, setPeople] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await instance.get('/tinder/cards')
            setPeople(request.data)
        }
        fetchData()
    },[])
    const Swiped = (direction, name) => {
        console.log('You swiped: ' + name)
        console.log("you swiped in " + direction + " direction")
    }

    const onCardLeftScreen = (name) => {
        console.log(name + ' left the screen')
    }
    return (
        <div className='tinder_card'>
            <div className="tindercrads_container">
                {people.map(person => {
                    return (
                        <>
                        <TinderCard key={person.name} className='swipe' preventSwipe={['up', 'down']} onSwipe={(dir) => Swiped(dir, person.name)} onCardLeftScreen={() => onCardLeftScreen(person.name)}>
                        
                                <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                                    <h3>{person.name}</h3>
                                </div>
                                
                            </TinderCard>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Tindercards