import React, { Component, Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import SVG from '../hoc/cached-svg'
import LocationIcon from '../images/blue-location-icon.svg'


//Styled Components
const SubHeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20px;
`;
const DonorsContainer = styled.div`
margin-top: 50px;
margin-left: 100px;
width: 25%;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const SearchContainer = styled.div`
margin-top: 50px;
width: 75%;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const Donors = styled.div`
margin: 5px;
padding: 3px;
cursor: pointer;
font-weight: bold;
user-select: none;
font-size: 16px;
border-bottom: ${({ selected }) => (selected ? '1px solid #0057B8' : '1px solid transparent')};
`;

class SubHeader extends PureComponent {
    state = {
        selected: true,
    }
    handleAnonymousClick = () => {
        this.setState({ selected: true })
    }
    handleDonorClick = () => {
        this.setState({ selected: false })
    }
    render() {
        const { selected } = this.state;
        return (
            <SubHeaderContainer>
                <DonorsContainer>
                    <Donors selected={selected} onClick={this.handleAnonymousClick}>Give Anonymously</Donors>
                    <div style={{ userSelect: 'none', color: '#C0C0C0', fontSize: '16px' }}>or</div>
                    <Donors selected={!selected} onClick={this.handleDonorClick}>Donor Sign In</Donors>
                </DonorsContainer>
                <SearchContainer>
                    <div style={{ userSelect: 'none', color: '#C0C0C0', fontSize: '16px', marginRight: '20px' }}>|</div>
                    <SVG style={{ marginTop: '3px' }} src={LocationIcon} />
                </SearchContainer >
            </SubHeaderContainer>
        )
    }
}
export default SubHeader;