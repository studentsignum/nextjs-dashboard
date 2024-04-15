// Define an asynchronous function to fetch data from the JSONPlaceholder API
async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  }
  
  // Using the async function
  (async () => {
    try {
      console.log('Fetching user data...');
      const userData = await fetchUserData();
      console.log('User data:', userData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();
  