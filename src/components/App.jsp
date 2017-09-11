import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {
	Framework7App, Statusbar, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavCenter
} from 'framework7-react';
import {store, framework7StateKernel} from '../store';
import {navigateTo, goBack} from 'framework7-redux';
import {connect} from 'react-redux';
import {routes} from '../routes';

import FormContainer from './pages/Record/FormContainer';

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavCenter sliding>Migraine Tracker</NavCenter>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavCenter sliding>Migraine Tracker</NavCenter>
							</Navbar>
						) : null}						
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
							<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
						</ContentBlock>
						<ContentBlockTitle>Navigation</ContentBlockTitle>
						<List>
							<ListItem link="/record/" title="Record a Migraine"></ListItem>
							<ListItem link="/history/" title="View History"></ListItem>							
						</List>
						
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};


/*export const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="ios" routes={routes}>		
		<Statusbar />		
		<MainViews />
	</Framework7App>  
);*/

export const App = () => (
    <Provider store={store}>
      <Framework7App
        themeType="ios"
        routes={routes}                
        router={false}
        stateKernel={framework7StateKernel}>
        <Statusbar />
        <MainViews />
        {/*<FormContainer />*/}
      </Framework7App>
    </Provider>
)
