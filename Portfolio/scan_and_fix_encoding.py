import re
import sys

# Redirect output to avoid encoding issues with Windows console
output = []

# Read the file
with open(r"D:\Portfolio\Portfolio\cissp-domain-4.html", "r", encoding="utf-8") as f:
    content = f.read()

output.append(f"File size: {len(content)} characters\n")

# Simple character-based scan for mojibake
mojibake_chars = ['ï', 'â', 'Â']
found_count = 0

for char in mojibake_chars:
    matches = [m.start() for m in re.finditer(re.escape(char), content)]
    if matches:
        found_count += len(matches)
        output.append(f"Found {len(matches)} instance(s) of char code point: {ord(char):04x}")
        for pos in matches[:2]:
            line_num = content[:pos].count('\n') + 1
            snippet = content[max(0, pos-20):min(len(content), pos+30)]
            output.append(f"  Line {line_num}: {repr(snippet)}")

if found_count == 0:
    output.append("No mojibake characters detected. File appears clean.")
else:
    output.append(f"\nApplying re-encoding fix...")
    try:
        fixed = content.encode("cp1252").decode("utf-8")
        fixed = fixed.replace("﻿", "")

        with open(r"D:\Portfolio\Portfolio\cissp-domain-4.html", "w", encoding="utf-8") as f:
            f.write(fixed)

        output.append("File fixed and saved!")
        output.append(f"Size before: {len(content)} chars")
        output.append(f"Size after:  {len(fixed)} chars")

    except UnicodeEncodeError as e:
        output.append(f"Cannot re-encode: non-cp1252 character at position {e.start}")
    except Exception as e:
        output.append(f"Error: {str(e)}")

# Write output to log
with open(r"D:\Portfolio\Portfolio\encoding_scan.log", "w", encoding="utf-8") as log:
    log.write("\n".join(output))

# Also print to stdout (safe ASCII)
for line in output:
    try:
        print(line.encode('ascii', 'replace').decode('ascii'))
    except:
        print("[encoding output line]")
