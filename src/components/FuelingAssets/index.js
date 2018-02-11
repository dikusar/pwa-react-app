import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import cardStyles from '../../styles/cardStyles'
import paragraphStyles from '../../styles/paragraphStyles'

const paragraphs = [
	{caption: 'Last Fuel Date', text: 'Empty'},
	{caption: 'Quantity', text: 'Empty'},
	{caption: 'Consumption deviate', text: 'Empty'}
]


class FuelingAssets extends Component {

	render(){
			const { classes }=this.props;
			return(	
				<Card className={ classes.card }>
					<CardContent>
						<Typography gutterBottom="true" type="headline">
							Assests
						</Typography>
						<Typography className={ classes.paragrapth } component="p">
						{paragraphs.map(
							(p, i) => (
								<Typography key={ `par-${i}` } className={ classes.paragrapthItem } component="span">
									<Typography type="caption" component="label">
										 { p.caption }
									</Typography>
									<Typography type="body2" component="span">
										 { p.text }
									</Typography>
								</Typography>
							)
						)}
						</Typography>		
					</CardContent>
				</Card>
			)
	}
}

FuelingAssets.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles( Object.assign({}, cardStyles, paragraphStyles ))(FuelingAssets)