# Asking For A Friend:

#### SEI-05 Capstone Project

This is an application where registered users can post questions on life, relationships, etiquette, and everything in between. Other registered users can offer up advice. Unregistered users can browse all the questions, but are able to have any interaction on the site. This is a safe space where the community is encouraged to be mindful, compassionate, open-minded, and inclusive.

## Set Up Steps

1. Fork and clone this repository
2. Run `npm install` for dependencies
3. Run `npm run start` to see the client

## Important Links

* [Deployed client](https://yingsongsana.github.io/asking-for-a-friend-client/#/)
* [Back-end repository](https://github.com/yingsongsana/capstone-api)
* [Deployed back-end](https://boiling-island-25130.herokuapp.com/)

## Planning

This was a great opportunity for me to work with technologies I had never tackled before: React, Express, MongoDB, and Mongoose. Even though my previous group project had used the same technologies for back-end and buiding API, I focused heavily on the front-end. And with React, having learned it just 2 weeks prior in very quick and condensed lessons, I wanted to really get to know these new technologies. It has been quite a challenge. So from the very beginning, I've prioritized the functionality of the application over styling and aesthetics.

First phase of the 4-day sprint, I worked on the back-end creating resources I needed, buidling out the initial relationships, and creating RESTful CRUD-ing. Once these were completed, I started on the front-end.

I had originally implemented the use of subdocs inside one of my resource in the back-end, but only found the approach to NOT be viable once I started working on the client. So even with careful planning ahead of time, I needed to abandon my original plan and scrapped what I had already created.

Needless to say, it was less than ideal with the 4-day deadline but I did appreciate the experience. Over the course of this coding bootcamp, I've learned to be more flexible and be open-minded to other approaches/ways of doing things. There are crazy amount of ways to write code that implements the same thing! I'm beginning to feel much more comfortable with writing throw-away code and not getting too attached to my 'precious' code.

With this project submission, the styling is quite minimal. And though I do believe I've met the MVP, there are many, many more features/little details I would have liked to have. So, please stay tuned for future iterations!

### User Stories
* As a non-registered user, I want to be able to view all questions and comments.
* As a non-registered user, I want to be able to create an account and sign in.
* As a signed-in user, I want to be able to change my password and sign out.
* As a signed-in user, I want to be able to post a question with description.
* As a singed-in user, I want to be able to make changes/update my questions.
* As a signed-in user, I want to be able to delete my questions if need to.
* As a signed-in user, I want to be able to make comments to any questions (including my own.)

### Technologies Used

Front-end:
* Javascript
* React
* React Bootstrap
* CSS

Back-end:
* Express
* MongoDB
* Mongoose

### Catalogue of Routes
| VERB | URL Pattern         |
|------| :------------------:|
|GET   | /posts              |
|GET   | /posts/:id          |
|GET   | /posts/:id/comments |
|POST  | /posts              |
|POST  | /posts/:id/comments |
|PATCH | /posts/:id          |
|DELETE| /posts/:id          |

### Unsolved Problems/Future Features

For project submission, I had to abandon two user stories that I had planned on.

* As a non-registered user, I want to be able to search for questions with matching tags.
* As a signed-in user, I want to be able to “like” or “endorse/proceed with caution” on any comments.

For features that came up during development that I thought would be very cool and add to the application.

* Having an avatar available to users.
* Real-time update for comments(spent a small part of an afternoon on my last day learning Socket.io. This would be a fun feature to tackle when I have more time!)
* Having timestamps for questions and comments.
* Having the option to upload a photo to questions a user posts (visually more appealing when browsing through all the questions).

As for the biggest neglect for this submission: styling.

### Images

![Imgur](https://i.imgur.com/gzgLgWX.png)


![Imgur](https://i.imgur.com/vEZkS6n.png)
