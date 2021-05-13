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
				<S.ContainerPC>
					<div style={{ height: 'auto', width: '20vw', overflowY: 'auto' }}>
						<select
							value={this.state.selectedFilter}
							onChange={this.filterChange}
							style={{
								width: '19vw',
								height: '5vh',
								textAlign: 'center',
								fontSize: '1.5em',
							}}
						>
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
										style={{
											height: 'auto',
											fontSize: '1.2em',
											paddingTop: '10px',
											paddingBottom: '10px',
											boxShadow: 'rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset',
											borderRadius: '10px 0 10px 0',
										}}
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
						<div>
							<br />
							<h1
								style={{
									textAlign: 'center',
									textShadow: '5px 5px #dddddd',
									marginLeft: '15px',
									marginRight: '15px',
								}}
							>
								{this.state.DATA[this.state.now].sh_name}
								<br />
								<br />
								<img
									src={this.state.DATA[this.state.now].sh_photo}
									alt="img"
									style={{ width: '250px', height: '250px' }}
								/>
							</h1>
							<br />
							<br />
						</div>
						<div style={{ marginLeft: '15px', marginRight: '15px', lineHeight: '2em' }}>
							<h2>자랑거리</h2>
							<h3>
								{this.state.DATA[this.state.now].sh_pride
									.split('\n')
									.map((line) => (
										<span>
											▷ {line}
											<br />
										</span>
									))}
							</h3>
						</div>
						<br />
						<br />
						<div style={{ marginLeft: '15px', marginRight: '15px', lineHeight: '2em' }}>
							<h3>
								{this.state.DATA[this.state.now].sh_info
									.split('\n\n')
									.map((line) => (
										<span>
											{line}
											<br />
										</span>
									))}
							</h3>
						</div>
						<div style={{ marginLeft: '15px', marginRight: '15px' }}>
							<h2>
								<br />
								<br />
								전화번호
								<br />
							</h2>
							<h3>☏ {this.state.DATA[this.state.now].sh_phone}</h3>
							<br />
							<h2>
								좌석 수<br />
							</h2>
							<h3>☞ {this.state.DATA[this.state.now].seat_num}</h3>
							<br />
							<h2>
								찾아오시는 길<br />
							</h2>
							<h3>☞ {this.state.DATA[this.state.now].sh_way}</h3>
							<br />
						</div>
					</S.ShopDetails>
				</S.ContainerPC>
				<S.ShopS id="map"> </S.ShopS>
			</S.ShopContainer>
		);
	}
}

export default Shop;