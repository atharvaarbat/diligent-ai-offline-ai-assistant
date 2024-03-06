# AI Assistant with Ollama Integration

This project is an AI Assistant built using React and Electron, allowing users to interact with language models through the locally hosted Ollama service. The AI assistant is designed to work entirely offline, providing users with the flexibility to input prompts, system prompts/context, and select the preferred language model (LLM) for generating responses.

## Features

- **Offline Operation:** The AI assistant functions without an internet connection, ensuring user privacy and convenience.
- **Prompt Customization:** Users can input prompts and system prompts/context to tailor the AI responses based on their specific needs.
- **Model Selection:** Choose from a variety of Language Models available through the locally hosted Ollama service to get responses tailored to different contexts.
  
## Screenshots

![Screenshot 1](https://github.com/atharvaarbat/diligent-ai-offline-ai-assistant/blob/main/screenshots/Screenshot%202024-03-06%20160100.png))

![Screenshot 2](https://github.com/atharvaarbat/diligent-ai-offline-ai-assistant/blob/main/screenshots/Screenshot%202024-03-06%20160347.png)

## Installation

To use the AI Assistant, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/atharvaarbat/diligent-ai-offline-ai-assistant.git
   ```

2. Navigate to the project directory:

   ```bash
   cd diligent-ai-offline-ai-assistant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Ollama service:

   - Download and install Ollama from the [official website](https://www.ollama.ai/).
   - Start the Ollama service on your local machine.

5. Configure the Ollama service:

   - Open terminal on your machine and run
      ```bash
      ollama pull [MODEL_NAME]
      ```
   - To see the list of supported models by ollama visit [offcial Website](https://ollama.com/library)
   

6. Start the application:
   ###You can either start in node environment or run the application on electron (to create a executable file)
   ```bash
   npm run dev
   ```

## Usage

1. Launch the Ollama service on your local machine.
2. Launch the application.
3. Input the desired prompt and system prompt/context.
4. Choose the preferred Language Model from the available options.
5. Click on the "Ask Diligent" button to receive the AI-generated response.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Your feedback and suggestions are highly appreciated.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** The Ollama service is an external component, and its usage is subject to its respective terms of service and licenses. Ensure compliance with Ollama's terms and conditions when using their services.

**Disclaimer:** The AI Assistant is a project developed independently and is not affiliated with Ollama.
