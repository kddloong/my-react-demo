import './home.less';
import React, { useEffect } from 'react';
import MyCarousel from '../../components/home/Carousel/Carousel';
import { WhiteSpace } from 'antd-mobile';
import Recommend from '@/components/home/Recommend/Recommend';
import Entries from '@/components/home/Entries/Entries';
import Productions from '@/components/home/Productions/Productions';
import { Tabs } from '@/components/home/Tabs/Tabs';
import EndLine from '@/components/home/EndLine/EndLine';
import Brand from '@/components/Brand/Brand';
import { post } from '@/utils/axios_request';

import './index.css'

document.title = "主页";

const Home = props => {

	useEffect(() => {
		// todo 打包时取消注释， 需要微信的接口
		// post('/h5/weixin/getUserInfo', {
		// 		code: props.code
		// 	}
		// ).then(res => {
		// 	console.log(res);
		// }).catch(data => {
		// 	console.log(data);
		// });
	}, []);

	return (
		<div className="App">
			{/*轮播图*/}
			<MyCarousel />
			<WhiteSpace />
			{/*目录入口*/}
			<Entries />
			{/*推荐图片（单纯的一个图）*/}
			<Recommend />
			<WhiteSpace />
			{/*推荐购买的产品*/}
			<Productions header={props}/>
			<WhiteSpace />
			{/*滚动栏*/}
			<Tabs />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />

			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />
			<WhiteSpace />

			<EndLine />
			<WhiteSpace />
			<Brand />
		</div>
	);
};

export default Home;
