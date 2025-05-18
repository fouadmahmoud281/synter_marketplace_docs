# How-to Guides

<div class="page-header">
  <div class="header-content">
    <h1 class="main-title">How-to Guides</h1>
    <p class="subtitle">Step-by-step instructions for configuring and using the Syntera Platform</p>
  </div>
  <div class="header-actions">
    <a href="https://support.syntera.ai" class="action-button" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      Support Portal
    </a>
    <a href="https://community.syntera.ai" class="action-button secondary" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      Community Forum
    </a>
  </div>
</div>

<div class="search-container">
  <input type="text" id="guide-search" placeholder="Search for guides..." class="search-input">
  <div class="search-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  </div>
</div>

<div class="feature-categories">
  <a href="#llm-integration" class="feature-card">
    <div class="card-icon llm-icon">
        <img src="/assets/Brain.svg" alt="LLM Integration" />
    </div>
    <h3>LLM Integration</h3>
    <p>Deploy and manage language models with optimized performance</p>
    <span class="card-arrow">→</span>
  </a>
  
  <a href="#vector-database" class="feature-card">
    <div class="card-icon vector-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    </div>
    <h3>Vector Database</h3>
    <p>Store and search high-dimensional vector embeddings</p>
    <span class="card-arrow">→</span>
  </a>
  
  <a href="#agentic-systems" class="feature-card">
    <div class="card-icon agent-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect><path d="M9 6h6"></path><path d="M6 9v6"></path><path d="M18 9v6"></path><path d="M9 18h6"></path></svg>
    </div>
    <h3>Agentic Systems</h3>
    <p>Build intelligent agents for automation and decision-making</p>
    <span class="card-arrow">→</span>
  </a>
  
  <a href="#monitoring--dashboard" class="feature-card">
    <div class="card-icon monitoring-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M6 8h.01M9 8h.01"></path><polyline points="17 8 12 13 9 10"></polyline></svg>
    </div>
    <h3>Monitoring & Dashboard</h3>
    <p>Track performance metrics and system health</p>
    <span class="card-arrow">→</span>
  </a>
  
  <a href="#user-management" class="feature-card">
    <div class="card-icon user-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    </div>
    <h3>User Management</h3>
    <p>Configure users, roles, and security settings</p>
    <span class="card-arrow">→</span>
  </a>
</div>

