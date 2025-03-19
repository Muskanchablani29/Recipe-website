class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Slider Error:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>Something went wrong with the facts slider.</div>;
      }
  
      return this.props.children;
    }
  }
  
  // Then wrap your component with it:
  export default React.memo(() => (
    <ErrorBoundary>
      <InterestingFacts />
    </ErrorBoundary>
  ));
  