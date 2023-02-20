import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { stepContext, stepInterface } from '../context/step';
import store from '../redux/store';
import { formThreeInformations } from '../redux/user.Slice';
import Addon from './Addon';
import BottomButtons from './BottomButtons';
import Heading from './Heading';
import Paragraph from './Paragraph';

export default function FormThree() {
	const [addons, setAddons] = useState<string[]>(store.getState().user.addons);
	const dispatcher = useDispatch();
	const { setStep, step } = useContext(stepContext) as stepInterface;

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		e.stopPropagation();
		let prices: {
			onlineService?: number;
			largerStorage?: number;
			customizableProfile?: number;
		} = {};
		addons.map((addon) => {
			if (addon === 'Online Service') {
				prices.onlineService =
					store.getState().user.yearlyOrMonthly === 'Monthly' ? 1 : 10;
			} else if (addon === 'Larger Storage') {
				prices.largerStorage =
					store.getState().user.yearlyOrMonthly === 'Monthly' ? 2 : 20;
			} else {
				prices.customizableProfile =
					store.getState().user.yearlyOrMonthly === 'Monthly' ? 2 : 20;
			}
		});
		dispatcher(formThreeInformations({ addons, prices }));
		setStep(step + 1);
	}

	return (
		<form className="w-[50%] h-[95%] mx-20 relative" onSubmit={onSubmit}>
			<Heading>Pick add-ons</Heading>
			<Paragraph>Add-ons help enhance your game experience.</Paragraph>
			<div className="flex flex-col gap-4">
				<Addon
					service="Online Service"
					description="Acces to multiplayer games"
					yearlyPrice={10}
					monthlyPrice={1}
					addons={addons}
					setAddons={setAddons}
				/>
				<Addon
					service="Larger Storage"
					description="Extra 1TB of cloud save"
					yearlyPrice={20}
					monthlyPrice={2}
					addons={addons}
					setAddons={setAddons}
				/>
				<Addon
					service="Customizable Profile"
					description="Custom theme on your profile"
					yearlyPrice={20}
					monthlyPrice={2}
					addons={addons}
					setAddons={setAddons}
				/>
			</div>
			<BottomButtons />
		</form>
	);
}
