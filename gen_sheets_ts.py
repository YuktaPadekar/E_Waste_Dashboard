import json
import os

SCRATCH_JSON = r"C:\Users\yukta\.gemini\antigravity-ide\brain\170b409b-1344-4a8d-b6e6-18cb5504be0c\scratch\tracker_sheets.json"
TARGET_TS = r"c:\Users\yukta\OneDrive - Vidyalankar Institute of Technology\Desktop\Dasboard\src\data\trackerSheetsData.ts"

with open(SCRATCH_JSON, "r", encoding="utf-8") as f:
    sheets_data = json.load(f)

# write clean TS export
ts_code = "export interface TrackerSheetData {\n  [sheetName: string]: string[][];\n}\n\n"
ts_code += "export const SIKKIM_TRACKER_SHEETS: TrackerSheetData = " + json.dumps(sheets_data, ensure_ascii=False, indent=2) + ";\n"

with open(TARGET_TS, "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Generated src/data/trackerSheetsData.ts successfully!")
