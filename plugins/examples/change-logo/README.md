# Example Plugin: Changing The Logo

This shows you how to change the Headlamp logo and make it user configurable with flexible rendering options.

![screenshot of the logo being changed](../../../docs/development/plugins/images/change-logo.png)

To run the plugin:

```bash
cd plugins/examples/change-logo
npm install
npm start
# See the logo in the top left corner of Headlamp has changed.
```

## Features

- **Configurable Shape**: Choose between circular (default) or square/rectangular rendering
- **Custom Padding**: Add internal padding (0-20%) to prevent logo clipping
- **Background Color**: Set custom background colors for contrast
- **Theme Support**: The logo can react to different size views (mobile and Desktop) and themes (dark/light)
- **Flexible Input**: Use text logos or custom image URLs
- **Backward Compatibility**: Maintains existing behavior by default

## Settings

The plugin provides a settings interface with the following options:

### Logo URL
Enter the URL of your custom logo image. Leave empty to use the default SVG logos.

### Shape
- **Circle** (default): Maintains current circular avatar behavior
- **Square**: Renders logo without circular mask, preserving original aspect ratio

### Padding (%)
Adjustable padding from 0-20% to add internal spacing around the logo. Useful for wide logos that might get clipped at the edges.

### Background Color
Set a background color behind the logo using any valid CSS color value:
- `transparent` (default)
- Hex colors: `#ffffff`, `#000000`
- RGB/RGBA: `rgb(255,255,255)`, `rgba(255,255,255,0.5)`
- Named colors: `white`, `black`, `red`

## Recommended Usage

For best results:
- Use **transparent square PNG** images for maximum flexibility
- Set **Shape** to "Square" when using rectangular brand logos
- Add **Padding** (5-10%) for logos that touch the edges
- Use **Background Color** for logos that need contrast against the header

## Code Structure

The main code for the example plugin is in [src/index.tsx](src/index.tsx).
The code for the plugin settings is in [src/settings.tsx](src/settings.tsx).

## API Documentation

See the API documentation for:

- [registerAppLogo](https://headlamp.dev/docs/latest/development/api/classes/plugin_registry.registry/#registerapplogo)
