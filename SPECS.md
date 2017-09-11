- create actions for navigation

### default state
```
{
    session: {
        pageHistory: [...currentPage],
        currentPage: {},
    },
    user: {
        name: '',
        pass: '',
        opts: {},
        migraineHistory: [...currentMigraine],
        currentMigraine: {
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
    }
}
```

### session actions
- navigate to page
    - 'NAV_TO_PAGE'
    - page component name
    
- add page to history
    - 'ADD_PAGE_TO_HISTORY'
    - page component name/current state?
    
- navigate back 1 page
    - 'NAV_BACK_ONE_PAGE'
    - page component name/previous state?
    
- navigate forward 1 page
    - page component name/previous state?
    - 'NAV_FORWARD_ONE_PAGE'
    
### user actions
- submit current migraine to migraineHistory
    - 'SUBMIT_MIGRAINE'
    - currentMigraine
    
- add input text to array
    - 'SET_INPUT_TEXT_ARRAY'
    - String
    - currentMigraine[givenKey]
    
- add input text
    - 'SET_INPUT_TEXT'
    - String
    - currentMigraine[givenKey]
    
- toggle input boolean
    - 'SET_INPUT_BOOLEAN'
    - Boolean
    - currentMigraine[givenKey]
    
- adjust input number
    - 'SET_INPUT_NUMBER'
    - Number
    - currentMigraine[givenKey]
    
- get current date
    - 'SET_CURRENT_DATE'
    - Date
    - givenProp
    
### presentational components
- 
