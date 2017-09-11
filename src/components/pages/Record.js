import React, {Component} from 'react';
import {Page, Navbar, List, ListItem, FormLabel, FormInput, Button} from 'framework7-react';

const formDefaults = {
    date: null,
    location: [],
    illnesses: [],
    medications: [],
    foods: [],
    activities: '',
    fatigue: '-1',
    sleepQuantity: '-1',
    sleepQuality: '-1',
    setting: 1, // 1 is indoors/0 is outdoors
    comments: ''
}

//const pStyle = {margin: '1em 0'};

export class Record extends Component {
    constructor(props, context) {
        super(props, context);
        this.onInputChange = this.onInputChange.bind(this)
        this.onReset = this.onReset.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
        this.state = formDefaults        
    }

    onReset(){
        return this.setState(formDefaults)
    }
    
    onSubmit(){
        console.log(this.state)
    }
    
    onInputChange(e){
        const val = e.target.value
        const id = e.target.id
        const isArray = Array.isArray(this.state[id])
        const setState = (i, v) => this.setState({ ...this.state, [i]: v })
        
        if(isArray){
            return setState(id, val.split(','))
        } else {
            return setState(id, val)
        }
    }  

    render() {
        const state = this.state
    
        return (
            <Page>
                <Navbar backLink="Back" title="Recording a Migraine" sliding />

                {/*<ContentBlockTitle></ContentBlockTitle>*/}
                <List form id="migraineForm">
                    <ListItem>
                        <FormInput type="text" placeholder="Migraine Location" 
                            onChange={this.onInputChange} />   
                    </ListItem>
                    <ListItem> 
                        <FormInput type="text" placeholder="Allerigies or Illnesses" 
                            id="illnesses" onChange={this.onInputChange} />   
                    </ListItem>
                    <ListItem> 
                        <FormInput type="text" placeholder="Medications" id="medications" 
                            onChange={this.onInputChange} />   
                    </ListItem>
                    <ListItem> 
                        <FormInput type="text" placeholder="Food or Drink" id="foods"
                            onChange={this.onInputChange} />   
                    </ListItem>
                    <ListItem> 
                        <FormInput type="text" placeholder="Activities" id="activities"
                            onChange={this.onInputChange} />  
                    </ListItem>
                    
                    <ListItem>
                        <FormLabel>Setting</FormLabel>
                        <FormInput type="select" onChange={this.onInputChange} 
                            id="setting" value={state.setting}>
                            <option value="1">Indoors</option>
                            <option value="0">Outdoors</option>
                        </FormInput>
                    </ListItem>
                    
                    <ListItem>
                        <FormLabel>Fatigue Level</FormLabel>{console.log(state.fatigue)}
                        <FormInput type="range" min="0" max="10" step="1" value={state.fatigue}
                            id="fatigue" onChange={this.onInputChange} />
                    </ListItem>
                         
                    <ListItem>
                        <FormLabel>Sleep Quality</FormLabel>  
                        <FormInput type="range" min="0" max="10" step="1" value="1" 
                            id="sleepQuality" onChange={this.onInputChange} />
                    </ListItem>
                    
                    <ListItem>
                        <FormLabel>Sleep Amount</FormLabel>  
                        <FormInput type="number" min="0" max="50" step="0.5" placeholder="in Hours" 
                            id="sleepQuantity" value={state.sleepQuantity}
                            onChange={this.onInputChange} />
                    </ListItem>
                    
                    <ListItem>
                        {/*<FormLabel>Comments</FormLabel>*/}
                        <FormInput type="textarea" placeholder="Comments" id="comments" 
                            onChange={this.onInputChange} />
                    </ListItem>
                    <ListItem>
                        <Button big fill color="green" onClick={this.onSubmit} back>
                            Save
                        </Button>
                        <Button big fill color="red" onClick={this.onReset}>Reset</Button>
                    </ListItem>
                </List>

     
            </Page>
        );
    }
};
