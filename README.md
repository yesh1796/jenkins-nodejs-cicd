# Node.js CI/CD Pipeline Using Jenkins and Docker

## Project Overview

This project demonstrates a simple Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Jenkins, GitHub, Node.js, and Docker**.

Whenever code changes are pushed to the GitHub repository, Jenkins checks the repository for updates and automatically triggers the pipeline. The pipeline builds the Docker image, runs automated tests, and deploys the application inside a Docker container.

## Technologies Used

- **Node.js** — Application development
- **Jenkins** — CI/CD pipeline automation
- **Git & GitHub** — Source code management
- **Docker** — Containerization and deployment
- **Java** — Runtime required to run Jenkins
- **npm** — Dependency management and test execution

## Project Structure

```text
nodejs-cicd-pipeline/
├── app.js
├── test.js
├── package.json
├── Dockerfile
├── jenkinsfile
└── README.md
```

## CI/CD Pipeline Workflow

The pipeline consists of the following stages:

### 1. Source Code Management
The application source code and pipeline configuration are maintained in GitHub.

### 2. Build
Jenkins retrieves the repository and executes the configured build commands. It installs npm dependencies and builds a Docker image.

### 3. Test
Jenkins executes automated Node.js tests to verify the application.

### 4. Deploy
Jenkins deploys the application by running a Docker container and exposing port `3000`.

### 5. Automatic Triggering
Jenkins uses SCM polling to check GitHub for code changes and trigger a new pipeline build when changes are detected.

## Application Output

After successful deployment, open:

```text
http://localhost:3000
```

Expected output:

```text
Node.js CI/CD application deployed successfully!
```

After updating the application and completing a new deployment, the output changes to reflect the latest version.

## Prerequisites

Install the following tools before running the project:

- Node.js and npm
- Java Development Kit (JDK)
- Jenkins
- Git
- Docker Desktop

Ensure Docker Desktop is running and Jenkins can access the required commands.

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yesh1796/jenkins-nodejs-cicd.git
cd jenkins-nodejs-cicd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

### 4. Run the Application

```bash
npm start
```

Open `http://localhost:3000` in your browser.

**Note
