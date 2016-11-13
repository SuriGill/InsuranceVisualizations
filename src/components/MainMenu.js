import React, { Component } from 'react';
import ReactEsriMap, { BaseMapLayer, FeatureLayer, GeoJSON, TiledMapLayer } from 'react-esri-map';

// material UI
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

import Vitech_Information from './Vitech_Information'
import Esri_Map from './Esri_Map'

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state={
      loading: false,
      finished: false,
      stepIndex: 0
    }
  }

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <p>
            This is an application that will be able to represent your criteria on 
            specific data regarding your insurance policies and promotional plans.
          </p>
        );
      case 1:
        return (
          <Vitech_Information />
        );
      case 2:
        return (
          <Esri_Map id='Map'/>
        );
      default:
        return "This shouldn't be accessible!";
    }
  }



  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    if (finished) {
      return (
        <div style={{minHeight:500}}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to view different results.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="MainMenu">
        <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
          <Stepper activeStep={this.state.stepIndex}>
            <Step>
              <StepLabel>Vitech Visualiazations</StepLabel>
            </Step>
            <Step>
              <StepLabel>Set your parameters!</StepLabel>
            </Step>
            <Step>
              <StepLabel>Map View</StepLabel>
            </Step>
          </Stepper>
          <ExpandTransition loading={this.state.loading} open={true}>
            {this.renderContent()}
          </ExpandTransition>
      </div>
      </div>


    );
  }
}


export default MainMenu;

