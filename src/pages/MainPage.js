import Component from "../components/base/Component.js";
import Node from "../components/Node.js";

class MainPage extends Component {
  setup() {
    this.state = {
      contentData: [],
    };
  }

  fetch() {
    // 데이터 불러와서 setState
  }

  mounted() {
    const { contentData } = this.state;
    contentData.map((content) => {
      new Node({ $target: this.$target, props: content });
    });
  }
}
export default MainPage;
