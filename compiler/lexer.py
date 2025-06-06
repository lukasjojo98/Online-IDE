import re

class Lexer:
    
    def __init__(self, source_code):
        self.source_code = source_code
        self.elements = []

    def parse_source_code(self):
        assignments = []
        lines = str(self.source_code).splitlines()
        for line in lines:
            line = line.replace(" ", "")
            result, r_side = line.split("=")
            match = re.search(r'(\d+)\s*([+\-*/])\s*(\d+)', r_side)
            if match:
                left_var = match.group(1)
                operator = match.group(2)
                right_var = match.group(3)
            assignment = {
                "result": result,
                "operation": f"Left: {left_var}, Operator: {operator}, Right: {right_var}",
            }
            assignments.append(assignment)
        return assignments


source_code = "foo = 5 + 2\nbar = 2 * 2"
lexer = Lexer(source_code)
lexer_result = lexer.parse_source_code()
print(lexer_result)