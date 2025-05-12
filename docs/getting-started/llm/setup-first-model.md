# Setting Up Your First LLM Model

<div class="guide-header">
  <div class="guide-icon">
        <img src="/assets/Brain.svg" alt="LLM Integration" />
  </div>
  <div class="guide-title-section">
    <h1>Setting Up Your First LLM Model</h1>
    <p class="guide-description">Learn how to configure and deploy an LLM inference endpoint on the Syntera Platform</p>
  </div>
  <div class="estimated-time">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    <span>~15 minutes</span>
  </div>
</div>

<div class="guide-toc">
  <div class="toc-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
    <span>In this guide</span>
  </div>
  <ul class="toc-links">
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#phase-1-browse-model-catalog">Browse Model Catalog</a></li>
    <li><a href="#phase-2-configure-inference-endpoint">Configure Inference Endpoint</a></li>
    <li><a href="#phase-3-create-dedicated-endpoint">Create Dedicated Endpoint</a></li>
    <li><a href="#phase-4-test-and-monitor-your-endpoint">Test and Monitor Your Endpoint</a></li>
  </ul>
</div>

<div class="prerequisites-panel">
  <div class="panel-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    <h2>Prerequisites</h2>
  </div>
  <ul class="checklist">
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>A Syntera Platform account with appropriate permissions</span>
    </li>
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>Access to the Syntera LLM Inference Service</span>
    </li>
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>Understanding of your inference requirements (latency, throughput, etc.)</span>
    </li>
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>Budget approval for LLM inference costs (if applicable)</span>
    </li>
  </ul>
</div>

<div class="workflow-overview">
  <h2>LLM Inference Endpoint Setup Workflow</h2>
  <div class="workflow-diagram">
    <div class="workflow-phase">
      <div class="phase-icon browse">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
      </div>
      <div class="phase-label">Browse Model Catalog</div>
    </div>
    <div class="workflow-arrow">→</div>
    <div class="workflow-phase">
      <div class="phase-icon configure">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      </div>
      <div class="phase-label">Configure Inference Endpoint</div>
    </div>
    <div class="workflow-arrow">→</div>
    <div class="workflow-phase">
      <div class="phase-icon create">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </div>
      <div class="phase-label">Create Dedicated Endpoint</div>
    </div>
    <div class="workflow-arrow">→</div>
    <div class="workflow-phase">
      <div class="phase-icon test">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      </div>
      <div class="phase-label">Test & Monitor</div>
    </div>
  </div>
</div>

## Phase 1: Browse Model Catalog

<div class="phase-container">
  <div class="phase-number browse">1</div>
  <div class="phase-content">
    <p class="phase-intro">Begin by browsing the model catalog to find the right LLM for your application needs.</p>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        </div>
        <h3>View Model Cards</h3>
        <p>Browse model cards with key specifications to quickly compare available models</p>
        <div class="feature-tip">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          Look for context window size, supported languages, and inference speed
        </div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        </div>
        <h3>Filter by Criteria</h3>
        <p>Filter models by size, capabilities, cost, and language support</p>
        <div class="feature-tip">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          Narrow down options based on your specific requirements
        </div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 9 9 17 23 3"></polyline></svg>
        </div>
        <h3>Compare Performance</h3>
        <p>Review benchmark metrics to compare model performance</p>
        <div class="feature-tip">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          Compare throughput, latency, and quality metrics
        </div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <h3>Review Pricing</h3>
        <p>Check pricing and resource requirements for each model</p>
        <div class="feature-tip">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          Consider both deployment costs and per-token pricing
        </div>
      </div>
    </div>
    
    <div class="action-steps">
      <h4>How to browse and select a model</h4>
      <ol class="step-list">
        <li>
          <span class="step-highlight">Click the "BROWSE MODEL CATALOG" button</span>
          <div class="step-note">This opens the model catalog interface</div>
        </li>
        <li>
          <span class="step-highlight">Use the filter panel to narrow down options</span>
          <div class="step-note">Filter by model size, capabilities, and language support</div>
        </li>
        <li>
          <span class="step-highlight">Review model cards for each candidate</span>
          <div class="step-note">Compare specifications, benchmark scores, and pricing</div>
        </li>
        <li>
          <span class="step-highlight">Select your desired model</span>
          <div class="step-note">Click "Select model" to proceed to the configuration phase</div>
        </li>
      </ol>
    </div>
    
    <div class="callout-info">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
      <div>
        <strong>Pro Tip:</strong> For production workloads, consider selecting a model that balances performance and cost efficiency. Smaller models are faster and cheaper but may not handle complex tasks as well as larger ones.
      </div>
    </div>
  </div>
