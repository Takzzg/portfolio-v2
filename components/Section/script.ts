export const drawDivider = (
	_canvas: HTMLCanvasElement,
	color: string,
	type: "mountains" | "bezier" | "bezierInverted" = "mountains",
) => {
	let canvas = _canvas;
	let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
	let parent = canvas.parentElement as HTMLElement;

	canvas.width = parent.clientWidth;
	canvas.height = 100;

	const prevParent = parent.parentElement!.previousElementSibling as HTMLElement;
	prevParent.style.paddingBottom = canvas.height.toString() + "px";

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height);
	ctx.lineTo(0, canvas.height / 2);

	if (type === "mountains") {
		const distance = Math.floor(canvas.width / (7 + 1));
		for (let x = 1; x <= 7; x++) ctx.lineTo(x * distance, Math.random() * canvas.height);
	}

	if (type === "bezier" || type === "bezierInverted") {
		const offset = canvas.height / 2;

		if (type === "bezier")
			ctx.bezierCurveTo(
				canvas.width / 4,
				0 - offset,
				(canvas.width / 4) * 3,
				canvas.height + offset,
				canvas.width,
				canvas.height / 2,
			);
		else
			ctx.bezierCurveTo(
				canvas.width / 4,
				canvas.height + offset,
				(canvas.width / 4) * 3,
				0 - offset,
				canvas.width,
				canvas.height / 2,
			);
	}

	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.fill();
};
