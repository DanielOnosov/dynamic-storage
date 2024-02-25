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