</div>

## Phase 2: Configure Inference Endpoint

<div class="phase-container">
  <div class="phase-number configure">2</div>
  <div class="phase-content">
    <p class="phase-intro">After selecting a model, configure the inference endpoint to match your specific requirements.</p>
    
    <div class="config-grid">
      <div class="config-section">
        <div class="config-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <h3>Core Configurations</h3>
        </div>
        
        <div class="config-options">
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"></path><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"></path></svg>
            </div>
            <div class="option-details">
              <h4>Set Memory Allocation</h4>
              <p>Allocate sufficient memory for model and inference workloads</p>
            </div>
          </div>
          
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div class="option-details">
              <h4>Select Base Model and Version</h4>
              <p>Choose specific model version for your deployment</p>
            </div>
          </div>
          
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            </div>
            <div class="option-details">
              <h4>Choose Hardware Tier</h4>
              <p>Select GPU type and count for optimal performance</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="config-section">
        <div class="config-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          <h3>Inference Parameters</h3>
        </div>
        
        <div class="config-options">
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
            </div>
            <div class="option-details">
              <h4>Temperature</h4>
              <p>Adjust temperature to control randomness in outputs</p>
            </div>
          </div>
          
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
            </div>
            <div class="option-details">
              <h4>Top-p / Top-k Sampling</h4>
              <p>Configure sampling methods for text generation</p>
            </div>
          </div>
          
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"></path><path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 8v8"></path></svg>
            </div>
            <div class="option-details">
              <h4>Maximum Token Length</h4>
              <p>Set the maximum token length for generated responses</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="config-section">
        <div class="config-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><rect x="1" y="10" width="22" height="4"></rect></svg>
          <h3>Advanced Settings</h3>
        </div>
        
        <div class="config-options">
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </div>
            <div class="option-details">
              <h4>Context Window Size</h4>
              <p>Define the context window for model processing</p>
            </div>
          </div>
          
          <div class="config-option">
            <div class="option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5z"></path><line x1="10" y1="12" x2="14" y2="12"></line></svg>
            </div>
            <div class="option-details">
              <h4>Response Caching Policy</h4>
              <p>Configure caching to improve performance and reduce costs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="config-editor">
      <h3>Configuration Preview</h3>
      <div class="code-container">
        <div class="code-header">
          <span>Endpoint Configuration</span>
          <button class="copy-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            <span>Copy</span>
          </button>
        </div>
        <pre class="code-block yaml"><code># Inference Endpoint Configuration
name: my-first-llm-endpoint
model:
  base: gpt-4
  version: 2023-12-01
hardware:
  gpu_type: NVIDIA_A100
  gpu_count: 1
  memory: 32GB
parameters:
  temperature: 0.7
  max_tokens: 2048
  top_p: 0.95
  context_window: 8192
  response_cache:
    enabled: true
    ttl_seconds: 3600</code></pre>
      </div>
    </div>
    
    <div class="action-steps">
      <h4>Steps to Configure Your Endpoint</h4>
      <ol class="step-list">
        <li>
          <span class="step-highlight">Set memory allocation</span>
          <div class="step-note">Choose sufficient memory based on model size and expected traffic</div>
        </li>
        <li>
          <span class="step-highlight">Select specific model version</span>
          <div class="step-note">Choose between available versions of your selected model</div>
        </li>
        <li>
          <span class="step-highlight">Configure hardware tier</span>
          <div class="step-note">Select GPU type and count for optimal performance</div>
        </li>
        <li>
          <span class="step-highlight">Adjust inference parameters</span>
          <div class="step-note">Set temperature, sampling methods, and token limitations</div>
        </li>
        <li>
          <span class="step-highlight">Configure advanced settings</span>
          <div class="step-note">Set context window size and caching policies</div>
        </li>
        <li>
          <span class="step-highlight">Click "Submit Configuration"</span>
          <div class="step-note">Proceed to the endpoint creation review screen</div>
        </li>
      </ol>
    </div>
    
    <div class="callout-warning">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      <div>
        <strong>Important Note:</strong> Hardware configurations directly impact both performance and cost. Over-provisioning will increase costs unnecessarily, while under-provisioning may lead to poor performance or request failures.
      </div>
    </div>
  </div>
