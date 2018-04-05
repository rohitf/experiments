# reverse polish notation parser
def rpn(input, stack):
    for val in input:
        try:
            num = float(val)
            stack.append(num)
        except ValueError:  # Not a number, pop off stack
            a,b = stack.pop(), stack.pop()
            op = str(b) + val + str(a)
            result = eval(op)
            print(op, "=", result)
            stack.append(result)

    return stack[0] if len(stack) == 1 else "ERROR. INVALID INPUT."

answer = rpn(["4", "13", "5", "/", "+"], [])
print(answer)