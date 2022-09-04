//Công nghê đọc suy nghĩ bằng JQuery :))
//© 2020 Copyright by Tiendatmagic - All Rights Reserved | Designed by Tiendatmagic
$(document).ready(function () {
	var magic = 0;
	document.getElementById("result-magic").innerHTML = magic;
	$('.btn-start').click(function () {
		$('.gt').hide();
		$('.list-1').show();
	})
	$('.btn1c').click(function () {
		magic += 1;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-1').hide();
		$('.list-2').show();

	})
	$('.btn1k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-1').hide();
		$('.list-2').show();
	})
	$('.btn2c').click(function () {
		magic += 2;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-2').hide();
		$('.list-3').show();
	})
	$('.btn2k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-2').hide();
		$('.list-3').show();
	})
	$('.btn3c').click(function () {
		magic += 4;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-3').hide();
		$('.list-4').show();
	})
	$('.btn3k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-3').hide();
		$('.list-4').show();
	})
	$('.btn4c').click(function () {
		magic += 8;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-4').hide();
		$('.list-5').show();
	})
	$('.btn4k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-4').hide();
		$('.list-5').show();
	})
	$('.btn5c').click(function () {
		magic += 16;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-5').hide();
		$('.list-6').show();
	})
	$('.btn5k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-5').hide();
		$('.list-6').show();
	})
	$('.btn6c').click(function () {
		magic += 32;
		//document.getElementById("result-magic").innerHTML = magic;
		$('.list-6').hide();
		magiclabai();

	})
	$('.btn6k').click(function () {
		magic += 0;
		//document.getElementById("result-magic").innerHTML = magic;
		$('.list-6').hide();
		magiclabai();

	})


	function magiclabai() {

		switch (magic) {
			case 0:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/jr.gif");
				break;

			case 1:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c1.gif");
				break;

			case 2:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c2.gif");
				break;

			case 3:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c2.gif");
				break;

			case 4:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c4.gif");
				break;

			case 5:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c5.gif");
				break;

			case 6:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c6.gif");
				break;

			case 7:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c7.gif");
				break;

			case 8:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c8.gif");
				break;

			case 9:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c9.gif");
				break;

			case 10:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/c10.gif");
				break;

			case 11:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/cj.gif");
				break;

			case 12:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/cq.gif");
				break;

			case 13:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/ck.gif");
				break;

			case 14:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h1.gif");
				break;

			case 15:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h2.gif");
				break;

			case 16:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h3.gif");
				break;

			case 17:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h4.gif");
				break;

			case 18:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h5.gif");
				break;

			case 19:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h6.gif");
				break;

			case 20:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h7.gif");
				break;

			case 21:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h8.gif");
				break;

			case 22:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h9.gif");
				break;

			case 23:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/h10.gif");
				break;

			case 24:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/hj.gif");
				break;

			case 25:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/hq.gif");
				break;

			case 26:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/hk.gif");
				break;

			case 27:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s1.gif");
				break;

			case 28:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s2.gif");
				break;

			case 29:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s3.gif");
				break;

			case 30:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s4.gif");
				break;

			case 31:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s5.gif");
				break;

			case 32:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s6.gif");
				break;

			case 33:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s7.gif");
				break;

			case 34:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s8.gif");
				break;

			case 35:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s9.gif");
				break;

			case 36:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/s10.gif");
				break;

			case 37:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/sj.gif");
				break;

			case 38:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/sq.gif");
				break;

			case 39:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/sk.gif");
				break;

			case 40:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d1.gif");
				break;

			case 41:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d2.gif");
				break;

			case 42:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d3.gif");
				break;

			case 43:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d4.gif");
				break;

			case 44:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d5.gif");
				break;

			case 45:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d6.gif");
				break;

			case 46:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d7.gif");
				break;

			case 47:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d8.gif");
				break;

			case 48:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d9.gif");
				break;

			case 49:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/d10.gif");
				break;

			case 50:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/dj.gif");
				break;

			case 51:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/dq.gif");
				break;

			case 52:
				$('.result').show();
				$("#image-magic").attr("src", "./labai/dk.gif");
				break;
			default:
				$('.result-error').show();
		}

	}

	$('.btn-reload').click(function () {
		location.reload();
	})


});
//© 2020 Copyright by Tiendatmagic - All Rights Reserved | Designed by Tiendatmagic