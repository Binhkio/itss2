import React from 'react';
import { Avatar, Input } from 'antd';
import { SearchOutlined, CommentOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Header = () => {
	return (
		<div style={{width: "100%", height: "100px", backgroundColor: "#ffffff", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
			<Link href={'/'}>
				<div style={{fontWeight: "800", fontSize: "24px", lineHeight: "29px"}}>HUST</div>
			</Link>
			<div style={{width: "600px", marginLeft: "60px"}}>
				<Input size="large" placeholder="Tìm kiếm" prefix={<SearchOutlined />}/>
			</div>
			<div style={{"display": "flex", "alignItems": "center", justifyContent: "space-between", gap: "20px"}}>
				<CommentOutlined style={{fontSize: "32px"}}/>
				<NotificationOutlined style={{fontSize: "32px"}}/>
				<Avatar size={32} icon={<UserOutlined />} />
			</div>
		</div>
	);
};

export default Header;