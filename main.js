document.getElementById('apiForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputWord = document.getElementById('inputWord').value;
    const resultDiv = document.getElementById('result');
  
    try {
      const response = await fetch('/get-word-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputWord })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const { data } = await response.json();
      resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
      console.error('Error:', error);
      resultDiv.innerHTML = `<p>Error fetching data</p>`;
    }
  });
  