// LangChain integration for OpenAI LLM to generate documentation from GitHub tickets
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { z } from 'zod';

class LLMDocGenerator {
  constructor() {
    this.apiKey = null;
    this.isConfigured = false;
    this.model = null;
    this.parser = null;
  }

  // Configure the LLM with API key
  configure(apiKey) {
    if (!apiKey || apiKey.trim() === '') {
      console.error('Invalid API key provided');
      return false;
    }
    
    try {
      this.apiKey = apiKey;
      this.model = new OpenAI({
        openAIApiKey: apiKey,
        modelName: 'gpt-4o-mini',
        temperature: 0.7,
      });

      // Define the output schema
      this.parser = StructuredOutputParser.fromZodSchema(z.object({
        guideTitle: z.string().describe('The title of the documentation guide'),
        guideDescription: z.string().describe('A brief description of what the guide covers'),
        estimatedTime: z.string().describe('Estimated time to complete the guide'),
        guideIconSrc: z.string().describe('Path to the guide icon'),
        guideIconAlt: z.string().describe('Alt text for the guide icon'),
        tocItems: z.array(z.string()).describe('Table of contents items'),
        prerequisites: z.array(z.string()).describe('List of prerequisites'),
        workflowOverviewTitle: z.string().describe('Title for the workflow overview section'),
        phaseNames: z.array(z.string()).describe('Names of the workflow phases'),
        phaseIntros: z.record(z.string()).describe('Introduction text for each phase'),
        features: z.record(z.array(z.object({
          title: z.string(),
          description: z.string()
        }))).describe('Features for each phase'),
        actionSteps: z.record(z.array(z.object({
          highlight: z.string(),
          note: z.string()
        }))).describe('Action steps for each phase'),
        troubleshooting: z.array(z.object({
          question: z.string(),
          solution: z.string()
        })).describe('Troubleshooting Q&A pairs')
      }));

      this.isConfigured = true;
      return true;
    } catch (error) {
      console.error('Error configuring LLM:', error);
      return false;
    }
  }

  // Process GitHub ticket and generate documentation fields
  async generateFromTicket(ticketSource) {
    if (!this.isConfigured) {
      throw new Error('LLM not configured. Please set API key first.');
    }

    if (!ticketSource || ticketSource.trim() === '') {
      throw new Error('Empty ticket source provided');
    }

    try {
      // Create the prompt template
      const promptTemplate = new PromptTemplate({
        template: `You are a documentation expert. Analyze the following raw GitHub ticket content and generate a structured documentation template.
        
        Raw GitHub Ticket Content:
        {ticketSource}
        
        {format_instructions}
        
        Generate a comprehensive documentation template that covers all necessary sections and details from the ticket. Focus on extracting:
        1. Main features and functionality
        2. Required setup steps and prerequisites
        3. Implementation phases and workflows
        4. Potential issues and their solutions
        
        Ensure the generated content is well-structured and follows documentation best practices.
        
        IMPORTANT: Return ONLY the JSON object with the specified format. Do not include any additional text or markdown formatting.`,
        inputVariables: ['ticketSource'],
        partialVariables: {
          format_instructions: this.parser.getFormatInstructions()
        }
      });

      // Format the prompt
      const formattedPrompt = await promptTemplate.format({
        ticketSource: ticketSource
      });

      // Generate response from the model
      const response = await this.model.call(formattedPrompt);
      
      // Clean the response to ensure it's valid JSON
      const cleanedResponse = response.replace(/```json\n|\n```/g, '').trim();
      
      // Parse the response
      const parsedResponse = await this.parser.parse(cleanedResponse);
      
      return parsedResponse;
    } catch (error) {
      console.error('Error generating documentation from ticket:', error);
      throw error;
    }
  }

