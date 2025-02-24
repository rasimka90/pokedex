# Zalgiris Pokedex

## Project Description

Zalgiris Pokedex is a web application that allows users to browse and search for Pokémon. It provides detailed information about each Pokémon, including their stats, abilities, and types.

## Features

- Pokémon List: Browse a list of Pokémon with their names and images.
- Infinite Scroll: Load more Pokémon as you scroll down the list.
- Sorting: Sort the Pokémon list by name or other criteria.
- Pokémon Details: View detailed information about each Pokémon, including:
  Name
  Image
  Types
  Abilities
  Stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)

- Search/Filtering: Search for Pokémon by name or filter by type (optional bonus feature).
- Error Handling: Gracefully handle network issues or API errors.
- Responsive Design: The app is designed to work well on different screen sizes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (version 14 or later)
- You have installed [npm](https://www.npmjs.com/) (version 6 or later)
- You have installed Expo CLI globally:
  ```bash
  npm install -g expo-cli
  ```

## Installation

To install the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rasimka90/pokedex
   ```

2. Navigate to the project directory:

3. Install the dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
4. Start the development server:

   ```bash
   expo start
   ```

5. Run the app:

- Scan the QR code with the Expo Go app on your mobile device.
- Alternatively, you can run the app on an Android/iOS emulator or simulator.

## Issues Encountered / Features to consider

1. The Graphql API don't have dedicated search row for pokemon, it make more difficult to create a 'deep search'
2. Given design is more likely for web then for app, due to the small font sizes, that don't look good on mobile app
3. App could be divided in further component for better maintaining.
4. No eslint and/or prettier, so syntax don't look as nice.
5. Inner pokemon page have Arrows right and left, in future they good change pokemon from the db, instead of going back to main list.
6. Skeleton loader could be added to inner pokemon page.
7. Splash screen and adaptive icon to be checked, because app developed via expo go only. So pre-build for android and ios would be beneficial.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at.
