# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
One Time Only Call Functions.
  If we want a function to only run for the first time a button i clicked and not on the subsequent clicks 

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*