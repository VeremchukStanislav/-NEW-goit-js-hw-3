// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionArr = this.potions.indexOf(potionName);
      this.potions.splice(potionArr, 1);
	
      return this.potions;
    // Пиши код выше этой строки
  },
};
