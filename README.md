# Meleton

## Описание задачи:
Реализовать страницу для работы со списком покупок: отображение, пагинация, добавление, удаление.

## Каждый товар из списка должен иметь следующий набор полей:
id

Название

Цена

Дата покупки

## Необходимый функционал:
Вывод списка покупок с пагинаций по 2 записи на странице

На странице товара должна быть возможность :

•просмотра\удаления\редактирования •выбранного товара

•Добавление нового товара в список

•Сортировка списка по цене или дате.

## Требования к решению:
Nuxt.js последней стабильной версии

Все товары должны быть доступны по ссылке.

Сделать data.json из 6 (или более) товаров с заполненными данными.

При первой загрузки, перед рендерингом страницы - записать данные из data.json во Vuex и в дальнейшем работать через Vuex.

Дизайн не имеет значения.

Использование сторонних готовых компонентов\библиотек не приветствуется.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

