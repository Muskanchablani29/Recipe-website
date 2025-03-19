const InterestingFacts = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate checking if slider is ready
      setIsLoading(false);
    }, []);
  
    if (isLoading) {
      return <div>Loading facts...</div>;
    }
  
    // Rest of the component code...
  };
  