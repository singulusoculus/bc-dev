I am so proud of this project! It is the culmination of months of work, research, discouragement, learning, victory, and all the while, growing as a developer. This site combines the Pub Meeple site and blog with the Ranking Engine and Top Nine tools I had previously made. These were separate sites built on different technologies. Pub Meeple was a wordpress site, the Ranking Engine was a vanilla JS site built on top of WordPress authentication, and the Top Nine was a Svelte site. My goal was to bring them together in one complete full stack app.

### The Back End

Since I had just finished changing this site over to SvelteKit (and loved it), I thought I’d use it for the new combined Pub Meeple site. I quickly realized that if I wanted to use SvelteKit I’d have to host the front end separate from the back end. We had just paid for several more years of hosting the mySQL database at a host that didn’t support Node JS so I opted to leave it where it was and build a PHP API to sit on top of it.

I was also leaving behind the user management and authentication system that WordPress gave me. I could have found a pre-packaged solution but decided to take the more painful route and roll my own JWT-based user authentication system. Why? This was a blank spot in my knowledge so I wanted to fill it in. I learned so much.

This resulted in a PHP API on top of mySQL that handles all of the CRUD operations as well as a fully functional authentication system for registration, migration (from our old system), password resets, etc.

### The Front End

For hosting the front end, I landed on Netlify. They made it so simple to get the site up and running. When I am ready to update the site I just give it a git push and I’m good to go. I was also able to integrate Netlify forms into my site - a nice bonus since it meant I didn’t have to handle it myself.

The last layer of this is the whole reason I started this process - SvelteKit. I had previously built another project in Svelte and had converted this site to SvelteKit so the next natural step was to build something from scratch in SvelteKit. I could not be happier with this decision. I try to use as few dependencies as I can since this forces me to learn how things work, but I did use [mdsvex](https://mdsvex.pngwn.io/) to handle the blog, [svelte-select](https://github.com/rob-balfre/svelte-select) for the select drop downs, and [svelte range slider](https://github.com/simeydotme/svelte-range-slider-pips) for a double handled range selector.

I am really happy with the way this turned out and I am looking forward the future development of this project and using SvelteKit in projects to come.
