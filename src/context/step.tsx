import { createContext, ReactNode, useState } from 'react';

export interface stepInterface {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const stepContext = createContext<stepInterface | null>(null);

export default function stepProvider({ children }: { children: ReactNode }) {
	const [step, setStep] = useState(1);

	return (
		<stepContext.Provider value={{ step, setStep }}>
			{children}
		</stepContext.Provider>
	);
}
