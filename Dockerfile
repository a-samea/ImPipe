FROM ubuntu:latest
LABEL authors="fox"

ENTRYPOINT ["top", "-b"]

# Stage 1: Build Rust backend
FROM rust:latest AS backend-builder

WORKDIR /app

# Copy Rust source code and build dependencies
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo "fn main() {}" > src/main.rs  # Cache dependencies
RUN cargo build --release && rm -rf src/*.rs

# Copy the actual source files
COPY ./src ./src

# Build the Rust project
RUN cargo build --release

# Stage 2: Build React frontend
FROM node:latest AS frontend-builder

WORKDIR /web

# Copy React project files
COPY ./web/package*.json ./
RUN npm install

COPY ./web ./
RUN npm run build

# Stage 3: Final image
FROM debian:latest

# Install dependencies for running the backend and generating LaTeX PDFs
RUN apt-get update && \
    apt-get install -y libssl-dev texlive texlive-latex-extra texlive-fonts-recommended texlive-fonts-extra && \
    rm -rf /var/lib/apt/lists/*

# Copy built Rust binary from the backend builder stage
COPY --from=backend-builder /app/target/release/impedance-tube-backend /usr/local/bin/impedance-tube-backend

# Copy frontend build from the frontend builder stage
COPY --from=frontend-builder /web/build /usr/share/nginx/html

# Expose ports (for example, 8080 for backend and 80 for frontend)
EXPOSE 8080 80

# Command to run both backend and frontend (assuming the backend serves API and frontend as static files)
CMD ["impedance-tube-backend"]
