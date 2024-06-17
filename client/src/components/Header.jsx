"use client"

import React, { useState } from 'react';
import { Avatar, Input } from 'antd';
import { SearchOutlined, CommentOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Header = () => {
	const router = useRouter();
	const handleSearch = (value) => {
		const params = new URLSearchParams();
		if (value)
			params.set('search', value);
		else
			params.delete('search');
		router.push(`/?${params.toString()}`);
	}

	return (
		<div style={{width: "100%", height: "100px", backgroundColor: "#ffffff", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
			<Link href={'/'}>
				<div style={{fontWeight: "800", fontSize: "24px", lineHeight: "29px"}}>HustDiscuss</div>
			</Link>
			<div style={{width: "600px", marginLeft: "60px"}}>
				<Input.Search onSearch={handleSearch} size="large" placeholder="Tìm kiếm" allowClear />
			</div>
			<div style={{"display": "flex", "alignItems": "center", justifyContent: "space-between", gap: "20px"}}>
				{/* <CommentOutlined style={{fontSize: "32px"}}/>
				<NotificationOutlined style={{fontSize: "32px"}}/> */}
				<Avatar size={32} icon={<UserOutlined />} />
			</div>
		</div>
	);
};

export default Header;