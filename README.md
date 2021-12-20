## File Structure
### ./src/styles/site.scss
import styles here.

### ./src/scripts/index.js
Add scripts here

### ./src/liquid
Move the shopify theme folder here

To reference scripts and styles add the following to header

```liquid
// script
<script src="{{ 'site.js' | asset_url }}" defer="defer"></script>

// stylesheet
<link href='{{ 'site.css' | asset_url }}' rel='stylesheet' type='text/css' media='all' />

````


### Commands
| Type | Command |
| --- | --- |
| Create Config | npm run create:config -- --env=[development \| production] --store=[xxxx.myshopify.com] --password=[xxxx] --theme_id=[xxxxx] |
| Build | npm run build |
| Deploy | npm run deploy [--allow-live] |
| Watch | npm run watch |


# Developer Task
### Product Image Gallery Column Toggle
The product image gallery will be utilizing images and videos. The video's aspect ratio will either be 3:4 or less. Videos <= 3:4 will need to mimick animating images.
The gallery by default is in 2 columns unless video > 3:4.
When images or <= 3:4 videos are clicked, toggle assets between 2 columns to 1 full-width column.

[Preview of finished gallery](https://avodev-1.myshopify.com/products/black-brook?variant=40273192747158)

### Requirements
1. By default lay out all images and <= 3:4 video in a two column grid.
2. For videos > 3:4, display as full width.
3. <= 3:4 video functionality
	1. Remove controls.
	2. Auto loop
	3. Auto mute
4. When clicking on an image or <= 3:4 video, toggle the gallery from 2 columns to 1 full-width column.
5. Add close X button on the top right of the gallery when in the full-width state.

** Do not code out the breadcrumbs or update the gallery when switching between variants.

### Sample Assets
Use the assets located under ./product-assets to use for the sample product.

### Submit
Work on a forked repo. Once completed, email github and shopify store url.
