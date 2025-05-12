# AI Marketplace Documentation

This repository contains the documentation for the AI Marketplace platform, built using MkDocs Material theme.

## Features

- 📱 Responsive design
- 🌓 Light and dark mode
- 🔍 Full-text search
- 📊 Mermaid diagrams support
- 🎨 Custom styling
- 📚 Comprehensive documentation structure
- 🔗 Social media integration
- 📝 Markdown support with extensions

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-org/ai-marketplace-docs.git
   cd ai-marketplace-docs
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running Locally

To preview the documentation locally:

```bash
mkdocs serve
```

Visit `http://127.0.0.1:8000` in your browser to see the documentation.

### Building for Production

To build the documentation for production:

```bash
mkdocs build
```

The built files will be in the `site` directory.

## Customization

### Configuration

The main configuration file is `mkdocs.yml`. You can modify:

- Site name and description
- Navigation structure
- Theme settings
- Plugin configurations
- Social media links

### Styling

Custom styles are in `docs/assets/stylesheets/extra.css`. You can modify:

- Colors
- Typography
- Layout
- Component styling

### Adding Content

1. Create new markdown files in the `docs` directory
2. Add them to the navigation in `mkdocs.yml`
3. Use the provided templates and components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Deployment

### Prerequisites for Deployment
- Docker installed on the deployment server
- Access to the deployment environment
- Required environment variables configured

### Deployment Steps

1. Build the Docker image:
   ```bash
   docker build -t ai-marketplace-docs .
   ```

2. Run the container:
   ```bash
   docker run -d -p 8000:8000 --name ai-marketplace-docs ai-marketplace-docs
   ```

3. For production deployment, use the following environment variables:
   ```bash
   export MKDOCS_SITE_URL=https://your-domain.com
   export MKDOCS_SITE_DESCRIPTION="AI Marketplace Documentation"
   ```

4. For HTTPS deployment, ensure SSL certificates are properly configured in your web server (nginx/apache).

### CI/CD Pipeline
The repository includes GitHub Actions workflow for automated deployment. The pipeline:
- Builds the documentation
- Runs tests
- Deploys to the specified environment

### Monitoring
- Application logs are available in the container logs
- Health check endpoint: `/health`
- Metrics endpoint: `/metrics`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please:

- Open an issue in this repository
- Contact our support team at support@ai-marketplace.com
- Visit our community forum at https://community.ai-marketplace.com 