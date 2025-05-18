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

// Main function to handle form submission and generate markdown
async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  try {
    // Load template
    const response = await fetch('template.md');
    const templateSource = await response.text();

    // Compile template using Handlebars
    const template = Handlebars.compile(templateSource);

    // Get form data
    const formData = collectFormData();

    // Process TOC links
    const tocLinks = formData.get('tocLinks')
      ? formData.get('tocLinks').split(',').map(t => t.trim()).filter(Boolean)
      : [];

    // Process prerequisites
    const prerequisites = formData.get('prerequisites')
      ? formData.get('prerequisites').split(',').map(p => p.trim()).filter(Boolean)
      : [];

    // Process phase names
    const phaseNames = formData.get('phaseNames')
      ? formData.get('phaseNames').split(',').map(p => p.trim()).filter(Boolean)
      : [];

    // Process phase data
    const phaseIntros = [];
    const phaseFeatures = [];
    const phaseActionSteps = [];
    const phaseCalloutInfo = [];
    const phaseCodeBlock = [];

    for (let i = 0; i < phaseNames.length; i++) {
      const phaseNumber = i + 1;
      
      // Get phase intro
      phaseIntros.push(formData.get(`phaseIntro${phaseNumber}`) || '');
      
      // Get phase features
      try {
        const featuresJson = formData.get(`phaseFeatures${phaseNumber}`);
        phaseFeatures.push(featuresJson ? JSON.parse(featuresJson) : []);
      } catch (e) {
        console.error(`Error parsing phaseFeatures${phaseNumber}:`, e);
        phaseFeatures.push([]);
      }
      
      // Get phase action steps
      try {
        const stepsJson = formData.get(`phaseActionSteps${phaseNumber}`);
        phaseActionSteps.push(stepsJson ? JSON.parse(stepsJson) : []);
      } catch (e) {
        console.error(`Error parsing phaseActionSteps${phaseNumber}:`, e);
        phaseActionSteps.push([]);
      }
      
      // Get phase callout info
      phaseCalloutInfo.push(formData.get(`phaseCalloutInfo${phaseNumber}`) || '');
      
      // Get phase code block
      phaseCodeBlock.push(formData.get(`phaseCodeBlock${phaseNumber}`) || '');
    }

    // Process troubleshooting items
    let troubleshootingItems = [];
    try {
      const troubleshootingJson = formData.get('troubleshootingItems');
      if (troubleshootingJson) {
        troubleshootingItems = JSON.parse(troubleshootingJson);
      }
    } catch (e) {
      console.error('Error parsing troubleshootingItems:', e);
    }

    // Process help options
    let helpOptions = [];
    try {
      const helpOptionsJson = formData.get('helpOptions');
      if (helpOptionsJson) {
        helpOptions = JSON.parse(helpOptionsJson);
      }
    } catch (e) {
      console.error('Error parsing helpOptions:', e);
    }

    // Prepare data for template
    const data = {
      guideTitle: formData.get('guideTitle') || 'Guide Title',
      guideDescription: formData.get('guideDescription') || '',
      estimatedTime: formData.get('estimatedTime') || '',
      guideIconSrc: formData.get('guideIconSrc') || '',
      guideIconAlt: formData.get('guideIconAlt') || '',
      tocLinks: tocLinks,
      prerequisites: prerequisites,
      workflowOverviewTitle: formData.get('workflowOverviewTitle') || '',
      phaseNames: phaseNames,
      phaseIntros: phaseIntros,
      phaseFeatures: phaseFeatures,
      phaseActionSteps: phaseActionSteps,
      phaseCalloutInfo: phaseCalloutInfo,
      phaseCodeBlock: phaseCodeBlock,
      troubleshootingItems: troubleshootingItems,
      helpOptions: helpOptions
    };

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