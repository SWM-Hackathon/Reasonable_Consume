import React from 'react';
import { BsBucket, BsBarChart, BsCheck, BsPeopleFill, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineQuestion, AiFillStar } from "react-icons/ai";
import { RiStore2Line, RiLineChartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import * as S from './style'

function Home() {
	return (
		<S.HomeContainer>
			<S.TitleContainer>
				<S.TitleImage src="/images/store.png" />
				<S.TitleBox>
					<S.TitleDiv>착한 소비를 위한 서비스</S.TitleDiv>
					<S.TitleSubDiv>Service for Ethical Consumption</S.TitleSubDiv>
				</S.TitleBox>
			</S.TitleContainer>
			<S.MenuCard>
				<Link to="/intro">
					<S.MenuItem>
						<S.MenuIcon>
							<AiOutlineQuestion />
						</S.MenuIcon>
						<S.MenuTitle>착한 소비란?</S.MenuTitle>
					</S.MenuItem>
				</Link>
				<Link to="/shop">
					<S.MenuItem>
						<S.MenuIcon>
							<RiStore2Line />
						</S.MenuIcon>
						<S.MenuTitle>착한 업소 정보 얻기</S.MenuTitle>
					</S.MenuItem>
				</Link>
				<Link to="/price">
					<S.MenuItem>
						<S.MenuIcon>
							<RiLineChartFill />
						</S.MenuIcon>
						<S.MenuTitle>착한 물가 정보 얻기</S.MenuTitle>
					</S.MenuItem>
				</Link>
				<Link to="/about">
					<S.MenuItem>
						<S.MenuIcon>
							<BsPeopleFill />
						</S.MenuIcon>
						<S.MenuTitle>About Us</S.MenuTitle>
					</S.MenuItem>
				</Link>
			</S.MenuCard>
		</S.HomeContainer>
	);
}

export default Home;
