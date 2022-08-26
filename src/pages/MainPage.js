import Component from "../components/base/Component.js";
import Node from "../components/Node.js";
import request from "../api/request.js";

class MainPage extends Component {
  setup() {
    this.state = {
      contentData: [],
    };
  }

  mounted() {
    const { contentData } = this.state;
    contentData.map((data) => {
      new Node({
        $target: this.$target,
        props: { type: data.type, data },
      });
    });
  }

  async fetch() {
    const res = await request("/dev");
    this.setState({ contentData: res });
  }
}
export default MainPage;
