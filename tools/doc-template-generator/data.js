// Sample data for the documentation generator
const sampleData = {
  guideTitle: "Sample Documentation Guide",
  guideDescription: "This is a sample guide to demonstrate the documentation generator",
  estimatedTime: "~30 minutes",
  guideIconSrc: "/assets/Brain.svg",
  guideIconAlt: "Sample Guide",
  tocItems: ["Introduction", "Setup", "Usage", "Troubleshooting"],
  prerequisites: ["Basic knowledge", "Required tools"],
  workflowOverviewTitle: "Implementation Workflow",
  phaseNames: ["Planning", "Implementation", "Testing"],
  phaseIntros: {
    1: "Begin by planning your implementation",
    2: "Implement the core functionality",
    3: "Test the implementation thoroughly"
  },
  features: {
    1: [{ title: "Feature 1", description: "Description 1" }],
    2: [{ title: "Feature 2", description: "Description 2" }],
    3: [{ title: "Feature 3", description: "Description 3" }]
  },
  actionSteps: {
    1: [{ highlight: "Step 1", note: "First step description" }],
    2: [{ highlight: "Step 2", note: "Second step description" }],
    3: [{ highlight: "Step 3", note: "Third step description" }]
  },
  troubleshooting: [
    { question: "Common Issue 1", solution: "Solution to issue 1" },
    { question: "Common Issue 2", solution: "Solution to issue 2" }
  ]
};

// Make sample data available globally
window.sampleData = sampleData;