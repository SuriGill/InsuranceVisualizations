import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Vitech_Information extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      policyType: 'Accident'
    }
  }

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
        this.get_data("https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" + "&q=id:1" + "&rows=1000")

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
    console.log(json) //Print record count.
  }

  handlePolicyChange = (event, index, value) => {
    console.log("You chose: " + value)
    this.setState({
      policyType: value
    })
    this.parsePolicyUrl(value)
  }

  getValueType = () => {
    return this.state.policyType
  }

  render() {
      return (
      	<div> 
          <DropDownMenu value={this.state.policyType} onChange={this.handlePolicyChange}>
            <MenuItem value={'Accident'} primaryText="Accident Policies" />
            <MenuItem value={'Dental'} primaryText="Dental Policies" />
          </DropDownMenu>
        </div>
      );
  }

}

export default Vitech_Information