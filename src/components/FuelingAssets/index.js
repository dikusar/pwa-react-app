import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import cardStyles from '../../styles/cardStyles'
import paragraphStyles from '../../styles/paragraphStyles'

const theme = createMuiTheme();
const mixStyles = ()=> (Object.assign(cardStyles(theme), paragraphStyles))

const paragraphs = [
	{par: [
		{caption: 'Last Fuel Date', text: 'Empty'},
		{caption: 'Quantity', text: 'Empty'},
		{caption: 'Order Reference', text: 'Empty'},
		{caption: 'Consumption deviate', text: 'Empty'}
	]}
]


class FuelingAssets extends Component {

	render(){
		// this.props.classes = [cardStyles, paragraphStyles];

			const { classes }=this.props;
			return(	
				<Card className={ classes.card }>
					<CardContent>
						<Typography gutterBottom="true" type="title">
							Fueling Assests
						</Typography>
					</CardContent>
					<CardContent>
						{ paragraphs.map( (par, i) => {
							return (	
								<Typography key={ `par-${i}` } className={ classes.paragrapth } component="p">
									{par.par.map( (parItem, k) => (
											<Typography  key={ `par-item-${k}` } className={ classes.paragrapthItem } component="span">
												<Typography type="caption" component="label">
													 { parItem.caption }
												</Typography>
												<Typography type="body2" component="span">
													 { parItem.text }
												</Typography>
											</Typography>
										)
									)}
								</Typography>		
							)}
						)}
						
					</CardContent>
				</Card>
			)
	}
}

FuelingAssets.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles( mixStyles )(FuelingAssets)

