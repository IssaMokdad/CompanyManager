import React from 'react';
class DatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dateFrom: '', dateTo: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault()
        let data = {
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo
        }
        let url = new URL('http://127.0.0.1:8000/getExpensesGroupedByCategoryOnSpecificDate')
        url.search = new URLSearchParams(
            data
        )
        // let url = new URL("getExpensesGroupedByCategoryOnSpecificDate"),
        //     params = data
        // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        // console.log(url)
        this.props.fetchRequest(url, 'get').then(data => {
            this.props.handleChangeExpensesGroupedByCategory(data)
        })
    }
    handleChangeDateFrom(event) {
        let value = event.target.value
        this.setState({ dateFrom: value })
    }
    handleChangeDateTo(event) {
        let value = event.target.value
        this.setState({ dateTo: value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group form-inline'>
                    <label className='mr-1'>From</label>
                    <input className='form-control mr-2' type='date' onChange={this.handleChangeDateFrom} value={this.state.dateFrom} required />
                    <label className='mr-1'>To</label>
                    <input className='form-control ml-1' type='date' onChange={this.handleChangeDateTo} value={this.state.dateTo} required />
                    <button type='submit' className='ml-3 btn btn-dark' >
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        )
    }
}


export default DatePicker
