import { pushRouter, replaceRouter, popStateRouter } from "./routes/router.js";
import Component from "./components/base/Component.js";
import MainPage from "./pages/MainPage.js";

class App extends Component {
  template() {
    return `
      <nav class="Breadcrumb"></nav>
      <div class="Nodes"></div>
    `;
  }

  route() {
    const { pathname } = window.location;
    const $nodes = this.$target.querySelector(".Nodes");

    if (pathname === "/") {
      new MainPage({ $target: $nodes });
    }

    if (pathname.split("/")[2] === "directory") {
      const [, , , directoryId] = pathname.split("/");
      new DirectoryPage({ $target: $nodes, props: { id: directoryId } });
      return;
    }
  }

  setInitRouter() {
    this.route();

    pushRouter(() => {
      this.route();
    });
    replaceRouter(() => {
      this.route();
    });
    popStateRouter(() => {
      this.route();
    });
  }

  mounted() {
    this.setInitRouter();
  }
}

export default App;
