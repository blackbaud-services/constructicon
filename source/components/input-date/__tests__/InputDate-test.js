import InputDate from "..";

describe("InputDate", () => {
  it("should render a simple input field", () => {
    const wrapper = mount(
      <InputDate label="Test Field" name="test-name" onChange={() => {}} />
    );

    const label = wrapper.find("label");
    expect(label.length).to.eql(1);
  });

  it("should set the placeholder", () => {
    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-name"
        onChange={() => {}}
        placeholder="My test placeholder"
      />
    );
    const input = wrapper.find("input");
    expect(input.prop("placeholder")).to.eql("My test placeholder");
  });

  it("should fire the onChange handler", (done) => {
    let called;
    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-name"
        onChange={() => (called = true)}
      />
    );
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "test" } });

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(called).to.eql(true);
      done();
    }, 500);
  });

  it("should render selects", () => {
    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-name"
        onChange={() => {}}
        showSelects
      />
    );

    expect(wrapper.find("select")).to.have.length(3);
  });

  it("should set the set custom attributes on the input", () => {
    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-name"
        onChange={() => {}}
        showSelects
        disabled
      />
    );

    expect(wrapper.find("select").at(0).prop("disabled")).to.eql(true);
  });

  it("should handle dates correctly", (done) => {
    let dateValue = "2018-12-31";

    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-name"
        value={dateValue}
        showSelects
        onChange={(value) => (dateValue = value)}
      />
    );
    const input = wrapper.find("select").at(1);
    input.simulate("change", { target: { value: 1 } });

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(dateValue).to.eql("2018-02-28");
      done();
    }, 500);
  });

  it("should not set date if only month is selected", (done) => {
    let dateValue;

    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-date"
        value={dateValue}
        showSelects
        onChange={(value) => (dateValue = value)}
      />
    );
    const input = wrapper.find("select").at(1);
    input.simulate("change", { target: { value: 1 } });

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(dateValue).to.eql(undefined);
      done();
    }, 500);
  });

  it("should set date if day, month and year are all selected", (done) => {
    let dateValue;

    const wrapper = mount(
      <InputDate
        label="Test Field"
        name="test-date"
        value={dateValue}
        showSelects
        onChange={(value) => (dateValue = value)}
      />
    );

    const dayInput = wrapper.find("select").at(0);
    const monthInput = wrapper.find("select").at(1);
    const yearInput = wrapper.find("select").at(2);

    dayInput.simulate("change", { target: { value: 2 } });
    monthInput.simulate("change", { target: { value: 1 } });
    yearInput.simulate("change", { target: { value: 2022 } });

    // need to wait for callback to debounce
    setTimeout(() => {
      expect(dateValue).to.eql("2022-02-02");
      done();
    }, 500);
  });
});
