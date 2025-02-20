import React from 'react';

const Layout = ({ backgroundColor, children }) => {
  // Set background color dynamically on mount and cleanup on unmount
  React.useEffect(() => {
    // Store original colors to restore them later
    const originalHTMLBg = document.documentElement.style.backgroundColor;
    const originalBodyBg = document.body.style.backgroundColor;
    
    // Set the background color for both HTML and body
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
    
    return () => {
      // Cleanup - restore original colors
      document.documentElement.style.backgroundColor = originalHTMLBg;
      document.body.style.backgroundColor = originalBodyBg;
    };
  }, [backgroundColor]);

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      {children}
    </div>
  );
};

export default Layout;