<div class="guide-sections">
  <section id="llm-integration" class="guide-section">
    <div class="section-header">
      <div class="section-icon llm-icon">
        <img src="/assets/Brain.svg" alt="LLM Integration" />
      </div>
      <h2>LLM Integration</h2>
    </div>

    <div class="guides-container">
      <div class="guide-group">
        <h3>Getting Started with LLMs</h3>
        <ul class="guide-list">
          <li><a href="/getting-started/llm/setup-first-model" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Setting Up Your First LLM Model</h4>
              <p>Learn how to deploy your first language model on the platform</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="llm/configure-parameters.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Configuring Model Parameters</h4>
              <p>Adjust temperature, top-p, and other generation settings</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="llm/manage-resources.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Managing Model Resources</h4>
              <p>Configure resource allocation and scaling options</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
      
      <div class="guide-group">
        <h3>Advanced LLM Features</h3>
        <ul class="guide-list">
          <li><a href="llm/fine-tuning.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Fine-tuning Models</h4>
              <p>Customize models with your own training data</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="llm/api-integration.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>API Integration</h4>
              <p>Integrate models with your applications via REST API</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="llm/performance.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Performance Optimization</h4>
              <p>Optimize for throughput, latency, and cost efficiency</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
    </div>
  </section>
  
  <section id="vector-database" class="guide-section">
    <div class="section-header">
      <div class="section-icon vector-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      </div>
      <h2>Vector Database</h2>
    </div>

    <div class="guides-container">
      <div class="guide-group">
        <h3>Basic Operations</h3>
        <ul class="guide-list">
          <li><a href="/getting-started/llm/Getting_Started_with_Vector_Databases" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Setting Up Vector Database</h4>
              <p>Configure your first vector database instance</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="vector-db/create-collections.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Creating Collections</h4>
              <p>Organize your embeddings with collection management</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="vector-db/manage-embeddings.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Managing Embeddings</h4>
              <p>Generate, store, and update vector embeddings</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
      
      <div class="guide-group">
        <h3>Advanced Features</h3>
        <ul class="guide-list">
          <li><a href="vector-db/semantic-search.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Semantic Search Implementation</h4>
              <p>Build powerful semantic search functionality</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="vector-db/performance.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Performance Tuning</h4>
              <p>Optimize vector search for speed and accuracy</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="vector-db/backup-recovery.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Backup and Recovery</h4>
              <p>Implement disaster recovery for vector data</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
    </div>
  </section>
  
  <!-- Additional sections follow the same pattern -->
  
  <section id="agentic-systems" class="guide-section">
    <!-- Content similar to above -->
    <div class="section-header">
      <div class="section-icon agent-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect><path d="M9 6h6"></path><path d="M6 9v6"></path><path d="M18 9v6"></path><path d="M9 18h6"></path></svg>
      </div>
      <h2>Agentic Systems</h2>
    </div>

    <div class="guides-container">
      <div class="guide-group">
        <h3>Building Agents</h3>
        <ul class="guide-list">
          <li><a href="agentic/create-agent.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Creating Your First Agent</h4>
              <p>Get started with intelligent agent development</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="agentic/define-behaviors.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Defining Agent Behaviors</h4>
              <p>Configure rules, goals, and decision-making processes</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="agentic/communication.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Agent Communication</h4>
              <p>Set up communication between agents and systems</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
      
      <div class="guide-group">
        <h3>Advanced Agent Features</h3>
        <ul class="guide-list">
          <li><a href="agentic/multi-agent.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Multi-Agent Systems</h4>
              <p>Create collaborative systems with multiple agents</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="agentic/monitoring.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Agent Monitoring</h4>
              <p>Track agent performance and behavior</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="agentic/error-handling.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Error Handling</h4>
              <p>Implement robust error handling and recovery</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
    </div>
  </section>
  
  <section id="monitoring--dashboard" class="guide-section">
    <div class="section-header">
      <div class="section-icon monitoring-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M6 8h.01M9 8h.01"></path><polyline points="17 8 12 13 9 10"></polyline></svg>
      </div>
      <h2>Monitoring & Dashboard</h2>
    </div>

    <div class="guides-container">
      <div class="guide-group">
        <h3>Basic Monitoring</h3>
        <ul class="guide-list">
          <li><a href="monitoring/setup.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Setting Up Monitoring</h4>
              <p>Configure monitoring for your AI components</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="monitoring/custom-dashboards.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Creating Custom Dashboards</h4>
              <p>Build tailored dashboards for your needs</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="monitoring/alerts.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Setting Up Alerts</h4>
              <p>Configure proactive notifications for issues</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
      
      <div class="guide-group">
        <h3>Advanced Analytics</h3>
        <ul class="guide-list">
          <li><a href="monitoring/performance-metrics.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Performance Metrics</h4>
              <p>Track and analyze key performance indicators</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="monitoring/cost-tracking.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Cost Tracking</h4>
              <p>Monitor and manage usage costs across components</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="monitoring/resource-optimization.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Resource Optimization</h4>
              <p>Optimize resource usage based on analytics</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
    </div>
  </section>
  
  <section id="user-management" class="guide-section">
    <div class="section-header">
      <div class="section-icon user-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <h2>User Management</h2>
    </div>

    <div class="guides-container">
      <div class="guide-group">
        <h3>User Administration</h3>
        <ul class="guide-list">
          <li><a href="user-management/setup-roles.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>User Setup and Roles</h4>
              <p>Configure users and permission roles</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="user-management/api-keys.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>API Key Management</h4>
              <p>Create and manage secure API keys</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="user-management/access-control.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Access Control</h4>
              <p>Implement fine-grained access controls</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
      
      <div class="guide-group">
        <h3>Security Features</h3>
        <ul class="guide-list">
          <li><a href="user-management/authentication.md" class="guide-link">
            <span class="guide-number">1</span>
            <div class="guide-info">
              <h4>Authentication Setup</h4>
              <p>Configure SSO, MFA, and other auth methods</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="user-management/audit-logging.md" class="guide-link">
            <span class="guide-number">2</span>
            <div class="guide-info">
              <h4>Audit Logging</h4>
              <p>Track and analyze user activity across the platform</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
          <li><a href="user-management/security-practices.md" class="guide-link">
            <span class="guide-number">3</span>
            <div class="guide-info">
              <h4>Security Best Practices</h4>
              <p>Follow recommended security guidelines</p>
            </div>
            <span class="guide-arrow">→</span>
          </a></li>
        </ul>
      </div>
    </div>
  </section>
