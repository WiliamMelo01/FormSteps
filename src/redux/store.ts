import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user.Slice';

export default configureStore({
	reducer: {
		user: userReducer,
	},
});
