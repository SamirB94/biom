import React, { useRef, useState } from "react";
import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
interface ImageSliderItemsProps {
	src: string;
	title: string;
}

interface ImageSliderProps {
	items: ImageSliderItemsProps[];
}

const ImageSlider = ({ items }: ImageSliderProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [scrollLeft, setScrollLeft] = useState<number>(0);

	const onWheel = (
		apiObj: scrollVisibilityApiType,
		ev: React.WheelEvent
	): void => {
		const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

		if (isThouchpad) {
			ev.stopPropagation();
			return;
		}

		if (ev.deltaY < 0) {
			apiObj.scrollNext();
		} else if (ev.deltaY > 0) {
			apiObj.scrollPrev();
		}
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setScrollLeft(event.clientX);
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (isDragging && containerRef.current) {
			const deltaX = event.clientX - scrollLeft;
			containerRef.current.scrollLeft -= deltaX;
			setScrollLeft(event.clientX);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const showcaseItem = (imageSrc: string, title: string) => {
		return (
			<div className='showcase-item' key={title}>
				<img src={imageSrc} />
				<p>{title}</p>
			</div>
		);
	};

	const showcaseItems = (
		<div className='showcase-slider-container'>
			<div className='showcase-slider'>
				{items.map(({ src, title }: ImageSliderItemsProps) => {
					return showcaseItem(src, title);
				})}
			</div>
		</div>
	);

	return (
		<div
			className='slider'
			ref={containerRef}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<ScrollMenu onWheel={onWheel}>{showcaseItems}</ScrollMenu>
		</div>
	);
};

export default ImageSlider;
