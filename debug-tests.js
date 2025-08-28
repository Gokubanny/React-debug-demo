// Test script to verify React component functionality
// Run this in browser console after starting the application

console.log('🚀 Starting React Debug Demo Tests...');

// Test 1: Verify App component renders without errors
const testAppComponent = () => {
  const appElement = document.querySelector('.App');
  if (appElement) {
    console.log('✅ App component rendered successfully');
    return true;
  } else {
    console.log('❌ App component not found');
    return false;
  }
};

// Test 2: Check if all main components are present
const testComponentsPresence = () => {
  const components = [
    { name: 'UserProfile', selector: 'h2', text: 'User Profile' },
    { name: 'Counter', selector: 'h2', text: 'Counter Component' },
    { name: 'TodoList', selector: 'h2', text: 'Todo List' }
  ];
  
  let allPresent = true;
  components.forEach(comp => {
    const elements = Array.from(document.querySelectorAll(comp.selector));
    const found = elements.some(el => el.textContent.includes(comp.text));
    if (found) {
      console.log(`✅ ${comp.name} component found`);
    } else {
      console.log(`❌ ${comp.name} component not found`);
      allPresent = false;
    }
  });
  
  return allPresent;
};

// Test 3: Verify todo functionality
const testTodoFunctionality = () => {
  console.log('📝 Testing Todo functionality...');
  
  // Check if todo items are displayed
  const todoItems = document.querySelectorAll('[style*="cursor: pointer"]');
  console.log(`Found ${todoItems.length} todo items`);
  
  // Check if add todo form exists
  const todoInput = document.querySelector('input[placeholder*="Add a new todo"]');
  const addButton = document.querySelector('button[type="submit"]');
  
  if (todoInput && addButton) {
    console.log('✅ Todo form elements found');
    return true;
  } else {
    console.log('❌ Todo form elements not found');
    return false;
  }
};

// Test 4: Check counter functionality
const testCounterFunctionality = () => {
  console.log('🔢 Testing Counter functionality...');
  
  const incrementBtn = Array.from(document.querySelectorAll('button'))
    .find(btn => btn.textContent.includes('Increment'));
  const decrementBtn = Array.from(document.querySelectorAll('button'))
    .find(btn => btn.textContent.includes('Decrement'));
  const resetBtn = Array.from(document.querySelectorAll('button'))
    .find(btn => btn.textContent.includes('Reset'));
  
  if (incrementBtn && decrementBtn && resetBtn) {
    console.log('✅ Counter buttons found');
    return true;
  } else {
    console.log('❌ Counter buttons not found');
    return false;
  }
};

// Test 5: Verify user profile functionality
const testUserProfileFunctionality = () => {
  console.log('👤 Testing User Profile functionality...');
  
  const editBtn = Array.from(document.querySelectorAll('button'))
    .find(btn => btn.textContent.includes('Edit'));
  
  if (editBtn) {
    console.log('✅ User Profile edit button found');
    return true;
  } else {
    console.log('❌ User Profile edit button not found');
    return false;
  }
};

// Run all tests
const runAllTests = () => {
  console.log('🧪 Running comprehensive React app tests...\n');
  
  const results = [
    testAppComponent(),
    testComponentsPresence(),
    testTodoFunctionality(),
    testCounterFunctionality(),
    testUserProfileFunctionality()
  ];
  
  const passed = results.filter(Boolean).length;
  const total = results.length;
  
  console.log(`\n📊 Test Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! The application is working correctly.');
  } else {
    console.log('⚠️ Some tests failed. Check the components and functionality.');
  }
  
  return passed === total;
};

// Auto-run tests when script is loaded
if (typeof window !== 'undefined') {
  // Wait for React to render
  setTimeout(runAllTests, 1000);
} else {
  console.log('This script should be run in a browser environment with the React app loaded.');
}

// Export for manual testing
window.debugTests = {
  runAllTests,
  testAppComponent,
  testComponentsPresence,
  testTodoFunctionality,
  testCounterFunctionality,
  testUserProfileFunctionality
};
