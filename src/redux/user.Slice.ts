import { createSlice } from '@reduxjs/toolkit';

interface UserInterface {
	name: string;
	emailAddres: string;
	phoneNumber: string;
	plan: 'Arcade' | 'Advanced' | 'Pro';
	yearlyOrMonthly: 'Yearly' | 'Monthly';
	addons: string[];
	prices: {
		plan: number;
		onlineService?: number;
		largerStorage?: number;
		customizableProfile?: number;
	};
}

const INITIAL_STATE: UserInterface = {
	name: '',
	emailAddres: '',
	phoneNumber: '',
	plan: 'Arcade',
	yearlyOrMonthly: 'Yearly',
	addons: [],
	prices: {
		plan: 0,
	},
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: INITIAL_STATE,
	reducers: {
		formOneInformatios(state, { payload }) {
			return {
				...state,
				name: payload.name,
				emailAddres: payload.email,
				phoneNumber: payload.phone,
			};
		},
		formTwoInformations(state, { payload }) {
			return {
				...state,
				plan: payload.plan,
				yearlyOrMonthly: payload.yearlyOrMonthly,
				prices: {
					plan: payload.planPrice,
				},
			};
		},
		formThreeInformations(state, { payload }) {
			return {
				...state,
				addons: payload.addons,
				prices: {
					...state.prices,
					customizableProfile: payload.prices.customizableProfile,
					largerStorage: payload.prices.largerStorage,
					onlineService: payload.prices.onlineService,
				},
			};
		},
	},
});

export const {
	formOneInformatios,
	formTwoInformations,
	formThreeInformations,
} = userSlice.actions;

export default userSlice.reducer;
