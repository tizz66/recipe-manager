import React from 'react';
import mapValues from 'lodash/object/mapValues';
import LabelsItem from './LabelsItem';
import LabelsToolbar from './LabelsToolbar';
import './labels.less';

var LabelsList = React.createClass({
	render: function () {
		return (
			<div className='App-labels'>
				<ul>
					<LabelsItem 
						title='All Recipes'
						slug='all'
						id={0}
						selected={this.props.selectedLabel === 0 ? true : false}
						{...this.props.appActions} />
					{
						this.props.labels.map( (label) => {
							return (
								<LabelsItem 
									key={label.id}
									title={label.title}
									slug={label.slug}
									id={label.id}
									selected={this.props.selectedLabel == label.id ? true : false}
									{...this.props.labelActions}
									{...this.props.appActions} />
							)
						}) 
					}
				</ul>
				<LabelsToolbar {...this.props.actions} />
			</div>
		)
	}
});

export default LabelsList;