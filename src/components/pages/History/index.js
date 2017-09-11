import React, {Component} from 'react';
import {Page, ContentBlockTitle, Navbar, 
PickerModal} from 'framework7-react';
import {HistoryItemList} from './History-Item'


export class History extends Component {
    constructor(props){
        super(props)
        this.onPickerClick = this.onPickerClick.bind(this)
        
        this.state = {
            isOpen: false
        }
    }
    
    onPickerClick(e){
        e.preventDefault()
        return this.setState({ isOpen: !this.state.isOpen })
    }
    
    render(){
        return (
            <Page>
                <Navbar title="About" backLink="Back" sliding />
                <p><a href="#" onClick={this.onPickerClick}>Open Calendar</a></p>
                <PickerModal opened={this.state.isOpen}>
                    <p>Hello</p>
                </PickerModal>
                
                <ContentBlockTitle inner>Most Recent Migraines</ContentBlockTitle>
                <HistoryItemList />
            </Page>
        )
    }
}
