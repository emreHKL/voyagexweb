document.getElementById("downloadBtn").addEventListener("click", function() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Redirect Android users to Google Play Store
        window.location.href = "https://play.google.com/store/apps/details?id=com.yourappname";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirect iOS users to Apple App Store
        window.location.href = "https://apps.apple.com/app/idyourappid";
    } else {
        alert("Download the app on mobile.");
    }
});


{/* 
Replace "com.yourappname" with your Google Play package name.
Replace "idyourappid" with your Apple App Store App ID. 
*/}