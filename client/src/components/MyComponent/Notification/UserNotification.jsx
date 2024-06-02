const UserNotification = ({ BookExpired }) => {
  return (
    <div className="notification-card shadows">
      <div className="notification-badge">
        <span className="badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill">
          Expired
        </span>
        <div>{BookExpired.date}</div>
      </div>
      <div className="notification-Message">
        <span className="notification-book-title"><strong>{BookExpired.book}</strong></span>
        book has been expired.
      </div>
    </div>
  );
};
export default UserNotification;
