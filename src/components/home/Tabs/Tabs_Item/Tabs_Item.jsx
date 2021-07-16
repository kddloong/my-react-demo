import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const IconItem = () => {
	return (
		<>
			<div className="box-item">
				<div className="box-item__icon">
					<img src="kfc_icon.png" alt="" width="100%" />
					<div className="box-item__icon-discount">5折</div>
				</div>
				<div className="box-item__name">肯德基</div>
			</div>
		</>
	);
};

const Tabs_Item = props => {
	let id = props.id ? props.id : 'no_id';

	return (
		<>
			<div className="tab-list" id={id}>
				<div className="tab-list__title">
					<img src={`${id}.png`} alt="" width="80%" />
				</div>
				<div className="tab-list__box">
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
					<IconItem />
				</div>
			</div>
		</>
	);
};

export default Tabs_Item;
