import sys
try:
    import fitz  # PyMuPDF
    doc = fitz.open(sys.argv[1])
    text = ""
    for page in doc:
        text += page.get_text()
    with open("resume_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
except ImportError:
    try:
        import PyPDF2
        with open(sys.argv[1], "rb") as f:
            reader = PyPDF2.PdfReader(f)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            with open("resume_text.txt", "w", encoding="utf-8") as f:
                f.write(text)
    except ImportError:
        print("Neither PyMuPDF nor PyPDF2 is installed.")
