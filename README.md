# Component-Loader

📌 Example Code
```html
<script src="Component-Loader.js" defer></script>
<Component-Loader class="Card" file="./component.html" />
```

📌.js Module Code
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
