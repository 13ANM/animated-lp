import { FC } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const HeroSection = styled.section`
	width: 100%;
	height: 100vh;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: ${({ theme }) => theme.colors.background};
`

const Heading = styled(motion.h1)`
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: 3rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.text};
`

const Subheading = styled(motion.h2)`
	font-family: ${({ theme }) => theme.fonts.body};
	font-size: 1.5rem;
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.text};
	max-width: 600px;
`

const CTAButton = styled(motion.button)`
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.buttonText};
	border: none;
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.body};
	cursor: pointer;
	border-radius: 4px;
	outline: none;

	&:hover {
		background: #1d4ed8;
	}
`

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
}

const Hero: FC = () => (
	<HeroSection
		as={motion.section}
		variants={containerVariants}
		initial='hidden'
		animate='visible'
	>
		<Heading variants={itemVariants}>Welcome to Our Product</Heading>

		<Subheading variants={itemVariants}>
			We help you solve problems efficiently and effectively, empowering your
			team to achieve their best results
		</Subheading>

		<CTAButton
			variants={itemVariants}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			Get Started
		</CTAButton>
	</HeroSection>
)

export default Hero
