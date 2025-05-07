function formatString(input: string, toUpper?: boolean): string {
    if(toUpper || toUpper === undefined) return input.toUpperCase()
    
    return input.toLowerCase();
}

console.log(formatString("sohel"))
