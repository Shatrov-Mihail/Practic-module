const updateUserRole = async (userId, newRole) => {
  try {
    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: newRole }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при обновлении роли пользователя:', error);
  }
};
