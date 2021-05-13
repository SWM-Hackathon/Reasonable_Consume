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
		height: 20vh;
	}
`;

export const ShopDetails = styled.div`
	display: flex;
	flex: 1 1 10%;
	flex-direction: column;
	background-color: #eaf4f4;
	width: 20vw;
	overflow: auto;
	@media screen and (max-width: 500px) {
		width: 30vw;
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