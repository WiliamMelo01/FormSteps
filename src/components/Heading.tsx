import React, { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
	return (
		<h1 className="text-primary-marine-blue text-4xl font-bold mt-10 mb-5">
			{children}
		</h1>
	);
}
