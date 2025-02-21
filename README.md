# Robot Controller

This is a simple React application that simulates controlling a robot on a 5x5 grid. The robot can move forward in the direction it is facing and rotate to face any of the four cardinal directions (north, south, east, west). The application is styled using TailwindCSS and uses plain JavaScript.

## Features

- **5x5 Grid**: A grid where the robot can be moved.
- **Robot Movement**: Controls to move the robot forward.
- **Robot Rotation**: Controls to rotate the robot left or right.
- **Minimalist Design**: Styled using TailwindCSS, inspired by Bellroy’s clean and simple design aesthetic.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/robot-controller.git
    cd robot-controller
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

- Use the "Rotate Left" button to rotate the robot 90 degrees counterclockwise.
- Use the "Rotate Right" button to rotate the robot 90 degrees clockwise.
- Use the "Move Forward" button to move the robot one step forward in the direction it is currently facing.

## Project Structure

- `src/App.js`: Main component that handles state and robot controls.
- `src/Grid.js`: Component that renders the 5x5 grid.
- `src/Robot.js`: Component that renders the robot.
- `src/index.css`: Custom CSS, including TailwindCSS directives.

## Styling

The application uses TailwindCSS for styling. The main styles are defined in `src/index.css` using Tailwind directives.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

Feel free to customize the repository URL, contribution guidelines, or any other part of the README to better fit your needs.
