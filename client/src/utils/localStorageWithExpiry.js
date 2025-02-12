const getStoredExpiryTime = () => {
  const storedExpiryTime = localStorage.getItem('expiry');
  if (storedExpiryTime) {
    return storedExpiryTime; 
  }
  return null; 
};

const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().split(" ")[0];
};

const checkAndRemoveExpiredData = () => {
  const expiryTime = getStoredExpiryTime();
  const currentTime = getCurrentTime();
  console.log("Stored Expiry Time:", expiryTime);

  if (expiryTime && currentTime > expiryTime) {
    localStorage.removeItem('expiry');
    return null; 
  }
  return expiryTime; 
};

export const logLocalStorageAndExpiry = () => {
  const expiryTime = checkAndRemoveExpiredData();

  if (expiryTime) {
    console.log("Stored Expiry Time (HH:mm:ss):", expiryTime);
    console.log("The stored expiry time is still valid.");
  } else {
    console.log("No valid expiry time found in localStorage.");
  }

};

export const setExpiryTime = (expiryTime) => {
  localStorage.setItem('expiry', expiryTime);
  console.log("Expiry time set to:", expiryTime);
};

checkAndRemoveExpiredData();

setInterval(() => {
  console.log("Running periodic expiry check...");
  logLocalStorageAndExpiry(); 
}, 60000); 
