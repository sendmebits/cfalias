# cfalias (Cloudflare Alias) - DIY Disposable Email Service using Cloudflare
`cfalias` is a minimalistic app for managing disposable emails ("Custom addresses") in Cloudflare. Protect your inbox from the onslaught of unwanted junk emails and take control of your email privacy. Forked from [x2.email](https://github.com/jessetinell/x2.email)

## 📌 Problem Statement
Your email address serves as a universal key to numerous online services. Every new service you sign up for brings with it a deluge of promotional junk. Not to mention the lurking risk of data breaches, which may expose your email on the darknet.

## 🌟 Solution
The easiest way to stop receiving junk emails is to not share you email address to begin with. Not share your *real* email address, at least.
Instead, you can use disposable emails. One new address for each online service.
With Cloudflare Email Routing you can create free disposable emails that forward emails straight to your primary inbox (Gmail, Outlook, Apple Mail, etc.).
`cfalias` is a minimalistic app for managing of your disposable emails in Cloudflare.

## 🚀 Features
- **Sleek Interface:** A minimalistic UI. 13x faster than using Cloudflare's dashboard.
- **Privacy First:** No registration, no personal info sharing.
- **Direct Communication:** x2.email communicates directly with the Cloudflare API. `cfalias` has no database or server.
- **Open Source Goodness:** Host the application yourself for free (optional) or modify the code to your liking. Don't forget to star the repo!

## 🧰 Getting Started

### Prerequisites:
1. Cloudflare® account
2. A domain connected to Cloudflare®

### Use the app:
You can choose to use the hosted version or host the application yourself:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjessetinell%2Fx2.email)


## 📖 About
cfalias is a fork of x2.email and was created with the same mission, to safeguard your primary email inbox, with some additional levels of customization. Built on top of Cloudflare's Email Routing service, it serves as an intermediary, ensuring your primary email remains pristine.

## 🛠 Contributing
We welcome contributions to improve `x2.email`. Feel free to raise issues, provide solutions, or suggest new features.

### Develop locally
1. `npm i`
2. `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)


## 📜 License
This project is licensed under the MIT License.
