# Photo Editor Web App Documentation

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the Photo Editor web application documentation! This web app is built using React with TypeScript and provides a user-friendly interface for adjusting images using CSS filters, cropping with the advanced-react-cropper, uploading and downloading images with applied edits. The edited image is rendered on a canvas in the background, allowing users to download their customized images.

We've used Tailwind CSS for styling and Redux Toolkit for state management to make the application interactive and responsive.

## Features

1. **Image Adjustment:**

   - Apply CSS filters to adjust the image appearance, such as brightness, contrast, saturation, and more.

2. **Cropping:**

   - Utilize the advanced-react-cropper component for precise image cropping.

3. **Image Upload and Download:**

   - Upload your images for editing, and download the edited images with applied filters and crops.

4. **Canvas Rendering:**
   - Images are rendered on a canvas in the background, ensuring that the user can download the edited image.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your development machine.
- Familiarity with React, TypeScript, and Redux Toolkit.
- A code editor (e.g., Visual Studio Code) for development.

## Folder Structure

The project folder structure is organized as follows:

- `src/` - Contains the source code for the application.
  - `components/` - Reusable React components.
  - `store/` - Redux Toolkit slices and state management.
  - `hooks/` - Utility functions or custome hooks.
- `public/` - Public files like HTML templates.
- `package.json` - Project dependencies and scripts.
- `tailwind.config.js` - Tailwind CSS configuration.
- `redux/store.js` - Redux store setup.

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- advanced-react-cropper
- HTML5 Canvas
- Fontawsome

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Test your changes.
5. Submit a push request.

Please review the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Thank you for using the Photo Editor web app. If you have any questions or need further assistance, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for contact information. Enjoy editing your photos!
