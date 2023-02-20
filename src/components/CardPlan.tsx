import React from 'react';
type CardPlanProps = {
	planName: 'Arcade' | 'Advanced' | 'Pro';
	yearlyOrMonthly: 'Yearly' | 'Monthly';
	image: string;
	monthlyPrice: number;
	yearlyPrice: number;
	setSelectedPlan: React.Dispatch<
		React.SetStateAction<'Arcade' | 'Advanced' | 'Pro'>
	>;
	selectedPlan: 'Arcade' | 'Advanced' | 'Pro';
};

export default function CardPlan({
	image,
	planName,
	yearlyOrMonthly,
	monthlyPrice,
	yearlyPrice,
	setSelectedPlan,
	selectedPlan,
}: CardPlanProps) {
	function handleSelectPlan() {
		setSelectedPlan(planName);
	}

	return (
		<div
			className="w-[30%] h-auto flex flex-col p-4 border rounded-2xl transition hover:border-primary-purplish-blue hover:cursor-pointer mb-10 duration-1000"
			onClick={handleSelectPlan}
			style={{
				border:
					selectedPlan === planName
						? '1px solid hsl(243, 100%, 62%)'
						: '1px solid hsl(231, 11%, 63%)',
			}}
		>
			<img src={image} alt="" className="w-12 h-12 mb-6" />
			<p className="text-primary-marine-blue font-bold">{planName}</p>
			<p className="text-neutral-cool-gray">
				{yearlyOrMonthly === 'Monthly'
					? `$${monthlyPrice}/mo`
					: `$${yearlyPrice}/yr`}
			</p>
			{yearlyOrMonthly === 'Yearly' && (
				<p className="text-primary-marine-blue font-normal text-sm">
					2 months free
				</p>
			)}
		</div>
	);
}
