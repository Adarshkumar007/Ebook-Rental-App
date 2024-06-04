const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;