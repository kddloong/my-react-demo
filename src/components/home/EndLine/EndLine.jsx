import React, { useEffect, useState } from 'react';
import { WingBlank } from 'antd-mobile';
import './index.less';
const EndLine = () => {
	return (
		<>
			<WingBlank>
				<div className="end-line">
					<div className="end-line--left"></div> 到底了!
					<div className="end-line--right"></div>
				</div>
			</WingBlank>
		</>
	);
};

export default EndLine;
