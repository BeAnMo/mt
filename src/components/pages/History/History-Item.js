import React from 'react'
import {List, ListItem, AccordionContent} from 'framework7-react';

const formDefaults = {
    date: null,
    location: [],
    illnesses: [],
    medications: [],
    foods: [],
    activities: [],
    fatigue: '-1',
    sleepQuantity: '-1',
    sleepQuality: '-1',
    setting: 1, // 1 is indoors/0 is outdoors
    comments: ''
}

function testObjects(n){
    const rand = () => Math.floor(Math.random() * 11)
    let arr = []
    
    for(let i = 0; i < n; i++){
        let obj = Object.create(formDefaults)
        obj.date = new Date()
        obj.fatigue = rand()
        obj.sleepQuantity = rand()
        obj.SleepQuality = rand()
    
        arr = [...arr, obj]
    }
    
    return arr
}

const HistoryItem = (props) => (
    <ListItem accordionItem title={props.migraine.date}>
        <AccordionContent>
            <p>Location</p>
            <p>Present Conditions</p>
            <p>Medications Taken</p>
            <p>Food or Drink Consumed</p>
            <p>Prior Activities</p>
            <p>Fatigue Level</p>
            <p>Sleep Amount</p>
            <p>Sleep Quality</p>
            <p>Setting</p>
            <p>Comments</p>
        </AccordionContent>
    </ListItem>
)

export const HistoryItemList = () => (
    <List accordion>
        {testObjects(5).map((obj, i) => <HistoryItem key={i} migraine={obj} />)}
    </List>
)


