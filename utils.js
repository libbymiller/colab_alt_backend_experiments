export const CANVAS_SIZE = 3000
export const CANVAS_PADDING = 20

export const getPointerPosition = (e, rect) => {
	return {
		x: Math.round(e.clientX - rect?.left),
		y: Math.round(e.clientY - rect?.top)
	}
}

export function lerp (x, [a1, a2], [b1, b2]) {
	return b1 + (b2 - b1) / (a2 - a1) * (x - a1)
}