</div>

## Phase 3: Create Dedicated Endpoint

<div class="phase-container">
  <div class="phase-number create">3</div>
  <div class="phase-content">
    <p class="phase-intro">Review your configuration, accept pricing terms, and create your dedicated inference endpoint.</p>
    
    <div class="review-panel">
      <div class="panel-section">
        <h3>Configuration Summary</h3>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="summary-label">Model</div>
            <div class="summary-value">GPT-4 (2023-12-01)</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Hardware</div>
            <div class="summary-value">1× NVIDIA A100 GPU</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Memory</div>
            <div class="summary-value">32GB</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Max Tokens</div>
            <div class="summary-value">2,048</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Temperature</div>
            <div class="summary-value">0.7</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Context Window</div>
            <div class="summary-value">8,192 tokens</div>
          </div>
        </div>
      </div>
      
      <div class="panel-section">
        <h3>Pricing and Usage Terms</h3>
        <div class="pricing-table">
          <div class="pricing-header">
            <div class="pricing-cell">Item</div>
            <div class="pricing-cell">Cost</div>
          </div>
          <div class="pricing-row">
            <div class="pricing-cell">Hardware (A100 GPU)</div>
            <div class="pricing-cell">$2.50/hour</div>
          </div>
          <div class="pricing-row">
            <div class="pricing-cell">Input Tokens</div>
            <div class="pricing-cell">$0.01/1K tokens</div>
          </div>
          <div class="pricing-row">
            <div class="pricing-cell">Output Tokens</div>
            <div class="pricing-cell">$0.03/1K tokens</div>
          </div>
          <div class="pricing-row total">
            <div class="pricing-cell">Estimated Monthly Cost</div>
            <div class="pricing-cell">$1,800 - $3,500*</div>
          </div>
        </div>
        <div class="pricing-note">* Based on average usage of 5,000 requests/day with 1,000 tokens per request</div>
      </div>
      
      <div class="panel-section">
        <div class="accept-terms">
          <label class="checkbox-container">
            <input type="checkbox" class="terms-checkbox">
            <span class="checkmark"></span>
            <span>I accept the pricing and usage terms for this endpoint</span>
          </label>
        </div>
      </div>
    </div>
    
    <div class="create-steps">
      <div class="step-button">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        </div>
        <div class="button-content">
          <h4>Click "Create Endpoint"</h4>
          <p>Initiate the endpoint creation process</p>
        </div>
      </div>
      
      <div class="flow-arrow">→</div>
      
      <div class="step-button">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div class="button-content">
          <h4>Wait for Provisioning</h4>
          <p>System provisions resources (typically 5-10 minutes)</p>
        </div>
      </div>
      
      <div class="flow-arrow">→</div>
      
      <div class="step-button">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </div>
        <div class="button-content">
          <h4>Endpoint Ready</h4>
          <p>Receive endpoint details and API keys</p>
        </div>
      </div>
    </div>
    
    <div class="endpoint-details">
      <h3>Endpoint Resources</h3>
      <div class="details-grid">
        <div class="detail-card">
          <div class="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </div>
          <h4>System Provisions</h4>
          <p>Dedicated hardware, networking, and scaling infrastructure</p>
        </div>
        
        <div class="detail-card">
          <div class="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
          </div>
          <h4>Endpoint Details & API Keys</h4>
          <p>Secure credentials for accessing your endpoint</p>
        </div>
      </div>
    </div>
    
    <div class="api-example">
      <h3>Example API Integration</h3>
      <div class="code-container">
        <div class="code-header">
          <span>Python</span>
          <button class="copy-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            <span>Copy</span>
          </button>
        </div>
        <pre class="code-block python"><code>import requests
import json

# Your endpoint details
API_URL = "https://api.syntera.ai/v1/inference/endpoints/your-endpoint-id"
API_KEY = "your-api-key" 

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Example request
data = {
    "prompt": "Explain the concept of machine learning in simple terms.",
    "max_tokens": 500,
    "temperature": 0.7
}

response = requests.post(API_URL, headers=headers, data=json.dumps(data))

# Process the response
if response.status_code == 200:
    result = response.json()
    print(result["generated_text"])
