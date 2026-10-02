from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib


# -----------------------------------
# Create FastAPI application
# -----------------------------------

app = FastAPI(
    title="Heart Disease Prediction API",
    description="ML-based Heart Disease Prediction using Random Forest",
    version="1.0"
)


# -----------------------------------
# Enable CORS
# -----------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------------
# Load trained model
# -----------------------------------

model = joblib.load("model.pkl")
columns = joblib.load("columns.pkl")


# -----------------------------------
# Input data structure
# -----------------------------------

class PatientData(BaseModel):

    Age: float
    Sex: str
    ChestPainType: str
    RestingBP: float
    Cholesterol: float
    FastingBloodSugar: str
    RestingECG: str
    MaxHeartRate: float
    ExerciseAngina: str
    Oldpeak: float
    Slope: str
    CA: int
    Thalassemia: str


# -----------------------------------
# Home / Health check endpoint
# -----------------------------------

@app.get("/")
def home():

    return {
        "message": "Heart Disease Prediction API is running",
        "status": "success"
    }


# -----------------------------------
# Prediction endpoint
# -----------------------------------

@app.post("/predict")
def predict(data: PatientData):

    # Convert received data into dictionary
    input_data = data.model_dump()

    # Convert dictionary into DataFrame
    input_df = pd.DataFrame([input_data])

    # Make prediction
    prediction = model.predict(input_df)[0]

    # Get prediction probability
    probability = model.predict_proba(input_df)[0]

    # Probability of heart disease
    disease_probability = probability[1] * 100

    # Convert prediction into readable result
    if prediction == 1:

        result = "High Risk"
        message = "The model predicts a higher risk of heart disease."

    else:

        result = "Low Risk"
        message = "The model predicts a lower risk of heart disease."

    return {
        "prediction": int(prediction),
        "result": result,
        "probability": round(disease_probability, 2),
        "message": message
    }