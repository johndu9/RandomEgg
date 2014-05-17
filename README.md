RandomEgg
=========

What we do is pull links for almost every single product under all categories from Newegg. The Java bits generate the lists of links, and the rest is website stuff and lots of lists.

Running the Java bits means you have to take a look at all the arguments you have to throw in. We run it for every category to populate the lists, but you don't have to.

If you want to generate a list from scratch, use the args: true 50 1, this will generate 50 products per category.

Mitch and John (mostly Mitch) wrote the website bits to make it look pretty, all of which are also included in the git, so feel free to host the site if you want.

A working demo of the site is available here: www.randomegg.me

TODO
=========
- Weigh the pros and cons of adding the preview images to the page, as it would increase the http requests to Newegg by a massive amount. It could be done though.
- Make ads a bit less intrusive?
