import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// -- Components
import SearchCard from './search-card';

// -- Selectors
import { getSearch } from 'selectors';

// -- Styled Components
const SearchResultsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px;
  margin-left: 15vw;
  & .ui.card {
    margin: 0 8px;
    padding: 0;
  }
`;

class SearchResults extends Component {
  state = {
    view: 'grid'
  }

  render() {
    const { searchState: { results, isLoading, error } } = this.props;

    return (<SearchResultsWrapper>
      {!isLoading && results.data &&
        results.data.map((item) => <SearchCard key={item.id} {...item} />)
      }
    </SearchResultsWrapper>);
  }
}

const mapStateToProps = state => ({
  searchState: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  search: request => dispatch(search(request))
});



export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);