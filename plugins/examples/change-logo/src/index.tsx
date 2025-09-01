import { AppLogoProps, registerAppLogo, registerAppTheme } from '@kinvolk/headlamp-plugin/lib';
import { Avatar, SvgIcon } from '@mui/material';
import { useState } from 'react';
import LogoWithTextLight from './icon-large-light.svg';
import LogoLight from './icon-small-light.svg';

const HARDCODED_URL =
  'https://www.starfish.tv/wordpress/wp-content/uploads/2016/08/Starfish-Logo-1-2.png';

function SimpleLogo(props: AppLogoProps) {
  const { logoType, className, sx } = props;
  const [imgOk, setImgOk] = useState(true);

  // Try the hardcoded URL first
  if (imgOk) {
    return (
      <Avatar
        className={className}
        src={HARDCODED_URL}
        alt="logo"
        variant="square" // no circle mask
        imgProps={{
          style: { objectFit: 'contain' },
          onError: () => setImgOk(false), // fallback to SVGs if the URL fails
        }}
        sx={{ ...sx, borderRadius: 0, bgcolor: 'transparent' }}
      />
    );
  }

  // Fallback to bundled SVGs
  return (
    <SvgIcon
      className={className}
      component={logoType === 'large' ? LogoWithTextLight : LogoLight}
      viewBox="0 0 auto 32"
      sx={sx}
    />
  );
}

// Register the exact MonoChrome Light theme to match Headlamp's built-in
const monoTheme = {
  name: 'Starfish',
  base: 'light' as const,
  primary: '#000000',
  secondary: '#808080',
  background: {
    default: '#ffffff',
    surface: '#ffffff',
    muted: '#f8f8f8',
  },
  text: {
    primary: '#000000',
  },
  sidebar: {
    background: '#ffffff',
    color: '#000000',
    selectedBackground: '#f0f0f0',
    selectedColor: '#000000',
    actionBackground: '#000000',
  },
  navbar: {
    background: '#ffffff',
    color: '#000000',
  },
  link: {
    color: '#000000',
  },
  fontFamily: ['Overpass', 'sans-serif'],
  radius: 4,
  buttonTextTransform: 'uppercase' as const,
};

// Register both the logo and theme
registerAppLogo(SimpleLogo);
registerAppTheme(monoTheme);

// AGGRESSIVE theme setting with multiple methods
console.log('Plugin loaded, attempting to set theme...');

function forceSetTheme() {
  if (!localStorage.headlampThemePreference) {
    localStorage.headlampThemePreference = 'Starfish';
    console.log('Set theme preference via plugin');
    
    // Try to trigger a page reload to apply theme
    setTimeout(() => {
      if (window.location.reload) {
        window.location.reload();
      }
    }, 100);
  }
}

// Try multiple timing approaches
forceSetTheme(); // Immediate
setTimeout(forceSetTheme, 100); // After 100ms
setTimeout(forceSetTheme, 500); // After 500ms
setTimeout(forceSetTheme, 1000); // After 1s

// Also try on DOM events
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', forceSetTheme);
} else {
  forceSetTheme();
}

// no settings, no exports
export {};