else:
    print(f"Error: {response.status_code}")
    print(response.text)</code></pre>
      </div>
    </div>
    
    <div class="callout-info">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
      <div>
        <strong>Note:</strong> Store your API keys securely and never expose them in client-side code. Use environment variables or secure secret management services to handle credentials.
      </div>
    </div>
  </div>
</div>

## Phase 4: Test and Monitor Your Endpoint

<div class="phase-container">
  <div class="phase-number test">4</div>
  <div class="phase-content">
    <p class="phase-intro">Test your newly created endpoint and set up monitoring to ensure optimal performance.</p>
    
    <div class="test-monitor-grid">
      <div class="feature-section">
        <div class="section-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          <h3>Test Your Endpoint</h3>
        </div>
        
        <div class="feature-cards">
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
            <div class="test-content">
              <h4>Send Test Prompts</h4>
              <p>Quickly test your endpoint with sample prompts</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
            </div>
            <div class="test-content">
              <h4>Access Interactive Playground</h4>
              <p>Experiment with different parameters and prompts</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <div class="test-content">
              <h4>View Responses and Metrics</h4>
              <p>Analyze response quality, latency, and token usage</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
            </div>
            <div class="test-content">
              <h4>Review Comprehensive Documentation</h4>
              <p>Access detailed guides and reference materials</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <div class="test-content">
              <h4>Copy Example Code</h4>
              <p>Get integration examples in multiple languages</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="feature-section">
        <div class="section-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          <h3>Monitor Production Usage</h3>
        </div>
        
        <div class="feature-cards">
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <div class="test-content">
              <h4>Monitor Performance Metrics</h4>
              <p>Track key metrics like response time and throughput</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="test-content">
              <h4>Analyze Usage Patterns</h4>
              <p>Identify peak usage times and common request types</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <div class="test-content">
              <h4>Track Request Volume and Latency</h4>
              <p>Monitor traffic patterns and response times</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div class="test-content">
              <h4>Review Billing and Projections</h4>
              <p>Track costs and forecast future expenditures</p>
            </div>
          </div>
          
          <div class="test-card">
            <div class="test-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div class="test-content">
              <h4>Manage API Security Controls</h4>
              <p>Set rate limits and configure access controls</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="test-example">
      <h3>Test Console</h3>
      <div class="test-interface">
        <div class="test-input">
          <h4>Input Prompt</h4>
          <div class="input-area">
            <textarea placeholder="Enter your test prompt here..." rows="4">Explain the concept of machine learning in simple terms.</textarea>
          </div>
          <div class="input-controls">
            <button class="param-dropdown">Parameters ▾</button>
            <div class="send-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Send Request
            </div>
          </div>
        </div>
        
        <div class="test-output">
          <h4>Response</h4>
          <div class="output-area">
            <p>Machine learning is like teaching a computer to learn from examples instead of explicitly programming it with specific instructions.</p>
            <p>Imagine you want to teach a child to recognize cats. You wouldn't explain all the detailed features like "four legs, fur, whiskers, etc." Instead, you'd show the child many pictures of cats, and eventually, they'd learn to identify cats on their own.</p>
            <p>Similarly, with machine learning:</p>
            <ol>
              <li>You give the computer lots of examples (data)</li>
              <li>The computer finds patterns in this data</li>
              <li>After "learning" from these patterns, it can make predictions or decisions about new data it hasn't seen before</li>
            </ol>
            <p>For example, a machine learning system can learn to recognize spam emails after seeing thousands of examples of spam and non-spam messages, without being explicitly programmed with rules about what makes an email "spammy."</p>
          </div>
          <div class="response-meta">
            <div class="meta-item">
              <span class="meta-label">Tokens:</span>
              <span class="meta-value">Input: 9 / Output: 174</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Latency:</span>
              <span class="meta-value">842ms</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Cost:</span>
              <span class="meta-value">$0.0052</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="monitoring-dashboard">
      <h3>Monitoring Dashboard Preview</h3>
      <div class="dashboard-preview">
        <div class="dashboard-header">
          <div class="header-title">Endpoint: my-first-llm-endpoint</div>
          <div class="header-controls">
            <div class="time-selector">Last 24 hours ▾</div>
            <button class="refresh-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"></path></svg>
              Refresh
            </button>
          </div>
        </div>
        
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-header">Requests per Minute</div>
            <div class="metric-chart rps-chart"></div>
            <div class="metric-summary">
              <div class="metric-value">47.3</div>
              <div class="metric-trend up">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                12.4%
              </div>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="metric-header">Average Latency (ms)</div>
            <div class="metric-chart latency-chart"></div>
            <div class="metric-summary">
              <div class="metric-value">842</div>
              <div class="metric-trend down good">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                5.2%
              </div>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="metric-header">Tokens per Request</div>
            <div class="metric-chart tokens-chart"></div>
            <div class="metric-summary">
              <div class="metric-value">183</div>
              <div class="metric-trend stable">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                0.8%
              </div>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="metric-header">Error Rate (%)</div>
            <div class="metric-chart error-chart"></div>
            <div class="metric-summary">
              <div class="metric-value">0.3%</div>
              <div class="metric-trend up bad">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                0.1%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="action-steps">
      <h4>Next Steps for Production</h4>
      <ol class="step-list">
        <li>
          <span class="step-highlight">Configure alerts for key metrics</span>
          <div class="step-note">Set up notifications for error spikes, latency issues, or high costs</div>
        </li>
        <li>
          <span class="step-highlight">Integrate with your application</span>
          <div class="step-note">Implement API calls to your endpoint from your application</div>
        </li>
        <li>
          <span class="step-highlight">Establish monitoring routine</span>
          <div class="step-note">Set up regular checks of endpoint performance</div>
        </li>
        <li>
          <span class="step-highlight">Optimize based on usage patterns</span>
          <div class="step-note">Adjust configurations as you observe real-world usage</div>
        </li>
      </ol>
    </div>
    
    <div class="callout-success">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <div>
        <strong>Congratulations!</strong> You've successfully set up your first LLM inference endpoint. Monitor its performance, gather user feedback, and optimize configurations as needed to ensure the best experience for your users.
      </div>
    </div>
  </div>