</div>

<section class="additional-resources">
  <h2>Best Practices & Resources</h2>
  
  <div class="resources-grid">
    <a href="best-practices/security.md" class="resource-card">
      <div class="resource-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      </div>
      <h3>Platform Security Guidelines</h3>
      <p>Comprehensive security recommendations for enterprise deployment</p>
    </a>
    
    <a href="best-practices/performance.md" class="resource-card">
      <div class="resource-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      </div>
      <h3>Performance Optimization</h3>
      <p>Strategies for maximizing throughput and minimizing latency</p>
    </a>
    
    <a href="best-practices/cost-management.md" class="resource-card">
      <div class="resource-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
      </div>
      <h3>Cost Management</h3>
      <p>Techniques for optimizing resource usage and controlling costs</p>
    </a>
    
    <a href="best-practices/troubleshooting.md" class="resource-card">
      <div class="resource-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      </div>
      <h3>Troubleshooting Guide</h3>
      <p>Solutions for common issues and debugging strategies</p>
    </a>
  </div>
</section>

<div class="help-section">
  <h2>Need Additional Help?</h2>
  <p>Our support team is ready to assist with any questions or issues you encounter.</p>
  
  <div class="help-options">
    <a href="https://support.syntera.ai" class="help-option" target="_blank">
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <div class="help-info">
        <h3>Support Portal</h3>
        <p>Create tickets and track issue resolution</p>
      </div>
    </a>
    
    <a href="https://community.syntera.ai" class="help-option" target="_blank">
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <div class="help-info">
        <h3>Community Forum</h3>
        <p>Connect with other users and share solutions</p>
      </div>
    </a>
    
    <a href="mailto:support@syntera.ai" class="help-option">
      <div class="help-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </div>
      <div class="help-info">
        <h3>Email Support</h3>
        <p>Contact our support team directly</p>
      </div>
    </a>
  </div>
</div>

<style>
:root {
  --primary-color: #6A5ACD;
  --primary-light: rgba(106, 90, 205, 0.1);
  --primary-dark: #5649b3;
  --accent-color: #00BFFF;
  --accent-light: rgba(0, 191, 255, 0.1);
  --accent-dark: #00a8e0;
  --text-color: #333;
  --text-secondary: #718096;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --border-color: rgba(106, 90, 205, 0.2);
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --transition: all 0.3s ease;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  margin: 0;
  padding: 0;
}

/* Page Header */
.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1.5rem;
  background: #f0f3f9;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid rgba(106, 90, 205, 0.1);
}

.header-content {
  flex: 1;
  min-width: 280px;
}

.main-title {
  margin: 0 0 0.75rem 0;
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.05rem;
  color: #5f6980;
  margin: 0;
  font-weight: 400;
  max-width: 600px;
  line-height: 1.5;
}

.header-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* Enhanced Action Button Styling */
/* Enhanced Action Button Styling with Better Text Contrast */
.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.1rem;
  background: #4662D7; /* Match your site's blue theme */
  color: white !important; /* Force white text color with important */
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-width: 140px;
}

.action-button svg {
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
  stroke: white; /* Ensure icon is white */
}

.action-button:hover {
  background: #3a53c5; /* Slightly darker blue on hover */
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  color: white !important; /* Maintain white text on hover */
}

/* Secondary button styling (Community Forum) */
.action-button.secondary {
  background: white;
  color: #4662D7 !important; /* Blue text for secondary button */
  border: 1px solid #4662D7;
}

.action-button.secondary svg {
  stroke: #4662D7; /* Blue icon for secondary button */
}

.action-button.secondary:hover {
  background: rgba(70, 98, 215, 0.05);
  border-color: #3a53c5;
  color: #3a53c5 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-header {
    padding: 1.5rem;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 0.95rem;
  }
  
  .header-actions {
    margin-top: 0.5rem;
    width: 100%;
  }
  
  .action-button {
    flex: 1;
    justify-content: center;
    white-space: nowrap;
  }
}
/* Search Box */
.search-container {
  position: relative;
  max-width: 100%;
  margin-bottom: 2.5rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: white;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.2);
  border-color: var(--primary-color);
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
}

