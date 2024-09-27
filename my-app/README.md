Облости хранения данных:

	- база данных на json-server
	- BFF
	- редакс стор

   Сущности приложения:

	- пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
	- роль пользователя: БД (список ролей), BFF (сессия  пользователя с ролью), стор (использование на клиенте)
	- статья: БД (список статей), стор (отображение в браузере)
	- комментарий:  БД ( список комментариев), стор (отображение в браузере)

	Таблицы БД:

	- пользователи - users: id / login / password / registed_at / role_id
	- роли - roles: id / name
	- статьи - posts: is / title / image_url / content / published_at
	- комментарии - comments: id / author_id / post-id / content

	Схема состояния на BFF:

	-сессия текущего пользователя: login / password / role

	Схема для редакс стора(на клиенте):

	-user: id/ login / roleId
	- posts: массив post: id / title/ imageUrl / publishedAt / commentsCount
	- post: post: id / titleUrl/ content / publishedAt / comments: массив comment: id / author / content / publishedAt
	- users: массив user: id / login / registeredAt / role