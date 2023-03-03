import React from 'react';
import ThankYou from '../assets/images/icon-thank-you.png';
import Heading from './Heading';
import Paragraph from './Paragraph';

export default function Finished() {
	return (
		<div className="w-[50%] h-[95%] mx-20 flex flex-col items-center justify-center">
			<img src={ThankYou} alt="Thank you image" />
			<Heading>Thank you!</Heading>
			<p className="text-neutral-cool-gray text-center w-3/4">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
}
