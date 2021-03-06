import React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { Col, Button } from 'react-bootstrap';


function handleActive(e){
  const activeTabs = document.getElementsByClassName("active-tab");
  if (activeTabs){
    for (var i = 0; i < activeTabs.length; i++) {
      activeTabs[i].className = "";
    }
  }
  e.target.className = "";
  e.target.className = "active-tab";

}
const tabStyle = {
  'background': '#fff',
  'color': '#5C8788',
  'borderBottom': '1.4px solid #F6F5F9',
}
const OfferTabs = (props) => (
  <Col xs={8} className="product-info-tabs" xsOffset={2}>
    <Tabs inkBarStyle={{'display': 'none'}} className="tab-container">
      <Tab label="Overview" className="active-tab"
        style={tabStyle} onClick={handleActive}>
        <div className="tab-content">
          <h2 className="tab-content-title">Tab One</h2>
          <p>
            This is an example tab.
          </p>
          <p>
            You can put any sort of HTML or react component in here. It even keeps the component state!
          </p>
        </div>
      </Tab>
      <Tab label="Ratings" className="tab-info" onClick={handleActive}>
        <div className="tab-content">
          <h2 className="tab-content-title">Tab Two</h2>
          <p>
            This is another example tab.
          </p>
        </div>
      </Tab>
      <Tab label="Seller Info" className="tab-info" onClick={handleActive}>
        <div className="tab-content">
          <h3 className="tab-content-title">Seller Name</h3>
          <p>
            This is a third example tab.
          </p>
           <RaisedButton label="View Profile" className="btn-green" />
        </div>
      </Tab>

      <Tab label="FAQ" className="tab-info" onClick={handleActive}>
        <div className="tab-content">
          <h2 style={props.styles.headline}>Tab Three</h2>
          <p>
            FAQ TAB
          </p>
        </div>
      </Tab>
    </Tabs>
  </Col>
)

export default OfferTabs;
