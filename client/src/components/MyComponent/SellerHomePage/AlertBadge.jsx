const AlertBadge = ({type,msg}) => {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <span className={type}>
        {msg}
      </span>
    </div>
  );
};

export default AlertBadge;
