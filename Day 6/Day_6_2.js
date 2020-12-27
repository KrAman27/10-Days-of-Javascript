function sides(literals, ...expressions) {
    const [a,p] = expressions;
    
    const delta = Math.sqrt((p*p)-16*a);
    
    const s1 = (p + delta)/4;
    const s2 = (p - delta)/4;
    
    return [s2,s1];
}
