import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "./MyComponent/ProfileImage";
import ProfileInput from "./MyComponent/ProfileInput";
import SuccessButton from "./MyComponent/SuccessButton";
import ProfileInputEmail from "./MyComponent/ProfileInputEmail";
import Loading from "./MyComponent/Loading";
import { url } from "../../src/url";
import AlertBadge from "./MyComponent/SellerHomePage/AlertBadge";

function UserProfile({ userType }) {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editFields, setEditFields] = useState({});
  var x = 0;

  useEffect(() => {
    if (x === 0) {
      x++;
      axios
        .get(url + "/profile", {
          params: { userType: userType },
          headers: {
            Authorization: `Bearer ${
              userType === "seller"
                ? localStorage.getItem("sellertoken")
                : localStorage.getItem("token")
            }`,
          },
        })
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
          setError("Error fetching profile");
        });
    }
  }, [userType]);

  if (!profile) {
    return (
      <>
        {error ? (
          <h3>
            <div
              className="error"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "red",
              }}
            >
              {error}
            </div>
          </h3>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </>
    );
  }

  const handleSetFile = (file) =>
    setProfile({ ...profile, profile_image: file });
  const handleSetUsername = (value) =>
    setProfile({ ...profile, username: value });
  const handleSetEmail = (value) => setProfile({ ...profile, email: value });
  const handleSetPhone = (value) => setProfile({ ...profile, phone: value });
  const handleSetPin = (value) => setProfile({ ...profile, pin: value });
  const handleSetAddress = (value) =>
    setProfile({ ...profile, address: value });

  // Validation functions
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name.trim());
  const validatePin = (pin) => /^[0-9]{6}$/.test(pin);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleProfileClick = async () => {
    if (
      !profile.username ||
      !profile.address ||
      !profile.pin ||
      !profile.phone
    ) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    if (!validateName(profile.username)) {
      setError("Username should contain only alphabets and spaces.");
      setSuccess("");
      return;
    }

    if (!validatePin(profile.pin)) {
      setError("Invalid PIN code.");
      setSuccess("");
      return;
    }

    if (!validatePhone(profile.phone)) {
      setError("Invalid phone number.");
      setSuccess("");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("username", profile.username);
    formData.append("email", profile.email);
    formData.append("password", profile.password);
    formData.append("address", profile.address);
    formData.append("pin", profile.pin);
    formData.append("phone", profile.phone);
    formData.append("userType", userType);
    if (profile.profile_image instanceof File)
      formData.append("profile_image", profile.profile_image);

    try {
      const res = await axios.post(url + "/profileupdate", formData, {
        headers: {
          Authorization: `Bearer ${
            userType === "seller"
              ? localStorage.getItem("sellertoken")
              : localStorage.getItem("token")
          }`,
        },
      });
      setError("");
      setSuccess(res.data.message);
      setEditFields({});
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  const handleEdit = (field) => {
    setEditFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setEditFields((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div>
      {error && (
        <div
          className="error"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <AlertBadge
            type="badge bg-danger-subtle text-danger-emphasis rounded-pill"
            msg={error}
          />
        </div>
      )}
      {success && (
        <div
          className="success"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <AlertBadge
            type="badge bg-success-subtle text-success-emphasis rounded-pill"
            msg={success}
          />
        </div>
      )}
      <ProfileImage
        image={profile.profile_image ? profile.profile_image : ""}
        handleSetFile={handleSetFile}
      />
      <ProfileInputEmail
        value={profile.email}
        type="email"
        handleInput={handleSetEmail}
        label="Email"
        editMode={editFields.email}
        handleEdit={() => handleEdit("email")}
        handleSave={() => handleSave("email")}
      />
      <ProfileInput
        value={profile.username}
        type="text"
        handleInput={handleSetUsername}
        label="Username"
        editMode={editFields.username}
        handleEdit={() => handleEdit("username")}
        handleSave={() => handleSave("username")}
      />
      <ProfileInput
        value={profile.address}
        type="text"
        handleInput={handleSetAddress}
        label="Address"
        editMode={editFields.address}
        handleEdit={() => handleEdit("address")}
        handleSave={() => handleSave("address")}
      />
      <ProfileInput
        value={profile.pin}
        type="text"
        handleInput={handleSetPin}
        label="Pin"
        editMode={editFields.pin}
        handleEdit={() => handleEdit("pin")}
        handleSave={() => handleSave("pin")}
      />
      <ProfileInput
        value={profile.phone}
        type="tel"
        handleInput={handleSetPhone}
        label="Phone"
        editMode={editFields.phone}
        handleEdit={() => handleEdit("phone")}
        handleSave={() => handleSave("phone")}
      />
      <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SuccessButton
          myval="Save"
          onClick={handleProfileClick}
          style={{ backgroundColor: "green" }}
        />
      </div>
    </div>
  );
}

export default UserProfile;
