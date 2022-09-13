import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import pattern from "../assets/images/background.png";
import { rem, device } from "../helpers/mixins";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
//importing animation
import { motion } from "framer-motion";
import { pageAnimation, slideIn, titleAnim } from "../animations/animation";
//react intersection
import { UseScroll } from "./useScroll";
//contexts
import { NavLinksContext } from "../contexts/NavlinksContext";

const HeroSection = () => {
	//context
	const { setHomeStatus, setNavStatus, navStatus } =
		useContext(NavLinksContext);
	//intersection api
	const [element, controls, view] = UseScroll();

	//setting homeStatus
	useEffect(() => {
		setHomeStatus(view);
	});
	return (
		<StyledHero
			variants={pageAnimation}
			ref={element}
			animate={controls}
			id="heroSection"
		>
			<div className="barsIcon">
				<FaBars
					className="open"
					onClick={() => {
						setNavStatus(!navStatus);
					}}
				/>
			</div>
			<div className="details">
				<div className="title">
					<motion.h1 variants={titleAnim}>
						👋🏾 I’m <span>Yaw Precious</span>
					</motion.h1>
					<motion.h6 variants={titleAnim}>
						~a product engineer from Accra, Ghana 🇬🇭.
					</motion.h6>
					<motion.div className="divider" variants={slideIn}>
						<motion.hr />
					</motion.div>
					<motion.p variants={titleAnim}>
						Hi, call me Yaw, that’s the name given to a male child
						born on thursday in Ghana, as a <br />
						proud Yaw I love adventure and I thrive in striking a
						balance between clean and <br />
						considered outcomes that breathe life into product.
					</motion.p>
					<motion.button variants={slideIn}>
						<Link to="projects" spy={true} smooth={true}>
							my projects
						</Link>
					</motion.button>
				</div>
			</div>
		</StyledHero>
	);
};

const StyledHero = styled(motion.section)`
	height: 100vh;
	display: flex;
	background: url(${pattern});
	width: 100%;
	background-size: cover;
	background-position: center;
	@media ${device.tab_land} {
	}
	@media ${device.tab_port} {
		justify-content: center;
		height: 90vh;
		align-items: center;
	}
	.barsIcon {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding-right: 10%;
		position: absolute;
		display: none;
		@media ${device.phone} {
			display: flex;
		}
		top: 3rem;
		.open {
			border: 1px solid var(--accent-color);
			font-size: 3rem;
			padding: 0.5rem;
			color: var(--accent-color);
			position: fixed;
			z-index: 5;
			background-color: white;
			&:hover {
				background-color: var(--accent-color);
				color: white;
			}
		}
	}

	.details {
		padding-top: ${rem(200)};
		padding-left: 10%;
		@media ${device.tab_land} {
		}
		@media ${device.tab_port} {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
		}
		@media ${device.phone} {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
		}

		.title {
			@media ${device.tab_land} {
			}
			@media ${device.tab_port} {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			@media ${device.phone} {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			h1 {
				font-weight: 200 !important;
				letter-spacing: -0.4rem;
				line-height: 120%;
				@media ${device.tab_land} {
					font-size: ${rem(84)};
				}
				@media ${device.tab_port} {
					font-size: ${rem(62)};
				}
				@media ${device.phone} {
					font-size: ${rem(40)};
				}
				span {
					font-weight: 700;
					color: var(--accent-color);
				}
			}
			h6 {
				padding-left: 9rem;
				@media ${device.tab_land} {
					font-size: ${rem(24)};
					padding-left: 6rem;
				}
				@media ${device.tab_port} {
					padding-left: 0;
					font-size: ${rem(20)};
					padding-top: 0.5rem;
				}
				@media ${device.phone} {
					padding-left: 0;
					font-size: ${rem(16)};
					padding-top: 0.5rem;
				}
			}
			.divider {
				display: flex;
				width: 67%;
				justify-content: flex-end;
				padding-top: ${rem(40)};
				padding-bottom: ${rem(40)};
				hr {
					padding-left: 9rem !important;
					border: 0.01rem solid var(--text-black);
					width: 75%;
					@media ${device.tab_land} {
						padding-left: 10%;
						width: 80%;
					}
					@media ${device.tab_port} {
						padding-left: 0 !important;
						width: 100%;
					}
					@media ${device.phone} {
						padding-left: 0 !important;
						width: 100%;
					}
				}
			}
			p {
				padding-left: 9rem;
				padding-bottom: ${rem(20)};
				@media ${device.tab_land} {
					padding-left: 6rem;
				}
				@media ${device.tab_port} {
					/* padding: 0 5% 5% 0%; */
					text-align: center;
					padding-left: 4rem;
				}
				@media ${device.phone} {
					padding: 0 10% 10% 10%;
					text-align: center;
				}
			}
			button {
				padding: 0.8rem 3rem;
				border-radius: 0.2rem;
				margin-left: 9rem;
				background-color: var(--accent-color);
				color: white;
				@media ${device.tab_land} {
					margin-left: 6rem;
				}
				@media ${device.tab_port} {
					margin-left: 0;
					margin: 0 15%;
					width: 40%;
				}
				@media ${device.phone} {
					margin-left: 0;
					margin: 0 10%;
					width: 80%;
				}
			}
		}
	}
`;

export default HeroSection;
