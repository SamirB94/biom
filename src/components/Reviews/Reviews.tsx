import React, { useState } from "react";

const reviews = [
	{
		review: `"Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment."`,
		author: "- RACHAEL H",
	},
	{
		review: `"The Dispensers are fantastic! They make it so easy to keep my kitchen organized and my cooking supplies easily accessible. I highly recommend them to anyone looking for a storage solution."`,
		author: "- MARK J",
	},
	{
		review: `"I've been using the Dispensers for a few weeks now and I'm impressed by how much space they've saved me in my pantry. They're sturdy, easy to use, and look great too. Definitely worth the investment!"`,
		author: "- RACHEL L",
	},
	{
		review: `"I'm so happy I found the Dispensers! They've made a huge difference in my daily routine and have saved me so much time and hassle. They're also very easy to clean and maintain. Thanks, Dispensers!"`,
		author: "- THOMAS A",
	},
];

const Reviews = () => {
	const [currentReview, setCurrentReview] = useState<number>(0);

	const title = <p className='reviews-title'>WHAT PEOPLE ARE SAYING</p>;

	const reviewContent = (
		<>
			{reviews.map(({ review, author }, idx) => (
				<div
					className={`review-content ${
						currentReview === idx ? "active" : "hide"
					}`}
				>
					<p className='review'>{review}</p>
					<p className='author'>{author}</p>
				</div>
			))}
		</>
	);

	const reviewNavigationDots = (
		<div className='dots'>
			{reviews.map((_, idx) => (
				<button
					className={`dot ${currentReview === idx ? "filled" : ""}`}
					key={idx}
					onClick={() => setCurrentReview(idx)}
				></button>
			))}
		</div>
	);

	return (
		<div className='reviews'>
			{title}
			{reviewContent}
			{reviewNavigationDots}
		</div>
	);
};

export default Reviews;
