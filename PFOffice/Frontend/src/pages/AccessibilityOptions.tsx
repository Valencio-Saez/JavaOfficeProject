import React, { useEffect } from 'react';
import '../../../wwwroot/css/AccessibilityOptions.css';

const AccessibilityOptions: React.FC = () => {
  useEffect(() => {
    const toggleAccessibilityPanel = () => {
      const panel = document.getElementById('accessibility-panel');
      if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
      }
    };

    const toggleColorBlindMode = () => {
      document.body.classList.toggle('colorblind-mode');
    };

    const toggleLargeText = () => {
      const currentFontSize = parseInt(getComputedStyle(document.body).fontSize);
      const newFontSize = currentFontSize + 5;
      document.body.style.fontSize = `${newFontSize}px`;
    };

    const toggleSmallText = () => {
      const currentFontSize = parseInt(getComputedStyle(document.body).fontSize);
      const newFontSize = currentFontSize - 5;
      document.body.style.fontSize = `${newFontSize}px`;
    };

    const toggleHighContrast = () => {
      document.body.classList.toggle('high-contrast');
    };

    const toggleGreyHues = () => {
      document.body.classList.toggle('grey-hues');
    };

    const toggleBlackWhiteMode = () => {
      document.body.classList.toggle('black-white-mode');
    };

    document.getElementById('accessibility-button')?.addEventListener('click', toggleAccessibilityPanel);
    document.getElementById('colorblind-button')?.addEventListener('click', toggleColorBlindMode);
    document.getElementById('largetxt')?.addEventListener('click', toggleLargeText);
    document.getElementById('smalltxt')?.addEventListener('click', toggleSmallText);
    document.getElementById('highcontrast')?.addEventListener('click', toggleHighContrast);
    document.getElementById('greyhues')?.addEventListener('click', toggleGreyHues);
    document.getElementById('blackwhite')?.addEventListener('click', toggleBlackWhiteMode);

    return () => {
      document.getElementById('accessibility-button')?.removeEventListener('click', toggleAccessibilityPanel);
      document.getElementById('colorblind-button')?.removeEventListener('click', toggleColorBlindMode);
      document.getElementById('largetxt')?.removeEventListener('click', toggleLargeText);
      document.getElementById('smalltxt')?.removeEventListener('click', toggleSmallText);
      document.getElementById('highcontrast')?.removeEventListener('click', toggleHighContrast);
      document.getElementById('greyhues')?.removeEventListener('click', toggleGreyHues);
      document.getElementById('blackwhite')?.removeEventListener('click', toggleBlackWhiteMode);
    };
  }, []);

  return (
    <div className="access">
      <button id="accessibility-button">Accessibility Options</button>
      <div id="accessibility-panel" style={{ display: 'none' }}>
        <h2>Accessibility Options</h2>
        <ul>
          <li><button id="colorblind-button" className="colorblind-button">Toggle Color Blind Mode</button></li>
          <li><button id="largetxt" className="largetxt">Toggle Large Text</button></li>
          <li><button id="smalltxt" className="smalltxt">Toggle Small Text</button></li>
          <li><button id="highcontrast" className="highcontrast">Toggle High Contrast</button></li>
          <li><button id="greyhues" className="greyhues">Grey Hues</button></li>
          <li><button id="blackwhite" className="blackwhite">Toggle Black and White Mode</button></li>
        </ul>
      </div>
    </div>
  );
};

export default AccessibilityOptions;