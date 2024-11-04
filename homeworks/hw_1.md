**Опис домашки:** 
Потрібно створити типи для книги, яка містить інформацію про користувачів та їхні улюблені книги. 
Використовуй утиліти TypeScript, щоб створити різні версії типів для різних частин завдання.

Створи інтерфейс Book з наступними властивостями:
```ts
interface Book {
  id: number;
  title: string;
  author: string;
  yearPublished: number;
  isFavorite: boolean;
}
```
	•	Використовуючи Pick, створи тип FavoriteBook, який включатиме лише title, author, та isFavorite.
	•	Використовуючи Omit, створи тип PublicBookInfo, який виключатиме поле isFavorite.
	•	Використовуючи Readonly, створи тип ReadonlyBook, у якому всі властивості будуть лише для читання.
	•	Використовуючи Partial, створи тип BookUpdate, який дозволяє оновлювати лише вибрані властивості книги.

Додаткове завдання: 
Створи функцію toggleFavorite, яка приймає ReadonlyBook і повертає новий об’єкт з типом BookUpdate, змінюючи значення isFavorite.
