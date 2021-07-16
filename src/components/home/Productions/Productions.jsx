import React from 'react';
import './index.less';

const Productions = (props) => {
	const Production_Item = item_props => {
		return (
			<>
				<div className="production__item" onClick={()=>{props.header.history.push('/detail')}}>
					<div className="item-photo">
						<img src="kfc.jpg" alt="" width="100%" />
						<div className="discount">4.5折</div>
					</div>
					<div className="item-context">
						<div className="context-title">
							{/* eslint-disable-next-line react/prop-types */}
							{item_props.context}
						</div>
						<div className="price-box">
							<div className="price__sales">￥ 14.9</div>
							<div className="price__origin">
								<del>￥ 20</del>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="production__flex-box">
				<div className="production__list-box">
					<Production_Item context="Y51香辣鸡腿堡" />
					<Production_Item context="Y51香辣鸡腿堡" />
					<Production_Item context="Y51香辣鸡腿堡单人餐" />
					<Production_Item context="Y51香辣鸡腿堡" />
					<Production_Item context="Y51香辣鸡腿堡" />
					<Production_Item context="Y51香辣鸡腿堡" />
				</div>
			</div>
		</>
	);
};

export default Productions;
