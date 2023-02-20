import React, { useContext, useEffect, useState } from 'react';
import { stepContext, stepInterface } from '../context/step';
import store from '../redux/store';
import BottomButtons from './BottomButtons';
import Finished from './Finished';
import Heading from './Heading';
import Paragraph from './Paragraph';

export default function FormFour() {
	const [valorTotal, setValorTotal] = useState(0);
	const [finished, setFinished] = useState(false);
	const { setStep } = useContext(stepContext) as stepInterface;
	useEffect(() => {
		const prices = store.getState().user.prices;
		if (!prices) {
			setValorTotal(0);
		} else {
			setValorTotal(
				(prices.plan || 0) +
					(prices.customizableProfile || 0) +
					(prices.largerStorage || 0) +
					(prices.onlineService || 0)
			);
		}
	}, []);

	function handleChange() {
		setStep(2);
	}

	function onSubmit() {
		setFinished(true);
	}

	return (
		<>
			{finished ? (
				<Finished />
			) : (
				<form className="w-[50%] h-[95%] mx-20 relative" onSubmit={onSubmit}>
					<Heading>Finishing up</Heading>
					<Paragraph>
						Double check everythins looks OK before confirming
					</Paragraph>
					<div className="w-[80%] flex flex-col justify-center">
						<div className="flex flex-col justify-center p-4">
							<div className="w-full flex items-center mb-4">
								<div className="w-[80%] flex flex-col">
									<p className=" text-primary-marine-blue font-bold text-lg">
										{store.getState().user.plan} (
										{store.getState().user.yearlyOrMonthly})
									</p>
									<button
										className="w-20 underline text-neutral-cool-gray font-bold text-left outline-none"
										onClick={handleChange}
									>
										Change
									</button>
								</div>
								<p className="w-[20%] text-primary-marine-blue font-bold">
									${store.getState().user.prices.plan}/
									{store.getState().user.yearlyOrMonthly === 'Monthly'
										? 'mo'
										: 'yr'}
								</p>
							</div>
							<div className="w-full h-px bg-neutral-light-gray"></div>
							{store.getState().user.addons.map((addon) => {
								return (
									<div className="flex justify-between my-2">
										<p className="w-[80%] text-neutral-cool-gray">{addon}</p>
										<p className="w-[20%] text-primary-marine-blue font-bold">
											+
											{addon === 'Online Service'
												? store.getState().user.prices.onlineService
												: addon === 'Larger Storage'
												? store.getState().user.prices.largerStorage
												: store.getState().user.prices.customizableProfile}
											$/
											{store.getState().user.yearlyOrMonthly === 'Monthly'
												? 'mo'
												: 'yr'}
										</p>
									</div>
								);
							})}
						</div>
						<div className="mt-10 flex justify-between px-4">
							<p className="w-[80%] text-neutral-cool-gray ">
								Total (per{' '}
								{store.getState().user.yearlyOrMonthly === 'Monthly'
									? 'month'
									: 'year'}
								)
							</p>
							<p className="w-[20%] text-2xl text-primary-purplish-blue font-bold">
								+${valorTotal}/
								{store.getState().user.yearlyOrMonthly === 'Monthly'
									? 'mo'
									: 'yr'}
							</p>
						</div>
					</div>
					<BottomButtons />
				</form>
			)}
		</>
	);
}
