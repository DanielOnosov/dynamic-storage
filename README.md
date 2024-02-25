# dynamic-storage

[![npm version](https://badge.fury.io/js/your-library-name.svg)](https://badge.fury.io/js/dynamic-storage)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[//]: # ([![Build Status]&#40;https://travis-ci.org/your-username/your-repo.svg?branch=master&#41;]&#40;https://travis-ci.org/DaksinWorld/dynamic-storage&#41;)

dynamic-storage is a wrapper around localStorage that simplifies manipulations, such as dynamic state updates, JSON
parsing and working with objects.

## Installation

Install the package using npm:

```bash
npm install dynamic-storage
```

Import and initialize.

```js
import DynamicStorage from "../index.js";

const storage = DynamicStorage.init()
```

## Examples

### Example 1: Dynamic State Updating

#### Description

This example demonstrates best practices for achieving dynamic state updating.

#### Code

```html
<script type="module">
import DynamicStorage from 'dynamic-storage';        

const storage = DynamicStorage.init()

// ❌ Not dynamic
let access_token = storage.access_token;
console.log(access_token);

access_token = "new value";
console.log(access_token); // won't be updated

// ✅ Instead use this:
let access_token = () => storage.access_token;
console.log(access_token()); // log: "initial value"

access_token = "new value";
console.log(access_token()); // log: "new value"

</script>
```

### Example 2: Working with Objects

#### Description

This example demonstrates how to work with objects using the library, following standard JavaScript principles.

#### Code

```html
<script type="module">
import DynamicStorage from 'dynamic-storage';        

const storage = DynamicStorage.init()

// ❌ Won't work if 'data' is empty
storage.data.user.name = "Ben";

// ✅ Use this if 'data' is empty
storage.data = {user: {name: "Ben"}}

console.log(storage.data.user.name) // log: "Ben"
storage.data.user.name = "Alex";

// Same logic with arrays
storage.values = [1,2,3,4,5]
console.log(storage.values[0]) // log: 1

storage.values[0] = 6
console.log(storage.values[0]) // log: 6
</script>
```

### Example 3: Removing Items from localStorage

#### Description

This example shows how to remove a single item from localStorage or completely clear localStorage using the library.

#### Code

```html
<script type="module">
    import DynamicStorage from 'dynamic-storage';

    const storage = DynamicStorage.init()

    storage.access_token = undefined // Because value is undefined, it will be removed from localStorage

    DynamicStorage.clear() // Clears localStorage  
</script>
```

### Contributing

We welcome pull requests. For major changes, please first open an issue to discuss what you would like to change.

Before committing code, please ensure the following:

- **Descriptive Naming**: Use meaningful names for variables, functions, and classes.
- **Consistent Formatting**: Follow a consistent coding style for indentation, spacing, and brace placement.
- **Modular Functions**: Keep functions focused on singular tasks for readability and reusability.
- **Purposeful Comments**: Include comments that explain the 'why' rather than just the 'what'.
- **Eliminate Redundancy**: Remove redundant code, unused variables, and unnecessary functions to reduce clutter.

#### Tips for Writing Good Commit Messages:

- **Be Specific**: Focus on describing the change itself, not why or how it was done.
- **Use Present Tense**: Write in the present tense for a command-like style (e.g., "Add feature" instead of "Added
  feature").
- **Stay Concise**: Keep the summary line short but informative.
- **Separate Concerns**: Consider splitting multiple changes into separate commits with clear messages.
- **Proofread**: Ensure your commit messages reflect professionalism and attention to detail.