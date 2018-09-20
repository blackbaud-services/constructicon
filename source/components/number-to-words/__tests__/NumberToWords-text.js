import NumberToWords from '..'

const numbers = [
  {
    number: 0,
    sentence: 'zero'
  },
  {
    number: 6,
    sentence: 'six'
  },
  {
    number: 11,
    sentence: 'eleven'
  },
  {
    number: 755,
    sentence: 'seven hundred and fifty-five'
  },
  {
    number: 9450,
    sentence: 'nine thousand four hundred and fifty'
  },
  {
    number: 46295,
    sentence: 'forty-six thousand two hundred and ninety-five'
  },
  {
    number: 382956,
    sentence: 'three hundred and eighty-two thousand nine hundred and fifty-six'
  },
  {
    number: 1993624,
    sentence:
      'one million nine hundred and ninety-three thousand six hundred and twenty-four'
  },
  {
    number: 14000072,
    sentence: 'fourteen million and seventy-two'
  },
  {
    number: 434500583,
    sentence:
      'four hundred and thirty-four million five hundred thousand five hundred and eighty-three'
  },
  {
    number: 1000000000,
    sentence: 'number is too large'
  }
]

describe('NumberToWords', () => {
  it('converts a number to the correct combination of words', () => {
    const wrapper = mount(
      <div>
        {numbers.map(({ number }, i) => (
          <NumberToWords key={i} number={number} />
        ))}
      </div>
    )

    const children = wrapper.find('div').children()

    expect(children).to.have.length(numbers.length)

    children.forEach((item, index) => {
      expect(item.text()).to.eql(numbers[index].sentence)
    })
  })

  it('renders number in a custom tag when one is provided', () => {
    const wrapper = mount(<NumberToWords tag='a' number={9} />)
    expect(wrapper.find('a')).to.have.length(1)
  })
})
