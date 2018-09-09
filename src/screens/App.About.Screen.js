import React, { Component } from 'react';
import styled from 'styled-components/native';
import ApplicationState from '../store/Application.State.Mobx';
import { observer, inject } from 'mobx-react';
const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${props => props.theme.BLACK}
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.VIVIDWHITE};
`;

@inject('ApplicationState')
@observer
class AppAboutScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>{this.props.navigation.state.routeName}</TitleText>
        <TitleText>DemostrationVariable: {ApplicationState.AppGlobalState.DemostrationVariable.toString()}</TitleText>
      </ContainerView>
    );
  }
}

export default AppAboutScreen;
