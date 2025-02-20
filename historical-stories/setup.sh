#!/bin/bash

# Automated Setup Script for Historical Stories Project
# Exit on error
set -e

# Step 1: Install system dependencies (if any)
echo "Checking and installing system dependencies..."
if ! command -v curl &> /dev/null; then
    echo "Installing curl..."
    sudo apt-get update -y
    sudo apt-get install -y curl
else
    echo "curl is already installed."
fi

# Step 2: Install Node.js (if not already installed)
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js is already installed."
fi

# Step 3: Install npm dependencies
echo "Installing npm dependencies..."
npm install

# Step 4: Set up environment variables
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cat <<EOL > .env
USERNAME=<insert_username>
PASSWORD=<insert_password>
MONGODB_URI=<mongodbURI>
LOCAL_HOST=http://localhost:8000
OPENAI_API_KEY=
EOL
    echo "Please update the variables in the .env file with your credentials. Check back in with Gisselle (gpetty002) for access to MongoDB & OpenAI keys"
else
    echo ".env file already exists."
fi

# Step 5: Start the project
echo "Installation complete..."