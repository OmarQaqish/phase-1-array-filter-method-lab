// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}
    
function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(str.toLowerCase()));
}
    
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}