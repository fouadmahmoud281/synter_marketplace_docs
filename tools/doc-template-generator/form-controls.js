// Functions to handle dynamic form elements

// Add a new item to a list (TOC items, prerequisites)
window.addListItem = function(button, fieldName) {
  const listItem = button.closest('.list-item');
  const list = listItem.parentNode;
  const newItem = document.createElement('div');
  newItem.className = 'list-item';
  
  // Set appropriate placeholder based on field type
  let placeholder = "Enter item";
  if (fieldName === 'tocItem') {
    placeholder = "e.g., Prerequisites, Workflow Overview, Troubleshooting";
  } else if (fieldName === 'prerequisite') {
    placeholder = "e.g., Account setup, API key, Required permissions";
  }
  
  newItem.innerHTML = `
    <input type="text" name="${fieldName}[]" placeholder="${placeholder}" />
    <div class="button-group">
      <button type="button" class="add-item" onclick="addListItem(this, '${fieldName}')">+</button>
      <button type="button" class="remove-item" onclick="removeListItem(this)">-</button>
    </div>
  `;
  list.appendChild(newItem);
}

// Remove an item from a list
window.removeListItem = function(button) {
  const listItem = button.closest('.list-item');
  const list = listItem.parentNode;
  
  // Don't remove if it's the only item in the list
  const items = list.querySelectorAll('.list-item');
  if (items.length > 1) {
    list.removeChild(listItem);
  } else {
    // If it's the last item, just clear the input value
    listItem.querySelector('input').value = '';
  }
}

// Add a new phase
window.addPhase = function(button) {
  addListItem(button, 'phaseName');
  updatePhaseConfiguration();
}

// Function to handle phase removal
window.removePhase = function(button) {
  removeListItem(button);
  updatePhaseConfiguration();
}

// Update phase configuration based on phase names
window.updatePhaseConfiguration = function() {
  const phaseInputs = document.querySelectorAll('input[name="phaseName[]"]');
  const phaseNames = Array.from(phaseInputs).map(input => input.value || `Phase ${Array.from(phaseInputs).indexOf(input) + 1}`);
  
  // Update tabs
  const phaseTabs = document.getElementById('phaseTabs');
  phaseTabs.innerHTML = '';
  
  // Update phase configuration containers
  const phaseConfigContainer = document.getElementById('phaseConfigContainer');
  phaseConfigContainer.innerHTML = '';
  
  phaseNames.forEach((name, index) => {
    // Create tab
    const tab = document.createElement('div');
    tab.className = index === 0 ? 'tab active' : 'tab';
    tab.textContent = name || `Phase ${index + 1}`;
    tab.onclick = function() { switchPhaseTab(index); };
    phaseTabs.appendChild(tab);
    
    // Create phase configuration
    const phaseConfig = document.createElement('div');
    phaseConfig.className = 'phase-container';
    phaseConfig.dataset.phase = index + 1;
    phaseConfig.style.display = index === 0 ? 'block' : 'none';
    
    phaseConfig.innerHTML = `
      <div class="phase-title">${name || `Phase ${index + 1}`} Configuration</div>
      
      <label>
        Phase Intro:
        <textarea name="phaseIntro${index + 1}" placeholder="Enter intro text for this phase"></textarea>
        <small>Introductory paragraph that explains this phase</small>
      </label>
      
      <div class="subsection">
        <h3>Feature Grid</h3>
        <div class="feature-grid-container" id="featureGrid${index + 1}">
          <div class="feature-item">
            <label>Feature Title:
              <input type="text" name="featureTitle${index + 1}[]" placeholder="e.g., Model Search" />
            </label>
            <label>Feature Description:
              <input type="text" name="featureDescription${index + 1}[]" placeholder="e.g., Search by name" />
            </label>
            <button type="button" class="add-feature" onclick="addFeature(${index + 1}, this)">+ Add Feature</button>
          </div>
        </div>
        <small>These features will be displayed as cards inside the phase</small>
      </div>
      
      <div class="subsection">
        <h3>Action Steps</h3>
        <div class="action-steps-container" id="actionSteps${index + 1}">
          <div class="action-step">
            <label>Step Highlight:
              <input type="text" name="stepHighlight${index + 1}[]" placeholder="e.g., Step 1" />
            </label>
            <label>Step Note:
              <input type="text" name="stepNote${index + 1}[]" placeholder="e.g., Do something important" />
            </label>
            <button type="button" class="add-step" onclick="addActionStep(${index + 1}, this)">+ Add Step</button>
          </div>
        </div>
        <small>These steps will guide users through the process</small>
      </div>
      
      <label>
        Callout Info:
        <textarea name="phaseCalloutInfo${index + 1}" placeholder="Enter info callout text for this phase"></textarea>
        <small>Important information that will be displayed in a highlighted box</small>
      </label>
      
      <label>
        Code Block:
        <textarea name="phaseCodeBlock${index + 1}" placeholder="Enter code block content here"></textarea>
        <small>Code examples or commands related to this phase</small>
      </label>
    `;
    
    phaseConfigContainer.appendChild(phaseConfig);
  });
}

