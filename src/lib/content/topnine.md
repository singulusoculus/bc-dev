This project started as a piece of the Ranking Engine. Finish ranking your list of games and the app would, with the click of a button, automatically generate a grid image with your top nine games to share around.

I decided this should be broken out into its own app so that users wouldn't have to go through the whole ranking process if they already knew what their top games were. Originally, I just took the pieces from the Ranking Engine that I needed and cobbled them together for this purpose.

One of the original big challenges was writing the code that took the original images from Board Game Geek and resized and cropped them to the right size for a grid like this. The next challenge was to get them all to lay out with a frame separating each one and a logo on the bottom. I learned a lot about HTML canvas, promises and async/await doing this. I also had to implement a cors-anywhere proxy to successfully get the images from Board Game Geek.

After I took some time to learn Svelte I thought that this project would be perfect to translate from vanilla JS to a framework. If you go to the link below you will find the Svelte version of the Top Nine app.

One of the things I really wanted to add to this version was a visual grid that you could see being built as you added games to your list. I also wanted you to be able to drag and drop to reorder items. It was a lot of fun figuring all this out.
