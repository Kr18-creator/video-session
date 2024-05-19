# Video Recommendation System Documentation

## Introduction
This document provides a comprehensive overview of the Video Recommendation System, which is designed using NestJS and MongoDB. The system leverages user session data to recommend videos based on the current video being watched. The purpose of this document is to elaborate on the design choices, system architecture, API interfaces, and instructions for setting up and running the application.

## Design Choices

### Technology Stack
- **Backend Framework**: **NestJS** - Selected for its robust structure, scalability, and TypeScript support, making it ideal for enterprise-level applications.
- **Database**: **MongoDB** - Chosen for its schema-less nature which allows for flexibility in data organization and its efficiency in managing large volumes of unstructured data.
- **Session Management**: **NestJS Session** - Implemented to maintain session data, enhancing user experience by providing personalized video recommendations.

### Architecture Pattern
- **MVC Pattern** (Model-View-Controller): Employed to decouple data access, business logic, and user interface concerns, thus simplifying maintenance and scalability.

## System Architecture

### Component Overview
The architecture is composed of several critical components:
1. **Controller Layer**: Manages HTTP request handling, routing to appropriate services.
2. **Service Layer**: Implements the core business logic of the application.
3. **Data Access Layer**: Facilitates communication with MongoDB for storing and retrieving data.
4. **Session Management**: Tracks user session data to offer tailored video suggestions based on viewing history.

## API Interfaces

Detailed API documentation is shared separately via a Postman collection, which includes endpoints, request-response structures, and typical use case examples. This allows for easier testing and integration by client applications.

**Accessing the API Documentation:**
- Download the Postman collection from [here](#).

## Run Instructions

### Environment Setup
First, clone the repository and navigate into the project directory:
```bash
git clone https://github.com/Kr18-creator/video-session
cd video-session

Install the dependencies
npm install

start the server:
npm run start


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
