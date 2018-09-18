import { createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'
import Calculator from './calculator.jsx'

const calcState = {
    value: 0,
    btns: [ "(", ")", "%", "AC", "1", "2", "3", "/", "4", "5", "6", "*", "7", "8", "9", "-", "0", ".", "=", "+" ]
}

const calcReducer = (state = calcState, action) => {
    switch(action.type){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value == 0 ? action.text : state.value + action.text
            }
        case 'CLEAR':
            return {
                ...state,
                value: 0
            }
        case 'EQUAL':
            return {
                ...state,
                value: eval(action.value)
            }
        default:
            return state
    }
}

const mapStateToProps = (state) => {
	return {
		value: state.value,
		btns: state.btns
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addElem: (text) => {
			dispatch({
				type: 'ADD_ELEM',
				text
			})
		},
		clear: () => {
			dispatch({
				type: 'CLEAR'
			})
		},
		equal: (value) => {
			dispatch({
				type: 'EQUAL',
				value
			})
		}
	}
}

const CalculatorApp = connect(mapStateToProps, mapDispatchToProps)(Calculator);

const store = createStore(calcReducer);

ReactDOM.render(
    <Provider store={store}>
        <CalculatorApp />
    </Provider>,
    document.getElementById('root')
)