import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix


# 1. Load dataset
df = pd.read_csv("heart.csv")

print("Dataset shape:", df.shape)

# 2. Separate input and target
X = df.drop("target", axis=1)
y = df["target"]


# 3. Define categorical and numerical columns
categorical_columns = [
    "Sex",
    "ChestPainType",
    "FastingBloodSugar",
    "RestingECG",
    "ExerciseAngina",
    "Slope",
    "Thalassemia"
]

numeric_columns = [
    "Age",
    "RestingBP",
    "Cholesterol",
    "MaxHeartRate",
    "Oldpeak",
    "CA"
]


# 4. Preprocessing
preprocessor = ColumnTransformer(
    transformers=[
        (
            "categorical",
            OneHotEncoder(handle_unknown="ignore", sparse_output=False),
            categorical_columns
        ),
        (
            "numeric",
            "passthrough",
            numeric_columns
        )
    ]
)


# 5. Random Forest model
model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
    class_weight="balanced"
)


# 6. Create pipeline
pipeline = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        ("model", model)
    ]
)


# 7. Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)


print("\nTraining samples:", len(X_train))
print("Testing samples:", len(X_test))


# 8. Train model
print("\nTraining Random Forest model...")

pipeline.fit(X_train, y_train)


# 9. Prediction
y_pred = pipeline.predict(X_test)


# 10. Evaluation
accuracy = accuracy_score(y_test, y_pred)

print("\n==============================")
print("MODEL PERFORMANCE")
print("==============================")

print("\nAccuracy:", round(accuracy * 100, 2), "%")

print("\nClassification Report:")
print(classification_report(y_test, y_pred))

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))


# 11. Save complete pipeline
joblib.dump(pipeline, "model.pkl")

# Save original input column names for FastAPI
joblib.dump(list(X.columns), "columns.pkl")


print("\n==============================")
print("MODEL SAVED SUCCESSFULLY")
print("==============================")

print("model.pkl   -> saved")
print("columns.pkl -> saved")