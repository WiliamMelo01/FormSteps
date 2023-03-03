import React, { FormEvent, useContext, useState } from 'react';
import BottomButtons from './BottomButtons';
import CardPlan from './CardPlan';
import Heading from './Heading';
import Paragraph from './Paragraph';

import ArcadeImage from '../assets/images/icon-arcade.png';
import ProImage from '../assets/images/icon-pro.png';
import AdvancedImage from '../assets/images/icon-advanced.png';
import { useDispatch } from 'react-redux';
import { formTwoInformations } from '../redux/user.Slice';
import { stepContext, stepInterface } from '../context/step';
import store from '../redux/store';

export default function FormTwo() {
	const { step, setStep } = useContext(stepContext) as stepInterface;
	const dispatcher = useDispatch();

	const DEFAULT_SELECTED_PLAN = store.getState().user.plan;
	const DEFAULT_YEARLY_OR_MONTHLY = store.getState().user.yearlyOrMonthly;

	const [yearlyOrMonthly, setYearlyOrMonthly] = useState<'Yearly' | 'Monthly'>(
		DEFAULT_YEARLY_OR_MONTHLY
	);
	const [selectedPlan, setSelectedPlan] = useState<
		'Arcade' | 'Advanced' | 'Pro'
	>(DEFAULT_SELECTED_PLAN);

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		e.stopPropagation();
		let price = 0;
		if (selectedPlan === 'Arcade') {
			price = yearlyOrMonthly === 'Monthly' ? 9 : 90;
		} else if (selectedPlan === 'Advanced') {
			price = yearlyOrMonthly === 'Monthly' ? 12 : 120;
		} else {
			price = yearlyOrMonthly === 'Monthly' ? 15 : 150;
		}
		dispatcher(
			formTwoInformations({
				plan: selectedPlan,
				yearlyOrMonthly,
				planPrice: price,
			})
		);
		setStep(step + 1);
	}

	return (
		<form className="w-[50%] h-[95%] mx-20 relative" onSubmit={onSubmit}>
			<Heading>Select your plan</Heading>
			<Paragraph>You have the option of monthly or year billing</Paragraph>
			<div className="w-[80%] flex items-center justify-between">
				<CardPlan
					image={ArcadeImage}
					planName="Arcade"
					yearlyOrMonthly={yearlyOrMonthly}
					monthlyPrice={9}
					yearlyPrice={90}
					setSelectedPlan={setSelectedPlan}
					selectedPlan={selectedPlan}
				/>
				<CardPlan
					image={AdvancedImage}
					planName="Advanced"
					yearlyOrMonthly={yearlyOrMonthly}
					monthlyPrice={12}
					yearlyPrice={120}
					setSelectedPlan={setSelectedPlan}
					selectedPlan={selectedPlan}
				/>
				<CardPlan
					image={ProImage}
					planName="Pro"
					yearlyOrMonthly={yearlyOrMonthly}
					monthlyPrice={15}
					yearlyPrice={150}
					selectedPlan={selectedPlan}
					setSelectedPlan={setSelectedPlan}
				/>
			</div>
			<div className="w-[80%] flex items-center justify-center gap-3">
				<p className="text-neutral-cool-gray font-bold">Monthly</p>
				<div
					className="w-14 h-7 bg-primary-marine-blue rounded-full relative"
					onClick={(e) => {
						yearlyOrMonthly === 'Monthly'
							? setYearlyOrMonthly('Yearly')
							: setYearlyOrMonthly('Monthly');
					}}
				>
					<div
						className="h-5 w-5 bg-neutral-white absolute rounded-full top-1/2 -translate-y-1/2"
						style={{
							translate: yearlyOrMonthly === 'Monthly' ? '5px' : '32px',
							transition: 'all 1s',
						}}
					></div>
				</div>
				<p className="text-primary-marine-blue font-bold">Yearly</p>
			</div>
			<BottomButtons />
		</form>
	);
}
