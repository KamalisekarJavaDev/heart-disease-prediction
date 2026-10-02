import pandas as pd

# Original UCI Cleveland dataset
input_file = "processed.cleveland.data"

# Column names from the original dataset
columns = [
    "Age",
    "Sex",
    "ChestPainType",
    "RestingBP",
    "Cholesterol",
    "FastingBloodSugar",
    "RestingECG",
    "MaxHeartRate",
    "ExerciseAngina",
    "Oldpeak",
    "Slope",
    "CA",
    "Thalassemia",
    "target"
]

# Load dataset
df = pd.read_csv(
    input_file,
    names=columns,
    na_values="?"
)

print("Original dataset:")
print(df.head())
print("\nShape:", df.shape)
print("\nMissing values:")
print(df.isnull().sum())

# Remove rows containing missing values
df = df.dropna().reset_index(drop=True)

# Convert target:
# 0 = No Heart Disease
# 1,2,3,4 = Heart Disease
df["target"] = (df["target"] > 0).astype(int)

# Convert numeric columns to proper numeric types
numeric_columns = [
    "Age",
    "RestingBP",
    "Cholesterol",
    "MaxHeartRate",
    "Oldpeak",
    "CA",
    "target"
]

for column in numeric_columns:
    df[column] = pd.to_numeric(df[column], errors="coerce")

# Remove any rows that became invalid
df = df.dropna().reset_index(drop=True)

# Save cleaned dataset
df.to_csv("heart.csv", index=False)

print("\nFinal dataset:")
print(df.head())

print("\nFinal shape:", df.shape)

print("\nTarget distribution:")
print(df["target"].value_counts())

print("\nSaved successfully as heart.csv")