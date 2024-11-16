# Use the official Node.js Alpine image as a base (small size)
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 8000

# Command to run the app when the container starts
CMD ["node", "index.js"]
