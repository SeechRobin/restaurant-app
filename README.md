# OpenTable Menu


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

I created a [React](https://reactjs.org/) web app and a [NodeJs](https://nodejs.org/en/) server to provide a REST API.

I loaded the json data into [MongoDB](https://www.mongodb.com/) and added extra fields to the data. see below:

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
The extra fields are `quantity` and `group`. `quantity` to keep track of the inentory for the test case when there is one cheesecake left. `group` is to separate the course types `1=starter 2=mains 3=deserts`. For testing the `quantity ` of the `cheesecake` is set to 0.  I will email you the login details to mLab where the `mongoDb` is hosted.

I used [React Redux](https://github.com/reduxjs/redux) for state management






## License

Licensed under the MIT License.
