# Deploying LLM Models with Syntera

<div class="guide-header">
  <div class="guide-icon">
        <img src="/assets/Brain.svg" alt="LLM Integration" />
  </div>
  <div class="guide-title-section">
    <h1>Deploying LLM Models with Syntera</h1>
    <p class="guide-description">A comprehensive guide to deploying large language models on the Syntera platform</p>
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
    <li><a href="#Prerequisites">Prerequisites</a></li>
    <li><a href="#Browse Model Catalog">Browse Model Catalog</a></li>
    <li><a href="#Configure Inference Endpoint">Configure Inference Endpoint</a></li>
    <li><a href="#Create Dedicated Endpoint">Create Dedicated Endpoint</a></li>
    <li><a href="#Test and Monitor Your Endpoint">Test and Monitor Your Endpoint</a></li>
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
      <span>Syntera account</span>
    </li>
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>API access key</span>
    </li>
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>Model access permissions</span>
    </li>
    <li>
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      <span>Basic knowledge of ML concepts</span>
    </li>
  </ul>
</div>

<div class="workflow-overview">
  <h2>LLM Model Deployment Workflow</h2>
  <div class="workflow-diagram">
    <div class="workflow-phase">
      <div class="phase-icon model selection">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
      <div class="phase-label">Model Selection</div>
    </div>
  </div>
</div>

## Phase 1: Model Selection

<div class="phase-container">
  <div class="phase-number browse">1</div>
  <div class="phase-content">
    <p class="phase-intro">Now that your connection is verified, start building your application using Syntera AI services</p>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <h3>Service Integration</h3>
        <p>Integrate Syntera AI services into your application</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <h3>Data Processing</h3>
        <p>Process and prepare data for AI analysis</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <h3>Result Handling</h3>
        <p>Handle and display AI processing results</p>
      </div>
    </div>
    
    <div class="action-steps">
      <h4>How to model selection</h4>
      <ol class="step-list">
        <li>
          <span class="step-highlight">Define your application structure</span>
          <div class="step-note">Create the basic structure for your application</div>
        </li>
        <li>
          <span class="step-highlight">Implement service calls</span>
          <div class="step-note">Add code to call specific Syntera AI services</div>
        </li>
        <li>
          <span class="step-highlight">Process and display results</span>
          <div class="step-note">Handle the response data and present it to users</div>
        </li>
      </ol>
    </div>
    
    <div class="callout-info">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="8" x2="12" y2="12"></line></svg>
      <div>
        Tip: For production deployments, consider models with high throughput and low latency. For research or complex tasks, prioritize accuracy and capabilities
      </div>
    </div>
    
    <div class="code-container">
      <div class="code-header">
        <span>Code Example</span>
        <button class="copy-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
          <span>Copy</span>
        </button>
      </div>
      <pre class="code-block"><code># Example application using Syntera NLP service
def analyze_text(text):
    try:
        # Call the NLP service
        result &#x3D; client.nlp.analyze(
            text&#x3D;text,
            features&#x3D;[&quot;sentiment&quot;, &quot;entities&quot;, &quot;keywords&quot;]
        )
        
        # Process results
        sentiment &#x3D; result.sentiment.score
        entities &#x3D; [e.text for e in result.entities]
        keywords &#x3D; [k.text for k in result.keywords]
        
        return {
            &quot;sentiment&quot;: sentiment,
            &quot;entities&quot;: entities,
            &quot;keywords&quot;: keywords
        }
    except Exception as e:
        print(f&quot;Error analyzing text: {str(e)}&quot;)
        return None

# Example usage
sample_text &#x3D; &quot;Syntera&#x27;s new AI platform has impressive natural language capabilities.&quot;
analysis &#x3D; analyze_text(sample_text)
print(f&quot;Sentiment: {analysis[&#x27;sentiment&#x27;]}&quot;)
print(f&quot;Entities: {&#x27;, &#x27;.join(analysis[&#x27;entities&#x27;])}&quot;)
print(f&quot;Keywords: {&#x27;, &#x27;.join(analysis[&#x27;keywords&#x27;])}&quot;)</code></pre>
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
        <span>API Connection Failures</span>
        <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <ul>
          <li><strong>Check API Key:</strong> Verify that your API key is correct and has not expired</li>
          <li><strong>Network Issues:</strong> Ensure your network allows connections to the Syntera API endpoints</li>
          <li><strong>Service Status:</strong> Check the Syntera status page for any ongoing service disruptions</li>
        </ul>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">
        <span>Rate Limit Exceeded</span>
        <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <ul>
          <li><strong>Implement Backoff:</strong> Add exponential backoff to your requests</li>
          <li><strong>Optimize Calls:</strong> Batch requests when possible to reduce API call frequency</li>
          <li><strong>Upgrade Plan:</strong> Consider upgrading to a higher tier with increased rate limits</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="help-panel">
  <h2>Need Help?</h2>
  <div class="help-options">
    <a href="#documentation" class="help-card" >
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <h3>Documentation</h3>
      <p>Access comprehensive guides and API references</p>
    </a>
    <a href="#support-ticket" class="help-card" >
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <h3>Support Ticket</h3>
      <p>Create a support ticket for technical assistance</p>
    </a>
    <a href="#community-forum" class="help-card" >
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <h3>Community Forum</h3>
      <p>Connect with other users and share best practices</p>
    </a>
    <a href="#office-hours" class="help-card" >
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <h3>Office Hours</h3>
      <p>Join weekly office hours with Syntera engineers</p>
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