import { transformPost } from "../transformers";

export const getPosts = async (searchPhrase, page, limit) => {
  try {
    const response = await fetch(
      `http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const loadedPosts = await response.json();
    const links = response.headers.get("Link");

    console.log("Заголовок Link:", links); // Добавьте это для отладки

    return {
      posts: loadedPosts && loadedPosts.map(transformPost),
      links,
    };
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
    return {
      posts: [],
      links: null,
    };
  }
};
