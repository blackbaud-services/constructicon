import useWindowSize from "..";

const UseWindowExample = () => {
  const { width, height } = useWindowSize();
  return <div width={width} height={height} />;
};

describe("useWindowSize hook", () => {
  it("returns width as a number", () => {
    const wrapper = mount(<UseWindowExample />);
    const div = wrapper.find("div");
    const width = div.prop("width");
    expect(width).to.be.a("number");
  });

  it("returns height as a number", () => {
    const wrapper = mount(<UseWindowExample />);
    const div = wrapper.find("div");
    const width = div.prop("height");
    expect(width).to.be.a("number");
  });
});
