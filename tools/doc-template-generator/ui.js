// UI functionality for the document generator

// Toggle section collapse/expand
window.toggleSection = function(section) {
  section.classList.toggle('collapsed');
  
  // Ensure the toggle icon reflects the current state
  const toggleIcon = section.querySelector('.toggle-icon');
  if (toggleIcon) {
    if (section.classList.contains('collapsed')) {
      toggleIcon.innerHTML = '►';
    } else {
      toggleIcon.innerHTML = '▼';
    }
  }
}

// Generate phase configuration fields based on phase names input
function generatePhaseFields() {
  const phaseNames = document.getElementById('phaseNamesInput').value.split(',').map(name => name.trim()).filter(name => name);
  const tabsContainer = document.getElementById('phaseTabs');
  const phaseConfigContainer = document.getElementById('phaseConfigContainer');
  
  // Clear existing tabs and phase configs
  tabsContainer.innerHTML = '';
  phaseConfigContainer.innerHTML = '';
  
  // Generate tabs and phase config sections
  phaseNames.forEach((phaseName, index) => {
    const phaseNumber = index + 1;
    
    // Create tab
    const tab = document.createElement('div');
    tab.className = 'tab' + (index === 0 ? ' active' : '');
    tab.textContent = phaseName;
    tab.onclick = function() { switchPhaseTab(index); };
    tabsContainer.appendChild(tab);
    
    // Create phase configuration
    const phaseContainer = document.createElement('div');
    phaseContainer.className = 'phase-container';
    phaseContainer.dataset.phase = phaseNumber;
    phaseContainer.style.display = index === 0 ? 'block' : 'none';
    
    phaseContainer.innerHTML = `
      <div class="phase-title">${phaseName} Configuration</div>
      
      <label>
        Phase Intro:
        <textarea name="phaseIntro${phaseNumber}" placeholder="Enter intro text for this phase"></textarea>
        <small>Introductory paragraph that explains this phase</small>
      </label>
      
      <label>
        Feature Grid (JSON array):
        <div class="json-example">[{"title": "Model Search", "description": "Search by name"}]</div>
        <textarea name="phaseFeatures${phaseNumber}" placeholder='[{"title": "Feature 1", "description": "Description 1"}, {"title": "Feature 2", "description": "Description 2"}]'></textarea>
        <small>Format as JSON array for feature cards inside the phase</small>
      </label>
      
      <label>
        Action Steps (JSON array):
        <div class="json-example">[{"highlight":"Step 1","note":"Do something important"}]</div>
        <textarea name="phaseActionSteps${phaseNumber}" placeholder='[{"highlight":"Step 1","note":"First action to take"}, {"highlight":"Step 2","note":"Second action to take"}]'></textarea>
        <small>Each step should include highlight and note fields</small>
      </label>
      
      <label>
        Callout Info:
        <textarea name="phaseCalloutInfo${phaseNumber}" placeholder="Enter info callout text for this phase"></textarea>
        <small>Important information that will be displayed in a highlighted box</small>
      </label>
      
      <label>
        Code Block:
        <textarea name="phaseCodeBlock${phaseNumber}" placeholder="Enter code block content here"></textarea>
        <small>Code examples or commands related to this phase</small>
      </label>
    `;
    
    phaseConfigContainer.appendChild(phaseContainer);
  });
  
  // If no phases were entered, show a default phase
  if (phaseNames.length === 0) {
    const defaultTab = document.createElement('div');
    defaultTab.className = 'tab active';
    defaultTab.textContent = 'Phase 1';
    defaultTab.onclick = function() { switchPhaseTab(0); };
    tabsContainer.appendChild(defaultTab);
    
    const defaultPhase = document.createElement('div');
    defaultPhase.className = 'phase-container';
    defaultPhase.dataset.phase = 1;
    defaultPhase.innerHTML = `
      <div class="phase-title">Phase 1 Configuration</div>
      
      <label>
        Phase Intro:
        <textarea name="phaseIntro1" placeholder="Enter intro text for this phase"></textarea>
        <small>Introductory paragraph that explains this phase</small>
      </label>
      
      <label>
        Feature Grid (JSON array):
        <div class="json-example">[{"title": "Model Search", "description": "Search by name"}]</div>
        <textarea name="phaseFeatures1" placeholder='[{"title": "Feature 1", "description": "Description 1"}, {"title": "Feature 2", "description": "Description 2"}]'></textarea>
        <small>Format as JSON array for feature cards inside the phase</small>
      </label>
      
      <label>
        Action Steps (JSON array):
        <div class="json-example">[{"highlight":"Step 1","note":"Do something important"}]</div>
        <textarea name="phaseActionSteps1" placeholder='[{"highlight":"Step 1","note":"First action to take"}, {"highlight":"Step 2","note":"Second action to take"}]'></textarea>
        <small>Each step should include highlight and note fields</small>
      </label>
      
      <label>
        Callout Info:
        <textarea name="phaseCalloutInfo1" placeholder="Enter info callout text for this phase"></textarea>
        <small>Important information that will be displayed in a highlighted box</small>
      </label>
      
      <label>
        Code Block:
        <textarea name="phaseCodeBlock1" placeholder="Enter code block content here"></textarea>
        <small>Code examples or commands related to this phase</small>
      </label>
    `;
    
    phaseConfigContainer.appendChild(defaultPhase);
  }
}

// Switch between phase tabs
function switchPhaseTab(index) {
  // Update active tab
  const tabs = document.querySelectorAll('#phaseTabs .tab');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
  
  // Show selected phase configuration
  const phaseContainers = document.querySelectorAll('.phase-container');
  phaseContainers.forEach((container, i) => {
    container.style.display = i === index ? 'block' : 'none';
  });
}