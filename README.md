# Cepless
My first AWS Lambda using Node.js to return address information through zip code

## Introduction
This functions works with http requests

## Installation

### Dependencies
* [Node.js](https://nodejs.org/en/)
* [Serverless](https://serverless.com/framework/docs/getting-started/)

### Guide

* Clone repo

```
git clone https://github.com/JonathanFerreira/cepless
```

* Install project dependencies 

```
cd cepless
npm install
```

* Create your [AWS IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).

* Set your credentials

```
serverless config credentials -o --provider aws --key=YOUR_AWS_KEY --secret YOUR_AWS_SECRET
```

### Testing

For local tests you can use:

```
serverless offline
```

And then access in your browser:

http://localhost:3000/cep/13876874


### Deploy

```
npm run deploy
```
