from fastapi import FastAPI

app = FastAPI(
    title="Backend API",
    summary="Backend API for the frontend",
    version="0.1.0",
    docs_url="/api/",
)

app.get("/api/greet")
def greet():
    """Returns a greeting"""
    return {"message": "Hello from the backend!"}
