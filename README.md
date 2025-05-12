# Gigsgig App
Gigsgig App is a decentralized platform tailored to meet the needs of students by connecting them with campus-based menial work opportunities. Built on the Cardano blockchain, the app ensures secure and transparent payment systems This project was developed as part of a hackathon to demonstrate the potential of blockchain technology in addressing everyday challenges faced by students.

## Features

- **Decentralized Payments**: Powered by the Cardano blockchain for secure and transparent transactions.
- **User-Friendly Interface**: Simple and intuitive design for both job seekers and employers.
- **Efficient Matching**: Quickly connects workers with available gigs in their area.
- **Smart Contracts**: Ensures trust and reliability between parties.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js using Json server
- **Blockchain**: Cardano (preprod)
- **Smart Contracts/Onchain**: Aiken
- **Offchain**: Mesh SDK
- **Database**: JSON Server

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/gigsgig-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd gigsgig-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start Json-server
    ```bash
    npx json-server backend/db.json --port 8000
    ```
4. Start the development server:
    ```bash
    npm buid
    ```
5. run fron frontend 
    ```bash
    npm run dev
    ```

## Usage

1. connect wallet 
2. navigate to either "I am a worker" or "I am a tasker"
2. Browse available gigs or post a new job.
3. Use ADA for secure payments.
4. Complete the gig and leave feedback.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Cardano community for their support and resources.
- Hackathon organizers for the opportunity to build this project.
