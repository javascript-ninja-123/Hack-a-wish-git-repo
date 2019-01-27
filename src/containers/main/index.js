import React, { Component, Fragment } from 'react';
import SubHeader from 'components/sub-header/sub-header';
import SearchResults from 'components/search/search-results';
import SearchForm from 'components/search/search-form';


class Main extends Component {
    render() {
        return (
            <Fragment>
                <SubHeader />
                <SearchForm />
                <SearchResults />
            </Fragment>
        )
    }
}


export default Main;