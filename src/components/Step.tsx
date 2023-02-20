import React from 'react';
import store from '../redux/store';

type StepProsps = {
	step: number;
	description: string;
	currentStep: number;
};

export default function Step({ description, step, currentStep }: StepProsps) {
	return (
		<div className="w-[80%] flex gap-4 my-5 items-center">
			<button
				className="h-10 w-10 rounded-full font-bold"
				style={{
					background:
						step === currentStep ? 'hsl(206, 94%, 87%)' : 'transparent',
					border: step !== currentStep ? '1px solid white' : 'none',
					color: step === currentStep ? 'hsl(213, 96%, 18%)' : 'white',
				}}
			>
				{step}
			</button>
			<div className="flex flex-col">
				<span className="text-neutral-cool-gray uppercase">Step {step}</span>
				<span className="uppercase text-neutral-white font-bold">
					{description}
				</span>
			</div>
		</div>
	);
}
