module.exports = {
    title: "Getting Started Guide",
    description: "Learn how to get started quickly.",
    estimated_time: "5 minutes",
    icon_path: "/icons/start.svg",
    icon_alt: "Start Icon",
  
    toc_items: [
      { title: "Introduction", anchor: "introduction" },
      { title: "Setup", anchor: "setup" },
      { title: "Usage", anchor: "usage" }
    ],
  
    prerequisites: [
      "Basic knowledge of HTML/CSS",
      "Node.js installed"
    ],
  
    workflow_title: "Guide Workflow",
    workflow_phases: [
      { icon_class: "icon-download", icon_svg: "...", label: "Download" },
      { icon_class: "icon-install", icon_svg: "...", label: "Install" }
    ],
  
    phases: [
      {
        phase_title: "Phase One",
        feature_grid: [
          { name: "Feature A", description: "Description A" },
          { name: "Feature B", description: "Description B" }
        ],
        config_grid: [
          { key: "Key 1", value: "Value 1" },
          { key: "Key 2", value: "Value 2" }
        ]
      }
      // Add more phases as needed
    ],
  
    troubleshooting: [
      { issue: "Error on install", solution: "Try reinstalling Node.js" }
    ],
  
    help_options: {
      support_email: "support@example.com",
      community_link: "https://community.example.com "
    }
  };