// Switch between phase tabs
window.switchPhaseTab = function(index) {
  // Update active tab
  const tabs = document.querySelectorAll('#phaseTabs .tab');
  tabs.forEach((tab, i) => {
    tab.className = i === index ? 'tab active' : 'tab';
  });
  
  // Show selected phase configuration
  const phaseContainers = document.querySelectorAll('.phase-container');
  phaseContainers.forEach((container, i) => {
    container.style.display = i === index ? 'block' : 'none';
  });
}

// Add a new feature to a phase
window.addFeature = function(phaseIndex, button) {
  const featureItem = button.closest('.feature-item');
  const container = featureItem.parentNode;
  
  const newFeature = document.createElement('div');
  newFeature.className = 'feature-item';
  newFeature.innerHTML = `
    <label>Feature Title:
      <input type="text" name="featureTitle${phaseIndex}[]" placeholder="e.g., Model Search" />
    </label>
    <label>Feature Description:
      <input type="text" name="featureDescription${phaseIndex}[]" placeholder="e.g., Search by name" />
    </label>
    <div class="button-group">
      <button type="button" class="add-feature" onclick="addFeature(${phaseIndex}, this)">+ Add Feature</button>
      <button type="button" class="remove-feature" onclick="removeFeature(this)">- Remove Feature</button>
    </div>
  `;
  
  container.appendChild(newFeature);
}

// Remove a feature
window.removeFeature = function(button) {
  const featureItem = button.closest('.feature-item');
  const container = featureItem.parentNode;
  
  // Don't remove if it's the only feature in the container
  const features = container.querySelectorAll('.feature-item');
  if (features.length > 1) {
    container.removeChild(featureItem);
  } else {
    // If it's the last feature, just clear the input values
    featureItem.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
  }
}

// Add a new action step to a phase
window.addActionStep = function(phaseIndex, button) {
  const stepItem = button.closest('.action-step');
  const container = stepItem.parentNode;
  
  const newStep = document.createElement('div');
  newStep.className = 'action-step';
  newStep.innerHTML = `
    <label>Step Highlight:
      <input type="text" name="stepHighlight${phaseIndex}[]" placeholder="e.g., Step 1" />
    </label>
    <label>Step Note:
      <input type="text" name="stepNote${phaseIndex}[]" placeholder="e.g., Do something important" />
    </label>
    <div class="button-group">
      <button type="button" class="add-step" onclick="addActionStep(${phaseIndex}, this)">+ Add Step</button>
      <button type="button" class="remove-step" onclick="removeActionStep(this)">- Remove Step</button>
    </div>
  `;
  
  container.appendChild(newStep);
}

// Remove an action step
window.removeActionStep = function(button) {
  const stepItem = button.closest('.action-step');
  const container = stepItem.parentNode;
  
  // Don't remove if it's the only step in the container
  const steps = container.querySelectorAll('.action-step');
  if (steps.length > 1) {
    container.removeChild(stepItem);
  } else {
    // If it's the last step, just clear the input values
    stepItem.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
  }
}

// Add a new troubleshooting question
window.addTroubleshooting = function(button) {
  const item = button.closest('.troubleshooting-item');
  const container = item.parentNode;
  
  const newItem = document.createElement('div');
  newItem.className = 'troubleshooting-item';
  newItem.innerHTML = `
    <label>Question:
      <input type="text" name="troubleshootingTitle[]" placeholder="e.g., How do I fix timeout errors?" />
    </label>
    <div class="troubleshooting-content">
      <label>Solution Label:
        <input type="text" name="troubleshootingLabel[]" placeholder="e.g., Solution" />
      </label>
      <label>Solution Description:
        <textarea name="troubleshootingDescription[]" placeholder="e.g., Try increasing timeout settings."></textarea>
      </label>
    </div>
    <div class="button-group">
      <button type="button" class="add-troubleshooting" onclick="addTroubleshooting(this)">+ Add Question</button>
      <button type="button" class="remove-troubleshooting" onclick="removeTroubleshooting(this)">- Remove Question</button>
    </div>
  `;
  
  container.appendChild(newItem);
}

