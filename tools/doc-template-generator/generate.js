// Register Handlebars helpers
Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
  switch (operator) {
    case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '!=':
      return (v1 != v2) ? options.fn(this) : options.inverse(this);
    case '!==':
      return (v1 !== v2) ? options.fn(this) : options.inverse(this);
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '&&':
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
});

// Add additional helpers needed for the template
Handlebars.registerHelper('toLowerCase', function(str) {
  return str ? str.toLowerCase() : '';
});

Handlebars.registerHelper('equals', function() {
  const args = Array.prototype.slice.call(arguments);
  const options = args.pop();
  
  // If this is a block helper (has fn and inverse functions)
  if (options && typeof options === 'object' && options.fn && options.inverse) {
    return (args[0] === args[1]) ? options.fn(this) : options.inverse(this);
  }
  
  // Non-block helper usage
  return args[0] === args[1];
});

Handlebars.registerHelper('add', function(v1, v2) {
  return parseInt(v1) + parseInt(v2);
});

Handlebars.registerHelper('getPhaseClass', function(index) {
  const classes = ['browse', 'configure', 'create', 'test'];
  return classes[index % classes.length] || '';
});

// Function to collect all form data
function collectFormData() {
  const form = document.getElementById('guideForm');
  const formData = new FormData(form);
  const data = {};

  // Basic information
  data.guideTitle = formData.get('guideTitle');
  data.guideDescription = formData.get('guideDescription');
  data.estimatedTime = formData.get('estimatedTime');
  data.guideIconSrc = formData.get('guideIconSrc');
  data.guideIconAlt = formData.get('guideIconAlt');

  // Table of Contents
  data.tocLinks = Array.from(formData.getAll('tocItem[]')).filter(Boolean);

  // Prerequisites
  data.prerequisites = Array.from(formData.getAll('prerequisite[]')).filter(Boolean);

  // Workflow Overview
  data.workflowOverviewTitle = formData.get('workflowOverviewTitle');
  data.phaseNames = Array.from(formData.getAll('phaseName[]')).filter(Boolean);

  // Phase data
  data.phaseIntros = [];
  data.phaseFeatures = [];
  data.phaseActionSteps = [];
  data.phaseCalloutInfo = [];
  data.phaseCodeBlock = [];

  // Collect data for each phase
  data.phaseNames.forEach((_, index) => {
    const phaseNum = index + 1;
    
    // Phase intro
    data.phaseIntros.push(formData.get(`phaseIntro${phaseNum}`) || '');

    // Phase features
    const featureTitles = formData.getAll(`featureTitle${phaseNum}[]`);
    const featureDescriptions = formData.getAll(`featureDescription${phaseNum}[]`);
    const features = featureTitles.map((title, i) => ({
      title: title,
      description: featureDescriptions[i] || ''
    })).filter(f => f.title || f.description);
    data.phaseFeatures.push(features);

    // Phase action steps
    const stepHighlights = formData.getAll(`stepHighlight${phaseNum}[]`);
    const stepNotes = formData.getAll(`stepNote${phaseNum}[]`);
    const steps = stepHighlights.map((highlight, i) => ({
      highlight: highlight,
      note: stepNotes[i] || ''
    })).filter(s => s.highlight || s.note);
    data.phaseActionSteps.push(steps);

    // Phase callout info and code block
    data.phaseCalloutInfo.push(formData.get(`phaseCalloutInfo${phaseNum}`) || '');
    data.phaseCodeBlock.push(formData.get(`phaseCodeBlock${phaseNum}`) || '');
  });

  // Troubleshooting items
  const troubleshootingTitles = formData.getAll('troubleshootingTitle[]');
  const troubleshootingLabels = formData.getAll('troubleshootingLabel[]');
  const troubleshootingDescriptions = formData.getAll('troubleshootingDescription[]');
  
  data.troubleshootingItems = troubleshootingTitles.map((title, i) => ({
    title: title,
    content: [{
      label: troubleshootingLabels[i] || 'Solution',
      description: troubleshootingDescriptions[i] || ''
    }]
  })).filter(item => item.title || item.content[0].description);

  return data;
}

// Main function to handle form submission and generate markdown
window.handleFormSubmit = async function(event) {
  event.preventDefault(); // Prevent default form submission

  try {
    // Load template
    const response = await fetch('template.md');
    const templateSource = await response.text();

    // Compile template using Handlebars
    const template = Handlebars.compile(templateSource);

    // Get form data
    const data = collectFormData();

    // Render the template
    const outputMarkdown = template(data);
    
    // Display the output in the preview area
    const markdownOutput = document.getElementById('markdownOutput');
    if (markdownOutput) {
      markdownOutput.innerHTML = outputMarkdown;
    }
    
    // Create downloadable file
    const blob = new Blob([outputMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.guideTitle.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);

  } catch (error) {
    console.error("Error generating markdown:", error);
    alert("Failed to generate file. Check console for details.");
  }
}

// Create a separate JavaScript file for UI functionality
document.addEventListener('DOMContentLoaded', function() {
  // Attach the form submit handler
  const form = document.getElementById('guideForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});