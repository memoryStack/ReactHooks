// Note this is a fake API. Goal argument is ignored here
export const fetchGreeting = (userType, goal) => {
    return new Promise((resolve, reject) => {
      if (userType === 'customer') {
        resolve('Try React Hooks in your personal project');
      } else if (userType === 'consultant') {
        resolve('Read awesome tips for your business');
      }
      reject('Unknown user');
    });
  };
  
  export const fetchProfile = userType => {
    return new Promise((resolve, reject) => {
      if (userType === 'customer') {
        resolve({ goal: 'Learn' });
      } else if (userType === 'consultant') {
        resolve({ goal: 'Grow' });
      }
      reject('Unknown user');
    });
  };
  