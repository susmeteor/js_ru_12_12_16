import React from 'react'

export default function accordeon(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            ev && ev.preventDefault && ev.preventDefault()
            //а закрывать уже открытую?
            this.setState({
                openArticleId: id
            })
        }
    }
}
