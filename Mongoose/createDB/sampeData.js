db = db.getSiblingDB('rentabledb')
db.createCollection('ruser')
usersCollection = db.getCollection("ruser")
usersCollection.remove({})
usersCollection.insert(
{
    userID: 1,
    fName: "Bryson",
    lName: "Shea",
    email: "sheab1@seattleu.edu",
    password: "dog",
    loginStatus: 1,
    contactNum: "808-111-1111",
    location: "Seattle",
    address: "70 Pine St, Seattle WA 98122",
    itemID: [
    {
        num : 2
    },
    ],

    optionID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ],
    transactionID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ],
    reviewID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ]
}
)
usersCollection.insert(
{
    userID: 2,
    fName: "Ho I",
    lName: "Lin",
    email: "linho@seattleu.edu",
    password: "cat",
    loginStatus: 1,
    contactNum: "808-111-1111",
    location: "San Francisco",
    address: "70 Pine St, Seattle WA 98122",
    itemID: [
    {
        num : 2
    }
    ],

    optionID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ],
    transactionID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ],
    reviewID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ]
}
)

usersCollection.insert(
{
    userID: 3,
    fName: "Crystal",
    lName: "Nguyen",
    email: "ngy2@seattleu.edu",
    password: "rab",
    loginStatus: 1,
    contactNum: "808-311-1111",
    location: "New York",
    address: "70 Pine St, SF WA 98122",
    itemID: [
    {
        num : 3
    },
    {
        num : 4
    }
    ],


    optionID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ],
    transactionID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ],
    reviewID: [
    {
        num : 2
    },
    {
        num : 3
    }
    ]
}
)

db.createCollection('rcard')
cardsCollection = db.getCollection("rcard")
cardsCollection.remove({})
cardsCollection.insert(
    {
    cardID: 1,
    creditCardNumber: "23423423",
    adress: "720 John St",
    expDate: "07/09/13",
    cvv: "433",
    }
)

cardsCollection.insert(
    {
    cardID: 2,
    creditCardNumber: "23423423",
    adress: "720 May St",
    expDate: "04/09/17",
    cvv: "453",
    }
)

db.createCollection('ritem')
itemsCollection = db.getCollection("ritem")
itemsCollection.remove({})
itemsCollection.insert(
{
    itemID: 1,
    userID: 1,
    reviewID: 1,
    dateCreated: 1/3/2017,
    title: "Macbook Pro",
    price: 50,
    condition: 4,
    description: "Very good condition macbook, have not used once",
    image: "../../../pic/mac1.jpg",
    location: "New York"
}
)
itemsCollection.insert(
{
    itemID: 2,
    userID: 2,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Green Bicycle ",
    price: 10,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike9.jpg",
    location: "New York"
}
)
itemsCollection.insert(
{
    itemID: 4,
    userID: 2,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Red Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike8.jpg",
    location: "New York"
}
)
itemsCollection.insert(
{
    itemID: 5,
    userID: 1,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Black Bicycle",
    price: 7,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike7.jpg",
    location: "New York"
}
)
itemsCollection.insert(
{
    itemID: 6,
    userID: 3,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Yellow Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike6.jpg",
    location: "New York"
}
)
itemsCollection.insert(
{
    itemID: 7,
    userID: 3,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Yellow Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike5.jpg",
    location: "Seattle"
}
)
itemsCollection.insert(
{
    itemID: 8,
    userID: 3,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Green Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike4.jpg",
    location: "Seattle"
}
)
itemsCollection.insert(
{
    itemID: 9,
    userID: 3,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Pink Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike3.jpg",
    location: "Seattle"
}
)
itemsCollection.insert(
{
    itemID: 10,
    userID: 1,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Green Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike2.jpg",
    location: "Seattle"
}
)
itemsCollection.insert(
{
    itemID: 11,
    userID: 1,
    reviewID: 3,
    dateCreated: 2/4/2017,
    title: "Pink Bicycle",
    price: 20,
    condition: 3,
    description: "Very good condition bicycle, have not used once",
    image: "../../../pic/bike1.jpg",
    location: "Seattle"
}
)
itemsCollection.insert(
{
    itemID: 3,
    userID: 3,
    reviewID: 4,
    dateCreated: 3/1/2017,
    title: "Tent",
    price: 4,
    condition: 2,
    description: "Very good condition tent, have not used once",
    image: "../../../pic/tent1.png",
    location: "Seattle"
}
)
itemsCollection.insert(
{
    itemID: 14,
    userID: 3,
    reviewID: 1,
    dateCreated: 4/3/2017,
    title: "Snowboard",
    price: 30,
    condition: 5,
    description: "Very good condition snowboard, have not used once",
    image: "../../../pic/snowboard1.jpg",
    location: "Seattle"
}
)

db.createCollection('rreview')
reviewsCollection = db.getCollection("rreview")
reviewsCollection.remove({})
reviewsCollection.insert(
{
    reviewID: 1,
    itemID: 1,
    renterID: 1,
    lenderID: 2,
    comment: "Very Happy.",
    star: 2
}
)
reviewsCollection.insert(
{
    reviewID: 2,
    itemID: 3,
    renterID: 2,
    lenderID: 3,
    comment: "Very Happy.",
    star: 3
}
)
reviewsCollection.insert(
{
    reviewID: 3,
    itemID: 4,
    renterID: 3,
    lenderID: 4,
    comment: "Very Happy.",
    star: 4
}
)
reviewsCollection.insert(
{
    reviewID: 4,
    itemID: 1,
    renterID: 3,
    lenderID: 4,
    comment: "Very Happy.",
    star: 5
}
)
db.createCollection('rtransaction')
transactionsCollection = db.getCollection("rtransaction")
transactionsCollection.remove({})
transactionsCollection.insert(
{
    transactionID: 1,
    lenderID: 1,
    lenderPaymentID: 1,
    renterID: 1,
    renterPaymentID: 1,
    itemID: 1,
    beginDate: 4/3/2017,
    endDate: 4/5/2017,
    tStatus: 2,
    lenderReviewID: 1,
    renterReviewID: 2
}
)
transactionsCollection.insert(
{
    transactionID: 2,
    lenderID: 2,
    lenderPaymentID: 1,
    renterID: 3,
    renterPaymentID: 1,
    itemID: 4,
    beginDate: 5/3/2017,
    endDate: 5/5/2017,
    tStatus: 3,
    lenderReviewID: 4,
    renterReviewID: 2
}
)
transactionsCollection.insert(
{
    transactionID: 3,
    lenderID: 2,
    lenderPaymentID: 3,
    renterID: 3,
    renterPaymentID: 3,
    itemID: 2,
    beginDate: 6/3/2017,
    endDate: 6/5/2017,
    tStatus: 1,
    lenderReviewID: 3,
    renterReviewID: 4
}
)
transactionsCollection.insert(
{
    transactionID: 4,
    lenderID: 2,
    lenderPaymentID: 4,
    renterID: 5,
    renterPaymentID: 2,
    itemID: 5,
    beginDate: 4/10/2017,
    endDate: 4/15/2017,
    tStatus: 4,
    lenderReviewID: 2,
    renterReviewID: 3
}
)

