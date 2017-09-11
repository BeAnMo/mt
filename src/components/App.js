import React from 'react';
import PropTypes from 'prop-types';
import {
	View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavCenter
} from 'framework7-react';

//import {navigateTo} from 'framework7-redux';
import {navToPage, navBack} from '../actions';
import {connect} from 'react-redux';

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
							<ListItem onClick={(e) => props.onLinkClick('/record/')} link="/record/" title="Record a Migraine"></ListItem>
							<ListItem onClick={(e) => props.onLinkClick('/history/')} link="/history/" title="View History"></ListItem>							
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

const mapStateToProps = (state) => {
    console.log('mapStateToProps')
    return {
        migraine: state
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps')
    return {
        onLinkClick(link){
            console.log(link)
            return dispatch(navToPage(link));
        }
    };
};

const App = connect(
    null,
    //mapStateToProps,
    mapDispatchToProps
)(MainViews);

export default App;
