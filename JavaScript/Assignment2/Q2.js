let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase().split(" ").filter(w => w).map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
cleaned = cleaned.replace("Pro", "Pro Edition");
console.log(`Cleaned Title: ${cleaned}`);
console.log(`Length: ${cleaned.length}`);
