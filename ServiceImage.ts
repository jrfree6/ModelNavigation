export async function fetchData() {
    try {
      const response = await fetch('https://randomuser.me/api/?picture=female');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }