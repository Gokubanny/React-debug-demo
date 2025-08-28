import React from 'react';

// Higher-Order Component for debugging component renders
export const withRenderLogger = (WrappedComponent, componentName) => {
  return React.memo((props) => {
    console.log(`🔄 ${componentName} rendered with props:`, props);
    return <WrappedComponent {...props} />;
  });
};

// Custom hook for debugging state changes
export const useStateLogger = (state, stateName) => {
  React.useEffect(() => {
    console.log(`📊 ${stateName} state updated:`, state);
  }, [state, stateName]);
};

// Custom hook for debugging effect runs
export const useEffectLogger = (effect, deps, effectName) => {
  React.useEffect(() => {
    console.log(`⚡ Effect "${effectName}" running with deps:`, deps);
    return effect();
  }, deps);
};

// Component to display current state in UI (for debugging)
export const StateDebugger = ({ state, title = "Debug State" }) => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      maxWidth: '300px',
      zIndex: 9999
    }}>
      <h4 style={{ margin: '0 0 10px 0' }}>{title}</h4>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

// Performance monitor for component renders
export const useRenderCount = (componentName) => {
  const renderCount = React.useRef(0);
  
  React.useEffect(() => {
    renderCount.current++;
    console.log(`🔢 ${componentName} render count: ${renderCount.current}`);
  });
  
  return renderCount.current;
};

// Hook to track prop changes
export const usePropChanges = (props, componentName) => {
  const prevProps = React.useRef();
  
  React.useEffect(() => {
    if (prevProps.current) {
      const changedProps = Object.keys(props).reduce((acc, key) => {
        if (prevProps.current[key] !== props[key]) {
          acc[key] = {
            from: prevProps.current[key],
            to: props[key]
          };
        }
        return acc;
      }, {});
      
      if (Object.keys(changedProps).length > 0) {
        console.log(`🔄 ${componentName} prop changes:`, changedProps);
      }
    }
    prevProps.current = props;
  });
};

// Debug panel component
export const DebugPanel = ({ show = true, children }) => {
  if (!show || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      background: 'rgba(255,255,255,0.95)',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '15px',
      maxWidth: '400px',
      fontSize: '12px',
      zIndex: 9999,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Debug Panel</h4>
      {children}
    </div>
  );
};
