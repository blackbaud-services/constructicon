export const formatFileSize = (bytes, precision = 1) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(Math.max(0, precision))) +
    " " +
    sizes[i]
  );
};

export const dataURIToBlob = (dataURI) => {
  let byteString;

  if (dataURI.split(",")[0].indexOf("base64") >= 0) {
    byteString = window.atob(dataURI.split(",")[1]);
  } else {
    byteString = unescape(dataURI.split(",")[1]);
  }

  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new window.Blob([ia], { type: mimeString });
};
