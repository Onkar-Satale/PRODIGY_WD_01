import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
        navigate("/login");
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card style={{ width: "28rem" }} className="p-4 text-center shadow">
                <h2 className="mb-3">Welcome to Your Dashboard</h2>
                <p className="mb-4">This is a protected route accessible only after login.</p>
                <Button variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            </Card>
        </Container>
    );
}

export default Dashboard;
