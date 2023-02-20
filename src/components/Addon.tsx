import React, { ChangeEvent } from 'react';
import store from '../redux/store';

type AddonProps = {
	service: string;
	description: string;
	yearlyPrice: number;
	monthlyPrice: number;
	addons: string[];
	setAddons: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Addon({
	description,
	monthlyPrice,
	yearlyPrice,
	service,
	addons,
	setAddons,
}: AddonProps) {
	function handleOnChange(e: ChangeEvent) {
		if (addons.includes(service)) {
			const index = addons.findIndex((addon) => addon === service);
			if (index !== -1) {
				setAddons(addons.filter((_, i) => i !== index));
			}
		} else {
			setAddons([...addons, service]);
		}
	}

	return (
		<div
			className="w-full h-24 bg-neutral-white rounded-xl border flex"
			style={{
				border: addons.includes(service)
					? '1px solid hsl(243, 100%, 62%)'
					: '1px solid hsl(231, 11%, 63%)',
			}}
		>
			<div className="h-full w-[20%] grid place-items-center">
				<input
					type="checkbox"
					className="h-6 w-6 appearance-none bg-neutral-white border-neutral-cool-gray border rounded-md checked:bg-primary-purplish-blue checked:border-none checked:bg-bg-checkmark bg-contain bg-center bg-no-repeat"
					onChange={handleOnChange}
					checked={addons.includes(service)}
				/>
			</div>
			<div className="h-full w-[60%] flex flex-col justify-center">
				<p className="text-primary-marine-blue font-bold text-xl">{service}</p>
				<p className="text-neutral-cool-gray">{description}</p>
			</div>
			<div className="h-full w-[20%] grid place-items-center">
				<p className="text-primary-purplish-blue ">
					+$
					{store.getState().user.yearlyOrMonthly === 'Monthly'
						? monthlyPrice
						: yearlyPrice}
					/{store.getState().user.yearlyOrMonthly === 'Monthly' ? 'mo' : 'yr'}
				</p>
			</div>
		</div>
	);
}