</div>

<div class="troubleshooting-section">
  <h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    Troubleshooting
  </h2>
  
  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header">
        <span>Endpoint Creation Fails</span>
        <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <ul>
          <li><strong>Check resource quota:</strong> Ensure your account has sufficient quota for the selected hardware tier.</li>
          <li><strong>Verify configuration:</strong> Review your endpoint configuration for any invalid settings.</li>
          <li><strong>Contact support:</strong> If issues persist, contact Syntera support with your endpoint configuration details.</li>
        </ul>
      </div>
    </div>
    
    <div class="accordion-item">
      <button class="accordion-header">
        <span>High Latency Issues</span>
        <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <ul>
          <li><strong>Check hardware tier:</strong> Consider upgrading to a more powerful GPU tier.</li>
          <li><strong>Reduce context window:</strong> Large context windows require more processing time.</li>
          <li><strong>Enable caching:</strong> If your workload has repetitive queries, enable response caching.</li>
          <li><strong>Monitor concurrent requests:</strong> High traffic can cause queuing and increased latency.</li>
        </ul>
      </div>
    </div>
    
    <div class="accordion-item">
      <button class="accordion-header">
        <span>API Connection Issues</span>
        <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <ul>
          <li><strong>Verify API key:</strong> Ensure you're using the correct API key and it hasn't expired.</li>
          <li><strong>Check endpoint URL:</strong> Confirm you're using the correct endpoint URL in your requests.</li>
          <li><strong>Review request format:</strong> Ensure your API request follows the correct format and parameters.</li>
          <li><strong>Network connectivity:</strong> Check if there are any network issues or firewall restrictions.</li>
        </ul>
      </div>
    </div>
    
    <div class="accordion-item">
      <button class="accordion-header">
        <span>Unexpected Costs</span>
        <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <ul>
          <li><strong>Set budget alerts:</strong> Configure alerts to notify you when costs exceed expected thresholds.</li>
          <li><strong>Monitor usage patterns:</strong> Regularly review your usage dashboard for unexpected spikes.</li>
          <li><strong>Optimize token usage:</strong> Review your prompts to reduce unnecessary tokens in requests.</li>
          <li><strong>Consider auto-scaling:</strong> Configure auto-scaling to reduce resources during low-traffic periods.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="help-panel">
  <h2>Need Help?</h2>
  <div class="help-options">
    <a href="https://support.syntera.ai" class="help-card" target="_blank">
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <h3>Support Portal</h3>
      <p>Get help from our technical support team</p>
    </a>
    
    <a href="https://community.syntera.ai" class="help-card" target="_blank">
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <h3>Community Forum</h3>
      <p>Connect with other Syntera users</p>
    </a>
    
    <a href="mailto:support@syntera.ai" class="help-card">
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </div>
      <h3>Email Support</h3>
      <p>Contact our support team directly</p>
    </a>
  </div>
