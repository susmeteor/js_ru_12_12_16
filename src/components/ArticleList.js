import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import accordeon from '../decorators/accordeon'

class ArticleList extends React.Component {
    render() {
        const {articles} = this.props
        const articleElements = articles.map(article =>

            <li key={article.id}>
                <Article article={article}
                         isOpen={this.props.openArticleId == article.id}
                                             {/*Вот эту логику следовало тоже в декоратор внести*/}
                         onClick={this.props.toggleOpenArticle(this.props.openArticleId != article.id ? article.id : null)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}
export default accordeon(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
