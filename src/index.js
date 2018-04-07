import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BoardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    header: "Short-term stuff",
                    listId: "001",
                    cards: [
                        {
                            id: "0001", task: "Finish Web Hw", checked: true
                        },
                        {
                            id: "0002", task: "Study Newwork Administration", checked: false
                        },
                        {
                            id: "0003", task: "Work out", checked: true
                        },
                        {
                            id: "0004", task: "Have dinner with Ken", checked: false
                        },
                        {
                            id: "0005", task: "Study Macro Economics", checked: false
                        },
                    ]
                },
                {
                    header: "Long-term goal",
                    listId: "002",
                    cards: [
                        {
                            id: "0006", task: "Master RoR", checked: false
                        },
                        {
                            id: "0007", task: "Build the next Facebook", checked: true
                        },
                        {
                            id: "0008", task: "Finish side project", checked: true
                        },
                        {
                            id: "0009", task: "Sleep for 24hrs", checked: false
                        }
                    ]
                }
            ]
        };
    }
    render() {
        return (
            <div className="board-content" >
                <ListGroup data={this.state.data} />
                <ListAdderWrap data={this.state.data} />
            </div>
        );
    }
}

class ListGroup extends React.Component {
    render() {
        const listGroup = this.props.data.map(listItem => {
            return (
                <ListWrap
                    header={listItem.header}
                    cards={listItem.cards}
                    listId={listItem.listId}
                    key={listItem.listId}
                />
            )
        }, this);
        return (
            <div className="list-group">
                {listGroup}
            </div>
        )
    }
}

class ListWrap extends React.Component {
    showCardAddBtn() {
        ReactDOM.findDOMNode(this.refs.cardAdder).style.display = "none";
        ReactDOM.findDOMNode(this.refs.addingCard).style.display = "block";
    }

    hideCardAddBtn() {
        ReactDOM.findDOMNode(this.refs.cardAdder).style.display = "block";
        ReactDOM.findDOMNode(this.refs.addingCard).style.display = "none";
    }

    render() {
        return (
            <div className="list-wrap">
                <div className="list-content">
                    <ListHeader header={this.props.header} />
                    <ListCard cards={this.props.cards} />
                    <a className="card-adder-wrap" onClick={this.showCardAddBtn.bind(this)} ref="cardAdder">Add a card</a>
                    <div className="adding-card" ref="addingCard">
                        <input type="text" className="item-add-input" placeholder="Add a card..." />
                        <span className="item-add-btn">Add</span>
                        <span className="item-cancel-btn" onClick={this.hideCardAddBtn.bind(this)} >X</span>
                    </div>
                </div>
            </div>
        )
    }
}

class ListHeader extends React.Component {
    render() {
        return (
            <div className="list-header">
                <textarea className="text-area">{this.props.header}</textarea>
                <div className="list-status">一</div>
            </div>
        )
    }
}

class ListCard extends React.Component {
    render() {
        const listCard = this.props.cards.map(cardsItem => {
            return (
                <ListMember
                    id={cardsItem.id}
                    task={cardsItem.task}
                    checked={cardsItem.checked}
                    taskId={cardsItem.id}
                    key={cardsItem.id}
                />
            )
        }, this);
        return (
            <div className="list-card">
                {listCard}
            </div>
        )
    }
}

class ListMember extends React.Component {
    render() {
        return (
            <div className="list-member">
                <div className={this.props.checked ? "list-detail checked" : "list-detail"}>
                    {this.props.task}
                </div>
                <div className="list-edit">X</div>
            </div>
        );
    }
}




class ListAdderWrap extends React.Component {

    showListAddBtn() {
        // const listAdder = document.querySelector('.list-adder');
        // listAdder.style.display = "none";
        // const addingList = document.querySelector('.adding-list');
        // addingList.style.display = "block";
        // const listAdderWrap = document.querySelector('.list-adder-wrap');
        // listAdderWrap.classList.add("adding");

        ReactDOM.findDOMNode(this.refs.addingList).style.display = "block";
        ReactDOM.findDOMNode(this.refs.listAdder).style.display = "none";
        ReactDOM.findDOMNode(this.refs.listAdderWrap).classList.add("adding");
    }

    hideListAddBtn() {
        ReactDOM.findDOMNode(this.refs.addingList).style.display = "none";
        ReactDOM.findDOMNode(this.refs.listAdder).style.display = "block";
        ReactDOM.findDOMNode(this.refs.listAdderWrap).classList.remove("adding");

    }

    render() {
        var totalTodo = 0;
        this.props.data.forEach(listItem => {
            totalTodo += listItem.cards.length;
        });
        var checkedTodo = 0;
        this.props.data.forEach(listItem => {
            var checkedCard = listItem.cards.filter(cardItem => {
                return cardItem.checked;
            })
            checkedTodo += checkedCard.length;
        });
        return (
            <div className="list-adder-wrap" ref="listAdderWrap">
                <div className="adding-list" ref="addingList">
                    <input type="text" className="add-input" placeholder="Add a list..." />
                    <span className="add-btn">Save</span>
                    <span className="cancel-btn" onClick={this.hideListAddBtn.bind(this)}>X</span>
                </div>
                <a className="list-adder" onClick={this.showListAddBtn.bind(this)} ref="listAdder">Add a list</a>
                <div className="dashboard">Todo: {totalTodo - checkedTodo}
                    <br />Checked: {checkedTodo}
                </div>
            </div>
        )
    }
}












ReactDOM.render(<BoardContent />, document.getElementById('root'));