</div>

<style>
:root {
  --primary-color: #4662D7;
  --primary-light: rgba(70, 98, 215, 0.1);
  --primary-dark: #3a53c5;
  --secondary-color: #6A5ACD;
  --accent-color: #FFA500;
  --accent-light: rgba(255, 165, 0, 0.1);
  --text-color: #333;
  --text-secondary: #5f6980;
  --text-light: #718096;
  --bg-color: #fff;
  --bg-light: #F0F3F9;
  --border-color: #E0E6ED;
  --success-color: #10B981;
  --warning-color: #F59E0B;
  --error-color: #EF4444;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.05);
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  
  /* Phase colors */
  --browse-color: #8672e8;
  --browse-light: rgba(134, 114, 232, 0.1);
  --configure-color: #4662D7;
  --configure-light: rgba(70, 98, 215, 0.1);
  --create-color: #00BFFF;
  --create-light: rgba(0, 191, 255, 0.1);
  --test-color: #FFA500;
  --test-light: rgba(255, 165, 0, 0.1);
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  margin: 0;
  padding: 0;
}

/* Guide Header */
.guide-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.guide-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--primary-light);
  border-radius: 50%;
  color: var(--primary-color);
}

.guide-title-section {
  flex: 1;
  min-width: 280px;
}

.guide-header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1.2;
}

.guide-description {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.estimated-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-light);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Table of Contents */
.guide-toc {
  margin-bottom: 2rem;
  background: var(--bg-light);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.toc-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.toc-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}

.toc-links li {
  position: relative;
}

.toc-links a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.toc-links a:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Prerequisites Panel */
.prerequisites-panel {
  margin-bottom: 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.panel-header svg {
  color: var(--primary-color);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.check-icon {
  color: var(--success-color);
  flex-shrink: 0;
}

/* Workflow Overview */
.workflow-overview {
  margin-bottom: 3rem;
}

.workflow-overview h2 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}

.workflow-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem 0;
}

.workflow-phase {
  flex: 1;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.phase-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0.75rem;
  color: white;
}

.phase-icon.browse {
  background: var(--browse-color);
}

.phase-icon.configure {
  background: var(--configure-color);
}

.phase-icon.create {
  background: var(--create-color);
}

.phase-icon.test {
  background: var(--test-color);
}

.phase-label {
  font-weight: 600;
  font-size: 0.95rem;
}

.workflow-arrow {
  font-size: 1.5rem;
  color: var(--text-light);
  margin: 0 0.5rem;
  align-self: center;
  margin-bottom: 2rem;
}

/* Phase Container */
.phase-container {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.phase-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.3rem;
  color: white;
  flex-shrink: 0;
}

.phase-number.browse {
  background-color: var(--browse-color);
}

.phase-number.configure {
  background-color: var(--configure-color);
}

.phase-number.create {
  background-color: var(--create-color);
}

.phase-number.test {
  background-color: var(--test-color);
}

.phase-content {
  flex: 1;
}

