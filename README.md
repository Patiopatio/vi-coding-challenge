# VI Coding Challenge

Live preview: [Vercel - deployed solution](https://vi-coding-challenge.vercel.app/)

Implementation of the design and created examples stories for the components.

## Setup

In order to run the project locally use:

```bash
npm install;
npm run dev;
```

for running storybook locally use:

```bash
npm run storybook;
```

In order to build the project use:

```bash
npm run build;
npm run preview; # for a live preview of the build
```

for building storybook use:

```bash
npm run build-storybook
```

## Requirements

Goal is to have the view implemented, structured in reusable components and documented via storybook stories.

The structure of the project is:

- the Index.vue view as container for the whole page
- the reusable sub components
  - Hero.vue
  - Contact.vue
  - Button.vue
- styles.css - main style file with design system relevant stylings.

## Initial assumptions

In this coding challenge, the following assumptions has been completed.

Disclaimer: In a real ticket from a backlog I would ask for requirements first and discuss the unknowns with stakeholders before I would start implementing the components.

- Assume that Headline CTA title and description are missing text / have typos - I adjusted the text.
- Assume mobile first design with media queries for mobile, tablet and desktop screens, with basic viewports of tablet bigger than 768px and desktop bigger than 1024px.
- assume that reusable components are part of a bigger design system
- colors and fonts are easily customizable via css variables

## Possible Improvements

While this project meets the core requirements, there are several areas where improvements can be made:

1. **Code Structure**: Organising components folder into multiple directories, possible to use feature-driven structure.

2. **CSS Variables**: Use CSS variables (custom properties) to manage colors, fonts, and other design-related properties. This promotes maintainability and consistency. Collaborate with UX/UI team to establish the design system.

3. **Typography**: Implement a typography system to ensure consistent and responsive text styles across the application.

4. **Branches and Commits**: In a real-life project, use branching and meaningful commit messages with reference to a ticket number to collaborate effectively with team members. Follow Git best practices.

## Next Level

1. **Modularization**: Break down components into smaller, reusable parts for scalability.

2. **Localisation**: Add support for multiple languages by implementing localisation and translation.

3. **Accessibility**: Ensure that the application complies with accessibility standards (e.g., WCAG) to make it usable for everyone.

4. **Responsive Design**: Enhance the application's responsiveness for more realistic customer based screen sizes and devices.

5. **Documentation**: Create comprehensive documentation using tools like JSDoc for code comments and Markdown for project documentation. Especially in storybook.

Thank you for your time and your feedback!
It means a lot to me.

The challenge took around 6 hours to develop.
