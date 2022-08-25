![](https://img.shields.io/badge/Microverse-blueviolet)
# Hello React Rails

An application that generates random greetings 

## Built With

- Ruby on Rails
- React
## Additional Tools

- rubocop
- stylelint
- Ruby Gems
- npm

## Versions
- Ruby  ~3.1.2
- PostgreSQL  ~12.9
- Node.js  ~14.17.6
- Yarn  ~1.22.17

## `Getting Started`

To get a local copy of this project:

Clone this repository or download the Zip folder:
```
$ git clone git@github.com:tafaramafemba/hello-react-rails.git
```
Then:
```
$ cd hello-rails-react

$ gem install bundler

$ bundle install
```

To start App:
```
$ rails server
```

To view on browser:
```
http://localhost:3000
```

## `Database creation`

Create a Postgres user:
```
$ su - postgres
```

After that access Postgres:
```
psql
```
```

Initialize the database:
```
$ bin/rails db:setup
```

Migrate the database:
```
$ bin/rails db:create
```
```

### To track linter errors locally follow these steps:

Track Ruby linter errors run:
```
$ rubocop
```
To auto-correct correctable Rubocop offenses run:
```
$ rubocop --auto-correct-all | rubocop -A
```

## `Authors`

👤 **Have Samuel**

- GitHub: [Have-Samuel](https://github.com/Have-Samuel)
- Twitter: [@samhave1](https://twitter.com/@samhave1)
- LinkedIn: [Have Samuel Kabreebe](https://linkedin.com/in/Have-Samuel-Kabreebe)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Have-Samuel/hello-rails-react/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- This project is part module 5 in the Microverse study program.
- Thanks to the Microverse team for the great curriculum.


## 📝 License

This project is [MIT](./MIT.md) licensed.
