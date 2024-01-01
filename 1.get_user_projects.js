// Define the API URL
const apiUrl = 'https://tasking-manager-tm4-production-api.hotosm.org/api/v2/projects/queries/martien-176/touched/';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (!data) {
      throw new Error('No data found in response');
    }
    
    //console.log('Received data:');
    //console.log(data);

    // Convert to parsable array
    const records = [];
    for (const record in data) {
      records.push(data[record]);
      //console.log(records[records.length - 1]); // Print the latest object in the `records` array
    }

    for (const record of records) {
      // Create variables for each key value pair
      const projectId = record[0].projectId;
      const name = record[0].name;
      // Use the variables for further processing
      console.log(`projectId: ${projectId}, Name: ${name}`);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });