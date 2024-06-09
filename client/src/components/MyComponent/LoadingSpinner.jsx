const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner">
      <div className="spinner-border text-primary" role="status" style={{color:"#000d42 !important"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;