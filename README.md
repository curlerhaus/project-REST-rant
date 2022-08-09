# Project REST-Rant

[To Google](http://www.google.com)

REST-Rant is an app where users can review restaurants.


 |Method | Path | Purpose|
|--------|------|--------|
 |GET |/ |Home page |
 |GET |/places |Places index page | 
 |POST |/places |Create new place |
 |GET |/places/new |Form page for creating a new place |
 |GET |/places/:id |Details about a particular place |
 |PUT |/places/:id |Update a particular place |
 |GET |/places/:id/edit |Form page for editing an existing place |
 |DELETE |/places/:id |Delete a particular place |
 |POST |/places/:id/rant |Create a rant (comment) about a particular place |
 |DELETE |/places/:id/rant/:rantId |Delete a rant (comment) about a particular place |
 |GET |* |404 page (matches any route not defined above) |


## Database

# Data for Restaurants
|Input |Type|
|---------|----------|
|Name | string |
|City | string |
|State | string |
|cuisines | string |

# Reviews
| Field | Type |
|-------|------|
| _id | Object ID |
| place_id | ref(places) Object_id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String | 

# Planning

User Stories

Wireframes

Notes

https://github.com/Ssegura09/rest-rant


https://github.com/HackerUSA-CE/API-Project-REST-Rant
