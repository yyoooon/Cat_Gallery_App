import { push } from "../routes/router.js";
import Component from "./base/Component.js";
import { createElement, addClass } from "../utils/createElement.js";

class Node extends Component {
  setup() {
    this.$node = createElement("div");
    addClass(this.$node, ["Node"]);
  }

  template() {
    const { type } = this.props;
    const { name } = this.props.data;

    if (type === "DIRECTORY") {
      return `
        <img src="./assets/directory.png" />
        <div>${name}</div>
    `;
    }
    if (type === "FILE") {
      return `
        <img src="./assets/file.png" />
        <div>${name}</div>
    `;
    }
    if (type === "PREV") {
      return `
        <img src="./assets/prev.png" />
    `;
    }
  }

  render() {
    this.$node.innerHTML = this.template();
    this.$target.appendChild(this.$node);
    this.mounted();
  }

  hadleClickDirectory() {
    const { id } = this.props;
    push(`/directory/${id}`);
  }

  hadleClickFile() {
    const { filePath } = this.props;
    console.log(filePath);
    // 모달 컴포넌트에 visibilty: true, url: filePath 전달
  }

  hadleClickPrev() {
    history.back();
  }

  setEvent() {
    const { type } = this.props;

    this.$node.addEventListener("click", () => {
      if (type === "DIRECTORY") {
        this.hadleClickDirectory();
        return;
      }
      if (type === "FILE") {
        this.hadleClickFile();
        return;
      }
      if (type === "PREV") {
        this.hadleClickPrev();
        return;
      }
    });
  }
}
export default Node;
