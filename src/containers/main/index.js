import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// Selectors
import { getUI } from 'selectors/ui';
//Components
import SubHeader from 'components/sub-header/sub-header';
import SearchResults from 'components/search/search-results';
import SearchForm from 'components/search/search-form';


class Main extends Component {
    render() {
        const { getUI } = this.props;
        return (
            <Fragment>
                <SubHeader />
                {getUI.viewStatus && <SearchForm />}
                {getUI.viewStatus && <SearchResults />}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    getUI: getUI(state),
});
export default connect(mapStateToProps)(Main);