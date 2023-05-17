# blackyoonicorn.com
Temporary home page till we find an affordable Shopify replacement or I create my own.
Also looking for 3PL to fulfill orders for while we are travelling.

## Experimentation
Playing around with different technologies. Should work on latest versions of modern browsers. Have not tested on Edge or Windows or Linux.
+ All animations/transitions are CSS only
	- using CSS math functions
	- CSS custom properties
+ Layout is CSS grid and flexbox using slotted web components and shadow DOM now that even Safari is starting to add native support for web components. 
+ JS is used only to load native browser web components
+ Using [HTML 5.2](https://html.spec.whatwg.org/) `<dialog>` element for native modal dialog box to simply center the message box horizontally and vertically on top of the page since it is finally [supported in browsers](https://caniuse.com/dialog)
+ Too many product photos! Using [imagekit.io](https://imagekit.io) media optimization servers with `Accept-CH` client hints headers for automatic PNG compression & WebP conversion to deliver optimized responsive images based on device resolution, screen size, and network speed.
+ Since I have so many image https requests I decided not to use external stylesheets or font files.
+ Fonts are subsetted to only include characters used (plus a few extra for future experimentation) and base64 encoded
+ Using GitHub Pages for free hosting, automatic https and gzip. 

## Design Concept
+ wall of product photos to showcase our products
+ was originally thinking of masonry grid layout
	- but it is [not natively supported by browsers](https://caniuse.com/mdn-css_properties_grid-template-rows_masonry)
	- (view site on mobile or portrait display for similar effect)
+ basically two rows five column grid of 10 products
+ Grayscale applied to imply products are not currently available for sale.
	- RedOrange background for pop of color but originally thinking black or very dark gray.
		* Inspired by Africa's orange dress https://www.thekoreanbook.com/#the-author
+ Hover over photo, zoom into first/top photo (each grid item has multiple photos) in full color! (Other columns/rows resize)
	- On mobile tap image to zoom but CSS animations can be *slow*
	- Tap logo to reset (helpful on mobile/portrait)
+ Hover over logo, logo animates
	- yellow background represents our gold products
	- unicorn appears to be coming out of circle with horn piercing out
	- Monoton font is used on title page of *The Korean* book for BlackYoonicorn Press Imprint
+ I tried placing logo on left and right of text but preferred the animation effect in the background photos when the logo was on the right while mousing over to logo on desktop.
+ Second row of text letter spacing is adjusted so the last letter lines up with last letter of "BlackYoonicorn"
+ Yes, that is actor, Daniel Dae Kim, at home in Hawaii, unboxing our products and holding our book, [*The Korean--Single and Obese: Then Kimchi Changed Everything!*](https://thekoreanbook.com) We did not pay him or ask him to post a reel on Instagram and as he says, he never does unboxings.

## @todo
+ Add image alt descriptions.
+ Add product videos.
+ Add email subscribe functionality to `<dialog>` and allow modal to close.
+ Add `<h1>` and logo under the `<dialog>` centered on page.
+ Add either an inline on hover and/or popup slide show to view all product images.
	- Eventually the popup could allow for purchase and provide product details and variants as well.
		* Would need at least a 'shopping cart/checkout' button floating in a corner on main page (not in the popup).
		* Product search button, etc. on main page.
+ Add privacy policy terms of use. Currently the site does not use cookies but at least inform about web logs and link to GitHub privacy policies.
+ Add favicons and social sharing cards
+ Add json+ld schema markup
+ Accessibility
+ Etc.
