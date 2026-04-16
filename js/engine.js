function calcBridgeNumbers(soul, personality, lifePath, birthday) {
    return {
        soulPersonality:   Math.abs(soul - personality),
        lifePathBirthday:  Math.abs(lifePath - birthday),
        detail: { soul, personality, lifePath, birthday },
    };
}