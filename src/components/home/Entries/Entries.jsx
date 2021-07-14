import { Flex, WingBlank } from 'antd-mobile';
import React from 'react';
import './index.less';
const Entries = () => {
	// eslint-disable-next-line react/prop-types
	const PlaceHolder = ({ className = '', ...restProps }) => (
		<div className={`${className} placeholder`} {...restProps}>
			<div className="item__icon">
				{/*开发结束这个图片放到服务器上去*/}
				<img src="iconItem.png" alt="图标" width="100%" />
			</div>
			<div className="item__text">特惠充值</div>
		</div>
	);

	return (
		<>
			<div className="flex-container">
				<div className="flex-container__item-box">
					<div className="flex-container__item">
						<PlaceHolder />
					</div>
					<div className="flex-container__item">
						<PlaceHolder />
					</div>
					<div className="flex-container__item">
						<PlaceHolder />
					</div>
					<div className="flex-container__item">
						<PlaceHolder />
					</div>
					<div className="flex-container__item">
						<PlaceHolder />
					</div>
				</div>
			</div>
		</>
	);
};

export default Entries;
