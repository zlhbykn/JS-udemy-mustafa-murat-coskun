//statik methodlar
/*
class Matematik{

    cube(x){
        console.log(x*x*x);
    }
}

const math = new Matematik();
math.cube(3);

console.log(math);
*/

class Matematik{
    sqrt(x){
        console.log(x*x);
    }
    static cube(x){
        console.log(x*x*x);
    }
}

Matematik.cube(3);

// obje oluşturmadan bir methodu kullanmak istiyorsak
// o methodu static şekilde yazmamız gerekiyor

const math = new Matematik();
math.sqrt(4);
math.cube(4); // çalışmadı
Matematik.sqrt(4); // çalışmadı
//sqrt static olmadığından direk sınıf üzerinden çağrılamaz

// static methodlar obje üzerinden kullanılamıyor
// static methodlar burdaki objenin prototype ne yazılmıyor 
//sadece class(sınıf) üzerinden erişip çağrılarak kullanılıyor

//! özetle static methodlar için obje oluşturmuyoruz diğer methodları kullanmak için obje oluşturmamız gerekli
