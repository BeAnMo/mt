import React from 'react';
import {Page, Navbar, List, ListItem, FormLabel, FormInput, Button} from 'framework7-react';

export const FormPage = ({onAtomChange, onArrayChange, onSubmit, onReset}) => (
    <Page>
        <Navbar backLink="Back" title="Recording a Migraine" sliding />

        {/*<ContentBlockTitle></ContentBlockTitle>*/}
        <List form id="migraineForm">
            <ListItem>
                <FormInput type="text" placeholder="Migraine Location" 
                    onChange={onArrayChange} />   
            </ListItem>
            <ListItem> 
                <FormInput type="text" placeholder="Allerigies or Illnesses" 
                    id="illnesses" onChange={onArrayChange} />   
            </ListItem>
            <ListItem> 
                <FormInput type="text" placeholder="Medications" id="medications" 
                    onChange={onArrayChange} />   
            </ListItem>
            <ListItem> 
                <FormInput type="text" placeholder="Food or Drink" id="foods"
                    onChange={onArrayChange} />   
            </ListItem>
            <ListItem> 
                <FormInput type="text" placeholder="Activities" id="activities"
                    onChange={onArrayChange} />  
            </ListItem>
            
            <ListItem>
                <FormLabel>Indoors?</FormLabel>
                <FormInput type="checkbox" onChange={onAtomChange} 
                    id="setting" >
                </FormInput>
            </ListItem>
            
            <ListItem>
                <FormLabel>Fatigue Level</FormLabel>
                <FormInput type="range" min="0" max="10" step="1"
                    id="fatigue" onChange={onAtomChange} />
            </ListItem>
                 
            <ListItem>
                <FormLabel>Sleep Quality</FormLabel>  
                <FormInput type="range" min="0" max="10" step="1" value="1" 
                    id="sleepQuality" onChange={onAtomChange} />
            </ListItem>
            
            <ListItem>
                <FormLabel>Sleep Amount</FormLabel>  
                <FormInput type="number" min="0" max="50" step="0.5" placeholder="in Hours" 
                    id="sleepQuantity"
                    onChange={onAtomChange} />
            </ListItem>
            
            <ListItem>
                {/*<FormLabel>Comments</FormLabel>*/}
                <FormInput type="textarea" placeholder="Comments" id="comments" 
                    onChange={onAtomChange} />
            </ListItem>
            <ListItem>
                <Button big fill color="green" onClick={onSubmit} back>
                    Save
                </Button>
                <Button big fill color="red" onClick={onReset}>Reset</Button>
            </ListItem>
        </List>


    </Page>
);
