# Title: Next JS from scratch
# Owner: Jeetendra Gupta				
# Date: Tue Sep 7 12:46:28 IST 2021
_____________________________________________________________________________________________________________________________________________

# source link -- https://nextjs.org/docs
_____________________________________________________________________________________________________________________________________________

# Install next, react and react-dom in your project:
mkdir next-app && cd next-app
npm install -g npm
npm install -g yarn
yarn init -y
yarn add react react-dom next
npm install
npm update

# Open package.json and add the following scripts:
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},

# Create a pages/index.js inside your project.
mkdir pages
touch pages/index.jsx
```
function HomePage() {
    return (<>
        <h1> Welcome to Next.js! </h1>
    </>)
}

export default HomePage;

```

# To start developing your application run 
npm run dev
or 
yarn dev
_____________________________________________________________________________________________________________________________________________
