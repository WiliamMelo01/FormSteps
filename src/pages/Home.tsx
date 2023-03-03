import React, { useContext } from 'react';
import BottomButtons from '../components/BottomButtons';
import FormFour from '../components/FormFour';
import FormOne from '../components/FormOne';
import FormThree from '../components/FormThree';
import FormTwo from '../components/FormTwo';
import Step from '../components/Step';
import { stepContext, stepInterface } from '../context/step';

export default function Home() {
	const { step } = useContext(stepContext) as stepInterface;
	console.log(step);

	return (
		<div className="w-full h-full grid place-items-center font-ubuntu bg-primary-light-blue">
			<div className="h-4/5 w-[70%] bg-neutral-white rounded-xl flex items-center justify-between pl-4 max-[1050px]:w-[80%] max-[1050px]:h-[70%] max-[900px]:w-[85%] max-[768px]:bg-transparent-0">
				<div className="h-[95%] w-[40%] bg-cover bg-bg-sidebar-desktop bg-bottom rounded-xl flex flex-col items-center max-[768px]:invisible max-[768px]:w-0 max-[768px]:h-0">
					<Step step={1} currentStep={step} description="Your info" />
					<Step step={2} currentStep={step} description="Select plan" />
					<Step step={3} currentStep={step} description="Add-ons" />
					<Step step={4} currentStep={step} description="Summary" />
				</div>
				<div className="max-[768px]:w-full max-[768px]:h-[30vh] max-[768px]:bg-bg-sidebar-mobile max-[768px]:absolute max-[768px]:top-0 max-[768px]:left-0 max-[768px]:-z-0"></div>
				{step === 1 ? (
					<FormOne />
				) : step === 2 ? (
					<FormTwo />
				) : step === 3 ? (
					<FormThree />
				) : (
					step === 4 && <FormFour />
				)}
			</div>
		</div>
	);
}
