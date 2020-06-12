## Introduction

This is a super easy to use component for making a simple, pretty, and minimal email template for activism purposes, annoying your friends, or whatever else

The "email template" is a react component in `components/ui/letter.js`
Given that you're working with a react app, you can probably simply install the dependancies the component has at the top and copy and paste the component straight up into your project.

Letter takes three props:

1. Emails, an array of email addresses
2. Subject, a subject line for the email template
3. Body, the body for the email template. If you want a dyanmic body that updates as the user updates a form, you can create that yourself with template literals and pass that as a prop - an example of this is avaliable in `pages/index.js`

To run this example, simply install dependences `npm install` and run `npm run dev`

## License

[DBAD License](https://dbad-license.org/)
