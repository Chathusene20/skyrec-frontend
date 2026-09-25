import axios from "axios";
import { useEffect, useState } from "react";
import mediaUpload from "../utils/mediaUpload";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UserSettings() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    // Get current user data
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/login";
            return;
        }

        axios
            .get(import.meta.env.VITE_API_URL + "/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);

                // Set existing profile image
                setImage(res.data.image || "");

                setUser(res.data);
            })
            .catch((err) => {
                console.error("Error loading user:", err);

                localStorage.removeItem("token");
                window.location.href = "/login";
            });
    }, []);

    // Update user information
    async function updateUserData() {
        try {
            if (!user) {
                toast.error("User information not loaded");
                return;
            }

            // Keep existing image unless a new image is selected
            let imageLink = user.image || "";

            // Upload new image if selected
            if (imageFile) {
                imageLink = await mediaUpload(imageFile);
            }

            const data = {
                firstName: firstName,
                lastName: lastName,
                image: imageLink,
            };

            await axios.put(
                import.meta.env.VITE_API_URL + "/api/users/me",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            toast.success("Profile updated successfully");

            // Update local user state
            setUser({
                ...user,
                firstName: firstName,
                lastName: lastName,
                image: imageLink,
            });

            // Clear selected file
            setImageFile(null);

            navigate("/");
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error("Failed to update profile");
        }
    }

    // Update password
    async function updatePassword() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (!password) {
            toast.error("Please enter a new password");
            return;
        }

        try {
            await axios.put(
                import.meta.env.VITE_API_URL + "/api/users/me/password",
                {
                    password: password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            toast.success("Password updated successfully");

            setPassword("");
            setConfirmPassword("");

            navigate("/");
        } catch (err) {
            console.error("Error updating password:", err);
            toast.error("Failed to update password");
        }
    }

    // Handle profile image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Store actual file for uploading
            setImageFile(file);

            // Create preview URL
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="w-full min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-12">

            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-stretch">

                {/* LEFT PANEL - USER INFORMATION */}
                <div className="w-full lg:w-1/2 min-h-[550px] bg-primary/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-[fadeInLeft_0.7s_ease-out]">

                    {/* Heading */}
                    <div className="text-center mb-7">
                        <h1 className="text-3xl font-bold text-secondary">
                            User Information
                        </h1>

                        <p className="text-gray-600 mt-2">
                            Manage your personal information
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className="flex flex-col items-center mb-7">

                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent bg-white flex items-center justify-center shadow-lg mb-4">

                            {image ? (
                                <img
                                    src={image}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-secondary text-4xl font-bold">
                                    👤
                                </span>
                            )}

                        </div>

                        <label
                            htmlFor="profileImage"
                            className="cursor-pointer px-5 py-2 rounded-full bg-secondary text-white font-semibold hover:bg-accent transition duration-300"
                        >
                            Choose Profile Picture
                        </label>

                        <input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                    </div>

                    {/* First Name */}
                    <label className="text-secondary font-semibold mb-2">
                        First Name
                    </label>

                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        className="w-full px-4 py-3 mb-5 rounded-xl border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />

                    {/* Last Name */}
                    <label className="text-secondary font-semibold mb-2">
                        Last Name
                    </label>

                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        className="w-full px-4 py-3 mb-7 rounded-xl border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />

                    {/* Update Button */}
                    <button
                        onClick={updateUserData}
                        className="w-full mt-auto py-3.5 rounded-xl bg-accent text-white font-bold text-lg hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition duration-300"
                    >
                        Update User Information
                    </button>

                </div>

                {/* RIGHT PANEL - CHANGE PASSWORD */}
                <div className="w-full lg:w-1/2 min-h-[550px] bg-primary/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-[fadeInRight_0.7s_ease-out]">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">

                            <span className="text-2xl text-white">
                                🔒
                            </span>

                        </div>

                        <h1 className="text-3xl font-bold text-secondary">
                            Change Password
                        </h1>

                        <p className="text-gray-600 mt-2">
                            Keep your account secure
                        </p>
                    </div>

                    {/* New Password */}
                    <label className="text-secondary font-semibold mb-2">
                        New Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 mb-6 rounded-xl border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />

                    {/* Confirm Password */}
                    <label className="text-secondary font-semibold mb-2">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your new password"
                        className="w-full px-4 py-3 mb-8 rounded-xl border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />

                    {/* Password Hint */}
                    <div className="bg-white/50 rounded-xl p-4 mb-8">
                        <p className="text-sm text-secondary">
                            Make sure your new password is strong and
                            different from your previous password.
                        </p>
                    </div>

                    {/* Change Password Button */}
                    <button
                        onClick={updatePassword}
                        className="w-full mt-auto py-3.5 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-accent hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition duration-300"
                    >
                        Change Password
                    </button>

                </div>

            </div>

        </div>
    );
}