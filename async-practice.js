// Lesson 11 - Async Practice
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Failed to fetch user");
    const user = await response.json();
    console.log(user.name);
    return user;
  } catch (error) {
    console.error(error.message);
  }
}
fetchUser();
