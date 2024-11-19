# Component-Loader

📌 Example Code
```html
<Component-Loader class="Card" file="./component.html" />
```

📌 ComponentLoader Module Code
```js
class ComponentLoader extends HTMLElement {

  connectedCallback() {
    this.ComponentLoader()
  }

  ComponentLoader(){
    const path = this.getAttribute('file');
    fetch(path)
    .then(response => response.text())
    .then(html => {
      this.innerHTML = html;
      });
  }

}

customElements.define('component-loader', ComponentLoader);

```