// Remove a troubleshooting question
window.removeTroubleshooting = function(button) {
  const item = button.closest('.troubleshooting-item');
  const container = item.parentNode;
  
  // Don't remove if it's the only troubleshooting item
  const items = container.querySelectorAll('.troubleshooting-item');
  if (items.length > 1) {
    container.removeChild(item);
  } else {
    // If it's the last item, just clear the input values
    item.querySelectorAll('input, textarea').forEach(input => {
      input.value = '';
    });
  }
}

// Add a new help option
function addHelpOption(button) {
  const option = button.parentNode;
  const container = option.parentNode;
  
  const newOption = document.createElement('div');
  newOption.className = 'help-option';
  newOption.innerHTML = `
    <label>Link:
      <input type="text" name="helpHref[]" placeholder="e.g., #faq" />
    </label>
    <label>Title:
      <input type="text" name="helpTitle[]" placeholder="e.g., FAQ" />
    </label>
    <label>Description:
      <input type="text" name="helpDescription[]" placeholder="e.g., Frequently asked questions" />
    </label>
    <button type="button" class="remove-help-option" onclick="removeHelpOption(this)">- Remove Help Option</button>
  `;
  
  container.appendChild(newOption);
}

// Remove a help option
function removeHelpOption(button) {
  const option = button.closest('.help-option');
  const container = option.parentNode;
  
  // Don't remove if it's the only help option
  const options = container.querySelectorAll('.help-option');
  if (options.length > 1) {
    container.removeChild(option);
  } else {
    // If it's the last option, just clear the input values
    option.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
  }
}

// You'll also need to modify the generate.js file to handle the new form structure
// This function will collect form data and convert it to the expected JSON format
function collectFormData() {
  const form = document.getElementById('guideForm');
  const formData = new FormData(form);
  
  // Process TOC items
  const tocItems = Array.from(document.querySelectorAll('input[name="tocItem[]"]'))
    .map(input => input.value.trim())
    .filter(Boolean);
  formData.set('tocLinks', tocItems.join(','));
  
  // Process prerequisites
  const prerequisites = Array.from(document.querySelectorAll('input[name="prerequisite[]"]'))
    .map(input => input.value.trim())
    .filter(Boolean);
  formData.set('prerequisites', prerequisites.join(','));
  
  // Process phase names
  const phaseNames = Array.from(document.querySelectorAll('input[name="phaseName[]"]'))
    .map(input => input.value.trim())
    .filter(Boolean);
  formData.set('phaseNames', phaseNames.join(','));
  
  // Process phase data
  phaseNames.forEach((name, index) => {
    const phaseNumber = index + 1;
    
    // Get phase intro
    const phaseIntro = document.querySelector(`textarea[name="phaseIntro${phaseNumber}"]`)?.value || '';
    formData.set(`phaseIntro${phaseNumber}`, phaseIntro);
    
    // Process features
    const featureTitles = Array.from(document.querySelectorAll(`input[name="featureTitle${phaseNumber}[]"]`));
    const featureDescriptions = Array.from(document.querySelectorAll(`input[name="featureDescription${phaseNumber}[]"]`));
    
    const features = [];
    for (let i = 0; i < featureTitles.length; i++) {
      const title = featureTitles[i].value.trim();
      const description = i < featureDescriptions.length ? featureDescriptions[i].value.trim() : '';
      
      if (title || description) {
        features.push({ title, description });
      }
    }
    
    formData.set(`phaseFeatures${phaseNumber}`, JSON.stringify(features));
    
    // Process action steps
    const stepHighlights = Array.from(document.querySelectorAll(`input[name="stepHighlight${phaseNumber}[]"]`));
    const stepNotes = Array.from(document.querySelectorAll(`input[name="stepNote${phaseNumber}[]"]`));
    
    const steps = [];
    for (let i = 0; i < stepHighlights.length; i++) {
      const highlight = stepHighlights[i].value.trim();
      const note = i < stepNotes.length ? stepNotes[i].value.trim() : '';
      
      if (highlight || note) {
        steps.push({ highlight, note });
      }
    }
    
    formData.set(`phaseActionSteps${phaseNumber}`, JSON.stringify(steps));
    
    // Get phase callout info
    const calloutInfo = document.querySelector(`textarea[name="phaseCalloutInfo${phaseNumber}"]`)?.value || '';
    formData.set(`phaseCalloutInfo${phaseNumber}`, calloutInfo);
    
    // Get phase code block
    const codeBlock = document.querySelector(`textarea[name="phaseCodeBlock${phaseNumber}"]`)?.value || '';
    formData.set(`phaseCodeBlock${phaseNumber}`, codeBlock);
  });
  
  // Process troubleshooting items
  const troubleshootingTitles = Array.from(document.querySelectorAll('input[name="troubleshootingTitle[]"]'));
  const troubleshootingLabels = Array.from(document.querySelectorAll('input[name="troubleshootingLabel[]"]'));
  const troubleshootingDescriptions = Array.from(document.querySelectorAll('textarea[name="troubleshootingDescription[]"]'));
  
  const troubleshootingItems = [];
  for (let i = 0; i < troubleshootingTitles.length; i++) {
    const title = troubleshootingTitles[i].value.trim();
    const label = i < troubleshootingLabels.length ? troubleshootingLabels[i].value.trim() : 'Solution';
    const description = i < troubleshootingDescriptions.length ? troubleshootingDescriptions[i].value.trim() : '';
    
    if (title && description) {
      troubleshootingItems.push({
        title: title,
        content: [{
          label: label,
          description: description
        }]
      });
    }
  }
  
  formData.set('troubleshootingItems', JSON.stringify(troubleshootingItems));
  
  // Process help options
  const helpHrefs = Array.from(document.querySelectorAll('input[name="helpHref[]"]'));
  const helpTitles = Array.from(document.querySelectorAll('input[name="helpTitle[]"]'));
  const helpDescriptions = Array.from(document.querySelectorAll('input[name="helpDescription[]"]'));
  
  const helpOptions = [];
  for (let i = 0; i < helpHrefs.length; i++) {
    const href = helpHrefs[i].value.trim();
    const title = i < helpTitles.length ? helpTitles[i].value.trim() : '';
    const description = i < helpDescriptions.length ? helpDescriptions[i].value.trim() : '';
    
    if (href && title) {
      helpOptions.push({
        href: href,
        title: title,
        description: description,
        external: href.startsWith('http')
      });
    }
  }
  
  formData.set('helpOptions', JSON.stringify(helpOptions));
  
  return formData;
}

