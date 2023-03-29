let value;
const now = new Date(); // şu anki zamanı almamızı sağlar

console.log(now);

const date1 = new Date("09-19-1993 06:15:00");

const date2 = new Date("september 19 1993");

const date3 = new Date("9/19/1993");

value = date1;

value = date1.getMonth(); // kaçıncı ay olduğu-0 dan başlayarak
value = date1.getDate(); //ayın kaçıncı günü olduğu-1den başlayarak
value = date1.getDay();  // haftanın hangi günü olduğu-pazardan başlayarak 0-1-2 diye gidiyor 

value = date1.getHours(); // saat bilgisi
value = date1.getMinutes(); // dakika bilgisi
value = date1.getSeconds(); //sn bilgisi
value = date1.getMilliseconds(); // salise cinsinden


date1.setMonth(7); // doğum günü ay değiştirme
date1.setDate(15); // doğum günü gün değiştirme
date1.setFullYear(1994) // doğum günü yıl değiştirme
date1.setHours(0); // doğum günü saat değiştirme
date1.setMinutes(15); // doğum günü dakika değiştirme
date1.setSeconds(30); // doğum günü saniye değiştirme


value = date1;

console.log(value);