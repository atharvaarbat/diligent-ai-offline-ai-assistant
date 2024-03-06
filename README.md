# AI Assistant with Ollama Integration

This project is an AI Assistant built using React and Electron, allowing users to interact with language models through the locally hosted Ollama service. The AI assistant is designed to work entirely offline, providing users with the flexibility to input prompts, system prompts/context, and select the preferred language model (LLM) for generating responses.

## Features

- **Offline Operation:** The AI assistant functions without an internet connection, ensuring user privacy and convenience.
- **Prompt Customization:** Users can input prompts and system prompts/context to tailor the AI responses based on their specific needs.
- **Model Selection:** Choose from a variety of Language Models available through the locally hosted Ollama service to get responses tailored to different contexts.

## Installation

To use the AI Assistant, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-assistant.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-assistant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Ollama service:

   - Download and install Ollama from the [official website](https://www.ollama.ai/).
   - Start the Ollama service on your local machine.

5. Configure the Ollama service:

   - Open the `config.js` file.
   - Update the `ollamaServiceUrl` with the URL where the Ollama service is running.

   ```javascript
   // config.js

   const config = {
     ollamaServiceUrl: 'http://localhost:ollama-port',
   };

   export default config;
   ```

6. Start the application:

   ```bash
   npm start
   ```

## Usage

1. Launch the Ollama service on your local machine.
2. Launch the application.
3. Input the desired prompt and system prompt/context.
4. Choose the preferred Language Model from the available options.
5. Click on the "Generate" button to receive the AI-generated response.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Your feedback and suggestions are highly appreciated.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** The Ollama service is an external component, and its usage is subject to its respective terms of service and licenses. Ensure compliance with Ollama's terms and conditions when using their services.

**Disclaimer:** The AI Assistant is a project developed independently and is not affiliated with Ollama.