// Function to update phase tabs
function updatePhaseTabs() {
  const phaseList = document.getElementById('phaseList');
  const phaseTabs = document.getElementById('phaseTabs');
  const phaseContents = document.getElementById('phaseContents');
  
  if (!phaseList || !phaseTabs || !phaseContents) return;
  
  // Clear existing tabs and contents
  phaseTabs.innerHTML = '';
  phaseContents.innerHTML = '';
  
  // Get all phase names
  const phaseNames = Array.from(phaseList.querySelectorAll('input[name="phaseName[]"]'))
    .map(input => input.value.trim())
    .filter(name => name !== '');
  
  // Create tabs and content sections
  phaseNames.forEach((name, index) => {
    const phaseNum = index + 1;
    
    // Create tab
    const tab = document.createElement('button');
    tab.className = 'phase-tab';
    tab.textContent = name;
    tab.onclick = () => showPhase(phaseNum);
    phaseTabs.appendChild(tab);
    
    // Create content section
    const content = document.createElement('div');
    content.id = `phaseContent${phaseNum}`;
    content.className = 'phase-content';
    content.innerHTML = `
      <div class="form-group">
        <label>Phase Introduction:
          <textarea name="phaseIntro${phaseNum}" rows="3"></textarea>
        </label>
      </div>
      
      <div class="form-group">
        <label>Features:</label>
        <div id="featureGrid${phaseNum}" class="feature-grid"></div>
        <button type="button" class="add-feature" onclick="addFeature(${phaseNum})">+ Add Feature</button>
      </div>
      
      <div class="form-group">
        <label>Action Steps:</label>
        <div id="actionSteps${phaseNum}" class="action-steps"></div>
        <button type="button" class="add-step" onclick="addActionStep(${phaseNum})">+ Add Step</button>
      </div>
    `;
    phaseContents.appendChild(content);
  });
  
  // Show first phase by default
  if (phaseNames.length > 0) {
    showPhase(1);
  }
}

// Function to show a specific phase
function showPhase(phaseNum) {
  // Hide all phase contents
  document.querySelectorAll('.phase-content').forEach(content => {
    content.style.display = 'none';
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected phase content
  const selectedContent = document.getElementById(`phaseContent${phaseNum}`);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
  
  // Activate selected tab
  const selectedTab = document.querySelectorAll('.phase-tab')[phaseNum - 1];
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}

// Make functions available globally
window.updatePhaseTabs = updatePhaseTabs;
window.showPhase = showPhase;

// Initialize the form
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any form controls that need setup
  // We don't need to add a submit event listener here as it's already handled in generate.js
  
  // Make sure the phase configuration is set up correctly
  updatePhaseConfiguration();
});