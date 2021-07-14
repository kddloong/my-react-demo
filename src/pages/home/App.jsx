import './App.less';
import React, { useEffect } from 'react';
import wx from 'weixin-js-sdk';
import MyCarousel from '../../components/home/Carousel/Carousel';
import { WhiteSpace } from 'antd-mobile';
import Recommend from '@/components/home/Recommend/Recommend';
import Entries from '@/components/home/Entries/Entries';
import Productions from '@/components/home/Productions/Productions';
import { Tabs } from '@/components/home/Tabs/Tabs';
import EndLine from '@/components/home/EndLine/EndLine';
import Brand from '@/components/Brand/Brand';
import { post } from '@/utils/axios_request';

const App = (props) => {

	console.log(props);

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
		<div className='App'>
			<MyCarousel />
			<WhiteSpace />
			<Entries />
			<Recommend />
			<WhiteSpace />
			<Productions />
			<WhiteSpace />
			<Tabs />
			<WhiteSpace />
			<EndLine />
			<WhiteSpace />
			<Brand />
		</div>
	);
};

export default App;
