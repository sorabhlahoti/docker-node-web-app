```markdown
# Node.js Docker App

This project demonstrates how to containerize a simple Node.js application using Docker.

---

## 📂 Project Structure

```

.
├── Dockerfile 
├── package.json
├── package-lock.json
├── server.js  # or your entry point
|── .dockerignore
└── README.md

````

---

## 📦 Dockerfile

This project uses a simple `Dockerfile`:

```dockerfile
# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
````

---

## 🚢 Build the Docker Image

Run this command in your project root:

```bash
docker build -t your-dockerhub-username/your-app-name:tag .
```

Example:

```bash
docker build -t sorabhlaho/node-web-app:v1 .
```

---

## ▶️ Run the Container

```bash
docker run -d -p 8080:8080 --name node-web-app sorabhlaho/node-web-app:v1
```

* `-d` → run in detached mode
* `-p` → map container port to host
* `--name` → name your container

---

## 🗂️ Mount Local Volume (Optional)

For development with live code changes:

```bash
docker run -d \
  -p 8080:8080 \
  -v ${PWD}:/app \
  --name node-web-app sorabhlaho/node-web-app:v1
```

---

## 🐳 Push to Docker Hub

```bash
docker login
docker tag your-image your-dockerhub-username/your-app-name:tag
docker push your-dockerhub-username/your-app-name:tag
```

---

## ✅ .dockerignore

Always use a `.dockerignore` to skip local files that shouldn’t go into your image.

Example:

```
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
README.md
```

---

## 📞 Useful Commands

* **List containers:**

  ```bash
  docker ps
  ```
* **Stop container:**

  ```bash
  docker stop node-web-app
  ```
* **Remove container:**

  ```bash
  docker rm node-web-app
  ```

---

## 🏆 Good Practice

* Keep `package-lock.json` in `.gitignore` if you don’t want to version it.
* Use multi-stage builds for production to keep image size small.
* Pin Node versions for consistency (`node:18-alpine`).

---

**Happy coding!** 🚀

