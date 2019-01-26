import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

const withCacheHOC = Component => {
    const WithCacheComponent = props => <Component {...props} cacheGetRequests={true} />;
    WithCacheComponent.displayName = "CachedSVG";
    return styled(WithCacheComponent)``;
};

export default withCacheHOC(SVG);