import React from "react";

const SellerNotification = ({ sellernotify }) => {
  return (
    <div className="notification-card shadows">
      <div className="notification-badge">
        <span
          className={`badge ${
            sellernotify.type === "credit"
              ? "bg-success-subtle border border-success-subtle text-success-emphasis"
              : "bg-danger-subtle border border-danger-subtle text-danger-emphasis"
          } rounded-pill`}
        >
          {sellernotify.type === "subscribe" ? "Subscribed" : "Credited"}
        </span>
        <div>{sellernotify.date}</div>
      </div>
      <div className="notification-Message">
        {sellernotify.type === "subscribe" ? (
          <>
            Congratulation!{" "}
            <span style={{ color: "red" }}>{sellernotify.user}</span> has
            subscribed to the book <strong>{sellernotify.book}</strong>.
          </>
        ) : (
          <>
            Congratulation!{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              ₹ {sellernotify.amount}
            </span>{" "}
            has been credited successfully to your account.
          </>
        )}
      </div>
    </div>
  );
};

export default SellerNotification;
