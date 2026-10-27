import os
import shutil

DOWNLOADS = r"C:\Users\yukta\Downloads"
PREVIEWS_DIR = r"C:\Users\yukta\.gemini\antigravity-ide\brain\170b409b-1344-4a8d-b6e6-18cb5504be0c\scratch\pdf_previews"
DEST_PUBLIC = r"c:\Users\yukta\OneDrive - Vidyalankar Institute of Technology\Desktop\Dasboard\public"

os.makedirs(os.path.join(DEST_PUBLIC, "documents"), exist_ok=True)
os.makedirs(os.path.join(DEST_PUBLIC, "presentations"), exist_ok=True)
os.makedirs(os.path.join(DEST_PUBLIC, "datasets"), exist_ok=True)
os.makedirs(os.path.join(DEST_PUBLIC, "posters"), exist_ok=True)
os.makedirs(os.path.join(DEST_PUBLIC, "previews"), exist_ok=True)
os.makedirs(os.path.join(DEST_PUBLIC, "images"), exist_ok=True)

# List of mappings: (source_filename, dest_subfolder, dest_filename_safe, dest_filename_exact)
mappings = [
    ("E waste India Vs World Data Task_Class Activity.pdf", "documents", "E_waste_India_Vs_World_Data_Task_Class_Activity.pdf"),
    ("24102C0038.assign02.pdf", "posters", "Automated_Laser_Molten_Salt_PCB_Extraction.pdf"),
    ("24102C0038..pdf", "posters", "Sikkim_E_Waste_To_Wealth_Poster.pdf"),
    ("Toxic Chemicals_Any 5 1.pdf", "documents", "Toxic_Chemicals_Any_5.pdf"),
    ("sikkim_ewaste_dashboard (2).pdf", "documents", "sikkim_ewaste_dashboard.pdf"),
    ("Sikkim_Ewaste_Report_IEEE.pdf", "documents", "Sikkim_Ewaste_Report_IEEE.pdf"),
    ("State_EWaste_Tracker_Completed_Fixed.xlsx", "datasets", "State_EWaste_Tracker_Completed_Fixed.xlsx"),
    ("E_Waste_AHP_ISM_Answers (1).docx", "documents", "E_Waste_AHP_ISM_Answers.docx"),
    ("Electronics_Manufacturers_4_Column_Table.docx", "documents", "Electronics_Manufacturers_4_Column_Table.docx"),
    ("24102C0038.xlsx", "datasets", "24102C0038_Carbon_Footprint_Tracker.xlsx"),
    ("Sikkim_Ewaste_Deck.pptx", "presentations", "Sikkim_Ewaste_Deck.pptx"),
    ("E-Bin Smart Recycling.pdf", "presentations", "E_Bin_Smart_Recycling.pdf"),
    ("Technical_Paper_Review_Yukta_Padekar.pdf", "documents", "Technical_Paper_Review_Yukta_Padekar.pdf"),
    ("sikkim_ewaste_dashboard.html", "documents", "sikkim_ewaste_dashboard.html")
]

for src_name, subfolder, safe_name in mappings:
    src_path = os.path.join(DOWNLOADS, src_name)
    if os.path.exists(src_path):
        dest_safe = os.path.join(DEST_PUBLIC, subfolder, safe_name)
        shutil.copy2(src_path, dest_safe)
        
        # also copy with exact original name so faculty can download exact original name!
        dest_exact = os.path.join(DEST_PUBLIC, subfolder, src_name)
        if dest_exact != dest_safe:
            shutil.copy2(src_path, dest_exact)
        print(f"Copied: {src_name} -> {subfolder}/{safe_name} and original name")
    else:
        print(f"Warning: {src_name} not found in Downloads!")

# Copy all generated preview images
if os.path.exists(PREVIEWS_DIR):
    for f in os.listdir(PREVIEWS_DIR):
        if f.endswith(".png"):
            shutil.copy2(os.path.join(PREVIEWS_DIR, f), os.path.join(DEST_PUBLIC, "previews", f))
            print(f"Copied preview: {f}")

print("\nAsset copy complete!")
