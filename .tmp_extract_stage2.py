import re
from docx import Document


document = Document(r"C:\Users\ASUS\Desktop\MTMSCI~1.DOC")
paragraphs = [paragraph.text.strip() for paragraph in document.paragraphs if paragraph.text.strip()]
starts = []
for index, text in enumerate(paragraphs):
    match = re.match(r"Câu\s+(\d+)\s+—", text)
    if match:
        starts.append((int(match.group(1)), index))

for item_index, (number, start) in enumerate(starts):
    if number < 6:
        continue
    if number > 10:
        break
    end = starts[item_index + 1][1]
    print(f"===== QUESTION {number} =====")
    print("\n".join(paragraphs[start:end]))
