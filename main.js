function vector2(x, y) {
	return {
		x,
		y
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
		]
	}
];

drawLetters(letters);