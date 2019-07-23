### Examples

**Standard Use**

You can use the InputSearch component to filter through a known data set

```
// components/CitySearch
const data = [
  'Adelaide',
  'Brisbane',
  'Canberra',
  'Darwin',
  'Melbourne',
  'Perth',
  'Sydney'
];

const CityResult = ({ isActive, result }) => <div style={{ padding: '1rem', background: isActive && '#f6f6f6' }}>{result}</div>;

class CitySearch extends React.Component {
  constructor () {
    super()
    this.filterCities = this.filterCities.bind(this)
    this.state = {
      results: [],
      value: null
    };
  }

  filterCities (query) {
    this.setState({
      results: data.filter((r) => r.toLowerCase().indexOf(query.toLowerCase()) !== -1),
    })
  }

  render () {
    return (
      <InputSearch
        label='Find your city'
        onSearch={this.filterCities}
        onChange={(value) => this.setState({ value })}
        ResultComponent={CityResult}
        results={this.state.results}
        value={this.state.value}
        styles={{ root: { marginBottom: '10rem' } }}
      />
    )
  }
}

// Render
<CitySearch />
```

**Asynchronous Data**

You can also use it to perform API requests to fetch relevant results

```
// components/CitySearch
const data = [
  'Adelaide',
  'Brisbane',
  'Canberra',
  'Darwin',
  'Melbourne',
  'Perth',
  'Sydney'
];

const CityResult = ({ isActive, result }) => <div style={{ padding: '1rem', background: isActive && '#f6f6f6' }}>{result}</div>;

class CitySearch extends React.Component {
  constructor () {
    super()
    this.filterCities = this.filterCities.bind(this)
    this.state = {
      results: [],
      status: null,
      value: null
    };
  }

  filterCities (query) {
    this.setState({ status: 'fetching' });
    setTimeout(() => {
      this.setState({
        results: data.filter((r) => r.toLowerCase().indexOf(query.toLowerCase()) !== -1),
        status: 'fetched'
      })
    }, 2000);
  }

  render () {
    return (
      <InputSearch
        label='Find your city'
        onSearch={this.filterCities}
        onChange={(value) => this.setState({ value })}
        ResultComponent={CityResult}
        results={this.state.results}
        status={this.state.status}
        value={this.state.value}
        styles={{ root: { marginBottom: '10rem' } }}
      />
    )
  }
}

// Render
<CitySearch />
```

**withForm**

Like other Constructicon input components, the InputSearch props are designed to play well with the withForm higher order component

```
// components/CitySearch
const data = [
  'Adelaide',
  'Brisbane',
  'Canberra',
  'Darwin',
  'Melbourne',
  'Perth',
  'Sydney'
];

const CityResult = ({ isActive, result }) => <div style={{ padding: '1rem', background: isActive && '#f6f6f6' }}>{result}</div>;

class CitySearch extends React.Component {
  constructor () {
    super()
    this.filterCities = this.filterCities.bind(this)
    this.state = {
      results: []
    };
  }

  filterCities (query) {
    this.setState({
      results: data.filter((r) => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    });
  }

  render () {
    return (
      <InputSearch
        {...this.props}
        onSearch={this.filterCities}
        ResultComponent={CityResult}
        results={this.state.results}
      />
    )
  }
}

// components/MyForm
const withForm = require('../with-form').default; // import withForm from 'constructicon/with-form'

const form = {
  fields: {
    city: {
      label: 'Find your city'
    }
  }
};

const MyForm = withForm(form)(
  ({ form }) => (
    <form>
      <CitySearch {...form.fields.city} />

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f6f6f6' }}>
        Form Values: {JSON.stringify(form.values)}
      </div>
    </form>
  )
);

// Render
<MyForm />
```

**Treatments**

The following treatments in your project's traits will be applied:

- `inputRoot` -> `root`
- `input` -> `field`
