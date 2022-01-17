import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardSaved: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkValues = this.checkValues.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.checkValues);
  }

  onSaveButtonClick() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.state;

    this.setState((state) => ({ cardSaved: [...state.cardSaved, {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo: false,
    }] }), () => {
      if (cardName) {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
          hasTrunfo: true,
        });
      } else {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardRare: 'normal',
          cardTrunfo: false,
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  checkValues() {
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    // O parseInt(string, base) converte string para número decimal.
    // Solução encontrada por pesquisa no Google.
    // Link:   https://fellipe.com/blog/uso-correto-da-funcao-do-parseint-em-javascript/
    const num1 = parseInt(cardAttr1, 10);
    const num2 = parseInt(cardAttr2, 10);
    const num3 = parseInt(cardAttr3, 10);
    const sum = num1 + num2 + num3;
    const maxNumb = 90;
    const minNumb = 0;
    const maxSum = 210;

    if (cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== ''
    && sum <= maxSum && num1 <= maxNumb && num2 <= maxNumb && num3 <= maxNumb
    && num1 >= minNumb && num2 >= minNumb && num3 >= minNumb) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardSaved,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
        />
        { cardSaved.map((card, index) => (
          <div key={ index }>
            <Card { ... card } />
          </div>)) }
      </div>
    );
  }
}

export default App;
