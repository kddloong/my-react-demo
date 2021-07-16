import React, { useEffect, useState } from 'react';
import Tabs_Item from '@/components/home/Tabs/Tabs_Item/Tabs_Item';
import data from './data';
import './Tabs_Title/index.less';
import $ from 'jquery';


export const Tabs = props => {
	const [tabsFlag, setTabsFlag] = useState('recom');

	let aClick = e => {
		let offset = $(`#${e.target.dataset.id}`).offset();
		$('body,html').animate({
			scrollTop:offset.top - 70
		})
	};

	function getScrollTab() {
		let scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		let tabList = document.getElementsByClassName('tab-list');

		let titleList = document.getElementsByClassName('title__item');

		let titleBox = document.getElementsByClassName('title__box');

		// console.log(titleList[1].scrollWidth);

		for (let i = 0; i < tabList.length; i++) {
			//第一个不管，， 第二个元素与 scrollTop 相差 80px的时候切换tap,

			if (
				tabList[i].offsetTop - scrollTop < 80 &&
				tabList[i].offsetTop - scrollTop > -250
			) {
				setTabsFlag(tabList[i].id);
				titleBox[0].scrollLeft = i * 44;
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', getScrollTab);
	}, []);

	return (
		<>
			<div className="title__box">
				<div
					className={`title__item ${
						tabsFlag === 'recom' ? 'title__item-chose' : ''
					}`}
				>
					<a data-id="recom"  onClick={e => aClick(e)}>
						热门推荐
					</a>
				</div>
				<div
					className={`title__item ${
						tabsFlag === 'coffee' ? 'title__item-chose' : ''
					}`}
				>
					<a data-id="coffee"  onClick={e => aClick(e)}>
						咖啡饮品
					</a>
				</div>
				<div
					className={`title__item ${
						tabsFlag === 'food' ? 'title__item-chose' : ''
					}`}
				>
					<a data-id="food"   onClick={e => aClick(e)}>
						餐饮饮食
					</a>
				</div>
				<div
					className={`title__item ${
						tabsFlag === 'mai' ? 'title__item-chose' : ''
					}`}
				>
					<a data-id="mai" onClick={e => aClick(e)}>
						外卖团购
					</a>
				</div>
				<div
					className={`title__item ${
						tabsFlag === 'movie' ? 'title__item-chose' : ''
					}`}
				>
					<a data-id="movie" onClick={e => aClick(e)}>
						影音娱乐
					</a>
				</div>
				<div
					className={`title__item ${
						tabsFlag === 'driver' ? 'title__item-chose' : ''
					}`}
				>
					<a data-id="driver" onClick={e => aClick(e)}>
						出行车服
					</a>
				</div>
			</div>

			<Tabs_Item id="recom" />
			<Tabs_Item id="coffee" />
			<Tabs_Item id="food" />
			<Tabs_Item id="mai" />
			<Tabs_Item id="movie" />
			<Tabs_Item id="driver" />
		</>
	);
};
