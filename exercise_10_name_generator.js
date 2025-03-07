function generateCompanyName(keyword) {
    const prefixes = ["Tech", "Global", "NextGen", "Innovative", "Smart", "Prime", "Elite"];
    const suffixes = ["Solutions", "Industries", "Enterprises", "Systems", "Group", "Technologies", "Labs"];

    // Randomly select prefix and suffix
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Combine them with the keyword
    return `${prefix} ${keyword} ${suffix}`;
}

// Example usage
console.log(generateCompanyName("AI"));  // Example Output: "Elite AI Systems"
