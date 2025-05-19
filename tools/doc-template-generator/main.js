// Main JavaScript file to initialize all modules

// Import all necessary modules
import './data.js';
import './ui.js';
import './form-controls.js';
import './generate.js';

// Make sure all functions are available globally
window.toggleSection = toggleSection;
window.addListItem = addListItem;
window.removeListItem = removeListItem;
window.addPhase = addPhase;
window.removePhase = removePhase;
window.updatePhaseConfiguration = updatePhaseConfiguration;
window.switchPhaseTab = switchPhaseTab;
window.addFeature = addFeature;
window.removeFeature = removeFeature;
window.addActionStep = addActionStep;
window.removeActionStep = removeActionStep;
window.addTroubleshooting = addTroubleshooting;
window.removeTroubleshooting = removeTroubleshooting;

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize phase configuration
  updatePhaseConfiguration();
  
  // Set up form submission handler
  const form = document.getElementById('guideForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});