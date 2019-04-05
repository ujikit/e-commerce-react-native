// var data = Math.ceil("37038").toString().split("")
// data.splice(1,1, ".")
// console.log(data.join(''));
//
//
//
// // <Text style={{ textDecorationLine: 'line-through', fontSize: 15 }}>{`Rp. ${Math.ceil(priceHolder/0.0027)},00`}</Text>
// <View style={{ justifyContent: 'flex-start' }}>
// 	<Text style={{ textDecorationLine: 'line-through', fontSize: 15 }}>{this._formatRupiah(priceHolder)}</Text>
// </View>

// Alert.alert(
//   'Alert Title',
//   `${JSON.stringify(navigate_product_category_key)} && ${JSON.stringify(navigate_product_category_name)}`
// );


function formatCurrency(num) {

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

console.log(formatCurrency(2400));
