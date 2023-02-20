import React from 'react';

export default function FormError({ error }: { error: string }) {
	return <p className="text-primary-strawberry-red font-bold">{error}</p>;
}
