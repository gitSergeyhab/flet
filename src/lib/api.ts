const BASE_URL = " https://jsonplaceholder.typicode.com";

export const request = async (url: string, method?: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
    });
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
