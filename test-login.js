// Test Google Login
const testGoogleLogin = () => {
  const testUser = {
    name: 'Google User',
    firstName: 'Google',
    email: 'test@gmail.com'
  };
  
  localStorage.setItem('token', 'google-test-token');
  localStorage.setItem('user', JSON.stringify(testUser));
  
  alert('🎉 Google Login Successful! Welcome to Fusion Gaming!');
  window.location.reload();
};

// Run this in browser console to test
console.log('Run testGoogleLogin() to test login');