import React from 'react'

import '../assets/styles/components/ShoesForm.css'

class ShoesForm extends React.Component {
  handleClick (e) {
    console.log('Button hand click')
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log('form success')
  }

  render () {
    return (
      <div className='shoesForm'>
        <h1>Nuevo Cliente</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-container'>
            <label>Nombre</label>
            <input
              type='text'
              name='name'
              autoComplete='off'
              onChange={this.props.onChange}
              value={this.props.formValue.name}
            />
          </div>

          <div className='form-container'>
            <label>Tipo de Arreglo</label>
            <input
              type='text'
              name='typeOfArrangement'
              autoComplete='off'
              onChange={this.props.onChange}
              value={this.props.formValue.typeOfArrangement}
            />
          </div>

          <div className='form-container'>
            <label>Valor</label>
            <input
              type='number'
              step='1000'
              name='value'
              autoComplete='off'
              onChange={this.props.onChange}
              value={this.props.formValue.value}
            />
          </div>

          <div className='form-container'>
            <label>Abono</label>
            <input
              type='number'
              step='1000'
              name='payment'
              autoComplete='off'
              onChange={this.props.onChange}
              value={this.props.formValue.payment}
            />
          </div>

          <div className='form-container'>
            <label>Celular</label>
            <input
              type='tel'
              name='phone'
              autoComplete='off'
              onChange={this.props.onChange}
              value={this.props.formValue.phone}
            />
          </div>

          <div className='form-container'>
            <label>Descripcion</label>
            <textarea
              type='text'
              name='description'
              autoComplete='off'
              onChange={this.props.onChange}
              className='form-description'
              rows='10'
              cols='40'
              value={this.props.formValue.description}
            />
          </div>

          <div className='form-container__date'>
            <label>Fecha</label>
            <input
              type='date'
              name='date'
              autoComplete='off'
              onChange={this.props.onChange}
              value={this.props.formValue.date}
            />
          </div>

          <button className='btn btn-primary save' onClick={this.handleClick}>
            Guardar
          </button>
        </form>
      </div>
    )
  }
}

export default ShoesForm
