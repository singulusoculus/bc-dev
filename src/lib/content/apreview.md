This is my first "commercial" app to create. At the time, I was working for an engineering and construction company that had a really old web interface for reviewing and approving accounts payable invoices. I wanted to stretch my web dev legs into my professional job so I took it upon myself to create a modern version of this app in Svelte.

The challenge on the backend was I was working in a Windows environment so I had to deal with IIS and AD authentication. I landed on a npm package called [Passport](https://www.npmjs.com/package/passport) to handle the authentication and [iisnode](https://github.com/Azure/iisnode). I then used a reverse proxy in IIS to serve the site. 

On the front end, the challenge was creating a data table that was sortable, searchable, and interactive. This was a great challenge and I learned a lot in the process. 

This project really stretched me outside of my norm and I learned a lot in the process.