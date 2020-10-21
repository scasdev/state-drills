import React from 'react';

class Accordion extends React.Component {

    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: 0
    };

    handleAccordionClick(i) {
        this.setState({ currentSectionIndex: i })
    }

    renderAccordion() {
        const {currentSectionIndex} = this.state

        return this.props.sections.map((section, i) => (
            <li className='Accordion_content' key={i}>
                <button onClick={() => this.handleAccordionClick(i)}>
                    {section.title}
                </button>
                {this.renderContent(currentSectionIndex, i)}
            </li>
        )
        )
    }

    renderContent(currentSectionIndex, i) {
        if (this.state.currentSectionIndex === i) {
            return (
                <div className='content'>
                    <p>{this.props.sections[i].content}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <ul className='Accordion'>
                    {this.renderAccordion()}
                </ul>
            </div>
        )
    }

}

export default Accordion
