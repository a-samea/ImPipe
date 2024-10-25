# Impedance Tube Project

A comprehensive full-stack application for conducting impedance measurements. This software provides both a backend (written in Rust) and a frontend (React), designed to interface with measurement hardware and process data in real time. The system aims to support multi-platform compilation (Windows and Linux) with minimal dependencies for ease of use.

## Table of Contents
 - [Features](#features)
 - [Installation & Usage](#installation-and-usage)
 - [Configuration](#configuration)
 - [References](#references)
---

## Features
### Backend
- **Device Verification**: Real-time monitoring and control over audio devices (e.g., two-channel microphone, mono speaker) with adjustable parameters.
- **Automated Measurement**: Fully customizable measurement parameters, including frequency range, intervals, and strobe controls for start, stop, and dry-run functionalities.
- **Data Processing**: Real-time data validation and error handling, with options for raw data export (CSV), detailed LaTeX reports, and multi-page data sheets.
- **Visualization**: PDF reports generated via LaTeX, including error bars and optimized file sizes.
- **File Management**: Organized project directory structure with per-frequency data storage, config file management, and output results.

### Frontend
- **Device Configuration**: Set up measurement parameters, select device channels, and specify test distances.
- **Live Monitoring**: Real-time stats, data streams, and frequency testing iteration status.
- **Error Handling**: Real-time validation of computed impedance values, with test stopping and retry options.
- **Output Customization**: Supports custom LaTeX templates (via `.nj2` file) for the final report.

## Installation and Usage
### Prerequisites
- **Rust**: Ensure Rust is installed. [Install Rust](https://www.rust-lang.org/tools/install).
- **Node.js and npm**: Required for the React frontend. [Install Node.js](https://nodejs.org/).
- **Meson and Ninja**: Used as build tools for the project.
- **TexLive**: Required for LaTeX PDF generation.

### Setup and Usage
1. **Clone the repository**:
   ```shell
   git clone https://github.com/a-samea/ImPipe.git
   cd ImPipe
   ```
2. **Backend Compile**:
    ```shell
    cargo build --release
   ```
3. **Frontend Compile**:
   ```shell
    cd web
    npm install
    npm run build
   ```
4. **Running the Backend**
    ```shell
   cargo run
   ```
5. **Running the Frontend**
    ```shell
   npm start
   ```
## Configuration
TOML and template

## References
- Author(s). (2024). Impedance Tube Project. GitHub.
- Author(s). (2024). Impedance Tube Project. GitHub.

---
## License
This project is licensed under the [MIT License](./LICENSE)