.phase-intro {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-top: 0;
  margin-bottom: 1.5rem;
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.feature-card {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  background: white;
  transition: all 0.2s ease;
}

.feature-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: var(--radius-md);
  background: var(--primary-light);
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-card p {
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.feature-tip {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  background: var(--bg-light);
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.feature-tip svg {
  flex-shrink: 0;
  color: var(--primary-color);
  margin-top: 0.1rem;
}

/* Action Steps */
.action-steps {
  margin: 2rem 0;
  background: var(--bg-light);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.action-steps h4 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.step-list {
  margin: 0;
  padding-left: 1.25rem;
}

.step-list li {
  margin-bottom: 1rem;
}

.step-list li:last-child {
  margin-bottom: 0;
}

.step-highlight {
  font-weight: 600;
  color: var(--text-color);
}

.step-note {
  display: block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* Callouts */
.callout-info, .callout-warning, .callout-success {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.25rem;
  border-radius: var(--radius-md);
}

.callout-info {
  background: var(--primary-light);
  border-left: 4px solid var(--primary-color);
}

.callout-info svg {
  color: var(--primary-color);
  flex-shrink: 0;
}

.callout-warning {
  background: var(--accent-light);
  border-left: 4px solid var(--warning-color);
}

.callout-warning svg {
  color: var(--warning-color);
  flex-shrink: 0;
}

.callout-success {
  background: rgba(16, 185, 129, 0.1);
  border-left: 4px solid var(--success-color);
}

.callout-success svg {
  color: var(--success-color);
  flex-shrink: 0;
}

/* Config Grid */
.config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.config-section {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  background: white;
}

.config-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.config-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.config-header svg {
  color: var(--configure-color);
}

.config-options {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.config-option {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.option-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--bg-light);
  border-radius: var(--radius-sm);
  color: var(--configure-color);
  flex-shrink: 0;
}

.option-details {
  flex: 1;
}

.option-details h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.option-details p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Config Editor */
.config-editor {
  margin: 2rem 0;
}

.config-editor h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.code-container {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f6f8fa;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: var(--bg-light);
  color: var(--text-color);
}

.code-block {
  margin: 0;
  padding: 1rem;
  background: #1e1e2e;
  color: #f8f8f2;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
  max-height: 400px;
}

.code-block.yaml .comment {
  color: #6272a4;
}

/* Review Panel */
.review-panel {
  margin: 2rem 0;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.panel-section {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.panel-section:last-child {
  border-bottom: none;
}

.panel-section h3 {
  margin: 0 0 1.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.summary-item {
  padding: 0.75rem;
  background: var(--bg-light);
  border-radius: var(--radius-sm);
}

.summary-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.summary-value {
  font-weight: 600;
  font-size: 1rem;
}

/* Pricing Table */
.pricing-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.pricing-header {
  display: flex;
  background: var(--bg-light);
  font-weight: 600;
  font-size: 0.9rem;
}

.pricing-row {
  display: flex;
  border-bottom: 1px solid var(--border-color);
}

.pricing-row.total {
  font-weight: 600;
  background: var(--primary-light);
}

.pricing-cell {
  padding: 0.75rem;
  flex: 1;
}

.pricing-cell:last-child {
  text-align: right;
}

.pricing-note {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

/* Accept Terms */
.accept-terms {
  padding: 1rem 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.95rem;
}

.terms-checkbox {
  width: 18px;
  height: 18px;
}

/* Create Steps */
.create-steps {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.step-button {
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--create-light);
  border-radius: 50%;
  color: var(--create-color);
  flex-shrink: 0;
}

.button-content {
  flex: 1;
}

.button-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.button-content p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.flow-arrow {
  font-size: 1.5rem;
  color: var(--text-light);
}

/* Endpoint Details */
.endpoint-details {
  margin: 2rem 0;
}

.endpoint-details h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.detail-card {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  background: white;
}

.detail-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--create-light);
  color: var(--create-color);
  margin-bottom: 1rem;
}

.detail-card h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.detail-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* API Example */
.api-example {
  margin: 2rem 0;
}

.api-example h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

/* Test and Monitor */
.test-monitor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature-section {
  flex: 1;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.section-header svg {
  color: var(--test-color);
}

.section-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.test-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.test-card:hover {
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.test-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--test-light);
  border-radius: 50%;
  color: var(--test-color);
  flex-shrink: 0;
}

.test-content {
  flex: 1;
}

.test-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.test-content p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Test Example */
.test-example {
  margin: 2.5rem 0;
}

.test-example h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.test-interface {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  background: var(--bg-light);
}

.test-input, .test-output {
  flex: 1;
}

.test-input h4, .test-output h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.input-area {
  margin-bottom: 1rem;
}

.input-area textarea {
  width: 100%;
  height: 120px;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.95rem;
  resize: none;
}

.input-controls {
  display: flex;
  gap: 1rem;
}

.param-dropdown {
  padding: 0.6rem 1rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  cursor: pointer;
}

.send-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--test-color);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
}

.output-area {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 1rem;
  font-size: 0.95rem;
  height: 240px;
  overflow-y: auto;
}

.output-area p {
  margin: 0 0 0.75rem 0;
}

.output-area p:last-child {
  margin-bottom: 0;
}

.output-area ol {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.output-area ol li {
  margin-bottom: 0.25rem;
}

.response-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-color);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.meta-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.meta-value {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Monitoring Dashboard */
.monitoring-dashboard {
  margin: 2.5rem 0;
}

.monitoring-dashboard h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.dashboard-preview {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--bg-light);
  border-bottom: 1px solid var(--border-color);
}

.header-title {
  font-weight: 600;
  font-size: 1rem;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.time-selector {
  font-size: 0.9rem;
  cursor: pointer;
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  cursor: pointer;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  padding: 1.5rem;
}

.metric-card {
  padding: 1.25rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

.metric-header {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.metric-chart {
  height: 120px;
  margin-bottom: 1rem;
  position: relative;
}

.rps-chart::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(70, 98, 215, 0.1), rgba(70, 98, 215, 0.4));
  border-radius: var(--radius-sm);
  clip-path: polygon(0 80%, 10% 75%, 20% 85%, 30% 65%, 40% 70%, 50% 60%, 60% 50%, 70% 55%, 80% 40%, 90% 45%, 100% 30%, 100% 100%, 0 100%);
}

.latency-chart::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.4));
  border-radius: var(--radius-sm);
  clip-path: polygon(0 40%, 10% 45%, 20% 35%, 30% 50%, 40% 45%, 50% 55%, 60% 50%, 70% 40%, 80% 45%, 90% 35%, 100% 40%, 100% 100%, 0 100%);
}

.tokens-chart::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.4));
  border-radius: var(--radius-sm);
  clip-path: polygon(0 50%, 10% 55%, 20% 50%, 30% 45%, 40% 50%, 50% 55%, 60% 50%, 70% 45%, 80% 50%, 90% 55%, 100% 50%, 100% 100%, 0 100%);
}