/* Feature Cards */
.feature-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: var(--card-bg);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  position: relative;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: var(--primary-light);
  color: var(--primary-color);
}

.feature-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  flex-grow: 1;
}

.card-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
  opacity: 0;
  transition: var(--transition);
}

.feature-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(3px);
}

/* Icon variations */
.llm-icon {
  background: rgba(106, 90, 205, 0.1);
  color: #6A5ACD;
}

.vector-icon {
  background: rgba(0, 191, 255, 0.1);
  color: #00BFFF;
}

.agent-icon {
  background: rgba(118, 74, 188, 0.1);
  color: #764ABC;
}

.monitoring-icon {
  background: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.user-icon {
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
}

/* Section Styling */
.guide-section {
  margin-bottom: 3.5rem;
  padding-top: 1rem;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  margin-right: 1rem;
}

.section-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-color);
}

.guides-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.guide-group h3 {
  font-size: 1.2rem;
  margin: 0 0 1.2rem 0;
  color: var(--text-color);
  font-weight: 600;
}

.guide-list {
  list-style: none; /* Remove default bullets */
  padding: 0;
  margin: 0;
  counter-reset: item-counter; /* Setup counter for numbered items */
}
.guide-list li {
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 0; /* Remove any left padding */
  display: flex;
  align-items: flex-start;
}
.guide-list li::before {
  display: none !important; /* Force hide any auto-generated bullets */
}


.guide-link {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: var(--radius-md);
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid transparent;
  gap: 1rem;
}

.guide-link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.guide-number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  background: rgba(106, 90, 205, 0.1);
  color: #6A5ACD;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 0.8rem;
  flex-shrink: 0;
  text-align: center;
}
.guide-content {
  flex: 1;
}
.guide-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 0.4rem 0;
  color: #333;
}
.guide-description {
  color: #5f6980;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
}
.guide-info {
  flex: 1;
}

.guide-info h4 {
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
}

.guide-info p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.guide-arrow {
  color: var(--primary-color);
  font-weight: bold;
  opacity: 0;
  transition: var(--transition);
}

.guide-link:hover .guide-arrow {
  opacity: 1;
  transform: translateX(3px);
}

/* Resources Section */
.additional-resources {
  margin-bottom: 3.5rem;
}

.additional-resources h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-color);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  background: var(--card-bg);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.resource-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  margin-bottom: 1rem;
  background: var(--primary-light);
  color: var(--primary-color);
}

.resource-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
}

.resource-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Help Section */
.help-section {
  background: linear-gradient(135deg, var(--primary-light), var(--accent-light));
  padding: 2rem;
  border-radius: var(--radius-lg);
  margin-bottom: 2rem;
}

.help-section h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-color);
}

.help-section p {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  color: var(--text-secondary);
}

.help-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.help-option {
  display: flex;
  align-items: center;
  padding: 1.2rem;
  background: var(--card-bg);
  border-radius: var(--radius-md);
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  gap: 1rem;
}

.help-option:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.help-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary-color);
  flex-shrink: 0;
}

.help-info {
  flex: 1;
}

.help-info h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
}

.help-info p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-header {
    padding: 1.5rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .guides-container {
    grid-template-columns: 1fr;
  }
  
  .header-actions {
    width: 100%;
  }
  
  .action-button {
    flex: 1;
    justify-content: center;
  }
  
  .help-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .feature-categories {
    grid-template-columns: 1fr;
  }
  
  .resource-card, .guide-link {
    padding: 1rem;
  }
  
  .guide-number {
    display: none;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Search functionality
  const searchInput = document.getElementById('guide-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      const guideLinks = document.querySelectorAll('.guide-link');
      
      guideLinks.forEach(link => {
        const title = link.querySelector('h4').textContent.toLowerCase();
        const description = link.querySelector('p').textContent.toLowerCase();
        const shouldShow = title.includes(searchTerm) || description.includes(searchTerm);
        
        link.closest('li').style.display = shouldShow ? 'block' : 'none';
      });
      
      // Show/hide section headers based on visible guides
      document.querySelectorAll('.guide-section').forEach(section => {
        const visibleGuides = section.querySelectorAll('.guide-link li[style="display: block"]').length;
        section.style.display = (searchTerm === '' || visibleGuides > 0) ? 'block' : 'none';
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>