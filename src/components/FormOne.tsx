import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormError from './FormError';
import { useDispatch } from 'react-redux';
import store from '../redux/store';
import { stepContext, stepInterface } from '../context/step';
import { formOneInformatios } from '../redux/user.Slice';
import BottomButtons from './BottomButtons';
import Heading from './Heading';
import Paragraph from './Paragraph';

export default function FormOne() {
	const dispatcher = useDispatch();
	const { step, setStep } = useContext(stepContext) as stepInterface;

	const FormOneSchema = z.object({
		name: z.string(),
		email: z.string().email(),
		phone: z
			.string()
			.regex(/^\+1\s\d{3}\s\d{3}\s\d{4}$/, { message: 'Invalid phone' }),
	});

	type FormOneInterface = z.infer<typeof FormOneSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormOneInterface>({
		resolver: zodResolver(FormOneSchema),
		defaultValues: {
			email: store.getState().user.emailAddres,
			name: store.getState().user.name,
			phone: store.getState().user.phoneNumber,
		},
	});

	function onSubmit(dataForm: FormOneInterface) {
		console.log(dataForm);
		reset();
		setStep(step + 1);
		dispatcher(formOneInformatios(dataForm));
	}

	return (
		<div className="w-[50%] h-[95%] mx-20 relative">
			<Heading>Personal info</Heading>
			<Paragraph>
				Please provide your name, email addres and phone number.
			</Paragraph>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-2 my-4">
					<label htmlFor="name" className="text-primary-marine-blue font-bold">
						Name
					</label>
					<input
						type="text"
						id="name"
						className="w-[80%] h-14 border-neutral-cool-gray border rounded-xl outline-none pl-4 text-primary-marine-blue font-bold placeholder:text-neutral-cool-gray placeholder:font-bold"
						placeholder="e.g Stephen King"
						{...register('name', {
							required: true,
						})}
					/>
				</div>
				<div className="flex flex-col gap-2 my-4">
					<div className="w-[80%] flex justify-between">
						<label
							htmlFor="email"
							className="text-primary-marine-blue font-bold"
						>
							Email addres
						</label>
						{errors.email && errors.email.message && (
							<FormError error={errors.email.message} />
						)}
					</div>
					<input
						type="text"
						id="email"
						className="w-[80%] h-14 border-neutral-cool-gray border rounded-xl outline-none pl-4 text-primary-marine-blue font-bold placeholder:text-neutral-cool-gray placeholder:font-bold"
						placeholder="e.g Stephenking.lorem.com"
						{...register('email', {
							required: true,
						})}
					/>
				</div>
				<div className="flex flex-col gap-2 my-4">
					<div className="w-[80%] flex justify-between">
						<label
							htmlFor="phone"
							className="text-primary-marine-blue font-bold"
						>
							Phone Number
						</label>
						{errors.phone && errors.phone.message && (
							<FormError error={errors.phone.message} />
						)}
					</div>
					<input
						type="text"
						id="phone"
						className="w-[80%] h-14 border-neutral-cool-gray border rounded-xl outline-none pl-4 text-primary-marine-blue font-bold placeholder:text-neutral-cool-gray placeholder:font-bold"
						placeholder="e.g +1 234 567 890"
						{...register('phone', {
							required: true,
						})}
					/>
				</div>
				<BottomButtons />
			</form>
		</div>
	);
}
