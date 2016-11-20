import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Vitech_Information extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      policyType: 'Accident',
      couponType: 'Coupon Code',
      open: false,
      information: "Waiting for information"
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentWillMount = () => {
    console.log('check stuff here')
    // this.get_data(this.parsePolicyUrl())
    // this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=!insurance_plan:Gold&fq=!insurance_plan:Silver" + "&rows=1000")
    // this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=id:1" + "&rows=1000")
    // this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=!promo_codes:FREESPOUSE" + "&rows=1000")

  }
  // params: id, i_coverage, i_plan, i_premium, i_product, p_id, p_startDate, promoCode
  parsePolicyUrl = (params) => {
    // for (let i = 0; i < params.length; i++) {
    // }
    // return "https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=id:1" + "&rows=10000";
    // return "https://v3v10.vitechinc.com/solr/activities/select?indent=on&q=*:*&wt=json"
    // this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Accident&fq=promo_codes:FREESPOUSE||promo_codes=ACCOFF10||promo_codes=FINCON" + "&rows=44000")
    // this.get_data("https://v3v10.vitechinc.com/solr/activities/select?indent=on&q=*:*&wt=json")
    // this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=id:1" + "&rows=1000")

    // this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=!insurance_plan:Gold&fq=!insurance_plan:Silver" + "&rows=1000")

  }

  get_data = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE)
      {
        this.searchSuccess(xhr.responseText);
      }
    }
    xhr.send(null);
  }

  searchSuccess = (response) => {
    let json = JSON.parse(response);
    console.log(json.response.numFound) //Print record count.

    this.setState({
      information: "You're query found: " + json.response.numFound + " policies."
    })

  }

  handlePolicyChange = (event, index, value) => {
    console.log("You chose: " + value)
    this.setState({
      policyType: value
    })
    // this.parsePolicyUrl(value)
  }
  handleCouponChange = (event, index, value) => {
    console.log("You chose: " + value)
    this.setState({
      couponType: value
    })
    if (value === 'FREESPOUSE') {
      if (this.state.policyType === 'Accident') {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Accident&fq=promo_codes:FREESPOUSE" + "&rows=44000")
      } else {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Dental&fq=promo_codes:FREESPOUSE" + "&rows=44000")
      }
    }
    else if (value === 'ACCOFF10') {
      if (this.state.policyType === 'Accident') {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Accident&fq=promo_codes:ACCOFF10" + "&rows=44000")
      } else {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Dental&fq=promo_codes:ACCOFF10" + "&rows=44000")
      }
    }
    else if (value === 'ALL') {
      if (this.state.policyType === 'Accident') {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Accident&fq=promo_codes:FREESPOUSE||promo_codes=ACCOFF10||promo_codes=FINCON" + "&rows=44000")
      } else {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Dental&fq=promo_codes:FREESPOUSE||promo_codes=ACCOFF10||promo_codes=FINCON" + "&rows=44000")
      }

    }
    else {
      if (this.state.policyType === 'Accident') {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Accident&fq=promo_codes:FINCON" + "&rows=44000")
      } else {
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=insurance_product:Dental&fq=promo_codes:FINCON" + "&rows=44000")
      }
    }
    this.handleOpen()
  }

  getValueType = () => {
    return this.state.policyType
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,

    ];
    return (
    	<div> 
        <DropDownMenu value={this.state.policyType} onChange={this.handlePolicyChange}>
          <MenuItem value={'Accident'} primaryText="Accident Policies" />
          <MenuItem value={'Dental'} primaryText="Dental Policies" />
        </DropDownMenu>
        <br/>
        <DropDownMenu value={this.state.couponType} onChange={this.handleCouponChange}>
          <MenuItem value={'FREESPOUSE'} primaryText='FREESPOUSE Coupon' />
          <MenuItem value={'ACCOFF10'} primaryText="ACCOFF10 Coupon" />
          <MenuItem value={'FINCON'} primaryText="FINCON Coupon" />
          <MenuItem value={'ALL'} primaryText="All Coupons" />
        </DropDownMenu>
        <Dialog
          title="Vitech Parsed Information"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        {this.state.information}
        </Dialog>
      </div>
    );
  }

}

export default Vitech_Information