  // Apply generated data to the form
  applyToForm(formData) {
    try {
      // Set basic information
      document.querySelector('input[name="guideTitle"]').value = formData.guideTitle || '';
      document.querySelector('textarea[name="guideDescription"]').value = formData.guideDescription || '';
      document.querySelector('input[name="estimatedTime"]').value = formData.estimatedTime || '';
      document.querySelector('input[name="guideIconSrc"]').value = formData.guideIconSrc || '';
      document.querySelector('input[name="guideIconAlt"]').value = formData.guideIconAlt || '';

      // Set TOC items
      if (formData.tocItems && formData.tocItems.length > 0) {
        const tocList = document.getElementById('tocList');
        tocList.innerHTML = '';
        
        formData.tocItems.forEach(item => {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          listItem.innerHTML = `
            <input type="text" name="tocItem[]" value="${item}" />
            <div class="button-group">
              <button type="button" class="add-item" onclick="addListItem(this, 'tocItem')">+</button>
              <button type="button" class="remove-item" onclick="removeListItem(this)">-</button>
            </div>
          `;
          tocList.appendChild(listItem);
        });
      }

      // Set prerequisites
      if (formData.prerequisites && formData.prerequisites.length > 0) {
        const prereqList = document.getElementById('prerequisitesList');
        prereqList.innerHTML = '';
        
        formData.prerequisites.forEach(item => {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          listItem.innerHTML = `
            <input type="text" name="prerequisite[]" value="${item}" />
            <div class="button-group">
              <button type="button" class="add-item" onclick="addListItem(this, 'prerequisite')">+</button>
              <button type="button" class="remove-item" onclick="removeListItem(this)">-</button>
            </div>
          `;
          prereqList.appendChild(listItem);
        });
      }

      // Set workflow title
      document.querySelector('input[name="workflowOverviewTitle"]').value = formData.workflowOverviewTitle || '';

      // Set phase names and update phase configuration
      if (formData.phaseNames && formData.phaseNames.length > 0) {
        const phaseList = document.getElementById('phaseList');
        phaseList.innerHTML = '';
        
        formData.phaseNames.forEach(name => {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          listItem.innerHTML = `
            <input type="text" name="phaseName[]" value="${name}" />
            <div class="button-group">
              <button type="button" class="add-item" onclick="addPhase(this)">+</button>
              <button type="button" class="remove-item" onclick="removePhase(this)">-</button>
            </div>
          `;
          phaseList.appendChild(listItem);
        });

        // Update phase configuration
        updatePhaseConfiguration();

        // Set phase-specific content
        formData.phaseNames.forEach((name, index) => {
          const phaseNum = index + 1;
          
          // Set phase intro
          const introField = document.querySelector(`textarea[name="phaseIntro${phaseNum}"]`);
          if (introField && formData.phaseIntros[name]) {
            introField.value = formData.phaseIntros[name];
          }

          // Set features
          if (formData.features[name]) {
            const featureGrid = document.getElementById(`featureGrid${phaseNum}`);
            if (featureGrid) {
              featureGrid.innerHTML = '';
              formData.features[name].forEach(feature => {
                const featureItem = document.createElement('div');
                featureItem.className = 'feature-item';
                featureItem.innerHTML = `
                  <label>Feature Title:
                    <input type="text" name="featureTitle${phaseNum}[]" value="${feature.title}" />
                  </label>
                  <label>Feature Description:
                    <input type="text" name="featureDescription${phaseNum}[]" value="${feature.description}" />
                  </label>
                  <div class="button-group">
                    <button type="button" class="add-feature" onclick="addFeature(${phaseNum}, this)">+</button>
                    <button type="button" class="remove-feature" onclick="removeFeature(this)">-</button>
                  </div>
                `;
                featureGrid.appendChild(featureItem);
              });
            }
          }

          // Set action steps
          if (formData.actionSteps[name]) {
            const actionSteps = document.getElementById(`actionSteps${phaseNum}`);
            if (actionSteps) {
              actionSteps.innerHTML = '';
              formData.actionSteps[name].forEach(step => {
                const stepItem = document.createElement('div');
                stepItem.className = 'action-step';
                stepItem.innerHTML = `
                  <label>Step Highlight:
                    <input type="text" name="stepHighlight${phaseNum}[]" value="${step.highlight}" />
                  </label>
                  <label>Step Note:
                    <input type="text" name="stepNote${phaseNum}[]" value="${step.note}" />
                  </label>
                  <div class="button-group">
                    <button type="button" class="add-step" onclick="addActionStep(${phaseNum}, this)">+</button>
                    <button type="button" class="remove-step" onclick="removeActionStep(this)">-</button>
                  </div>
                `;
                actionSteps.appendChild(stepItem);
              });
            }
          }

          // Set callout info
          const calloutInfoField = document.querySelector(`textarea[name="phaseCalloutInfo${phaseNum}"]`);
          if (calloutInfoField && formData.phaseIntros[name]) {
            calloutInfoField.value = `Important: ${formData.phaseIntros[name]}`;
          }

          // Set code block
          const codeBlockField = document.querySelector(`textarea[name="phaseCodeBlock${phaseNum}"]`);
          if (codeBlockField) {
            // Generate a sample code block based on the phase name
            const sampleCode = `# ${name}\n# Add your code examples here\n`;
            codeBlockField.value = sampleCode;
          }
        });
      }

      // Set troubleshooting items
      if (formData.troubleshooting && formData.troubleshooting.length > 0) {
        const troubleshootingContainer = document.querySelector('.troubleshooting-container');
        troubleshootingContainer.innerHTML = '';
        
        formData.troubleshooting.forEach(item => {
          const troubleshootingItem = document.createElement('div');
          troubleshootingItem.className = 'troubleshooting-item';
          troubleshootingItem.innerHTML = `
            <label>Question:
              <input type="text" name="troubleshootingTitle[]" value="${item.question}" />
            </label>
            <div class="troubleshooting-content">
              <label>Solution Label:
                <input type="text" name="troubleshootingLabel[]" value="Solution" />
              </label>
              <label>Solution Description:
                <textarea name="troubleshootingDescription[]">${item.solution}</textarea>
              </label>
            </div>
            <div class="button-group">
              <button type="button" class="add-troubleshooting" onclick="addTroubleshooting(this)">+ Add Question</button>
              <button type="button" class="remove-troubleshooting" onclick="removeTroubleshooting(this)">- Remove Question</button>
            </div>
          `;
          troubleshootingContainer.appendChild(troubleshootingItem);
        });
      }

      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error applying form data:', error);
      throw error;
    }
  }
}

// Create and export the instance
export const llmDocGenerator = new LLMDocGenerator();