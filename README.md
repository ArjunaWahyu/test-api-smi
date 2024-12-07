# Test API Satu Medis Indonesia

This document provides information on how to test the API for Satu Medis Indonesia.

## Table of Contents
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Introduction
This API allows you to interact with the Satu Medis Indonesia platform programmatically.

## Requirements
- Node.js
- npm

## Installation
To install the necessary dependencies, run:
```bash
npm install
```

## Usage
To start the application, run:
```bash
npm start
```


### POST /api/v1/register
Registers a new user.

### POST /api/v1/login
Authenticates a user and returns a JWT token.

### POST /api/v1/data
Creates new data (protected route with JWT token).

### GET /api/v1/data
Retrieves all data (protected route with JWT token).

### PUT /api/v1/data/:id
Updates data by ID (protected route with JWT token).

### DELETE /api/v1/data/:id
Deletes data by ID (protected route with JWT token).