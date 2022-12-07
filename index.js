// Code your solution here

function findMatching(driverNames, nameToMatch) {
    return driverNames.filter(
        (driverName) => driverName.toLowerCase() === nameToMatch.toLowerCase()
    );
}

function fuzzyMatch(driverNames, startingCharacters) {
    let fuzzyMatches = driverNames.filter((driverName) =>
        driverName.startsWith(startingCharacters)
    );

    return fuzzyMatches;
}

function matchName(driverObjects, nameToMatch) {
    return driverObjects.filter(
        (driverObject) => driverObject.name === nameToMatch
    );
}
