const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;
  
    return (
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    );
};
  
export default ProgressBar;