.error-chart::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.4));
  border-radius: var(--radius-sm);
  clip-path: polygon(0 10%, 10% 10%, 20% 15%, 30% 10%, 40% 10%, 50% 10%, 60% 5%, 70% 15%, 80% 5%, 90% 10%, 100% 25%, 100% 100%, 0 100%);
}

.metric-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 600;
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  font-weight: 500;
}

.metric-trend.up {
  color: var(--error-color);
}

.metric-trend.down {
  color: var(--success-color);
}

.metric-trend.stable {
  color: var(--text-secondary);
}

.metric-trend.good {
  color: var(--success-color);
}

.metric-trend.bad {
  color: var(--error-color);
}

/* Troubleshooting Section */
.troubleshooting-section {
  margin: 3rem 0;
  padding: 1.5rem;
  background: var(--bg-light);
  border-radius: var(--radius-md);
}

.troubleshooting-section h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.troubleshooting-section h2 svg {
  color: var(--warning-color);
}

/* Accordion */
.accordion {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--border-color);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: white;
  border: none;
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.accordion-header:hover {
  background: var(--bg-light);
}

.accordion-icon {
  transition: transform 0.3s ease;
}

.accordion-item.active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 1rem 1rem;
  display: none;
}

.accordion-item.active .accordion-content {
  display: block;
}

/* Help Panel */
.help-panel {
  margin: 3rem 0 0 0;
  padding: 2rem;
  background: var(--bg-light);
  border-radius: var(--radius-lg);
}

.help-panel h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
}

.help-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.help-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.2s ease;
}

.help-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.help-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--primary-light);
  border-radius: 50%;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.help-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.help-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .phase-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .workflow-diagram {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .workflow-arrow {
    transform: rotate(90deg);
    margin: 0;
  }
  
  .create-steps {
    flex-direction: column;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
    align-self: center;
    margin: 0.5rem 0;
  }
  
  .test-interface {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .guide-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .estimated-time {
    align-self: flex-start;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      accordionItem.classList.toggle('active');
    });
  });
  
  // Copy button functionality
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const codeBlock = this.closest('.code-container').querySelector('pre');
      const text = codeBlock.textContent;
      
      // Create temporary textarea to copy from
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      
      // Change button text temporarily
      const originalText = this.querySelector('span').textContent;
      this.querySelector('span').textContent = 'Copied!';
      setTimeout(() => {
        this.querySelector('span').textContent = originalText;
      }, 2000);
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Test interface send button effect
  const sendButton = document.querySelector('.send-button');
  if (sendButton) {
    sendButton.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
  }
});
</script>