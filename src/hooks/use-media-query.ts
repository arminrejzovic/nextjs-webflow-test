import { useEffect, useState } from 'react';

/**
 * Custom React hook to detect device type and screen dimensions.
 * Returns device type, width, height, and booleans for each device type.
 */
export function useMediaQuery () {
	const [device, setDevice] = useState<'mobile' | 'md' | 'tablet' | 'desktop' | null>(null)
	const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)

	useEffect(() => {
		const checkDevice = () => {
			if (window.matchMedia('(max-width: 768px)').matches) {
				setDevice('mobile')
			} else if (window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches) {
				setDevice('md')
			} else if (window.matchMedia('(min-width: 641px) and (max-width: 1024px)').matches) {
				setDevice('tablet')
			} else {
				setDevice('desktop')
			}
			setDimensions({ width: window.innerWidth, height: window.innerHeight })
		}

		// Initial detection
		checkDevice()

		// Listener for window resize
		window.addEventListener('resize', checkDevice)

		// Cleanup listener
		return () => {
			window.removeEventListener('resize', checkDevice)
		}
	}, [])

	return {
		device,
		width: dimensions?.width,
		height: dimensions?.height,
		isMobile: device === 'mobile',
		isMd: device === 'md',
		isTablet: device === 'tablet',
		isDesktop: device === 'desktop',
	}
} 