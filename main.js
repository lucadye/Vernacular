function vector2(x, y) {
	return {
		x,
		y
	};
}

function curve(start, end, cp1, cp2) {
	return {
		start,
		end,
		cp1,
		cp2,
		drawSelf(ctx) {
			ctx.moveTo(
				this.start.x * 10 + 10,
				this.start.y * 10 + 10
			);
			ctx.bezierCurveTo(
				this.cp1.x * 10 + 10,
				this.cp1.y * 10 + 10,
				this.cp2.x * 10 + 10,
				this.cp2.y * 10 + 10,
				this.end.x * 10 + 10,
				this.end.y * 10 + 10
			);
			ctx.stroke();
		}
	};
}

function newLetterCanvas() {
	let canvas = document.createElement('canvas');
	canvas.class = 'letter';
	canvas.setAttribute('height', '110');
	canvas.setAttribute('width', '110');
	return canvas;
}

function drawLetters(letters) {

	var section = document.querySelector('#letters');

	letters.forEach((letter) => {

		let canvas = newLetterCanvas();
		var ctx = canvas.getContext("2d");

		if (letter.lines) {
			letter.lines.forEach((line) => {
					for (vector of line) {
						ctx.moveTo(vector.x * 10 + 10, vector.y * 10 + 10);
						break;
					}
					for (vector of line) {
						ctx.stroke();
						ctx.lineTo(vector.x * 10 + 10, vector.y * 10 + 10);
						ctx.moveTo(vector.x * 10 + 10, vector.y * 10 + 10);
					}
					ctx.stroke();
				});
		}

		if (letter.curves) {
			letter.curves.forEach((curve) => {
				curve.drawSelf(ctx);
			});
		}

		section.appendChild(canvas);
	});
}

function rand() {
	return Math.floor(Math.random() * 9);
}

let letters = [
	{
		lines: [
			[
				vector2(0, 0),
				vector2(0, 8),
				vector2(4, 8),
				vector2(4, 0),
				vector2(8, 0),
				vector2(8, 8),
				vector2(0, 0)
			]
		],
		curves: []
	},
	{
		lines: [
			[
				vector2(0, 0),
				vector2(8, 8)
			],
			[
				vector2(8, 0),
				vector2(0, 8)
			],
			[
				vector2(4, 0),
				vector2(4, 8)
			],
			[
				vector2(0, 4),
				vector2(8, 4)
			]
		],
		curves: []
	},
	{
		lines: [
			[
				vector2(8, 0),
				vector2(8, 5)
			]
		],
		curves: [
			curve(
				vector2(8, 5),
				vector2(4, 5),
				vector2(8, 8),
				vector2(4, 8)
			)
		]
	},
	{
		lines: [
			[
				vector2(rand(), rand()),
				vector2(rand(), rand())
			],
			[
				vector2(rand(), rand()),
				vector2(rand(), rand())
			],
			[
				vector2(rand(), rand()),
				vector2(rand(), rand())
			],
			[
				vector2(rand(), rand()),
				vector2(rand(), rand())
			]
		],
		curves: [
			curve(
				vector2(rand(), rand()),
				vector2(rand(), rand()),
				vector2(rand(), rand()),
				vector2(rand(), rand())
			),
			curve(
				vector2(rand(), rand()),
				vector2(rand(), rand()),
				vector2(rand(), rand()),
				vector2(rand(), rand())
			)
		]
	}
];

drawLetters(letters);