import React, { useRef, useEffect } from "react";
import Button from "../Button/Button";

const OceanCareWipes = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (videoRef.current) {
					if (entry.isIntersecting) {
						videoRef.current.play();
					} else {
						videoRef.current.pause();
					}
				}
			});
		}, options);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	return (
		<section className='video-section'>
			<video className='background-video' loop autoPlay muted ref={videoRef}>
				<source src='./assets/videos/ocean-video.mp4' type='video/mp4' />
			</video>
			<div className='ocean-care-wipes-info'>
				<p className='ocean-care-wipes-title'>
					cleaning our oceans with every wipe
				</p>
				<p className='ocean-care-wipes-subtitle'>
					Wipes have plastic in them. We don’t.
				</p>
				<p className='ocean-care-wipes-description'>
					We reinvented wipes to cut out all the bad stuff —like single-use
					plastic that hurts the environment, and toxic chemicals that don’t
					belong in our oceans (or in our homes).
				</p>
				<Button>learn more</Button>
			</div>
		</section>
	);
};

export default OceanCareWipes;
