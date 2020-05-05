# gatsby-wordpress-balsa-theme

A Gatsby theme plugin for creating blogs from headless WordPress CMS.

Turn your WordPress blog into a lightning fast static website. This Gatsby theme is a frontend replacement of the WordPress engine featuring the Balsa theme skin and functionality. All content is sourced from a headless WordPress CMS.

## Demo

Play with the [Demo](https://gatsby-wordpress-balsa-starter.now.sh/) to get a first impression.

## Features

- Balsa theme from Draftbox
- SEO optimized
- Fully responsive
- Composable and extensible

## Quick Start

Head over to the [starter repo](https://github.com/draftbox-co/gatsby-wordpress-balsa-starter) to get up and running quickly! The starter is recommended if you are creating a new site.

## Installation

This repository contains the example code **and** the Gatsby theme. If you are here to install the Gatsby theme plugin in your existing project, check out the [theme specific README](/gatsby-wordpress-balsa-theme/README.md) for further details.

In case you want to work with this repository (for local development, pull requests, etc.):

1. Clone or fork this repository:

```bash
git clone https://github.com/draftbox-co/gatsby-wordpress-balsa-theme.git
cd gatsby-wordpress-balsa-theme
```

create `.wordpress-config.json` in example directory and add your wordpress config.

If your wordpress blog is self hosted it should look like

```bash
{
  "baseUrl": "yourwordpressblog.com",
  "protocol": "https",
  "hostingWPCOM": false,
  "useACF": true,
  "includedRoutes": [
    "**/categories",
    "**/posts",
    "**/pages",
    "**/media",
    "**/tags",
    "**/taxonomies",
    "**/users"
  ]
}
```

if your blog is hosted on wordpress.com you will have to add few extra keys for reference check out [wordpress-source-docs](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/).

2. Run `yarn` in directory where you cloned theme to install dependencies.

3. Run `yarn workspace example develop` to start the example locally.

# Copyright & License

Copyright (c) 2020 Draftbox - Released under the [MIT license](LICENSE).
