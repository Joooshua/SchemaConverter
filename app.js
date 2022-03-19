var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyqssyXpOW94v3yf'}).base('appzWU9OIZCsXGJqg');

const table = base('Month');

const getRecords = async () => {
    const records = await table.select({
        // Selecting the first 1 record in All furniture:
        maxRecords: 1,
        view: "All furniture"
    }).firstPage();
    console.log(records);
}

const getRecordsById = async (id) => {
    const record = await table.find(id);
    console.log(record);
}

const createRecords = async (fields) => {
    const createdRecord = await table.create(fields);
    console.log(createdRecord);
}

base('Month').create([
  {
    "fields": {
      "ID": "10",
      "Month": "October"
    }
  },
  {
    "fields": {
      "ID": "2",
      "Month": "February"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
/*for (var i = 0; i < jsonData.length; i++) {
  var obj = jsonData[i];
  table.create(obj, function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}*/




// 1. unique identifier (Provided by Airtable)
// 2. fields (has createdTime)
//getRecords();


/*
  1. how to transfer from JSON to airtable
    1.1 create record?
  2. how to transfer from airtable to JSON to csv
    2.1 iteratively checking and flatten the objects in each element of the array
    2.2 convert flattened JSON into a csv
  3. embed these functions into the web application

*/