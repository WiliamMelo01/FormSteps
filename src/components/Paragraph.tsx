import React, { ReactNode } from 'react';

export default function Paragraph({ children }: { children: ReactNode }) {
	return <p className="text-lg text-neutral-cool-gray mb-10">{children}</p>;
}
