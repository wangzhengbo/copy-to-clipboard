import ClipboardJS from "clipboard";

export default (text, options) => {
  return new Promise((resolve, reject) => {
    let fakeButton = document.createElement("button");

    const clipboard = new ClipboardJS(fakeButton, {
      ...options,
      text: () => text
    });

    clipboard.on("success", () => {
      fakeButton = null;
      clipboard.destroy();
      resolve();
    });

    clipboard.on("error", err => {
      fakeButton = null;
      clipboard.destroy();
      reject(err);
    });

    fakeButton.click();
  });
};
