# WeTalk Local Setup Guide

## MacOS

1. Update Homebrew

```bash
brew update && brew upgrade
```
   
2. Use Homebrew to install nvm (Node Version Manager)

```bash
brew install nvm
```

3. Install Node LTS v24.11.0, set it as your default installation, and switch to it

```bash
nvm install 24.11.0
nvm alias default 24.11.0
nvm use default
```

4. Check your Node version to verify it's correct

```bash
node -v
```

5. cd into the frontend directory and install node dependencies

```bash
npm install
```

6. Start the frontend

```bash
npm run dev
```
