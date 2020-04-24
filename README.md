# Full-Stack-Pokedex
A full stack Node.js and React Pokedex

## Live Demo
Try the application live at [TBA]

## Features
- User can view 9 Pokemon at a time which can go up to 807
- User can view details of each Pokemon
- User can catch (add) a Pokemon to their 'caught' list
- User can release (delete) a Pokemon from their 'caught' list
- User can view individual pokemon from 'caught' list to confirm they are ready for battle
- App is Mobile Responsive

## Preview
![Full-Stack-Pokedex](pokedex.gif)

## System Requirements
- Node.js 10 or higher
- NPM 6 or higher
- PostgreSQL 6 or higher

## Getting Started
1. Clone the repository.
```
https://github.com/harris-nguyen/Full-Stack-Pokedex.git
```
2. Change directory to cloned folder
```
cd Full-Stack-Pokedex/
```
3. Install all dependencies with NPM.
```
npm install
```
4. Start PostgreSQL server
```
sudo service postgresql start
```
5. Create the database
```
createdb pokedex
```
6. Import the example database to PostgreSQL
```
npm db:import
```
7. Access the onlineStore Postgresql database server using pgweb in your default web browser
```
pgweb --db=pokedex
```
8. Start the project.
```
npm run dev
```
9. Once started, you can view the application by opening https://localhost:3000
