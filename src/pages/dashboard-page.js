import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { getProfile, isTokenValid, getCurrentUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import "../CSS/dashboard.css";

const headerBg = "/img/dashboard.jpg";
const foodImagePlaceholder = "/img/image-27.png";

const Dashboard = () => {
  const { updateUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const hasFetchedData = useRef(false);

  const [profileData, setProfileData] = useState({
    nama: "User",
    berat: 0,
    tinggi: 0,
    usia: 0,
    bmi: 0,
    recommendation: "Belum ada data",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Prevent double fetch
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;

    const fetchDashboardData = async () => {
      try {
        // Cek validitas token terlebih dahulu
        if (!isTokenValid()) {
          console.log("❌ Token tidak valid, redirect ke login");
          navigate("/login");
          return;
        }

        // Debug: Log current user info
        const currentUser = getCurrentUser();
        console.log("🔍 Current user dari token:", currentUser);

        if (!currentUser || (!currentUser.userId && !currentUser.email)) {
          console.log(
            "❌ User ID tidak ditemukan dalam token, redirect ke login"
          );
          localStorage.clear();
          navigate("/login");
          return;
        }

        console.log(
          "🔍 Fetching dashboard data untuk user:",
          currentUser.userId
        );

        // Fetch profile data
        const profileResponse = await getProfile();
        console.log("✅ Profile data berhasil diambil:", profileResponse);

        if (profileResponse && profileResponse.data) {
          const profile = profileResponse.data;

          // Calculate BMI
          let bmi = 0;
          if (profile.berat && profile.tinggi) {
            bmi = profile.berat / (profile.tinggi / 100) ** 2;
          }

          // Get recommendation
          let recommendation = "Belum ada data";
          if (bmi > 0) {
            if (bmi < 18.5) {
              recommendation = "Underweight - Perlu menambah berat badan";
            } else if (bmi < 25) {
              recommendation = "Normal - Pertahankan pola hidup sehat";
            } else if (bmi < 30) {
              recommendation = "Overweight - Perlu menurunkan berat badan";
            } else {
              recommendation = "Obese - Konsultasi dengan dokter";
            }
          }

          const updatedProfileData = {
            nama: profile.nama || currentUser.email?.split("@")[0] || "User",
            berat: profile.berat || 0,
            tinggi: profile.tinggi || 0,
            usia: profile.usia || 0,
            bmi: bmi > 0 ? parseFloat(bmi.toFixed(1)) : 0,
            recommendation: recommendation,
          };

          setProfileData(updatedProfileData);

          // Update context
          updateUserData(profile);

          console.log("✅ Dashboard data berhasil di-set:", updatedProfileData);
        }
      } catch (error) {
        console.error("❌ Failed to fetch dashboard data:", error);

        // Handle berbagai jenis error
        if (
          error.message.includes("Token tidak ditemukan") ||
          error.message.includes("Token tidak valid") ||
          error.message.includes("Token expired") ||
          error.message.includes("User ID tidak valid")
        ) {
          console.log(
            "🔄 Token/Auth error, clearing storage dan redirect ke login"
          );
          localStorage.clear();
          navigate("/login");
          return;
        }

        if (
          error.message.includes("Profil tidak ditemukan") ||
          error.message.includes("Profile not found")
        ) {
          console.log(
            "🔄 Profile tidak ditemukan, redirect ke form personality"
          );
          setError("Profil belum dibuat. Mengarahkan ke form profil...");
          setTimeout(() => {
            navigate("/form-personality");
          }, 2000);
          return;
        }

        // Error lainnya
        setError(`Gagal memuat data dashboard: ${error.message}`);

        // Jika error berkepanjangan, tawarkan untuk login ulang
        setTimeout(() => {
          if (
            window.confirm(
              "Terjadi masalah saat memuat data. Ingin login ulang?"
            )
          ) {
            localStorage.clear();
            navigate("/login");
          }
        }, 5000);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate, updateUserData]);

  // Loading state
  if (loading) {
    return (
      <div className="dashboard-container">
        <Container className="py-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h3 className="mt-3">Memuat data dashboard...</h3>
            <p>Mohon tunggu sebentar</p>
          </div>
        </Container>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="dashboard-container">
        <Container className="py-5">
          <div className="text-center">
            <div className="alert alert-danger">
              <h4>⚠️ Terjadi Masalah</h4>
              <p>{error}</p>
              <button
                className="btn btn-primary mt-2"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Kembali ke Login
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Container className="p-0">
        <div
          className="dashboard-header py-5"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <Container>
            <h2 className="header-text">Selamat Datang, {profileData.nama}</h2>
          </Container>
        </div>

        <Container className="py-4">
          <Row className="mb-4">
            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="info-card-title">
                    Berat Badan
                  </Card.Title>
                  <Card.Text className="info-card-title">
                    {profileData.berat} KG
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="info-card-title">
                    Tinggi Badan
                  </Card.Title>
                  <Card.Text className="info-card-title">
                    {profileData.tinggi} CM
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="info-card-title">BMI</Card.Title>
                  <Card.Text className="info-card-title">
                    {profileData.bmi}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="info-card-title">Usia</Card.Title>
                  <Card.Text className="info-card-title">
                    {profileData.usia} Tahun
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* BMI Recommendation */}
          <Row className="mb-4">
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-center mb-3">
                    Rekomendasi Kesehatan
                  </Card.Title>
                  <Card.Text className="text-center">
                    <strong>{profileData.recommendation}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Food Recommendations */}
          <Row className="g-3 food-cards-row mb-5">
            <Col xs={12}>
              <h4 className="mb-3">Rekomendasi Makanan</h4>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 shadow-sm food-card">
                <Card.Img
                  variant="top"
                  src={foodImagePlaceholder}
                  alt="Big and Juicy Wagyu Beef Cheeseburger"
                  className="food-card-img"
                />
                <Card.Body>
                  <Card.Text className="food-card-text">
                    Big and Juicy Wagyu Beef Cheeseburger
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 shadow-sm food-card">
                <Card.Img
                  variant="top"
                  src={foodImagePlaceholder}
                  alt="Fresh Lime Roasted Salmon with Ginger Sauce"
                  className="food-card-img"
                />
                <Card.Body>
                  <Card.Text className="food-card-text">
                    Fresh Lime Roasted Salmon with Ginger Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 shadow-sm food-card">
                <Card.Img
                  variant="top"
                  src={foodImagePlaceholder}
                  alt="Strawberry Oatmeal Pancake with Honey Syrup"
                  className="food-card-img"
                />
                <Card.Body>
                  <Card.Text className="food-card-text">
                    Strawberry Oatmeal Pancake with Honey Syrup
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 shadow-sm food-card">
                <Card.Img
                  variant="top"
                  src={foodImagePlaceholder}
                  alt="Chicken Meatballs with Cream Cheese"
                  className="food-card-img"
                />
                <Card.Body>
                  <Card.Text className="food-card-text">
                    Chicken Meatballs with Cream Cheese
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
