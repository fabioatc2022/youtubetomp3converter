const convertBtn = document.getElementById("convert-btn");
const videoUrlInput = document.getElementById("video-url");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const videoUrl = videoUrlInput.value;
  const regex = /^https:\/\/(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/;
  if (!regex.test(videoUrl)) {
    alert("Please enter a valid YouTube video URL.");
    return;
  }
  resultDiv.style.display = "block";
  resultDiv.innerHTML = "Converting...";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "convert.php?videoUrl=" + videoUrl);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = xhr.responseText;
        if (response === "error") {
          resultDiv.innerHTML = "An error occurred while converting the video.";
        } else {
          const downloadUrl = "downloads/" + response;
          resultDiv.innerHTML = "<a href='" + downloadUrl + "'>Download MP3</a>";
        }
      } else {
        resultDiv.innerHTML = "An error occurred while converting the video.";
      }
    }
  };
  xhr.send();
});
