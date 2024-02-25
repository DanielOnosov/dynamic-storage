## Examples

### Example 1: Basic Usage

#### Description
A simple example demonstrating the basic usage of the library.

#### Code
```html
<script src="dynamic-storage"></script>
<script>
        const storage = new DynamicStorage()
        const storageObj = storage.value()
        // storageObj.myVal2 = {1: {2: {3: 4}}}
        storageObj.myVal2[1][2][3] = 5
        storageObj.myVal2[1][2][3] = {4: 5}
        storageObj.myVal = {1: {data: 2}}
        console.log(storageObj.myVal)
</script>
