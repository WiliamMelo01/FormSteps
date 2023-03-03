import React, { useContext } from 'react';
import { stepContext, stepInterface } from '../context/step';

export default function BottomButtons() {
	const { step, setStep } = useContext(stepContext) as stepInterface;

	function handleClick() {
		setStep(step - 1);
	}

	return (
		<div
			className="w-[80%] h-14 flex items-center justify-between max-[1280px]:w-[100%] max-[768px]:w-full"
			style={{
				justifyContent: step >= 2 ? 'between' : 'end',
			}}
		>
			{step >= 2 && (
				<button
					className="bg-neutral-white text-neutral-cool-gray hover:text-primary-marine-blue font-bold transition"
					onClick={handleClick}
				>
					Back
				</button>
			)}

			<input
				type="submit"
				className="bg-primary-marine-blue text-neutral-white font-bold px-5 py-3 rounded-xl hover:cursor-pointer"
				value={step !== 4 ? 'Next Step' : 'Confirm'}
			/>
		</div>
	);
}
