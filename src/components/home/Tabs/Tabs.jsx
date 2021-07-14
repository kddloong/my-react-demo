import React, { useEffect, useState } from 'react';
import Tabs_Item from '@/components/home/Tabs/Tabs_Item/Tabs_Item';
import data from './data'
import './Tabs_Title/index.less'

export const Tabs = props => {

	let aClick = e =>{
		console.log(e);
		let id = "";
		if(e.target.href){
			id= e.target.href.split("#")[1];
		}else {
			return;
		}
		let idDom = document.querySelector(`#${id}`);
		idDom.scrollIntoView();
	}

	return (
		<>
			<div className='title__box' onClick={props.aClick}>
				<div className='title__item  title__item-chose'>
					<a href='#recom'  >热门推荐</a>
				</div>
				<div className='title__item'><a href='#coffee'>餐饮饮品</a></div>
				<div className='title__item'><a href='#recom'>餐饮饮食</a></div>
				<div className='title__item'><a href='#recomd'>外卖团购</a></div>
				<div className='title__item'><a href='#recomd'>影音娱乐</a></div>
				<div className='title__item'><a href='#recomd'>出行车服</a></div>

			</div>
			<Tabs_Item id="recom"/>
			<Tabs_Item id="coffee" />
			<Tabs_Item id="recom" />
		</>
	);
};
