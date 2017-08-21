import React, { Component} from 'react'
import Paper from 'material-ui/Paper';
import Img from 'react-image'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';

require('./styles/map-markerInfo.scss');

class ItemList extends Component{
	render(){
		return (
			<div className="Item__Wrap">
				<div className="item__header">
					<h6>{this.props.marker.title}</h6>
				</div>
				<div className="item__body">
					<div className="item__body-photo">
					<Img src="https://image.ibb.co/er6NWa/dummyimg.png" style={{height:100, width: 100}}/>
					</div>
					<div className="item__body-info">
						<b>category:</b> {this.props.marker.category} <br />
						<b>price:</b> {this.props.marker.price} {this.props.marker.currency}<br />
						<b>description:</b> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  <br />
						<b>quantity:</b> {this.props.marker.quantity} <br />
					</div>
				</div>
				<div className="item__footer">
					<Link to={'/offer/' + this.props.marker.offer}>
						<RaisedButton
							href=""
							target="_blank"
							label="Add to Cart"
							primary={true}
							icon={<FontIcon className="shopping-cart" />}
							style={{float: 'left'}}
						/>
					</Link>
				</div>
			</div>
		)
	}
}

export default ItemList