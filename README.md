> OpenTable Menu


## React Web App

```sh
$ git clone https://github.com/SeechRobin/restaurant-api.git
$ cd restaurant-app/
$ npm install
$ npm start
```

## Node Server



```sh
$ git clone https://github.com/SeechRobin/restaurant-api.git
$ cd restaurant-api/
$ npm install
$ npm start
```



### Implementation.
I loaded the json data into MongoDB and added extra fields to the data. see below:

```sh
{
    "_id": {
        "$oid": "5bc88ff4e7179a4377fe2115"
    },
    "id": 12,
    "group": 3,
    "name": "icecream",
    "price": 3.5,
    "quantity": 9
}
```
The extra fields are `quantity` and `group`. `quantity` to keep track of the inentory for the test case when there is one cheesecake left. `group` is to separate the course types `1=starter 2=mains 3=deserts`. 

Tested the app against the 4 rules: 
Displays error messages for 3 of the rules and the cheesecake rule i i


## License

Licensed under the MIT License.
