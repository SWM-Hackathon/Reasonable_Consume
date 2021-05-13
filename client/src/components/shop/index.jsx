/* global kakao */
import React, { Component } from 'react';
// import styled from 'styled-components';
import * as S from './style';

import shopdatatable from './data';

class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			now: 0,
			mapdata: {
				latitude: 37.575955,
				longitude: 126.976855,
			},
			DATA: shopdatatable.DATA,
			selectedFilter: '한식',
		};
	}

	componentDidMount() {
		this.setState({
			mapdata: {
				latitude: 37.575955,
				longitude: 126.976855,
			},
		});
	}

	componentDidUpdate() {
		const script = document.createElement('script');
		script.async = true;
		script.src =
			'https://dapi.kakao.com/v2/maps/sdk.js?appkey=fcf5db2b8db420a5a59c1aa342976448&autoload=false';
		document.head.appendChild(script);

		script.onload = () => {
			kakao.maps.load(() => {
				const container = document.getElementById('map');
				const options = {
					center: new kakao.maps.LatLng(
						this.state.mapdata.latitude,
						this.state.mapdata.longitude
					),
					level: 4,
				};
				const markerPosition = new kakao.maps.LatLng(
					this.state.mapdata.latitude,
					this.state.mapdata.longitude
				);

				const map = new window.kakao.maps.Map(container, options);
				const marker = new kakao.maps.Marker({
					position: markerPosition,
				});
				marker.setMap(map);
			});
		};
	}

	changeShopDetails = (e, lati, longi) => {
		this.setState({
			now: e.target.value,
			mapdata: {
				latitude: lati,
				longitude: longi,
			},
		});
	};

	filterChange = (e) => {
		this.setState({
			selectedFilter: e.target.value,
		});
	};

	render() {
		return (
			<S.ShopContainer>
				<div style={{ height: 'auto', width: '20vw', overflowY: 'auto' }}>
					<select value={this.state.selectedFilter} onChange={this.filterChange} style={{width: '19vw', height: '5vh', textAlign: 'center', fontSize: '4vh'}}>
						<option value="한식">한식</option>
						<option value="중식">중식</option>
						<option value="경양식,일식">경양식,일식</option>
						<option value="기타외식업(다방,패스트푸드등)">
							기타외식업(다방,패스트푸드등)
						</option>
					</select>
					<S.ShopFilter>
						{this.state.DATA.map((x) =>
							x.sh_id === '00000000' ||
							x.induty_code_se_name !== this.state.selectedFilter ? (
								''
							) : (
								<button
									type="button"
									value={this.state.DATA.indexOf(x)}
									style={{ height: '100px', fontSize: '3vh' }}
									onClick={(e) =>
										this.changeShopDetails(e, x.latitude, x.longitude)
									}
								>
									{x.sh_name}
								</button>
							)
						)}
					</S.ShopFilter>
				</div>
				<S.ShopDetails>
					<div><br />
						<h1>{this.state.DATA[this.state.now].sh_name}</h1>
					</div>
					<div>
						<h2>
							특이사항
							<br />
							{this.state.DATA[this.state.now].sh_pride.split('\n').map((line) => (
								<span>
									▷ {line}
									<br />
								</span>
							))}
						</h2>
					</div>{' '}
					<br />
					<div>
						<h3>
							{this.state.DATA[this.state.now].sh_info.split('\n').map((line) => (
								<span>
									{line}
									<br />
								</span>
							))}
						</h3>
					</div>
					<div>
						<h2>
							전화번호
							<br />
						</h2>
						<h3>▶{this.state.DATA[this.state.now].sh_phone}</h3>
						<br />
						<h2>
							좌석 수<br />
						</h2>
						<h3>▶{this.state.DATA[this.state.now].seat_num}</h3>
						<br />
						<h2>
							찾아오시는 길<br />
						</h2>
						<h3>▶{this.state.DATA[this.state.now].sh_way}</h3>
						<br />
					</div>
				</S.ShopDetails>
				<S.ShopS id="map"> </S.ShopS>
			</S.ShopContainer>
		);
	}
}

export default Shop;