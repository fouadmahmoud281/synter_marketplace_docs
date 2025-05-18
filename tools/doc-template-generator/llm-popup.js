// LLM Popup for GitHub ticket processing

// Import the LLM doc generator
import { llmDocGenerator } from './langchain.js';

class LLMPopup {
  constructor() {
    this.popup = null;
    this.isVisible = false;
    this.apiKeyConfigured = false;
    this.apiKey = localStorage.getItem('openai_api_key') || '';
    
    // Ensure DOM is loaded before creating elements
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.createPopupElement();
    this.attachEventListeners();
  }

  createPopupElement() {
    // Create popup container
    this.popup = document.createElement('div');
    this.popup.className = 'llm-popup-container';
    this.popup.style.display = 'none';
    
    // Create popup content
    this.popup.innerHTML = `
      <div class="llm-popup">
        <div class="llm-popup-header">
          <h3>AI Documentation Generator</h3>
          <button type="button" class="llm-popup-close">&times;</button>
        </div>
        <div class="llm-popup-body">
          <div class="llm-popup-section" id="apiKeySection">
            <label for="openai-api-key">OpenAI API Key:</label>
            <div class="api-key-input-container">
              <input type="password" id="openai-api-key" placeholder="Enter your OpenAI API key" />
              <button type="button" id="save-api-key">Save Key</button>
            </div>
            <small>Your API key is stored locally in your browser and never sent to our servers.</small>
          </div>
          
          <div class="llm-popup-section">
            <label for="github-ticket">GitHub Ticket Source:</label>
            <textarea id="github-ticket" placeholder="Paste GitHub ticket content or URL here"></textarea>
          </div>
          
          <div class="llm-popup-actions">
            <button type="button" id="generate-doc" class="llm-generate-btn" disabled>Generate Documentation</button>
            <div id="llm-status" class="llm-status"></div>
          </div>
        </div>
      </div>
    `;
    
    // Add to document body
    document.body.appendChild(this.popup);
  }

  attachEventListeners() {
    // Close button
    const closeButton = this.popup.querySelector('.llm-popup-close');
    closeButton.addEventListener('click', () => this.hide());
    
    // Click outside to close
    this.popup.addEventListener('click', (e) => {
      if (e.target === this.popup) {
        this.hide();
      }
    });
    
    // Save API key button
    const saveKeyButton = document.getElementById('save-api-key');
    saveKeyButton.addEventListener('click', () => this.saveApiKey());
    
    // Generate documentation button
    const generateButton = document.getElementById('generate-doc');
    generateButton.addEventListener('click', () => this.generateDocumentation());
    
    // Check for saved API key on load
    this.checkSavedApiKey();
  }

  show() {
    this.popup.style.display = 'flex';
    this.isVisible = true;
    
    // Add animation class
    setTimeout(() => {
      const popup = this.popup.querySelector('.llm-popup');
      popup.classList.add('show');
    }, 10);
  }

  hide() {
    const popup = this.popup.querySelector('.llm-popup');
    popup.classList.remove('show');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      this.popup.style.display = 'none';
      this.isVisible = false;
    }, 300);
  }

  saveApiKey() {
    const apiKeyInput = document.getElementById('openai-api-key');
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
      this.showStatus('Please enter a valid API key', 'error');
      return;
    }
    
    // Save to localStorage
    try {
      localStorage.setItem('openai_api_key', apiKey);
      this.apiKeyConfigured = llmDocGenerator.configure(apiKey);
      
      if (this.apiKeyConfigured) {
        this.showStatus('API key saved successfully', 'success');
        document.getElementById('generate-doc').disabled = false;
        
        // Update UI to show key is configured
        const apiKeySection = document.getElementById('apiKeySection');
        apiKeySection.classList.add('configured');
      } else {
        this.showStatus('Failed to configure API key', 'error');
      }
    } catch (error) {
      console.error('Error saving API key:', error);
      this.showStatus('Error saving API key', 'error');
    }
  }

  checkSavedApiKey() {
    const savedApiKey = localStorage.getItem('openai_api_key');
    
    if (savedApiKey) {
      // Mask the displayed API key
      const apiKeyInput = document.getElementById('openai-api-key');
      apiKeyInput.value = savedApiKey;
      
      // Configure the LLM with the saved key
      this.apiKeyConfigured = llmDocGenerator.configure(savedApiKey);
      
      if (this.apiKeyConfigured) {
        document.getElementById('generate-doc').disabled = false;
        
        // Update UI to show key is configured
        const apiKeySection = document.getElementById('apiKeySection');
        apiKeySection.classList.add('configured');
      }
    }
  }

  async generateDocumentation() {
    const ticketInput = document.getElementById('github-ticket');
    const ticketContent = ticketInput.value.trim();
    
    if (!ticketContent) {
      this.showStatus('Please enter GitHub ticket content', 'error');
      return;
    }
    
    if (!this.apiKeyConfigured) {
      this.showStatus('Please configure your OpenAI API key first', 'error');
      return;
    }
    
    try {
      // Show loading state
      this.showStatus('Generating documentation...', 'loading');
      document.getElementById('generate-doc').disabled = true;
      
      // Call the LLM service
      const generatedData = await llmDocGenerator.generateFromTicket(ticketContent);
      
      // Apply the generated data to the form
      llmDocGenerator.applyToForm(generatedData);
      
      // Show success message
      this.showStatus('Documentation generated successfully!', 'success');
      
      // Close the popup after a delay
      setTimeout(() => {
        this.hide();
        // Highlight the form to show it's been updated
        this.highlightForm();
      }, 1500);
    } catch (error) {
      console.error('Error generating documentation:', error);
      this.showStatus(`Error: ${error.message}`, 'error');
      document.getElementById('generate-doc').disabled = false;
    }
  }

  showStatus(message, type = 'info') {
    const statusElement = document.getElementById('llm-status');
    statusElement.textContent = message;
    statusElement.className = `llm-status ${type}`;
    
    // Clear status after a delay for success/error messages
    if (type === 'success' || type === 'error') {
      setTimeout(() => {
        statusElement.textContent = '';
        statusElement.className = 'llm-status';
      }, 5000);
    }
  }

  highlightForm() {
    const formContainer = document.querySelector('.form-container');
    formContainer.classList.add('highlight-update');
    
    setTimeout(() => {
      formContainer.classList.remove('highlight-update');
    }, 2000);
  }
}

// Create and export the instance
const llmPopup = new LLMPopup();
export default llmPopup;