export function NumberToIndonesianCurrency() {
  num = num.toString().replace(/\Rp|/g,'');
  if(isNaN(num))
    num = "0";
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10)
    cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+'.'+
    num.substring(num.length-(4*i+3));
  return `${num},${cents}`
}

export function FormatK() {
	let data = num.toString().split("")
	if (data.length >= 4) {
		if (data.length === 11) {
			data.length = 8;
		}
		if (data.length === 10) {
			data.length = 7;
		}
		if (data.length === 9) {
			data.length = 6;
		}
		if (data.length === 8) {
			data.length = 5;
		}
		else if (data.length === 7) {
			data.length = 4;
		}
		else if (data.length === 6) {
			data.length = 3;
		}
		else if (data.length === 5) {
			data.length = 2;
		}
		else if (data.length === 4) {
			data.length = 1;
		}
		return `Rp.${data.join("")}K`
	}
	else {
		return `Rp.${data.join("")}`
	}
}
