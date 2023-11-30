// 1 - Masala

// Foydalanuvchidan yoshni so’raydigan dasturni tuzing. Yosh 50 dan yuqori bo’lsa, dastur “Siz kattasiz” deb chiqarib berishi kerak. Yosh 50 dan past bo’lsa “Siz yoshsiz” deb chiqarib berishi kerak.

// let years = +prompt("yoshingizni kiriting");

// if (years >= 50) {
//   console.log("Siz kattasiz");
// } else {
//   console.log("Siz yoshsiz");
// }

// Somsani narxini so’raydigan dastur. Narx 3000 dan yuqori bo’lsa - dastur “qimmat” deb chiqarib bersin. 3000 dan arzon bo’lsa - “arzon” deb chiqarib bersin.

// let price = +prompt("Somsaning narxini kiriting: ");

// if (price >= 3000) {
//   console.log("Qimmat");
// } else {
//   console.log("Arzon");
// }

// Parolni tekshiradigan dastur. Foydalanuvchi “sarimsoqpiyoz” parolini kiritgan bo’lsa, u bilan salomlashin!

// while (true) {
//   let pin = prompt("parolni kiriting");

//   if (pin === "sariq") {
//     alert("Hello");
//     break;
//   }
// }

// Foydalanuvchidan ismini so’rang. Ismi “Ali” bo’lsa, unga “Salom og’a” deb yozing. Ismi “Ahmad” bo’lsa, unga “Ko’rinmayapsan dostim, nima qilyapsan?” deb yozing.

// while (true) {
//   let ism = prompt("Ismingizni kiriting");

//   if (ism === "Ali") {
//     alert("Salom og’a");
//     break;
//   } else if (ism === "Ahmad") {
//     alert("Ko’rinmayapsan dostim, nima qilyapsan?");
//     break;
//   }
// }

// Agar ikkita son berilgan bo'lsa uni qaysidir bittasi 100ga teng bo'lsa true qaytarsin yoki yig'indisi 100ga teng bo'lsa ham true qaytarsin

// let isEqualNumber = (a, b) => a === 100 || b === 100 || a + b === 100;
// console.log(isEqualNumber(100, 0));
// console.log(isEqualNumber(20, 80));
// console.log(isEqualNumber(20, 70));

function toq(son) {
  if (son % 2 == 1) {
    console.log(son);
  }
  if (son >= 1) {
    toq(son - 1);
    // break;
  }
}
toq(20);

let a = 0;
function sum(number) {
  if (number >= 1) {
    a = a + number;
    sum(number - 1);
    // return a;
  } else {
    console.log(a);
  }
}
sum(11);
