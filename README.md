# Project: toast-javascript - Toast Notification

**Description:** This project implements a simple toast notification using JavaScript. The notification can be configured to display success, error, warning, or information messages. The duration of the notification display can also be configured.

**Installation:**

1. Clone this repository.
2. Open the `index.html` file in a web browser.

**Usage:**

To display a notification, call the `TOAST.success()`, `TOAST.error()`, `TOAST.warn()`, or `TOAST.info()` function, passing the message you want to display and the display duration (in milliseconds). You can also pass a callback function that will be called when the notification is closed.

For example, to display a success notification with the message "Hello World !!!" for 5 seconds, you can use the following code:

```javascript
TOAST.success('Hello World !!!', 5000, () => {
  console.log("Done");
});
```


To clear all displayed notifications, call the `TOAST.clear()` function.

**Example:**

The following code shows an example of how to use the toast notification to display a success message when the user clicks a button:

```html
<button onclick="TOAST.success('Hello World !!!', 5000)">Display success notification</button>
```
```javascript
const toast = document.getElementById("toast");

function handleClick() {
  TOAST.success('Hello World !!!', 5000);
}

toast.addEventListener("click", handleClick);
```

**Contributions:**

Contributions to this project are welcome. To contribute, simply create a fork of this repository, make your changes, and submit a pull request.

**Additional Notes:**

* The notification is displayed in the bottom right corner of the screen.
* The notification is closed automatically after the specified duration.
* The callback function is called when the notification is closed.

