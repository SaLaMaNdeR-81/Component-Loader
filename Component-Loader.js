class ComponentLoader extends HTMLElement {

  connectedCallback() {
    this.ComponentLoader()
  }

  ComponentLoader(){
    const path = this.getAttribute('file');
    const CData = this.getAttribute('data') || '[]';
    const CDataformated = JSON.stringify(CData);
    fetch(path)
    .then(response => response.text())
    .then(html => {
      this.innerHTML = html;
      });
  }

  RenderData(Data){
    const Element = this.querySelector('#DataContainer')
    if(!Element) return;
    Element.innerHTML = Data
    .map(data => data)
    .join('')
  }

}

// Register the custom element
customElements.define('component-loader', ComponentLoader);
