import styled from 'styled-components';

export const ShopContainer = styled.div`
	padding-top: 82px;
	display: flex;
	height: 100%;
	flex-direction: row;
	overflowy: auto;
	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

export const ShopFilter = styled.div`
	display: flex;
	flex: 1;
	background-color: #cce3de;
	flex-direction: column;
	height: auto;
	overflowy: auto;
	@media screen and (max-width: 500px) {
		flex-direction: column;
		height: 10vh;
	}
`;

export const ShopDetails = styled.div`
	display: flex;
	flex: 1 1 10%;
	flex-direction: column;
	background: linear-gradient(45deg, #eceeef, #f2f0e8);
	width: 20vw;
	overflow: auto;
	@media screen and (max-width: 500px) {
		width: 20vw;
		height: 60vh;
	}
`;

export const ShopS = styled.div`
	flex: 1 1 40%;
	padding-bottom: 100px;
	@media screen and (max-width: 500px) {
		width: 100vw;
		height: 100vw;
	}
`;

export const ContainerPC = styled.div`
	display: flex;
	height: 100%;
	flex-direction: row;
	overflowy: auto;
	@media screen and (max-width: 500px) {
		flex-direction: row;
	}
`;