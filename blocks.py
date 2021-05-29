def blocks():
    c = open("Testing.txt", "r").read()

    start_ls = []
    end_ls = []
    func_name = []
    func_line = []

    c.split()
    line = 1
    cnt=0
    for i in range (len(c)):
        if c[i] == '\n':
            line = line+1
            cnt=0
        else:
            cnt = cnt+1
        if c[i] == '{':
            start_ls.append(line)
        elif c[i] == '}':
            end_ls.append(line)
        elif c[i] == '(':
            j=i-1
            ls = []
            while c[j] != ' ' and c[j] != '\t' and c[j] != '\n':
                ls.append(c[j])
                j=j-1
            
            ls.reverse()
            word = "".join(ls)
            func_name.append(word)
            func_line.append(line)
            j=i+1
            while c[j] != ')':
                j = j+1
            
            while c[j] == ' ' or c[j] == '\t' or c[j] == '\n':
                j=j+1
            
            # print(c[j+1])


    n = len(end_ls)
    End_ls = []
    for i in range(0,n):
        j=0
        while(start_ls[n-i-1] > end_ls[j]):
            j = j+1
        End_ls.append(end_ls[j])
        end_ls[j] = 0
        
    End_ls.reverse()
    return start_ls, End_ls, func_name, func_line


if __name__ == "__main__":
    blocks()