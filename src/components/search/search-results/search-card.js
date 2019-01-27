import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';
import MainProfile from '../../profile/main-profile'
import DefaultHeadImage from '../../../images/default-profile.png';

// Actions
import { openProfile, closeProfile } from 'actions/ui';
//Selectors
import { getUI } from 'selectors/ui';

const ListCard = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
  min-width: 650px;
  width: 75%;
  height: 75px;
  border-radius: 2px;
  box-shadow: -2px 4px 9px -6px rgba(0,0,0,0.50);
`

const ListCardImage = styled.div`
display: block;
width: 50px;
height: 50px;
margin-left: 20px;
border-radius: 50%;
background: url(${({ src }) => (src ? `${src}` : `${DefaultHeadImage}`)});
background-position: center;
background-size: 100px;
`;
const ListCardDataWrapper = styled.div`
display: flex;
flex-flow: column nowrap;
margin-left: 20px;
width: 300px;
`
const ListCardData = styled.div`
  color: #C0C0C0;
  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
`
const Label = styled.div`
  display: flex;
  flex-flow: row nowrap;  
  font-size: 9px;
  margin-right: 20px;
  width: 30px;
`
const ProgressBar = styled.div`
width: ${({ outer, percentage }) => (outer ? '250px' : percentage)};
height: 20px;
border-radius: 50px;
background-color: ${({ outer }) => (outer ? 'rgba(0,0,0,.09)' : '#0075b8')}; ;
`
const Progress = styled.div`
margin-top: 10px;
margin-left: auto;
margin-right: 20px;
display: flex;
flex-flow: column nowrap;
`;
const Money = styled.div`
visibility: ${({ hover }) => (hover ? 'visible' : 'hidden')};
color: #C0C0C0;
margin-bottom: 10px;
`
class SearchCard extends PureComponent {
  state = {
    hover: false,
    isProfileOpen: false,
  }
  handleOpenProfile = () => {
    const top = this.scrollRef.offsetTop;
    if (this.props.getUI.profileOpen) {
      this.props.closeProfile();
      this.setState({ isProfileOpen: true }, () => {
        this.props.openProfile()
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      })
    } else {
      this.props.openProfile();
      this.setState({ isProfileOpen: true }, () => {
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        })
      })
    }


  }
  handleCloseProfile = () => {
    this.props.closeProfile();
    this.setState({ isProfileOpen: false })
  }
  handleHoverEnter = () => this.setState({ hover: true });
  handleHoverExit = () => this.setState({ hover: false })

  render() {
    const { getUI, firstName, awesomeName, illness, age, shortProfile, moneyRaised, thumbnailSrc, amountNeeded, product } = this.props;
    const raisedMoney = moneyRaised.toLocaleString();
    const goalMoney = amountNeeded.toLocaleString();
    const productGoal = product && product.tickets ? 1000 : 0;
    const percentageNum = (Math.floor(((moneyRaised + productGoal) / amountNeeded) * 100));
    const percentage = (Math.floor(((moneyRaised + productGoal) / amountNeeded) * 100)) + '%';
    const completed = Boolean(percentage === '100%');
    const profileOpen = getUI.profileOpen;
    const { isProfileOpen } = this.state;

    return (
      <div style={{ height: '100%', width: '100%' }}>
        {!isProfileOpen && (<ListCard ref={e => (this.scrollRef = e)} onClick={this.handleOpenProfile}>
          <ListCardImage src={thumbnailSrc} />
          <ListCardDataWrapper>
            <ListCardData>
              <Label>Name |</Label>
              {firstName}
              <span style={{ color: '#0075b8', fontWeight: 'bold', marginLeft: '5px' }}>
                {awesomeName}
              </span>
            </ListCardData>
            <ListCardData>
              <Label>Age |</Label>
              {age}
            </ListCardData>
            <ListCardData>
              <Label>Illness |</Label>
              {illness}
            </ListCardData>
          </ListCardDataWrapper>

          <Progress>
            <Money style={{ color: completed ? '#35B729' : '' }} hover={this.state.hover || completed}>
              {!completed && "Raised "}
              <Icon style={{ color: completed ? '#35B729' : '#0075b8', marginRight: !completed ? '-3px' : '' }} name={completed ? 'check' : 'dollar sign'} />
              {!completed && (<span><span style={{ color: '#0075b8' }}>{raisedMoney} </span>
                of<Icon style={{ color: '#C0C0C0', marginRight: '-3px' }} name={'dollar sign'} />{goalMoney} goal</span>)}
              {completed && "Completed!  "}
            </Money>
            <ProgressBar outer={true}
              onMouseEnter={this.handleHoverEnter}
              onMouseLeave={this.handleHoverExit}>
              <ProgressBar percentage={percentage} />
            </ProgressBar>
          </Progress>
        </ListCard>)}
        {isProfileOpen && <MainProfile percentage={percentageNum} ref={e => (this.openedRef = e)} closeProfile={() => this.handleCloseProfile()} />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  getUI: getUI(state),
});
const mapDispatchToProps = dispatch => ({
  openProfile: state => dispatch(openProfile(state)),
  closeProfile: state => dispatch(closeProfile(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCard);