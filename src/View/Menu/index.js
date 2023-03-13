import React,{Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMenuItems, getIngredients } from '../../Store/Menu/action'


class Menu extends Component {
  constructor(props) {
		super(props)
	}
  componentDidMount () {
		this.props.getIngredients()
  }
  render() {
    return (
        <div>
            Menu Page
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  menu: state.Menu.menu,
  ingredients: state.Menu.ingredients
})

const mapDispatchToProps = {
	getMenuItems,
  getIngredients
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)