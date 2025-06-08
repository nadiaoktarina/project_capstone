import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function GoogleSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    const userId = searchParams.get("userId");
    const isNewUser = searchParams.get("isNewUser") === "true";

    console.log("🔍 Google login callback data:", {
      token: token ? token.substring(0, 20) + "..." : null,
      email,
      userId,
      isNewUser,
    });

    if (token && email && userId) {
      try {
        // Validasi token format sebelum menyimpan
        const parts = token.split(".");
        if (parts.length !== 3) {
          throw new Error("Token format tidak valid");
        }

        // Decode dan validasi payload
        const payload = JSON.parse(atob(parts[1]));
        console.log("🔍 Token payload:", payload);

        // Cek apakah token memiliki user ID
        const tokenUserId = payload.userId || payload.id || payload.user_id;
        if (!tokenUserId) {
          throw new Error("Token tidak mengandung User ID");
        }

        // Cek apakah token expired
        const currentTime = Date.now() / 1000;
        if (payload.exp && payload.exp < currentTime) {
          throw new Error("Token sudah expired");
        }

        // Clear existing data dan simpan yang baru
        localStorage.clear();

        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", userId);

        console.log("✅ Google login data berhasil disimpan:", {
          tokenUserId,
          email,
          userId,
          expires: new Date(payload.exp * 1000),
        });

        // Delay sebentar untuk memastikan data tersimpan
        setTimeout(() => {
          if (isNewUser) {
            console.log("🔄 Redirecting to form-personality (new user)");
            navigate("/form-personality");
          } else {
            console.log("🔄 Redirecting to dashboard (existing user)");
            navigate("/dashboard");
          }
        }, 500);
      } catch (error) {
        console.error("❌ Error processing Google login:", error);
        alert("Login Google gagal: " + error.message);
        navigate("/login");
      }
    } else {
      console.error("❌ Google login gagal: parameter tidak lengkap", {
        hasToken: !!token,
        hasEmail: !!email,
        hasUserId: !!userId,
      });

      alert("Login Google gagal: Data tidak lengkap");
      navigate("/login");
    }
  }, [navigate, searchParams]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h3>Memproses login Google...</h3>
        <p>Mohon tunggu sebentar</p>
      </div>
    </div>
  );
}

export default GoogleSuccessPage;
