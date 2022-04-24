const allMeals = [
  {
    id: 1,
    mealName: "Tteokbokki",
    country: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    mealName: "Chicken Ramen",
    country: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    mealName: "Bibimbap",
    country: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    mealName: "Dan Dan Mian",
    country: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    mealName: "Yangzhou Fried Rice",
    country: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    mealName: "Onigiri",
    country: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    mealName: "Jajangmyeon",
    country: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    mealName: "Ma Yi Shang Shu",
    country: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    mealName: "Doroyaki",
    country: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//***const meals = document.querySelector(".section-center"); //querySelector(".class_adı") yapısı ile class'ında "section-center" geçen yemeklerin olduğu html objesine erişim tanımlama
//***const buttons = document.querySelector(".btn-container"); //yine querySelector(".class_adı") yapısı ile class'ında "section-center" geçen butonların olacağı html objesine erişim tanımlama
//DOM elementi olarak getElementById("section_id") ve getElementById("btn_id") de kullanılabilir. getElementsByClassName kullanmak için ise index numarası da belirtmek gerekiyor. className tek bir elemente tanımlı olsa da çalışmıyor. 
//DOM className'ler; getElementsByClassName("section-center")[0] ve getElementsByClassName("btn-container")[0] olmalı.
//DOM querySelectorAll'lar; querySelectorAll(".section-center")[0] ve querySelectorAll(".btn-container")[0] olmalı.

const countries = allMeals.reduce(  //.reduce yapısı: array_adı.reduce(function(accumulator, currentValue/item, index, array), initialValue)
  (accumulator, meal) => {
    if (accumulator.includes(meal.country)) {  // accumulator; bu yapıda allMeals dizinde tanımlı meal.country elemanlarını tutucu olarak görev yapmaktadır. accumulator dizisi, item.country elemanını içermiyorsa, bu elemanı accumulator dizisi sonuna ekle, içeriyorsa accumulator dizisini döndür/ver
      return accumulator;  
    }
    else {
      accumulator.push(meal.country) //push yapısı, bir dizi(array) işlemi olduğu için, işlemin dizi oluşturmasını sağlıyor. 
      return accumulator
    }
  },
  ["All"] //"All", accumulator tutucunun/biriktiricinin başlangıç olarak tutacağı elemandır. Diğer toplayacacağı/tutacağı/biriktireceği elemanları bu eleamn üzerine toplayacak/tutacak/ekleyecek/biriktirecek
);

const countryList_func = () => {
  const countryBtns = countries.map //.map yapısı: array.map( function(value/item/diziElemanı, index, arr), this)
    ((country) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${country}>${country}</button>`;
    })
    .join(""); //"countries.map" ile oluşturulan DİZİDEN virgülleri kaldır(join sabit ilk işlem) ve tırnak içinde ifade edildiği üzere herhangi bir karakter koymadan STRİNG ifadeye dönüştür(join ikinci işlem(default ikinci işlem virgül koymaktır)) ve bu string ifadeyi "countryBtns" değişkenine tanımla

  document.querySelector(".btn-container").innerHTML = countryBtns; //DOM yapısı ile HTML içeriğine "countryBtns" string veriyi yerleştirme
  const filterCountry = document.querySelectorAll(".btn-item"); //querySelector ile tüm btn-item html nesnesine erişim tanımlama
  
  //filter allMeals
  filterCountry.forEach((btn) => {  //tüm btn-item html nesnelerine erişim tanımlanmış olduğu için sanırım filterCountry bir dizi değişkeni olmuş oluyor ki forEach fonksiyonu çalışsın. Çünkü forEach sadece diziler üzerinde çalışır.
    btn.addEventListener("click", (event) => {
      const country = event.currentTarget.dataset.id; //event'ın yönlendirildiği nesnenin değil(event.target), event'ın dinleyicisinin tanımlı olduğu tüm nesnenin(event.currentTarget) id bilgisini "country" değişkenine tanımlama. Yalnız console.log(.innerHTML) ile incelendi, burda herikisi de birebir aynı yapıyı çıktı veriyor. "dataset" hakkında javascript notlarına bak.
      console.log(country);
      const countryMeals = allMeals.filter((mealsItem) => {  //countryMeals dizisini oluşturma yapısı. allMeals dizisinin her bir item/elemanı için seçilen kategori ile eşit olup olmadığı kontrol ediliyor. Eşitse kategori, dizi elemanlarına ekleniyor. 
        if (mealsItem.country === country) {
          return mealsItem;
        }
      });
      if (country === "All") {  //seçilen kategori, "All" ise, aşağıdaki "menuList_func()"" fonksiyonu ile tüm menü listesi HTML objesine atanıyor, değilse, menuCategori dizisinde tanımlanmış yemekler atanıyor. 
        menuList_func(allMeals);
      } else {
        menuList_func(countryMeals);
      }
    });
  });
};

const menuList_func = (allMeals) => {
  let displayMenu = allMeals.map((item) => {
    return `  <div class="menu-items col-lg-6 col-sm-12">
                <img
                src=${item.img}
                alt=${item.mealName}
                class="photo"
                />
                <div class="menu-info">
                  <div class="menu-mealName">
                    <h4>${item.mealName}</h4>
                    <h4 class="price">${item.price}</h4>
                  </div>
                  <div class="menu-text">
                  ${item.desc}
                  </div>
                </div>
              </div>
    `;
  });
  displayMenu = displayMenu.join("");
  document.querySelector(".section-center").innerHTML = displayMenu;
};

menuList_func(allMeals); //web sayfası açıldığı zaman boş gelmemesi için, bu fonksiyon herhangibir btn tıklamadan burada çalıştırılıyor.
countryList_func();  //web sayfası açıldığı zaman, btn'ların hazır olması için de bu fonksiyon burada çalıştırılıyor. 


